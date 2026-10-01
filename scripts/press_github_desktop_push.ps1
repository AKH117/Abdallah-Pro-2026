Add-Type @"
using System;
using System.Runtime.InteropServices;
using System.Text;

public class WinFinder {
    [DllImport("user32.dll")]
    public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);

    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

    [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
    public static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);

    [DllImport("user32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    public static extern bool IsWindowVisible(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, int dwExtraInfo);

    public const byte VK_CONTROL = 0x11;
    public const byte VK_P = 0x50;
    public const uint KEYEVENTF_KEYUP = 0x0002;

    public static IntPtr targetHwnd = IntPtr.Zero;
    public static string foundTitle = "";

    public static bool FindAndPush() {
        targetHwnd = IntPtr.Zero;
        EnumWindows((hWnd, lParam) => {
            if (IsWindowVisible(hWnd)) {
                StringBuilder sb = new StringBuilder(256);
                GetWindowText(hWnd, sb, 256);
                string title = sb.ToString();
                if (!string.IsNullOrEmpty(title) && (title.Contains("GitHub Desktop") || title.Contains("Abdallah-Pro-2026"))) {
                    targetHwnd = hWnd;
                    foundTitle = title;
                    return false; // Stop enumeration
                }
            }
            return true;
        }, IntPtr.Zero);

        if (targetHwnd != IntPtr.Zero) {
            SetForegroundWindow(targetHwnd);
            System.Threading.Thread.Sleep(500);
            // Send Ctrl+P
            keybd_event(VK_CONTROL, 0, 0, 0);
            keybd_event(VK_P, 0, 0, 0);
            keybd_event(VK_P, 0, KEYEVENTF_KEYUP, 0);
            keybd_event(VK_CONTROL, 0, KEYEVENTF_KEYUP, 0);
            return true;
        }
        return false;
    }
}
"@

$success = [WinFinder]::FindAndPush()
if ($success) {
    Write-Output "SUCCESS: Found window '$([WinFinder]::foundTitle)' and pressed Ctrl+P"
} else {
    Write-Output "NOT_FOUND: Could not find GitHub Desktop visible window"
}
