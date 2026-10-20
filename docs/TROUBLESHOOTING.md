# Journal des Pannes Résolues & Pièges Évités (Troubleshooting Famissio)

> Ce fichier est une base de connaissances à consulter **uniquement en cas de bug, de doute ou lors d'une intervention sur le CSS/médias**. Inutile de le charger pour les tâches simples.

---

### 1. Boutons qui s'étirent sur 100% de la largeur (`prayer-cta`, `timeline-expand-btn`...)
* **Symptôme** : Un bouton ou un lien prend toute la largeur de l'écran avec une ligne ou un fond démesuré.
* **Cause** : L'ajout de la classe Tailwind `flex` écrase le style CSS `display: inline-flex` en `display: flex;`.
* **Solution** : Ne jamais ajouter `flex` sur ces boutons. Laisser leur classe CSS dédiée gérer l'`inline-flex`, ou spécifier explicitement `inline-flex`.

### 2. Navbar qui ne colle plus au scroll (Perte du Sticky)
* **Symptôme** : La barre de navigation ne reste plus fixée lors du défilement ou tremble.
* **Cause** : Présence d'un `overflow-x: hidden` sur `html`, `body` ou un conteneur ancêtre (désactive nativement `position: sticky`).
* **Solution** : Ne jamais mettre `overflow-x: hidden` sur les éléments parents. Utiliser la classe `.overflow-clip-x` (`overflow-x: clip`) qui empêche les débordements sans bloquer le sticky.

### 3. Flux Facebook bloqué ou vide sur la page Contact
* **Symptôme** : Le cadre Facebook affiche une erreur ou reste blanc.
* **Cause** : Le plugin iframe direct de Facebook est bloqué par les bloqueurs de pub et les politiques anti-pistage des navigateurs récents. De plus, l'URL `facebook.com/famissio` est invalide.
* **Solution** : Conserver l'iframe **SociableKIT** (`https://widgets.sociablekit.com/facebook-page-posts/iframe/25643545`) qui assure l'affichage sans blocage tiers.

### 4. Chargement extrêmement lent / cartes blanches dans Témoignages
* **Symptôme** : Les témoignages mettent 10 secondes à afficher leurs images avec un spinner.
* **Cause** : Photos brutes d'appareil photo non compressées (jusqu'à 6,3 Mo l'unité, soit plus de 22 Mo à charger simultanément) + composant bloquant avec `opacity: 0`.
* **Solution** : Compresser les photos à 1280px max en JPEG/WebP (< 250 Ko) et utiliser `loading="lazy"` et `decoding="async"` natifs.

### 5. Erreur 404 au rechargement (F5) d'une page (`/missions`, `/formation`...)
* **Symptôme** : La navigation fonctionne en cliquant, mais F5 renvoie une page 404 Cloudflare.
* **Cause** : Mauvais format ou absence de la règle SPA.
* **Solution** : Le fichier `public/_redirects` doit contenir exactement `/* /index.html 200` avec une seule espace.

### 6. Erreur HTTP 523 à la publication sur Cloudflare Pages
* **Symptôme** : Échec d'upload lors du build Cloudflare.
* **Cause** : Présence d'un média lourd (> 15 Mo) dans `public/assets/`.
* **Solution** : Réduire et compresser les vidéos et fichiers sous 10 Mo.
