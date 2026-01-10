import React, { useState } from 'react';
import { X, Download, ArrowUpRight } from 'lucide-react';

const Temoignages = () => {
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const formations = [
    {
      id: 1,
      title: "DIEU EXISTE",
      subtitle: "Arguments & Raison",
      desc: "Les preuves philosophiques de l'existence divine. De Thomas d'Aquin aux découvertes modernes.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/10-%20Quels%20sont%20les%20preuves%20de%20l%E2%80%99existence%20de%20Dieu-fi36256494.pdf",
      pos: "left"
    },
    {
      id: 2,
      title: "TRINITÉ",
      subtitle: "Mystère Central",
      desc: "Un Dieu, trois personnes. Le mystère fondamental expliqué simplement.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/12-%20Comment%20expliquer%20simplement%20la%20Trinit%C3%A9-fi36256492.pdf",
      pos: "right"
    },
    {
      id: 3,
      title: "INCARNATION",
      subtitle: "Dieu fait Homme",
      desc: "Pourquoi le Verbe s'est fait chair. La kénose divine et le mystère de Noël.",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/11-%20Pourquoi%20Dieu%20s%E2%80%99est%20fait%20homme-fi36256487.pdf",
      pos: "center"
    },
    {
      id: 4,
      title: "ÉVANGILES",
      subtitle: "Vérité Historique",
      desc: "Manuscrits, archéologie, martyrs : les preuves de fiabilité des Écritures.",
      img: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/14-%20Comment%20prouver%20la%20v%C3%A9racit%C3%A9%20des%20%C3%A9vangiles-fi36256490.pdf",
      pos: "left"
    },
    {
      id: 5,
      title: "MISÉRICORDE",
      subtitle: "Cœur de Dieu",
      desc: "De sainte Faustine au Jubilé : comprendre la miséricorde divine.",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/9-%20Comment%20t%C3%A9moigner%20de%20la%20mis%C3%A9ricorde%20de%20Dieu-fi36256500.pdf",
      pos: "right"
    },
    {
      id: 6,
      title: "VIE ÉTERNELLE",
      subtitle: "Notre Destinée",
      desc: "Mort, jugement, enfer, purgatoire, ciel : l'eschatologie chrétienne.",
      img: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/1-%20Comment%20annoncer%20la%20vie%20%C3%A9ternelle-fi36256497.pdf",
      pos: "center"
    },
    {
      id: 7,
      title: "L'INDIFFÉRENT",
      subtitle: "Dialogue",
      desc: "Répondre à celui qui n'a pas besoin de Dieu et trouve son bonheur ailleurs.",
      img: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/5-%20Que%20r%C3%A9pondre%20%C3%A0%20l%E2%80%99indiff%C3%A9rent%20qui%20n%E2%80%99a%20pas%20besoin%20de%20Dieu-fi36256493.pdf",
      pos: "left"
    },
    {
      id: 8,
      title: "SOUFFRANCE",
      subtitle: "Compassion",
      desc: "Accompagner la douleur. Dieu ne supprime pas la souffrance, il la remplit de sa présence.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/4-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20souffre-fi36256486.pdf",
      pos: "right"
    },
    {
      id: 9,
      title: "ISLAM",
      subtitle: "Respect & Clarté",
      desc: "Dialogue avec les musulmans. Témoigner de sa foi avec bienveillance.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/13-%20Que%20r%C3%A9pondre%20%C3%A0%20un%20musulman-fi36256498.pdf",
      pos: "center"
    },
    {
      id: 10,
      title: "ÉGLISE",
      subtitle: "Sainte & Pécheresse",
      desc: "Répondre aux scandales. Sainte par le Christ, imparfaite par ses membres.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/6-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20rejette%20l%E2%80%99Eglise%20sainte%20mais%20imparfaite-fi36256495.pdf",
      pos: "left"
    },
    {
      id: 11,
      title: "PRIER SEUL",
      subtitle: "Communion",
      desc: "Pourquoi l'Église et les sacrements sont vitaux pour la foi.",
      img: "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/7-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20prie%20seul%20et%20n%E2%80%99a%20pas%20besoin%20de%20l%E2%80%99Eglise-fi36256491.pdf",
      pos: "right"
    },
    {
      id: 12,
      title: "DIVORCÉS",
      subtitle: "Accueil & Vérité",
      desc: "Accompagner les remariés avec charité et clarté doctrinale.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/8-%20Que%20dire%20%C3%A0%20des%20personnes%20s%C3%A9par%C3%A9es%2C%20remari%C3%A9es-fi36256499.pdf",
      pos: "center"
    },
    {
      id: 13,
      title: "OCCULTE",
      subtitle: "Vigilance",
      desc: "Voyance, magnétisme, spiritisme : les dangers cachés de ces pratiques.",
      img: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/17-%20Quel%20sont%20les%20dangers%20des%20sciences%20occultes-fi36471285.pdf",
      pos: "left"
    },
    {
      id: 14,
      title: "LA PAROLE",
      subtitle: "Annonce",
      desc: "Utiliser l'Écriture Sainte pour toucher les cœurs face à l'indifférence.",
      img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/Mission%20avec%20la%20parole%20de%20Dieu-fi36548922.pdf",
      pos: "right"
    },
    {
      id: 15,
      title: "COUPLE",
      subtitle: "Témoignage",
      desc: "Le sacrement de mariage comme socle de l'évangélisation.",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/16-%20Quels%20fruits%20pour%20la%20mission%20en%20couple-fi36256501.pdf",
      pos: "center"
    },
    {
      id: 16,
      title: "GRATITUDE",
      subtitle: "Joie",
      desc: "Transformer son regard sur la vie par l'action de grâce quotidienne.",
      img: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/15-%20Comment%20vivre%20de%20la%20gratitude-fi36256488.pdf",
      pos: "left"
    },
    {
      id: 17,
      title: "PARDON",
      subtitle: "Libération",
      desc: "Le chemin difficile mais libérateur du pardon authentique.",
      img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/3-%20Pourquoi%20et%20comment%20pardonner-fi36256489.pdf",
      pos: "right"
    },
    {
      id: 18,
      title: "DISCERNEMENT",
      subtitle: "Écoute",
      desc: "Reconnaître les signes de Dieu au quotidien : Écriture, événements, paix intérieure.",
      img: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800",
      pdf: "https://famissio-99.webself.net/file/si1759337/download/2-%20Comment%20Dieu%20nous%20guide-t-il-fi36256496.pdf",
      pos: "center"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap');
        
        .editorial-item {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .editorial-item:hover .img-layer {
          transform: scale(1.05) rotate(2deg);
        }
        
        .editorial-item:hover .text-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .number-stamp {
          font-family: 'Bebas Neue', cursive;
          mix-blend-mode: difference;
        }
      `}</style>

      {/* HERO */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="text-orange-500 text-sm font-bold tracking-widest mb-6">
            ACADÉMIE FAMISSIO
          </div>
          <h1 className="text-9xl sm:text-[12rem] font-black leading-none mb-8" style={{ fontFamily: 'Bebas Neue, cursive' }}>
            18
          </h1>
          <p className="text-3xl sm:text-5xl font-light max-w-4xl mx-auto leading-tight">
            Formations visuelles pour<br />
            <span className="text-orange-500 font-bold">répondre en mission</span>
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-400 animate-pulse">
          SCROLL POUR EXPLORER ↓
        </div>
      </div>

      {/* FORMATIONS */}
      <div className="relative">
        {formations.map((formation, idx) => (
          <div
            key={formation.id}
            className={`editorial-item relative min-h-screen flex items-center ${formation.pos === 'left' ? 'justify-start' :
                formation.pos === 'right' ? 'justify-end' :
                  'justify-center'
              } py-20`}
            onMouseEnter={() => setHoveredId(formation.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Layer */}
            <div className={`img-layer absolute inset-0 ${formation.pos === 'left' ? 'left-0 right-1/3' :
                formation.pos === 'right' ? 'left-1/3 right-0' :
                  'left-1/4 right-1/4'
              }`}>
              <img
                src={formation.img}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  filter: hoveredId === formation.id ? 'brightness(0.6)' : 'brightness(0.3)',
                  transition: 'all 0.6s'
                }}
              />
            </div>

            {/* Number Stamp */}
            <div
              className="number-stamp absolute text-[20rem] font-black opacity-10"
              style={{
                top: '50%',
                left: formation.pos === 'right' ? '10%' : formation.pos === 'left' ? 'auto' : '50%',
                right: formation.pos === 'left' ? '10%' : 'auto',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            >
              {String(idx + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-2xl px-12 ${formation.pos === 'center' ? 'text-center' : ''
              }`}>
              <div className="inline-block px-4 py-1 bg-orange-500 text-black text-xs font-bold tracking-widest mb-6">
                {formation.subtitle}
              </div>

              <h2 className="text-7xl sm:text-8xl font-black mb-8 leading-none" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                {formation.title}
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {formation.desc}
              </p>

              {/* Actions - appears on hover */}
              <div className={`text-overlay flex gap-4 opacity-0 translate-y-4 ${formation.pos === 'center' ? 'justify-center' : ''
                }`}>
                <button
                  onClick={() => setSelectedFormation(formation)}
                  className="px-8 py-4 bg-white text-black font-bold hover:bg-orange-500 transition-colors flex items-center gap-2"
                >
                  <span>LIRE LA FORMATION</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <a
                  href={formation.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="relative bg-orange-500 text-black py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-7xl font-black mb-6" style={{ fontFamily: 'Bebas Neue, cursive' }}>
            PRÊT POUR LA MISSION ?
          </h2>
          <p className="text-2xl mb-12">
            L'Esprit Saint vous guidera. Vous êtes ses instruments.
          </p>
          <div className="text-sm font-bold tracking-widest">
            FORMATION • MISSION • TÉMOIGNAGE
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedFormation && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            onClick={() => setSelectedFormation(null)}
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>

          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedFormation.pdf)}&embedded=true`}
            className="w-full h-full"
            title={selectedFormation.title}
          />
        </div>
      )}
    </div>
  );
};

export default Temoignages;