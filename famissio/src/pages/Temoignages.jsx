import React, { useState, useEffect, useMemo } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Church, Sparkles, Heart } from 'lucide-react';

const TemoignagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [testimonyOfDay, setTestimonyOfDay] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  // Pool d'images [cite: 4]
  const imagePool = useMemo(() => [
    "https://www.dropbox.com/scl/fi/8q56kfmxm4sglltm3axjn/IMGP2729.JPG?rlkey=zlfiilxjftl76qp5nemmxnw5x&st=h8asvjzz&raw=1",
    "https://www.dropbox.com/scl/fi/urgxwidi711zytkgl79r4/20221104_220907.jpg?rlkey=4g5mxnthjmfzelitvzvc4a5et&st=1m28xbgw&raw=1",
    "https://www.dropbox.com/scl/fi/4l3pfnoj0afg0ln96cnhq/3149446C-CE04-40A4-A33A-DA19E37C0EB3.jpeg?rlkey=4pw1105l0aqqmaouixq40shws&st=iy8eblpr&raw=1",
    "https://www.dropbox.com/scl/fi/xc8deosj4qra9rjl65lcu/IMG_4847.jpg?rlkey=59ny4unvj05ztxosmsetgbfwk&st=susixzx9&raw=1",
    "https://www.dropbox.com/scl/fi/z851ymdvc5q476az9db5e/Mrvj-Gpe1-a8.jpg?rlkey=zl8zcqin1qa58v16ap80r4tt1&st=bnekutdt&raw=1",
    "https://www.dropbox.com/scl/fi/ixcw3h4uhj59m0xtvxtj2/IMG_5395.JPG?rlkey=eeucr2rcdema9x1rooq8b6ujf&st=y5g6u1jk&raw=1",
    "https://www.dropbox.com/scl/fi/hc363otmf84ozwh7oo6j7/IMG_9863.jpg?rlkey=dut2cu3nrf2tv6y4id0bmih18&st=sjxizhrn&raw=1",
    "https://www.dropbox.com/scl/fi/yocsem26icr39ysf5zr32/Famissio-200.jpg?rlkey=025bb00n4c5w9zn0g2682hwr0&st=0inl8xgg&raw=1",
    "https://www.dropbox.com/scl/fi/6ggc9yacwjt5fhswmqeul/Famissio-234.jpg?rlkey=lxxdkbshjez6t5qu4juacj2m&st=jawtkled&raw=1",
    "https://www.dropbox.com/scl/fi/d0bnse1rzrl4jkxwtcm66/Famissio-244.jpg?rlkey=u2r1n4oayntsgpwp4u0yjb43w&st=bp8syrqt&raw=1",
    "https://www.dropbox.com/scl/fi/rbz472voufins5450ws7j/Famissio-248.jpg?rlkey=y8dqnskasufwrrbrq54encsrc&st=yczgn063&raw=1",
    "https://www.dropbox.com/scl/fi/osl7opps7ooqgntv8hv5g/Famissio-262.jpg?rlkey=g0q63s8ylo1zla1xl6wl8lqcr&st=3giyy775&raw=1",
    "https://www.dropbox.com/scl/fi/171tst1fymncan4xiqeks/Famissio-264.jpg?rlkey=k5jeolrqpu2nqccvwk9exbuj8&st=e7gzvo8m&raw=1",
    "https://www.dropbox.com/scl/fi/q8bjmcqalbky9385056no/Famissio-274.jpg?rlkey=0f2rkfftvgfvv1bdmwzua3f46&st=npjtw24t&raw=1"
  ], []);

  // Catégories avec icônes Lucide [cite: 5]
  const categories = [
    {
      id: 'fruits-paroisse',
      label: 'Fruits pour la paroisse',
      icon: Church,
      color: '#ea580c',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'rencontres',
      label: 'Fioretti & Rencontres',
      icon: Sparkles,
      color: '#f97316',
      gradient: 'from-orange-500 to-orange-600' // [cite: 6]
    },
    {
      id: 'fruit-soi',
      label: 'Fruits pour soi',
      icon: Heart,
      color: '#fb923c',
      gradient: 'from-orange-400 to-orange-500'
    }
  ];

  const testimonies = [
    {
      id: 1,
      title: "La foi transmise par les enfants",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Enfants'],
      type: "text",
      content: "Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Car évangéliser ce n'est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère... Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon quart d'heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors qu'il n'avait encore prononcé aucune parole, le petit Henri interrompt soudainement notre discussion pour proposer à cet homme de prier pour lui : cette simple parole l'a bouleversé, et il lui a demandé avec le plus grand sérieux de prier pour son âme !", // [cite: 8]
      year: "2023"
    },
    {
      id: 2,
      title: "L'Esprit Saint à l'œuvre",
      category: 'rencontres', // [cite: 9]
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Qu'il est beau de voir l'action de l'Esprit Saint dans les cœurs pendant les temps d'évangélisation. Je pense notamment à cette dame que nous avons rencontrée sur le parking d'une grande surface. D'abord pressée et peu intéressée, elle a quand même accepté que nous fassions une prière pour elle et c'est à ce moment-là que son cœur a été bouleversé. Les larmes aux yeux, elle nous a confié beaucoup de choses et nous avons eu un magnifique échange qui s'est terminé par : « merci pour cet immense cadeau que vous m'avez fait ! »", // [cite: 10-13]
      year: "2024"
    },
    {
      id: 3,
      title: "Une joie profonde partagée",
      category: 'fruit-soi',
      tags: ['Famissionnaires'],
      type: "text",
      content: "Une communion extraordinaire nous a conduits toute la semaine. À cette communion, à cet amour fraternel était mêlée une joie immense. La joie profonde de Dieu de nous aimer et d'aller ensemble aimer les autres. Les louanges sonnaient vrai. Les rencontres sonnaient vrai, pleines de miséricorde.", // [cite: 14-16]
      year: "2022"
    },
    {
      id: 4,
      title: "Découvrir la vraie miséricorde",
      category: 'fruit-soi',
      tags: ['Famissionnaires'],
      type: "text",
      content: "Pour la première fois, j'ai vécu la miséricorde de Dieu comme je pense qu'Il doit être. On entre en aimant la personne, on la prend comme elle se présente sans la juger, on n'a qu'une envie c'est de l'aimer et la sauver en Jésus-Christ.", // [cite: 17]
      year: "2020"
    },
    {
      id: 5,
      title: "Un appel au service",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Patricia a ouvert sa porte et a fondu en larmes en nous disant que son mari était décédé il y avait 1 mois. Mon cœur était brisé ! Nous lui avons parlé longtemps jusqu'à ce qu'elle retrouve le sourire. Nous l'avons quittée en paix pour la retrouver à la louange le soir, habitée par la confiance et pleine de gratitude. Gloire à Toi Seigneur !", // [cite: 18-21]
      year: "2021"
    },
    {
      id: 6,
      title: "Première prière ensemble",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Je me souviendrai longtemps d'Alexandre et Lénaïc, deux ados que nous avons rencontrés dans la rue. Après avoir un peu échangé sur la foi, nous leur avons proposé de prier ensemble, ce qu'ils ont refusé. Mais une demi-heure plus tard, ils sont revenus nous voir pour nous dire qu'ils avaient été intrigués et nous ont demandé d'essayer de prier ensemble ! Ce fut si beau de participer à la première prière de deux jeunes qui ne connaissaient pas encore le Christ !", // [cite: 22-24]
      year: "2021"
    },
    {
      id: 7,
      title: "Oser sans insister",
      category: 'fruit-soi',
      tags: ['Paroissiens'],
      type: "text",
      content: "J'ai appris qu'il fallait oser, oser sans insister... Les gens sont réticents au premier abord, mais se livrent dès que la confiance est instaurée et vont jusqu'à accepter la prière et la médaille de Marie.", // [cite: 25]
      year: "2025"
    },
    {
      id: 8,
      title: "Le désir de prier",
      category: 'fruit-soi',
      tags: ['Paroissiens'],
      type: "text",
      content: "Un fruit reçu est le désir de prier plus précisément avant les rencontres que je fais chaque jour, ainsi que pour les projets qui me tiennent à cœur. C'est ce à quoi j'ai goûté pendant la semaine, alors que nous priions devant chaque porte.", // [cite: 26]
      year: "2025"
    },
    {
      id: 9,
      title: "Un cœur apaisé",
      category: 'fruits-paroisse',
      tags: ['Adultes', 'Paroissiens'],
      type: "text",
      content: "Valentin, arrivé récemment sur la paroisse, jeune de 20 ans, SDF en recherche de travail, s'est attaché au Christ au contact des paroissiens. Son regard est plus paisible et confiant !", // [cite: 27]
      year: "2024"
    },
    {
      id: 10,
      title: "La force des reliques",
      category: 'rencontres',
      tags: ['Adultes', 'Famissionnaires'],
      type: "text",
      content: "J'ai été touchée par l'accueil que nous a fait une famille de gens du voyage, qui nous ont fait entrer chez eux. Tous étaient touchés de prendre les reliques de Carlo Acutis dans leurs mains et de lui demander une grâce.", // [cite: 28]
      year: "2025"
    },
    {
      id: 11,
      title: "De la paroisse à la mission",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "video",
      videoId: "UWsUCF_HG6w",
      content: "Témoignage vidéo d'un paroissien qui a accueilli Famissio.",
      year: "2023" // [cite: 29]
    },
    {
      id: 12,
      title: "Une messe pour un être cher",
      category: 'rencontres',
      tags: ['Adultes', 'Famissionnaires'],
      type: "text",
      content: "Ma rencontre avec Jeanne, très fatiguée par la maladie, qui venait de perdre son mari. Suite à notre échange, elle a souhaité demander une messe pour son mari.", // [cite: 30]
      year: "2024"
    }
  ];

  // Distribution des images et mélange des catégories
  const testimoniesWithImages = useMemo(() => {
    const shuffledImages = [...imagePool].sort(() => Math.random() - 0.5);
    let imageIndex = 0;

    const withImages = testimonies.map((testimony, index) => {
      let displayImage;

      if (testimony.type === 'video') {
        displayImage = `https://img.youtube.com/vi/${testimony.videoId}/maxresdefault.jpg`; // [cite: 31]
      } else {
        const offset = Math.floor(index / 3);
        displayImage = shuffledImages[(imageIndex + offset) % shuffledImages.length];
        imageIndex++;
      }

      return {
        ...testimony,
        displayImage
      };
    });

    // Mélanger pour alterner les catégories [cite: 32]
    const byCategory = {
      'fruits-paroisse': withImages.filter(t => t.category === 'fruits-paroisse'),
      'rencontres': withImages.filter(t => t.category === 'rencontres'),
      'fruit-soi': withImages.filter(t => t.category === 'fruit-soi')
    };

    const mixed = []; // [cite: 33]
    const maxLength = Math.max(byCategory['fruits-paroisse'].length, byCategory.rencontres.length, byCategory['fruit-soi'].length);

    for (let i = 0; i < maxLength; i++) { // [cite: 34]
      if (byCategory['fruits-paroisse'][i]) mixed.push(byCategory['fruits-paroisse'][i]);
      if (byCategory.rencontres[i]) mixed.push(byCategory.rencontres[i]); // [cite: 35]
      if (byCategory['fruit-soi'][i]) mixed.push(byCategory['fruit-soi'][i]);
    }

    return mixed;
  }, [imagePool]);

  // Témoignage aléatoire au chargement [cite: 36]
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimoniesWithImages.length);
    setTestimonyOfDay(testimoniesWithImages[randomIndex]);
  }, [testimoniesWithImages]);

  const filteredTestimonies = selectedCategory === 'all' // [cite: 37]
    ? testimoniesWithImages
    : testimoniesWithImages.filter(t => t.category === selectedCategory);

  const displayedTestimonies = filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id).slice(0, visibleCount); // [cite: 38]

  // Navigation dans la modal
  const navigateTestimony = (direction) => {
    if (!selectedTestimony) return;

    const availableTestimonies = filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id); // [cite: 39]
    const currentIndex = availableTestimonies.findIndex(t => t.id === selectedTestimony.id);
    let newIndex;

    if (direction === 'prev') { // [cite: 40]
      newIndex = currentIndex > 0 ? currentIndex - 1 : availableTestimonies.length - 1; // [cite: 41]
    } else {
      newIndex = currentIndex < availableTestimonies.length - 1 ? currentIndex + 1 : 0; // [cite: 42]
    }

    setSelectedTestimony(availableTestimonies[newIndex]);
  };

  const truncateContent = (text, maxLength = 130) => { // Ajusté pour éviter les débordements [cite: 43]
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...'; // [cite: 44]
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  }; // [cite: 45]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap');
        
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph { /* [cite: 46] */
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
      `}</style>

      {/* HERO */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-200 blob opacity-20"></div> {/* [cite: 47] */}
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Témoignages
          </h1>

          <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium"> {/* [cite: 48] */}
            Découvrez les histoires qui ont transformé des vies, des rencontres qui ont touché les cœurs, et des moments de grâce partagés à travers nos missions.
          </p> {/* [cite: 49] */}
        </div>
      </div>

      {/* TÉMOIGNAGE ALÉATOIRE */}
      {testimonyOfDay && (
        <>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 h-16 border-y border-orange-200 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span className="text-orange-700 font-bold text-sm uppercase tracking-wider">Témoignage à découvrir</span> {/* [cite: 50] */}
              <Sparkles className="w-5 h-5 text-orange-600" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 -mt-8 mb-20 relative z-10">
            <div
              className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-orange-100" // [cite: 51]
              onClick={() => setSelectedTestimony(testimonyOfDay)}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img
                    src={testimonyOfDay.displayImage} // [cite: 52]
                    alt={testimonyOfDay.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {testimonyOfDay.type === 'video' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center"> {/* [cite: 53] */}
                      <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div> {/* [cite: 54] */}
                    </div>
                  )}
                </div>

                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50">
                  <div className="flex items-center gap-3 mb-5"> {/* [cite: 55] */}
                    {categories.find(c => c.id === testimonyOfDay.category) && (
                      <div className={`w-14 h-14 bg-gradient-to-br ${categories.find(c => c.id === testimonyOfDay.category).gradient} rounded-2xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-6 transition-transform`}>
                        {React.createElement(categories.find(c => c.id === testimonyOfDay.category).icon, {
                          className: "w-7 h-7 text-white", // [cite: 56]
                          strokeWidth: 2
                        })}
                      </div>
                    )} {/* [cite: 57] */}
                  </div>
                  <h2 className="text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {testimonyOfDay.title}
                  </h2> {/* [cite: 58] */}
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {truncateContent(testimonyOfDay.content, 220)}
                  </p>
                  <div className="flex items-center gap-3 text-sm font-medium text-orange-600">
                    <span>{testimonyOfDay.tags.join(' • ')}</span> {/* [cite: 59] */}
                    <span>•</span>
                    <span>{testimonyOfDay.year}</span>
                  </div>
                </div>
              </div>
            </div> {/* [cite: 60] */}
          </div>
        </>
      )}

      {/* NAVIGATION */}
      <div className="bg-white/80 backdrop-blur-sm border-y border-orange-200 py-6 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')} // [cite: 61]
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${selectedCategory === 'all'
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg scale-105' // [cite: 62]
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                }`}
            >
              Tous
            </button>

            {categories.map(cat => (
              <button // [cite: 63]
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-3 ${selectedCategory === cat.id
                  ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105` // [cite: 64]
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
              >
                {React.createElement(cat.icon, {
                  className: "w-5 h-5", // [cite: 65]
                  strokeWidth: 2.5
                })}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div> {/* [cite: 66] */}
      </div>

      {/* GRILLE DE TÉMOIGNAGES */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonies.map((testimony, index) => {
            const rotation = (index % 3 === 0 ? 1.5 : index % 3 === 1 ? -1.5 : 0); // [cite: 67]
            const categoryData = categories.find(c => c.id === testimony.category);

            return ( // [cite: 68]
              <div
                key={testimony.id}
                className="group cursor-pointer relative z-0 hover:z-30 transition-all duration-300" // Ajout de z-index et relative
                onClick={() => setSelectedTestimony(testimony)}
                style={{
                  transform: `rotate(${rotation}deg)`, // 
                }}
              >
                {/* Suppression de h-[520px] et remplacement par h-full min-h-[520px] pour éviter l'écrasement */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-0 h-full min-h-[520px] flex flex-col border border-orange-100">
                  <div className="relative h-64 overflow-hidden flex-shrink-0"> {/* [cite: 70] */}
                    <img
                      src={testimony.displayImage}
                      alt={testimony.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    /> {/* [cite: 71] */}
                    {testimony.type === 'video' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl"> {/* [cite: 72] */}
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    )} {/* [cite: 73] */}

                    {categoryData && (
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${categoryData.gradient} rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                        {React.createElement(categoryData.icon, {
                          className: "w-6 h-6 text-white", // [cite: 74]
                          strokeWidth: 2.5
                        })}
                      </div>
                    )} {/* [cite: 75] */}
                  </div>

                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-orange-50/30">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs font-semibold text-orange-600 flex items-center gap-2"> {/* [cite: 76] */}
                        <span>{testimony.tags.join(' • ')}</span>
                        <span className="text-orange-400">•</span>
                        <span>{testimony.year}</span>
                      </div> {/* [cite: 77] */}
                    </div>

                    <h3 className="text-2xl font-black mb-3 leading-tight text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimony.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4"> {/* [cite: 78] */}
                      {truncateContent(testimony.content, 130)}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-orange-100">
                      <span className="text-orange-600 font-bold text-sm hover:text-orange-700 transition-colors flex items-center gap-2 group/btn"> {/* [cite: 79] */}
                        <span>Lire la suite</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      {testimony.type === 'video' && ( // [cite: 80]
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-md">
                          <Play className="w-3 h-3" fill="white" />
                          <span>Vidéo</span> {/* [cite: 81] */}
                        </div>
                      )}
                    </div>
                  </div> {/* [cite: 82] */}
                </div>
              </div>
            );
          })} {/* [cite: 83] */}
        </div>

        {/* BOUTON CHARGER PLUS */}
        {displayedTestimonies.length < filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id).length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg" // [cite: 84]
            >
              Charger plus de témoignages
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedTestimony && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto">
          <button // [cite: 85]
            onClick={() => setSelectedTestimony(null)}
            className="fixed top-24 right-8 w-14 h-14 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all z-50 shadow-2xl border-2 border-orange-200"
          >
            <X className="w-7 h-7" strokeWidth={2.5} />
          </button>

          {/* Navigation arrows [cite: 86] */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateTestimony('prev'); }} // [cite: 87]
            className="fixed left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all backdrop-blur-sm z-50 shadow-2xl border-2 border-orange-200"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={2.5} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateTestimony('next'); }} // [cite: 88]
            className="fixed right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all backdrop-blur-sm z-50 shadow-2xl border-2 border-orange-200"
          >
            <ChevronRight className="w-7 h-7" strokeWidth={2.5} />
          </button>

          <div className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8">
            <div className="p-12">
              {selectedTestimony.type === 'video' ? ( // [cite: 89-90]
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {categories.find(c => c.id === selectedTestimony.category) && (
                      <div className={`w-16 h-16 bg-gradient-to-br ${categories.find(c => c.id === selectedTestimony.category).gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        {React.createElement(categories.find(c => c.id === selectedTestimony.category).icon, { // [cite: 91]
                          className: "w-8 h-8 text-white",
                          strokeWidth: 2.5
                        })} {/* [cite: 92] */}
                      </div>
                    )}
                    <div>
                      <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}> {/* [cite: 93] */}
                        {selectedTestimony.title}
                      </h2>
                      <div className="flex items-center gap-3 text-sm font-medium text-orange-600 mt-2">
                        <span>{selectedTestimony.tags.join(' • ')}</span> {/* [cite: 94] */}
                        <span>•</span>
                        <span>{selectedTestimony.year}</span>
                      </div>
                    </div>
                  </div> {/* [cite: 95] */}
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedTestimony.videoId}`}
                      className="w-full h-full"
                      allowFullScreen // [cite: 96]
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-8 items-start"> {/* [cite: 97] */}
                  <div className="w-full md:w-2/5 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                    <img
                      src={selectedTestimony.displayImage}
                      alt={selectedTestimony.title}
                      className="w-full h-auto object-cover" // [cite: 98]
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6"> {/* [cite: 99] */}
                      {categories.find(c => c.id === selectedTestimony.category) && (
                        <div className={`w-16 h-16 bg-gradient-to-br ${categories.find(c => c.id === selectedTestimony.category).gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          {React.createElement(categories.find(c => c.id === selectedTestimony.category).icon, { // [cite: 100]
                            className: "w-8 h-8 text-white",
                            strokeWidth: 2.5
                          })}
                        </div> // [cite: 101]
                      )}
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {selectedTestimony.title} {/* [cite: 102] */}
                    </h2>
                    <div className="flex items-center gap-3 text-sm font-medium text-orange-600 mb-6">
                      <span>{selectedTestimony.tags.join(' • ')}</span>
                      <span>•</span>
                      <span>{selectedTestimony.year}</span> // [cite: 103]
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                      {selectedTestimony.content}
                    </p> // [cite: 104]
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; // [cite: 105]

export default TemoignagesPage;
