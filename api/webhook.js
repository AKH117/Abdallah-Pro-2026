// 🚀 Vercel Serverless Webhook Endpoint for Abdullah's Journey OS
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bot } from '../lib/bot.js';
import { registerHandlers } from '../lib/handlers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let isRegistered = false;
if (bot && !isRegistered) {
  registerHandlers(bot);
  isRegistered = true;
}

const processedUpdates = new Map();

function isUpdateDuplicate(updateId) {
  if (!updateId) return false;
  const now = Date.now();
  for (const [id, time] of processedUpdates.entries()) {
    if (now - time > 120000) processedUpdates.delete(id);
  }
  if (processedUpdates.has(updateId)) {
    return true;
  }
  processedUpdates.set(updateId, now);
  return false;
}

export default async function handler(req, res) {
  // 1. Handle Telegram Update POST
  if (req.method === 'POST') {
    try {
      if (!bot) {
        return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN is missing' });
      }

      if (req.body) {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        if (body?.update_id && isUpdateDuplicate(body.update_id)) {
          return res.status(200).json({ ok: true, duplicate: true });
        }
        await bot.handleUpdate(body);
      }

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error('Error handling Telegram webhook update:', err);
      return res.status(200).json({ ok: false, error: err.message });
    }
  }

  // 2. Handle GET request for Health Check / Webhook Registration
  if (req.method === 'GET') {
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'abdallah-pro.vercel.app';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const webhookUrl = `${protocol}://${host}/api/webhook`;

    if (req.query.set_webhook === 'true' && bot) {
      try {
        await bot.telegram.setWebhook(webhookUrl, {
          allowed_updates: ['message', 'edited_message', 'callback_query', 'poll', 'poll_answer']
        });
        await bot.telegram.setChatMenuButton({
          menuButton: {
            type: 'web_app',
            text: '📱 لوحة التحكم',
            web_app: { url: 'https://akh117.github.io/Abdallah-Pro-2026/' }
          }
        }).catch(() => {});
        const adminChatId = process.env.TELEGRAM_CHAT_ID || 1191760477;
        await bot.telegram.setChatMenuButton({
          chatId: Number(adminChatId),
          menuButton: {
            type: 'web_app',
            text: '📱 لوحة التحكم',
            web_app: { url: 'https://akh117.github.io/Abdallah-Pro-2026/' }
          }
        }).catch(() => {});
        return res.status(200).json({
          status: 'success',
          message: 'تم تفعيل الـ Webhook الخاص ببوت رحلة عبدالله وزر لوحة التحكم بنجاح!',
          webhookUrl
        });
      } catch (err) {
        return res.status(500).json({ status: 'error', message: err.message });
      }
    }

    try {
      const indexPath = path.join(rootDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        const html = fs.readFileSync(indexPath, 'utf8');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.status(200).send(html);
      }
    } catch (err) {
      console.warn('Error reading index.html in handler:', err.message);
    }

    return res.status(200).send('<h1>منظومة رحلة عبدالله OS تعمل بنجاح</h1>');
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

// 🌐 Standalone HTTP Server for Render / Railway / VPS
if (process.env.PORT) {
  import('http').then(({ default: http }) => {
    import('url').then(({ default: url }) => {
      const server = http.createServer(async (req, res) => {
        res.status = function(code) { this.statusCode = code; return this; };
        res.json = function(data) {
          this.setHeader('Content-Type', 'application/json; charset=utf-8');
          this.end(JSON.stringify(data));
        };
        res.send = function(content) {
          this.setHeader('Content-Type', 'text/html; charset=utf-8');
          this.end(content);
        };

        const parsedUrl = url.parse(req.url, true);
        req.query = parsedUrl.query || {};
        const pathname = parsedUrl.pathname || '/';

        // 🌐 Static Files for Dashboard Mini App (Serve index.html, style.css, app.js)
        if (req.method === 'GET' || req.method === 'HEAD') {
          if (pathname === '/' || pathname === '/index.html') {
            try {
              const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              return res.status(200).end(html);
            } catch (e) {
              return res.status(500).send('Error loading dashboard: ' + e.message);
            }
          }
          if (pathname === '/style.css') {
            try {
              const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf8');
              res.setHeader('Content-Type', 'text/css; charset=utf-8');
              return res.status(200).end(css);
            } catch (e) {
              return res.status(404).end('Not found');
            }
          }
          if (pathname === '/app.js') {
            try {
              const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');
              res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
              return res.status(200).end(js);
            } catch (e) {
              return res.status(404).end('Not found');
            }
          }
          if (pathname === '/config.js') {
            try {
              const js = fs.readFileSync(path.join(rootDir, 'config.js'), 'utf8');
              res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
              return res.status(200).end(js);
            } catch (e) {
              return res.status(404).end('Not found');
            }
          }
        }

        // ⏰ Route /api/cron: run scheduler cycle & return JSON
        if (pathname === '/api/cron') {
          try {
            const { runSchedulerCycle } = await import('../lib/scheduler.js');
            await runSchedulerCycle(bot);
            return res.status(200).json({
              ok: true,
              message: 'تم تشغيل دورة التذكيرات والمراجعة التلقائية بنجاح',
              timestamp: new Date().toISOString()
            });
          } catch (err) {
            console.error('[HTTP Cron Error]:', err.message);
            return res.status(500).json({ ok: false, error: err.message });
          }
        }

        // 📱 Route /api/dashboard_data
        if (pathname === '/api/dashboard_data') {
          try {
            const { default: dashHandler } = await import('./dashboard_data.js');
            return await dashHandler(req, res);
          } catch (e) {
            return res.status(500).json({ ok: false, error: e.message });
          }
        }

        // 🚀 Route /api/version: check deployed version
        if (pathname === '/api/version') {
          return res.status(200).json({
            ok: true,
            version: '3.0.0-StrictClean-Medical-English-WorshipOnly',
            timestamp: new Date().toISOString()
          });
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch (e) {
              req.body = {};
            }
            await handler(req, res);
          });
        } else {
          await handler(req, res);
        }
      });

      const port = process.env.PORT || 3000;
      server.listen(port, '0.0.0.0', async () => {
        console.log(`🚀 Abdullah's Journey OS Server listening on 0.0.0.0:${port}`);
        if (bot) {
          try {
            const current = await bot.telegram.getWebhookInfo();
            if (current.url) {
              await bot.telegram.setWebhook(current.url, {
                allowed_updates: ['message', 'edited_message', 'callback_query', 'poll', 'poll_answer']
              });
              console.log(`📡 [Webhook Verified] allowed_updates synced with poll_answer to ${current.url}`);
            }
          } catch (whErr) {
            console.warn('[Webhook Init Warn]:', whErr.message);
          }

          try {
            const webAppUrl = 'https://akh117.github.io/Abdallah-Pro-2026/';
            const btnConfig = {
              type: 'web_app',
              text: '📱 لوحة التحكم',
              web_app: { url: webAppUrl }
            };
            await bot.telegram.setChatMenuButton({ menuButton: btnConfig });
            const adminId = Number(process.env.TELEGRAM_CHAT_ID || 1191760477);
            await bot.telegram.setChatMenuButton({ chatId: adminId, menuButton: btnConfig });
            console.log(`📱 [Menu Button Verified] Set to ${webAppUrl} for default and chat ${adminId}`);
          } catch (btnErr) {
            console.warn('[Menu Button Sync Warn]:', btnErr.message);
          }
        }
      });

      // ⏰ Start Autonomous Background Scheduler Daemon (Prayers, Azkar, Quizzes, Spaced Repetition)
      import('../lib/scheduler.js').then(({ runSchedulerCycle }) => {
        const targetChatId = process.env.TELEGRAM_CHAT_ID || process.env.AUTHORIZED_USERS?.split(',')[0]?.trim() || '1191760477';
        console.log(`⏰ [Daemon Initialized] 24/7 Background Scheduler Active for Chat ID: ${targetChatId}`);
        let isRunningCycle = false;
        async function runCycle() {
          if (isRunningCycle || !bot) return;
          isRunningCycle = true;
          try {
            await runSchedulerCycle(bot, targetChatId);
          } catch (e) {
            console.error('[Daemon Error]:', e.message);
          } finally {
            isRunningCycle = false;
          }
        }
        setTimeout(runCycle, 5000);
        setInterval(runCycle, 30000);
      }).catch(err => console.error('Failed to load scheduler in standalone mode:', err));
    });
  });
}

