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
        // Ne pas arrêter si on clique sur les boutons/flèches/barres
        if (e.target.closest('.slide-cta, .carousel-arrow, .carousel-nav')) {
            return;
        }
        setIsAutoPlaying(false);
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
                }

                /* CAROUSEL */
                .carousel-section {
                    position: relative;
                    width: 100%;
                    height: 80vh;
                    min-height: 600px;
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
                }

                /* SLIDE FORMATION */
                .formation-slide {
                    background: linear-gradient(135deg, #fff8f4 0%, #faf7f5 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 80px;
                    padding-bottom: 200px;
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
                }

                .formation-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 900px;
                }

                .formation-icon-group {
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                    margin-bottom: 50px;
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
                    margin-bottom: 30px;
                    line-height: 1.1;
                }

                .formation-subtitle {
                    font-size: clamp(1.2rem, 2vw, 1.6rem);
                    color: #666;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }

                .formation-highlight {
                    background: rgba(200, 41, 4, 0.05);
                    border-left: 4px solid var(--ember);
                    padding: 20px 30px;
                    border-radius: 10px;
                    margin-top: 30px;
                }

                .formation-highlight p {
                    font-size: 1.1rem;
                    color: #555;
                    line-height: 1.7;
                    margin: 0;
                }

                /* SLIDE PRIÈRE */
                .priere-slide {
                    background-image: url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&q=80');
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 80px;
                    padding-bottom: 200px;
                    position: relative;
                }

                .priere-slide::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(26, 26, 26, 0.85), rgba(45, 27, 61, 0.75));
                }

                .priere-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 800px;
                    color: white;
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
                    margin-bottom: 40px;
                    line-height: 1.1;
                }

                .priere-text {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    line-height: 1.9;
                    color: rgba(255, 255, 255, 0.9);
                    font-style: italic;
                    margin-bottom: 30px;
                    padding: 0 20px;
                }

                .priere-author {
                    font-size: 1rem;
                    color: var(--coral);
                    font-weight: 600;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                /* SLIDE MISSION 2026 */
                .mission2026-slide {
                    /* NOUVEAU FOND POUR ÉVITER LE DOUBLON */
                    background-image: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80');
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 80px;
                    padding-bottom: 200px;
                    position: relative;
                    overflow: hidden;
                }

                .mission2026-slide::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(200, 41, 4, 0.88), rgba(244, 106, 7, 0.82));
                }

                .mission2026-slide::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23fff' opacity='0.05'/%3E%3C/svg%3E");
                }

                .mission2026-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 900px;
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
                    margin-bottom: 30px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .mission-year {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(6rem, 15vw, 10rem);
                    font-weight: 900;
                    color: white;
                    line-height: 1;
                    margin-bottom: 20px;
                    text-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                }

                .mission-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    color: white;
                    margin-bottom: 40px;
                    line-height: 1.2;
                }

                .mission-dioceses {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 40px;
                }

                .diocese-tag {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 12px 25px;
                    border-radius: 30px;
                    font-size: 1rem;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .mission-date {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
                    font-weight: 700;
                    color: white;
                    letter-spacing: 3px;
                    margin-bottom: 50px;
                }

                /* BOUTON CTA */
                .slide-cta {
                    position: absolute;
                    bottom: 150px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }

                .slide-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    background: white;
                    color: var(--flame);
                    padding: 20px 50px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1.2rem;
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                }

                .slide-link:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
                    gap: 25px;
                }

                /* NAVIGATION */
                .carousel-nav {
                    position: absolute;
                    bottom: 50px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }

                .nav-dot {
                    width: 70px;
                    height: 4px;
                    background: rgba(200, 41, 4, 0.3);
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                /* Couleurs adaptées selon le slide */
                .formation-slide + * .nav-dot {
                    background: rgba(200, 41, 4, 0.3);
                }

                .priere-slide + * .nav-dot,
                .mission2026-slide + * .nav-dot {
                    background: rgba(255, 255, 255, 0.3);
                }

                .carousel-nav .nav-dot {
                    background: var(--nav-color, rgba(255, 255, 255, 0.3));
                }

                .nav-dot:hover {
                    opacity: 0.8;
                }

                .nav-dot-fill {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0;
                    background: var(--nav-fill-color, white);
                    transition: width 0.1s linear;
                }

                .nav-dot.active .nav-dot-fill {
                    width: var(--progress);
                }

                .carousel-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    color: var(--flame);
                    transition: all 0.3s ease;
                    z-index: 10;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .carousel-arrow:hover {
                    background: white;
                    transform: translateY(-50%) scale(1.1);
                }

                .carousel-arrow.prev { left: 40px; }
                .carousel-arrow.next { right: 40px; }

                /* RESPONSIVE */
                @media (max-width: 768px) {
                    .carousel-section { height: 70vh; min-height: 500px; }
                    .formation-slide, .priere-slide, .mission2026-slide { 
                        padding: 40px 20px;
                        padding-bottom: 180px;
                    }
                    .formation-icon-group { gap: 20px; }
                    .formation-icon { width: 60px; height: 60px; font-size: 1.5rem; }
                    .mission-dioceses { flex-direction: column; gap: 10px; }
                    .slide-cta { bottom: 130px; }
                    .slide-link { 
                        padding: 16px 35px; 
                        font-size: 1rem; 
                    }
                    .carousel-arrow {
                        width: 50px;
                        height: 50px;
                        font-size: 1.1rem;
                    }
                    .carousel-arrow.prev { left: 20px; }
                    .carousel-arrow.next { right: 20px; }
                    .nav-dot { width: 50px; }
                    .carousel-nav { bottom: 40px; }
                }
            `}</style>

            {/* CAROUSEL (Hero retiré) */}
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
                                        <div className="formation-content">
                                            <div className="formation-icon-group">
                                                <div className="formation-icon">
                                                    <i className="fas fa-book-open"></i>
                                                </div>
                                                <div className="formation-icon">
                                                    <i className="fas fa-hands-praying"></i>
                                                </div>
                                                <div className="formation-icon">
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                            </div>
                                            <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                            <p className="formation-subtitle">
                                                Des formations essentielles pour nourrir votre foi et vous équiper pour répondre aux questions du cœur
                                            </p>
                                            <div className="formation-highlight">
                                                <p><strong>18 formations</strong> pour approfondir votre foi + une <strong>FAQ complète</strong> pour répondre aux questions rencontrées en mission</p>
                                            </div>
                                        </div>
                                        <div className="slide-cta">
                                            <a href={slide.link} className="slide-link">
                                                Découvrir les formations
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {slide.type === 'priere' && (
                                    <div className="priere-slide">
                                        <div className="priere-content">
                                            <div className="priere-icon">
                                                <i className="fas fa-dove"></i>
                                            </div>
                                            <h2 className="priere-title">La Prière du Famissionnaire</h2>
                                            <p className="priere-text">
                                                "Que l'Esprit nous insuffle l'audace et l'humilité,<br />
                                                La foi, la joie et l'amour<br />
                                                pour faire de nous des missionnaires."
                                            </p>
                                            <div className="priere-author">Refrain de Famissio</div>
                                        </div>
                                        <div className="slide-cta">
                                            <a href={slide.link} className="slide-link">
                                                Découvrir la prière
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="mission2026-content">
                                            <div className="mission-badge">Prochaine Mission</div>
                                            <div className="mission-year">2026</div>
                                            <h2 className="mission-title">Mission Paroissiale</h2>
                                            <div className="mission-dioceses">
                                                <div className="diocese-tag">La Rochelle</div>
                                                <div className="diocese-tag">Angoulême</div>
                                                <div className="diocese-tag">Poitiers</div>
                                            </div>
                                            <div className="mission-date">24 — 30 OCTOBRE</div>
                                        </div>
                                        <div className="slide-cta">
                                            <a href={slide.link} className="slide-link">
                                                Rejoindre la mission
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-arrow prev"
                        onClick={prevSlide}
                        aria-label="Slide précédent"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        className="carousel-arrow next"
                        onClick={nextSlide}
                        aria-label="Slide suivant"
                    >
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
                                aria-label={`Aller au slide ${index + 1}`}
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
