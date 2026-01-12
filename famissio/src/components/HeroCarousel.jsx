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
                    --deep-blue: #1a1a2e;
                    --rich-purple: #2d1b3d;
                }
                body { font-family: 'Inter', sans-serif; overflow-x: hidden; width: 100%; }
                .famissio-container { width: 100%; height: 100vh; overflow: hidden; }

                /* CAROUSEL */
                .carousel-section {
                    position: relative; width: 100%; height: 100vh; display: flex; flex-direction: column;
                }
                .carousel-wrapper {
                    position: relative; height: 100%; width: 100%; overflow: hidden;
                }
                .carousel-track {
                    display: flex; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .carousel-slide {
                    min-width: 100%; height: 100%; position: relative; cursor: pointer; display: flex; align-items: center; justify-content: center;
                }

                /* --- CONTENEUR GÉNÉRIQUE (Ajusté pour moins d'empilement) --- */
                .slide-content-wrapper {
                    position: relative; z-index: 2; text-align: center; max-width: 950px; padding: 30px;
                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                    /* Réduction des marges internes pour un look moins "étiré" */
                    gap: 25px; 
                }

                /* --- SLIDE 1: FORMATION --- */
                .formation-slide {
                    background: linear-gradient(135deg, #fff8f4 0%, #faf7f5 100%);
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                .formation-slide::before {
                    content: ''; position: absolute; top: -40%; right: -15%; width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(200, 41, 4, 0.06) 0%, transparent 65%);
                    border-radius: 50%; pointer-events: none;
                }
                .formation-icon-group {
                    display: flex; gap: 40px; justify-content: center; margin-bottom: 10px;
                }
                .formation-icon {
                    width: 90px; height: 90px;
                    background: linear-gradient(135deg, var(--flame), var(--ember));
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    font-size: 2.2rem; color: white; box-shadow: 0 10px 30px rgba(200, 41, 4, 0.25);
                    /* PLUS D'ANIMATION ICI */
                }
                .formation-title {
                    font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 5rem);
                    font-weight: 900; color: var(--flame); line-height: 1.1; margin: 0;
                }
                .formation-subtitle {
                    font-size: clamp(1.2rem, 2vw, 1.5rem); color: #666; max-width: 700px; margin: 0;
                }
                .formation-highlight {
                    background: rgba(200, 41, 4, 0.05); border-left: 4px solid var(--ember);
                    padding: 15px 25px; border-radius: 8px; font-size: 1.1rem;
                }

                /* --- SLIDE 2: PRIÈRE (Nouveau fond sans image) --- */
                .priere-slide {
                    /* Fond dégradé uni sombre */
                    background: linear-gradient(135deg, var(--deep-blue), var(--rich-purple));
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
                }
                /* Forme subtile style slide 1 */
                .priere-slide::before {
                    content: ''; position: absolute; bottom: -30%; left: -10%; width: 800px; height: 800px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 60%);
                    border-radius: 50%; pointer-events: none;
                }
                .priere-icon {
                    width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    font-size: 2.5rem; color: white; margin-bottom: 10px; backdrop-filter: blur(10px);
                }
                .priere-title {
                    font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 5rem);
                    font-weight: 900; color: white; line-height: 1.1; margin: 0;
                }
                .priere-text {
                    font-size: clamp(1.3rem, 2.5vw, 1.8rem); line-height: 1.6; color: rgba(255, 255, 255, 0.95);
                    font-style: italic; max-width: 800px; margin: 10px 0;
                }
                .priere-author {
                    font-size: 1.1rem; color: var(--coral); font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
                }

                /* --- SLIDE 3: MISSION 2026 (Nouveau fond & Style superposition) --- */
                .mission2026-slide {
                    /* Fond dégradé uni chaud */
                    background: linear-gradient(135deg, var(--flame), var(--ember));
                    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; color: white;
                }
                /* Forme subtile style slide 1 */
                .mission2026-slide::before {
                    content: ''; position: absolute; top: -50%; right: -30%; width: 900px; height: 900px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .mission-badge {
                    background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); color: white;
                    padding: 12px 30px; border-radius: 50px; font-size: 0.9rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; border: 2px solid rgba(255, 255, 255, 0.3);
                }

                /* Conteneur pour la superposition */
                .title-overlap-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 200px; /* Hauteur fixe pour gérer la superposition */
                    margin: 20px 0;
                }

                .mission-year {
                    font-family: 'Playfair Display', serif;
                    /* Taille énorme */
                    font-size: clamp(10rem, 25vw, 18rem);
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.15); /* Très transparent */
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -55%); /* On le remonte un peu */
                    z-index: 0; /* Derrière */
                    line-height: 0.8;
                    user-select: none;
                }

                .mission-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 800;
                    color: white;
                    position: relative;
                    z-index: 2; /* Devant */
                    /* Ombre portée solide de la couleur du fond pour "couper" le bas du 2026 visuellement */
                    text-shadow: 0 10px 0 var(--ember), 0 -2px 15px rgba(0,0,0,0.2);
                    margin: 0;
                }

                .mission-dioceses {
                    display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;
                }
                .diocese-tag {
                    background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); color: white;
                    padding: 10px 25px; border-radius: 30px; font-size: 1rem; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .mission-date {
                    font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.5vw, 1.8rem);
                    font-weight: 700; letter-spacing: 3px; margin-top: 10px;
                }

                /* --- BOUTON CTA --- */
                .slide-link {
                    display: inline-flex; align-items: center; gap: 15px;
                    background: white; color: var(--flame); padding: 18px 45px; border-radius: 50px;
                    text-decoration: none; font-weight: 700; font-size: 1.2rem; transition: all 0.4s ease;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); z-index: 10;
                    margin-top: 20px; /* Espace avant le bouton */
                }
                .slide-link:hover {
                    transform: translateY(-5px); box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3); gap: 25px;
                }

                /* NAVIGATION & FLÈCHES (Assurer la visibilité) */
                .carousel-nav {
                    position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 20;
                }
                .nav-dot {
                    width: 60px; height: 4px; border: none; border-radius: 2px; cursor: pointer; position: relative; overflow: hidden; transition: all 0.3s ease;
                    background: rgba(255, 255, 255, 0.4); /* Plus clair pour contraste */
                }
                .formation-slide + * .nav-dot { background: rgba(200, 41, 4, 0.3); }
                .nav-dot:hover { opacity: 0.8; }
                .nav-dot-fill {
                    position: absolute; left: 0; top: 0; height: 100%; width: 0; transition: width 0.1s linear;
                }
                .formation-slide + * .nav-dot .nav-dot-fill { background: var(--flame); }
                .priere-slide + * .nav-dot .nav-dot-fill,
                .mission2026-slide + * .nav-dot .nav-dot-fill { background: white; }
                .nav-dot.active .nav-dot-fill { width: var(--progress); }

                .carousel-arrow {
                    position: absolute; top: 50%; transform: translateY(-50%); width: 50px; height: 50px;
                    background: rgba(255, 255, 255, 0.3); /* Plus visible */
                    backdrop-filter: blur(5px); border: 2px solid rgba(255,255,255,0.5); border-radius: 50%;
                    cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: white; transition: all 0.3s ease; z-index: 20;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                .formation-slide .carousel-arrow {
                    background: rgba(200, 41, 4, 0.15); color: var(--flame); border-color: rgba(200, 41, 4, 0.3);
                }
                .carousel-arrow:hover { background: white; color: var(--flame); transform: translateY(-50%) scale(1.1); }
                .carousel-arrow.prev { left: 25px; }
                .carousel-arrow.next { right: 25px; }

                @media (max-width: 768px) {
                    .slide-content-wrapper { padding: 20px; width: 95%; gap: 20px; }
                    .formation-icon { width: 70px; height: 70px; font-size: 1.8rem; }
                    .slide-link { padding: 15px 35px; font-size: 1rem; }
                    .carousel-nav { bottom: 20px; }
                    .carousel-arrow { display: none; }
                    .title-overlap-container { height: 150px; }
                    .mission-year { font-size: 12rem; }
                }
            `}</style>

            <section className="carousel-section">
                <div className="carousel-wrapper">
                    <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="carousel-slide" onClick={handleSlideClick}>
                                {slide.type === 'formation' && (
                                    <div className="formation-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="formation-icon-group">
                                                <div className="formation-icon"><i className="fas fa-book-open"></i></div>
                                                <div className="formation-icon"><i className="fas fa-hands-praying"></i></div>
                                                <div className="formation-icon"><i className="fas fa-heart"></i></div>
                                            </div>
                                            <h2 className="formation-title">Se Préparer pour la Mission</h2>
                                            <p className="formation-subtitle">Des formations essentielles pour nourrir votre foi et vous équiper.</p>
                                            <div className="formation-highlight"><p><strong>18 formations</strong> + <strong>FAQ complète</strong></p></div>
                                            <a href={slide.link} className="slide-link">Découvrir <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                )}
                                {slide.type === 'priere' && (
                                    <div className="priere-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="priere-icon"><i className="fas fa-dove"></i></div>
                                            <h2 className="priere-title">La Prière du Famissionnaire</h2>
                                            <p className="priere-text">"Que l'Esprit nous insuffle l'audace et l'humilité, La foi, la joie et l'amour..."</p>
                                            <div className="priere-author">Refrain de Famissio</div>
                                            <a href={slide.link} className="slide-link">Prier maintenant <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                )}
                                {slide.type === 'mission2026' && (
                                    <div className="mission2026-slide">
                                        <div className="slide-content-wrapper">
                                            <div className="mission-badge">Prochaine Mission</div>

                                            {/* NOUVEAU BLOC POUR LA SUPERPOSITION */}
                                            <div className="title-overlap-container">
                                                <div className="mission-year">2026</div>
                                                <h2 className="mission-title">Mission Paroissiale</h2>
                                            </div>

                                            <div className="mission-dioceses">
                                                <div className="diocese-tag">La Rochelle</div>
                                                <div className="diocese-tag">Angoulême</div>
                                                <div className="diocese-tag">Poitiers</div>
                                            </div>
                                            <div className="mission-date">24 — 30 OCTOBRE</div>
                                            <a href={slide.link} className="slide-link">Rejoindre <i className="fas fa-arrow-right"></i></a>
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
                            <button key={index} className={`nav-dot ${currentSlide === index ? 'active' : ''}`} onClick={() => goToSlide(index)}>
                                <div className="nav-dot-fill" style={{ width: currentSlide === index ? `${progress}%` : '0%' }}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroCarousel;
