$ws = New-Object -ComObject WScript.Shell
$shortcut = $ws.CreateShortcut("C:\Users\Saurav\Desktop\Brandyatra.lnk")
$shortcut.TargetPath = "C:\Users\Saurav\Desktop\branfd\Brand--main\START-BRANDYATRA.bat"
$shortcut.WorkingDirectory = "C:\Users\Saurav\Desktop\branfd\Brand--main"
$shortcut.Description = "Launching Brandyatra Website"
$shortcut.Save()
Write-Host "Shortcut created on Desktop!"
