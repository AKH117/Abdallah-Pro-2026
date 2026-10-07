$src = Get-Content 'scripts\CredReader.cs' -Raw
Add-Type -TypeDefinition $src

$token = [CredReader]::GetCredentialSecretUtf8('GitHub - https://api.github.com/AKH117')
if (-not $token) {
    $token = [CredReader]::GetCredentialSecret('GitHub - https://api.github.com/AKH117')
}
if (-not $token) {
    $token = [CredReader]::GetCredentialSecretUtf8('git:https://github.com')
}

if ($token) {
    $token = $token.Trim()
    Write-Output "Found token from GitHub Desktop (length: $($token.Length))."
    $cleanToken = [System.Uri]::EscapeDataString($token)
    $pushUrl = "https://${cleanToken}@github.com/AKH117/Abdallah-Pro-2026.git"
    git push $pushUrl main
    if ($LASTEXITCODE -eq 0) {
        Write-Output "🎉 SUCCESS: Pushed to GitHub successfully!"
    } else {
        Write-Output "Git push returned exit code: $LASTEXITCODE"
    }
} else {
    Write-Output "Error: No token found."
}
