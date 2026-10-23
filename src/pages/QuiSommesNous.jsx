import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Heart,
  Flame,
  Sparkles,
  MapPin,
  Church,
  Megaphone,
  Crown,
  Quote,
  ArrowRight,
  Compass,
  Smile
} from 'lucide-react';

const PERE_BARRIERE_IMG = '/assets/images/pere-jean-pierre-barriere.webp';
const MGR_BOZO_IMG = '/assets/images/Mgr-Pierre-Antoine-Bozo.jpg';
const MGR_BOZO_PRAYER_IMG = '/assets/images/priere-eveque.webp';
const FAMILY_HERO_IMG = '/assets/images/Famissio-252.jpg';

export default function QuiSommesNous() {
  const historyMilestones = [
    {
      year: '2018',
      title: "L'étincelle en Inde",
      subtitle: "De l'Himalaya au Tamil Nadu",
      description: "Une famille part vivre pendant deux mois l'évangélisation directe auprès de missionnaires catholiques en Inde. Au cœur des villages isolés, elle découvre la joie contagieuse d'annoncer le Christ simplement, les mains nues.",
      badge: "L'intuition originelle"
    },
    {
      year: '2019',
      title: "Le retour en France & Gouzon",
      subtitle: "Au chevet de la Creuse rurale",
      description: "Pourquoi aller à l'autre bout de la terre alors que nos campagnes ont soif ? Rejoints par quelques familles amies, ils frappent à la porte du Père Jean-Pierre Barrière, curé de Gouzon. Mgr Pierre-Antoine Bozo bénit d'emblée l'initiative : la toute première mission Famissio est lancée.",
      badge: "1ère édition fondatrice"
    },
    {
      year: '2020 - 2023',
      title: "L'ancrage et la fidélité",
      subtitle: "Un souffle qui prend racine",
      description: "Chaque Toussaint, plus d'une trentaine de familles, accompagnées de consacrés et de séminaristes, rejoignent les paroisses rurales. Le modèle s'affine : porte-à-porte doux, bénédiction des cimetières, visite des EHPAD et veillées réconciliatrices.",
      badge: "Croissance & fraternité"
    },
    {
      year: '2024 - 2026',
      title: "Le rayonnement multidiocésain",
      subtitle: "Répondre à l'appel des pasteurs",
      description: "Famissio se déploie désormais dans plusieurs diocèses (Creuse, Haute-Vienne, Corrèze, Lozère, Charente, Charente-Maritime). Mgr Bozo continue de porter et d'inviter Famissio dans son nouveau diocèse de La Rochelle et Saintes.",
      badge: "Mission d'aujourd'hui"
    }
  ];

  const pillars = [
    {
      icon: Smile,
      title: "La famille, cœur battant",
      description: "Les enfants ouvrent les portes là où les théologiens hésitent. Par leur sourire désarmant et leur prière candide, ils témoignent que Dieu est un Père aimant et proche."
    },
    {
      icon: Church,
      title: "Au service des curés de village",
      description: "Nous ne venons pas 'faire notre spectacle' : nous venons choyer, encourager et soutenir un prêtre de campagne souvent seul face à des dizaines de clochers."
    },
    {
      icon: Flame,
      title: "La prière comme unique moteur",
      description: "Pas de mission sans adoration. Chaque journée puise sa force dans la louange matinale, le rosaire, l'Eucharistie et la prière d'intercession pour les habitants."
    },
    {
      icon: Compass,
      title: "La gratuité de la rencontre",
      description: "Marchés, trottoirs, cimetières le jour de la Toussaint : nous allons là où sont les gens, avec respect, pour écouter leurs joies et leurs blessures de vie."
    }
  ];

  const editionsGallery = [
    { year: '2019', place: 'Gouzon (Creuse)', img: '/assets/images/Groupe 2019.webp' },
    { year: '2021', place: 'En mission diocésaine', img: '/assets/images/Groupe 2021.webp' },
    { year: '2023', place: 'Rassemblement Toussaint', img: '/assets/images/Groupe 2023.webp' },
    { year: '2025', place: 'Grande communauté Famissio', img: '/assets/images/Groupe 2025.webp' }
  ];

  return (
    <div className="overflow-clip-x bg-[#faf7f5] text-[#1a1a1a] min-h-screen">
      <Helmet>
        <title>Qui sommes-nous ? - Famissio</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Famissio, née d'une intuition familiale en Inde, notre aumônier le Père Jean-Pierre Barrière et le soutien de Mgr Bozo pour les paroisses rurales."
        />
        <link rel="canonical" href="https://famissio.pages.dev/qui-sommes-nous" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://famissio.pages.dev/qui-sommes-nous" />
        <meta property="og:title" content="Qui sommes-nous ? - Famissio" />
        <meta
          property="og:description"
          content="Découvrez l'histoire de Famissio, née d'une intuition familiale en Inde, notre aumônier le Père Jean-Pierre Barrière et le soutien de Mgr Bozo pour les paroisses rurales."
        />
        <meta property="og:image" content="https://famissio.pages.dev/assets/images/Mgr-Pierre-Antoine-Bozo.jpg" />
      </Helmet>

      {/* STYLES LOCAUX HARMONISÉS AVEC LE SITE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400;1,700&family=Space+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

        .qsn-title-font {
          font-family: 'Space Grotesk', sans-serif;
        }
        .qsn-serif-font {
          font-family: 'Playfair Display', serif;
        }

        .qsn-blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: qsn-morph 10s ease-in-out infinite alternate;
        }
        @keyframes qsn-morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 50% 50% / 50% 60% 40% 50%; }
          100% { border-radius: 40% 60% 70% 30% / 60% 30% 70% 40%; }
        }

        .qsn-gradient-flame {
          background: linear-gradient(135deg, var(--flame) 0%, var(--ember) 60%, #ff8b6b 100%);
        }

        .qsn-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .qsn-card-shadow {
          box-shadow: 0 16px 45px -10px rgba(200, 41, 4, 0.08), 0 4px 16px -2px rgba(0, 0, 0, 0.04);
        }

        .qsn-video-aspect {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }
        .qsn-video-aspect iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>

      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-[#faf7f5] pt-14 pb-20 md:pt-20 md:pb-28">
        {/* Blobs décoratifs en arrière-plan */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/35 qsn-blob filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-200/25 qsn-blob filter blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="qsn-badge bg-orange-100 text-[var(--flame)] border border-orange-200 mb-5">
              <Flame className="w-3.5 h-3.5 fill-current" />
              Des familles en mission au cœur des paroisses
            </span>

            <h1 className="qsn-title-font text-5xl sm:text-7xl md:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
              Qui sommes-<span className="text-[var(--flame)]">nous ?</span>
            </h1>

            <p className="qsn-serif-font italic text-xl sm:text-2xl md:text-3xl text-gray-700 leading-snug mb-8">
              « Une intuition fraternelle née dans les cœurs d'une famille, devenue un souffle d'Espérance pour nos villages. »
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Chaque année, autour de la Toussaint, des familles venues de la France entière, accompagnées de prêtres,
              consacrés et séminaristes, quittent leur quotidien pour entourer un curé de campagne et vivre une semaine
              d'évangélisation directe, joyeuse et intergénérationnelle.
            </p>

            {/* Chiffres & Signes distinctifs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 text-left">
              <div className="bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[var(--flame)] font-black text-3xl sm:text-4xl qsn-title-font">
                  2018
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-1">Origine</div>
                <div className="text-sm font-semibold text-gray-700 mt-0.5">Intuition en Inde</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[var(--ember)] font-black text-3xl sm:text-4xl qsn-title-font">
                  35+
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-1">Chaque Toussaint</div>
                <div className="text-sm font-semibold text-gray-700 mt-0.5">Familles & consacrés</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[var(--flame)] font-black text-3xl sm:text-4xl qsn-title-font">
                  100%
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-1">Générations</div>
                <div className="text-sm font-semibold text-gray-700 mt-0.5">De 7 mois à 85 ans</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[var(--ember)] font-black text-3xl sm:text-4xl qsn-title-font">
                  6+
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-1">Diocèses</div>
                <div className="text-sm font-semibold text-gray-700 mt-0.5">Creuse, Corrèze, Charente...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 : NOTRE HISTOIRE & L'INTUITION FONDATRICE
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-y border-orange-100/70 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="qsn-badge bg-orange-50 text-[var(--flame)] border border-orange-200/80 mb-3">
              Genèse & Vocation
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Comment tout a commencé
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              D’un voyage missionnaire à l’autre bout du monde jusqu’aux clochers du terroir français.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
            {/* Image avec cadre élégant */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={FAMILY_HERO_IMG}
                  alt="Familles Famissio réunies en mission"
                  fetchpriority="high"
                  className="w-full h-[430px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-wider font-bold text-orange-200">La joie du don</div>
                  <div className="font-semibold text-base mt-1">Des enfants et des parents unis par la même foi.</div>
                </div>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-[var(--flame)] to-[var(--ember)] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Heart className="w-8 h-8 fill-white text-transparent shrink-0" />
                <div className="text-sm font-bold leading-tight">
                  La visitation de Marie <br />
                  <span className="font-normal opacity-90 text-xs">vécue de porte en porte</span>
                </div>
              </div>
            </div>

            {/* Texte narratif */}
            <div className="md:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[var(--flame)] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                À l’origine de Famissio, il y a l’aventure audacieuse d’une famille catholique française. En 2018,
                parents et enfants partent deux mois en immersion en Inde, suivant pas à pas des missionnaires dans
                les contreforts de l'Himalaya et les villages du Tamil Nadu. Sur place, ils sont bouleversés par
                la fécondité d’une évangélisation sans artifice : parler du Christ avec la simplicité du cœur,
                remercier, écouter et bénir.
              </p>

              <p>
                De retour en France, une évidence les saisit : <strong className="text-gray-900">pourquoi courir à des milliers de kilomètres</strong> alors
                que nos campagnes françaises vivent une désertification spirituelle sans précédent ? Des dizaines de
                clochers ne voient plus passer qu’un prêtre toutes les quelques semaines, souvent fatigué et isolé.
              </p>

              <div className="p-6 rounded-2xl bg-orange-50/80 border-l-4 border-[var(--flame)] my-6">
                <p className="qsn-serif-font italic text-gray-900 text-lg sm:text-xl font-medium leading-snug">
                  « Si nous allions passer nos vacances de la Toussaint non pas au repos, mais au service d’un curé
                  de campagne pour porter le feu de l’Évangile avec nos enfants ? »
                </p>
                <div className="text-xs uppercase font-bold tracking-wider text-[var(--flame)] mt-2">
                  L'intuition fondatrice de 2018
                </div>
              </div>

              <p>
                Des amis acceptent sans hésiter de tenter l'aventure. Ensemble, ils frappent à la porte d'un pasteur de
                terrain : le <strong className="text-gray-900">Père Jean-Pierre Barrière</strong>, curé dans la Creuse (diocèse de Limoges).
                L’évêque du lieu, <strong className="text-gray-900">Monseigneur Pierre-Antoine Bozo</strong>, discerne immédiatement une œuvre
                providentielle et donne sa pleine bénédiction pastorale.
              </p>

              <p className="font-semibold text-[var(--flame)]">
                Famissio était née. Une famille avait semé la graine ; l’Église en ouvrait les sillons.
              </p>
            </div>
          </div>

          {/* Frise chronologique stylisée */}
          <div className="mt-16 pt-12 border-t border-orange-100">
            <h3 className="qsn-serif-font text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
              Les grandes étapes de l’aventure
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {historyMilestones.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff8f4] border border-orange-200/70 rounded-2xl p-6 relative hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="absolute -top-3.5 left-6 bg-[var(--flame)] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-wider">
                    {item.year}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-wide block mt-2 mb-1">
                      {item.badge}
                    </span>
                    <h4 className="qsn-title-font text-xl font-bold text-gray-900 group-hover:text-[var(--flame)] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 mb-3">{item.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 : LES 4 PILIERS DE FAMISSIO
          ========================================================================= */}
      <section className="py-20 bg-[#faf7f5] relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="qsn-badge bg-white text-[var(--ember)] border border-orange-200 mb-3">
              Notre ADN
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Ce qui fait battre le cœur de Famissio
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Quatre convictions inébranlables vécues concrètement au cours de chaque mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-orange-100 qsn-card-shadow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100/70 text-[var(--flame)] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="qsn-title-font text-xl font-bold text-gray-900 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-orange-100/60 flex items-center text-xs font-bold text-[var(--ember)] uppercase tracking-wider">
                    Pilier #{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 : LE PÈRE JEAN-PIERRE BARRIÈRE (AUMÔNIER)
          ========================================================================= */}
      <section id="pere-barriere" className="py-24 bg-white border-t border-orange-100 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="qsn-badge bg-orange-100 text-[var(--flame)] border border-orange-200 mb-3">
              Accompagnement Spirituel
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Le Père Jean-Pierre Barrière
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Aumônier national de Famissio & Curé pionnier de l'Est creusois.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center bg-[#fff8f4] border border-orange-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
            {/* Portrait du Père Barrière */}
            <div className="lg:col-span-5 text-center flex flex-col items-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto relative z-10">
                  <img
                    src={PERE_BARRIERE_IMG}
                    alt="Père Jean-Pierre Barrière, aumônier de Famissio"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Anneau décoratif */}
                <div className="absolute inset-0 w-60 h-60 sm:w-68 sm:h-68 rounded-full border-2 border-dashed border-[var(--ember)] -top-2 -left-2 sm:-top-2 sm:-left-2 animate-spin-slow pointer-events-none opacity-40" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="qsn-serif-font text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Père Jean-Pierre Barrière
                </h3>
                <p className="text-sm font-bold uppercase tracking-wider text-[var(--flame)] mt-1">
                  Aumônier de Famissio · Diocèse de Limoges
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 mt-2 bg-white px-3 py-1 rounded-full border border-orange-200">
                  <MapPin className="w-3.5 h-3.5 text-[var(--flame)]" />
                  Curé en Creuse (Gouzon, Saint-Pardoux-en-Marche)
                </div>
              </div>
            </div>

            {/* Présentation pastorale & Enseignement */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Prêtre du diocèse de Limoges depuis de longues années, le <strong className="text-gray-900">Père Jean-Pierre Barrière</strong> incarne
                ce ministère de pasteur profondément attaché à la terre, aux clochers ruraux et aux âmes qui les peuplent.
                Curé de la paroisse Sainte-Croix des Deux Creuse (Gouzon) puis de Saint-Pardoux-en-Marche, il a toujours refusé
                la résignation face au vieillissement et à la déprise religieuse de nos campagnes.
              </p>

              <p>
                En 2019, lorsque les premières familles viennent lui proposer de transformer son presbytère en camp de base
                missionnaire à la Toussaint, il accueille la proposition les bras grands ouverts. Convaincu que l'avenir
                de l'Église rurale repose sur la collaboration fraternelle entre ministres ordonnés et familles chrétiennes,
                il devient naturellement <strong className="text-gray-900">l'aumônier national de Famissio</strong>.
              </p>

              {/* Citation du Père Barrière */}
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[var(--ember)] shadow-sm">
                <div className="flex gap-3">
                  <Quote className="w-8 h-8 text-[var(--flame)] shrink-0 opacity-40" />
                  <div>
                    <p className="qsn-serif-font italic text-gray-900 text-lg font-semibold leading-snug">
                      « Quand une famille pousse la porte d'une ferme ou d'une maison de bourg avec son enfant par la main,
                      ce n'est pas un sermon théologique : c'est le Christ Lui-même qui vient visiter son peuple. »
                    </p>
                    <div className="text-xs uppercase font-bold text-gray-500 mt-2 text-right">
                      — Père Jean-Pierre Barrière
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600">
                Pendant chaque mission, le Père Jean-Pierre veille à la profondeur sacramentelle : célébration de l'Eucharistie,
                confessions, veillées d'adoration et formation doctrinale quotidienne adaptée aussi bien aux jeunes enfants qu'aux parents.
              </p>
            </div>
          </div>

          {/* Les 3 Dignités Baptismales enseignées par le Père Jean-Pierre */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="qsn-serif-font text-2xl sm:text-3xl font-bold text-gray-900">
                L'enseignement du Père Jean-Pierre : Prêtre, Prophète et Roi
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Le fondement théologique qui anime chaque missionnaire de Famissio depuis le jour de son baptême.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-7 rounded-2xl border-t-4 border-[var(--flame)] shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--flame)] flex items-center justify-center mb-4">
                  <Church className="w-6 h-6" />
                </div>
                <h4 className="qsn-title-font text-xl font-bold text-gray-900 mb-2">Je suis Prêtre</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Par notre sacerdoce baptismal, nous offrons au Père toute prière, nos peines et nos joies. En mission,
                  nous prions avec et pour les habitants, transformant chaque rencontre en sanctification.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border-t-4 border-[var(--ember)] shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[var(--ember)] flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h4 className="qsn-title-font text-xl font-bold text-gray-900 mb-2">Je suis Prophète</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le prophète est le porte-parole de Dieu. Nous annonçons la Bonne Nouvelle de l’Évangile avec simplicité,
                  en témoignant de ce que Jésus a fait dans nos propres vies et dans nos couples.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border-t-4 border-yellow-500 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6" />
                </div>
                <h4 className="qsn-title-font text-xl font-bold text-gray-900 mb-2">Je suis Roi</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Être roi à la suite du Christ, c’est servir. À l’image du lavement des pieds, nous nous mettons humblement
                  à l'écoute de nos frères, en visitant les malades, les personnes âgées et les âmes esseulées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 : MONSEIGNEUR PIERRE-ANTOINE BOZO
          ========================================================================= */}
      <section id="mgr-bozo" className="py-24 bg-[#faf7f5] border-t border-orange-100 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="qsn-badge bg-orange-100 text-[var(--flame)] border border-orange-200 mb-3">
              Bénédiction Épiscopale
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Monseigneur Pierre-Antoine Bozo
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              L'évêque qui a accueilli, béni et accompagné Famissio depuis le premier jour.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Texte et présentation de Mgr Bozo */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-100 text-[var(--flame)] text-xs uppercase font-extrabold tracking-wider rounded-md">
                  Pasteur de terrain
                </span>
                <span className="text-xs text-gray-500 font-semibold">
                  Évêque de Limoges (2017-2025) · Évêque de La Rochelle & Saintes
                </span>
              </div>

              <p>
                Nommé évêque de Limoges par le pape François en 2017, <strong className="text-gray-900">Monseigneur Pierre-Antoine Bozo</strong> a
                immédiatement placé son épiscopat sous le signe de la sollicitude envers les territoires ruraux et les prêtres
                de campagne. Dès qu’il découvre le projet naissant de Famissio fin 2018, il y voit une réponse audacieuse
                et prophétique à la soif spirituelle du Limousin.
              </p>

              <p>
                Loin de se contenter d'un simple accord de principe, Mgr Bozo s'est <strong className="text-gray-900">impliqué personnellement</strong> :
                président des messes d'envoi solennelles, venant visiter les équipes sur les places de village, partageant
                le repas des missionnaires et se recueillant avec eux au cœur des églises de campagne.
              </p>

              <p>
                Désormais appelé à la tête du diocèse de La Rochelle et Saintes, Monseigneur Bozo a tout naturellement
                renouvelé son invitation à Famissio pour venir irriguer de sa ferveur familiale les terres de Charente-Maritime.
              </p>

              {/* Citation forte de Mgr Bozo */}
              <div className="p-6 bg-white rounded-2xl border-l-4 border-[var(--flame)] shadow-sm">
                <Quote className="w-8 h-8 text-[var(--flame)] opacity-30 mb-2" />
                <p className="qsn-serif-font italic text-gray-900 text-lg font-semibold leading-relaxed">
                  « Voir des familles entières, avec des bébés en poussette, des enfants joyeux et des parents généreux,
                  consacrer une semaine de leurs vacances pour redonner vie à nos églises de village et réchauffer le cœur
                  de nos curés, c’est une bénédiction inestimable pour notre Église. »
                </p>
                <div className="text-xs uppercase font-bold text-[var(--flame)] mt-3">
                  — Mgr Pierre-Antoine Bozo
                </div>
              </div>
            </div>

            {/* Photos & portrait de Mgr Bozo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-orange-100">
                <div className="overflow-hidden rounded-2xl relative">
                  <img
                    src={MGR_BOZO_IMG}
                    alt="Monseigneur Pierre-Antoine Bozo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[320px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                    <p className="font-bold text-lg leading-tight">Mgr Pierre-Antoine Bozo</p>
                    <p className="text-xs text-orange-200">Évêque protecteur de l’initiative Famissio</p>
                  </div>
                </div>
              </div>

              {/* Deuxième photo : en prière avec les familles */}
              <div className="bg-white p-4 rounded-3xl shadow-md border border-orange-100 flex items-center gap-4">
                <img
                  src={MGR_BOZO_PRAYER_IMG}
                  alt="Mgr Bozo en prière avec les familles missionnaires"
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 rounded-2xl object-cover shrink-0"
                />
                <div className="text-xs text-gray-600 leading-snug">
                  <span className="font-bold text-gray-900 block text-sm mb-1">
                    Présent aux côtés des familles
                  </span>
                  Mgr Bozo partageant un temps d'adoration et de bénédiction avec les missionnaires et les enfants au cours d'une semaine Famissio.
                </div>
              </div>
            </div>
          </div>

          {/* L'INTERVIEW VIDÉO DE MGR BOZO SUR RCF */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="qsn-badge bg-red-100 text-[var(--flame)] mb-2">
                Document Vidéo
              </span>
              <h3 className="qsn-serif-font text-2xl sm:text-3xl font-extrabold text-gray-900">
                Monseigneur Bozo présente Famissio sur RCF
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                L’évêque témoigne de la fécondité des familles missionnaires au cœur de nos campagnes.
              </p>
            </div>

            <div className="qsn-video-aspect rounded-2xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/SskypDiEr0c?start=878"
                title="Monseigneur Bozo présente Famissio sur RCF"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 italic">
                Extrait de l'émission RCF Limousin — Témoignage pastoral sur l'élan de la mission en milieu rural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 : EN VIDÉO — QUI SOMMES-NOUS ?
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#1a1a1a] via-[#241c1a] to-[#1a1a1a] text-white relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="qsn-badge bg-[var(--ember)]/20 text-orange-400 border border-orange-500/30 mb-3">
              Au cœur de l'action
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Famissio en images
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-3">
              Découvrez en quelques minutes la vie quotidienne, la joie et l'intensité fraternelle vécue par nos familles en mission.
            </p>
          </div>

          <div className="p-3 sm:p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="qsn-video-aspect rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src="https://www.youtube-nocookie.com/embed/bYFu-nvDDHI"
                title="Présentation Famissio - Qui sommes-nous ?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-orange-400 text-base mb-1">Porte-à-porte doux</div>
              <div className="text-xs text-gray-300">Rencontre humaine à domicile, respectueuse et chaleureuse.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-orange-400 text-base mb-1">Cimetières fleuris</div>
              <div className="text-xs text-gray-300">Présence réconfortante auprès des familles en deuil le 1er novembre.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-orange-400 text-base mb-1">Veillées de lumière</div>
              <div className="text-xs text-gray-300">Églises ouvertes, chants de louange et sacrement du pardon.</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 : LES VISAGES DE LA MISSION (GALERIE HISTORIQUE)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="qsn-badge bg-orange-100 text-[var(--flame)] border border-orange-200 mb-3">
              Mémoire Vivante
            </span>
            <h2 className="qsn-serif-font text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Une grande famille qui s'agrandit
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Chaque édition est un nouveau chapitre d'amitié, de grâces reçues et d'engagements partagés.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editionsGallery.map((ed, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 border border-orange-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={ed.img}
                    alt={`Famissio édition ${ed.year}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-black tracking-widest text-orange-300 uppercase">
                    Édition {ed.year}
                  </span>
                  <h4 className="qsn-title-font text-lg font-bold mt-0.5">{ed.place}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 : PASSERELLE & APPEL À L'ACTION (CTA)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-orange-100/70 via-white to-red-50/60 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex p-3 rounded-full bg-[var(--flame)]/10 text-[var(--flame)] mb-6">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="qsn-title-font text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Prêt à faire un pas de plus avec nous ?
          </h2>

          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Que vous soyez une famille désireuse de vivre l'aventure, un prêtre souhaitant inviter Famissio
            dans sa paroisse, ou simplement un fidèle voulant s'unir à notre prière, la porte est grande ouverte.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/missions"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white bg-[var(--flame)] hover:bg-[var(--ember)] shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>Découvrir nos prochaines missions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/priere"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-gray-800 bg-white hover:bg-orange-50 border border-orange-200 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Prier avec Famissio</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[var(--flame)] bg-orange-100/70 hover:bg-orange-100 border border-orange-200 transition-all duration-200"
            >
              <span>Nous contacter</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
