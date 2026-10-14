# Instructions et Règles pour Famissio (Antigravity & Gemini)

## Projet
- Application React + Vite, avec React Router DOM.
- Styles globaux dans `src/index.css`. Depuis `src/components/Navbar.jsx`, l'import attendu est `../index.css`.
- Le dépôt GitHub `anselmecallens-source/famissio-antigravity`, branche `main`, est relié au projet Cloudflare Pages `famissio` (`famissio.pages.dev`).

## Règle Absolue de Commit et Push Automatique
- **SYSTÉMATIQUE À CHAQUE TÂCHE** : À chaque modification de code ou de design demandée par l'utilisateur :
  1. Effectuer les modifications demandées.
  2. Valider systématiquement la compilation de production (`npm.cmd run build`).
  3. Dès que la compilation réussit, **systématiquement et immédiatement commiter et pusher sur GitHub** :
     - `git add .`
     - `git commit -m "<description claire des changements>"`
     - `git push origin main`
  4. L'utilisateur ne doit JAMAIS avoir à demander de pusher : le push sur `origin main` doit être fait à la fin de chaque tâche pour que le déploiement Cloudflare Pages soit instantané.
- Si la compilation échoue, corriger l'erreur avant de pusher.
- Ne pas ajouter de secrets ni de données privées au dépôt.
