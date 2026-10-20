Add-Type -AssemblyName System.Drawing

$publicDir = "C:\Users\ansel\Documents\Codex\Famissio\public"
$srcFavicon = Join-Path $publicDir "favicon.png"

function Resize-Image($srcPath, $destPath, $size) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $dest = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::FromArgb(245, 106, 9)) # #f56a09
    $g.DrawImage($src, 0, 0, $size, $size)
    $dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

# Generate PNGs
Resize-Image $srcFavicon (Join-Path $publicDir "favicon-16x16.png") 16
Resize-Image $srcFavicon (Join-Path $publicDir "favicon-32x32.png") 32
Resize-Image $srcFavicon (Join-Path $publicDir "favicon-48x48.png") 48
Resize-Image $srcFavicon (Join-Path $publicDir "favicon-96x96.png") 96
Resize-Image $srcFavicon (Join-Path $publicDir "favicon-192x192.png") 192

# Build standard ICO file containing 16, 32, 48 PNG frames
$icoPath = Join-Path $publicDir "favicon.ico"
$pngFiles = @(
    (Join-Path $publicDir "favicon-16x16.png"),
    (Join-Path $publicDir "favicon-32x32.png"),
    (Join-Path $publicDir "favicon-48x48.png")
)

$count = $pngFiles.Count
$fs = [System.IO.File]::Create($icoPath)
$bw = New-Object System.IO.BinaryWriter($fs)

$bw.Write([uint16]0)
$bw.Write([uint16]1)
$bw.Write([uint16]$count)

$dataList = [System.Collections.Generic.List[byte[]]]::new()
foreach ($p in $pngFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($p)
    $dataList.Add($bytes)
}

$offset = 6 + ($count * 16)
for ($i = 0; $i -lt $count; $i++) {
    $bytes = $dataList[$i]
    $img = [System.Drawing.Image]::FromFile($pngFiles[$i])
    $w = [byte]$img.Width
    $h = [byte]$img.Height
    $img.Dispose()
    
    $bw.Write([byte]$w)
    $bw.Write([byte]$h)
    $bw.Write([byte]0)
    $bw.Write([byte]0)
    $bw.Write([uint16]1)
    $bw.Write([uint16]32)
    $bw.Write([uint32]$bytes.Length)
    $bw.Write([uint32]$offset)
    
    $offset += $bytes.Length
}

for ($i = 0; $i -lt $count; $i++) {
    $b = $dataList[$i]
    $bw.Write($b, 0, $b.Length)
}

$bw.Flush()
$bw.Close()
$fs.Close()

Write-Output "Favicons generated successfully."
