# Famissio - Web Application (Vite + React)

Site web officiel de l'association **Famissio** - Familles Missionnaires au service des Paroisses.

## Déploiement sur Cloudflare Pages

Ce projet est configuré pour être déployé facilement sur **Cloudflare Pages**.

### Paramètres de build Cloudflare Pages
- **Framework preset** : `Vite` (ou `None`)
- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Root directory** : `/` (par défaut)

### Routage SPA (Single Page Application)
Le routage est géré automatiquement via le fichier [`public/_redirects`](public/_redirects) :
```
/* /index.html 200
```
Ce fichier est copié dans le dossier `dist/` lors du build et garantit le bon fonctionnement des sous-pages (ex: `/missions`, `/formation`, `/contact`) au rafraîchissement.

## Développement Local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler le projet pour la production
npm run build
```
