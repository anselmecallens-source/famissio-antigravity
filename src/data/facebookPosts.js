export const FACEBOOK_PAGE = {
  name: "Famissio",
  handle: "@Famissio",
  url: "https://www.facebook.com/100064620877860/",
  avatar: "/assets/images/Logo Famissio rouge.png",
  description: "Des familles en mission au cœur des paroisses",
};

/**
 * Liste des publications Facebook à afficher dans le feed.
 *
 * Champs disponibles :
 *   id        – identifiant unique (string)
 *   type      – "post" | "reel" | "video"
 *   date      – date lisible (string)
 *   isoDate   – date ISO 8601 (string)
 *   text      – texte du post (string)
 *   images    – tableau de chemins d'images locales (pour les posts photo)
 *   thumbnail – chemin d'une image de couverture (pour les reels/vidéos)
 *   url       – URL complète de la publication Facebook
 *
 * Pour les reels/vidéos, l'URL doit pointer vers :
 *   https://www.facebook.com/100064620877860/videos/XXXXXXX
 *   ou
 *   https://www.facebook.com/reel/XXXXXXX
 */
export const FACEBOOK_POSTS = [
  // ── RÉELS & VIDÉOS ──────────────────────────────────────────────────────
  // Exemple : remplace l'ID par le vrai ID du réel Famissio
  // {
  //   id: "reel-XXXXXXXXX",
  //   type: "reel",
  //   date: "15 novembre 2025",
  //   isoDate: "2025-11-15",
  //   text: "Découvrez notre Réel sur la mission Toussaint 2025 !",
  //   thumbnail: "/assets/images/facebook/post-1-1.webp",
  //   url: "https://www.facebook.com/reel/XXXXXXXXX",
  // },

  // ── POSTS PHOTOS ────────────────────────────────────────────────────────
  {
    id: "post-1265826588914692",
    type: "post",
    date: "1 novembre 2025",
    isoDate: "2025-11-01",
    text: "Que de belles rencontres pour annoncer Jésus ! Quels beaux moments de prières et de fêtes !",
    images: [
      "/assets/images/facebook/post-1-1.webp",
      "/assets/images/facebook/post-1-2.webp",
      "/assets/images/facebook/post-1-3.webp",
      "/assets/images/facebook/post-1-4.jpg",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1265826588914692",
  },
  {
    id: "post-1265543805609637",
    type: "post",
    date: "1 novembre 2025",
    isoDate: "2025-11-01",
    text: "Journée de lancement de la semaine Famissio à Brive. Adoration, messe, apéritif avec les paroissiens et l'après-midi : formation à la mission suivie d'une première mise en pratique Vous pouvez les rejoindre quand vous voulez durant la semaine, pour un temps de ressourcement ou de mission.",
    images: [
      "/assets/images/facebook/post-2-1.webp",
      "/assets/images/facebook/post-2-2.webp",
      "/assets/images/facebook/post-2-3.jpg",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1265543805609637",
  },
  {
    id: "post-1264710775692940",
    type: "post",
    date: "31 octobre 2025",
    isoDate: "2025-10-31",
    text: "Retour en images sur la procession proposée par des paroissiens de Limoges et avec la participation de Famissio, ce mercredi 29 octobre, au départ de la cathédrale Saint-Étienne de Limoges en direction de l'église du Sacré Cœur !",
    images: [
      "/assets/images/facebook/post-3-1.webp",
      "/assets/images/facebook/post-3-2.jpg",
      "/assets/images/facebook/post-3-3.jpg",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1264710775692940",
  },
  {
    id: "post-1262890319208319",
    type: "post",
    date: "29 octobre 2025",
    isoDate: "2025-10-29",
    text: "Allez, faites de toutes les nations des disciples !\nRetour sur la messe d'envoi en mission suivie d'une journée diocésaine 🔥\n\n#famille #mission #famissio #evangelisation #limoges",
    images: [
      "/assets/images/facebook/post-4-1.webp",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1262890319208319",
  },
  {
    id: "post-1069864248510928",
    type: "post",
    date: "19 mars 2025",
    isoDate: "2025-03-19",
    text: "LES Responsables de groupe Famissio se retrouvent pour se former et préparer la mission Toussaint 2026 dans le Limousin et en Charente !",
    images: [
      "/assets/images/facebook/post-5-1.webp",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1069864248510928",
  },
  {
    id: "post-1264007992429885",
    type: "post",
    date: "3 novembre 2024",
    isoDate: "2024-11-03",
    text: "Une belle semaine de mission dans les diocèses de Rodez, Mende, St Flour et Séez s'achève. Que de belles rencontres ! Quelle fraternité !",
    images: [
      "/assets/images/facebook/post-6-1.webp",
      "/assets/images/facebook/post-6-2.jpg",
      "/assets/images/facebook/post-6-3.jpg",
    ],
    url: "https://www.facebook.com/100064620877860/posts/1264007992429885",
  },
  {
    id: "post-905872641110943",
    type: "post",
    date: "1 novembre 2024",
    isoDate: "2024-11-01",
    text: "Quelle joie de s'être retrouvés entre famissionnaires pour cette journée inter diocésaine à Mende ! merci seigneur",
    images: [
      "/assets/images/facebook/post-7-1.webp",
      "/assets/images/facebook/post-7-2.webp",
    ],
    url: "https://www.facebook.com/100064620877860/posts/905872641110943",
  },
  {
    id: "post-864458265878853",
    type: "post",
    date: "29 octobre 2024",
    isoDate: "2024-10-29",
    text: "Jour 2 pour les famissionnaires en Lozère, avec la bénédiction des cimetières clôturé par une belle veillée",
    images: [
      "/assets/images/facebook/post-8-1.webp",
      "/assets/images/facebook/post-8-2.jpg",
    ],
    url: "https://www.facebook.com/100064620877860/posts/864458265878853",
  },
];
