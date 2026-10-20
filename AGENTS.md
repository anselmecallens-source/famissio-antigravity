# Instructions & Architecture IA — Famissio

## 1. Règle Absolue de Déploiement (Workflow Obligatoire)
À chaque intervention demandée par l'utilisateur :
1. **Valider la compilation** : Exécuter `npm.cmd run build` (et `npm.cmd run lint`).
2. **Pousser immédiatement dès le succès** :
   ```bash
   git add .
   git commit -m "<explication claire du travail réalisé>"
   git push origin main
   ```
3. **Ne jamais laisser de modifications non poussées** à la fin de la réponse afin que le déploiement Cloudflare Pages (`https://famissio.pages.dev/`) s'actualise en direct.

## 2. Stack & Tokens de Design
- **Stack** : React 18, Vite 6, Tailwind CSS 3, React Router DOM 6.
- **Icônes** : Utiliser **uniquement `lucide-react`** (aucun script ni CDN externe dans `index.html`).
- **Couleurs clés** : `--flame`: `#c82904` (rouge), `--ember`: `#f46a07` (orange), `--cream`: `#fff8f4` (crème), `--charcoal`: `#1a1a1a` (noir texte).
- **Polices** : `'Playfair Display', serif` (titres), `'Inter', sans-serif` (corps de texte).
- **Styles globaux** : `src/index.css`.

## 3. Bonnes Pratiques & Règle Anti-Surcharge
- **Bâtir sur l'existant** : Toujours vérifier `src/components/`, `src/index.css` et `public/assets/` avant de créer du code ou d'ajouter une dépendance.
- **Zéro brouillon** : Aucun fichier temporaire (`temp_*`, `*.bak`, `.txt` de commande) dans le dépôt.
- **Règle Anti-Surcharge** : Ne **JAMAIS** transformer une demande niche ou ponctuelle de l'utilisateur en règle générale rigide qui surchargerait la documentation ou briderait les futures sessions. Seules les règles architecturales durables ont leur place ici.
- **Médias** : Compresser systématiquement les images (< 300-500 Ko, max 1280-1920px). Maximum 15 Mo par fichier sur Cloudflare Pages.

## 4. Documentation Spécialisée (À consulter uniquement si besoin)
Pour économiser vos tokens de contexte, ne lisez ce fichier **qu'en cas de bug, de doute ou d'anomalie** :
- **[`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md)** : Répertoire des 6 pièges résolus (boutons étirés par Tailwind `flex`, perte du navbar sticky avec `overflow`, flux Facebook natif et robuste, lenteur des images, redirections SPA).
