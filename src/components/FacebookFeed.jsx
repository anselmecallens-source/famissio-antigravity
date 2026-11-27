import { useState, useEffect, useRef } from 'react';
import { FACEBOOK_PAGE, FACEBOOK_POSTS } from '../data/facebookPosts';

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */

/** Extrait l'ID numérique d'une URL Facebook (post ou reel) */
function extractFbId(url = '') {
  // /videos/123456  ou  /reels/123456  ou  /posts/123456
  const m = url.match(/\/(videos|reels|posts)\/(\d+)/);
  return m ? m[2] : null;
}

/** Renvoie l'URL embed Facebook correcte selon le type */
function buildEmbedUrl(post) {
  const id = extractFbId(post.url);
  if (!id) return null;

  if (post.type === 'reel' || post.type === 'video') {
    // Embed vidéo Facebook (fonctionne pour Reels et vidéos)
    return `https://www.facebook.com/plugins/video.php?${new URLSearchParams({
      href: post.url,
      show_text: 'false',
      width: '560',
      allowfullscreen: 'true',
    })}`;
  }
  return null;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Sous-composants
───────────────────────────────────────────────────────────────────────────── */

/** Galerie d'images cliquable (miniatures + lightbox) */
function ImageGallery({ images, postId }) {
  const [lightbox, setLightbox] = useState(null);
  const count = images.length;
  const preview = images.slice(0, 4);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % count);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, count]);

  const gridCls =
    count === 1
      ? 'grid-cols-1'
      : count === 2
      ? 'grid-cols-2'
      : count === 3
      ? 'grid-cols-2'
      : 'grid-cols-2';

  return (
    <>
      {/* Miniatures */}
      <div className={`grid gap-1 ${gridCls}`}>
        {preview.map((src, idx) => {
          const isLast = idx === 3 && count > 4;
          return (
            <button
              key={`${postId}-img-${idx}`}
              className={`relative overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                count === 3 && idx === 0 ? 'row-span-2' : ''
              }`}
              style={{ aspectRatio: count === 1 ? '16/9' : '1/1' }}
              onClick={() => setLightbox(idx)}
              aria-label={`Voir la photo ${idx + 1}`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {isLast && (
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+{count - 4}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-xl"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          {count > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-xl"
                onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + count) % count); }}
                aria-label="Photo précédente"
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-xl"
                onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % count); }}
                aria-label="Photo suivante"
              >
                ›
              </button>
            </>
          )}
          <img
            src={images[lightbox]}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-4 text-white/60 text-sm">
            {lightbox + 1} / {count}
          </span>
        </div>
      )}
    </>
  );
}

/** Lecteur vidéo / Reel Facebook intégré (pas de redirect) */
function FbVideoPlayer({ post }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = buildEmbedUrl(post);

  if (!embedUrl) {
    // Fallback: lien externe élégant
    return (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100">▶</span>
        Voir le Réel sur Facebook
      </a>
    );
  }

  if (!playing) {
    return (
      <div className="relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer group" style={{ aspectRatio: '9/16', maxHeight: '480px' }}>
        {/* Miniature / placeholder */}
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </div>
        )}
        {/* Overlay play */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-3">
          <button
            className="w-16 h-16 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all shadow-xl flex items-center justify-center"
            onClick={() => setPlaying(true)}
            aria-label="Lire la vidéo"
          >
            <svg className="w-7 h-7 text-blue-600 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <span className="text-white text-xs font-semibold tracking-wide uppercase opacity-80">
            {post.type === 'reel' ? '🎬 Réel Facebook' : '▶ Vidéo Facebook'}
          </span>
        </div>
      </div>
    );
  }

  // iframe embed (sans redirection)
  return (
    <div
      className="relative rounded-xl overflow-hidden bg-black"
      style={{ aspectRatio: post.type === 'reel' ? '9/16' : '16/9', maxHeight: '480px' }}
    >
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title={post.text?.slice(0, 60) || 'Vidéo Facebook'}
      />
    </div>
  );
}

/** Carte d'un post Facebook */
function FbPostCard({ post }) {
  const hasVideo = post.type === 'reel' || post.type === 'video';
  const hasImages = post.images?.length > 0;

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      {/* En-tête */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <img
          src={FACEBOOK_PAGE.avatar}
          alt="Famissio"
          className="w-10 h-10 rounded-full object-contain bg-orange-50 p-0.5 ring-1 ring-orange-100 flex-shrink-0"
          width="40"
          height="40"
        />
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-tight truncate">{FACEBOOK_PAGE.name}</p>
          <time className="text-xs text-gray-400" dateTime={post.isoDate}>{post.date}</time>
        </div>
        {/* Badge type */}
        {hasVideo && (
          <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-2 py-0.5">
            {post.type === 'reel' ? '🎬 Réel' : '▶ Vidéo'}
          </span>
        )}
      </div>

      {/* Texte */}
      {post.text && (
        <p className="px-4 pb-3 text-sm text-gray-700 leading-relaxed line-clamp-4">{post.text}</p>
      )}

      {/* Média */}
      <div className="px-4 pb-4 flex-1 flex flex-col justify-end">
        {hasVideo ? (
          <FbVideoPlayer post={post} />
        ) : hasImages ? (
          <ImageGallery images={post.images} postId={post.id} />
        ) : null}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-50 px-4 py-3">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-blue-600 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          Voir sur Facebook
        </a>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Composant principal
───────────────────────────────────────────────────────────────────────────── */
export default function FacebookFeed() {
  const [visibleCount, setVisibleCount] = useState(6);
  const postsToShow = FACEBOOK_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < FACEBOOK_POSTS.length;

  return (
    <section
      className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-orange-50/20 py-14 sm:py-20"
      aria-label="Actualités de Famissio sur Facebook"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* En-tête de section */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <img
              src={FACEBOOK_PAGE.avatar}
              alt=""
              className="h-11 w-11 rounded-full bg-white p-1 object-contain shadow-sm ring-1 ring-orange-100"
              width="44"
              height="44"
              loading="lazy"
            />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              Famissio sur Facebook
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Les dernières nouvelles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Publications, photos et vidéos récentes directement issues de notre page Facebook.
          </p>
        </div>

        {/* Grille de posts (3 col desktop / 2 tablette / 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min">
          {postsToShow.map((post) => (
            <FbPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Boutons bas de section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {hasMore && (
            <button
              onClick={() => setVisibleCount((n) => n + 3)}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all"
            >
              Voir plus de publications
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          )}
          <a
            href={FACEBOOK_PAGE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Suivre la page Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
