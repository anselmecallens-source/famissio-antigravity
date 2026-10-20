# Guide d'Architecture & Instructions pour Agents IA — Famissio

## 1. Contexte du Projet
- **Stack** : React 18, Vite 6, Tailwind CSS 3, React Router DOM 6, React Helmet Async.
- **Icônes** : Système unifié avec `lucide-react` (ne pas rajouter FontAwesome ni de CDN externe).
- **Styles** : Les styles globaux et animations sont centralisés dans `src/index.css`.
- **Hébergement & Déploiement** : GitHub `anselmecallens-source/famissio-antigravity` (branche `main`) relié à Cloudflare Pages (`famissio.pages.dev`).

## 2. Structure des Dossiers
```
famissio/
├── public/                # Assets statiques servis directement à la racine
│   ├── assets/            # Images, vidéos, fiches PDF et audios
│   ├── _redirects         # Routage SPA Cloudflare Pages (/* /index.html 200)
│   ├── robots.txt         # Directives moteurs de recherche
│   └── sitemap.xml        # Sitemap officiel
├── scripts/               # Scripts d'automatisation
│   ├── generate-seo-pages.mjs   # Génération des pages statiques SEO
│   └── generate-favicons.ps1    # Utilitaire favicons
├── src/
│   ├── components/        # Navbar, Footer, HeroCarousel, MobileHeroV2, ProtectedPage
│   ├── pages/             # Accueil, Missions, Formation, Temoignages, Contact, Priere
│   ├── App.jsx            # Routage et ScrollToTop
│   ├── main.jsx           # Montage React et HelmetProvider
│   └── index.css          # Styles globaux et classes utilitaires
└── vite.config.js         # Configuration Vite + plugin automatique de génération SEO
```

## 3. Bonnes Pratiques & Interdictions pour toute IA
- **Pas de fichiers temporaires ni de doublons** : Ne JAMAIS laisser de fichiers de travail (`temp_*.jsx`, `*.bak`, `*.txt`, scripts temporaires) dans le dépôt.
- **Pas de dépendances inutiles** : Privilégier les composants vectoriels SVGs et `lucide-react`. Ne pas injecter de scripts CDN non sollicités dans `index.html`.
- **Assets multimédias** :
  - Privilégier toujours les fichiers locaux dans `public/assets/` plutôt que des liens temporaires Dropbox ou Imgur.
  - Taille maximale par média pour Cloudflare Pages : < 15 Mo (idéalement compressé en .webp / .mp4 optimisé).
- **Build & SEO** : La commande `npm run build` lance Vite qui génère automatiquement les 5 pages SEO pré-rendues grâce au hook `closeBundle()` du plugin SEO.

## 4. Règle Absolue de Déploiement (Workflow Obligatoire)
À chaque modification de code ou de design demandée :
1. Vérifier la compilation : `npm.cmd run build` (et le linter `npm.cmd run lint`).
2. Dès que la compilation réussit, **systématiquement et immédiatement commiter et pousser sur `main`** :
   ```bash
   git add .
   git commit -m "..."
   git push origin main
   ```
3. Ne jamais laisser de modifications non poussées à la fin de l'intervention afin que le déploiement Cloudflare Pages s'actualise immédiatement.
