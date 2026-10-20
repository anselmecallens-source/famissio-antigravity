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

### 3. Intégration du flux Facebook (résolue définitivement)
* **Symptôme initial** : Widget instable, images d'actualités brisées (erreur 403 CDN Facebook expiré), logo absent, publications en double, iframe lente et boutons de repli indésirables ("si ça ne marche pas, cliquez ici").
* **Causes techniques identifiées** :
  1. Les widgets tiers (SociableKIT ou similaires) s'appuient sur des URL éphémères du CDN Facebook (`scontent.*.fbcdn.net`) dont les jetons d'accès expirent rapidement, provoquant des erreurs HTTP 403.
  2. Les iframes externes sont soumises aux bloqueurs de pub, politiques anti-pistage (Safari ITP, Firefox, Brave) et aux consentements cookies tiers.
  3. L'API externe renvoyait des publications en doublon et sans profil d'auteur.
* **Solution définitive** :
  - Remplacement de l'iframe par un composant React 100% natif : `src/components/FacebookFeed.jsx`.
  - Base de données structurée et typée des publications : `src/data/facebookPosts.js`.
  - Hébergement local des médias optimisés en WebP dans `public/assets/images/facebook/` : 0 dépendance CDN externe, 0 erreur 403, chargement instantané.
  - Intégration du logo officiel Famissio avec badge officiel, interaction directe vers les publications Facebook réelles et visionneuse photo intégrée (lightbox accessible).
  - Suppression totale des messages de secours / repli dégradés.

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
