import React, { useState, useEffect } from 'react';
import { X, Play, Sparkles, Shuffle, Heart, Smile, Lightbulb, Cross, MapPin, Calendar, TrendingUp } from 'lucide-react';

const TemoignagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [testimonyOfDay, setTestimonyOfDay] = useState(null);

  const emotions = [
    { id: 'joie', icon: Smile, label: 'Joie', color: '#d97706', gradient: 'from-amber-600 to-orange-600' },
    { id: 'espoir', icon: Sparkles, label: 'Espérance', color: '#ea580c', gradient: 'from-orange-600 to-red-600' },
    { id: 'conversion', icon: Lightbulb, label: 'Conversion', color: '#dc2626', gradient: 'from-red-600 to-rose-600' },
    { id: 'miracle', icon: Cross, label: 'Grâce', color: '#c2410c', gradient: 'from-orange-700 to-red-700' }
  ];

  const testimonies = [
    {
      id: 1,
      title: "La foi transmise par les enfants",
      category: "missionnaire",
      emotion: "joie",
      type: "text",
      excerpt: "Le petit Henri a bouleversé un homme par sa simple proposition de prier",
      content: "Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Car évangéliser ce n'est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère... Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon quart d'heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors qu'il n'avait encore prononcé aucune parole, le petit Henri interrompt soudainement notre discussion pour proposer à cet homme de prier pour lui : cette simple parole l'a bouleversé, et il lui a demandé avec le plus grand sérieux de prier pour son âme !",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
      location: "Creuse",
      year: "2023"
    },
    {
      id: 2,
      title: "L'Esprit Saint à l'œuvre",
      category: "missionnaire",
      emotion: "miracle",
      type: "text",
      excerpt: "Une dame pressée s'est arrêtée et son cœur a été bouleversé",
      content: "Qu'il est beau de voir l'action de l'Esprit Saint dans les cœurs pendant les temps d'évangélisation. Je pense notamment à cette dame que nous avons rencontrée sur le parking d'une grande surface. D'abord pressée et peu intéressée, elle a quand même accepté que nous fassions une prière pour elle et c'est à ce moment-là que son cœur a été bouleversé. Les larmes aux yeux, elle nous a confié beaucoup de choses et nous avons eu un magnifique échange qui s'est terminé par : « merci pour cet immense cadeau que vous m'avez fait ! »",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600",
      location: "Massiac",
      year: "2024"
    },
    {
      id: 3,
      title: "Une joie profonde partagée",
      category: "missionnaire",
      emotion: "joie",
      type: "text",
      excerpt: "Une communion extraordinaire nous a conduits toute la semaine",
      content: "Une communion extraordinaire nous a conduits toute la semaine. À cette communion, à cet amour fraternel était mêlée une joie immense. La joie profonde de Dieu de nous aimer et d'aller ensemble aimer les autres. Les louanges sonnaient vrai. Les rencontres sonnaient vrai, pleines de miséricorde.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      location: "Digne",
      year: "2022"
    },
    {
      id: 4,
      title: "Découvrir la vraie miséricorde",
      category: "missionnaire",
      emotion: "conversion",
      type: "text",
      excerpt: "On entre en aimant la personne, sans la juger",
      content: "Pour la première fois, j'ai vécu la miséricorde de Dieu comme je pense qu'Il doit être. On entre en aimant la personne, on la prend comme elle se présente sans la juger, on n'a qu'une envie c'est de l'aimer et la sauver en Jésus-Christ.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      location: "Alençon",
      year: "2020"
    },
    {
      id: 5,
      title: "Un appel au service",
      category: "missionnaire",
      emotion: "espoir",
      type: "text",
      excerpt: "Patricia a retrouvé le sourire et la paix",
      content: "Patricia a ouvert sa porte et a fondu en larmes en nous disant que son mari était décédé il y avait 1 mois. Mon cœur était brisé ! Nous lui avons parlé longtemps jusqu'à ce qu'elle retrouve le sourire. Nous l'avons quittée en paix pour la retrouver à la louange le soir, habitée par la confiance et pleine de gratitude. Gloire à Toi Seigneur !",
      image: "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?w=600",
      location: "Gouzon",
      year: "2021"
    },
    {
      id: 6,
      title: "Première prière ensemble",
      category: "missionnaire",
      emotion: "miracle",
      type: "text",
      excerpt: "Deux ados sont revenus pour demander à prier avec nous",
      content: "Je me souviendrai longtemps d'Alexandre et Lénaïc, deux ados que nous avons rencontrés dans la rue. Après avoir un peu échangé sur la foi, nous leur avons proposé de prier ensemble, ce qu'ils ont refusé. Mais une demi-heure plus tard, ils sont revenus nous voir pour nous dire qu'ils avaient été intrigués et nous ont demandé d'essayer de prier ensemble ! Ce fut si beau de participer à la première prière de deux jeunes qui ne connaissaient pas encore le Christ !",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      location: "Bourganeuf",
      year: "2021"
    },
    {
      id: 7,
      title: "Oser sans insister",
      category: "paroissien",
      emotion: "conversion",
      type: "text",
      excerpt: "Les gens se livrent dès que la confiance est instaurée",
      content: "J'ai appris qu'il fallait oser, oser sans insister... Les gens sont réticents au premier abord, mais se livrent dès que la confiance est instaurée et vont jusqu'à accepter la prière et la médaille de Marie.",
      image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=600",
      location: "Limoges",
      year: "2025"
    },
    {
      id: 8,
      title: "Le désir de prier",
      category: "paroissien",
      emotion: "espoir",
      type: "text",
      excerpt: "Prier devant chaque porte a transformé ma vie",
      content: "Un fruit reçu est le désir de prier plus précisément avant les rencontres que je fais chaque jour, ainsi que pour les projets qui me tiennent à cœur. C'est ce à quoi j'ai goûté pendant la semaine, alors que nous priions devant chaque porte.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
      location: "Confolens",
      year: "2025"
    },
    {
      id: 9,
      title: "Un cœur apaisé",
      category: "paroissien",
      emotion: "joie",
      type: "text",
      excerpt: "Son regard est maintenant paisible et confiant",
      content: "Valentin, arrivé récemment sur la paroisse, jeune de 20 ans, SDF en recherche de travail, s'est attaché au Christ au contact des paroissiens. Son regard est plus paisible et confiant !",
      image: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600",
      location: "Mende",
      year: "2024"
    },
    {
      id: 10,
      title: "La force des reliques",
      category: "missionnaire",
      emotion: "miracle",
      type: "text",
      excerpt: "Tous étaient touchés de prendre les reliques dans leurs mains",
      content: "J'ai été touchée par l'accueil que nous a fait une famille de gens du voyage, qui nous ont fait entrer chez eux. Tous étaient touchés de prendre les reliques de Carlo Acutis dans leurs mains et de lui demander une grâce.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600",
      location: "Brive",
      year: "2025"
    },
    {
      id: 11,
      title: "De la paroisse à la mission",
      category: "paroissien",
      emotion: "joie",
      type: "video",
      videoId: "UWsUCF_HG6w",
      excerpt: "Témoignage vidéo d'un paroissien transformé",
      content: "Témoignage vidéo d'un paroissien qui a accueilli Famissio.",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600",
      location: "Limoges",
      year: "2023"
    },
    {
      id: 12,
      title: "Une messe pour un être cher",
      category: "missionnaire",
      emotion: "espoir",
      type: "text",
      excerpt: "Jeanne a demandé une messe pour son mari décédé",
      content: "Ma rencontre avec Jeanne, très fatiguée par la maladie, qui venait de perdre son mari. Suite à notre échange, elle a souhaité demander une messe pour son mari.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
      location: "Mende",
      year: "2024"
    }
  ];

  // Témoignage du jour basé sur la date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const todayTestimony = testimonies[dayOfYear % testimonies.length];
    setTestimonyOfDay(todayTestimony);
  }, []);

  const filteredTestimonies = selectedCategory === 'all'
    ? testimonies
    : testimonies.filter(t =>
      selectedCategory.startsWith('emotion-')
        ? t.emotion === selectedCategory.replace('emotion-', '')
        : t.category === selectedCategory
    );

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 blob opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-400 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Témoignages
          </h1>

          <p className="text-xl text-center max-w-3xl mx-auto opacity-90 leading-relaxed">
            Découvrez les histoires qui ont transformé des vies, des rencontres qui ont touché les cœurs, et des moments de grâce partagés à travers nos missions.
          </p>
        </div>
      </div>

      {/* TÉMOIGNAGE DU JOUR */}
      {testimonyOfDay && (
        <>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-2">
            <div className="max-w-7xl mx-auto px-6 text-center text-white font-bold flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5" />
              <span>TÉMOIGNAGE DU JOUR</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 -mt-12 mb-16 relative z-10">
            <div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500"
              onClick={() => setSelectedTestimony(testimonyOfDay)}
            >
              <div className="p-12">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Ajout de l'image pour le témoigage du jour */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={testimonyOfDay.image}
                      alt={testimonyOfDay.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimonyOfDay.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {testimonyOfDay.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {testimonyOfDay.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {testimonyOfDay.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* NAVIGATION PAR ÉMOTION */}
      <div className="bg-white border-y-2 border-gray-200 py-8 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${selectedCategory === 'all' ? 'bg-black text-white scale-110' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Tous
            </button>

            {emotions.map(emotion => {
              const Icon = emotion.icon;
              return (
                <button
                  key={emotion.id}
                  onClick={() => setSelectedCategory(`emotion-${emotion.id}`)}
                  className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${selectedCategory === `emotion-${emotion.id}`
                      ? 'text-white scale-110'
                      : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  style={selectedCategory === `emotion-${emotion.id}` ? { backgroundColor: emotion.color } : {}}
                >
                  <Icon className="w-5 h-5" />
                  {emotion.label}
                </button>
              );
            })}

            <button
              onClick={() => setSelectedCategory('missionnaire')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${selectedCategory === 'missionnaire' ? 'bg-orange-500 text-white scale-110' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Missionnaires
            </button>

            <button
              onClick={() => setSelectedCategory('paroissien')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${selectedCategory === 'paroissien' ? 'bg-red-600 text-white scale-110' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Paroissiens
            </button>
          </div>
        </div>
      </div>

      {/* GRILLE DE TÉMOIGNAGES */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Barre de recherche */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un témoignage, un lieu, une année..."
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id).map((testimony, index) => {
            const emotionData = emotions.find(e => e.id === testimony.emotion);
            const rotation = (index % 3 === 0 ? 2 : index % 3 === 1 ? -2 : 0);

            return (
              <div
                key={testimony.id}
                className="group cursor-pointer"
                onClick={() => setSelectedTestimony(testimony)}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'all 0.3s'
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:rotate-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={testimony.image}
                      alt={testimony.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Emotion Icon Overlay */}
                    {emotionData && (
                      <div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white"
                        style={{ backgroundColor: emotionData.color }}
                      >
                        {React.createElement(emotionData.icon, { className: "w-5 h-5" })}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {emotionData && (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: emotionData.color }}
                        >
                          {React.createElement(emotionData.icon, { className: "w-4 h-4" })}
                        </div>
                      )}
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span>{testimony.location}</span>
                        <span>•</span>
                        <span>{testimony.year}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black mb-3 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimony.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                      {testimony.excerpt}
                    </p>

                    {testimony.type === 'video' && (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold">
                        <Play className="w-3 h-3" />
                        Vidéo
                      </div>
                    )}
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

          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8">
            <div className="p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={selectedTestimony.image}
                    alt={selectedTestimony.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const emotionData = emotions.find(e => e.id === selectedTestimony.emotion);
                      if (emotionData) {
                        return (
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: emotionData.color }}
                          >
                            {React.createElement(emotionData.icon, { className: "w-6 h-6" })}
                          </div>
                        );
                      }
                    })()}
                    <div>
                      <h2 className="text-4xl font-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {selectedTestimony.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {selectedTestimony.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {selectedTestimony.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedTestimony.type === 'video' ? (
                    <div className="aspect-video mb-6">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedTestimony.videoId}`}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-line">
                      {selectedTestimony.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemoignagesPage;