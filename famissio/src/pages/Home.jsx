import React, { useState, useRef, useEffect } from 'react';

/* --- ICONES SVG --- */
function IconChurch(props) { return (<svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M256 0c-16.5 0-30 13.5-30 30v20H120c-13.3 0-24 10.7-24 24v408c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V74c0-13.3-10.7-24-24-24h-106V30c0-16.5-13.5-30-30-30zM144 98h224v380H144V98zm112 40c-11 0-20 9-20 20v114h-64v64h64v114c0 11 9 20 20 20s20-9 20-20V336h64v-64h-64V158c0-11-9-20-20-20z" /></svg>); }
function IconBullhorn(props) { return (<svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M480 208H308c-10.5 0-20.2-5.7-25.5-14.9L216 64H32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h184l66.5 128.5c5.3 10.2 16.5 15.5 27.5 13.2 11-2.3 19-11.8 20-23.7V272h150c17.7 0 32-14.3 32-32v-32z" /></svg>); }
function IconCrown(props) { return (<svg viewBox="0 0 576 512" fill="currentColor" {...props}><path d="M576 128c0-35.3-28.7-64-64-64-26.5 0-49.3 16.3-58.6 39.4l-75.1 187.8L320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64l-58.3 227.2L58.6 103.4C49.3 80.3 26.5 64 0 64C-35.3 64-64 92.7-64 128c0 23.6 12.9 44 32 55.4v264.6c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V183.4c19.1-11.4 32-31.8 32-55.4z" /></svg>); }
function IconEye(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>); }
function IconCalendar(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg>); }
function IconPin(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>); }

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isModalOpen]);

    const openModalAt = (index) => { setCurrentSlide(Number(index)); setIsModalOpen(true); };
    const closeModal = () => setIsModalOpen(false);
    const goToSlide = (index) => {
        let next = index;
        if (next < 0) next = 0; if (next > 2) next = 2;
        setCurrentSlide(next);
    };
    const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX.current - 50) goToSlide(currentSlide + 1);
        if (touchEndX > touchStartX.current + 50) goToSlide(currentSlide - 1);
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700&display=swap');

        .home-container {
            --famissio-red: #c82904;
            --famissio-orange: #f46a07;
            --text-dark: #333333;
            --text-light: #fefefe;
            --bg-light: #ffffff;
            --bg-dark: #222222;
            --bg-grey-light: #f8f8f8;
            --bg-prayer: #e8e8e8;
            
            font-family: 'Open Sans', sans-serif;
            color: var(--text-dark);
            line-height: 1.6; /* Interligne réduit */
            width: 100%;
            overflow-x: hidden;
        }

        /* Conteneur interne : c'est lui qui centre le texte, mais la section va au bord */
        .container { 
            width: 90%; 
            max-width: 1300px; /* Un peu plus large */
            margin: 0 auto; 
            padding: 40px 0; /* Padding réduit (était 60px) */
        }
        
        /* -- TYPOGRAPHIE RÉDUITE (Dézoom) -- */
        .home-container h2 { 
            font-family: 'Open Sans', sans-serif; 
            font-size: 2rem; /* Réduit (était 2.6) */
            font-weight: 700; 
            text-transform: uppercase; 
            color: var(--famissio-red); 
            text-align: center; 
            padding-bottom: 10px; 
            position: relative; 
            margin-bottom: 30px; 
        }
        .home-container h2::after { 
            content: ''; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); 
            width: 60px; height: 3px; background-color: var(--famissio-orange); border-radius: 2px; 
        }

        .home-container h3 { 
            font-family: 'Playfair Display', serif; font-weight: 700; 
            font-size: 1.6rem; /* Réduit (était 2.2) */
            color: var(--famissio-orange); margin-top: 30px; margin-bottom: 15px; 
        }
        
        .home-container h4 { 
            font-size: 1.3rem; /* Réduit */
            color: var(--famissio-red); margin-bottom: 8px; 
        }
        
        .home-container p, .home-container li, .home-container blockquote { 
            font-size: 0.95rem; /* Texte plus petit (Dézoom) */
            color: var(--text-dark); margin-bottom: 0.8em; 
        }

        /* -- SECTIONS PLEINE LARGEUR -- */
        .section-light { background-color: var(--bg-light); width: 100%; }
        .section-dark { background-color: var(--bg-dark); color: var(--text-light); width: 100%; }
        .section-mission-action { background-color: #f0f5ff; width: 100%; }
        .pope-message { background-color: var(--bg-grey-light); padding: 40px 0; width: 100%; }
        .prayer-section { background-color: var(--bg-prayer); padding: 30px 0; text-align: center; width: 100%; }

        /* Autres styles */
        blockquote { font-style: italic; border-left: 4px solid var(--famissio-orange); padding: 15px 20px; margin: 20px 0; background-color: var(--bg-grey-light); border-radius: 6px; }
        .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 900px; margin: 40px auto; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
        
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
        .feature-card { background-color: var(--bg-light); border-radius: 10px; padding: 25px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.08); border-bottom: 4px solid var(--famissio-orange); }
        .card-icon { width: 40px; height: 40px; margin: 0 auto 10px; color: var(--famissio-orange); }
        
        .age-content { display: flex; flex-direction: column; gap: 30px; align-items: center; margin-top: 30px; }
        .age-image img { width: 100%; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); max-height: 500px; object-fit: cover; }
        
        .mission-gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 30px; }
        .gallery-item { background-color: var(--bg-light); border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
        .gallery-item img { width: 100%; height: 180px; object-fit: cover; }
        .gallery-item h4 { margin: 10px 0; font-size: 1.1rem; color: var(--famissio-red); }

        .full-width-banner { background: linear-gradient(135deg, var(--famissio-red), var(--famissio-orange)); padding: 40px 0; display: flex; justify-content: center; width: 100%; margin-top: 30px; }
        .full-width-banner h2 { font-size: 2.2rem; color: var(--text-light); margin: 0; padding: 0; text-shadow: none; }
        .full-width-banner h2::after { display: none; }

        .profile-card img { width: 130px; height: 130px; border-radius: 50%; border: 4px solid var(--famissio-orange); margin-bottom: 15px; }
        .profile-card h2 { font-size: 2.2rem; margin: 0; }
        
        .priest-pillars { display: grid; gap: 20px; margin-top: 30px; }
        @media (min-width: 768px) { .priest-pillars { grid-template-columns: repeat(2, 1fr); } .priest-pillars .pillar-item:nth-child(1) { grid-area: 1 / 1 / 2 / 3; } .priest-pillars .pillar-item:nth-child(2) { grid-area: 2 / 1 / 3 / 2; } .priest-pillars .pillar-item:nth-child(3) { grid-area: 2 / 2 / 3 / 3; } }
        .pillar-item { background: var(--bg-light); padding: 25px; border-radius: 10px; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.08); display: flex; flex-direction: column; align-items: center; }
        
        .pope-points { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
        .pope-points .point-item { background: var(--bg-light); padding: 15px; border-left: 4px solid var(--famissio-orange); border-radius: 6px; }
        .pope-points .point-item:last-child { grid-column: 1 / -1; }
        
        .prayer-logo { width: 100px; height: 100px; border-radius: 50%; border: 4px solid var(--famissio-orange); background: #fff; margin: 0 auto 20px; display: block; }
        .prayer-button { display: inline-block; background: var(--famissio-red); color: #fff; padding: 15px 30px; border-radius: 50px; font-weight: 700; margin-top: 15px; text-decoration: none; }

        /* Mobile specific */
        .mobile-pillars-nav { display: none; }
        .pillars-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center; }
        .pillars-modal.active { display: flex; }
        .close-modal-btn { position: absolute; top: 20px; right: 20px; color: #fff; background: transparent; border: 1px solid #fff; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer; }
        .carousel-container { width: 90%; max-width: 400px; overflow: hidden; }
        .mobile-card { background: #fff; padding: 20px; border-radius: 10px; text-align: center; }
        .carousel-dots { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
        .dot { width: 10px; height: 10px; background: rgba(255,255,255,0.5); border-radius: 50%; }
        .dot.active { background: var(--famissio-orange); transform: scale(1.2); }

        @media (max-width: 767px) {
            .priest-pillars { display: none; }
            .mobile-pillars-nav { display: flex; justify-content: center; gap: 15px; margin: 30px 0; }
            .mobile-icon-btn { width: 60px; height: 60px; background: #fff; border: 2px solid var(--famissio-orange); border-radius: 50%; display: flex; flex-direction: column; alignItems: center; justify-content: center; color: var(--famissio-orange); font-size: 0.7rem; font-weight: 700; }
            .mobile-icon-btn svg { width: 24px; height: 24px; fill: var(--famissio-red); margin-bottom: 2px; }
            .pope-points { display: flex; flex-direction: column; }
        }
      `}</style>

            <div className="home-container">
                <section className="section-light">
                    <div className="container">
                        <h2>La genèse de Famissio</h2>
                        <div className="text-block text-justify">
                            <p>À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre la mission mais cette fois-ci en restant en France et pour accompagner des curés de paroisses rurales. Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle paroisse du père Jean-Pierre Barrière dans la Creuse. Cette semaine les a tous beaucoup nourris et remplis de joie puis confirmés dans cette intuition initiale. Famissio est alors née. Le père Jean-Pierre en devenait l'aumônier. Monseigneur Bozo acceptait de suivre cette initiative.</p>
                        </div>
                    </div>
                </section>

                <section className="section-dark">
                    <div className="container">
                        <h2 style={{ color: '#fff' }}>Qui sommes-nous ?</h2>
                        <div className="text-block">
                            <p style={{ color: 'var(--text-light)' }}>Nous sommes des familles missionnaires venues de toute la France, accompagnées de consacrés, qui se rassemblent chaque année pendant une semaine autour de La Toussaint, pour entourer un curé et ses paroissiens, en vue de faire avec eux de la mission.</p>
                        </div>

                        <div className="video-wrapper">
                            <iframe src="https://www.youtube.com/embed/bYFu-nvDDHI" title="Présentation de Famissio" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

                <section className="section-light">
                    <div className="container">
                        <h2>Notre Mission</h2>
                        <div className="feature-grid">
                            <div className="feature-card">
                                <div className="card-icon"><IconEye style={{ width: '100%', height: '100%' }} /></div>
                                <h3>Que faisons-nous ?</h3>
                                <p>Nous nous mettons au service de paroisses pour mener avec elles une mission. Nous arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses d'un même diocèse.</p>
                            </div>
                            <div className="feature-card">
                                <div className="card-icon"><IconCalendar style={{ width: '100%', height: '100%' }} /></div>
                                <h3>Préparation</h3>
                                <p>La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de missionnaires qui se retrouvent régulièrement par visioconférences. Main dans la main, ils élaborent alors le programme de la mission, préparent ensemble ses différents temps et créent des liens fraternels entre eux.</p>
                            </div>
                            <div className="feature-card">
                                <div className="card-icon"><IconPin style={{ width: '100%', height: '100%' }} /></div>
                                <h3>Où allons-nous ?</h3>
                                <p>Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous envoie en mission, en accord avec le diocèse local. Nous nous adaptons aux besoins spécifiques de chaque communauté.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-light">
                    <div className="container">
                        <h2>L'Équipe Missionnaire</h2>
                        <div className="age-content">
                            <div className="age-image">
                                <img src="https://www.dropbox.com/scl/fi/x300cci110rnj6oe3e2w9/trrrrrrrzzzzzzzf-2-fi36539933x520.jpg?rlkey=2huvhwb36hzwlatnc5cmb2aav&st=2ap6gdal&raw=1" alt="L'équipe missionnaire Famissio" />
                            </div>
                            <div className="age-text">
                                <h3>À combien arrivons-nous ?</h3>
                                <p>Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de la paroisse qui nous accueille. Une communauté dynamique prête à servir !</p>

                                <h3>Missionnaires à partir de quel âge ?</h3>
                                <p><strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et toucher les cœurs. Ils nous évangélisent !! </p>

                                <blockquote>
                                    "Aujourd’hui, ce n’est pas seulement par-delà les océans qu’il faut propager la bonne parole, mais aussi dans nos villes et villages. Comme nous avons besoin de grands missionnaires ! Mais qui peut réveiller l’ardeur d’une chrétienté endormie ? Les grands missionnaires que nous désirons tant je crois que ce sont les enfants..."
                                    <footer>— Pierre-Alexandre Ludwig</footer>
                                    <p style={{ marginTop: '15px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '15px' }}>
                                        «Les enfants sont transparents, ils ne calculent pas. À un monsieur qui expliquait ne pas croire, Raphaël, âgé de 12 ans, n’a cessé de répéter, inquiet : “Mais vous savez quand même que Dieu vous aime?»
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-mission-action">
                    <div className="container">
                        <h2>Une Mission Paroissiale en Action</h2>
                        <div className="mission-gallery">
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/v0k8ckicnyaobc6wdixtc/IMG_20211104_171612-fi32460644x451.jpg?rlkey=gecdftgaorgur3jacznz51b3e&st=zgarxktq&raw=1" alt="Temps de prière" />
                                <h4>Temps de prière</h4>
                            </div>
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/8xnpcrh3tvxzxf7kyvp6d/DSC06168-1-fi34268804x450.JPG?rlkey=d8pslpo7wwh33oifo30cdhb02&st=ouy3d7kh&raw=1" alt="Évangélisation" />
                                <h4>Évangélisation</h4>
                            </div>
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/84oq9lffpxessyjqaykze/DSC07017-fi34268812x450.JPG?rlkey=31tzir638dtkj7irj1wdfww99&st=1uj7gy0m&raw=1" alt="Veillées" />
                                <h4>Veillée</h4>
                            </div>
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/ektuggc9viiayu4m4zx8v/DSC06370-fi34268813x450.JPG?rlkey=wwh0cdmldc29bnw3ihw3jswqy&st=5od3xnu2&raw=1" alt="Bénédiction des cimetières" />
                                <h4>Bénédiction des cimetières</h4>
                            </div>
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/m15to2bnadh2tm5bj1cly/IMGP2714-fi34268817x452.JPG?rlkey=391cu3b0i72m9pnnd2nf9cgh1&st=fzqn01ne&raw=1" alt="Journée intergénérationnelle" />
                                <h4>Journée des familles</h4>
                            </div>
                            <div className="gallery-item">
                                <img src="https://www.dropbox.com/scl/fi/kxal2e1m5ada6yekul9ez/DSC06804-fi34268819x450.JPG?rlkey=99vuv31asqw7f2j909rbzaf6t&st=r0t2rz4j&raw=1" alt="Journée diocésaine" />
                                <h4>Envoi en mission</h4>
                            </div>
                        </div>

                        <h3 style={{ marginTop: '40px', textAlign: 'center' }}>Le programme d'une mission</h3>
                        <div className="video-wrapper">
                            <iframe src="https://www.youtube.com/embed/ZnW9oGHpAyQ" title="Programme d'une mission" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

                <div className="full-width-banner">
                    <h2>La mission nous presse !</h2>
                </div>

                <section className="section-light priest-section">
                    <div className="container">
                        <div className="profile-card">
                            <img src="https://www.dropbox.com/scl/fi/dsno7gyihzu9cgldd8r8m/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg?rlkey=4bgn6q71xyk271zuo9hz04qkd&st=xljafer4&raw=1" alt="Père Jean-Pierre Barrière" />
                            <h2>Père Jean-Pierre Barrière</h2>
                            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '1.1rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--famissio-orange)', textAlign: 'center' }}>Aumônier de Famissio</p>
                        </div>

                        <h3 className="section-subtitle" style={{ textAlign: 'left' }}>L'APPEL DU CHRIST ET LA VOCATION À L'ÉVANGÉLISATION</h3>
                        <div className="text-justify">
                            <p>Depuis le jour de notre baptême nous sommes devenus enfants bien-aimés du Père, frères et sœurs de Jésus Christ... Quelle belle mission pour chaque baptisé !</p>
                            <p>Mais regardons d'un peu plus près ce que cela signifie:</p>
                        </div>

                        {/* MENU MOBILE */}
                        <div className="mobile-pillars-nav">
                            <div className="mobile-icon-btn" onClick={() => openModalAt(0)}>
                                <IconChurch /> <span>Prêtre</span>
                            </div>
                            <div className="mobile-icon-btn" onClick={() => openModalAt(1)}>
                                <IconBullhorn /> <span>Prophète</span>
                            </div>
                            <div className="mobile-icon-btn" onClick={() => openModalAt(2)}>
                                <IconCrown /> <span>Roi</span>
                            </div>
                        </div>

                        {/* GRILLE DESKTOP */}
                        <div className="priest-pillars">
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconChurch style={{ width: 30, height: 30, display: 'block', margin: '0 auto 10px', color: 'var(--famissio-red)' }} /></span> Je suis Prêtre</h4>
                                <p>Seul Jésus est le "grand prêtre par Excellence"... Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent.</p>
                            </div>
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconBullhorn style={{ width: 30, height: 30, display: 'block', margin: '0 auto 10px', color: 'var(--famissio-red)' }} /></span> Je suis Prophète</h4>
                                <p>Le prophète est, étymologiquement, le "porte-parole" de Dieu. Comme je participe à cette dignité, je suis, moi aussi, un prophète... Nous annonçons la Bonne nouvelle.</p>
                            </div>
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconCrown style={{ width: 30, height: 30, display: 'block', margin: '0 auto 10px', color: 'var(--famissio-red)' }} /></span> Je suis Roi</h4>
                                <p>Attention à cette fonction car être roi pour un baptisé, c'est être au service... Soyons inventifs, créatifs dans le service du frère.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pope-message">
                    <div className="container">
                        <div className="profile-card">
                            <img src="https://www.dropbox.com/scl/fi/iqxyup7a7ovqdx1scs9ey/pape_10_0-fi27235959x470.jpg?rlkey=efa3ype4bq4pdw4ot4sttzj3f&st=328t36t5&raw=1" alt="Pape François" />
                            <h2>Pape François</h2>
                        </div>

                        <h3 className="section-subtitle">7 POINTS CLÉS POUR LA MISSION SELON LE PAPE FRANÇIS</h3>

                        <div className="pope-points">
                            <div className="point-item">
                                <h4>1. ALLER AUX PÉRIPHÉRIES</h4>
                                <p>“Église en sortie” n’est pas une expression à la mode. Elle est un commandement du Christ.</p>
                            </div>
                            <div className="point-item">
                                <h4>2. SE LAISSER SURPRENDRE</h4>
                                <p>La mission n’est pas un projet d’entreprise bien rodé. L’Esprit saint agit comme il le veut.</p>
                            </div>
                            <div className="point-item">
                                <h4>3. SE METTRE À L’ÉCOUTE</h4>
                                <p>La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l’on éprouve en présence des paroles de Jésus.</p>
                            </div>
                            <div className="point-item">
                                <h4>4. TÉMOIGNER ET NON DÉCLARER</h4>
                                <p>On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.</p>
                            </div>
                            <div className="point-item">
                                <h4>5. ÉLOGE DE LA TENDRESSE</h4>
                                <p>Annoncer l’Évangile ne consiste pas à assiéger les autres de discours. Lancer des vérités comme des pierres, c’est le signe que les paroles se sont transformées en idéologie.</p>
                            </div>
                            <div className="point-item">
                                <h4>6. LE CONTACT HUMAIN</h4>
                                <p>La mission est un contact humain : “Je connais Jésus, je voudrais te le faire connaître”.</p>
                            </div>
                            <div className="point-item">
                                <h4>7. HABITER LE TEMPS</h4>
                                <p>Il ne s'agit pas de faire de l’animation missionnaire comme un métier, mais de vivre avec les autres, de les suivre pas à pas.</p>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', color: 'var(--famissio-red)', textAlign: 'center', marginTop: '40px', fontWeight: 700, textTransform: 'uppercase' }}>Que puis-je faire en tant que jeune pour mon église ?</h3>

                        <p style={{ textAlign: 'justify', marginTop: '20px' }}>
                            Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à l’extérieur ! Je veux que l’Église sorte dans les rues !<br /><br />
                            N'oubliez pas, mettez la pagaille !
                        </p>
                    </div>
                </section>

                <section className="prayer-section">
                    <div className="container">
                        <img src="https://www.dropbox.com/scl/fi/ozdvwu2oguqbfpnqb13md/image-fi36533979x60.png?rlkey=dhv7afow6nxnv2ni0qx5hkssm&st=5a3ep07c&raw=1" alt="Logo Prière Famissio" className="prayer-logo" />
                        <h2>Prière du Famissionnaire</h2>
                        <p className="prayer-text">Découvrez la prière qui nous accompagne et nous inspire au quotidien dans notre mission.</p>
                        <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" rel="noreferrer" className="prayer-button">
                            Accéder à la prière
                        </a>
                    </div>
                </section>

                {/* MODAL MOBILE */}
                <div className={`pillars-modal ${isModalOpen ? 'active' : ''}`}>
                    <button className="close-modal-btn" onClick={closeModal}>×</button>
                    <div className="carousel-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconChurch style={{ width: 24, height: 24 }} /> Je suis Prêtre</h4>
                                    <p>Seul Jésus est le "grand prêtre par Excellence"... Mais par notre baptême nous rendons vivant le sacerdoce du Christ.</p>
                                </div>
                            </div>
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconBullhorn style={{ width: 24, height: 24 }} /> Je suis Prophète</h4>
                                    <p>Nous annonçons la Bonne nouvelle, "toujours nouvelle".</p>
                                </div>
                            </div>
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconCrown style={{ width: 24, height: 24 }} /> Je suis Roi</h4>
                                    <p>Être roi pour un baptisé, c'est être au service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-dots">
                        {[0, 1, 2].map((i) => (
                            <span key={i} className={`dot ${currentSlide === i ? 'active' : ''}`} onClick={() => goToSlide(i)}></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}