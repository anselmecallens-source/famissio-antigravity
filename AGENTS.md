# Instructions pour Famissio

## Projet
- Application React + Vite, avec React Router DOM.
- Styles globaux dans `src/index.css`. Depuis `src/components/Navbar.jsx`, l'import attendu est `../index.css`.
- Le dépôt GitHub `anselmecallens-source/famissio-antigravity`, branche `main`, est relié au projet Cloudflare Pages `famissio` (`famissio.pages.dev`).

## Modifications et mise en ligne
- Quand l'utilisateur demande une modification du site, effectuer le changement dans ce dépôt et vérifier la compilation de production (`npm run build`).
- **Règle absolue de push automatique** : À chaque modification de code ou de design demandée par l'utilisateur, dès que la compilation de production réussit (`npm.cmd run build`), **systématiquement et immédiatement** commiter et pousser sur `main` (`git add .`, `git commit -m "..."`, `git push origin main`) afin que le déploiement Cloudflare Pages se déclenche tout de suite sans attendre de demande explicite.
- Cloudflare Pages construit et publie automatiquement après le push. Cette compilation tourne chez Cloudflare; aucun serveur local ni ordinateur allumé en permanence n'est nécessaire.
- Ne jamais changer les paramètres du projet Cloudflare ou les dépendances sans raison liée à la demande.
- Si la compilation échoue, corriger le problème avant le push. Si la validation ou l'authentification bloque, expliquer clairement ce qui reste à faire.
- Ne pas ajouter de secrets ni de données privées au dépôt.
