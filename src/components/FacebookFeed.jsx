import { useState, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { FACEBOOK_PAGE, FACEBOOK_POSTS } from '../data/facebookPosts';

export default function FacebookFeed() {
  const [posts, setPosts] = useState(FACEBOOK_POSTS);
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightbox, setLightbox] = useState(null); // { images: [], index: 0, caption: '' }

  // Recherche en arrière-plan d'éventuelles nouvelles publications sans ralentir la page
  useEffect(() => {
    let isMounted = true;

    async function checkForNewPosts() {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout max

        const res = await fetch('https://data.accentapi.com/feed/25643545.json', {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) return;
        const data = await res.json();
        if (!data?.posts || !Array.isArray(data.posts) || !isMounted) return;

        // Récupérer les identifiants déjà présents dans le cache local
        const existingIds = new Set(FACEBOOK_POSTS.map((p) => p.id));
        const newItems = [];

        for (const raw of data.posts) {
          const rawId = raw.id || raw.post_id;
          if (!rawId) continue;
          const cleanId = `post-${rawId}`;
          if (existingIds.has(cleanId)) break; // On a atteint les posts déjà connus

          const cleanText = (raw.message || '').replace(/<[^>]+>/g, '').trim();
          if (!cleanText || cleanText.length < 5) continue;

          // Récupérer les images associées si elles existent
          const rawImgs = Array.isArray(raw.images) && raw.images.length > 0
            ? raw.images
            : raw.full_picture ? [raw.full_picture] : [];

          const link = raw.facebook_link && raw.facebook_link.startsWith('http')
            ? raw.facebook_link
            : `https://www.facebook.com/100064620877860/posts/${rawId}`;

          newItems.push({
            id: cleanId,
            date: raw.post_date ? new Date(raw.post_date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Récemment',
            isoDate: raw.post_date || new Date().toISOString(),
            text: cleanText,
            images: rawImgs,
            url: link,
          });
        }

        if (newItems.length > 0 && isMounted) {
          setPosts([...newItems, ...FACEBOOK_POSTS]);
        }
      } catch {
        // En cas d'échec réseau ou de timeout, la page continue d'utiliser la liste locale instantanée sans bug
      }
    }

    checkForNewPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  // Gestion du clavier pour la visionneuse (Echap, Flèches)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) => ({
          ...prev,
          index: (prev.index + 1) % prev.images.length,
        }));
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) => ({
          ...prev,
          index: (prev.index - 1 + prev.images.length) % prev.images.length,
        }));
      }
    };

    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100/90 py-12 sm:py-16 border-t border-gray-200/60" aria-label="Actualités Facebook de Famissio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* EN-TÊTE SOBRE : NOM, LOGO ET SOUS-TITRE (SANS FAUX BADGES NI BOUTON EN TROP) */}
        <div className="mb-10 text-center sm:text-left flex items-center justify-between gap-4 border-b border-gray-200/70 pb-6">
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <img
              src={FACEBOOK_PAGE.avatar}
              alt={FACEBOOK_PAGE.name}
              className="w-14 h-14 rounded-2xl p-1 bg-white ring-1 ring-gray-200 shadow-sm object-contain"
              loading="lazy"
              width="56"
              height="56"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Notre actualité Facebook
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">
                {FACEBOOK_PAGE.description}
              </p>
            </div>
          </div>
        </div>

        {/* GRILLE DE PUBLICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post) => {
            const images = Array.isArray(post.images) ? post.images : [];
            const hasMultiple = images.length > 1;

            return (
              <article
                key={post.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 ring-1 ring-black/5 flex flex-col overflow-hidden"
              >
                {/* En-tête de carte */}
                <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={FACEBOOK_PAGE.avatar}
                      alt={FACEBOOK_PAGE.name}
                      className="w-9 h-9 rounded-full object-contain bg-gray-50 ring-1 ring-gray-200/60 p-0.5"
                      loading="lazy"
                      width="36"
                      height="36"
                    />
                    <div>
                      <span className="font-bold text-gray-900 text-sm block leading-snug">
                        {FACEBOOK_PAGE.name}
                      </span>
                      <time dateTime={post.isoDate} className="text-xs text-gray-500">
                        {post.date}
                      </time>
                    </div>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 transition-colors"
                    aria-label="Voir cette publication sur Facebook"
                    title="Voir sur Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>

                {/* Texte authentique sans aucun ajout */}
                <div className="p-4 sm:p-5 pt-3 flex-1">
                  <p className="text-gray-700 text-sm sm:text-[14.5px] leading-relaxed whitespace-pre-line">
                    {post.text}
                  </p>
                </div>

                {/* Galerie de photos : 1 photo ou mosaïque multi-photos */}
                {images.length > 0 && (
                  <div className="bg-gray-100 overflow-hidden">
                    {images.length === 1 ? (
                      <button
                        type="button"
                        onClick={() => setLightbox({ images, index: 0, caption: post.text })}
                        className="relative aspect-[16/10] w-full block overflow-hidden group/img focus:outline-none"
                        aria-label="Agrandir la photo"
                      >
                        <img
                          src={images[0]}
                          alt="Photo de la publication Famissio"
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            // En cas d'erreur de chargement d'image distante, on masque proprement l'image
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </button>
                    ) : (
                      <div className="grid grid-cols-2 gap-1 p-1 bg-gray-200">
                        {images.slice(0, 4).map((imgUrl, imgIdx) => {
                          const isFourth = imgIdx === 3 && images.length > 4;
                          const remaining = images.length - 4;

                          return (
                            <button
                              key={imgIdx}
                              type="button"
                              onClick={() => setLightbox({ images, index: imgIdx, caption: post.text })}
                              className="relative aspect-[4/3] w-full block overflow-hidden group/thumb focus:outline-none bg-gray-300"
                              aria-label={`Voir photo ${imgIdx + 1} sur ${images.length}`}
                            >
                              <img
                                src={imgUrl}
                                alt={`Photo ${imgIdx + 1} de la publication`}
                                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                              {isFourth && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg">
                                  +{remaining}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {hasMultiple && (
                      <div className="px-4 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 border-t border-gray-100 flex items-center justify-between">
                        <span>{images.length} photos</span>
                        <span className="text-orange-700">Cliquer pour agrandir</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Pied de carte discret avec lien vers la publication originale */}
                <div className="p-3 px-4 sm:px-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-end text-xs text-gray-500">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-orange-700 hover:text-red-700 transition-colors"
                  >
                    <span>Voir sur Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CONTRÔLE D'AFFICHAGE "AFFICHER PLUS" */}
        {hasMore ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm shadow-sm ring-1 ring-gray-200 transition-all hover:scale-105"
            >
              <span>Afficher plus de publications</span>
              <ChevronDown className="w-4 h-4 text-orange-600" />
            </button>
          </div>
        ) : posts.length > 6 ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm shadow-sm ring-1 ring-gray-200 transition-all hover:scale-105"
            >
              <span>Réduire</span>
              <ChevronUp className="w-4 h-4 text-orange-600" />
            </button>
          </div>
        ) : null}

      </div>

      {/* VISIONNEUSE PLEIN ÉCRAN ACCESSIBLE (LIGHTBOX) AVEC NAVIGATION PRÉCÉDENT / SUIVANT */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 sm:-right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo agrandie */}
            <div className="relative w-full flex items-center justify-center">
              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((prev) => ({
                      ...prev,
                      index: (prev.index - 1 + prev.images.length) % prev.images.length,
                    }))
                  }
                  className="absolute left-2 sm:-left-12 z-10 text-white/90 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                  aria-label="Photo précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <img
                src={lightbox.images[lightbox.index]}
                alt={`Photo ${lightbox.index + 1}`}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain ring-1 ring-white/10"
              />

              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((prev) => ({
                      ...prev,
                      index: (prev.index + 1) % prev.images.length,
                    }))
                  }
                  className="absolute right-2 sm:-right-12 z-10 text-white/90 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                  aria-label="Photo suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Légende et compteur */}
            <div className="mt-3 text-center text-white/90 text-sm max-w-2xl px-4 flex flex-col items-center gap-1">
              {lightbox.images.length > 1 && (
                <span className="text-xs text-white/60 font-semibold tracking-wider">
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
              )}
              {lightbox.caption && (
                <p className="line-clamp-2 text-xs sm:text-sm text-gray-300">
                  {lightbox.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
