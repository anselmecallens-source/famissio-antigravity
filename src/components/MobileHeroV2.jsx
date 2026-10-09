import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MobileHeroV2 — Hero mobile harmonieux avec photo en arrière-plan,
 * grand logo Famissio et typographie parfaitement équilibrée.
 */
export default function MobileHeroV2() {
  return (
    <div className="mhv2">
      {/* 1. PHOTO D'ARRIÈRE-PLAN PLEIN ÉCRAN */}
      <div className="mhv2-bg">
        <img
          src="/assets/images/Famissio-252.jpg"
          alt="Familles Famissio en mission"
          className="mhv2-bg-img"
          fetchpriority="high"
        />
        {/* Dégradé chaleureux pour sublimer la photo et garantir une lisibilité absolue */}
        <div className="mhv2-bg-overlay" />
      </div>

      {/* 2. GRAND LOGO EN HAUT À GAUCHE */}
      <div className="mhv2-header">
        <Link to="/" className="mhv2-logo-link" aria-label="Famissio Accueil">
          <img
            src="/assets/images/Logo Famissio blanc.png"
            alt="Famissio"
            className="mhv2-logo-img"
          />
        </Link>
      </div>

      {/* 3. CONTENU EN BAS DU HERO — HARMONIEUX ET PARFAITEMENT PROPORTIONNÉ */}
      <div className="mhv2-content">
        <h1 className="mhv2-title">
          Des familles<br />
          <em>en mission.</em>
        </h1>

        <div className="mhv2-rule" />

        <p className="mhv2-sub">
          Au service des curés et de leurs paroisses rurales, chaque année à la Toussaint.
        </p>

        <div className="mhv2-cta-wrap">
          <Link to="/missions#liste-missions" className="mhv2-cta">
            <span>Découvrir nos missions</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        /* ── CONTAINER 100DVH ── */
        .mhv2 {
          position: relative;
          height: 100dvh;
          min-height: 560px;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #110806;
        }

        /* ── PHOTO D'ARRIÈRE-PLAN ── */
        .mhv2-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .mhv2-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 55% 20%;
          display: block;
          transform: scale(1.02);
        }

        /* ── DÉGRADÉ VIGNETTE & CONTRASTE ── */
        .mhv2-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0.15) 30%,
            rgba(20, 8, 5, 0.65) 55%,
            rgba(15, 6, 4, 0.92) 82%,
            rgba(12, 4, 2, 0.98) 100%
          );
          z-index: 2;
        }

        /* ── EN-TÊTE AVEC GRAND LOGO ── */
        .mhv2-header {
          position: relative;
          z-index: 10;
          padding: 24px 22px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .mhv2-logo-link {
          display: inline-block;
          text-decoration: none;
        }

        .mhv2-logo-img {
          width: clamp(120px, 34vw, 155px);
          height: auto;
          display: block;
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.55));
          transition: transform 0.2s ease;
        }

        .mhv2-logo-img:active {
          transform: scale(0.97);
        }

        /* ── ZONE DE CONTENU TEXTE ── */
        .mhv2-content {
          position: relative;
          z-index: 10;
          padding: 0 24px 40px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        /* ── TITRE SERIF MAJESTUEUX ── */
        .mhv2-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.7rem, 11.5vw, 3.8rem);
          font-weight: 900;
          line-height: 0.96;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 0.7);
        }

        .mhv2-title em {
          font-style: italic;
          color: #fff6f2;
          font-weight: 700;
        }

        /* ── LIGNE DÉCORATIVE ORANGE / CHALEUR ── */
        .mhv2-rule {
          width: 50px;
          height: 3.5px;
          background: #f46a07;
          border-radius: 2px;
          margin: 18px 0 16px 0;
          box-shadow: 0 2px 10px rgba(244, 106, 7, 0.55);
        }

        /* ── SOUS-TITRE ── */
        .mhv2-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.02rem, 3.8vw, 1.18rem);
          font-weight: 400;
          line-height: 1.62;
          color: rgba(255, 255, 255, 0.94);
          margin: 0 0 28px 0;
          max-width: 440px;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
        }

        /* ── CTA PILL LUMINEUX ET IMPRESSIONNANT ── */
        .mhv2-cta-wrap {
          display: flex;
        }

        .mhv2-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #ffffff;
          color: #c82904;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.02rem;
          padding: 16px 30px;
          border-radius: 50px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
          transition: all 0.25s ease;
          width: 100%;
          max-width: 320px;
        }

        .mhv2-cta svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .mhv2-cta:active {
          background: #f46a07;
          color: #ffffff;
          transform: translateY(2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
        }

        .mhv2-cta:active svg {
          transform: translateX(4px);
        }

        /* ── ÉCRANS COURTS (hauteur < 680px) ── */
        @media (max-height: 680px) {
          .mhv2-header {
            padding: 16px 20px;
          }
          .mhv2-logo-img {
            width: clamp(100px, 28vw, 125px);
          }
          .mhv2-content {
            padding: 0 20px 24px 20px;
          }
          .mhv2-title {
            font-size: clamp(2.3rem, 9.5vw, 3rem);
          }
          .mhv2-rule {
            margin: 12px 0 12px 0;
          }
          .mhv2-sub {
            margin-bottom: 20px;
            font-size: 0.96rem;
            line-height: 1.5;
          }
          .mhv2-cta {
            padding: 14px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
