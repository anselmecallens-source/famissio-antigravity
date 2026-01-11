import React, { useState } from 'react';
import { X, Play, Users, Church, ArrowRight } from 'lucide-react';

const TemoignagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimony, setSelectedTestimony] = useState(null);

  const testimonies = [
    {
      id: 1,
      title: "La foi transmise par les enfants",
      category: "missionnaire",
      type: "text",
      quote: "Les grands missionnaires que nous désirons tant, je crois que ce sont les enfants",
      content: "Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Car évangéliser ce n'est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère... Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon quart d'heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors qu'il n'avait encore prononcé aucune parole, le petit Henri interrompt soudainement notre discussion pour proposer à cet homme de prier pour lui : cette simple parole l'a bouleversé !",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
      location: "Creuse 2023"
    },
    {
      id: 2,
      title: "Une messe pour un être cher",
      category: "missionnaire",
      type: "text",
      quote: "Suite à notre échange, elle a souhaité demander une messe pour son mari",
      content: "Ma rencontre avec Jeanne, très fatiguée par la maladie, qui venait de perdre son mari. Suite à notre échange, elle a souhaité demander une messe pour son mari. Un moment de grâce et de consolation mutuelle.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
      location: "Mende 2024"
    },
    {
      id: 3,
      title: "De la paroisse à la mission",
      category: "paroissien",
      type: "video",
      videoId: "UWsUCF_HG6w",
      quote: "Accueillir Famissio a transformé notre paroisse",
      content: "Témoignage vidéo d'un paroissien qui a accueilli Famissio et qui raconte comment cette semaine a transformé sa vision de l'évangélisation.",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800",
      location: "Limoges 2023"
    },
    {
      id: 4,
      title: "Une joie profonde partagée",
      category: "missionnaire",
      type: "text",
      quote: "La joie profonde de Dieu de nous aimer et d'aller ensemble aimer les autres",
      content: "Une communion extraordinaire nous a conduits toute la semaine. À cette communion, à cet amour fraternel était mêlée une joie immense. La joie profonde de Dieu de nous aimer et d'aller ensemble aimer les autres. Les louanges sonnaient vrai. Les rencontres sonnaient vrai, pleines de miséricorde.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
      location: "Digne 2022"
    },
    {
      id: 5,
      title: "Découvrir la vraie miséricorde",
      category: "missionnaire",
      type: "text",
      quote: "On entre en aimant la personne, on la prend comme elle se présente sans la juger",
      content: "Pour la première fois, j'ai vécu la miséricorde de Dieu comme je pense qu'Il doit être. On entre en aimant la personne, on la prend comme elle se présente sans la juger, on n'a qu'une envie c'est de l'aimer et la sauver en Jésus-Christ.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      location: "Alençon 2020"
    },
    {
      id: 6,
      title: "Un appel au service de consolation",
      category: "missionnaire",
      type: "text",
      quote: "Patricia a ouvert sa porte et a fondu en larmes",
      content: "Chacun a découvert le charisme donné par l'Esprit Saint en écoutant les personnes rencontrées. Pour ma part, je vois confirmer le service de consolation auquel le Seigneur m'appelle. Patricia a ouvert sa porte et a fondu en larmes en nous disant que son mari était décédé il y avait 1 mois. Mon cœur était brisé ! Nous lui avons parlé longtemps jusqu'à ce qu'elle retrouve le sourire. Nous l'avons quittée en paix pour la retrouver à la louange le soir, habitée par la confiance et pleine de gratitude.",
      image: "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?w=800",
      location: "Gouzon 2021"
    },
    {
      id: 7,
      title: "L'Esprit Saint à l'œuvre",
      category: "missionnaire",
      type: "text",
      quote: "Son cœur a été bouleversé et elle nous a confié beaucoup de choses",
      content: "Qu'il est beau de voir l'action de l'Esprit Saint dans les cœurs pendant les temps d'évangélisation. Je pense notamment à cette dame que nous avons rencontrée sur le parking d'une grande surface. D'abord pressée et peu intéressée, elle a quand même accepté que nous fassions une prière pour elle et c'est à ce moment-là que son cœur a été bouleversé. Les larmes aux yeux, elle nous a confié beaucoup de choses.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      location: "Massiac 2024"
    },
    {
      id: 8,
      title: "Oser sans insister",
      category: "paroissien",
      type: "text",
      quote: "J'ai appris qu'il fallait oser, oser sans insister",
      content: "J'ai appris qu'il fallait oser, oser sans insister... Les gens sont réticents au premier abord, mais se livrent dès que la confiance est instaurée et vont jusqu'à accepter la prière et la médaille de Marie. Cette expérience m'a appris la patience et l'écoute.",
      image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=800",
      location: "Limoges 2025"
    },
    {
      id: 9,
      title: "Le désir de prier avant chaque rencontre",
      category: "paroissien",
      type: "text",
      quote: "Prier devant chaque porte a transformé ma vie quotidienne",
      content: "Un fruit reçu est le désir de prier plus précisément avant les rencontres que je fais chaque jour, ainsi que pour les projets qui me tiennent à cœur. C'est ce à quoi j'ai goûté pendant la semaine, alors que nous priions devant chaque porte. Cette habitude est restée et transforme chacune de mes journées.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
      location: "Confolens 2025"
    },
    {
      id: 10,
      title: "Un cœur apaisé et confiant",
      category: "paroissien",
      type: "text",
      quote: "Son regard est plus paisible et confiant",
      content: "Valentin, arrivé récemment sur la paroisse, jeune de 20 ans, SDF en recherche de travail, s'est attaché au Christ au contact des paroissiens et des missionnaires. Son regard est plus paisible et confiant ! Il participe désormais régulièrement aux célébrations et trouve peu à peu sa place dans la communauté.",
      image: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800",
      location: "Mende 2024"
    },
    {
      id: 11,
      title: "Première prière de deux jeunes",
      category: "missionnaire",
      type: "text",
      quote: "Ce fut si beau de participer à la première prière de deux jeunes",
      content: "Je me souviendrai longtemps d'Alexandre et Lénaïc, deux ados que nous avons rencontrés dans la rue. Après avoir un peu échangé sur la foi, nous leur avons proposé de prier ensemble, ce qu'ils ont refusé. Mais une demi-heure plus tard, ils sont revenus nous voir pour nous dire qu'ils avaient été intrigués par ce que nous leur avions dit, et nous ont demandé d'essayer de prier ensemble ! Ce fut si beau de participer à la première prière de deux jeunes qui ne connaissaient pas encore le Christ !",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      location: "Bourganeuf 2021"
    },
    {
      id: 12,
      title: "La force des reliques",
      category: "missionnaire",
      type: "text",
      quote: "Tous étaient touchés de prendre les reliques dans leurs mains",
      content: "J'ai été touchée par l'accueil que nous a fait une famille de gens du voyage, qui nous ont fait entrer chez eux. Tous étaient touchés de prendre les reliques de Carlo Acutis dans leurs mains et de lui demander une grâce. Leur foi simple et profonde nous a édifiés.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
      location: "Brive 2025"
    }
  ];

  const filteredTestimonies = selectedCategory === 'all'
    ? testimonies
    : testimonies.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap');
      `}</style>

      {/* HERO */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="text-orange-500 font-bold mb-4 tracking-widest text-sm">
              LEURS HISTOIRES
            </div>
            <h1 className="text-7xl sm:text-8xl font-black mb-6 leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Témoignages
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Des rencontres qui transforment. Des cœurs touchés par la grâce.
              Chaque mission écrit une nouvelle page d'amour.
            </p>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 font-bold transition-all ${selectedCategory === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Tous
            </button>
            <button
              onClick={() => setSelectedCategory('missionnaire')}
              className={`px-6 py-3 font-bold transition-all flex items-center gap-2 ${selectedCategory === 'missionnaire'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Users className="w-5 h-5" />
              Missionnaires
            </button>
            <button
              onClick={() => setSelectedCategory('paroissien')}
              className={`px-6 py-3 font-bold transition-all flex items-center gap-2 ${selectedCategory === 'paroissien'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Church className="w-5 h-5" />
              Paroissiens
            </button>
          </div>
        </div>
      </div>

      {/* TESTIMONIES FEED */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {filteredTestimonies.map((testimony, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = testimony.category === 'missionnaire' ? Users : Church;

            return (
              <div
                key={testimony.id}
                className="group relative"
              >
                <div className={`grid md:grid-cols-2 gap-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isReversed ? 'md:flex md:flex-row-reverse' : ''
                  }`}>
                  {/* IMAGE */}
                  <div className="relative h-96 md:h-auto overflow-hidden">
                    <img
                      src={testimony.image}
                      alt={testimony.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {testimony.type === 'video' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className={`absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${testimony.category === 'missionnaire'
                        ? 'bg-orange-500/90 text-white'
                        : 'bg-black/90 text-white'
                      }`}>
                      <Icon className="w-4 h-4" />
                      <span className="font-bold text-sm">
                        {testimony.category === 'missionnaire' ? 'Missionnaire' : 'Paroissien'}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="text-sm font-bold text-orange-500 mb-4 tracking-widest">
                      {testimony.location}
                    </div>

                    <h2 className="text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimony.title}
                    </h2>

                    <blockquote className="text-xl italic text-gray-600 mb-6 pl-6 border-l-4 border-orange-500">
                      « {testimony.quote} »
                    </blockquote>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      {testimony.content}
                    </p>

                    <button
                      onClick={() => setSelectedTestimony(testimony)}
                      className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all"
                    >
                      <span>Lire l'histoire complète</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selectedTestimony && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto">
          <button
            onClick={() => setSelectedTestimony(null)}
            className="fixed top-8 right-8 text-white hover:text-orange-500 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative max-w-5xl w-full bg-white overflow-hidden my-8">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 md:h-auto">
                <img
                  src={selectedTestimony.image}
                  alt={selectedTestimony.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-12">
                <div className="text-sm font-bold text-orange-500 mb-4 tracking-widest">
                  {selectedTestimony.location}
                </div>

                <h2 className="text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {selectedTestimony.title}
                </h2>

                {selectedTestimony.type === 'video' ? (
                  <div className="aspect-video mb-6">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedTestimony.videoId}`}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <blockquote className="text-xl italic text-gray-600 mb-6 pl-6 border-l-4 border-orange-500">
                      « {selectedTestimony.quote} »
                    </blockquote>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedTestimony.content}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemoignagesPage;