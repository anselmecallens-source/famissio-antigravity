@echo off
echo Envoi en cours vers Vercel...
git add .
git commit -m "Mise a jour auto"
git push origin main
echo.
echo C'est fini ! Tu peux fermer.
pause