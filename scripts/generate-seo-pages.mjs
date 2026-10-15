import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

export const SEO_PAGES = [
  {
    path: '/formation',
    title: 'Catalogue de Formation - Famissio | 18 Fiches & FAQ Mission',
    description: 'Découvrez le catalogue complet de formations Famissio : fiches téléchargeables et réponses aux questions fondamentales de la foi et de la mission.',
    canonical: 'https://famissio.pages.dev/formation',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/missions',
    title: 'Nos Missions - Famissio | Découvrir nos missions en France',
    description: 'Découvrez les missions paroissiales Famissio à travers la France : Limoges, La Rochelle, Angoulême, Tulle et dans les diocèses ruraux.',
    canonical: 'https://famissio.pages.dev/missions',
    image: 'https://famissio.pages.dev/assets/images/Carte_mission_2026.png'
  },
  {
    path: '/temoignages',
    title: 'Témoignages - Famissio | Expériences et récits de mission',
    description: 'Découvrez les témoignages émouvants des Famissionnaires, paroissiens et prêtres touchés par les semaines de mission Famissio.',
    canonical: 'https://famissio.pages.dev/temoignages',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/contact',
    title: 'Contact & Inscription - Famissio | Rejoindre une mission',
    description: "Contactez l'association Famissio ou inscrivez votre famille / paroisse pour rejoindre les prochaines missions rurales.",
    canonical: 'https://famissio.pages.dev/contact',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/priere',
    title: 'La Prière Famissio - Audio, Paroles & Partition',
    description: 'Écoutez la prière Famissio, découvrez ses paroles et téléchargez la partition pour accompagner les missions en musique.',
    canonical: 'https://famissio.pages.dev/priere',
    image: 'https://famissio.pages.dev/og-image.png'
  }
];

export function generateSeoPages() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.warn(`[SEO Generator] index.html not found in ${distDir}`);
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  for (const page of SEO_PAGES) {
    let html = baseHtml;

    // Replace title
    html = html.replace(/<title[^>]*>.*?<\/title>/i, `<title data-rh="true">${page.title}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta[^>]*name=["']description["'][^>]*>/i,
      `<meta data-rh="true" name="description" content="${page.description}" />`
    );

    // Replace canonical link
    html = html.replace(
      /<link[^>]*rel=["']canonical["'][^>]*>/i,
      `<link data-rh="true" rel="canonical" href="${page.canonical}" />`
    );

    // Replace OpenGraph tags
    html = html.replace(
      /<meta[^>]*property=["']og:title["'][^>]*>/i,
      `<meta data-rh="true" property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta[^>]*property=["']og:description["'][^>]*>/i,
      `<meta data-rh="true" property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta[^>]*property=["']og:url["'][^>]*>/i,
      `<meta data-rh="true" property="og:url" content="${page.canonical}" />`
    );
    html = html.replace(
      /<meta[^>]*property=["']og:image["'][^>]*>/i,
      `<meta data-rh="true" property="og:image" content="${page.image}" />`
    );

    // Replace Twitter tags
    html = html.replace(
      /<meta[^>]*name=["']twitter:title["'][^>]*>/i,
      `<meta data-rh="true" name="twitter:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta[^>]*name=["']twitter:description["'][^>]*>/i,
      `<meta data-rh="true" name="twitter:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta[^>]*name=["']twitter:image["'][^>]*>/i,
      `<meta data-rh="true" name="twitter:image" content="${page.image}" />`
    );

    // Destination paths
    const routeSlug = page.path.replace(/^\//, '');
    const pageDir = path.join(distDir, routeSlug);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // 1. Write dist/<route>/index.html (e.g. dist/formation/index.html)
    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');

    // 2. Write dist/<route>.html (e.g. dist/formation.html)
    fs.writeFileSync(path.join(distDir, `${routeSlug}.html`), html, 'utf-8');

    console.log(`[SEO Generator] Generated static SEO page for ${page.path} -> ${page.canonical}`);
  }
}

// Direct execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSeoPages();
}
