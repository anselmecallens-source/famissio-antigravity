# Famissio - Application Web (React + Vite)

Site web officiel de l'association **Famissio** — Familles Missionnaires au service des paroisses rurales.

## Architecture & Technologies

- **Frontend** : React 18, Vite 6, Tailwind CSS 3, React Router DOM 6.
- **Icônes** : `lucide-react` (système unifié vectoriel).
- **SEO & Métadonnées** : `react-helmet-async`, données structurées Schema.org (JSON-LD), et génération automatique de snapshots HTML statiques pour les 5 routes principales lors du build.
- **Formulaire de contact** : Intégration Formspree avec protection anti-spam bot.

## Structure du Codebase

```text
Famissio/
├── public/                 # Assets statiques distribués par Cloudflare Pages
│   ├── assets/             # Images, vidéos presse, audios et fiches PDF
│   ├── _redirects          # Règle SPA Cloudflare Pages (/* /index.html 200)
│   ├── robots.txt          # Directives d'indexation
│   ├── sitemap.xml         # Plan du site
│   └── site.webmanifest    # Manifest PWA / mobile
├── scripts/
│   ├── generate-seo-pages.mjs   # Générateur de pages statiques SEO pour le build
│   └── generate-favicons.ps1    # Utilitaire de génération d'icônes
├── src/
│   ├── components/         # Navbar, Footer, HeroCarousel, MobileHeroV2, ProtectedPage
│   ├── pages/              # Accueil, Missions, Formation, Temoignages, Contact, Priere
│   ├── App.jsx             # Configuration des routes
│   ├── main.jsx            # Point d'entrée de l'application
│   └── index.css           # Feuille de styles globale
└── vite.config.js          # Configuration Vite avec plugin SEO
```

## Déploiement sur Cloudflare Pages

Le projet est hébergé sur le dépôt GitHub `anselmecallens-source/famissio-antigravity` (branche `main`) et connecté à **Cloudflare Pages** (`https://famissio.pages.dev/`).

- **Preset** : Vite
- **Build command** : `npm run build`
- **Output directory** : `dist`

### Routage SPA (Single Page Application)
Le fichier `public/_redirects` (`/* /index.html 200`) garantit que toutes les routes directes (`/missions`, `/formation`, `/contact`, `/temoignages`, `/priere`) se rechargent sans erreur 404.

## Développement Local

```bash
# Installation des dépendances
npm install

# Serveur de développement avec Hot Reload
npm run dev

# Vérification du code (linter)
npm run lint

# Compilation de production
npm run build
```
