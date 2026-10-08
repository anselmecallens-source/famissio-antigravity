# Instructions pour Famissio

## Projet
- Application React + Vite, avec React Router DOM.
- Styles globaux dans `src/index.css`. Depuis `src/components/Navbar.jsx`, l'import attendu est `../index.css`.
- Le dépôt GitHub `anselmecallens-source/famissio-antigravity`, branche `main`, est relié au projet Cloudflare Pages `famissio` (`famissio.pages.dev`).

## Modifications et mise en ligne
- Quand l'utilisateur demande une modification du site, effectuer le changement dans ce dépôt et vérifier la compilation de production (`npm run build`).
- Publier sur `main` uniquement dans le cadre d'une demande explicite de modification destinée au site en ligne. Utiliser un commit clair puis `git push origin main`.
- Cloudflare Pages construit et publie automatiquement après le push. Cette compilation tourne chez Cloudflare; aucun serveur local ni ordinateur allumé en permanence n'est nécessaire.
- Ne jamais changer les paramètres du projet Cloudflare ou les dépendances sans raison liée à la demande.
- Si la compilation échoue, corriger le problème avant le push. Si la validation ou l'authentification bloque, expliquer clairement ce qui reste à faire.
- Ne pas ajouter de secrets ni de données privées au dépôt.
