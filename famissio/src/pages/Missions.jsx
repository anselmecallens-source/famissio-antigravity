import React, { useState } from 'react';
import { X, MapPin, Users, Calendar, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  // Données mises à jour
  const missions = [
    // --- MISSIONS TOUSSAINT ---
    {
      id: 1,
      category: 'toussaint',
      year: '2025',
      date: 'Toussaint 2025',
      location: 'Limousin & Charente',
      diocese: 'Limoges, Angoulême, Tulle',
      participants: '380',
      image: 'https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&st=plymodzr&raw=1',
      cities: ['Confolens', 'Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive'],
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
      date: 'Toussaint 2024',
      location: 'Lozère, Aveyron, Cantal, Orne',
      diocese: 'Mende, Rodez, Saint-Flour, Séez',
      participants: '340',
      image: 'https://www.dropbox.com/scl/fi/4ntkl4phubtubihjzt2bo/Groupe-2024.jpg?rlkey=an0idcz0143dtd3d0eadzl3us&st=3jkf2a5r&raw=1',
      cities: ['Massiac', 'Ruynes', 'Saint-Chély', 'Marvejols', 'Mende', 'Millau', 'Vimoutiers'],
      story: `L'édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi. Les habitants avaient le cœur ouvert et accueillaient facilement les rencontres. Les fruits ont été nombreux, la joie d'annoncer le Christ immense.
      
      Les différentes paroisses nous ont réservé un fabuleux accueil, organisé des soirées festives mémorables, concocté de magnifiques temps de mission et de bénédictions de tracteurs, fermes, commerces et cimetières !
      
      Les 340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonnaient à tout rompre. Leur joie était manifeste. La semaine nous a laissé la tête dans le Ciel après avoir rencontré nos contemporains qui avaient soif d'entendre parler du Christ !`,
      video: 'fkal1pZgV3Q',
      links: [
        { name: 'Midi Libre', url: 'https://www.midilibre.fr/2024/10/11/la-mission-famissio-de-la-paroisse-saint-jacques-12253698.php' },
        { name: 'Diocèse de Mende', url: 'https://www.diocese-mende.fr/des-familles-missionnaires-dans-nos-paroisses/' },
        { name: 'Diocèse de Saint-Flour', url: 'https://diocese15.fr/blog/2024/09/allons-donc-de-toutes-les-nations-faites-des-disciples-famissio-familles-en-mission/' }
      ],
      size: 'medium'
    },
    {
      id: 3,
      category: 'toussaint',
      year: '2023',
      date: 'Toussaint 2023',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '280',
      image: 'https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&st=sywqghnw&raw=1',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      story: `Pour l'édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !! Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.
      
      Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient. Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l'honneur tous les grands saints du Limousin.
      
      Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d'orgue de cette mission. Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts.`,
      video: null,
      links: [
        { name: 'Famille chrétienne (Jan)', url: 'https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf' },
        { name: 'La Montagne', url: 'http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/' }
      ],
      size: 'medium'
    },
    {
      id: 5,
      category: 'toussaint',
      year: '2022',
      date: 'Toussaint 2022',
      location: 'Alpes-de-Haute-Provence',
      diocese: 'Digne',
      participants: '260',
      image: 'https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1',
      cities: ['Manosque', 'Oraison', 'Saint-Auban', 'Barcelonnette', 'Forcalquier', 'Digne', 'Banon'],
      story: `Pour l'édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !! Ce fut un véritable ravissement tant l'accueil reçu nous a profondément touchés.
      
      Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t'aime – Creuse ta foi », répartis entre 7 paroisses du diocèse. Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles.
      
      Tel Msg de Miollis, nous avons sillonné la région à la rencontre de ses habitants dans la rue, sur les chemins, sur les marchés, dans les cimetières, dans les EHPAD. Le nom de Jésus a été annoncé…Puisse-t-il avoir touché les cœurs !`,
      video: 'lYaeQevBzuU',
      links: [
        { name: 'BFM TV', url: 'https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html' },
        { name: 'RCF', url: 'https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777' }
      ],
      size: 'small'
    },
    {
      id: 7,
      category: 'toussaint',
      year: '2021',
      date: 'Toussaint 2021',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '180',
      image: 'https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon'],
      story: `La mission Toussaint 2021... Une belle édition ! 180 missionnaires se sont rendus cette année dans le diocèse de Limoges.
      
      Au menu pour cette édition : des temps de prière avec louanges, missions dans la rue, visitations chez les habitants, après-midi en EHPAD, bénédictions dans les cimetières, journée dédiée aux enfants et veillées pour les malades.
      
      Les Creusois ont accueilli avec beaucoup de générosité tous les missionnaires ! Vive la mission...`,
      video: 'n74BNF8fPcw',
      links: [
        { name: 'RCF (audio)', url: 'https://youtu.be/yQQwKf2tJ2A' }
      ],
      size: 'small'
    },
    {
      id: 8,
      category: 'toussaint',
      year: '2020',
      date: 'Toussaint 2020',
      location: 'Orne',
      diocese: 'Séez',
      participants: '90',
      image: 'https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&st=apf1aqw7&raw=1',
      cities: ['Alençon', 'Ecouché', 'L\'Aigle', 'Le Mêle-sur-Sarthe'],
      story: `4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial !
      
      Les paroisses du Mêle-sur-Sarthe et de L'Aigle ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon et Ecouché. Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !`,
      video: 'ngv3kXBMu5Q',
      links: [
        { name: 'Aleteia', url: 'https://fr.aleteia.org/2020/11/12/dans-lorne-la-mission-se-vit-aussi-avec-un-verre-de-calva/' }
      ],
      size: 'small'
    },
    {
      id: 9,
      category: 'toussaint',
      year: '2019',
      date: 'Toussaint 2019',
      location: 'Creuse',
      diocese: 'Limoges',
      participants: '30',
      image: 'https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&st=ijdjpvp8&raw=1',
      cities: ['Gouzon', 'Boussac'],
      story: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
      
      Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne. Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
      video: 'DdFKEYBhstk',
      links: [],
      size: 'small'
    },
    // --- MISSIONS ANNÉE ---
    {
      id: 4,
      category: 'year',
      year: '2022-2023',
      date: 'Toute l\'année',
      location: 'Villeneuve-la-Garenne',
      diocese: 'Famissio 92',
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
      diocese: 'Famissio 92',
      participants: null,
      image: 'https://www.dropbox.com/scl/fi/q9bsn70khk5gfjt9e1n3e/Groupe-2021-2022.jpg?rlkey=feaz7xkl08rdns5e8ghccdneu&st=579zxprb&raw=1',
      cities: ['Gennevilliers'],
      story: `La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres.
      
      Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit. Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie.
      
      Ils avaient soif de Dieu, ces habitants ! Ils attendaient la présence de témoins pour savoir où trouver la nourriture spirituelle dont ils avaient besoin.`,
      video: 'kzDZYmrYkP4',
      links: [],
      size: 'medium'
    }
  ];

  const toussaintMissions = missions.filter(m => m.category === 'toussaint');
  const yearMissions = missions.filter(m => m.category === 'year');

  const navigateMission = (direction, e) => {
    e.stopPropagation();
    if (!selectedMission) return;

    // Créer une liste unifiée pour la navigation, ou naviguer dans la catégorie courante ?
    // Navigation globale à travers toutes les missions affichées
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;600;700&display=swap');
        
        .mission-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mission-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .year-tag { font-family: 'Bebas Neue', cursive; letter-spacing: 2px; }
        .location-text { font-family: 'Space Grotesk', sans-serif; }
        
        .mission-eyebrow {
          font-size: 0.85rem;
          font-weight: 800;
          color: #f46a07;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        .mission-eyebrow::before, .mission-eyebrow::after { 
          content: ''; width: 40px; height: 2px; background: #f46a07; 
        }

        /* Suppression des styles d'images arrondis spécifiques qui causaient des problèmes */
      `}</style>

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 sm:py-40">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-widest">
              NOS MISSIONS
            </div>
            <h1 className="text-7xl sm:text-9xl font-black mb-8 year-tag leading-none">
              UNE PAR AN
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Chaque Toussaint, des centaines de Famissionnaires sillonnent un diocèse pendant une semaine.
              Un an de préparation avec les paroisses pour une aventure inoubliable.
            </p>
          </div>
        </div>
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
                La Rochelle, Angoulême et Poitiers
              </p>
              <div className="flex items-center gap-4 text-3xl font-bold mb-8">
                <Calendar className="w-10 h-10 text-orange-400" />
                <span className="year-tag">TOUSSAINT 2026</span>
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
                className="relative z-10 w-full max-w-lg mx-auto h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* GALLERIE MISSIONS */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="mission-eyebrow">NOTRE HISTOIRE</div>
          <h2 id="liste-missions" className="text-6xl font-black mb-4 year-tag text-gray-900 scroll-mt-32">
            MISSIONS TOUSSAINT
          </h2>
        </div>

        {/* GRILLE TOUSSAINT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {toussaintMissions.map((mission, index) => (
            <div
              key={mission.id}
              className={`mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg bg-gray-200 
                ${mission.size === 'large' ? 'col-span-2 row-span-2 h-[500px] md:h-[600px]' :
                  mission.size === 'medium' ? 'col-span-2 row-span-1 h-[300px]' :
                    'col-span-2 md:col-span-1 row-span-1 h-[250px]'}`}
              onClick={() => setSelectedMission(mission)}
            >
              {/* IMAGE ABSOLUE SANS CADRE BLANC */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={mission.image}
                  alt={mission.year}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform group-hover:translate-y-0 translate-y-2">
                  <div className="text-5xl sm:text-7xl font-black mb-1 year-tag text-white">
                    {mission.year}
                  </div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold truncate">{mission.location}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                VOIR
              </div>
            </div>
          ))}
        </div>

        {/* SECTION MISSIONS ANNÉE */}
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-orange-200 mx-auto rounded-full mb-8"></div>
          <h2 className="text-5xl font-black mb-4 year-tag text-gray-800">
            MISSIONS À L'ANNÉE
          </h2>
          <p className="text-xl text-gray-600">Famissio 92 en action</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yearMissions.map((mission) => (
            <div
              key={mission.id}
              className="mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg h-[350px]"
              onClick={() => setSelectedMission(mission)}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={mission.image}
                  alt={mission.year}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 hover:opacity-90"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-5xl font-black mb-2 year-tag text-white">
                  {mission.year}
                </div>
                <div className="flex items-center gap-2 text-orange-300">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-semibold">{mission.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION OVERLAY (MODAL) */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto animate-in fade-in duration-300">
          <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">

            {/* Navigation et Fermeture */}
            <div className="w-full max-w-6xl flex justify-between items-center mb-6 sticky top-0 z-50 pt-4">
              <button
                onClick={() => setSelectedMission(null)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-6xl w-full bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden relative shadow-2xl">

              {/* Flèches de navigation latérales */}
              <button
                onClick={(e) => navigateMission('prev', e)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-orange-500 rounded-full text-white transition-all hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => navigateMission('next', e)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-orange-500 rounded-full text-white transition-all hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Colonne Image (Full height) */}
                <div className="h-[400px] lg:h-auto relative">
                  <img
                    src={selectedMission.image}
                    alt={selectedMission.year}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent lg:hidden"></div>
                </div>

                {/* Colonne Infos Header */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-900">
                  <div className="text-7xl lg:text-8xl font-black mb-6 year-tag text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {selectedMission.year}
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 text-orange-200">
                      <Calendar className="w-6 h-6 flex-shrink-0" />
                      <span className="text-2xl font-bold">{selectedMission.date}</span>
                    </div>

                    <div className="flex items-start gap-4 text-white">
                      <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-xl font-semibold block mb-1">{selectedMission.diocese}</span>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedMission.cities.map((city, idx) => (
                            <span key={idx} className="text-sm text-gray-400 border border-gray-700 px-2 py-1 rounded">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedMission.participants && (
                      <div className="flex items-center gap-4 text-white">
                        <Users className="w-6 h-6 text-orange-500 flex-shrink-0" />
                        <span className="text-xl font-bold">{selectedMission.participants} Famissionnaires</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu Texte (Pleine largeur) */}
              <div className="p-8 lg:p-12 bg-gray-800/50 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-200 text-lg lg:text-xl leading-relaxed whitespace-pre-line mb-10 text-justify">
                    {selectedMission.story}
                  </p>

                  {/* Boutons d'action (Style restauré) */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    {selectedMission.video && (
                      <a
                        href={`https://youtu.be/${selectedMission.video}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
                      >
                        <Play className="w-5 h-5 fill-current" />
                        Voir la vidéo
                      </a>
                    )}
                    {selectedMission.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsPage;
