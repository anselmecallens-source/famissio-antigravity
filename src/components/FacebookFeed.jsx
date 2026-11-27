import { useState, useEffect } from 'react';
import { FACEBOOK_PAGE, FACEBOOK_POSTS } from '../data/facebookPosts';

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function buildEmbedUrl(url) {
  if (!url) return null;
  return (
    'https://www.facebook.com/plugins/video.php?' +
    new URLSearchParams({ href: url, show_text: 'false', width: '560', allowfullscreen: 'true' })
  );
}

/* ─── Lightbox ────────────────────────────────────────────────────────────── */

function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const n = images.length;

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowRight')  setIdx((i) => (i + 1) % n);
      if (e.key === 'ArrowLeft')   setIdx((i) => (i - 1 + n) % n);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [n, onClose]);

  const btn = (extra, label, onClick, children) => (
    <button onClick={onClick} aria-label={label} style={{
      position: 'absolute', border: 'none', cursor: 'pointer',
      background: 'rgba(255,255,255,0.15)', color: '#fff',
      borderRadius: '50%', width: 42, height: 42,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, lineHeight: 1, ...extra,
    }}>{children}</button>
  );

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      {btn({ top: 14, right: 14 }, 'Fermer', onClose, '✕')}
      {n > 1 && btn({ left: 14, top: '50%', transform: 'translateY(-50%)' }, 'Précédent',
        (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + n) % n); }, '‹')}
      {n > 1 && btn({ right: 14, top: '50%', transform: 'translateY(-50%)' }, 'Suivant',
        (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % n); }, '›')}

      <img
        src={images[idx]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '100%', maxHeight: '90vh',
          objectFit: 'contain', borderRadius: 10,
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)', display: 'block',
        }}
      />
      {n > 1 && (
        <span style={{
          position: 'absolute', bottom: 14,
          color: 'rgba(255,255,255,0.55)', fontSize: 12,
        }}>{idx + 1} / {n}</span>
      )}
    </div>
  );
}

/* ─── Galerie d'images ────────────────────────────────────────────────────── */

function ImageGallery({ images, postId }) {
  const [lb, setLb] = useState(null);
  const all     = images;
  const count   = all.length;
  const preview = all.slice(0, Math.min(count, 4));

  /*
   * Layouts :
   *  1 img  → pleine largeur 16/9
   *  2 imgs → 2 colonnes égales, chaque cellule carrée
   *  3 imgs → grande à gauche (2 lignes) + 2 petites empilées à droite
   *  4+     → grille 2×2, dernière cellule peut afficher "+N"
   */
  const getGridStyle = () => {
    if (count === 1) return { gridTemplateColumns: '1fr' };
    if (count === 2) return { gridTemplateColumns: '1fr 1fr' };
    if (count === 3) return {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: '"a b" "a c"',
    };
    return { gridTemplateColumns: '1fr 1fr' };
  };

  const getItemStyle = (i) => {
    const base = {
      display: 'block', position: 'relative',
      border: 'none', padding: 0, cursor: 'pointer',
      overflow: 'hidden', background: '#e5e7eb',
    };
    if (count === 1)  return { ...base, aspectRatio: '16/9' };
    if (count === 3) {
      if (i === 0) return { ...base, gridArea: 'a' };   // grande à gauche, hauteur définie par les 2 voisines
      if (i === 1) return { ...base, gridArea: 'b', aspectRatio: '1/1' };
      if (i === 2) return { ...base, gridArea: 'c', aspectRatio: '1/1' };
    }
    return { ...base, aspectRatio: '1/1' }; // 2 ou 4+
  };

  return (
    <>
      <div style={{
        display: 'grid', gap: 3, borderRadius: 10, overflow: 'hidden',
        ...getGridStyle(),
      }}>
        {preview.map((src, i) => {
          const isLast = i === 3 && count > 4;
          return (
            <button
              key={`${postId}-${i}`}
              aria-label={`Agrandir photo ${i + 1}`}
              onClick={() => setLb(i)}
              style={getItemStyle(i)}
            >
              <img
                src={src} alt="" loading="lazy"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
              {isLast && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.55)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 22, fontWeight: 700,
                }}>+{count - 4}</div>
              )}
            </button>
          );
        })}
      </div>

      {lb !== null && (
        <Lightbox images={all} startIndex={lb} onClose={() => setLb(null)} />
      )}
    </>
  );
}

/* ─── Lecteur vidéo / Réel Facebook ──────────────────────────────────────── */

function FbVideoPlayer({ post }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = buildEmbedUrl(post.url);
  const isReel   = post.type === 'reel';

  if (!playing) {
    return (
      <div
        style={{
          position: 'relative', width: '100%',
          aspectRatio: isReel ? '9/16' : '16/9',
          maxHeight: 420,
          borderRadius: 10, overflow: 'hidden',
          background: '#1a1a2e', cursor: 'pointer',
        }}
      >
        {/* Miniature */}
        {post.thumbnail && (
          <img
            src={post.thumbnail} alt="" loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        {/* Overlay + bouton play */}
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.38)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <button
            onClick={() => setPlaying(true)}
            aria-label="Lire"
            style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)', transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#1877f2" style={{ marginLeft: 4 }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <span style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 11,
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            {isReel ? '🎬 Réel Facebook' : '▶ Vidéo Facebook'}
          </span>
        </div>
      </div>
    );
  }

  /* Lecture inline — pas de redirection */
  return (
    <div style={{
      position: 'relative', width: '100%',
      aspectRatio: isReel ? '9/16' : '16/9',
      maxHeight: 420,
      borderRadius: 10, overflow: 'hidden', background: '#000',
    }}>
      <iframe
        src={embedUrl}
        title={post.text?.slice(0, 60) || 'Vidéo Facebook'}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

/* ─── Carte ───────────────────────────────────────────────────────────────── */

function FbPostCard({ post }) {
  const isVideo  = post.type === 'reel' || post.type === 'video';
  const hasImages = !isVideo && Array.isArray(post.images) && post.images.length > 0;

  return (
    <article
      style={{
        background: '#fff', borderRadius: 14,
        border: '1px solid #efefef',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px 8px' }}>
        <img
          src={FACEBOOK_PAGE.avatar} alt="Famissio" loading="lazy"
          style={{
            width: 38, height: 38, borderRadius: '50%',
            objectFit: 'contain', background: '#fff8f4',
            padding: 3, border: '1px solid #ffe4d6', flexShrink: 0,
          }}
        />
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>
            {FACEBOOK_PAGE.name}
          </p>
          <time style={{ fontSize: 11, color: '#9ca3af' }} dateTime={post.isoDate}>
            {post.date}
          </time>
        </div>
        {isVideo && (
          <span style={{
            flexShrink: 0, fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.07em',
            color: '#1877f2', background: '#eff6ff',
            borderRadius: 999, padding: '2px 8px',
          }}>
            {post.type === 'reel' ? '🎬 Réel' : '▶ Vidéo'}
          </span>
        )}
      </div>

      {/* Texte */}
      {post.text && (
        <p style={{
          margin: '0 14px 10px', fontSize: 13, lineHeight: 1.55, color: '#374151',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {post.text}
        </p>
      )}

      {/* Média */}
      {(isVideo || hasImages) && (
        <div style={{ padding: '0 10px 10px' }}>
          {isVideo
            ? <FbVideoPlayer post={post} />
            : <ImageGallery images={post.images} postId={post.id} />
          }
        </div>
      )}

      {/* Footer lien */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid #f5f5f5', padding: '8px 14px' }}>
        <a
          href={post.url} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontWeight: 600, color: '#9ca3af',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#1877f2'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          Voir sur Facebook
        </a>
      </div>
    </article>
  );
}

/* ─── Composant principal ─────────────────────────────────────────────────── */

export default function FacebookFeed() {
  const [visibleCount, setVisibleCount] = useState(6);
  const posts   = FACEBOOK_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < FACEBOOK_POSTS.length;

  return (
    <section
      aria-label="Actualités de Famissio sur Facebook"
      style={{
        borderTop: '1px solid #f0f0f0',
        background: 'linear-gradient(to bottom, #f9fafb, #fff8f4)',
        padding: '60px 0',
      }}
    >
      <style>{`
        .fb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 640px)  { .fb-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .fb-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* En-tête section */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <img
              src={FACEBOOK_PAGE.avatar} alt="" loading="lazy"
              style={{
                width: 42, height: 42, borderRadius: '50%',
                objectFit: 'contain', background: '#fff',
                padding: 4, border: '1px solid #ffe4d6',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              }}
            />
            <span style={{
              fontSize: 11, fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.17em', color: '#c2410c',
            }}>
              Famissio sur Facebook
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
            fontWeight: 700, color: '#111', margin: '0 0 8px',
          }}>
            Les dernières nouvelles
          </h2>
          <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>
            Publications, photos et réels directement issus de notre page Facebook.
          </p>
        </div>

        {/* Grille */}
        <div className="fb-grid">
          {posts.map((post) => (
            <FbPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Actions */}
        <div style={{
          marginTop: 32, display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          {hasMore && (
            <button
              onClick={() => setVisibleCount((n) => n + 3)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                borderRadius: 999, background: '#fff',
                border: '1px solid #e5e7eb',
                padding: '9px 20px', fontSize: 13, fontWeight: 600,
                color: '#374151', cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.color = '#c2410c'; e.currentTarget.style.background = '#fff8f4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.background = '#fff'; }}
            >
              Voir plus de publications
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          )}
          <a
            href={FACEBOOK_PAGE.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              borderRadius: 999, background: '#1877f2',
              padding: '9px 20px', fontSize: 13, fontWeight: 600,
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(24,119,242,0.25)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1558b0'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1877f2'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Voir toute la page Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
