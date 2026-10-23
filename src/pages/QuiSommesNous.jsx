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
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-clip-x">
      <Helmet>
        <title>Qui sommes-nous ? - Famissio</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Famissio, des familles en mission aux côtés des curés de campagne, notre aumônier le Père Jean-Pierre Barrière et le soutien de Mgr Bozo."
        />
        <link rel="canonical" href="https://famissio.pages.dev/qui-sommes-nous" />
      </Helmet>

      {/* =========================================================================
          HERO — STRICTEMENT IDENTIQUE AUX 4 AUTRES PAGES (Missions, Formation, Témoignages, Prière)
          ========================================================================= */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');
          
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-200 blob opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1
            className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center text-orange-600"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Qui sommes-nous ?
          </h1>

          <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium min-h-[110px] flex items-center justify-center">
            Des familles missionnaires venues de toute la France, rassemblées chaque année à la Toussaint pour entourer les curés ruraux et porter l'Évangile au cœur des villages.
          </p>
        </div>
      </div>

      {/* BANDEAU DE TRANSITION ORANGE SIGNATURE DES PAGES DU SITE */}
      <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

      {/* =========================================================================
          CONTENU PRINCIPAL — ENCADRÉ & SOBRE DANS LE MOOD DES AUTRES PAGES
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* -----------------------------------------------------------------------
            SECTION 1 : L'HISTORIQUE & L'INTUITION FONDATRICE
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-orange-100/90 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-2">
              L'histoire de Famissio
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Une étincelle venue de loin, ancrée dans nos campagnes
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Colonne Image */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={FOUNDING_IMG}
                  alt="Les familles fondatrices de Famissio"
                  fetchpriority="high"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hidden sm:block">
                <img
                  src={FAMILY_PHOTO_IMG}
                  alt="Une famille en mission sur le terrain"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 italic text-center">
                Des parents et leurs enfants, premiers témoins de la joie de l'Évangile.
              </p>
            </div>

            {/* Colonne Récit */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Tout a commencé en <strong>2018</strong>. Une famille catholique française décide de vivre une expérience
                marquante : partir pendant deux mois suivre des missionnaires en Inde, dans les contreforts de l'Himalaya
                et les villages du Tamil Nadu. Sur place, au contact de communautés simples et ferventes, parents et enfants
                découvrent la puissance désarmante d'une évangélisation directe, humble, faite d'écoute, de prière et de confiance totale en la Providence.
              </p>

              <p>
                À leur retour en France, une question ne cesse de résonner : <em>pourquoi traverser les océans alors que nos propres campagnes souffrent en silence de la déchristianisation et de la solitude ?</em>
              </p>

              <div className="p-6 bg-orange-50/70 border-l-4 border-orange-500 rounded-r-2xl my-6">
                <p className="text-gray-900 font-semibold italic text-lg leading-snug">
                  « Nos villages ruraux ont soif. Des curés dévoués portent parfois seuls trente ou quarante clochers. Si des familles entières venaient passer une semaine avec eux pour réchauffer les cœurs ? »
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
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-orange-100/90">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-2">
              Aumônier spirituel national
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Le Père Jean-Pierre Barrière
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Curé enraciné dans la Creuse et berger bienveillant de la famille Famissio.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Portrait */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-orange-200 p-1 bg-white">
                <img
                  src={PERE_BARRIERE_IMG}
                  alt="Père Jean-Pierre Barrière, aumônier de Famissio"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Père Jean-Pierre Barrière
                </h3>
                <p className="text-sm font-semibold text-orange-600">
                  Aumônier de Famissio
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Curé de Gouzon & Saint-Pardoux-en-Marche
                </p>
              </div>
            </div>

            {/* Description & Cœur pastoral */}
            <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
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

              <div className="p-6 bg-red-50/60 rounded-2xl border-l-4 border-red-500 my-4">
                <div className="flex gap-3">
                  <Quote className="w-8 h-8 text-red-500 shrink-0 opacity-40" />
                  <p className="text-gray-900 font-medium italic text-base sm:text-lg leading-relaxed">
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
          <div className="mt-14 pt-10 border-t border-gray-100">
            <h3
              className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              L'enseignement du Père Jean-Pierre : Prêtre, Prophète et Roi
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-orange-600 flex items-center justify-center mb-4">
                  <Church className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Prêtre</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Par notre baptême, nous participons au sacerdoce du Christ. Nous offrons au Père chaque rencontre,
                  nous prions avec et pour les habitants, transformant chaque maison visitée en lieu de bénédiction.
                </p>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-orange-600 flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Prophète</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le prophète est le porte-parole de Dieu. En mission, parents et enfants annoncent l'Évangile avec simplicité,
                  en témoignant de ce que Jésus éclaire et guérit dans leur propre quotidien familial.
                </p>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-orange-600 flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Roi</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Être roi pour un baptisé, c’est se mettre au service de ses frères, à l'exemple du lavement des pieds.
                  C'est aller vers les personnes âgées isolées, les malades et tous ceux qui se sentent oubliés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 3 : MONSEIGNEUR PIERRE-ANTOINE BOZO
            ----------------------------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-orange-100/90">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-2">
              Bénédiction & Soutien Épiscopal
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Monseigneur Pierre-Antoine Bozo
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              L'évêque qui a cru en cette initiative dès la première heure et continue de la porter.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
            {/* Récit de son soutien */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Évêque de Limoges de 2017 à 2025, puis nommé évêque de La Rochelle et Saintes, <strong>Monseigneur Pierre-Antoine Bozo</strong> est
                un pasteur habité par le souci d'une Église missionnaire de plein vent, proche du terrain et attentive à la ruralité.
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

              <div className="p-6 bg-orange-50/70 rounded-2xl border-l-4 border-orange-500 my-4">
                <Quote className="w-8 h-8 text-orange-500 opacity-40 mb-2" />
                <p className="text-gray-900 font-medium italic text-base sm:text-lg leading-relaxed">
                  « Voir des familles complètes, des parents investis et des enfants joyeux consacrer leurs vacances de la Toussaint
                  pour apporter le témoignage de leur foi dans nos bourgs et entourer nos prêtres, c'est une bénédiction inestimable. »
                </p>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-2">
                  — Monseigneur Pierre-Antoine Bozo
                </p>
              </div>
            </div>

            {/* Photos de Mgr Bozo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={MGR_BOZO_IMG}
                  alt="Monseigneur Pierre-Antoine Bozo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover object-top"
                />
              </div>

              <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 flex items-center gap-4">
                <img
                  src={MGR_BOZO_PRAYER_IMG}
                  alt="Mgr Bozo en prière avec les enfants et les familles"
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
                />
                <p className="text-xs text-gray-600 leading-snug">
                  <strong className="text-gray-900 block mb-0.5">Proximité pastorale</strong>
                  Monseigneur Bozo priant et bénissant les familles au cours d'une semaine de mission Famissio.
                </p>
              </div>
            </div>
          </div>

          {/* Intégration de la vidéo RCF */}
          <div className="mt-10 pt-10 border-t border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Monseigneur Bozo présente Famissio sur RCF
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                L'évêque explique au micro de RCF pourquoi la présence des familles est un trésor pour les villages.
              </p>
            </div>

            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl bg-black">
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
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-orange-100/90">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-2">
              Au cœur de la réalité
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Le quotidien d'une semaine Famissio
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Comment se déroule concrètement la mission sur le terrain, du matin au soir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed text-base">
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-orange-600 font-bold text-lg">
                <Flame className="w-5 h-5" />
                <span>Laudes & Louange du matin</span>
              </div>
              <p className="text-sm text-gray-600">
                Chaque journée commence dans l'église par la louange partagée, la prière des laudes et une courte formation
                spirituelle adaptée aux enfants comme aux adultes. C'est le cœur battant d'où jaillit toute notre énergie missionnaire.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-orange-600 font-bold text-lg">
                <Compass className="w-5 h-5" />
                <span>Le porte-à-porte doux</span>
              </div>
              <p className="text-sm text-gray-600">
                L'après-midi, les équipes partent par deux dans les bourgs et les fermes isolées. Souvent un parent avec son enfant :
                pas d'arguments compliqués, simplement saluer, prendre des nouvelles, écouter les peines, proposer une intention de prière et bénir.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-orange-600 font-bold text-lg">
                <Heart className="w-5 h-5" />
                <span>Présence aux cimetières à la Toussaint</span>
              </div>
              <p className="text-sm text-gray-600">
                Le 1er et le 2 novembre, les familles se rendent dans les cimetières de village. Elles offrent une parole de paix,
                aident à fleurir les tombes, prient avec les proches en deuil et rappellent l'Espérance chrétienne de la Résurrection.
              </p>
            </div>

            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-orange-600 font-bold text-lg">
                <Smile className="w-5 h-5" />
                <span>Veillées ouvertes & Réconciliation</span>
              </div>
              <p className="text-sm text-gray-600">
                Le soir, les églises s'illuminent de centaines de bougies. Chants, témoignages, temps de silence et présence de prêtres
                pour ceux qui désirent se confesser ou simplement déposer un fardeau après des années d'éloignement.
              </p>
            </div>
          </div>

          {/* Vidéo de présentation officielle */}
          <div className="mt-14 pt-10 border-t border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Immersion en images
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                La présentation officielle de Famissio en vidéo.
              </p>
            </div>

            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl bg-black">
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
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-orange-100/90">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-2">
              Mémoire & Continuité
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Au fil des années
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Chaque édition rassemble de nouveaux foyers et renforce la communion fraternelle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-gray-50 flex flex-col justify-between"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={`Famissio édition ${item.year} à ${item.location}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-bold text-orange-600 mb-1">
                    <span>Édition {item.year}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{item.location}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
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
