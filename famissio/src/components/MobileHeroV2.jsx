import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MobileHeroV2() {
  return (
    <div className="mobile-hero">
      {/* Formes organiques en arrière-plan */}
      <div className="mobile-hero-blob-bg mobile-hero-blob-1"></div>
      <div className="mobile-hero-blob-bg mobile-hero-blob-2"></div>

      {/* Logo en haut à droite */}
      <div className="mobile-hero-logo-wrapper">
        <img
          src="https://www.dropbox.com/scl/fi/9c4wjresj75ggoruwqwpp/Logo-Famissio-rouge.png?rlkey=td18v0flur03xqsroyazjh1l6&st=vqgiyjx2&raw=1"
          alt="Famissio"
          className="mobile-hero-logo-img"
        />
      </div>

      {/* Contenu */}
      <div className="mobile-hero-content">
        <div className="mobile-hero-title-group">
          <h1 className="mobile-hero-title">Famissio</h1>
          <div className="mobile-hero-underline"></div>
        </div>

        <div className="mobile-hero-text-card">
          <p className="mobile-hero-description">
            Des familles missionnaires au service des paroisses rurales de France,
            pour entourer le prêtre et donner un élan missionnaire.
          </p>
        </div>

        <a href="#missions" className="mobile-hero-cta">
          <span>Découvrir nos missions <ArrowRight size={18} strokeWidth={2.5} /></span>
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');

        /* SCOPED STYLES ONLY - NO GLOBAL RESET */

        .mobile-hero {
          position: relative;
          height: 100dvh;
          min-height: 100dvh;
          max-height: 100dvh;
          width: 100%;
          background: linear-gradient(135deg, #e74c3c 0%, #d35400 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 0; /* Removing vertical padding to let flexbox center perfectly within 100dvh */
        }

        /* Blobs organiques animés */
        .mobile-hero-blob-bg {
          position: absolute;
          border-radius: 40% 60% 50% 70% / 60% 40% 70% 50%;
          opacity: 0.15;
          animation: mobile-hero-morph-blob 20s ease-in-out infinite;
        }

        .mobile-hero-blob-1 {
          width: 400px;
          height: 400px;
          background: white;
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .mobile-hero-blob-2 {
          width: 300px;
          height: 300px;
          background: white;
          bottom: -80px;
          left: -80px;
          animation-delay: -10s;
        }

        @keyframes mobile-hero-morph-blob {
          0%, 100% {
            border-radius: 40% 60% 50% 70% / 60% 40% 70% 50%;
            transform: rotate(0deg) scale(1);
          }
          33% {
            border-radius: 70% 30% 50% 50% / 50% 60% 40% 60%;
            transform: rotate(120deg) scale(1.1);
          }
          66% {
            border-radius: 50% 70% 60% 40% / 70% 50% 50% 60%;
            transform: rotate(240deg) scale(0.95);
          }
        }

        /* Logo */
        .mobile-hero-logo-wrapper {
          position: absolute;
          top: 80px;
          right: 28px;
          z-index: 10;
          width: 110px; /* Increased from 95px */
          height: 110px; /* Increased from 95px */
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
          animation: mobile-hero-gentle-pulse 4s ease-in-out infinite;
        }

        @keyframes mobile-hero-gentle-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          }
        }

        .mobile-hero-logo-img {
          width: 90px; /* Increased from 80px */
          height: auto;
          display: block;
        }

        /* Contenu */
        .mobile-hero-content {
          position: relative;
          z-index: 5;
          padding: 0 28px;
          width: 100%;
          margin-top: 20vh; /* Pushes content effectively down from the vertical center */
        }

        /* Groupe titre */
        .mobile-hero-title-group {
          margin-bottom: 50px;
        }

        .mobile-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 15vw, 6rem); /* Reduced max size slightly to prevent overflow */
          font-weight: 900;
          color: white;
          line-height: 0.85;
          letter-spacing: -3px;
          margin-bottom: 25px;
          text-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
        }

        .mobile-hero-underline {
          width: 110px;
          height: 5px;
          background: white;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }

        .mobile-hero-underline::after {
          content: '';
          position: absolute;
          width: 40%;
          height: 100%;
          background: #d4af37;
          left: 0;
        }

        /* Carte de texte */
        .mobile-hero-text-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 24px;
          padding: 32px 28px;
          margin-bottom: 45px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .mobile-hero-description {
          color: white;
          font-size: 1.2rem;
          line-height: 1.75;
          font-weight: 300;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        /* CTA */
        .mobile-hero-cta {
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.05rem;
          padding: 16px 0;
          border-bottom: 3px solid white;
          transition: padding-left 0.3s ease;
          max-width: 480px;
        }

        .mobile-hero-cta span {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-hero-cta:active {
          padding-left: 12px;
        }

        /* Responsive */
        @media (max-height: 700px) {
          .mobile-hero {
            padding: 0; /* Keep padding 0 */
          }

          .mobile-hero-content {
            margin-top: 10vh; /* Reduced from 20vh on short screens to prevent cutoff */
          }

          .mobile-hero-logo-wrapper {
            width: 80px;
            height: 80px;
            top: 40px; /* Adjusted top position for logo on short screens */
          }

          .mobile-hero-logo-img {
            width: 58px;
          }

          .mobile-hero-title-group {
            margin-bottom: 40px;
          }

          .mobile-hero-text-card {
            padding: 28px 24px;
            margin-bottom: 35px;
          }

          .mobile-hero-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 360px) {
          .mobile-hero-text-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
}
