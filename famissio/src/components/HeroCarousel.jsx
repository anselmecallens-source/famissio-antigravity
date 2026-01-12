import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        { id: 1, type: 'formation', link: '#formations' },
        { id: 2, type: 'priere', link: '#priere' },
        { id: 3, type: 'mission2026', link: '#mission2026' }
    ];

    useEffect(() => {
        const linkABC = document.createElement("link");
        linkABC.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
        linkABC.rel = "stylesheet";
        document.head.appendChild(linkABC);

        const linkFonts = document.createElement("link");
        linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@300;400;500;600&display=swap";
        linkFonts.rel = "stylesheet";
        document.head.appendChild(linkFonts);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        setProgress(0);
        const duration = 10000;
        const interval = 50;
        const increment = (interval / duration) * 100;
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) { clearInterval(progressTimer); return 100; }
                return prev + increment;
            });
        }, interval);
        const slideTimer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, duration);
        return () => { clearInterval(progressTimer); clearTimeout(slideTimer); };
    }, [currentSlide, slides.length, isAutoPlaying]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);
    const handleSlideClick = (e) => {
        if (e.target.closest('.slide-link, .carousel-arrow, .carousel-nav')) return;
        setIsAutoPlaying(prev => !prev);
    };

    return (
        <div className="famissio-container">
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                :root {
                    --flame: #c82904;
                    --ember: #f46a07;
                    --coral: #ff8b6b;
                    --deep-purple: #240b36;
                    --dark-bg: #1a0b2e;
                }
                body { font-family: 'Inter', sans-serif; overflow-x: hidden; width: 100%; }
                .famissio-container { width: 100%; height: 100vh; overflow: hidden; }

                /* CAROUSEL STRUCTURE */
                .carousel-section { position: relative; width: 100%; height: 100vh; }
                .carousel-wrapper { position: relative; height: 100%; width: 100%; overflow: hidden; }
                .carousel-track { display: flex; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
                
                .carousel-slide {
                    min-width: 100%; height: 100%; position: relative; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                }

                /* --- CONTENEUR PRINCIPAL (Gère l'espacement) --- */
                .slide-content-wrapper {
                    position: relative; z-index: 2; text-align: center; max-width: 1000px; width: 90%;
                    display: flex; flex-direction: column; align-items: center;
                    /* PADDING IMPORTANT EN BAS POUR ÉVITER LE CHEVAUCHEMENT AVEC LA NAV */
                    padding-bottom: 100px; 
                }

                /* --- SLIDE 1: FORMATION --- */
                .formation-slide {
                    background: linear-gradient(135deg, #fff8f4 0%, #fff0e6 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                /* Forme décorative douce */
                .formation-slide::before {
                    content: ''; position: absolute; top: -30%; left: -10%; width: 80vh; height: 80vh;
                    background: radial-gradient(circle, rgba(200, 41, 4, 0.04) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .formation-header { margin-bottom: 4vh; } /* Groupe Titre/Sous-titre */
                
                .formation-icon-group {
                    display: flex; gap: 30px; justify-content: center; margin-bottom: 30px;
                    opacity: 0.9;
                }
                .formation-icon { font-size: 2rem; color: var(--flame); } /* Simple et propre */

                .formation-title {
                    font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 800; color: var(--flame); line-height: 1.1; margin-bottom: 15px;
                }
                .formation-subtitle {
                    font-size: clamp(1.1rem, 2vw, 1.4rem); color: #555; max-width: 700px; margin: 0 auto; line-height: 1.6; font-weight: 300;
                }
                .formation-tags {
                    display: flex; gap: 15px; justify-content: center; margin-top: 30px; flex-wrap: wrap;
                }
                .tag-badge {
                    background: rgba(200, 41, 4, 0.08); color: var(--flame); padding: 8px 20px;
                    border-radius: 20px; font-weight: 600; font-size: 0.9rem;
                }

                /* --- SLIDE 2: PRIÈRE (Style épuré et noble) --- */
                .priere-slide {
                    background: radial-gradient(circle at center, #3a1c52 0%, #150821 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                .priere-icon-top {
                    font-size: 2.5rem; color: rgba(255,255,255,0.8); margin-bottom: 30px;
                }
                .priere-title {
                    font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 5rem);
                    font-weight: 700; color: white; margin-bottom: 30px;
                }
                .priere-quote {
                    font-family: 'Playfair Display', serif; font-style: italic;
                    font-size: clamp(1.3rem, 3vw, 1.8rem); line-height: 1.6; color: rgba(255, 255, 255, 0.9);
                    max-width: 800px; margin-bottom: 20px;
                }
                .priere-ref {
                    font-size: 0.9rem; letter-spacing: 3px; color: var(--coral); text-transform: uppercase; margin-bottom: 50px;
                }

                /* --- SLIDE 3: MISSION 2026 (Le fameux fond losange en CSS pur) --- */
                .mission2026-slide {
                    background-color: #e65c00; /* Fallback */
                    /* Motif losange créé avec des gradients CSS */
                    background-image: 
                        linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent 100%),
                        linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent 100%);
                    background-size: 60px 60px; /* Taille des losanges */
                    
                    /* Ajout d'un vignetage pour la profondeur */
                    box-shadow: inset 0 0 150px rgba(0,0,0,0.3);
                    
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; color: white;
                }

                /* Container pour l'effet de superposition "2026" */
                .mission-overlap-container {
                    position: relative; height: 250px; width: 100%; display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px;
                }

                .mission-year-bg {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(12rem, 30vw, 22rem); /* Gigantesque */
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.15); /* Transparence subtile */
                    position: absolute;
                    top: 50%; left: 50%; transform: translate(-50%, -50%);
                    z-index: 1;
                    user-select: none;
                    white-space: nowrap;
                }

                .mission-main-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 700;
                    color: white;
                    position: relative; z-index: 2; /* Devant le 2026 */
                    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    margin: 0;
                }

                .mission-badge {
                    background: white; color: var(--flame); padding: 8px 25px; border-radius: 50px;
                    font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;
                    margin-bottom: 20px; display: inline-block; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                .mission-info-row {
                    display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-top: 10px;
                }
                .diocese-pill {
                    background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4);
                    padding: 8px 20px; border-radius: 30px; color: white; font-weight: 600; font-size: 0.95rem;
                }

                /* --- BOUTON CTA (Design Unifié) --- */
                .slide-link {
                    margin-top: 50px; /* Grand espace avant le bouton pour éviter l'effet empilé */
                    display: inline-flex; align-items: center; gap: 12px;
                    padding: 18px 45px; border-radius: 50px;
                    text-decoration: none; font-weight: 700; font-size: 1.1rem;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                
                /* Bouton pour slide clair */
                .formation-slide .slide-link {
                    background: var(--flame); color: white; box-shadow: 0 10px 30px rgba(200, 41, 4, 0.3);
                }
                /* Bouton pour slides foncés */
                .priere-slide .slide-link, .mission2026-slide .slide-link {
                    background: white; color: var(--flame); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .slide-link:hover { transform: translateY(-3px); gap: 18px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); }

                /* --- NAVIGATION (Barres) --- */
                .carousel-nav {
                    position: absolute; bottom: 40px; /* Assez haut */
                    left: 50%; transform: translateX(-50%);
                    display: flex; gap: 15px; z-index: 20;
                }
                .nav-bar {
                    width: 50px; height: 4px; border-radius: 4px; cursor: pointer; position: relative; overflow: hidden;
                    background: rgba(0,0,0,0.1); transition: width 0.3s ease;
                }
                /* Ajustement couleur nav selon fond */
                .priere-slide + * .nav-bar, .mission2026-slide + * .nav-bar { background: rgba(255,255,255,0.3); }
                
                .nav-bar-fill {
                    position: absolute; left: 0; top: 0; height: 100%; width: 0; transition: width 0.1s linear;
                }
                .formation-slide + * .nav-bar .nav-bar-fill { background: var(--flame); }
                .priere-slide + * .nav-bar .nav-bar-fill, .mission2026-slide + * .nav-bar .nav-bar-fill { background: white; }
                
                .nav-bar.active { width: 70px; } /* La barre active est plus longue */
                .nav-bar.active .nav-bar-fill { width: var(--progress); }

                /* --- FLÈCHES --- */
                .carousel-arrow {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    width: 50px; height: 50px; border-radius: 50%; border: none; cursor: pointer;
                    display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
                    transition: all 0.3s ease; z-index: 20;
                }
                /* Style flèches slide clair */
                .formation-slide .carousel-arrow { background: white; color: var(--flame); box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
                /* Style flèches slide foncé */
                .priere-slide .carousel-arrow, .mission2026-slide .carousel-arrow { background: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(5px); }

                .carousel-arrow:hover { transform: translateY(-50%) scale(1.1); background: white; color: var(--flame); }
                .carousel-arrow.prev { left: 30px; }
                .carousel-arrow.next { right: 30px; }

                @media (max-width: 768px) {
                    .slide-content-wrapper { width: 95%; padding-bottom: 120px; } /* Encore plus de marge sur mobile */
                    .mission-year-bg { font-size: 10rem; }
                    .formation-icon-group { gap: 20px; margin-bottom: 20px; }
                    .formation-icon { font-size: 1.5rem; }
                    .carousel-arrow { display: none; } /* On cache les flèches sur mobile */
                }
            `}</style>

            <section className="carousel-section">
                <div className="carousel-wrapper">
                    <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="carousel-slide" onClick={handleSlideClick}>

                                {/* SLIDE 1: FORMATION */}
                                {slide.type === 'formation' && (
                                    <div className="formation-slide">
                                        <div className="slide-content-wrapper">
                                            {/* Groupe icônes discret */}
                                            <div className="formation-icon-group">
                                                <i className="fas fa-book-open formation-icon"></i>
                                                <i className="fas fa-heart formation-icon"></i>
                                            </div>

                                            {/* Groupe texte unifié */}
                                            <div className="formation-header">
                                                <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                                <p className="formation-subtitle">
                                                    Des parcours conçus pour nourrir votre foi et vous donner les clés de l'évangélisation.
                                                </p>
                                                <div className="formation-tags">
                                                    <span className="tag-badge">18 Formations</span>
                                                    <span className="tag-badge">FAQ Mission</span>
                                                </div>
                                            </div>

                                            {/* Bouton bien séparé */}
                                            <a href={slide.link} className="slide-link">
                                                Découvrir le catalogue <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {/* SLIDE 2: PRIÈRE */}
                                {slide.type === 'priere' && (
                                    <div className="priere-slide">
                                        <div className="slide-content-wrapper">
                                            <i className="fas fa-dove priere-icon-top"></i>
                                            <h2 className="priere-title">La Prière du Famissionnaire</h2>
                                            <p className="priere-quote">
                                                "Que l'Esprit nous insuffle l'audace et l'humilité,<br />
                                                La foi, la joie et l'amour..."
                                            </p>
                                            <div className="priere-ref">Refrain de Famissio</div>

                                            <a href={slide.link} className="slide-link">
                                                Prier maintenant <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {/* SLIDE 3: MISSION 2026 */}
                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="mission-badge">Prochaine Mission</div>

                                            {/* Superposition stylée */}
                                            <div className="mission-overlap-container">
                                                <div className="mission-year-bg">2026</div>
                                                <h2 className="mission-main-title">Mission Paroissiale</h2>
                                            </div>

                                            <div className="mission-info-row">
                                                <span className="diocese-pill">La Rochelle</span>
                                                <span className="diocese-pill">Angoulême</span>
                                                <span className="diocese-pill">Poitiers</span>
                                            </div>

                                            <a href={slide.link} className="slide-link">
                                                Rejoindre l'aventure <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className="carousel-arrow prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button className="carousel-arrow next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>

                    <div className="carousel-nav">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-bar ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                <div className="nav-bar-fill"></div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroCarousel;
