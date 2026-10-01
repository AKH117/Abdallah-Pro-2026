$wshell = New-Object -ComObject wscript.shell
$activated = $wshell.AppActivate('GitHub Desktop')
Start-Sleep -Milliseconds 600
if ($activated) {
    $wshell.SendKeys('^p')
    Write-Output "SUCCESS: Sent Ctrl+P to GitHub Desktop"
} else {
    Write-Output "FAILED: Window not found"
}
