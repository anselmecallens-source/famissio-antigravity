import { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, Share2, ExternalLink, X, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { FACEBOOK_PAGE, FACEBOOK_POSTS } from '../data/facebookPosts';

export default function FacebookFeed() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const displayedPosts = FACEBOOK_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < FACEBOOK_POSTS.length;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100/80 py-14 sm:py-20 border-t border-gray-200/60" aria-labelledby="fb-feed-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HEADER : IDENTITÉ PAGE FACEBOOK */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm ring-1 ring-black/5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-md ring-1 ring-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={FACEBOOK_PAGE.avatar}
                  alt={FACEBOOK_PAGE.name}
                  className="w-full h-full object-contain"
                  loading="eager"
                  width="80"
                  height="80"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full shadow" title="Page officielle vérifiée">
                <CheckCircle className="w-3.5 h-3.5" fill="currentColor" stroke="white" />
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 id="fb-feed-heading" className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {FACEBOOK_PAGE.name}
                </h2>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-700/10">
                  {FACEBOOK_PAGE.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {FACEBOOK_PAGE.tagline}
              </p>
            </div>
          </div>

          <a
            href={FACEBOOK_PAGE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 shrink-0"
            aria-label="Rejoindre Famissio sur Facebook (ouvre dans un nouvel onglet)"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Rejoindre la communauté</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* GRILLE DES PUBLICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-black/5 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* En-tête de la publication */}
              <div className="p-5 pb-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={FACEBOOK_PAGE.avatar}
                    alt={FACEBOOK_PAGE.name}
                    className="w-10 h-10 rounded-full object-contain bg-gray-50 ring-1 ring-gray-200/60 p-0.5"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-1.5 leading-snug">
                      <span>{FACEBOOK_PAGE.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                    </h3>
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
                  title="Voir la publication originale sur Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              {/* Texte de la publication */}
              <div className="p-5 pt-4 flex-1">
                <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                  {post.text}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-orange-700 bg-orange-50/80 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Photo de la publication (locale, optimisée, ne expire jamais) */}
              {post.image && (
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: post.image, alt: post.imageAlt, caption: post.text })}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 group/img focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                  aria-label="Agrandir la photo"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Agrandir la photo
                    </span>
                  </div>
                </button>
              )}

              {/* Pied de carte avec interactions réelles et lien direct */}
              <div className="p-4 px-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-gray-600 font-semibold" title={`${post.likes} mentions J'aime`}>
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600 font-semibold" title={`${post.comments} commentaires`}>
                    <MessageCircle className="w-3.5 h-3.5 text-gray-400" />
                    <span>{post.comments}</span>
                  </span>
                  {post.shares > 0 && (
                    <span className="hidden sm:flex items-center gap-1.5 text-gray-600 font-semibold" title={`${post.shares} partages`}>
                      <Share2 className="w-3.5 h-3.5 text-gray-400" />
                      <span>{post.shares}</span>
                    </span>
                  )}
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-orange-700 hover:text-red-700 transition-colors"
                >
                  <span>Sur Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CONTRÔLE D'AFFICHAGE "AFFICHER PLUS" */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleCount(FACEBOOK_POSTS.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm shadow-md ring-1 ring-gray-200 transition-all hover:scale-105"
            >
              <span>Afficher plus de publications ({FACEBOOK_POSTS.length - visibleCount} restantes)</span>
              <ChevronDown className="w-4 h-4 text-orange-600" />
            </button>
          ) : visibleCount > 6 ? (
            <button
              type="button"
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm shadow-md ring-1 ring-gray-200 transition-all hover:scale-105"
            >
              <span>Réduire l'affichage</span>
              <ChevronUp className="w-4 h-4 text-orange-600" />
            </button>
          ) : null}

          <a
            href={FACEBOOK_PAGE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Consulter notre page Facebook</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* MODAL / LIGHTBOX POUR PHOTO AGRANDIE */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-transparent flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:-right-8 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
              aria-label="Fermer la vue agrandie"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain ring-1 ring-white/10"
            />
            {selectedImage.caption && (
              <p className="mt-4 text-center text-white/90 text-sm max-w-2xl px-4 line-clamp-2">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
