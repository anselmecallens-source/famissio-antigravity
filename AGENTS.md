# Guide d'Architecture & Manuel Collaboratif pour Agents IA — Famissio

Ce document sert de fil conducteur pour toutes les intelligences artificielles intervenant sur le projet Famissio. Son but n'est pas de brider votre créativité, mais d'assurer une **continuité fluide**, une **unité visuelle et technique** et d'éviter les régressions ou le travail en doublon.

---

## 1. Philosophie Collaborative : Bâtir sur l'existant
Le site a été développé par plusieurs IA successives. Pour travailler efficacement en équipe :
* **Toujours explorer l'existant avant de créer** : Si vous cherchez un style, une image, une icône ou une fonction, vérifiez d'abord s'il existe déjà dans `src/components/`, `src/index.css` ou `public/assets/`.
* **Respecter la cohérence globale tout en restant créatif** : Vous avez toute liberté pour améliorer l'UI, proposer de nouvelles animations ou peaufiner les textes, tant que l'identité chaleureuse et missionnaire de Famissio est préservée.
* **Ne jamais laisser de brouillons dans le dépôt** : Pas de copies temporaires (`temp_*.jsx`, `*.bak`, fichiers `.txt` de commande, scripts de test). Le dépôt doit rester propre à 100%.
* **Compléter ce guide avec discernement (Règle Anti-Surcharge)** :
  * Si vous découvrez une information structurelle pérenne, vous avez toute liberté d'enrichir ce document.
  * **ATTENTION** : Ne transformez **JAMAIS** une demande niche ou ponctuelle de l'utilisateur en règle générale pesante. Ce n'est pas parce qu'une session a passé 30 minutes sur un cas particulier qu'il faut en faire une contrainte globale qui bridera tout le monde par la suite. Gardez ce guide centré sur l'essentiel, le solide et l'utile.

---

## 2. Charte Graphique & Tokens de Design
Les couleurs et typographies officielles sont définies dans `src/index.css` :

* **Palette Principale** :
  * `--flame`: `#c82904` (Rouge vibrant principal)
  * `--ember`: `#f46a07` (Orange chaleureux de transition)
  * `--coral`: `#ff8b6b` (Corail clair pour survol et touches légères)
  * `--cream`: `#fff8f4` (Fond crème chaleureux pour contraster avec le blanc)
  * `--charcoal`: `#1a1a1a` (Noir profond pour les textes et titres sombres)
  * `--off-white-warm`: `#faf7f5` (Blanc cassé doux)

* **Typographie** :
  * Titres élégants : `'Playfair Display', serif`
  * Corps de texte : `'Inter', sans-serif`
  * Titres dynamiques / Chiffres : `'Space Grotesk', sans-serif`

* **Système d'icônes** :
  * Utiliser **uniquement `lucide-react`** (icônes vectorielles légères et cohérentes).
  * Ne pas charger FontAwesome ni ajouter de CDN externe dans `index.html`.

---

## 3. Pièges CSS & Bonnes Pratiques d'Intégration
* **Attention aux classes Tailwind combinées avec les classes CSS existantes** :
  Certains boutons (comme `.prayer-cta`, `.timeline-expand-btn`, `.slide-cta-btn`) sont configurés en `display: inline-flex`. Si vous leur ajoutez naïvement la classe Tailwind `flex`, elle écrasera l'`inline-flex` par `display: flex;` et fera s'étendre le bouton sur 100% de la largeur de l'écran. Laissez les classes de style gérer leur géométrie ou utilisez `inline-flex`.
* **Sticky Navigation & Débordements horizontaux** :
  Ne jamais poser `overflow-x: hidden` sur `html` ou `body`, car cela désactive le comportement `position: sticky` de la barre de navigation. Pour bloquer le scroll horizontal, utiliser la classe utilitaire `.overflow-clip-x` sur les conteneurs internes.
* **Composants mobiles dédiés** :
  La page d'accueil utilise un hero desktop (`fam-desktop-hero`) et un hero mobile optimisé (`MobileHeroV2`). Conserver cette séparation pour garantir une expérience tactile irréprochable.

---

## 4. Gestion des Médias & Flux Sociaux
* **Poids des images** :
  * Toujours compresser les photos importées (< 300-500 Ko) au format WebP ou JPEG optimisé (max 1280-1920px). Les photos brutes d'appareil photo (> 3 Mo) ralentissent considérablement le chargement mobile.
  * Ne jamais dépasser 15 Mo par média brut dans `public/assets/` (limite stricte d'upload Cloudflare Pages).
* **Autonomie des assets** :
  * Privilégier les fichiers locaux hébergés dans `public/assets/` plutôt que des liens externes Dropbox ou Imgur qui risquent d'expirer ou d'être bloqués.
* **Fil Facebook** :
  * Le widget officiel de la page Facebook est intégré via SociableKIT (`https://widgets.sociablekit.com/facebook-page-posts/iframe/25643545`). Ne pas remplacer par le plugin direct Facebook qui est bloqué par les politiques anti-pistage des navigateurs récents.

---

## 5. Architecture des Dossiers
```text
Famissio/
├── public/                 # Assets statiques distribués par Cloudflare Pages
│   ├── assets/             # Images, vidéos presse, audios et fiches PDF
│   ├── _redirects          # Règle SPA Cloudflare Pages (/* /index.html 200)
│   ├── robots.txt          # Directives d'indexation
│   └── sitemap.xml         # Plan du site officiel
├── scripts/
│   ├── generate-seo-pages.mjs   # Générateur de snapshots statiques pour le SEO
│   └── generate-favicons.ps1    # Utilitaire d'icônes
├── src/
│   ├── components/         # Navbar, Footer, HeroCarousel, MobileHeroV2, ProtectedPage
│   ├── pages/              # Accueil, Missions, Formation, Temoignages, Contact, Priere
│   ├── App.jsx             # Routage React Router
│   ├── main.jsx            # Point d'entrée de l'application
│   └── index.css           # Styles globaux & Tailwind
└── vite.config.js          # Build Vite & exécution du snapshot SEO
```

---

## 6. Journal des Pannes Résolues & Pièges Évités (Troubleshooting)
Consultez ce répertoire dès qu'un problème survient afin d'éviter de perdre du temps sur des pièges déjà identifiés et résolus :

1. **Boutons qui s'étirent sur toute la largeur (`prayer-cta`, `timeline-expand-btn`, boutons du carrousel...)** :
   * *Symptôme* : Un bouton prend 100% de la largeur de l'écran avec un trait noir ou fond démesuré.
   * *Cause* : L'ajout de la classe Tailwind `flex` écrase le style CSS `display: inline-flex` en `display: flex;`.
   * *Solution* : Ne pas mettre `flex` sur ces boutons. Laisser leur classe dédiée gérer l'`inline-flex`, ou spécifier explicitement `inline-flex`.

2. **Navbar qui ne colle plus au scroll (perte du sticky)** :
   * *Symptôme* : La barre de navigation ne reste plus fixée lors du défilement.
   * *Cause* : Présence d'un `overflow-x: hidden` sur `html`, `body` ou un conteneur ancêtre.
   * *Solution* : Ne jamais mettre `overflow-x: hidden` sur les éléments parents. Utiliser la classe `.overflow-clip-x` (`overflow-x: clip`) qui empêche les débordements sans bloquer le sticky.

3. **Flux Facebook bloqué ou vide sur la page Contact** :
   * *Symptôme* : Le cadre Facebook affiche une erreur ou reste blanc.
   * *Cause* : Le plugin iframe direct de Facebook est bloqué par les bloqueurs de pub et les politiques anti-pistage des navigateurs récents. De plus, l'URL `facebook.com/famissio` est invalide.
   * *Solution* : Conserver l'iframe **SociableKIT** (`https://widgets.sociablekit.com/facebook-page-posts/iframe/25643545`) qui assure l'affichage sans blocage tiers.

4. **Chargement extrêmement lent / cartes blanches dans Témoignages** :
   * *Symptôme* : Les témoignages mettent 10 secondes à afficher leurs images avec un spinner.
   * *Cause* : Photos brutes d'appareil photo non compressées (jusqu'à 6,3 Mo l'unité, soit plus de 22 Mo à charger simultanément) + composant bloquant avec `opacity: 0`.
   * *Solution* : Compresser les photos à 1280px max en JPEG/WebP (< 250 Ko) et utiliser `loading="lazy"` et `decoding="async"` natifs.

5. **Erreur 404 au rechargement (F5) d'une page (`/missions`, `/formation`...)** :
   * *Symptôme* : La navigation fonctionne en cliquant, mais F5 renvoie une page 404 Cloudflare.
   * *Cause* : Mauvais format ou absence de la règle SPA.
   * *Solution* : Le fichier `public/_redirects` doit contenir exactement `/* /index.html 200` avec une seule espace.

6. **Erreur HTTP 523 à la publication sur Cloudflare Pages** :
   * *Symptôme* : Échec d'upload lors du build Cloudflare.
   * *Cause* : Présence d'un média lourd (> 15 Mo) dans `public/assets/`.
   * *Solution* : Réduire et compresser les vidéos et fichiers sous 10 Mo.

---

## 7. Règle Absolue de Déploiement (Workflow Obligatoire)
À chaque intervention demandée par l'utilisateur :
1. **Tester la compilation** : Exécuter `npm.cmd run build` et `npm.cmd run lint`.
2. **Pousser immédiatement dès le succès** :
   ```bash
   git add .
   git commit -m "<explication claire du travail réalisé>"
   git push origin main
   ```
3. **Ne jamais laisser de modifications non poussées** à la fin de la réponse afin que le déploiement Cloudflare Pages (`https://famissio.pages.dev/`) s'actualise en direct.
