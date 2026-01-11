import React, { useState, useEffect } from 'react';

const Home = () => {
    const [activeMission, setActiveMission] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrolled / maxScroll) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const missionBlocks = [
        {
            id: 1,
            title: 'ENVOI EN MISSION',
            image: 'https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG',
            content: "La semaine de mission commence pour les Famissionaires (seulement) par une journée de rassemblement, de prière, de témoignages, de temps fraternels et d'envoi en mission."
        },
        {
            id: 2,
            title: 'FORMATION',
            image: 'https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG',
            items: [
                "Formation et jeux de rôle pour les Famissionnaires comme pour les Paroissiens le Dimanche après-midi",
                "Préparation d'un témoignage personnel, pendant laquelle chacun revisite, sous le regard de Dieu, sa propre histoire sainte",
                "Une formation quotidienne de 5mn donnée chaque matin par un consacré",
                "Un temps de relecture de mission quotidien, organisé par tranche d'âge",
                "Des fiches de formation disponibles sur ce Blog 365 jours/365"
            ]
        },
        {
            id: 3,
            title: 'TEMPS DE PRIÈRE',
            image: 'https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg',
            items: [
                "Chaque journée commence par une heure de laudes, louanges, adoration et formation",
                "Une messe quotidienne",
                "La récitation du Chapelet",
                "Les Complies pour clore la journée"
            ]
        },
        {
            id: 4,
            title: 'DES TEMPS DE MISSION',
            image: 'https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG',
            items: [
                "Visitations dans la rue et sur les marchés",
                "Porte-à-porte",
                "Bénédictions de cimetière, commerces, maisons, fermes...",
                "Journée des familles",
                "Pièces de théâtre sur les places publiques",
                "Processions, chemins de croix",
                "Visites aux AHPAD",
                "Concert polyphonique dans la rue"
            ]
        },
        {
            id: 5,
            title: 'TEMPS FRATERNELS',
            image: 'https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG',
            items: [
                "Repas entre Famissionnaires et Paroissiens",
                "Soirée jeux pour apprendre à se connaître",
                "Temps de détente autour d'un ballon ou de jeux de société",
                "Veillée festive en fin de mission"
            ]
        },
        {
            id: 6,
            title: 'VEILLÉES',
            image: 'https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG',
            items: [
                "Veillée Miséricorde",
                "Veillée sur le thème de l'au-delà et de nos défunts",
                "Veillée mariale",
                "Veillée ciné-débat",
                "Veillée pour les malades et les personnes qui souffrent"
            ]
        }
    ];

    return (
        <div className="famissio-home">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .famissio-home {
          font-family: 'Inter', sans-serif;
          background: #fafafa;
          overflow-x: hidden;
        }

        /* HERO ALTERNATIVE - Section d'introduction */
        .intro-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: white;
          position: relative;
          padding: 0;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          width: 100%;
          min-height: 100vh;
        }

        .intro-left {
          padding: 10% 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #c82904 0%, #f46a07 100%);
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          position: relative;
          z-index: 2;
        }

        .intro-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 30px;
          font-weight: 800;
        }

        .intro-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 7vw, 8rem);
          font-weight: 900;
          color: white;
          line-height: 0.9;
          margin-bottom: 40px;
          letter-spacing: -4px;
        }

        .intro-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.95);
          max-width: 600px;
          margin-bottom: 50px;
        }

        .intro-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .stat-item {
          border-left: 3px solid rgba(255,255,255,0.3);
          padding-left: 20px;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: white;
          line-height: 1;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .intro-right {
          position: relative;
          overflow: hidden;
        }

        .intro-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .intro-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* SECTION TOUSSAINT - Design contemplatif */
        .toussaint-section {
          background: #1a1a1a;
          color: white;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        .toussaint-inner {
          max-width: 1600px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 5%;
        }

        .toussaint-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .toussaint-tag {
          display: inline-block;
          background: rgba(248, 106, 7, 0.15);
          color: #f46a07;
          padding: 12px 30px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 50px;
        }

        .toussaint-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 60px;
          color: white;
        }

        .questions-cascade {
          margin-bottom: 60px;
        }

        .question-item {
          font-size: 1.3rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
          margin-bottom: 25px;
          padding-left: 40px;
          position: relative;
          transition: all 0.3s;
        }

        .question-item:hover {
          color: rgba(255,255,255,0.95);
          transform: translateX(10px);
        }

        .question-item::before {
          content: '?';
          position: absolute;
          left: 0;
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #f46a07;
          font-weight: 700;
        }

        .toussaint-answer {
          font-size: 1.35rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.85);
          border-left: 4px solid #f46a07;
          padding-left: 40px;
          margin-top: 80px;
          font-weight: 300;
        }

        /* SECTION MISSION - Grid innovante avec images */
        .mission-showcase {
          background: white;
          padding: 120px 0;
        }

        .mission-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 100px;
          padding: 0 5%;
        }

        .mission-super {
          font-size: 0.8rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #f46a07;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .mission-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 30px;
        }

        .mission-subtitle {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.7;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 100%;
          margin: 0 auto;
        }

        .mission-card {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .mission-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .mission-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(30%);
        }

        .mission-card:hover .mission-card-image img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .mission-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          transition: all 0.4s;
        }

        .mission-card:hover .mission-overlay {
          background: linear-gradient(to top, rgba(200,41,4,0.95) 0%, rgba(200,41,4,0.7) 70%, rgba(200,41,4,0.3) 100%);
        }

        .mission-number {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.15);
          line-height: 1;
          margin-bottom: 15px;
          transition: all 0.4s;
        }

        .mission-card:hover .mission-number {
          color: rgba(255,255,255,0.3);
          transform: translateY(-10px);
        }

        .mission-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          line-height: 1.2;
          transition: all 0.4s;
        }

        .mission-card:hover .mission-card-title {
          transform: translateY(-5px);
        }

        .mission-preview {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s;
        }

        .mission-card:hover .mission-preview {
          max-height: 200px;
          opacity: 1;
        }

        /* Panel latéral pour détails */
        .mission-panel {
          position: fixed;
          right: -600px;
          top: 0;
          width: 600px;
          height: 100vh;
          background: white;
          box-shadow: -10px 0 50px rgba(0,0,0,0.2);
          z-index: 1000;
          transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          padding: 80px 60px;
        }

        .mission-panel.active {
          right: 0;
        }

        .panel-close {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border: none;
          background: #f46a07;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .panel-close:hover {
          background: #c82904;
          transform: rotate(90deg);
        }

        .panel-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 900;
          color: #c82904;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .panel-content {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #333;
          margin-bottom: 20px;
        }

        .panel-list {
          list-style: none;
          margin-top: 30px;
        }

        .panel-list li {
          padding: 20px 0 20px 30px;
          border-left: 3px solid #f46a07;
          margin-bottom: 15px;
          color: #555;
          line-height: 1.7;
          position: relative;
          transition: all 0.3s;
        }

        .panel-list li:hover {
          border-left-color: #c82904;
          padding-left: 40px;
        }

        .panel-list li::before {
          content: '→';
          position: absolute;
          left: 10px;
          color: #f46a07;
          font-weight: bold;
        }

        /* SECTION "ET APRÈS" - Typographie bold */
        .after-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 5%;
          background: #fafafa;
          position: relative;
        }

        .after-content {
          max-width: 1100px;
          text-align: center;
        }

        .after-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(15rem, 25vw, 25rem);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 2px rgba(200,41,4,0.1);
          line-height: 0.8;
          margin-bottom: -100px;
          position: relative;
          z-index: 1;
        }

        .after-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 7rem);
          font-weight: 900;
          color: #c82904;
          line-height: 1;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .after-text {
          font-size: 1.5rem;
          line-height: 1.8;
          color: #333;
          max-width: 900px;
          margin: 0 auto;
          font-weight: 300;
        }

        .after-highlight {
          font-weight: 700;
          color: #f46a07;
          position: relative;
          display: inline-block;
        }

        /* STORY SECTION - Split asymétrique */
        .story-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .story-image-side {
          position: relative;
          overflow: hidden;
        }

        .story-image-side img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-text-side {
          padding: 10% 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .story-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f46a07;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .story-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 40px;
        }

        .story-paragraph {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #555;
          margin-bottom: 30px;
          text-align: justify;
        }

        .story-highlight {
          background: linear-gradient(135deg, #fff8f4, white);
          padding: 40px;
          border-left: 5px solid #f46a07;
          margin-top: 40px;
          border-radius: 0;
        }

        .story-highlight p {
          font-size: 1.2rem;
          color: #333;
          font-weight: 600;
          line-height: 1.7;
        }

        /* VIDEO SECTION - Full bleed */
        .video-fullbleed {
          background: #0a0a0a;
          padding: 150px 5%;
        }

        .video-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .video-intro {
          text-align: center;
          margin-bottom: 80px;
        }

        .video-tag {
          color: #f46a07;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .video-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .intro-grid {
            grid-template-columns: 1fr;
          }

          .intro-left {
            clip-path: none;
          }

          .intro-right {
            min-height: 50vh;
          }

          .mission-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .story-split {
            grid-template-columns: 1fr;
          }

          .mission-panel {
            width: 100%;
            right: -100%;
          }
        }

        @media (max-width: 768px) {
          .intro-stats {
            grid-template-columns: 1fr;
          }

          .mission-grid {
            grid-template-columns: 1fr;
          }

          .after-number {
            font-size: 10rem;
            margin-bottom: -50px;
          }
        }
      `}</style>

            {/* INTRO HERO */}
            <section className="intro-hero">
                <div className="intro-grid">
                    <div className="intro-left">
                        <div className="intro-eyebrow">Familles Missionnaires</div>
                        <h1 className="intro-title">Une mission qui transforme</h1>
                        <p className="intro-text">
                            Des familles missionnaires au service des paroisses rurales de France,
                            pour entourer le prêtre et donner un élan missionnaire authentique.
                        </p>
                        <div className="intro-stats">
                            <div className="stat-item">
                                <div className="stat-number">30+</div>
                                <div className="stat-label">Missionnaires</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">7</div>
                                <div className="stat-label">Jours</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Impact</div>
                            </div>
                        </div>
                    </div>
                    <div className="intro-right">
                        <div className="intro-image">
                            <img
                                src="https://wsrv.nl/?url=https://www.dropbox.com/scl/fi/w2giupgix5rjmf8k97485/Famissio-252.jpg%3Frlkey=t9adnjqx59rmrid5540asx2cw%26st=41ucuw6p%26raw=1&w=1000&output=webp"
                                alt="Équipe Famissio"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TOUSSAINT - Design contemplatif */}
            <section className="toussaint-section">
                <div className="toussaint-inner">
                    <div className="toussaint-content">
                        <div className="toussaint-tag">La Toussaint</div>
                        <h2 className="toussaint-title">Pourquoi la Mission à la Toussaint ?</h2>

                        <div className="questions-cascade">
                            <div className="question-item">Qui n'est jamais venu à l'église pour l'enterrement d'un proche ou d'une connaissance</div>
                            <div className="question-item">Qui n'a jamais connu la séparation avec un proche</div>
                            <div className="question-item">Qui ne s'est jamais interrogé sur la vie après la mort</div>
                            <div className="question-item">Qui regrette un pardon ou un merci à adresser à celui qui est parti trop vite</div>
                        </div>

                        <p className="toussaint-answer">
                            La Toussaint est une formidable période de l'année, pour entrer en contact avec nos contemporains
                            qui sont tous concernés par cette question de l'au-delà. Ce temps est propice à des cœurs à cœurs,
                            à des rencontres profondes pour guider chacun vers le Seigneur.
                        </p>
                    </div>
                </div>
            </section>

            {/* MISSION SHOWCASE - Grid avec images */}
            <section className="mission-showcase">
                <div className="mission-header">
                    <div className="mission-super">Une Mission Paroissiale</div>
                    <h2 className="mission-title">6 Temps Forts</h2>
                    <p className="mission-subtitle">Cliquez sur chaque activité pour découvrir les détails</p>
                </div>

                <div className="mission-grid">
                    {missionBlocks.map((block, index) => (
                        <div
                            key={block.id}
                            className="mission-card"
                            onClick={() => setActiveMission(block)}
                        >
                            <div className="mission-card-image">
                                <img src={block.image} alt={block.title} />
                            </div>
                            <div className="mission-overlay">
                                <div className="mission-number">0{index + 1}</div>
                                <h3 className="mission-card-title">{block.title}</h3>
                                <div className="mission-preview">
                                    {block.content ? block.content.substring(0, 100) + '...' : 'Découvrez les activités →'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Panel latéral */}
                <div className={`mission-panel ${activeMission ? 'active' : ''}`}>
                    <button className="panel-close" onClick={() => setActiveMission(null)}>×</button>
                    {activeMission && (
                        <>
                            <h3 className="panel-title">{activeMission.title}</h3>
                            {activeMission.content && (
                                <p className="panel-content">{activeMission.content}</p>
                            )}
                            {activeMission.items && (
                                <ul className="panel-list">
                                    {activeMission.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ET APRÈS - Typographie bold */}
            <section className="after-section">
                <div className="after-content">
                    <div className="after-number">+</div>
                    <h2 className="after-title">Et après cette semaine ?</h2>
                    <p className="after-text">
                        Plus les paroissiens sont <span className="after-highlight">mobilisés dans la préparation</span>,
                        plus ils participent aux temps de mission, plus la <span className="after-highlight">communion fraternelle</span> se vit
                        pendant la semaine et plus beau, plus grand sera l'<span className="after-highlight">élan missionnaire</span> au
                        sein de la paroisse après la semaine de mission avec Famissio !
                    </p>
                </div>
            </section>

            {/* STORY - Split asymétrique */}
            <div className="story-split">
                <div className="story-image-side">
                    <img
                        src="https://www.dropbox.com/scl/fi/1yhtq4m69r3azt0bwfhlr/facebook_1607379806212_6741839550715485834.jpg?rlkey=wphw7agzoatzbs9j5lrqucvnb&st=08zbyaix&raw=1"
                        alt="Histoire"
                    />
                </div>
                <div className="story-text-side">
                    <div className="story-label">Notre Histoire</div>
                    <h2 className="story-heading">Comment tout a commencé</h2>
                    <p className="story-paragraph">
                        À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois
                        des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre
                        la mission mais cette fois-ci en restant en France et pour accompagner des curés de paroisses rurales.
                    </p>
                    <p className="story-paragraph">
                        Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle paroisse du
                        père Jean-Pierre Barrière dans la Creuse. Cette semaine les a tous beaucoup nourris et remplis
                        de joie puis confirmés dans cette intuition initiale.
                    </p>
                    <div className="story-highlight">
                        <p>Famissio est alors née. Le père Jean-Pierre en devenait l'aumônier.
                            Monseigneur Bozo acceptait de suivre cette initiative.</p>
                    </div>
                </div>
            </div>

            {/* VIDEO */}
            <section className="video-fullbleed">
                <div className="video-container">
                    <div className="video-intro">
                        <div className="video-tag">Découvrez-nous</div>
                        <h2 className="video-heading">Qui sommes-nous ?</h2>
                    </div>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/bYFu-nvDDHI"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Qui sommes-nous"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
