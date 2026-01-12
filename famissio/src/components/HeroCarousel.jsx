import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            id: 1,
            type: 'formation',
            link: '#formations'
        },
        {
            id: 2,
            type: 'priere',
            link: '#priere'
        },
        {
            id: 3,
            type: 'mission2026',
            link: '#mission2026'
        }
    ];

    useEffect(() => {
        const linkABC = document.createElement("link");
        linkABC.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
        linkABC.rel = "stylesheet";
        document.head.appendChild(linkABC);

        const linkFonts = document.createElement("link");
        linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Inter:wght@400;500;600;700;800&display=swap";
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
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        const slideTimer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, duration);

        return () => {
            clearInterval(progressTimer);
            clearTimeout(slideTimer);
        };
    }, [currentSlide, slides.length, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleSlideClick = (e) => {
        if (e.target.closest('.slide-link, .carousel-arrow, .carousel-nav')) {
            return;
        }
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
                }
                
                body { 
                    font-family: 'Inter', sans-serif; 
                    overflow-x: hidden;
                    width: 100%;
                }

                .famissio-container {
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }

                /* CAROUSEL */
                .carousel-section {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .carousel-wrapper {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                }

                .carousel-track {
                    display: flex;
                    height: 100%;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .carousel-slide {
                    min-width: 100%;
                    height: 100%;
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* --- CONTENEUR DE CONTENU GÉNÉRIQUE --- */
                .slide-content-wrapper {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 900px;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                /* --- SLIDE FORMATION --- */
                .formation-slide {
                    background: linear-gradient(135deg, #fff8f4 0%, #faf7f5 100%);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }

                .formation-slide::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(200, 41, 4, 0.05) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .formation-icon-group {
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                    margin-bottom: 40px;
                }

                .formation-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, var(--flame), var(--ember));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                    box-shadow: 0 10px 30px rgba(200, 41, 4, 0.2);
                    animation: floatIcon 3s ease-in-out infinite;
                }
                .formation-icon:nth-child(2) { animation-delay: -1s; }
                .formation-icon:nth-child(3) { animation-delay: -2s; }

                @keyframes floatIcon {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .formation-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    color: var(--flame);
                    margin-bottom: 20px;
                    line-height: 1.1;
                }

                .formation-subtitle {
                    font-size: clamp(1.2rem, 2vw, 1.6rem);
                    color: #666;
                    margin-bottom: 30px;
                    line-height: 1.6;
                }

                .formation-highlight {
                    background: rgba(200, 41, 4, 0.05);
                    border-left: 4px solid var(--ember);
                    padding: 20px 30px;
                    border-radius: 10px;
                    margin-bottom: 40px;
                }

                /* --- SLIDE PRIÈRE --- */
                .priere-slide {
                    background-image: url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&q=80');
                    background-size: cover;
                    background-position: center;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .priere-slide::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(26, 26, 26, 0.85), rgba(45, 27, 61, 0.75));
                }

                .priere-icon {
                    width: 100px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    color: white;
                    margin: 0 auto 40px;
                    backdrop-filter: blur(10px);
                }

                .priere-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    color: white;
                    margin-bottom: 30px;
                    line-height: 1.1;
                }

                .priere-text {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    line-height: 1.9;
                    color: rgba(255, 255, 255, 0.9);
                    font-style: italic;
                    margin-bottom: 20px;
                    padding: 0 20px;
                }

                .priere-author {
                    font-size: 1rem;
                    color: var(--coral);
                    font-weight: 600;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 40px;
                }

                /* --- SLIDE MISSION 2026 (NOUVEAU DESIGN: FOND DÉGRADÉ + FORMES ABSTRAITES) --- */
                .mission2026-slide {
                    /* Fond dégradé riche et chaud, différent du orange vif de base */
                    background: linear-gradient(135deg, #e65c00 0%, #991f03 100%);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    color: white;
                }

                /* Forme abstraite 1 (Haut Gauche) */
                .mission2026-slide::before {
                    content: '';
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; /* Forme organique */
                    transform: rotate(-15deg);
                    pointer-events: none;
                }

                /* Forme abstraite 2 (Bas Droite) */
                .mission2026-slide::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    right: -10%;
                    width: 800px;
                    height: 800px;
                    background: radial-gradient(circle, rgba(255, 200, 0, 0.15) 0%, transparent 60%);
                    border-radius: 60% 40% 30% 70% / 50% 30% 50% 40%; /* Autre forme organique */
                    transform: rotate(20deg);
                    pointer-events: none;
                }

                .mission-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 12px 30px;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .mission-year {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(6rem, 15vw, 10rem);
                    font-weight: 900;
                    color: white;
                    line-height: 1;
                    margin-bottom: 10px;
                    text-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                }

                .mission-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    color: white;
                    margin-bottom: 30px;
                    line-height: 1.2;
                }

                .mission-dioceses {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 30px;
                }

                .diocese-tag {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(5px);
                    color: white;
                    padding: 10px 25px;
                    border-radius: 30px;
                    font-size: 1rem;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .mission-date {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
                    font-weight: 700;
                    color: white;
                    letter-spacing: 3px;
                    margin-bottom: 40px;
                }

                /* --- BOUTON CTA (INTÉGRÉ AU FLUX) --- */
                .slide-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    background: white;
                    color: var(--flame);
                    padding: 18px 45px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    margin-top: 10px; 
                    z-index: 10;
                }

                .slide-link:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
                    gap: 25px;
                }

                /* NAVIGATION (BARRES) */
                .carousel-nav {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 20;
                }

                .nav-dot {
                    width: 60px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .formation-slide + * .nav-dot { background: rgba(200, 41, 4, 0.3); }
                .priere-slide + * .nav-dot, 
                .mission2026-slide + * .nav-dot { background: rgba(255, 255, 255, 0.3); }

                .carousel-nav .nav-dot {
                    background: var(--nav-color, rgba(255, 255, 255, 0.3));
                }

                .nav-dot:hover { opacity: 0.8; }

                .nav-dot-fill {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0;
                    background: var(--nav-fill-color, white);
                    transition: width 0.1s linear;
                }

                .nav-dot.active .nav-dot-fill { width: var(--progress); }

                /* FLÈCHES */
                .carousel-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    color: white;
                    transition: all 0.3s ease;
                    z-index: 20;
                }

                .formation-slide .carousel-arrow {
                    background: rgba(200, 41, 4, 0.1);
                    color: var(--flame);
                    border-color: rgba(200, 41, 4, 0.2);
                }

                .carousel-arrow:hover {
                    background: white;
                    color: var(--flame);
                    transform: translateY(-50%) scale(1.1);
                }

                .carousel-arrow.prev { left: 20px; }
                .carousel-arrow.next { right: 20px; }

                /* RESPONSIVE */
                @media (max-width: 768px) {
                    .slide-content-wrapper {
                        padding: 20px;
                        width: 90%;
                    }
                    .formation-icon { width: 60px; height: 60px; font-size: 1.5rem; }
                    .slide-link { padding: 15px 35px; font-size: 1rem; }
                    .carousel-nav { bottom: 20px; }
                    .carousel-arrow { display: none; }
                }
            `}</style>

            <section className="carousel-section">
                <div className="carousel-wrapper">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="carousel-slide"
                                onClick={handleSlideClick}
                            >
                                {slide.type === 'formation' && (
                                    <div className="formation-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="formation-icon-group">
                                                <div className="formation-icon"><i className="fas fa-book-open"></i></div>
                                                <div className="formation-icon"><i className="fas fa-hands-praying"></i></div>
                                                <div className="formation-icon"><i className="fas fa-heart"></i></div>
                                            </div>
                                            <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                            <p className="formation-subtitle">
                                                Des formations essentielles pour nourrir votre foi et vous équiper.
                                            </p>
                                            <div className="formation-highlight">
                                                <p><strong>18 formations</strong> + <strong>FAQ complète</strong></p>
                                            </div>
                                            <a href={slide.link} className="slide-link">
                                                Découvrir
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {slide.type === 'priere' && (
                                    <div className="priere-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="priere-icon">
                                                <i className="fas fa-dove"></i>
                                            </div>
                                            <h2 className="priere-title">La Prière du Famissionnaire</h2>
                                            <p className="priere-text">
                                                "Que l'Esprit nous insuffle l'audace et l'humilité,<br />
                                                La foi, la joie et l'amour..."
                                            </p>
                                            <div className="priere-author">Refrain de Famissio</div>
                                            <a href={slide.link} className="slide-link">
                                                Prier maintenant
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="mission-badge">Prochaine Mission</div>
                                            <div className="mission-year">2026</div>
                                            <h2 className="mission-title">Mission Paroissiale</h2>
                                            <div className="mission-dioceses">
                                                <div className="diocese-tag">La Rochelle</div>
                                                <div className="diocese-tag">Angoulême</div>
                                                <div className="diocese-tag">Poitiers</div>
                                            </div>
                                            <div className="mission-date">24 — 30 OCTOBRE</div>
                                            <a href={slide.link} className="slide-link">
                                                Rejoindre
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className="carousel-arrow prev" onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="carousel-arrow next" onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    <div
                        className="carousel-nav"
                        style={{
                            '--nav-color': currentSlide === 0 ? 'rgba(200, 41, 4, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                            '--nav-fill-color': currentSlide === 0 ? 'var(--flame)' : 'white'
                        }}
                    >
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                style={{ '--progress': currentSlide === index ? `${progress}%` : '0%' }}
                            >
                                <div className="nav-dot-fill"></div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroCarousel;
