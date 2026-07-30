import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    // On duplique les slides pour l'effet infini : [Last, 1, 2, 3, First]
    const originalSlides = [
        { id: 1, type: 'formation', link: '/formation' },
        { id: 2, type: 'priere', link: '/priere' },
        { id: 3, type: 'mission2026', link: '/missions' }
    ];
    // Clone du dernier au début, et du premier à la fin
    const slides = [
        originalSlides[originalSlides.length - 1],
        ...originalSlides,
        originalSlides[0]
    ];

    const [currentSlide, setCurrentSlide] = useState(1); // On commence à 1 (le vrai 1er)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(true); // Pour désactiver la transition lors du saut

    // Swipe / Drag state
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const linkABC = document.createElement("link");
        linkABC.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
        linkABC.rel = "stylesheet";
        document.head.appendChild(linkABC);

        const linkFonts = document.createElement("link");
        linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800;900&family=Inter:wght@300;400;500;600&display=swap";
        linkFonts.rel = "stylesheet";
        document.head.appendChild(linkFonts);
    }, []);

    // GESTION DU SAUT INFINI (Transition End)
    useEffect(() => {
        if (!isTransitioning) return; // Si on vient de faire un saut instantané, ne rien faire

        // Si on est sur le clone de la fin (Index 4), on saute au vrai début (Index 1)
        if (currentSlide === slides.length - 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(1);
            }, 800); // 800ms = durée transition CSS
            return () => clearTimeout(timer);
        }

        // Si on est sur le clone du début (Index 0), on saute à la vraie fin (Index 3)
        if (currentSlide === 0) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(originalSlides.length);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentSlide, isTransitioning, slides.length, originalSlides.length]);

    // Réactiver la transition après un saut instantané
    useEffect(() => {
        if (!isTransitioning) {
            // Petit délai pour laisser le temps au DOM de se mettre à jour sans transition
            const timer = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);


    // AUTO-PLAY 8 SECONDES
    useEffect(() => {
        if (!isAutoPlaying) return;
        const duration = 8000;
        const slideTimer = setTimeout(() => {
            nextSlide();
        }, duration);
        return () => clearTimeout(slideTimer);
    }, [currentSlide, isAutoPlaying]); // Dépend de currentSlide pour relancer

    const nextSlide = () => {
        if (currentSlide >= slides.length - 1) return; // Sécurité
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide <= 0) return; // Sécurité
        setIsTransitioning(true);
        setCurrentSlide(prev => prev - 1);
    };

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setCurrentSlide(index + 1); // +1 car index 0 est le clone
    };

    // --- LOGIQUE SWIPE / DRAG ---
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
    };
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) { nextSlide(); setIsAutoPlaying(true); }
        if (isRightSwipe) { prevSlide(); setIsAutoPlaying(true); }
        setIsDragging(false);
    };

    const onMouseDown = (e) => { setTouchEnd(null); setTouchStart(e.clientX); setIsDragging(true); };
    const onMouseMove = (e) => { if (isDragging) setTouchEnd(e.clientX); };
    const onMouseUp = () => { if (!isDragging) return; onTouchEnd(); setIsDragging(false); };

    const handleSlideClick = (e) => {
        if (isDragging) return;
        if (touchStart && touchEnd && Math.abs(touchStart - touchEnd) > 10) return;
        if (e.target.closest('a, button, .carousel-nav')) return;
        setIsAutoPlaying(prev => !prev);
    };

    // Visual Index (pour les dots) : 0, 1, 2
    // Si currentSlide = 0 -> c'est le clone de 3 -> index visu 2
    // Si currentSlide = 4 -> c'est le clone de 1 -> index visu 0
    // Sinon -> currentSlide - 1
    let visualIndex = currentSlide - 1;
    if (currentSlide === 0) visualIndex = originalSlides.length - 1;
    if (currentSlide === slides.length - 1) visualIndex = 0;

    // Détermination de la couleur de la nav
    const currentSlideData = slides[currentSlide];
    const isDarkNav = currentSlideData.type === 'formation';

    return (
        <div className="famissio-container">
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                :root {
                    --flame: #c82904;
                    --deep-red: #8a1c02;
                    --ember: #f46a07;
                }
                body { font-family: 'Inter', sans-serif; width: 100%; }
                .famissio-container { width: 100%; height: 75vh; min-height: 550px; overflow: hidden; margin: 0; padding: 0 !important; }

                /* CAROUSEL */
                .carousel-section { position: relative; width: 100%; height: 75vh; min-height: 550px; padding: 0 5% !important; margin: 0 !important; }
                .carousel-wrapper { position: relative; height: 100%; width: 100%; overflow: hidden; user-select: none; border-radius: 20px; }
                
                .carousel-track {
                    display: flex; height: 100%;
                    cursor: grab;
                    /* La transition est gérée inline par React */
                }
                .carousel-track:active { cursor: grabbing; }
                
                .carousel-slide {
                    min-width: 100%; height: 100%; position: relative;
                    display: flex; align-items: center; justify-content: center;
                }

                /* --- CONTAINER PRINCIPAL --- */
                .slide-content-wrapper {
                    position: relative; z-index: 2; text-align: center; max-width: 1200px; width: 90%;
                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                    /* Padding équilibré : 40px haut, 85px bas */
                    padding-top: 40px;
                    padding-bottom: 85px;
                    pointer-events: none; /* Laisse passer le click vers le container pour le drag */
                }
                .slide-content-wrapper > * { pointer-events: auto; } /* Réactive les clics sur les enfants */

                /* --- SLIDE 1: FORMATION --- */
                .formation-slide {
                    background: linear-gradient(135deg, #fff8f4 0%, #fff0e6 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                .formation-slide::before {
                    content: ''; position: absolute; top: -30%; right: -10%; width: 60vh; height: 60vh;
                    background: radial-gradient(circle, rgba(200, 41, 4, 0.05) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }
                
                .formation-icon-group { display: flex; gap: 20px; justify-content: center; margin-bottom: 15px; color: var(--flame); font-size: 1.8rem; }
                
                .formation-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 4vw, 3.6rem);
                    font-weight: 800; color: var(--flame); margin-bottom: 14px; white-space: nowrap;
                }
                .formation-subtitle {
                    font-size: clamp(1.05rem, 1.4vw, 1.25rem); color: #555; max-width: 750px; margin: 0 auto 18px; font-weight: 300;
                }
                
                .formation-highlight {
                    background: rgba(200, 41, 4, 0.08); color: var(--flame); padding: 7px 22px;
                    border-radius: 20px; font-weight: 700; font-size: 0.9rem; margin-bottom: 22px;
                    border: 1px solid rgba(200, 41, 4, 0.1);
                }

                .slide-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 14px 40px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1rem;
                    transition: all 0.3s ease; z-index: 10;
                    background: var(--flame); color: white; box-shadow: 0 10px 25px rgba(200, 41, 4, 0.3);
                }
                .slide-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(200, 41, 4, 0.4); }

                /* --- SLIDE 2: PRIÈRE --- */
                .priere-slide {
                    background: radial-gradient(circle at center, #2e1042 0%, #150821 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                .priere-icon-top { font-size: 2.4rem; color: rgba(255, 255, 255, 0.8); margin-bottom: 14px; }
                
                .priere-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 4vw, 3.6rem);
                    font-weight: 700; color: white; margin-bottom: 18px; white-space: nowrap;
                }
                .priere-quote {
                    font-family: 'Playfair Display', serif; font-style: italic;
                    font-size: clamp(1.2rem, 2.3vw, 1.55rem); line-height: 1.55; color: rgba(255, 255, 255, 0.9);
                    max-width: 800px; margin-bottom: 18px;
                }
                
                .priere-infos {
                    display: flex; gap: 20px; color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;
                    text-transform: uppercase; letter-spacing: 1px; margin-bottom: 22px; font-weight: 500;
                }
                .priere-infos span { display: flex; align-items: center; gap: 8px; }

                /* --- SLIDE 3: MISSION 2026 --- */
                .mission2026-slide {
                    background: linear-gradient(135deg, var(--flame), var(--deep-red));
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; color: white;
                }
                .mission2026-slide::before {
                    content: ''; position: absolute; top: -20%; left: -10%; width: 50vw; height: 50vw;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
                    border-radius: 50%; pointer-events: none;
                }
                .mission2026-slide::after {
                    content: ''; position: absolute; bottom: -20%; right: -10%; width: 60vh; height: 60vh;
                    background: radial-gradient(circle, rgba(255, 200, 0, 0.15) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .mission-overlap-container {
                    position: relative; height: 165px; width: 100%; display: flex; align-items: center; justify-content: center;
                    margin-bottom: 18px;
                }
                .mission-year-bg {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(7rem, 13vw, 11rem);
                    font-weight: 900; color: rgba(255, 255, 255, 0.12);
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    z-index: 1; user-select: none;
                }
                .mission-main-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 4.2vw, 3.8rem);
                    font-weight: 700; color: white; position: relative; z-index: 2;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); white-space: nowrap;
                }

                .mission-dioceses {
                    display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; z-index: 2;
                }
                .diocese-pill {
                    background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 7px 20px; border-radius: 30px; color: white; font-weight: 600; font-size: 0.9rem;
                    backdrop-filter: blur(5px);
                }
                
                .mission-btn {
                    background: white; color: var(--flame); padding: 14px 40px; border-radius: 50px;
                    text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 10px;
                    transition: all 0.3s ease; z-index: 10; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
                .mission-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); }

                /* --- NAVIGATION --- */
                .carousel-nav {
                    position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 20;
                }
                .nav-bar {
                    width: 40px; height: 4px; border-radius: 4px; cursor: pointer; position: relative; overflow: hidden;
                    background: rgba(255, 255, 255, 0.3); transition: all 0.3s ease; border: none;
                }

                /* COULEURS NAVIGATION */
                .nav-theme-dark .nav-bar { background: rgba(0, 0, 0, 0.2); }
                .nav-theme-light .nav-bar { background: rgba(255, 255, 255, 0.3); }

                .nav-bar-fill {
                    position: absolute; left: 0; top: 0; height: 100%; width: 0;
                }
                .nav-theme-dark .nav-bar-fill { background: var(--flame); }
                .nav-theme-light .nav-bar-fill { background: white; }
                
                .nav-bar.active { width: 60px; }

                /* ANIMATION */
                @keyframes progressFill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }

                .nav-bar.active .nav-bar-fill {
                    animation: progressFill 8s linear forwards;
                }

                /* PAUSE SI NON-AUTOPLAY */
                .carousel-wrapper.paused .nav-bar.active .nav-bar-fill {
                    animation-play-state: paused;
                }

                .carousel-arrow {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    width: 40px; height: 40px; border-radius: 0; border: none; cursor: pointer;
                    display: flex; align-items: center; justify-content: center; font-size: 2.2rem;
                    transition: all 0.3s ease; z-index: 20;
                    background: transparent !important;
                    color: white !important;
                    box-shadow: none !important;
                    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4));
                    padding: 5px;
                }
                .carousel-arrow:hover { transform: translateY(-50%) scale(1.25); background: transparent !important; color: white !important; opacity: 0.85; }
                .carousel-arrow.prev { left: 20px; }
                .carousel-arrow.next { right: 20px; }

                @media(max-width: 768px) {
                    /* Carousel: 75vh, FULL WIDTH, minimal padding */
                    .famissio-container, .carousel-section {
                        height: 75vh !important;
                        min-height: 400px !important;
                        width: 100vw !important; /* Full viewport width */
                        margin-left: calc(-50vw + 50%) !important; /* Break out of container */
                        padding: 0 !important;
                    }

                    .slide-content-wrapper { 
                        padding-bottom: 30px !important;
                        padding-top: 10px !important; /* Minimal top space */
                    }
                    .carousel-arrow { display: none; }
                    .mission-year-bg { font-size: 8rem; }
                    .formation-title, .priere-title, .mission-main-title { white-space: normal; }
                    
                    /* Fix Prayer Info Overflow */
                    .priere-infos {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 10px;
                        font-size: 0.8rem;
                    }
                    .carousel-nav { bottom: 15px; }
                }
            `}</style>

            <section className="carousel-section">
                <div
                    className={`carousel-wrapper ${!isAutoPlaying ? 'paused' : ''}`}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                >
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                        }}
                    >
                        {slides.map((slide, index) => (
                            // Use index in key because we have duplicate IDs (clones)
                            <div key={`${slide.id}-${index}`} className="carousel-slide" onClick={handleSlideClick}>

                                {/* SLIDE 1: FORMATION */}
                                {slide.type === 'formation' && (
                                    <div className="formation-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="formation-icon-group">
                                                <i className="fas fa-book-open"></i>
                                                <i className="fas fa-heart"></i>
                                            </div>
                                            <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                            <p className="formation-subtitle">
                                                Des parcours conçus pour nourrir votre foi et vous donner les clés de l'évangélisation.
                                            </p>
                                            <div className="formation-highlight">
                                                18 Formations + FAQ Mission
                                            </div>
                                            <Link to={slide.link} className="slide-cta-btn">
                                                Découvrir le catalogue <i className="fas fa-arrow-right"></i>
                                            </Link>
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
                                            <div className="priere-infos">
                                                <span><i className="fas fa-music"></i> Audio</span>
                                                <span>•</span>
                                                <span><i className="fas fa-file-lines"></i> Paroles</span>
                                                <span>•</span>
                                                <span><i className="fas fa-music"></i> Partition</span>
                                            </div>
                                            <Link to={slide.link} className="slide-cta-btn">
                                                Prier maintenant <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* SLIDE 3: MISSION 2026 */}
                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="mission-overlap-container">
                                                <div className="mission-year-bg">2026</div>
                                                <h2 className="mission-main-title">Mission Paroissiale</h2>
                                            </div>
                                            <div className="mission-dioceses">
                                                <span className="diocese-pill">La Rochelle</span>
                                                <span className="diocese-pill">Angoulême</span>
                                                <span className="diocese-pill">Tulle</span>
                                            </div>
                                            <Link to={slide.link} className="mission-btn">
                                                Rejoindre l'aventure <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className="carousel-arrow prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button className="carousel-arrow next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>

                    <div className={`carousel-nav ${isDarkNav ? 'nav-theme-dark' : 'nav-theme-light'}`}>
                        {originalSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-bar ${visualIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                <div className="nav-bar-fill" key={visualIndex === index ? 'active' : 'inactive'}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroCarousel;
