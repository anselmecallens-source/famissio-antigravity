$targetFolder = "C:\Users\ansel\Dropbox\Famissio\assets"
$pdfFiles = Get-ChildItem -Path $targetFolder -Filter "*.pdf" -Recurse

$qpdfPath = "C:\Program Files\qpdf 12.2.0\bin\qpdf.exe"

Write-Host "Using qpdf at: $qpdfPath"

foreach ($file in $pdfFiles) {
    $original = $file.FullName
    $tempFile = [System.IO.Path]::Combine($file.DirectoryName, "optimized_$($file.Name)")
    
    Write-Host "Optimizing: $($file.Name)"
    try {
        & $qpdfPath --linearize "$original" "$tempFile"
        
        if ($LASTEXITCODE -eq 0 -and (Test-Path "$tempFile")) {
            Move-Item "$tempFile" "$original" -Force
            Write-Host "Success: $($file.Name)"
        }
        else {
            Write-Host "Failed (exit code $LASTEXITCODE): $($file.Name)"
            if (Test-Path "$tempFile") {
                Remove-Item "$tempFile" -Force
            }
        }
    }
    catch {
        Write-Host "Error processing $($file.Name): $_"
        if (Test-Path "$tempFile") {
            Remove-Item "$tempFile" -Force
        }
    }
}
Write-Host "All done!"
