import React, { useState } from 'react';
import { X, MapPin, Users, Calendar, ExternalLink, Play, ChevronLeft, ChevronRight, Square, StopCircle } from 'lucide-react';

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Fonction pour ouvrir une mission et reset la vidéo
  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setIsVideoPlaying(false);
  };

  // Fonction pour fermer
  const handleCloseMission = () => {
    setSelectedMission(null);
    setIsVideoPlaying(false);
  };

  // Toggle vidéo
  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Navigation entre missions
  const navigateMission = (direction, e) => {
    e.stopPropagation();
    if (!selectedMission) return;
    setIsVideoPlaying(false); // On coupe la vidéo quand on change de mission

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

  // Données
  const missions = [
    // --- MISSIONS TOUSSAINT ---
    {
      id: 1,
      category: 'toussaint',
      year: '2025',
      date: 'Toussaint',
      location: 'Limousin & Charente',
      diocese: 'Limoges, Angoulême, Tulle',
      participants: '380',
      image: 'https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&st=plymodzr&raw=1',
      cities: ['Confolens', 'Terres-de-Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive-la-Gaillarde'],
      story: `380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin. Ils se sont ensuite répartis entre 8 paroisses.
      
      Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques. Mais partout, le Seigneur était bien présent au milieu de nous. Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs.
      
      Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus.
      
      Quelques temps forts ont aussi marqué cette semaine : Jubilate Pop Louange venu (fidèlement !) dans le diocèse d'Angoulême, une procession des saints Holywin à Limoges, un pèlerinage et un spectacle sur la place publique à Brive-La-Gaillarde.
      
      Nous rendons grâce ! La mission remplit les coeurs de joie. Nous rentrons tous la tête dans le Ciel !`,
      video: null,
      links: [
        { name: 'France Catholique', url: 'https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.34.27-fi36539960x470.jpeg' },
        { name: 'Le Limousin', url: 'https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.35.17-fi36539970x586.jpeg' },
        { name: 'France 3', url: 'https://famissio-99.webself.net/file/si1759337/download/VID-20251030-WA0015-fi36539971.mp4' }
      ],
      size: 'large'
    },
    {
      id: 2,
      category: 'toussaint',
      year: '2024',
      date: 'Toussaint',
      location: 'Lozère, Aveyron, Cantal, Orne',
      diocese: 'Mende, Rodez, Saint-Flour, Séez',
      participants: '340',
      image: 'https://www.dropbox.com/scl/fi/4ntkl4phubtubihjzt2bo/Groupe-2024.jpg?rlkey=an0idcz0143dtd3d0eadzl3us&st=3jkf2a5r&raw=1',
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
        { name: 'La Lozère Nouvelle', url: 'https://famissio-99.webself.net/file/si1759337/download/WhatsApp%20Image%202024-10-17%20at%2020.06.47-fi36254054.jpeg' }
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
      image: 'https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&st=sywqghnw&raw=1',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      story: `Pour l'édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !! Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.
      
      Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient. Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l'honneur tous les grands saints du Limousin.
      
      Nombre de Famissionnaires ont pu s'investir tout au long de l'année dans ce projet ! Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d'orgue de cette mission.
      
      Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l'œuvre.`,
      video: null,
      links: [
        { name: 'Famille chrétienne (Jan)', url: 'https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf' },
        { name: 'Famille chrétienne (Nov)', url: 'https://famissio-99.webself.net/file/si1759337/download/2023%2011%20Famille%20chr%C3%A9tienne-fi36248538.pdf' },
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
      image: 'https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1',
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
      imageZoom: true
    },
    {
      id: 7,
      category: 'toussaint',
      year: '2021',
      date: 'Toussaint',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '180',
      image: 'https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon-sur-Voueize'],
      story: `La mission Toussaint 2021... Une belle édition ! 180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse.
      
      D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers. Un extraordinaire accueil nous a permis de vivre de fructueuses journées.
      
      Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EPADH, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d'un spectacle.
      
      Vive la mission... Et vivement l'édition 2022 dans les Alpes-de-Haute-Provence !`,
      video: 'n74BNF8fPcw',
      links: [
        { name: 'La Nef', url: 'https://famissio-99.webself.net/file/si1759337/download/La%20Nef%20(%20page%2042)%20-%20Famissio-fi32558405.PNG' },
        { name: 'RCF (audio)', url: 'https://youtu.be/yQQwKf2tJ2A' }
      ],
      size: 'small'
    },
    {
      id: 8,
      category: 'toussaint',
      year: '2020',
      date: 'Toussaint',
      location: 'Orne',
      diocese: 'Séez',
      participants: '90',
      image: 'https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&st=apf1aqw7&raw=1',
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
      size: 'small'
    },
    {
      id: 9,
      category: 'toussaint',
      year: '2019',
      date: 'Toussaint',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '30',
      image: 'https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&st=ijdjpvp8&raw=1',
      cities: ['Gouzon', 'Boussac'],
      story: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
      
      Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne. Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
      video: 'DdFKEYBhstk',
      links: [
        { name: 'Boussac', url: 'https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view' },
        { name: 'Alençon', url: 'https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view' },
        { name: 'Limoges (vidéo)', url: 'https://youtu.be/qnFAbNBbDOM' }
      ],
      size: 'small'
    },
    // --- MISSIONS ANNÉE ---
    {
      id: 4,
      category: 'year',
      year: '2022-2023',
      date: 'Toute l\'année',
      location: 'Villeneuve-la-Garenne',
      diocese: 'Villeneuve-la-Garenne',
      participants: null,
      image: 'https://www.dropbox.com/scl/fi/1vtsnt5my7yxb92lk686h/Groupe-22-23.jpg?rlkey=x5p3x0lmo8rrv6gwxo2ao3wlm&st=e7hyvzds&raw=1',
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
      image: 'https://www.dropbox.com/scl/fi/q9bsn70khk5gfjt9e1n3e/Groupe-2021-2022.jpg?rlkey=feaz7xkl08rdns5e8ghccdneu&st=579zxprb&raw=1',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;600;700&display=swap');
        
        .mission-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .mission-card:hover { transform: translateY(-8px) scale(1.02); }
        
        .year-tag { font-family: 'Bebas Neue', cursive; letter-spacing: 2px; }
        .location-text { font-family: 'Space Grotesk', sans-serif; }
        
        .mission-eyebrow {
          font-size: 0.85rem; font-weight: 800; color: #f46a07;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 15px;
          display: flex; align-items: center; justify-content: center; gap: 15px;
        }
        .mission-eyebrow::before, .mission-eyebrow::after { 
          content: ''; width: 40px; height: 2px; background: #f46a07; 
        }

        /* Villes : Style Texte Simple */
        .city-text {
            display: inline-block;
            color: #d1d5db; /* Gray-300 */
            font-size: 0.95rem;
            font-weight: 300;
        }
        .city-text:not(:last-child)::after {
            content: ', ';
            margin-right: 6px;
        }

        /* Animation reflet brillant sur les boutons */
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
            content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
            transform: skewX(-20deg); transition: 0s;
        }
        .btn-shine:hover::after {
            left: 200%; transition: 0.7s ease-in-out;
        }
        
        /* Zoom spécifique pour la photo 2022 */
        .img-zoom-fix {
            object-position: center;
            transform: scale(1.1);
        }

        /* Suppression des scrollbars par défaut dans le modal si nécessaire */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap');
          
          .blob {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morph 8s ease-in-out infinite;
          }
          
          @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          }
        `}</style>

        {/* Fond animé avec Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 blob opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-400 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
          <h1
            className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Nos Missions
          </h1>

          <p className="text-xl sm:text-2xl text-justify max-w-6xl mx-auto opacity-90 leading-relaxed font-medium">
            Pendant la semaine autour de La Toussaint, nous organisons chaque année une mission dans plusieurs paroisses d'un même diocèse. Cette mission se prépare pendant un an, main dans la main avec chacune des paroisses pour adapter le programme à leurs besoins et spécificités.
          </p>
        </div>

        {/* Bande orange décorative en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-500 to-orange-500"></div>
      </div>

      {/* MISSION 2026 */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-orange-500 rounded-full text-xs font-bold tracking-widest">
                PROCHAINE MISSION !
              </div>
              <h2 className="text-7xl sm:text-8xl font-black mb-6 year-tag leading-none">
                2026
              </h2>
              <p className="text-2xl mb-8 location-text font-semibold text-orange-200">
                Diocèse de La Rochelle, Angoulême et Poitiers
              </p>
              <div className="flex items-center gap-4 text-3xl font-bold mb-8">
                <Calendar className="w-10 h-10 text-orange-400" />
                <span className="year-tag">24 - 30 OCT 2026</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Monseigneur Bozo nous envoie explorer ces territoires.
                Inscrivez-vous dès maintenant pour vivre cette aventure extraordinaire !
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://www.dropbox.com/scl/fi/b7dexxmoef4st9py9ld49/Carte-mission-2026.png?rlkey=hespa9585cts17u1pubc2i1ev&st=g3bthdwz&raw=1&v=2"
                alt="Carte Mission 2026"
                className="relative z-10 w-full max-w-lg mx-auto h-auto object-contain transition-transform duration-500" // Suppression de hover:scale-105
              />
            </div>
          </div>
        </div>
      </div>

      {/* GALLERIE MISSIONS */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="mission-eyebrow">
            L'HISTORIQUE
          </div>
          <h2 id="liste-missions" className="text-6xl font-black mb-4 year-tag text-gray-900 scroll-mt-32">
            9 MISSIONS
          </h2>
          <p className="text-xl text-gray-600">
            De 2019 à aujourd'hui, cliquez pour découvrir chaque aventure
          </p>
        </div>

        <h3 className="text-3xl font-black mb-8 year-tag text-gray-800 border-b-2 border-orange-200 inline-block pb-2">
          FAMISSIO TOUSSAINT
        </h3>

        {/* GRILLE TOUSSAINT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {toussaintMissions.map((mission) => (
            <div
              key={mission.id}
              className={`mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg 
                ${mission.size === 'large' ? 'col-span-2 row-span-2 h-[600px]' :
                  mission.size === 'medium' ? 'col-span-2 row-span-1 h-[300px]' :
                    'col-span-1 row-span-1 h-[240px]'}`}
              onClick={() => handleOpenMission(mission)}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={mission.image}
                  alt={mission.year}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform group-hover:translate-y-0 translate-y-2">
                  <div className="text-5xl sm:text-7xl font-black mb-2 year-tag text-white">
                    {mission.year}
                  </div>
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
          ))}
        </div>

        {/* TITRE MISSIONS ANNÉE */}
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-5xl font-black mb-2 year-tag text-white">
                  {mission.year}
                </div>
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

      {/* MISSION OVERLAY (POPUP) */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto no-scrollbar">

          {/* FLÈCHES NAVIGATION */}
          <button
            onClick={(e) => navigateMission('prev', e)}
            className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-[60] p-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-orange-500 border border-white/10 transition-all hover:scale-110 group"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:-translate-x-1" />
          </button>

          <button
            onClick={(e) => navigateMission('next', e)}
            className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-[60] p-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-orange-500 border border-white/10 transition-all hover:scale-110 group"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="min-h-screen p-6 sm:p-12 flex items-center justify-center">
            <div className="max-w-6xl w-full relative">

              {/* BOUTON FERMER */}
              <button
                onClick={handleCloseMission}
                className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors z-50 border border-white/10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* GRILLE DU HAUT (Infos + Image) */}
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                {/* COLONNE GAUCHE : INFOS */}
                <div className="flex flex-col justify-center">
                  <div className="text-9xl font-black mb-4 year-tag text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {selectedMission.year}
                  </div>

                  <div className="space-y-4 mb-8">
                    {/* DATE */}
                    <div className="flex items-center gap-4 text-orange-300">
                      <div className="w-6 flex justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-semibold">{selectedMission.date}</span>
                    </div>

                    {/* DIOCESE + VILLES */}
                    <div className="text-white">
                      <div className="flex items-start gap-4">
                        <div className="w-6 flex justify-center pt-1 flex-shrink-0">
                          <MapPin className="w-6 h-6 text-orange-400" />
                        </div>
                        <span className="text-lg font-semibold">{selectedMission.diocese}</span>
                      </div>

                      {/* VILLES (Affichées uniquement si ce n'est pas une mission "année") */}
                      {selectedMission.category !== 'year' && (
                        <div className="mt-2 pl-10">
                          <div>
                            {selectedMission.cities.map((city, idx) => (
                              <span key={idx} className="city-text">
                                {city}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PARTICIPANTS */}
                    {selectedMission.participants && (
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-6 flex justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-orange-400" />
                        </div>
                        <span className="text-xl font-semibold">{selectedMission.participants} Famissionnaires</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* COLONNE DROITE : IMAGE (Arrondie forcée) */}
                <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-auto border border-white/10">
                  <img
                    src={selectedMission.image}
                    alt={selectedMission.year}
                    className={`w-full h-full object-cover rounded-2xl ${selectedMission.imageZoom ? 'img-zoom-fix' : ''}`}
                  />
                </div>
              </div>

              {/* TEXTE HISTOIRE : HORS GRILLE -> PLEINE LARGEUR + JUSTIFIÉ */}
              <div className="w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/5">
                <div className="w-full">
                  <p className="text-white text-lg leading-relaxed whitespace-pre-line text-justify w-full">
                    {selectedMission.story}
                  </p>
                </div>
              </div>

              {/* LIENS & BOUTONS */}
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Bouton Vidéo (Toggle) */}
                {selectedMission.video && (
                  <button
                    onClick={toggleVideo}
                    className="btn-shine flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                  >
                    {isVideoPlaying ? (
                      <>
                        <X className="w-5 h-5 fill-current" />
                        Fermer la vidéo
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 fill-current" />
                        Voir la vidéo
                      </>
                    )}
                  </button>
                )}

                {/* Autres liens */}
                {selectedMission.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all transform hover:scale-105 border border-white/10 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </a>
                ))}
              </div>

              {/* LECTEUR VIDÉO (S'ouvre en bas) */}
              {isVideoPlaying && selectedMission.video && (
                <div className="w-full mt-8 rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in slide-in-from-bottom-10 fade-in duration-500">
                  <div className="relative pt-[56.25%] bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${selectedMission.video}?autoplay=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsPage;
