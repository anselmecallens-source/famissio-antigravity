import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Flame,
  Church,
  Megaphone,
  Crown,
  Quote,
  Smile,
  Compass
} from 'lucide-react';

const PERE_BARRIERE_IMG = '/assets/images/pere-jean-pierre-barriere.webp';
const MGR_BOZO_IMG = '/assets/images/Mgr-Pierre-Antoine-Bozo.jpg';
const MGR_BOZO_PRAYER_IMG = '/assets/images/priere-eveque.webp';
const FOUNDING_IMG = '/assets/images/facebook_1607379806212_6741839550715485834.jpg';
const FAMILY_PHOTO_IMG = '/assets/images/Famissio-252.jpg';

export default function QuiSommesNous() {
  const editions = [
    { year: '2019', location: 'Gouzon (Creuse)', img: '/assets/images/Groupe 2019.webp', description: 'La première édition fondatrice accueillie par le Père Jean-Pierre Barrière.' },
    { year: '2021', location: 'Est-Creusois', img: '/assets/images/Groupe 2021.webp', description: 'Une communauté de familles qui grandit et s’enracine dans la fidélité.' },
    { year: '2023', location: 'Limousin', img: '/assets/images/Groupe 2023.webp', description: 'Plus de 35 familles réunies avec prêtres et consacrés pour la Toussaint.' },
    { year: '2025', location: 'Nouvelle-Aquitaine', img: '/assets/images/Groupe 2025.webp', description: 'Le déploiement continu au service de multiples clochers ruraux.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#1a1a1a] overflow-clip-x">
      <Helmet>
        <title>Qui sommes-nous ? - Famissio</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Famissio, des familles en mission aux côtés des curés de campagne, notre aumônier le Père Jean-Pierre Barrière et le soutien de Mgr Bozo."
        />
        <link rel="canonical" href="https://famissio.pages.dev/qui-sommes-nous" />
      </Helmet>

      {/* =========================================================================
          HERO HARMONISÉ — ÉLÉGANT, DÉGAGÉ, À ÉCHELLE HUMAINE
          ========================================================================= */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
          
          .blob {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morph 10s ease-in-out infinite;
          }
          
          @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 70% 30% 50% 50% / 50% 60% 40% 50%; }
          }
        `}</style>

        {/* Blobs doux en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/4 w-80 h-80 bg-orange-200/40 blob filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-200/30 blob filter blur-3xl" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Contenu Hero compact et lisible */}
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black text-orange-600 tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Qui sommes-nous ?
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Des familles venues de toute la France, rassemblées chaque année à la Toussaint pour entourer les curés ruraux et porter l'Évangile au cœur des villages.
          </p>
        </div>
      </div>

      {/* Ligne de transition harmonisée */}
      <div className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 h-2 border-y border-orange-200/50"></div>

      {/* =========================================================================
          CONTENU PRINCIPAL — GRANDES MARGES LATÉRALES & CARTES ÉPURÉES
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16">

        {/* -----------------------------------------------------------------------
            SECTION 1 : L'HISTORIQUE & L'INTUITION FONDATRICE
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-orange-100/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">
              L'histoire de Famissio
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 leading-snug"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Une étincelle venue d'Inde, enracinée en Creuse
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Colonne Image */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={FOUNDING_IMG}
                  alt="Les familles fondatrices de Famissio"
                  fetchpriority="high"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hidden sm:block">
                <img
                  src={FAMILY_PHOTO_IMG}
                  alt="Une famille en mission sur le terrain"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-44 object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 italic text-center">
                Des parents et leurs enfants, premiers témoins de la foi.
              </p>
            </div>

            {/* Colonne Récit */}
            <div className="md:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Tout a commencé en <strong>2018</strong>. Une famille catholique française décide de vivre une expérience
                marquante : partir pendant deux mois suivre des missionnaires en Inde, dans les contreforts de l'Himalaya
                et les villages du Tamil Nadu. Sur place, au contact de communautés simples et ferventes, parents et enfants
                découvrent la puissance désarmante d'une évangélisation directe, humble, faite d'écoute, de prière et de confiance totale en la Providence.
              </p>

              <p>
                À leur retour en France, une question ne cesse de résonner : <em>pourquoi traverser les océans alors que nos propres campagnes souffrent en silence de la déchristianisation et de la solitude ?</em>
              </p>

              <div className="p-5 bg-orange-50/60 border-l-4 border-orange-500 rounded-r-xl my-4">
                <p className="text-gray-900 font-medium italic text-base leading-snug">
                  « Nos villages ont soif. Des curés dévoués portent parfois seuls trente clochers. Si des familles entières venaient passer une semaine avec eux pour réchauffer les cœurs ? »
                </p>
              </div>

              <p>
                Des familles amies sont immédiatement séduites par l'intuition. À l'automne <strong>2019</strong>, le groupe
                propose ses bras et sa prière à un prêtre de campagne de la Creuse : le <strong>Père Jean-Pierre Barrière</strong>,
                curé de Gouzon. L'évêque du diocèse de Limoges, <strong>Monseigneur Pierre-Antoine Bozo</strong>, accueille
                la démarche avec un enthousiasme paternel et donne sans hésiter sa bénédiction épiscopale.
              </p>

              <p>
                La première semaine de mission est une révélation pour tous : paroissiens, curé, habitants visités et familles missionnaires.
                L'aventure <strong>Famissio</strong> était née.
              </p>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 2 : LE PÈRE JEAN-PIERRE BARRIÈRE
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-orange-100/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">
              Aumônier spirituel national
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 leading-snug"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Le Père Jean-Pierre Barrière
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Curé enraciné dans la Creuse et pasteur bienveillant de Famissio.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <div className="md:col-span-4 text-center flex flex-col items-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-lg border-4 border-orange-100 p-1 bg-white">
                <img
                  src={PERE_BARRIERE_IMG}
                  alt="Père Jean-Pierre Barrière, aumônier de Famissio"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Père Jean-Pierre Barrière
                </h3>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                  Aumônier de Famissio
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Curé de Gouzon & Saint-Pardoux-en-Marche
                </p>
              </div>
            </div>

            {/* Description & Cœur pastoral */}
            <div className="md:col-span-8 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Prêtre du diocèse de Limoges, le Père Jean-Pierre Barrière est une figure emblématique de la pastorale rurale.
                Homme d'écoute et de prière, il connaît intimement la réalité des bourgs et des hameaux creusois, les joies
                simples des campagnes comme les épreuves liées à l'isolement.
              </p>

              <p>
                Dès 2019, il a ouvert tout grand le presbytère et les églises de sa paroisse pour accueillir les missionnaires.
                Convaincu que le prêtre et la famille chrétienne sont deux poumons indissociables d'une même Église vivante,
                il a accepté de devenir <strong>l'aumônier de Famissio</strong> afin d'accompagner chaque année le discernement,
                la prière et la vie sacramentelle des participants.
              </p>

              <div className="p-4 bg-orange-50/50 rounded-xl border-l-4 border-orange-500 my-3">
                <div className="flex gap-2.5">
                  <Quote className="w-5 h-5 text-orange-600 shrink-0 opacity-50" />
                  <p className="text-gray-900 font-medium italic text-sm sm:text-base leading-snug">
                    « Quand une famille sonne à la porte d'un habitant avec un enfant par la main, ce n'est pas une leçon de théologie :
                    c'est la joie de la Visitation. La mission redonne à nos clochers leur pleine vocation. »
                  </p>
                </div>
              </div>

              <p>
                Tout au long de la semaine de Toussaint, le Père Jean-Pierre assure la fidélité de l'enseignement spirituel,
                dispense le sacrement de réconciliation et célèbre les messes quotidiennes qui nourrissent l'action des familles.
              </p>
            </div>
          </div>

          {/* Les 3 piliers baptismaux */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3
              className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              L'enseignement du Père Jean-Pierre : Prêtre, Prophète et Roi
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-orange-50/40 p-5 rounded-2xl border border-orange-100/70">
                <div className="w-10 h-10 bg-white rounded-xl shadow-xs text-orange-600 flex items-center justify-center mb-3">
                  <Church className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">1. Prêtre</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Par notre baptême, nous offrons au Père chaque rencontre. Nous prions avec et pour les habitants, transformant chaque maison en lieu de bénédiction.
                </p>
              </div>

              <div className="bg-orange-50/40 p-5 rounded-2xl border border-orange-100/70">
                <div className="w-10 h-10 bg-white rounded-xl shadow-xs text-orange-600 flex items-center justify-center mb-3">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">2. Prophète</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Le prophète est le porte-parole de Dieu. En mission, parents et enfants annoncent l'Évangile avec simplicité, en témoignant de l'Amour de Dieu dans leur vie.
                </p>
              </div>

              <div className="bg-orange-50/40 p-5 rounded-2xl border border-orange-100/70">
                <div className="w-10 h-10 bg-white rounded-xl shadow-xs text-orange-600 flex items-center justify-center mb-3">
                  <Crown className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">3. Roi</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Être roi pour un baptisé, c’est servir à l'exemple du lavement des pieds. C'est aller vers les plus isolés, les aînés et les âmes éprouvées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 3 : MONSEIGNEUR PIERRE-ANTOINE BOZO
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-orange-100/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">
              Bénédiction & Soutien Épiscopal
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 leading-snug"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Monseigneur Pierre-Antoine Bozo
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              L'évêque qui a cru en cette initiative dès la première heure.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center mb-8">
            {/* Récit de son soutien */}
            <div className="md:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Évêque de Limoges de 2017 à 2025, puis nommé évêque de La Rochelle et Saintes, <strong>Monseigneur Pierre-Antoine Bozo</strong> est
                un pasteur habité par le souci d'une Église de plein vent, proche du terrain et attentive à la ruralité.
              </p>

              <p>
                Dès 2019, lorsque le projet d'une semaine de mission en famille lui est présenté, il n'y voit pas une simple activité de passage,
                mais une <strong>grâce providentielle</strong> pour dynamiser les paroisses et apporter un soutien fraternel inestimable aux curés ruraux.
              </p>

              <p>
                Son accompagnement s'est traduit par une fidélité concrète : célébration des messes solennelles d'envoi en mission,
                visites sur le terrain, temps de prière partagés avec les missionnaires et les enfants, et accueil renouvelé des missions
                au sein de ses diocèses successifs.
              </p>

              <div className="p-4 bg-orange-50/50 rounded-xl border-l-4 border-orange-500 my-3">
                <Quote className="w-5 h-5 text-orange-600 opacity-50 mb-1.5" />
                <p className="text-gray-900 font-medium italic text-sm sm:text-base leading-snug">
                  « Voir des familles complètes, des parents investis et des enfants joyeux consacrer leurs vacances pour apporter le témoignage de leur foi dans nos bourgs et entourer nos prêtres, c'est une bénédiction inestimable. »
                </p>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-2">
                  — Monseigneur Pierre-Antoine Bozo
                </p>
              </div>
            </div>

            {/* Photos de Mgr Bozo */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={MGR_BOZO_IMG}
                  alt="Monseigneur Pierre-Antoine Bozo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 sm:h-72 object-cover object-top"
                />
              </div>

              <div className="bg-orange-50/50 p-3.5 rounded-xl border border-orange-100/70 flex items-center gap-3">
                <img
                  src={MGR_BOZO_PRAYER_IMG}
                  alt="Mgr Bozo en prière avec les enfants et les familles"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-lg object-cover shrink-0 shadow-xs"
                />
                <p className="text-xs text-gray-600 leading-snug">
                  <strong className="text-gray-900 block mb-0.5">Proximité fraternelle</strong>
                  Monseigneur Bozo priant avec les missionnaires et bénissant les enfants au cours d'une mission.
                </p>
              </div>
            </div>
          </div>

          {/* Intégration de la vidéo RCF */}
          <div className="mt-8 pt-8 border-t border-gray-100 max-w-3xl mx-auto">
            <div className="text-center mb-5">
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Monseigneur Bozo présente Famissio sur RCF
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                L'évêque explique au micro de RCF pourquoi la présence des familles est un trésor pour les villages.
              </p>
            </div>

            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/SskypDiEr0c?start=878"
                title="Monseigneur Bozo présente Famissio sur RCF"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 4 : CE QUI SE VIT PENDANT UNE SEMAINE DE MISSION
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-orange-100/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">
              Au cœur de la mission
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 leading-snug"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Le quotidien d'une semaine Famissio
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Comment se déroule concrètement la mission sur le terrain, du matin au soir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 text-gray-700 leading-relaxed text-sm">
            <div className="bg-orange-50/30 p-5 rounded-2xl border border-orange-100/60 space-y-2">
              <div className="flex items-center gap-2.5 text-orange-600 font-bold text-base">
                <Flame className="w-4 h-4" />
                <span>Laudes & Louange du matin</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Chaque journée commence dans l'église par la louange partagée, la prière des laudes et une courte formation
                spirituelle adaptée aux enfants comme aux adultes. C'est le cœur battant d'où jaillit toute notre énergie missionnaire.
              </p>
            </div>

            <div className="bg-orange-50/30 p-5 rounded-2xl border border-orange-100/60 space-y-2">
              <div className="flex items-center gap-2.5 text-orange-600 font-bold text-base">
                <Compass className="w-4 h-4" />
                <span>Le porte-à-porte doux</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                L'après-midi, les équipes partent par deux dans les bourgs et les fermes isolées. Souvent un parent avec son enfant :
                pas d'arguments compliqués, simplement saluer, prendre des nouvelles, écouter les peines, proposer une intention de prière et bénir.
              </p>
            </div>

            <div className="bg-orange-50/30 p-5 rounded-2xl border border-orange-100/60 space-y-2">
              <div className="flex items-center gap-2.5 text-orange-600 font-bold text-base">
                <Heart className="w-4 h-4" />
                <span>Présence aux cimetières à la Toussaint</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Le 1er et le 2 novembre, les familles se rendent dans les cimetières de village. Elles offrent une parole de paix,
                aident à fleurir les tombes, prient avec les proches en deuil et rappellent l'Espérance chrétienne de la Résurrection.
              </p>
            </div>

            <div className="bg-orange-50/30 p-5 rounded-2xl border border-orange-100/60 space-y-2">
              <div className="flex items-center gap-2.5 text-orange-600 font-bold text-base">
                <Smile className="w-4 h-4" />
                <span>Veillées ouvertes & Réconciliation</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Le soir, les églises s'illuminent de centaines de bougies. Chants, témoignages, temps de silence et présence de prêtres
                pour ceux qui désirent se confesser ou simplement déposer un fardeau après des années d'éloignement.
              </p>
            </div>
          </div>

          {/* Vidéo de présentation officielle */}
          <div className="mt-8 pt-8 border-t border-gray-100 max-w-3xl mx-auto">
            <div className="text-center mb-5">
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Immersion en images
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                La présentation officielle de Famissio en vidéo.
              </p>
            </div>

            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/bYFu-nvDDHI"
                title="Présentation de Famissio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 5 : GALERIE DES ÉDITIONS HISTORIQUES
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-orange-100/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">
              Mémoire & Continuité
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 leading-snug"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Au fil des années
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Chaque édition rassemble de nouveaux foyers et renforce la communion fraternelle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {editions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-xs bg-[#faf7f5] flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={`Famissio édition ${item.year} à ${item.location}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-orange-600 mb-1">
                    <span>Édition {item.year}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{item.location}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
