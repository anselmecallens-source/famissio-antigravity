import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Play, ExternalLink, Search, ChevronDown, ChevronUp } from 'lucide-react';

/* ==================================================================================
   DONNÉES DES MISSIONS (Extraites de ton HTML + Tes nouvelles images Dropbox)
   ================================================================================== */
const MISSIONS_DATA = [
  {
    id: 't2025',
    year: '2025',
    title: 'Toussaint 2025',
    dioceses: "Diocèse de Limoges (Haute-Vienne), Diocèse d'Angoulême (Charente), Diocèse de Tulle (Corrèze)",
    cities: ["Confolens", "Terres-de-Haute-Charente", "La Rochefoucauld", "Limoges", "Nantiat", "Boisseuil", "Brive-la-Gaillarde"],
    text: `380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin. Ils se sont ensuite répartis entre 8 paroisses. Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques.
    Mais partout, le Seigneur était bien présent au milieu de nous. Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs.
    Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus.
    Vous retrouverez dans l'onglet "témoignages" le récit des plus belles rencontres !
    
    Quelques temps forts ont aussi marqué cette semaine : Jubilate Pop Louange venu (fidèlement !) dans le diocèse d'Angoulême, une procession des saints Holywin à Limoges, un pèlerinage et un spectacle sur la place publique à Brive-La-Gaillarde.
    
    Nous rendons grâce ! La mission remplit les coeurs de joie. Nous rentrons tous la tête dans le Ciel !`,
    image: "https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&st=plymodzr&raw=1",
    videoId: null, // "Vidéo à venir" dans le HTML
    links: [
      { label: "France Catholique", url: "https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.34.27-fi36539960x470.jpeg" },
      { label: "Le Limousin", url: "https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.35.17-fi36539970x586.jpeg" },
      { label: "France 3", url: "https://famissio-99.webself.net/file/si1759337/download/VID-20251030-WA0015-fi36539971.mp4" }
    ]
  },
  {
    id: 't2024',
    year: '2024',
    title: 'Toussaint 2024',
    dioceses: "Diocèse de Mende (Lozère), Diocèse de Rodez (Aveyron), Diocèse de Saint-Flour (Cantal), Diocèse de Séez (Orne)",
    cities: ["Massiac", "Ruynes-en-Margeride", "Saint-Chély-d’Apcher", "Marvejols", "Mende", "Millau", "Vimoutiers"],
    text: `L’édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi. Les habitants avaient le cœur ouvert et accueillaient facilement les rencontres. Les fruits ont été nombreux, la joie d’annoncer le Christ immense.
    
    Les différentes paroisses nous ont réservé un fabuleux accueil, organisé des soirées festives mémorables, concocté de magnifiques temps de mission et de bénédictions de tracteurs, fermes, commerces et cimetières !
    
    Beaucoup de Famissionnaires découvraient ces contrées et ne sont pas prêts de les oublier !
    
    Les 340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonniaient à tout rompre. Leur joie était manifeste. La semaine nous a laissé la tête dans le Ciel après avoir rencontré nos contemporains qui avaient soif d’entendre parler du Christ !`,
    image: "https://www.dropbox.com/scl/fi/4ntkl4phubtubihjzt2bo/Groupe-2024.jpg?rlkey=an0idcz0143dtd3d0eadzl3us&st=3jkf2a5r&raw=1",
    videoId: "fkal1pZgV3Q",
    links: [
      { label: "Midi Libre", url: "https://www.midilibre.fr/2024/10/11/la-mission-famissio-de-la-paroisse-saint-jacques-12253698.php" },
      { label: "Diocèse de Mende", url: "https://www.diocese-mende.fr/des-familles-missionnaires-dans-nos-paroisses/" },
      { label: "Diocèse de Saint-Flour", url: "https://diocese15.fr/blog/2024/09/allons-donc-de-toutes-les-nations-faites-des-disciples-famissio-familles-en-mission/" },
      { label: "La Lozère Nouvelle", url: "https://famissio-99.webself.net/file/si1759337/download/WhatsApp%20Image%202024-10-17%20at%2020.06.47-fi36254054.jpeg" }
    ]
  },
  {
    id: 't2023',
    year: '2023',
    title: 'Toussaint 2023',
    dioceses: "Diocèse de Limoges (Creuse)",
    cities: ["La Souterraine", "Guéret", "Aubusson", "Bourganeuf", "Chénérailles", "Gouzon"],
    text: `Pour l’édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !! Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.
    
    Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient.
    
    Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l’honneur tous les grands saints du Limousin. Nombre de Famissionnaires ont pu s’investir tout au long de l’année dans ce projet ! Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d’orgue de cette mission.
    
    Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l’œuvre. Nous rendons grâce pour tous ses bienfaits !`,
    image: "https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&st=sywqghnw&raw=1",
    videoId: null,
    links: [
      { label: "Famille chrétienne (Jan)", url: "https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf" },
      { label: "Famille chrétienne (Nov)", url: "https://famissio-99.webself.net/file/si1759337/download/2023%2011%20Famille%20chr%C3%A9tienne-fi36248538.pdf" },
      { label: "La Montagne", url: "http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/" }
    ]
  },
  {
    id: 'a2223',
    year: '2022-2023',
    title: 'Année 2022-2023',
    dioceses: "Famissio 92",
    cities: ["Villeneuve-la-Garenne"],
    text: `Famissio 92 a vécu une année merveilleuse avec les paroissiens très profonds, chaleureux, généreux et audacieux de Villeneuve-La-Garenne. Très nombreux sont ceux qui ont tenté avec confiance l’expérience de la mission. Ils nous ont édifiés.
    Leur piété et leur assurance, don de l’Esprit Saint, nous ont permis d’être témoins d’une multitude de cœurs qui s’ouvraient.
    Nous rendons gloire pour tous ces temps exceptionnels de mission, vécus tout au long de cette année !
    
    Avec leur beau pasteur, le Père Olivier Foulon, les paroissiens sont avides de poursuivre la mission et de mettre le feu à Villeneuve-La-Garenne !`,
    image: "https://famissio-99.webself.net/file/si1759337/2022%202023-fi36533472x586.png", // Image spécifique conservée
    videoId: "oEbx6esqKTs",
    links: []
  },
  {
    id: 't2022',
    year: '2022',
    title: 'Toussaint 2022',
    dioceses: "Diocèse de Digne (Alpes-de-Haute-Provence)",
    cities: ["Manosque", "Oraison", "Saint-Auban", "Barcelonnette", "Forcalquier", "Digne", "Banon"],
    text: `Pour l’édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !! Ce fut un véritable ravissement tant l’accueil reçu nous a profondément touchés, tant les liens tissés entre Famissio et les paroissiens nous ont émus, tant les paysages nous ont émerveillés !
    Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t’aime – Creuse ta foi », répartis entre 7 paroisses du diocèse.
    
    18 séminaristes, religieuse, religieux, prêtres ou diacre de tous les diocèses nous ont accompagnés pour aider les jeunes à relire leurs temps de mission et faire croître leur foi.
    
    Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles, de beaux temps de prière et de messe. Enfin, la journée s’est terminée en apothéose avec la remarquable Comédie musicale créée pour l’occasion par les diocésains : « Monseigneur Bienvenu de Miollis, un évêque missionnaire en Provence ».
    
    Tel Msg de Miollis, nous avons sillonné la région à la rencontre de ses habitants dans la rue, sur les chemins, sur les marchés, dans les cimetières, dans les EHPAD. Le nom de Jésus a été annoncé…Puisse-t-il avoir touché les cœurs !`,
    image: "https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1",
    videoId: "lYaeQevBzuU",
    links: [
      { label: "BFM TV", url: "https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html" },
      { label: "Œuvre des campagnes", url: "https://oeuvredescampagnes.fr/missions-devangelisation/famissio/" },
      { label: "Le Dauphiné", url: "https://i.imgur.com/16pFVvO.jpg" },
      { label: "RCF", url: "https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777" }
    ]
  },
  {
    id: 'a2122',
    year: '2021-2022',
    title: 'Année 2021-2022',
    dioceses: "Famissio 92",
    cities: ["Gennevilliers"],
    text: `La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres. Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit.
    Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie.
    Ils avaient soif de Dieu, ces habitants ! Ils attendaient la présence de témoins pour savoir où trouver la nourriture spirituelle dont ils avaient besoin.
    
    Le curé, le Père Jean-Baptiste, a pris les choses en main, mobilisé ses paroissiens et suscité l'enthousiasme. Les veillées de ces 5 journées ont été variées, recueillies et animées de façon extraordinaire. Les cœurs ont été touchés.
    La paroisse Saint Joseph des 4 Routes prépare d'ores et déjà des journées de missions pour l'année 2022-2023. Elle a le feu !
    Quant à Famissio 92, en route vers St Joseph de Villeneuve-La-Garenne !`,
    image: "https://famissio-99.webself.net/file/si1759337/2021%202022-fi36533470x520.png", // Image spécifique conservée
    videoId: "kzDZYmrYkP4",
    links: []
  },
  {
    id: 't2021',
    year: '2021',
    title: 'Toussaint 2021',
    dioceses: "Diocèse de Limoges (Creuse)",
    cities: ["Gouzon", "Boussac", "Genouillac", "Bourganeuf", "Eymoutiers", "Chambon-sur-Voueize"],
    text: `La mission Toussaint 2021... Une belle édition !
    180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse, sur la paroisse de Gouzon, Boussac et Genouillac.
    D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers. Un extraordinaire accueil nous a permis de vivre de fructueuses journées.
    
    Enfin, une journée diocésaine à Chambon-sur-Voueize sur le thème de la mission avec des jeunes collégiens et lycéens venus nous rejoindre pour évangéliser nous a tous portés.
    Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EPADH, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d’un spectacle...
    Vive la mission... Et vivement l'édition 2022 dans les Alpes-de-Haute-Provence !`,
    image: "https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1",
    videoId: "n74BNF8fPcw",
    links: [
      { label: "La Nef", url: "https://famissio-99.webself.net/file/si1759337/download/La%20Nef%20(%20page%2042)%20-%20Famissio-fi32558405.PNG" },
      { label: "RCF (audio)", url: "https://youtu.be/yQQwKf2tJ2A" }
    ]
  },
  {
    id: 't2020',
    year: '2020',
    title: 'Toussaint 2020',
    dioceses: "Diocèse de Séez (Orne)",
    cities: ["Alençon", "Ecouché", "L'Aigle", "Le Mêle-sur-Sarthe"],
    text: `4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial !
    Les paroisses du Mêle-sur-Sarthe (Père Pascal Durand) et de L'Aigle (Père Stéphane Cailliaux) ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon (Père Loïc Gicquel des Touches) et Ecouché (Père Alexis de Brébisson).
    Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !`,
    image: "https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&st=apf1aqw7&raw=1",
    videoId: "ngv3kXBMu5Q",
    links: [
      { label: "Aleteia", url: "https://fr.aleteia.org/2020/11/12/dans-lorne-la-mission-se-vit-aussi-avec-un-verre-de-calva/" },
      { label: "Famille chrétienne", url: "https://drive.google.com/file/d/1tdEPm5ikAnjNR8g04BLUvvyXAafsVCxN/view" },
      { label: "Communauté de l’Emmanuel", url: "https://emmanuel.info/missionnaire-en-famille-paroisses-rurales/" }
    ]
  },
  {
    id: 't2019',
    year: '2019',
    title: 'Toussaint 2019',
    dioceses: "Diocèse de Limoges (Creuse)",
    cities: ["Gouzon", "Boussac"],
    text: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
    Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne.
    Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
    image: "https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&st=ijdjpvp8&raw=1",
    videoId: "DdFKEYBhstk",
    links: [
      { label: "Boussac", url: "https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view" },
      { label: "Alençon", url: "https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view" },
      { label: "Limoges (vidéo)", url: "https://youtu.be/qnFAbNBbDOM" }
    ]
  }
];

// Coordonnées pour la carte (Extrait de ton script HTML)
const MISSION_LOCATIONS = [
  { name: "Confolens", lat: 46.0142, lon: 0.6725, missions: ["t2025"] },
  { name: "Terres-de-Haute-Charente", lat: 45.8856, lon: 0.6017, missions: ["t2025"] },
  { name: "La Rochefoucauld", lat: 45.7369, lon: 0.3833, missions: ["t2025"] },
  { name: "Limoges", lat: 45.8297, lon: 1.2614, missions: ["t2025"] },
  { name: "Nantiat", lat: 46.0078, lon: 1.1831, missions: ["t2025"] },
  { name: "Boisseuil", lat: 45.7725, lon: 1.3094, missions: ["t2025"] },
  { name: "Brive-la-Gaillarde", lat: 45.1588, lon: 1.5330, missions: ["t2025"] },
  { name: "Massiac", lat: 45.2536, lon: 3.1972, missions: ["t2024"] },
  { name: "Ruynes-en-Margeride", lat: 45.0211, lon: 3.2258, missions: ["t2024"] },
  { name: "Saint-Chély-d’Apcher", lat: 44.8025, lon: 3.2758, missions: ["t2024"] },
  { name: "Marvejols", lat: 44.5539, lon: 3.2894, missions: ["t2024"] },
  { name: "Mende", lat: 44.5186, lon: 3.4983, missions: ["t2024"] },
  { name: "Millau", lat: 44.0975, lon: 3.0775, missions: ["t2024"] },
  { name: "Vimoutiers", lat: 48.9283, lon: 0.2483, missions: ["t2024"] },
  { name: "La Souterraine", lat: 46.2386, lon: 1.4867, missions: ["t2023"] },
  { name: "Guéret", lat: 46.1703, lon: 1.8719, missions: ["t2023"] },
  { name: "Aubusson", lat: 45.9556, lon: 2.1678, missions: ["t2023"] },
  { name: "Bourganeuf", lat: 45.9536, lon: 1.7561, missions: ["t2023", "t2021"] },
  { name: "Chénérailles", lat: 46.115, lon: 2.1764, missions: ["t2023"] },
  { name: "Villeneuve-la-Garenne", lat: 48.9358, lon: 2.3392, missions: ["a2223"] },
  { name: "Manosque", lat: 43.8344, lon: 5.7836, missions: ["t2022"] },
  { name: "Oraison", lat: 43.9142, lon: 5.9181, missions: ["t2022"] },
  { name: "Saint-Auban", lat: 43.8564, lon: 6.9286, missions: ["t2022"] },
  { name: "Barcelonnette", lat: 44.3858, lon: 6.6525, missions: ["t2022"] },
  { name: "Forcalquier", lat: 43.9589, lon: 5.7797, missions: ["t2022"] },
  { name: "Digne", lat: 44.0931, lon: 6.2339, missions: ["t2022"] },
  { name: "Banon", lat: 44.0381, lon: 5.6292, missions: ["t2022"] },
  { name: "Gennevilliers", lat: 48.9256, lon: 2.2944, missions: ["a2122"] },
  { name: "Genouillac", lat: 46.2894, lon: 1.9564, missions: ["t2021"] },
  { name: "Eymoutiers", lat: 45.736, lon: 1.742, missions: ["t2021"] },
  { name: "Chambon-sur-Voueize", lat: 46.190, lon: 2.428, missions: ["t2021"] },
  { name: "Alençon", lat: 48.4322, lon: 0.0892, missions: ["t2020"] },
  { name: "Ecouché", lat: 48.7183, lon: -0.1206, missions: ["t2020"] },
  { name: "L'Aigle", lat: 48.7656, lon: 0.6267, missions: ["t2020"] },
  { name: "Le Mêle-sur-Sarthe", lat: 48.5133, lon: 0.3344, missions: ["t2020"] },
  { name: "Gouzon", lat: 46.1925, lon: 2.2389, missions: ["t2023", "t2021", "t2019"] },
  { name: "Boussac", lat: 46.3492, lon: 2.215, missions: ["t2021", "t2019"] }
];


/* ==================================================================================
   SOUS-COMPOSANT : CARTE MISSION (Gère affichage + Vidéo + Lire la suite)
   ================================================================================== */
const MissionCard = ({ mission, isHighlighted }) => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fonction pour tronquer le texte si non étendu
  const getTextDisplay = (text) => {
    if (expanded) return text;
    // Coupe grossièrement après ~300 caractères si trop long
    if (text.length < 350) return text;
    return text.substring(0, 350) + "...";
  };

  const hasLongText = mission.text.length > 350;

  return (
    <div
      id={mission.id}
      className={`bg-white rounded-3xl p-8 mb-12 shadow-sm border transition-all duration-300 
        ${isHighlighted ? 'border-orange-500 shadow-orange-100 shadow-xl ring-2 ring-orange-100' : 'border-gray-100 hover:shadow-lg'}`}
    >
      <div className="flex flex-col lg:flex-row gap-8">

        {/* COLONNE GAUCHE : TEXTE */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-black text-orange-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {mission.title}
            </h2>
          </div>

          <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wide">
            {mission.dioceses}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {mission.cities.map((city, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>

          <div className="prose prose-orange text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
            {getTextDisplay(mission.text)}
          </div>

          {hasLongText && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-orange-600 font-bold text-sm hover:underline mb-6 flex items-center gap-1"
            >
              {expanded ? (
                <>Réduire <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Lire la suite <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}

          {mission.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100">
              {mission.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-bold text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* COLONNE DROITE : MÉDIA (VIDÉO ou IMAGE) */}
        <div className="w-full lg:w-[450px] xl:w-[500px] shrink-0 order-1 lg:order-2">
          {mission.videoId ? (
            // MODE VIDÉO
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${mission.videoId}?autoplay=1&modestbranding=1&rel=0`}
                  title={mission.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              ) : (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-600/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="inline-block px-3 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm font-medium">
                      Voir la vidéo
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // MODE IMAGE SEULE (Pas de vidéo)
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                {/* Petit badge optionnel si pas de vidéo */}
                <span className="inline-block px-3 py-1 bg-white/80 text-gray-800 text-xs rounded-full backdrop-blur-sm font-medium shadow-sm">
                  Souvenir de mission
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


/* ==================================================================================
   COMPOSANT PRINCIPAL : PAGE MISSIONS
   ================================================================================== */
const MissionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMissions, setFilteredMissions] = useState(MISSIONS_DATA);
  const [highlightedId, setHighlightedId] = useState(null);

  // Ref pour la map
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // 1. Filtrage
  useEffect(() => {
    if (!searchTerm) {
      setFilteredMissions(MISSIONS_DATA);
      return;
    }
    const term = searchTerm.toLowerCase();
    const filtered = MISSIONS_DATA.filter(m =>
      m.year.includes(term) ||
      m.title.toLowerCase().includes(term) ||
      m.cities.some(c => c.toLowerCase().includes(term)) ||
      m.dioceses.toLowerCase().includes(term)
    );
    setFilteredMissions(filtered);
  }, [searchTerm]);

  // 2. Initialisation de la Carte Leaflet (Vanilla JS style pour éviter les dépendances lourdes)
  useEffect(() => {
    // Fonction pour charger les assets Leaflet dynamiquement
    const loadLeaflet = () => {
      if (window.L) {
        initMap();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      if (mapInstanceRef.current || !mapContainerRef.current) return;

      // Création de la map - Fond blanc forcé sur le container via CSS parent
      const map = window.L.map(mapContainerRef.current, {
        center: [46.6, 2.2],
        zoom: 6,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      // Tuiles claires et sans labels pour un look propre (s'intègre bien sur fond blanc)
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        opacity: 1 // S'assurer que les tuiles sont opaques
      }).addTo(map);

      mapInstanceRef.current = map;

      // Ajout des marqueurs
      const markerGroup = window.L.featureGroup().addTo(map);

      MISSION_LOCATIONS.forEach(loc => {
        // Icône personnalisée CSS
        const icon = window.L.divIcon({
          className: 'custom-map-marker',
          html: '<div class="marker-dot"></div>',
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        });

        const marker = window.L.marker([loc.lat, loc.lon], { icon: icon })
          .addTo(markerGroup);

        // Tooltip
        const years = loc.missions.map(mid => {
          const m = MISSIONS_DATA.find(md => md.id === mid);
          return m ? m.year.split('-')[0] : ''; // Prend juste l'année principale
        }).join(', ');

        marker.bindTooltip(`
          <div class="text-center">
            <div class="font-bold text-orange-700">${loc.name}</div>
            <div class="text-xs text-gray-500">${years}</div>
          </div>
        `, { direction: 'top', offset: [0, -10], className: 'custom-leaflet-tooltip' });

        // Clic sur marqueur
        marker.on('click', () => {
          const missionId = loc.missions[0]; // Prend la première mission liée
          setHighlightedId(missionId);

          // Scroll vers la mission
          const element = document.getElementById(missionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });

        markersRef.current.push({ marker, missions: loc.missions });
      });
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">

      {/* STYLES GLOBAUX POUR LA CARTE (Animation pulse + tooltip) */}
      <style>{`
        /* Fond blanc forcé pour le conteneur de la carte */
        #fam-map-container { background-color: #ffffff !important; }

        .custom-map-marker { background: transparent; border: none; }
        .marker-dot {
          width: 12px; height: 12px;
          background-color: #c82904;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(200, 41, 4, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(200, 41, 4, 0); }
          100% { box-shadow: 0 0 0 0 rgba(200, 41, 4, 0); }
        }
        .leaflet-tooltip.custom-leaflet-tooltip {
          background-color: white;
          border: 1px solid #fed7aa;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 4px 8px;
        }
        .leaflet-tooltip-top:before { border-top-color: #fed7aa; }
      `}</style>

      {/* HEADER HERO SIMPLE */}
      <div className="bg-white pb-12 pt-24 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-7xl font-black text-orange-600 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Toutes nos missions
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Depuis 2019, Famissio sillonne la France pour annoncer le Christ. Découvrez la carte de nos aventures missionnaires.
        </p>
      </div>

      {/* SECTION CARTE (Fond blanc pur) */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 text-orange-700 font-bold">
            <MapPin className="w-5 h-5" />
            <span>Carte interactive des missions</span>
          </div>

          {/* Conteneur Map avec bords arrondis et ombre douce */}
          <div
            id="fam-map-container"
            className="h-[450px] w-full rounded-3xl overflow-hidden shadow-inner border border-gray-100 relative z-0"
          >
            <div ref={mapContainerRef} className="w-full h-full bg-white" />
          </div>
        </div>
      </div>

      {/* BARRE DE RECHERCHE */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une année, une ville, un diocèse..."
              className="w-full pl-12 pr-6 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:outline-none transition-all shadow-sm text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-600 text-sm font-bold hover:underline"
              >
                Effacer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LISTE DES MISSIONS */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {filteredMissions.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-xl">Aucune mission ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                isHighlighted={highlightedId === mission.id}
              />
            ))}
          </div>
        )}
      </div>

      {/* FOOTER SIMPLE (Rappel) */}
      <div className="bg-orange-600 text-white py-12 text-center">
        <p className="font-bold opacity-80">Famissio — Oser la mission en famille</p>
      </div>

    </div>
  );
};

export default MissionsPage;
