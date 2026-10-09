import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MobileHeroV2 — Hero mobile aligné sur la nouvelle identité Famissio
 * Fond rouge, diagonale crème, logo blanc, titre serif, CTA pill.
 */
export default function MobileHeroV2() {
  return (
    <div className="mhv2">

      {/* Diagonale crème en bas à droite — même signature que desktop */}
      <div className="mhv2-diagonal" />

      {/* Logo en haut à gauche */}
      <div className="mhv2-logo">
        <img
          src="/assets/images/Logo Famissio blanc.png"
          alt="Famissio"
        />
      </div>

      {/* Contenu centré verticalement */}
      <div className="mhv2-body">

        {/* Eyebrow avec slash distinctif Famissio */}
        <div className="mhv2-eyebrow">
          <span className="mhv2-slash" aria-hidden="true" />
          Missions paroissiales
        </div>

        {/* Titre */}
        <h1 className="mhv2-title">
          Des familles<br />
          <em>en mission.</em>
        </h1>

        {/* Ligne décorative */}
        <div className="mhv2-rule" />

        {/* Sous-titre */}
        <p className="mhv2-sub">
          Au service des curés et de leurs paroisses rurales, chaque année à la Toussaint.
        </p>

        {/* CTA */}
        <Link to="/missions#liste-missions" className="mhv2-cta">
          Découvrir nos missions
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      <style>{`
        /* ── CONTAINER ── */
        .mhv2 {
          position: relative;
          height: 100dvh;
          min-height: 580px;
          width: 100%;
          background: #c82904;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── DIAGONALE — signature visuelle ── */
        .mhv2-diagonal {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 70%;
          height: 80%;
          background: #fff8f4;
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
          opacity: 0.08;
          pointer-events: none;
        }

        /* ── LOGO ── */
        .mhv2-logo {
          position: absolute;
          top: 28px;
          left: 24px;
          z-index: 10;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mhv2-logo img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
        }

        /* ── BODY ── */
        .mhv2-body {
          position: relative;
          z-index: 5;
          padding: 0 6% 0 6%;
          margin-top: 60px;
        }

        /* ── EYEBROW avec slash ── */
        .mhv2-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin-bottom: 24px;
        }

        /* Le slash distinctif Famissio (double barre décalée) */
        .mhv2-slash {
          display: inline-flex;
          flex-direction: column;
          gap: 3px;
          flex-shrink: 0;
        }

        .mhv2-slash::before,
        .mhv2-slash::after {
          content: '';
          display: block;
          height: 2px;
          border-radius: 1px;
          background: rgba(255,255,255,0.6);
        }

        .mhv2-slash::before { width: 18px; }
        .mhv2-slash::after  { width: 12px; margin-left: 6px; }

        /* ── TITRE ── */
        .mhv2-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.2rem, 13vw, 5rem);
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: -2px;
          color: white;
          margin-bottom: 28px;
        }

        .mhv2-title em {
          font-style: italic;
          color: rgba(255,255,255,0.85);
        }

        /* ── RÈGLE DÉCO ── */
        .mhv2-rule {
          width: 48px;
          height: 3px;
          background: rgba(255,255,255,0.4);
          border-radius: 2px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }

        .mhv2-rule::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 40%;
          height: 100%;
          background: white;
          border-radius: inherit;
        }

        /* ── SOUS-TITRE ── */
        .mhv2-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(255,255,255,0.82);
          margin-bottom: 40px;
          max-width: 380px;
        }

        /* ── CTA ── */
        .mhv2-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #c82904;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 16px 28px;
          border-radius: 50px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          transition: background 0.25s, color 0.25s, gap 0.25s;
        }

        .mhv2-cta:active {
          background: #1a1a1a;
          color: white;
          gap: 18px;
        }

        .mhv2-cta svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* ── SHORT SCREENS ── */
        @media (max-height: 650px) {
          .mhv2-body { margin-top: 30px; }
          .mhv2-title { font-size: clamp(2.5rem, 11vw, 3.8rem); }
          .mhv2-sub { margin-bottom: 28px; font-size: 0.95rem; }
        }
      `}</style>
    </div>
  );
}
