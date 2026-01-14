import React, { useState } from 'react';
import { X, MapPin, Users, Calendar, ExternalLink, Play } from 'lucide-react';

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      id: 1,
      year: '2025',
      date: '24-30 Oct 2025',
      location: 'Limoges, Angoulême, Tulle',
      diocese: 'Diocèse de Limoges (Haute-Vienne), Diocèse d\'Angoulême (Charente), Diocèse de Tulle (Corrèze)',
      participants: '380',
      image: 'https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&st=plymodzr&raw=1',
      cities: ['Confolens', 'Terres-de-Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive-la-Gaillarde'],
      story: `380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin. Ils se sont ensuite répartis entre 8 paroisses. Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques. Mais partout, le Seigneur était bien présent au milieu de nous. Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs. Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus. Vous retrouverez dans l'onglet "témoignages" le récit des plus belles rencontres !

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
      year: '2024',
      date: '25-31 Oct 2024',
      location: 'Mende, Rodez, Saint-Flour, Séez',
      diocese: 'Diocèse de Mende (Lozère), Diocèse de Rodez (Aveyron), Diocèse de Saint-Flour (Cantal), Diocèse de Séez (Orne)',
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
      year: '2023',
      date: '26 Oct - 1 Nov 2023',
      location: 'Limoges (Creuse)',
      diocese: 'Diocèse de Limoges (Creuse)',
      participants: '280',
      image: 'https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&st=sywqghnw&raw=1',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      story: `Pour l'édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !! Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.

Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient.

Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l'honneur tous les grands saints du Limousin. Nombre de Famissionnaires ont pu s'investir tout au long de l'année dans ce projet ! Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d'orgue de cette mission.

Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l'œuvre. Nous rendons grâce pour tous ses bienfaits !`,
      video: null,
      links: [
        { name: 'Famille chrétienne (Jan)', url: 'https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf' },
        { name: 'Famille chrétienne (Nov)', url: 'https://famissio-99.webself.net/file/si1759337/download/2023%2011%20Famille%20chr%C3%A9tienne-fi36248538.pdf' },
        { name: 'La Montagne', url: 'http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/' }
      ],
      size: 'medium'
    },
    {
      id: 4,
      year: '2022-2023',
      date: 'Année 2022-2023',
      location: 'Villeneuve-la-Garenne',
      diocese: 'Famissio 92',
      participants: null,
      image: 'https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1',
      cities: ['Villeneuve-la-Garenne'],
      story: `Famissio 92 a vécu une année merveilleuse avec les paroissiens très profonds, chaleureux, généreux et audacieux de Villeneuve-La-Garenne. Très nombreux sont ceux qui ont tenté avec confiance l'expérience de la mission. Ils nous ont édifiés. Leur piété et leur assurance, don de l'Esprit Saint, nous ont permis d'être témoins d'une multitude de cœurs qui s'ouvraient. Nous rendons gloire pour tous ces temps exceptionnels de mission, vécus tout au long de cette année !

Avec leur beau pasteur, le Père Olivier Foulon, les paroissiens sont avides de poursuivre la mission et de mettre le feu à Villeneuve-La-Garenne !`,
      video: 'oEbx6esqKTs',
      links: [],
      size: 'small'
    },
    {
      id: 5,
      year: '2022',
      date: '28 Oct - 3 Nov 2022',
      location: 'Digne (Alpes-de-Haute-Provence)',
      diocese: 'Diocèse de Digne (Alpes-de-Haute-Provence)',
      participants: '260',
      image: 'https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1',
      cities: ['Manosque', 'Oraison', 'Saint-Auban', 'Barcelonnette', 'Forcalquier', 'Digne', 'Banon'],
      story: `Pour l'édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !! Ce fut un véritable ravissement tant l'accueil reçu nous a profondément touchés, tant les liens tissés entre Famissio et les paroissiens nous ont émus, tant les paysages nous ont émerveillés ! Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t'aime – Creuse ta foi », répartis entre 7 paroisses du diocèse.

18 séminaristes, religieuse, religieux, prêtres ou diacre de tous les diocèses nous ont accompagnés pour aider les jeunes à relire leurs temps de mission et faire croître leur foi.

Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles, de beaux temps de prière et de messe. Enfin, la journée s'est terminée en apothéose avec la remarquable Comédie musicale créée pour l'occasion par les diocésains : « Monseigneur Bienvenu de Miollis, un évêque missionnaire en Provence » dont la figure est particulièrement inspirante.

Tel Msg de Miollis, nous avons sillonné la région à la rencontre de ses habitants dans la rue, sur les chemins, sur les marchés, dans les cimetières, dans les EHPAD. Le nom de Jésus a été annoncé…Puisse-t-il avoir touché les cœurs !`,
      video: 'lYaeQevBzuU',
      links: [
        { name: 'BFM TV', url: 'https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html' },
        { name: 'Œuvre des campagnes', url: 'https://oeuvredescampagnes.fr/missions-devangelisation/famissio/' },
        { name: 'Le Dauphiné', url: 'https://i.imgur.com/16pFVvO.jpg' },
        { name: 'RCF', url: 'https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777' }
      ],
      size: 'small'
    },
    {
      id: 6,
      year: '2021-2022',
      date: 'Année 2021-2022',
      location: 'Gennevilliers',
      diocese: 'Famissio 92',
      participants: null,
      image: 'https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1',
      cities: ['Gennevilliers'],
      story: `La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres. Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit. Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie. Ils avaient soif de Dieu, ces habitants ! Ils attendaient la présence de témoins pour savoir où trouver la nourriture spirituelle dont ils avaient besoin.

Le curé, le Père Jean-Baptiste, a pris les choses en main, mobilisé ses paroissiens et suscité l'enthousiasme. Les veillées de ces 5 journées ont été variées, recueillies et animées de façon extraordinaire. Les cœurs ont été touchés. La paroisse Saint Joseph des 4 Routes prépare d'ores et déjà des journées de missions pour l'année 2022-2023. Elle a le feu !
Quant à Famissio 92, en route vers St Joseph de Villeneuve-La-Garenne !`,
      video: 'kzDZYmrYkP4',
      links: [],
      size: 'small'
    },
    {
      id: 7,
      year: '2021',
      date: '29 Oct - 4 Nov 2021',
      location: 'Limoges (Creuse)',
      diocese: 'Diocèse de Limoges (Creuse)',
      participants: '180',
      image: 'https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon-sur-Voueize'],
      story: `La mission Toussaint 2021... Une belle édition ! 180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse, sur la paroisse de Gouzon, Boussac et Genouillac. D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers. Un extraordinaire accueil nous a permis de vivre de fructueuses journées.

Enfin, une journée diocésaine à Chambon-sur-Voueize sur le thème de la mission avec des jeunes collégiens et lycéens venus nous rejoindre pour évangéliser nous a tous portés. Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EPADH, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d'un spectacle, des veillées merveilleuses pour les malades, sur le thème de l'au-delà…, Les Creusois ont accueilli avec beaucoup de générosité tous les missionnaires ! Vive la mission... Et vivement l'édition 2022 dans les Alpes-de-Haute-Provence !`,
      video: 'n74BNF8fPcw',
      links: [
        { name: 'La Nef', url: 'https://famissio-99.webself.net/file/si1759337/download/La%20Nef%20(%20page%2042)%20-%20Famissio-fi32558405.PNG' },
        { name: 'RCF (audio)', url: 'https://youtu.be/yQQwKf2tJ2A' }
      ],
      size: 'small'
    },
    {
      id: 8,
      year: '2020',
      date: '30 Oct - 5 Nov 2020',
      location: 'Séez (Orne)',
      diocese: 'Diocèse de Séez (Orne)',
      participants: '90',
      image: 'https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&st=apf1aqw7&raw=1',
      cities: ['Alençon', 'Ecouché', 'L\'Aigle', 'Le Mêle-sur-Sarthe'],
      story: `4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial ! Les paroisses du Mêle-sur-Sarthe (Père Pascal Durand) et de L'Aigle (Père Stéphane Cailliaux) ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon (Père Loïc Gicquel des Touches) et Ecouché (Père Alexis de Brébisson). Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !`,
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
      year: '2019',
      date: '1-6 Nov 2019',
      location: 'Limoges (Creuse)',
      diocese: 'Diocèse de Limoges (Creuse)',
      participants: '30',
      image: 'https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&st=ijdjpvp8&raw=1',
      cities: ['Gouzon', 'Boussac'],
      story: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés. Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne. Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
      video: 'DdFKEYBhstk',
      links: [
        { name: 'Boussac', url: 'https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view' },
        { name: 'Alençon', url: 'https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view' },
        { name: 'Limoges (vidéo)', url: 'https://youtu.be/qnFAbNBbDOM' }
      ],
      size: 'small'
    }
  ];

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
        
        .mission-overlay {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .mission-content {
          animation: slideUp 0.4s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .year-tag {
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 2px;
        }

        .location-text {
          font-family: 'Space Grotesk', sans-serif;
        }

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
          content: ''; 
          width: 40px; 
          height: 2px; 
          background: #f46a07; 
        }

        .mission-card img {
          border-radius: 1.25rem;
        }

        .overlay-image {
          border-radius: 2rem;
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

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

      {/* MISSION 2026 - NEXT BIG THING */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

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
                Diocèses de La Rochelle, Angoulême et Poitiers
              </p>
              <div className="flex items-center gap-4 text-3xl font-bold mb-8">
                <Calendar className="w-10 h-10 text-orange-400" />
                <span className="year-tag">24 — 30 OCT 2026</span>
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
                style={{
                  background: 'transparent',
                  mixBlendMode: 'normal',
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MISSIONS GALLERY - MOSAIC LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="mission-eyebrow">
            NOTRE HISTOIRE
          </div>
          <h2 id="liste-missions" className="text-6xl font-black mb-4 year-tag text-gray-900 scroll-mt-32">
            9 MISSIONS
          </h2>
          <p className="text-xl text-gray-600">
            De 2019 à aujourd'hui, cliquez pour découvrir chaque aventure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className={`mission-card cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg ${mission.size === 'large' ? 'col-span-2 row-span-2' :
                mission.size === 'medium' ? 'col-span-2 row-span-1' :
                  'col-span-1 row-span-1'
                } ${mission.size === 'large' ? 'h-[600px]' : mission.size === 'medium' ? 'h-[300px]' : 'h-[240px]'}`}
              onClick={() => setSelectedMission(mission)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={mission.image}
                alt={mission.year}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ borderRadius: '1.25rem' }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform group-hover:translate-y-0 translate-y-2">
                  <div className="text-5xl sm:text-7xl font-black mb-2 year-tag text-white">
                    {mission.year}
                  </div>
                  <div className="flex items-center gap-2 text-orange-300 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">{mission.location}</span>
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
      </div>

      {/* MISSION OVERLAY */}
      {selectedMission && (
        <div className="mission-overlay fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="mission-content min-h-screen p-6 sm:p-12">
            <div className="max-w-5xl mx-auto">
              <button
                onClick={() => setSelectedMission(null)}
                className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors z-50"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="text-9xl font-black mb-4 year-tag text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {selectedMission.year}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-orange-300">
                      <Calendar className="w-6 h-6" />
                      <span className="text-xl font-semibold">{selectedMission.date}</span>
                    </div>
                    <div className="flex items-start gap-3 text-white">
                      <MapPin className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-lg font-semibold">{selectedMission.diocese}</span>
                    </div>
                    {selectedMission.participants && (
                      <div className="flex items-center gap-3 text-white">
                        <Users className="w-6 h-6 text-orange-400" />
                        <span className="text-xl font-semibold">{selectedMission.participants} Famissionnaires</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedMission.cities.map((city, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={selectedMission.image}
                    alt={selectedMission.year}
                    className="w-full h-full object-cover overlay-image"
                  />
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-8">
                <p className="text-white text-lg leading-relaxed whitespace-pre-line">
                  {selectedMission.story}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedMission.video && (
                  <a
                    href={`https://youtu.be/${selectedMission.video}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Voir la vidéo
                  </a>
                )}
                {selectedMission.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsPage;
