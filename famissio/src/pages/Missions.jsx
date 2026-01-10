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
      participants: '380',
      image: 'https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG',
      cities: ['Confolens', 'Terres-de-Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive-la-Gaillarde'],
      story: `380 Famissionnaires réunis autour de Monseigneur Gosselin pour une semaine extraordinaire. Répartis dans 8 paroisses, nous avons vécu des moments de grâce intense. Le Seigneur nous précédait partout, préparant les cœurs à la rencontre.

Temps forts : Jubilate Pop Louange à Angoulême, procession Holywin à Limoges, spectacle public à Brive. Des cœurs touchés, des vies transformées. La mission remplit de joie et nous laisse la tête dans le Ciel !`,
      video: null,
      links: ['France Catholique', 'Le Limousin', 'France 3'],
      size: 'large'
    },
    {
      id: 2,
      year: '2024',
      date: '25-31 Oct 2024',
      location: 'Mende, Rodez, Saint-Flour',
      participants: '340',
      image: 'https://famissio-99.webself.net/file/si1759337/2024-fi36533476x586.png',
      cities: ['Massiac', 'Ruynes-en-Margeride', 'Saint-Chély-d\'Apcher', 'Marvejols', 'Mende', 'Millau', 'Vimoutiers'],
      story: `Montagnes, vallées, cœurs grands ouverts. Les régions rurales nous ont accueillis avec une générosité touchante. 340 Famissionnaires ont arpenté les rues de Mende, cloches sonnant à toute volée.

Les habitants avaient soif de rencontres authentiques. Bénédictions de tracteurs, fermes, commerces... La foi s'est incarnée dans le quotidien. Les Famissionnaires ont découvert ces terres magnifiques et garderont ces souvenirs gravés à jamais.`,
      video: 'fkal1pZgV3Q',
      links: ['Midi Libre', 'Diocèse de Mende'],
      size: 'medium'
    },
    {
      id: 3,
      year: '2023',
      date: '26 Oct - 1 Nov 2023',
      location: 'Limoges (Creuse)',
      participants: '280',
      image: 'https://famissio-99.webself.net/file/si1759337/2023-fi36533474x470.png',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      story: `Monseigneur Bozo nous garde dans son diocèse ! L'accueil des Creusois : inoubliable. Des liens profonds tissés entre paroissiens et missionnaires.

Grande comédie musicale célébrant les saints du Limousin, concert Jubilate Pop Louanges à Guéret. 280 Famissionnaires témoins de l'œuvre du Seigneur. Rencontres improbables, cœurs ouverts, vies touchées.`,
      video: null,
      links: ['Famille Chrétienne', 'La Montagne'],
      size: 'medium'
    },
    {
      id: 4,
      year: '2022',
      date: '28 Oct - 3 Nov 2022',
      location: 'Digne (Alpes-de-Haute-Provence)',
      participants: '260',
      image: 'https://famissio-99.webself.net/file/si1759337/2022-fi36533471x470.jpg',
      cities: ['Manosque', 'Oraison', 'Saint-Auban', 'Barcelonnette', 'Forcalquier', 'Digne', 'Banon'],
      story: `Les Alpes de Haute-Provence nous ont émerveillés ! Paysages à couper le souffle, accueil chaleureux, liens tissés avec émotion.

260 t-shirts orange "Jésus t'aime" ont fleuri dans 7 paroisses. Comédie musicale sur Mgr de Miollis, figure inspirante. Tel lui, nous avons sillonné routes et chemins pour annoncer le nom de Jésus.`,
      video: 'lYaeQevBzuU',
      links: ['BFM TV', 'RCF'],
      size: 'small'
    },
    {
      id: 5,
      year: '2021',
      date: '29 Oct - 4 Nov 2021',
      location: 'Limoges (Creuse)',
      participants: '180',
      image: 'https://famissio-99.webself.net/file/si1759337/2021-fi36533469x470.jpg',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon-sur-Voueize'],
      story: `180 missionnaires dans la Creuse profonde. Prêtres, séminaristes, religieux nous accompagnent.

Journée diocésaine à Chambon-sur-Voueize avec les jeunes. Louanges, visites, EHPAD, bénédictions de cimetières, spectacle pour enfants. L'accueil des Creusois : généreux et authentique. Vive la mission !`,
      video: 'n74BNF8fPcw',
      links: ['La Nef', 'RCF'],
      size: 'small'
    },
    {
      id: 6,
      year: '2020',
      date: '30 Oct - 5 Nov 2020',
      location: 'Séez (Orne)',
      participants: '90',
      image: 'https://famissio-99.webself.net/file/si1759337/2020-fi36533468x520.jpg',
      cities: ['Alençon', 'Ecouché', 'L\'Aigle', 'Le Mêle-sur-Sarthe'],
      story: `COVID change les plans mais n'éteint pas le feu ! 4 paroisses prévues, finalement 2 accueillent 45 missionnaires chacune.

Alençon et Ecouché : une semaine intense malgré les contraintes. La mission s'adapte, la joie demeure, les rencontres restent authentiques.`,
      video: 'ngv3kXBMu5Q',
      links: ['Aleteia'],
      size: 'small'
    },
    {
      id: 7,
      year: '2019',
      date: '1-6 Nov 2019',
      location: 'Limoges (Creuse)',
      participants: '30',
      image: 'https://famissio-99.webself.net/file/si1759337/2019-fi36533467x498.jpg',
      cities: ['Gouzon', 'Boussac'],
      story: `La toute première ! 30 personnes : 3 familles, des jeunes, 2 séminaristes. Un environnement rural touchant, l'accueil du Père Jean-Pierre Barrière.

Petit groupe, grande aventure. Les fondations de Famissio se posent dans la simplicité et la joie de la première mission.`,
      video: 'DdFKEYBhstk',
      links: [],
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
                PROCHAINE MISSION
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  title="Carte Mission 2026"
                  src="https://datawrapper.dwcdn.net/otsD1/1/"
                  className="w-full h-96"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSIONS GALLERY - MOSAIC LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-widest">
            NOTRE HISTOIRE
          </div>
          <h2 className="text-6xl font-black mb-4 year-tag text-gray-900">
            7 MISSIONS
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
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-bold">{mission.participants} Famissionnaires</span>
                  </div>
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
                className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
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
                    <div className="flex items-center gap-3 text-white">
                      <MapPin className="w-6 h-6 text-orange-400" />
                      <span className="text-xl font-semibold">{selectedMission.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Users className="w-6 h-6 text-orange-400" />
                      <span className="text-xl font-semibold">{selectedMission.participants} Famissionnaires</span>
                    </div>
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
                    className="w-full h-full object-cover"
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
                  <button
                    key={idx}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link}
                  </button>
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