import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

export const SEO_PAGES = [
  {
    path: '/qui-sommes-nous',
    title: 'Qui sommes-nous ? - Famissio',
    description: "Découvrez l'histoire de Famissio, née d'une intuition familiale en Inde, notre aumônier le Père Jean-Pierre Barrière et le soutien de Mgr Bozo pour les paroisses rurales.",
    canonical: 'https://famissio.pages.dev/qui-sommes-nous',
    image: 'https://famissio.pages.dev/assets/images/Mgr-Pierre-Antoine-Bozo.jpg'
  },
  {
    path: '/missions',
    title: 'Nos Missions - Famissio',
    description: 'Découvrez les diocèses et paroisses où Famissio envoie ses familles missionnaires pour accompagner les curés et évangéliser.',
    canonical: 'https://famissio.pages.dev/missions',
    image: 'https://famissio.pages.dev/assets/images/Carte_mission_2026.png'
  },
  {
    path: '/formation',
    title: 'Formation - Famissio',
    description: 'Fiches de formation pour approfondir sa foi et se préparer à la mission : fondamentaux, témoignage, objections courantes et bien plus.',
    canonical: 'https://famissio.pages.dev/formation',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/temoignages',
    title: 'Témoignages - Famissio',
    description: "Récits et retours d'expérience des familles missionnaires, paroissiens et curés ayant vécu une semaine de mission Famissio.",
    canonical: 'https://famissio.pages.dev/temoignages',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/contact',
    title: 'Contact - Famissio',
    description: "Contactez l'association Famissio pour en savoir plus, vous inscrire en mission ou inviter des missionnaires dans votre paroisse.",
    canonical: 'https://famissio.pages.dev/contact',
    image: 'https://famissio.pages.dev/og-image.png'
  },
  {
    path: '/priere',
    title: 'La Prière - Famissio',
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
