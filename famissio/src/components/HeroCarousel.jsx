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
        linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800;900&family=Inter:wght@300;400;500;600&display=swap";
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
        if (e.target.closest('.slide-cta-btn, .carousel-arrow, .carousel-nav, .action-btn')) return;
        setIsAutoPlaying(prev => !prev);
    };

    return (
        <div className="famissio-container">
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                :root {
                    --flame: #c82904;
                    --deep-red: #8a1c02;
                    --ember: #f46a07;
                }
                body { font-family: 'Inter', sans-serif; overflow-x: hidden; width: 100%; }
                .famissio-container { width: 100%; height: 100vh; overflow: hidden; }

                /* CAROUSEL */
                .carousel-section { position: relative; width: 100%; height: 100vh; }
                .carousel-wrapper { position: relative; height: 100%; width: 100%; overflow: hidden; }
                .carousel-track { display: flex; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
                .carousel-slide {
                    min-width: 100%; height: 100%; position: relative; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                }

                /* --- CONTAINER PRINCIPAL --- */
                .slide-content-wrapper {
                    position: relative; z-index: 2; text-align: center; max-width: 1200px; width: 90%;
                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                    /* Marge énorme en bas pour garantir que les boutons ne touchent JAMAIS les barres */
                    padding-bottom: 120px; 
                }

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
                
                .formation-icon-group { display: flex; gap: 25px; justify-content: center; margin-bottom: 25px; color: var(--flame); font-size: 1.8rem; }
                
                .formation-title {
                    font-family: 'Playfair Display', serif; 
                    /* Ajusté pour tenir sur une ligne */
                    font-size: clamp(2rem, 4.5vw, 4rem); 
                    font-weight: 800; color: var(--flame); margin-bottom: 15px; white-space: nowrap;
                }
                .formation-subtitle {
                    font-size: clamp(1rem, 1.5vw, 1.3rem); color: #555; max-width: 700px; margin: 0 auto 30px; font-weight: 300;
                }
                
                .slide-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1rem;
                    transition: all 0.3s ease; z-index: 10;
                    background: var(--flame); color: white; box-shadow: 0 10px 25px rgba(200, 41, 4, 0.3);
                }
                .slide-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(200, 41, 4, 0.4); }

                /* --- SLIDE 2: PRIÈRE (Actions modifiées) --- */
                .priere-slide {
                    background: radial-gradient(circle at center, #2e1042 0%, #150821 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                .priere-icon-top { font-size: 2.5rem; color: rgba(255,255,255,0.8); margin-bottom: 20px; }
                
                .priere-title {
                    font-family: 'Playfair Display', serif; 
                    font-size: clamp(2rem, 4.5vw, 4rem); /* Ajusté pour une ligne */
                    font-weight: 700; color: white; margin-bottom: 25px; white-space: nowrap;
                }
                .priere-quote {
                    font-family: 'Playfair Display', serif; font-style: italic;
                    font-size: clamp(1.2rem, 2.5vw, 1.6rem); line-height: 1.6; color: rgba(255, 255, 255, 0.9);
                    max-width: 800px; margin-bottom: 40px;
                }

                /* NOUVEAU GROUPE DE BOUTONS */
                .priere-actions {
                    display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-top: 10px; z-index: 10;
                }
                .action-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 12px 25px; border-radius: 30px; text-decoration: none;
                    font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease;
                    background: rgba(255, 255, 255, 0.1); color: white; border: 1px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(5px); cursor: pointer;
                }
                .action-btn:hover { background: white; color: #2e1042; transform: translateY(-3px); }

                /* --- SLIDE 3: MISSION 2026 (Fond Organique / Pas de triangles) --- */
                .mission2026-slide {
                    /* Dégradé rouge profond, pas orange vif */
                    background: linear-gradient(135deg, var(--flame), var(--deep-red));
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; color: white;
                }
                
                /* FORMES ORGANIQUES (CERCLES FLOUS) - PAS DE TRIANGLES */
                .mission2026-slide::before {
                    content: ''; position: absolute; top: -20%; left: -10%; width: 50vw; height: 50vw;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
                    border-radius: 50%; pointer-events: none;
                }
                .mission2026-slide::after {
                    content: ''; position: absolute; bottom: -20%; right: -10%; width: 60vh; height: 60vh;
                    background: radial-gradient(circle, rgba(255,200,0,0.15) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .mission-overlap-container {
                    position: relative; height: 200px; width: 100%; display: flex; align-items: center; justify-content: center;
                    margin-bottom: 10px;
                }
                .mission-year-bg {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(10rem, 25vw, 18rem);
                    font-weight: 900; color: rgba(255, 255, 255, 0.12);
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    z-index: 1; user-select: none;
                }
                .mission-main-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 5vw, 4.5rem); /* Ajusté pour une ligne */
                    font-weight: 700; color: white; position: relative; z-index: 2;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.3); white-space: nowrap;
                }

                .mission-badge {
                    background: rgba(255,255,255,0.2); backdrop-filter: blur(5px);
                    padding: 8px 20px; border-radius: 20px; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 10px;
                }
                
                .mission-btn {
                    margin-top: 30px; background: white; color: var(--flame); padding: 15px 40px; border-radius: 50px;
                    text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 10px;
                    transition: all 0.3s ease; z-index: 10; box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                .mission-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,0,0.3); }

                /* --- NAVIGATION --- */
                .carousel-nav {
                    position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 20;
                }
                .nav-bar {
                    width: 40px; height: 4px; border-radius: 4px; cursor: pointer; position: relative; overflow: hidden;
                    background: rgba(255,255,255,0.3); transition: width 0.3s ease; border: none;
                }
                .formation-slide + * .nav-bar { background: rgba(0,0,0,0.1); }
                
                .nav-bar-fill { position: absolute; left: 0; top: 0; height: 100%; width: 0; transition: width 0.1s linear; }
                .formation-slide + * .nav-bar .nav-bar-fill { background: var(--flame); }
                .priere-slide + * .nav-bar .nav-bar-fill, .mission2026-slide + * .nav-bar .nav-bar-fill { background: white; }
                
                .nav-bar.active { width: 60px; }
                .nav-bar.active .nav-bar-fill { width: var(--progress); }

                .carousel-arrow {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    width: 45px; height: 45px; border-radius: 50%; border: none; cursor: pointer;
                    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
                    transition: all 0.3s ease; z-index: 20;
                }
                .formation-slide .carousel-arrow { background: white; color: var(--flame); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                .priere-slide .carousel-arrow, .mission2026-slide .carousel-arrow { background: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(5px); }
                .carousel-arrow:hover { transform: translateY(-50%) scale(1.1); }
                .carousel-arrow.prev { left: 20px; }
                .carousel-arrow.next { right: 20px; }

                @media (max-width: 768px) {
                    .slide-content-wrapper { padding-bottom: 140px; }
                    .carousel-arrow { display: none; }
                    .mission-year-bg { font-size: 8rem; }
                    .formation-title, .priere-title, .mission-main-title { white-space: normal; } /* Sur mobile on autorise le retour à la ligne si besoin */
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
                                            <div className="formation-icon-group">
                                                <i className="fas fa-book-open"></i>
                                                <i className="fas fa-heart"></i>
                                            </div>
                                            <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                            <p className="formation-subtitle">
                                                Des parcours conçus pour nourrir votre foi et vous donner les clés de l'évangélisation.
                                            </p>
                                            <a href={slide.link} className="slide-cta-btn">
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

                                            {/* NOUVEAUX BOUTONS ACTIONS */}
                                            <div className="priere-actions">
                                                <button className="action-btn">
                                                    <i className="fas fa-play"></i> Audio
                                                </button>
                                                <button className="action-btn">
                                                    <i className="fas fa-file-lines"></i> Paroles
                                                </button>
                                                <button className="action-btn">
                                                    <i className="fas fa-music"></i> Partition
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* SLIDE 3: MISSION 2026 */}
                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="mission-badge">Prochaine Mission</div>

                                            <div className="mission-overlap-container">
                                                <div className="mission-year-bg">2026</div>
                                                <h2 className="mission-main-title">Mission Paroissiale</h2>
                                            </div>

                                            <a href={slide.link} className="mission-btn">
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
