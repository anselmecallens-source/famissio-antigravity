import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, MapPin, Users, Calendar, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { ANNOUNCED_MISSION } from '../data/announcedMission';
import MissionsFranceMap from '../components/MissionsFranceMap';
import '../components/MissionsFranceMap.css';

// ─── Composant Prochaine Mission (DA Famissio, pleine largeur & animations) ──
function ProchaineMissionSection({ missions, onOpenMission }) {
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const [titleEntered, setTitleEntered] = useState(false);
  const [mapEntered, setMapEntered] = useState(false);

  // Reveal Laval once when it enters the viewport; keep the rest of the title still.
  useEffect(() => {
    const title = titleRef.current;
    const map = mapRef.current;
    if (!title || !map || !('IntersectionObserver' in window)) {
      setTitleEntered(true);
      setMapEntered(true);
      return undefined;
    }

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setTitleEntered(true);
      titleObserver.disconnect();
    }, { threshold: 0.5 });
    const mapObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setMapEntered(true);
      mapObserver.disconnect();
    }, { threshold: 0.08 });
    titleObserver.observe(title);
    mapObserver.observe(map);

    return () => {
      titleObserver.disconnect();
      mapObserver.disconnect();
    };
  }, []);

  return (
    <section className="pm-section" id="nouvelle-mission">
      {/* Nappes lumineuses ambrées douces */}
      <div className="pm-bg">
        <i />
        <i />
        <i />
      </div>
      <div className="pm-grain" />

      <div className="pm-container">
        {/* Surtitre éditorial épuré */}
        <div className="pm-eyebrow">
          <span className="pm-eyebrow-line" aria-hidden="true" />
          <span className="pm-eyebrow-text">Prochaine mission · {ANNOUNCED_MISSION.year}</span>
          <span className="pm-eyebrow-line" aria-hidden="true" />
        </div>

        {/* Grand titre expressif */}
        <h2 ref={titleRef} className={`pm-title${titleEntered ? ' is-visible' : ''}`} aria-label={`Le diocèse de ${ANNOUNCED_MISSION.place} ${ANNOUNCED_MISSION.titleLine}`}>
          <span className="ln pm-title-first">Le diocèse de <span className="pm-title-place">{ANNOUNCED_MISSION.place}</span></span>
          <span className="ln pm-title-welcome">{ANNOUNCED_MISSION.titleLine}</span>
        </h2>

        {/* Info date & localisation */}
        <div className="pm-meta-bar">
          <div className="pm-meta-item">
            <Calendar size={18} className="pm-meta-icon" />
            <span className="pm-meta-strong">{ANNOUNCED_MISSION.dates}</span>
          </div>
          <span className="pm-meta-sep">·</span>
          <div className="pm-meta-item">
            <MapPin size={18} className="pm-meta-icon" />
            <span>{ANNOUNCED_MISSION.territory}</span>
          </div>
        </div>

        {/* Texte d'annonce fort et aéré */}
        <p className="pm-description">
          {ANNOUNCED_MISSION.description}
        </p>

        {/* CARTE PLEINE LARGEUR (sans superposition, espace dédié généreux) */}
        <div ref={mapRef} className={`pm-map-wrapper${mapEntered ? ' pm-map--inview' : ''}`}>
          <div className="pm-map-card">
            <div className="pm-map-embed">
              <MissionsFranceMap missions={missions} onOpenMission={onOpenMission} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const isMissionModalOpen = Boolean(selectedMission);

  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setIsVideoPlaying(false);
  };

  const handleCloseMission = () => {
    setSelectedMission(null);
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    if (!isMissionModalOpen) return undefined;
    const scrollY = window.scrollY;
    const body = document.body;
    const root = document.documentElement;
    body.classList.add('modal-open');
    root.classList.add('modal-open');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handleCloseMission();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('modal-open');
      root.classList.remove('modal-open');
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      root.style.overflow = '';
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.setProperty('scroll-behavior', 'auto', 'important');
      window.scrollTo({ left: 0, top: scrollY, behavior: 'instant' });
      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior;
      });
    };
  }, [isMissionModalOpen]);

  const toggleVideo = () => setIsVideoPlaying(!isVideoPlaying);

  const navigateMission = (direction, e) => {
    e.stopPropagation();
    if (!selectedMission) return;
    setIsVideoPlaying(false);
    const allVisible = [...toussaintMissions, ...yearMissions];
    const currentIndex = allVisible.findIndex(m => m.id === selectedMission.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % allVisible.length;
    } else {
      nextIndex = (currentIndex - 1 + allVisible.length) % allVisible.length;
    }
    setSelectedMission(allVisible[nextIndex]);
  };

  const missions = [
    {
      id: 10,
      category: 'toussaint',
      year: '2026',
      date: 'Toussaint',
      location: 'Charente-Maritime, Charente & Corrèze',
      diocese: 'La Rochelle, Angoulême, Tulle',
      participants: '400',
      image: '/assets/images/Groupe vue du haut.webp',
      cities: ['Saintes', 'Surgères', 'Fouras', 'Île Madame', 'Jarnac', 'Brive-la-Gaillarde'],
      story: `Pour cette édition, ce sont 400 Famissionnaires qui se sont retrouvés à Saintes autour de Monseigneur Bozo pour une consécration aux coeurs immaculés de Jésus et de Marie et pour un envoi en mission. Ils se sont ensuite répartis entre 6 paroisses du diocèse de La Rochelle, 1 paroisse à Jarnac dans celui d'Angoulême et 1 dernière à Brive-La-Gaillarde dans le diocèse de Tulle.
      
      Quelques temps forts ont aussi marqué cette semaine : des processions des saints Holywin, un pèlerinage à l'Ile Madame (en mémoire des prêtres martyrs déportés), des spectacles de théâtre sur les saints ou sur l'au-delà, un grand jeu de "Chasse aux saints" avec la complicité des commerçants de Surgères, une procession eucharistique, la confection de sacrés-coeurs en métal retourné, des tournois de foot, les inscriptions sur le sable "Jésus t'aime" sur les plages de Fouras...
      
      Sans compter toutes les démarches habituelles de Famissio : les visitations, les porte-à-porte, les rencontres dans les cimetières, dans les EHPAD, sur les marchés, dans les fermes, sur les places publiques...
      
      Les beaux temps d'adoration, de louanges, de chapelet, laudes, complies rythmaient et nourrissaient chacune de nos journées. Se remplir du Seigneur pour mieux le donner ! Monseigneur Bozo nous rappelait les paroles du Curé d'Ars : "être missionnaire, c'est laisser déborder son coeur".
      
      Famissionnaires comme paroissiens accueillants, nous rentrons tous le coeur en joie, avec l'irrésistible envie de vivre la mission dans notre quotidien.
      
      Gloire à Dieu. Et vive la mission !`,
      video: null,
      links: [
        { name: 'La Montagne (Cosnac)', url: '/assets/Articles%20missions/La%20Montagne%20-%20Cosnac%202026.jpg' },
        { name: 'La Montagne (Brive Holywins)', url: '/assets/Articles%20missions/La%20Montagne%20-%20Brive%20Holywins%202026.jpg' },
        { name: 'La Montagne (Page Brive)', url: '/assets/Articles%20missions/La%20Montagne%20-%20Page%20Brive%202026.jpg' }
      ],
      size: 'large'
    },
    {
      id: 1,
      category: 'toussaint',
      year: '2025',
      date: 'Toussaint',
      location: 'Limousin & Charente',
      diocese: 'Limoges, Angoulême, Tulle',
      participants: '380',
      image: '/assets/images/Groupe 2025.webp',
      cities: ['Confolens', 'Terres-de-Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive-la-Gaillarde'],
      story: `380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin. Ils se sont ensuite répartis entre 8 paroisses.
      
      Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques. Mais partout, le Seigneur était bien présent au milieu de nous. Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs.
      
      Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus.
      
      Quelques temps forts ont aussi marqué cette semaine : Jubilate Pop Louange venu (fidèlement !) dans le diocèse d'Angoulême, une procession des saints Holywin à Limoges, un pèlerinage et un spectacle sur la place publique à Brive-La-Gaillarde.
      
      Nous rendons grâce ! La mission remplit les coeurs de joie. Nous rentrons tous la tête dans le Ciel !`,
      video: null,
      links: [
        { name: 'France Catholique', url: '/assets/Articles%20missions/France%20Catholique%202025.png' },
        { name: 'Le Limousin', url: '/assets/Articles%20missions/Le%20Limousin%202025.png' },
        { name: 'France 3', url: '/assets/Articles%20missions/France%203%20-%202025.mp4' }
      ],
      size: 'medium'
    },
    {
      id: 2,
      category: 'toussaint',
      year: '2024',
      date: 'Toussaint',
      location: 'Lozère, Aveyron, Cantal, Orne',
      diocese: 'Mende, Rodez, Saint-Flour, Séez',
      participants: '340',
      image: '/assets/images/Groupe 2024 .webp',
      cities: ['Massiac', 'Ruynes-en-Margeride', 'Saint-Chély-d\'Apcher', 'Marvejols', 'Mende', 'Millau', 'Vimoutiers'],
      story: `L'édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi. Les habitants avaient le cœur ouvert et accueillaient facilement les rencontres. Les fruits ont été nombreux, la joie d'annoncer le Christ immense.
      
      Les différentes paroisses nous ont réservé un fabuleux accueil, organisé des soirées festives mémorables, concocté de magnifiques temps de mission et de bénédictions de tracteurs, fermes, commerces et cimetières !
      
      Beaucoup de Famissionnaires découvraient ces contrées et ne sont pas prêts de les oublier !
      
      Les 340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonnaient à tout rompre. Leur joie était manifeste. La semaine nous a laissé la tête dans le Ciel après avoir rencontré nos contemporains qui avaient soif d'entendre parler du Christ !`,
      video: 'fkal1pZgV3Q',
      links: [
        { name: 'Midi Libre', url: 'https://www.midilibre.fr/2024/10/11/la-mission-famissio-de-la-paroisse-saint-jacques-12253698.php' },
        { name: 'Diocèse de Mende', url: 'https://www.diocese-mende.fr/des-familles-missionnaires-dans-nos-paroisses/' },
        { name: 'Diocèse de Saint-Flour', url: 'https://diocese15.fr/blog/2024/09/allons-donc-de-toutes-les-nations-faites-des-disciples-famissio-familles-en-mission/' },
        { name: 'La Lozère Nouvelle', url: '/assets/Articles%20missions/La%20Lozerre%20Nouvelle%202024.jpeg' }
      ],
      size: 'medium'
    },
    {
      id: 3,
      category: 'toussaint',
      year: '2023',
      date: 'Toussaint',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '280',
      image: '/assets/images/Groupe 2023.webp',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      story: `Pour l'édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !! Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.
      
      Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient. Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l'honneur tous les grands saints du Limousin.
      
      Nombre de Famissionnaires ont pu s'investir tout au long de l'année dans ce projet ! Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d'orgue de cette mission.
      
      Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l'œuvre.`,
      video: null,
      links: [
        { name: 'Famille chrétienne (Jan)', url: '/assets/Articles%20missions/2024%2001%20Famille%20chr%C3%A9tienne.pdf' },
        { name: 'Famille chrétienne (Nov)', url: '/assets/Articles%20missions/2023%2011%20Famille%20chr%C3%A9tienne.pdf' },
        { name: 'La Montagne', url: 'http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/' }
      ],
      size: 'medium'
    },
    {
      id: 5,
      category: 'toussaint',
      year: '2022',
      date: 'Toussaint',
      location: 'Alpes-de-Haute-Provence',
      diocese: 'Digne',
      participants: '260',
      image: '/assets/images/Groupe 2022.webp',
      cities: ['Manosque', 'Oraison', 'Saint-Auban', 'Barcelonnette', 'Forcalquier', 'Digne', 'Banon'],
      story: `Pour l'édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !! Ce fut un véritable ravissement tant l'accueil reçu nous a profondément touchés.
      
      Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t'aime – Creuse ta foi », répartis entre 7 paroisses du diocèse. 18 séminaristes, religieuse, religieux, prêtres ou diacre de tous les diocèses nous ont accompagnés.
      
      Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles. Enfin, la journée s'est terminée en apothéose avec la remarquable Comédie musicale « Monseigneur Bienvenu de Miollis, un évêque missionnaire en Provence ».
      
      Tel Msg de Miollis, nous avons sillonné la région à la rencontre de ses habitants dans la rue, sur les chemins, sur les marchés, dans les cimetières, dans les EHPAD. Le nom de Jésus a été annoncé…Puisse-t-il avoir touché les cœurs !`,
      video: 'lYaeQevBzuU',
      links: [
        { name: 'BFM TV', url: 'https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html' },
        { name: 'Œuvre des campagnes', url: 'https://oeuvredescampagnes.fr/missions-devangelisation/famissio/' },
        { name: 'Le Dauphiné', url: 'https://i.imgur.com/16pFVvO.jpg' },
        { name: 'RCF', url: 'https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777' }
      ],
      size: 'small',
      imageZoom: 'large'
    },
    {
      id: 7,
      category: 'toussaint',
      year: '2021',
      date: 'Toussaint',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '180',
      image: '/assets/images/Groupe 2021.webp',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon-sur-Voueize'],
      story: `La mission Toussaint 2021... Une belle édition ! 180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse.
      
      D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers. Un extraordinaire accueil nous a permis de vivre de fructueuses journées.
      
      Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EPADH, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d'un spectacle.
      
      Vive la mission... Et vivement l'édition 2022 dans les Alpes-de-Haute-Provence !`,
      video: 'n74BNF8fPcw',
      links: [
        { name: 'La Nef', url: '/assets/Articles%20missions/La%20Nef%20(%20page%2042)%20-%202021.PNG' },
        { name: 'RCF (audio)', url: 'https://youtu.be/yQQwKf2tJ2A' }
      ],
      size: 'small',
      imageZoom: 'medium'
    },
    {
      id: 8,
      category: 'toussaint',
      year: '2020',
      date: 'Toussaint',
      location: 'Orne',
      diocese: 'Séez',
      participants: '90',
      image: '/assets/images/Groupe 2020.webp',
      imageZoom: 'native',
      cities: ['Alençon', 'Ecouché', 'L\'Aigle', 'Le Mêle-sur-Sarthe'],
      story: `4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial !
      
      Les paroisses du Mêle-sur-Sarthe (Père Pascal Durand) et de L'Aigle (Père Stéphane Cailliaux) ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon (Père Loïc Gicquel des Touches) et Ecouché (Père Alexis de Brébisson).
      
      Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !`,
      video: 'ngv3kXBMu5Q',
      links: [
        { name: 'Aleteia', url: 'https://fr.aleteia.org/2020/11/12/dans-lorne-la-mission-se-vit-aussi-avec-un-verre-de-calva/' },
        { name: 'Famille chrétienne', url: 'https://drive.google.com/file/d/1tdEPm5ikAnjNR8g04BLUvvyXAafsVCxN/view' },
        { name: 'Communauté de l\'Emmanuel', url: 'https://emmanuel.info/missionnaire-en-famille-paroisses-rurales/' }
      ],
      size: 'medium'
    },
    {
      id: 9,
      category: 'toussaint',
      year: '2019',
      date: 'Toussaint',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '30',
      image: '/assets/images/Groupe 2019.webp',
      cities: ['Gouzon', 'Boussac'],
      story: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
      
      Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne. Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
      video: 'DdFKEYBhstk',
      links: [
        { name: 'Boussac', url: 'https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view' },
        { name: 'Alençon', url: 'https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view' },
        { name: 'Limoges (vidéo)', url: 'https://youtu.be/qnFAbNBbDOM' }
      ],
      size: 'medium'
    },
    {
      id: 4,
      category: 'year',
      year: '2022-2023',
      date: 'Toute l\'année',
      location: 'Villeneuve-la-Garenne',
      diocese: 'Villeneuve-la-Garenne',
      participants: null,
      image: '/assets/images/Groupe 22-23.jpg',
      cities: ['Villeneuve-la-Garenne'],
      story: `Famissio 92 a vécu une année merveilleuse avec les paroissiens très profonds, chaleureux, généreux et audacieux de Villeneuve-La-Garenne.
      
      Très nombreux sont ceux qui ont tenté avec confiance l'expérience de la mission. Ils nous ont édifiés. Leur piété et leur assurance, don de l'Esprit Saint, nous ont permis d'être témoins d'une multitude de cœurs qui s'ouvraient.
      
      Nous rendons gloire pour tous ces temps exceptionnels de mission, vécus tout au long de cette année ! Avec leur beau pasteur, le Père Olivier Foulon, les paroissiens sont avides de poursuivre la mission et de mettre le feu à Villeneuve-La-Garenne !`,
      video: 'oEbx6esqKTs',
      links: [],
      size: 'medium'
    },
    {
      id: 6,
      category: 'year',
      year: '2021-2022',
      date: 'Toute l\'année',
      location: 'Gennevilliers',
      diocese: 'Gennevilliers',
      participants: null,
      image: '/assets/images/Groupe 2021-2022.jpg',
      cities: ['Gennevilliers'],
      story: `La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres.
      
      Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit. Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie.
      
      Ils avaient soif de Dieu, ces habitants ! Ils attendaient la présence de témoins pour savoir où trouver la nourriture spirituelle dont ils avaient besoin.
      
      Le curé, le Père Jean-Baptiste, a pris les choses en main, mobilisé ses paroissiens et suscité l'enthousiasme. Les veillées de ces 5 journées ont été variées, recueillies et animées de façon extraordinaire.
      
      La paroisse Saint Joseph des 4 Routes prépare d'ores et déjà des journées de missions pour l'année 2022-2023. Elle a le feu !`,
      video: 'kzDZYmrYkP4',
      links: [],
      size: 'medium'
    }
  ];

  const toussaintMissions = missions.filter(m => m.category === 'toussaint');
  const yearMissions = missions.filter(m => m.category === 'year');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <Helmet>
        <title>Nos Missions - Famissio</title>
        <meta name="description" content="Découvrez les diocèses et paroisses où Famissio envoie ses familles missionnaires pour accompagner les curés et évangéliser." />
        <link rel="canonical" href="https://famissio.pages.dev/missions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://famissio.pages.dev/missions" />
        <meta property="og:title" content="Nos Missions - Famissio" />
        <meta property="og:description" content="Découvrez les diocèses et paroisses où Famissio envoie ses familles missionnaires pour accompagner les curés et évangéliser." />
        <meta property="og:image" content="https://famissio.pages.dev/assets/images/Carte_mission_2026.png" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;500;600;700;800&display=swap');

        /* ── Utilitaires galerie ── */
        .mission-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .mission-card:hover { transform: translateY(-8px) scale(1.02); }
        .year-tag { font-family: 'Bebas Neue', cursive; letter-spacing: 2px; }

        .mission-eyebrow {
          font-size: 0.85rem; font-weight: 800; color: #f46a07;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 15px;
          display: flex; align-items: center; justify-content: center; gap: 15px;
        }
        .mission-eyebrow::before, .mission-eyebrow::after {
          content: ''; width: 40px; height: 2px; background: #f46a07;
        }
        .city-pill {
          display: inline-flex; align-items: center;
          background-color: #fff7ed; color: #c2410c;
          border: 1px solid #ffedd5;
          font-size: 0.85rem; font-weight: 600;
          padding: 0.25rem 0.75rem; border-radius: 9999px;
          margin-right: 0.35rem; margin-bottom: 0.35rem;
        }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg); transition: 0s;
        }
        .btn-shine:hover::after { left: 200%; transition: 0.7s ease-in-out; }
        .img-zoom-medium { object-position: center; transform: scale(1.15); }
        .group:hover .img-zoom-medium { transform: scale(1.25) !important; }
        .img-zoom-large { object-position: center; transform: scale(1.55); }
        .group:hover .img-zoom-large { transform: scale(1.65) !important; }
        .mission-image-native {
          width: 100% !important; height: 100% !important;
          max-width: none; max-height: none;
          object-fit: cover !important; transform: none !important;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* ══════════════════════════════════════════
           SECTION PROCHAINE MISSION (DA FAMISSIO)
        ══════════════════════════════════════════ */
        .pm-section {
          position: relative;
          overflow: hidden;
          /* Fond crème chaud Famissio (ni sombre, ni blanc pur) */
          background: linear-gradient(175deg, #fdf6ee 0%, #faede0 45%, #fdf5ea 100%);
          color: #1a100a;
          padding: 100px 24px 120px;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          width: 100%;
        }

        /* Nappes de couleur douces et diffuses en arrière-plan */
        .pm-bg {
          position: absolute;
          inset: -10%;
          z-index: 0;
          pointer-events: none;
        }
        .pm-bg i {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          will-change: transform;
        }
        .pm-bg i:nth-child(1) {
          left: -6vmax;
          top: -6vmax;
          width: 55vmax;
          height: 55vmax;
          background: radial-gradient(circle, rgba(244, 106, 7, 0.16), transparent 65%);
        }
        .pm-bg i:nth-child(2) {
          right: -10vmax;
          top: 30%;
          width: 52vmax;
          height: 52vmax;
          background: radial-gradient(circle, rgba(200, 41, 4, 0.13), transparent 65%);
        }
        .pm-bg i:nth-child(3) {
          left: 25%;
          bottom: -10vmax;
          width: 45vmax;
          height: 45vmax;
          background: radial-gradient(circle, rgba(246, 178, 74, 0.2), transparent 65%);
        }

        .pm-grain {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.055;
          mix-blend-mode: multiply;
          pointer-events: none;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Conteneur principal centré */
        .pm-container {
          position: relative;
          z-index: 1;
          max-width: 1080px;
          padding-top: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Surtitre éditorial raffiné (sans pastille gadget) */
        .pm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .pm-eyebrow-line {
          width: 32px;
          height: 1.5px;
          background: #f46a07;
          opacity: 0.6;
          border-radius: 2px;
        }
        .pm-eyebrow-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #c82904;
        }

        /* Grand titre expressif */
        .pm-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 7.6vw, 6.8rem);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.03em;
          color: #1a100a;
          margin: 0 0 20px;
        }
        .pm-title .ln {
          display: block;
          padding: 0.04em 0.1em;
        }
        .pm-title-place {
          position: relative;
          display: inline-block;
          z-index: 2;
          margin-left: -0.015em;
          font-size: 1.12em;
          font-style: italic;
          opacity: 0;
          transform: translateY(0.42em) rotate(-7deg) scale(0.84);
          transform-origin: center 85%;
          filter: blur(8px);
          text-shadow: 0 0 0 rgba(244, 106, 7, 0);
          will-change: transform, opacity, filter;
          color: #1a100a;
          -webkit-text-fill-color: #1a100a;
        }
        .pm-title-place::after {
          position: absolute;
          right: -0.06em;
          bottom: -0.07em;
          left: -0.06em;
          height: 0.06em;
          border-radius: 999px;
          background: #f46a07;
          box-shadow: 0 0.08em 0.22em rgba(244, 106, 7, 0.28);
          content: '';
          transform: scaleX(0);
          transform-origin: left;
        }
        .pm-title.is-visible .pm-title-place {
          animation: pm-place-reveal 1.25s cubic-bezier(0.2, 1.2, 0.35, 1) forwards;
        }
        @keyframes pm-place-reveal {
          0% { opacity: 0; transform: translateY(0.42em) rotate(-7deg) scale(0.84); filter: blur(5px); text-shadow: 0 0 0 rgba(244, 106, 7, 0); }
          68% { opacity: 1; transform: translateY(-0.045em) rotate(-3deg) scale(1.055); filter: blur(0); text-shadow: 0 0.04em 0.1em rgba(26, 16, 10, 0.12); }
          100% { opacity: 1; transform: translateY(0) rotate(-4deg) scale(1.035); filter: blur(0); text-shadow: 0 0.03em 0.08em rgba(26, 16, 10, 0.1); }
        }
        .pm-title.is-visible .pm-title-place::after {
          animation: pm-place-underline 0.68s 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pm-place-underline {
          to { transform: scaleX(1); }
        }
        .pm-title .pm-title-welcome {
          background: linear-gradient(135deg, #c82904 0%, #f46a07 60%, #e05307 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Métas : dates & lieu */
        .pm-meta-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 24px;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          color: #442a1b;
          font-weight: 600;
        }
        .pm-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .pm-meta-icon {
          color: #f46a07;
          flex-shrink: 0;
        }
        .pm-meta-strong {
          color: #c82904;
          font-weight: 800;
        }
        .pm-meta-sep {
          color: #fed7aa;
        }

        /* Paragraphe descriptif */
        .pm-description {
          max-width: 740px;
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          line-height: 1.7;
          color: #5c4436;
          margin: 0 auto 52px;
        }

        /* Carte pleine largeur sans chevauchement */
        .pm-map-wrapper {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          opacity: 1;
          transform: none;
        }
        .pm-map-wrapper.pm-map--inview {
          animation: pm-map-reveal 0.72s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        @keyframes pm-map-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pm-map-wrapper:not(.pm-map--inview) {
          opacity: 1;
          transform: none;
        }
        .pm-map-card {
          position: relative;
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 10px 30px -10px rgba(200, 41, 4, 0.1),
            0 25px 50px -12px rgba(26, 16, 10, 0.08);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .pm-map-card:hover {
          box-shadow:
            0 15px 35px -8px rgba(200, 41, 4, 0.15),
            0 30px 60px -15px rgba(26, 16, 10, 0.12);
          transform: translateY(-4px);
        }
        .pm-map-embed {
          width: 100%;
          background: transparent;
        }
        .pm-map-embed iframe {
          width: 100% !important;
          border: 0 !important;
          display: block;
        }

        @media (max-width: 640px) {
          .pm-section {
            padding: 70px 16px 90px;
          }
          .pm-container { padding-top: 0; }
          .pm-map-card {
            border-radius: 20px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pm-section * {
            animation: none !important;
            transition: none !important;
          }
          .pm-title-place { opacity: 1; transform: rotate(-4deg) scale(1.035); filter: none; }
          .pm-title-place::after { display: none; }
          .pm-map-wrapper { opacity: 1; transform: none; }
        }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
        <style>{`
          .blob { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation: morph 8s ease-in-out infinite; }
          @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50%       { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          }
        `}</style>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-200 blob opacity-20" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200 blob opacity-20" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight leading-tight text-center text-orange-600"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Nos Missions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto text-gray-700 leading-relaxed font-normal">
            Chaque année à la Toussaint, nous organisons une mission diocésaine. Elle se prépare sur un an avec les paroisses pour adapter le programme à leurs besoins spécifiques.
          </p>
        </div>
      </div>

      {/* Bande décorative */}
      <div className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 h-2 border-y border-orange-200/50" />

      {/* ══════════ PROCHAINE MISSION ══════════ */}
      <ProchaineMissionSection missions={missions} onOpenMission={handleOpenMission} />

      {/* ══════════ GALERIE ══════════ */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="text-center mb-12">
          <div className="mission-eyebrow">L'HISTORIQUE</div>
          <h2 id="liste-missions" className="text-4xl sm:text-5xl font-black mb-3 year-tag text-gray-900 scroll-mt-32">
            {missions.length} MISSIONS
          </h2>
          <p className="text-xl text-gray-600">
            De 2019 à aujourd'hui, cliquez pour découvrir chaque aventure
          </p>
        </div>

        <h3 className="text-3xl font-black mb-8 year-tag text-gray-800 border-b-2 border-orange-200 inline-block pb-2">
          FAMISSIO TOUSSAINT
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {toussaintMissions.map((mission, index) => {
            const isLarge = index === 0;
            const cardSpan = isLarge
              ? 'col-span-2 row-span-2 h-[600px]'
              : mission.size === 'small'
                ? 'col-span-1 row-span-1 h-[240px]'
                : 'col-span-2 row-span-1 h-[300px]';
            return (
              <div
                key={mission.id}
                className={`mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg ${cardSpan}`}
                onClick={() => handleOpenMission(mission)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={mission.image}
                    alt={mission.year}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110
                      ${mission.imageZoom === 'large' ? 'img-zoom-large' :
                        mission.imageZoom === 'medium' ? 'img-zoom-medium' :
                          mission.imageZoom === true ? 'img-zoom-medium' : ''}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform group-hover:translate-y-0 translate-y-2">
                    <div className="text-5xl sm:text-7xl font-black mb-2 year-tag text-white">{mission.year}</div>
                    <div className="flex items-center gap-2 text-orange-300 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold truncate">{mission.location}</span>
                    </div>
                    {mission.participants && (
                      <div className="flex items-center gap-2 text-white/80">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-bold">{mission.participants} Famissionnaires</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VOIR PLUS
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-3xl font-black mb-8 year-tag text-gray-800 border-b-2 border-orange-200 inline-block pb-2">
          MISSIONS À L'ANNÉE
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {yearMissions.map((mission) => (
            <div
              key={mission.id}
              className="mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg h-[300px]"
              onClick={() => handleOpenMission(mission)}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={mission.image}
                  alt={mission.year}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110
                    ${mission.imageZoom === 'large' ? 'img-zoom-large' :
                      mission.imageZoom === 'medium' ? 'img-zoom-medium' :
                        mission.imageZoom === true ? 'img-zoom-medium' : ''}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-5xl font-black mb-2 year-tag text-white">{mission.year}</div>
                <div className="flex items-center gap-2 text-orange-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-lg font-semibold">{mission.location}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                VOIR PLUS
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ MODAL ══════════ */}
      {selectedMission && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[10000] overflow-y-auto no-scrollbar flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseMission}
        >
          <button
            type="button"
            onClick={(e) => navigateMission('prev', e)}
            className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[10001] w-14 h-14 bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 rounded-full items-center justify-center shadow-xl border border-solid border-gray-200 outline-none focus:outline-none transition-all hover:scale-110 group"
          >
            <ChevronLeft className="w-8 h-8 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={(e) => navigateMission('next', e)}
            className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[10001] w-14 h-14 bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 rounded-full items-center justify-center shadow-xl border border-solid border-gray-200 outline-none focus:outline-none transition-all hover:scale-110 group"
          >
            <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={handleCloseMission}
            className="fixed top-6 right-6 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 p-3 rounded-full transition-all z-[10001] shadow-xl border border-solid border-gray-200 outline-none focus:outline-none"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div
            className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-orange-100 relative my-8 p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 items-center">
              <div className="flex flex-col justify-center">
                <div className="text-7xl sm:text-9xl font-black mb-4 year-tag text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 leading-none">
                  {selectedMission.year}
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-orange-700 font-semibold bg-orange-50/80 px-4 py-2 rounded-xl border border-orange-100 inline-flex self-start">
                    <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-lg">{selectedMission.date}</span>
                  </div>
                  <div className="text-gray-900">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-600 flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold text-gray-800">{selectedMission.diocese}</span>
                    </div>
                    {selectedMission.category !== 'year' && selectedMission.cities?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pl-10">
                        {selectedMission.cities.map((city, idx) => (
                          <span key={idx} className="city-pill">{city}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedMission.participants && (
                    <div className="flex items-center gap-3 text-gray-800 font-semibold">
                      <div className="p-2 bg-red-50 rounded-lg text-red-600 flex-shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-lg">{selectedMission.participants} Famissionnaires</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg h-[280px] sm:h-[360px] border border-gray-100 relative group ${selectedMission.imageZoom === 'native' ? 'flex items-center justify-center' : ''}`}>
                <img
                  src={selectedMission.image}
                  alt={selectedMission.year}
                  className={`w-full h-full object-cover rounded-2xl
                    ${selectedMission.imageZoom === 'native' ? 'mission-image-native' :
                      selectedMission.imageZoom === 'large' ? 'img-zoom-large' :
                      selectedMission.imageZoom === 'medium' ? 'img-zoom-medium' :
                        selectedMission.imageZoom === true ? 'img-zoom-medium' : ''}`}
                />
              </div>
            </div>

            <div className="w-full bg-orange-50/40 rounded-2xl p-6 sm:p-8 mb-8 border border-orange-100/80">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line text-justify">
                {selectedMission.story}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              {selectedMission.video && (
                <button
                  onClick={toggleVideo}
                  className="btn-shine flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
                >
                  {isVideoPlaying ? (
                    <><X className="w-5 h-5" />Fermer la vidéo</>
                  ) : (
                    <><Play className="w-5 h-5 fill-current" />Voir la vidéo</>
                  )}
                </button>
              )}
              {selectedMission.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine flex items-center gap-2 px-6 py-3 bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 rounded-full font-semibold transition-all transform hover:scale-105 border border-gray-200 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-orange-600" />
                  {link.name}
                </a>
              ))}
            </div>

            {isVideoPlaying && selectedMission.video && (
              <div className="w-full mt-6 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedMission.video}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsPage;
