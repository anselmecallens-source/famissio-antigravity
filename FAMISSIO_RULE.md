# Règle Git & Déploiement Famissio

Pour tout travail sur le projet `C:\Users\ansel\export-webself` :
1. Branche principale : **`main`**.
2. Après chaque modification de code/design, exécuter automatiquement :
   - `git add .`
   - `git commit -m "<explication des changements>"`
   - `git push origin main`
3. Dépôt GitHub : `https://github.com/anselmecallens-source/famissio-antigravity.git`
4. Déploiement automatique déclenché sur **Cloudflare Pages** (`https://famissio.pages.dev/`).
5. **Règle Déploiement Cloudflare Pages & Taille des Assets** :
   - Ne jamais laisser de fichiers vidéo/média > 15 Mo bruts dans `public/assets/` (cela provoque une erreur d'upload HTTP 523 sur l'API Cloudflare Pages).
   - Les médias locaux doivent être optimisés/compressés (< 3-5 Mo) pour un chargement rapide et un déploiement instantané.
   - Le fichier `public/_redirects` doit utiliser la syntaxe exacte `/* /index.html 200` (espace simple) pour le routage SPA sans avertissement.

