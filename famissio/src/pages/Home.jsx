import React, { useState, useRef, useEffect } from 'react';

/* =========================================
   DÉFINITIONS DES ICÔNES (NE PAS SUPPRIMER)
   ========================================= */

// Icônes des Piliers (Prêtre, Prophète, Roi)
function IconChurch(props) {
    return (
        <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
            <path d="M256 0c-16.5 0-30 13.5-30 30v20H120c-13.3 0-24 10.7-24 24v408c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V74c0-13.3-10.7-24-24-24h-106V30c0-16.5-13.5-30-30-30zM144 98h224v380H144V98zm112 40c-11 0-20 9-20 20v114h-64v64h64v114c0 11 9 20 20 20s20-9 20-20V336h64v-64h-64V158c0-11-9-20-20-20z" />
        </svg>
    );
}
function IconBullhorn(props) {
    return (
        <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
            <path d="M480 208H308c-10.5 0-20.2-5.7-25.5-14.9L216 64H32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h184l66.5 128.5c5.3 10.2 16.5 15.5 27.5 13.2 11-2.3 19-11.8 20-23.7V272h150c17.7 0 32-14.3 32-32v-32z" />
        </svg>
    );
}
function IconCrown(props) {
    return (
        <svg viewBox="0 0 576 512" fill="currentColor" {...props}>
            <path d="M576 128c0-35.3-28.7-64-64-64-26.5 0-49.3 16.3-58.6 39.4l-75.1 187.8L320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64l-58.3 227.2L58.6 103.4C49.3 80.3 26.5 64 0 64C-35.3 64-64 92.7-64 128c0 23.6 12.9 44 32 55.4v264.6c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V183.4c19.1-11.4 32-31.8 32-55.4z" />
        </svg>
    );
}

// Icônes de la Mission (Oeil, Calendrier, Pin) - C'est celles-ci qui manquaient !
function IconEye(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
    );
}
function IconCalendar(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
        </svg>
    );
}
function IconPin(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
        </svg>
    );
}

/* =========================================
   COMPOSANT PRINCIPAL
   ========================================= */
export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isModalOpen]);

    const openModalAt = (index) => {
        setCurrentSlide(Number(index));
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const goToSlide = (index) => {
        let next = index;
        if (next < 0) next = 0;
        if (next > 2) next = 2;
        setCurrentSlide(next);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX.current - 50) {
            goToSlide(currentSlide + 1);
        }
        if (touchEndX > touchStartX.current + 50) {
            goToSlide(currentSlide - 1);
        }
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
            --bg-pale-orange: #fffaf7;
            --bg-mission-action: #f0f5ff;
            --bg-prayer: #e8e8e8;
            font-family: 'Open Sans', sans-serif;
            color: var(--text-dark);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 60px 0; }
        
        /* Titres */
        .home-container h3, .home-container h4 { font-family: 'Playfair Display', serif; font-weight: 700; text-align: left; margin-bottom: 25px; line-height: 1.2; color: var(--famissio-orange); }
        .home-container h3 { font-size: 2.2rem; margin-top: 40px; }
        .priest-section h3.section-subtitle, .pope-message h3.section-subtitle { font-size: 1.6rem; margin-top: 20px; margin-bottom: 30px; font-weight: 600; font-family: 'Open Sans', sans-serif; text-transform: uppercase; letter-spacing: 1px; text-align: left; max-width: 900px; margin-left: auto; margin-right: auto; }
        .home-container h4 { font-size: 1.6rem; color: var(--famissio-red); margin-bottom: 10px; }
        
        .home-container h2 { font-family: 'Open Sans', sans-serif; font-size: 2.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--famissio-red); text-align: center; padding-bottom: 15px; position: relative; margin-bottom: 40px; }
        .home-container h2::after { content: ''; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 70px; height: 3px; background-color: var(--famissio-orange); border-radius: 2px; }
        
        .full-width-banner h2, .prayer-section h2 { font-family: 'Playfair Display', serif; text-transform: none; letter-spacing: normal; font-weight: 700; margin-bottom: 0; padding-bottom: 0; }
        .full-width-banner h2::after, .prayer-section h2::after { background-color: var(--famissio-orange); width: 80px; height: 4px; bottom: -15px; }
        .full-width-banner h2 { font-size: clamp(2rem, 5vw, 3rem); color: var(--text-light); text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7); }
        .full-width-banner h2::after { background-color: var(--text-light); }
        .prayer-section h2 { font-size: 3.5rem; color: var(--famissio-red); }
        
        .home-container p, .home-container ul, .home-container ol, .home-container blockquote { font-size: 1.1rem; color: var(--text-dark); margin-bottom: 1em; }
        strong { color: var(--famissio-red); }
        blockquote { font-style: italic; border-left: 5px solid var(--famissio-orange); padding: 20px 25px; margin: 30px 0; background-color: var(--bg-grey-light); border-radius: 8px; color: var(--text-dark); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        blockquote footer { margin-top: 10px; font-style: normal; font-weight: 600; color: var(--famissio-red); display: block; }
        
        /* Sections */
        .section-light { background-color: var(--bg-light); }
        .section-dark { background-color: var(--bg-dark); color: var(--text-light); }
        .section-mission-action { background-color: var(--bg-mission-action); }
        .text-block { padding: 0 5%; max-width: 900px; margin: 0 auto; text-align: center; }
        .text-justify { text-align: left; }
        .text-justify p { text-align: justify; }
        
        .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 900px; margin: 50px auto; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
        .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
        
        /* Feature Grid */
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px; }
        .feature-card { background-color: var(--bg-light); border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); padding: 30px; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; border-bottom: 5px solid var(--famissio-orange); }
        .feature-card h3 { color: var(--famissio-red); font-size: 1.5rem; margin-top: 0; margin-bottom: 15px; text-align: center; white-space: nowrap; }
        .feature-card p { color: var(--text-dark); font-size: 1rem; text-align: justify; }
        .card-icon { width: 50px; height: 50px; margin: 0 auto 15px; text-align: center; color: var(--famissio-orange); }
        
        /* Equipe */
        .age-content { display: flex; flex-direction: column; gap: 40px; align-items: center; margin-top: 50px; }
        .age-text { width: 100%; max-width: 900px; text-align: left; }
        .age-text p, .age-text blockquote { text-align: justify; }
        .age-image { width: 100%; max-width: 900px; text-align: center; }
        .age-image img { width: 100%; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); object-fit: cover; object-position: center top; height: auto; max-height: 60vh; }
        
        /* Galerie */
        .mission-gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 50px; }
        .gallery-item { background-color: var(--bg-light); border-radius: 15px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.1); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .gallery-item:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
        .gallery-item img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .gallery-item h4 { margin: 15px 0 20px; color: var(--famissio-red); font-size: 1.5rem; text-align: center; }
        
        .full-width-banner { background: linear-gradient(135deg, var(--famissio-red), var(--famissio-orange)); padding: 50px 0; display: flex; justify-content: center; align-items: center; margin-top: 40px; position: relative; }
        .full-width-banner h2 { position: relative; z-index: 2; color: var(--text-light); text-shadow: none; }
        
        .profile-card { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 50px; }
        .profile-card img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 5px solid var(--famissio-orange); box-shadow: 0 5px 15px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .profile-card h2 { font-family: 'Playfair Display', serif; text-transform: none; letter-spacing: normal; font-size: 3rem; margin: 0; }
        
        .priest-pillars { display: grid; gap: 30px; margin-top: 40px; max-width: 1200px; }
        @media (min-width: 768px) { .priest-pillars { grid-template-columns: repeat(2, 1fr); } .priest-pillars .pillar-item:nth-child(1) { grid-area: 1 / 1 / 2 / 3; width: 100%; } .priest-pillars .pillar-item:nth-child(2) { grid-area: 2 / 1 / 3 / 2; width: 100%; } .priest-pillars .pillar-item:nth-child(3) { grid-area: 2 / 2 / 3 / 3; } }
        .pillar-item { background-color: var(--bg-light); color: #333; padding: 30px; border-radius: 10px; text-align: left; box-shadow: 0 5px 20px rgba(0,0,0,0.1); height: 100%; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; }
        .pillar-item h4 { color: var(--famissio-orange); font-size: 1.8rem; text-align: center; margin-bottom: 20px; margin-top: 0; font-family: 'Playfair Display', serif; }
        .pillar-item h4 .icon-wrap { display: block; margin-bottom: 15px; width: 40px; height: 40px; margin-left: auto; margin-right: auto; color: var(--famissio-red); }
        .pillar-item p { font-size: 1.1rem; text-align: justify; width: 100%; }
        
        .mobile-pillars-nav { display: none; }
        .pillars-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); z-index: 99999; align-items: center; justify-content: center; flex-direction: column; }
        .pillars-modal.active { display: flex; }
        
        .carousel-container { width: 95%; max-width: 500px; overflow: hidden; position: relative; }
        .carousel-track { display: flex; transition: transform 0.3s ease-out; width: 100%; }
        .carousel-slide { min-width: 100%; box-sizing: border-box; padding: 10px; }
        
        .mobile-card { background-color: var(--bg-light); padding: 20px 15px; border-radius: 12px; text-align: center; box-shadow: 0 0 25px rgba(244, 106, 7, 0.4); max-height: 85vh; overflow-y: auto; }
        .mobile-card h4 { color: var(--famissio-orange); font-size: 1.4rem; margin-bottom: 15px; display: flex; flex-direction: column; align-items: center; gap: 10px; line-height: 1.1; }
        .mobile-card h4 svg { width: 30px; height: 30px; color: var(--famissio-red); }
        .mobile-card p { text-align: justify; font-size: 0.9rem; line-height: 1.45; color: var(--text-dark); margin: 0; }
        
        .carousel-dots { display: flex; gap: 12px; margin-top: 15px; }
        .dot { width: 12px; height: 12px; background-color: rgba(255,255,255,0.4); border-radius: 50%; transition: background-color 0.3s; cursor: pointer; }
        .dot.active { background-color: var(--famissio-orange); transform: scale(1.2); }
        .close-modal-btn { position: absolute; top: 15px; right: 15px; background: rgba(255, 255, 255, 0.2); border: 1px solid white; border-radius: 50%; width: 40px; height: 40px; color: white; font-size: 1.5rem; cursor: pointer; z-index: 100000; display: flex; align-items: center; justify-content: center; }
        
        .pope-message { background-color: var(--bg-grey-light); padding: 60px 0; }
        .pope-points { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 1100px; margin: 40px auto 0 auto; }
        .pope-points .point-item:last-child { grid-column: 1 / -1; }
        .pope-points .point-item { background-color: var(--bg-light); padding: 20px; border-left: 5px solid var(--famissio-orange); border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); text-align: left; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .pope-points .point-item:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .pope-points .point-item h4 { color: var(--famissio-red); margin-top: 0; font-size: 1.2rem; text-transform: uppercase; text-align: left; margin-bottom: 10px; }
        .pope-points .point-item p { margin: 0; margin-top: 5px; font-style: normal; text-align: justify; font-size: 0.95rem; }
        
        h3.pope-question { font-size: 1.6rem; color: var(--famissio-red); font-weight: 700; text-align: center; font-family: 'Open Sans', sans-serif; text-transform: uppercase; }
        .pope-final-text { font-style: normal; text-align: justify; padding: 0; max-width: none; margin: 20px auto 0 auto; font-size: 1.1rem; }
        .pope-final-text footer { margin-top: 15px; font-style: normal; font-weight: 600; color: var(--famissio-red); display: block; text-align: right; }
        
        .prayer-section { text-align: center; padding: 30px 0; background-color: var(--bg-prayer); color: var(--text-dark); }
        .prayer-logo { width: 120px; height: 120px; object-fit: contain; border-radius: 50%; border: 6px solid var(--famissio-orange); background-color: var(--bg-light); margin: 0 auto 30px auto; display: block; box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
        .prayer-section .prayer-text { color: var(--text-dark); max-width: 600px; margin: 20px auto 20px auto; font-size: 1.2rem; }
        .prayer-button { display: inline-block; background-color: var(--famissio-red); color: var(--text-light); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-size: 1.3rem; font-weight: 600; margin-top: 20px; transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
        .prayer-button:hover { background-color: var(--famissio-orange); }

        /* Responsive Design */
        @media (max-width: 767px) { 
            .priest-pillars { display: none; }
            .mobile-pillars-nav { display: flex; justify-content: center; gap: 15px; margin-top: 30px; margin-bottom: 20px; }
            .mobile-icon-btn { width: 75px; height: 75px; background-color: var(--bg-light); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); cursor: pointer; border: 2px solid var(--famissio-orange); transition: transform 0.2s; -webkit-tap-highlight-color: transparent; }
            .mobile-icon-btn:active { transform: scale(0.95); background-color: #ffe6db; }
            .mobile-icon-btn svg { width: 26px; height: 26px; color: var(--famissio-red); margin-bottom: 2px; }
            .mobile-icon-btn span { font-size: 0.65rem; font-weight: 700; color: var(--famissio-orange); text-transform: uppercase; }
            .pope-points { display: flex; flex-direction: column; }
            .pope-points .point-item { width: auto; }
            .feature-card h3 { white-space: normal; }
        }
      `}</style>

            <div className="home-container">
                <section className="section-light">
                    <div className="container">
                        <h2>La genèse de Famissio</h2>
                        <div className="text-block text-justify">
                            <p>À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde.
                                Au retour, elle a voulu poursuivre la mission mais cette fois-ci en restant en France et pour accompagner des curés de paroisses rurales.
                                Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle paroisse du père Jean-Pierre Barrière dans la Creuse.
                                Cette semaine les a tous beaucoup nourris et remplis de joie puis confirmés dans cette intuition initiale.
                                Famissio est alors née. Le père Jean-Pierre en devenait l'aumônier.
                                Monseigneur Bozo acceptait de suivre cette initiative.</p>
                        </div>
                    </div>
                </section>

                <section className="section-dark">
                    <div className="container">
                        <h2>Qui sommes-nous ?</h2>
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
                                <div className="card-icon">
                                    <IconEye style={{ width: '100%', height: '100%' }} />
                                </div>
                                <h3>Que faisons-nous ?</h3>
                                <p>Nous nous mettons au service de paroisses pour mener avec elles une mission.
                                    Nous arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses d'un même diocèse.</p>
                            </div>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <IconCalendar style={{ width: '100%', height: '100%' }} />
                                </div>
                                <h3>Préparation</h3>
                                <p>La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de missionnaires qui se retrouvent régulièrement par visioconférences.
                                    Main dans la main, ils élaborent alors le programme de la mission, préparent ensemble ses différents temps et créent des liens fraternels entre eux.</p>
                            </div>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <IconPin style={{ width: '100%', height: '100%' }} />
                                </div>
                                <h3>Où allons-nous ?</h3>
                                <p>Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous
                                    envoie en mission, en accord avec le diocèse local. Nous nous adaptons aux besoins spécifiques de chaque communauté.</p>
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
                                <p>Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de la paroisse qui nous accueille.
                                    Une communauté dynamique prête à servir !</p>

                                <h3>Missionnaires à partir de quel âge ?</h3>
                                <p><strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et toucher les cœurs.
                                    Ils nous évangélisent !! </p>

                                <blockquote>
                                    "Aujourd’hui, ce n’est pas seulement par-delà les océans qu’il faut propager la bonne parole, mais aussi dans nos villes et villages. Comme nous avons besoin de grands missionnaires ! Mais qui peut
                                    réveiller l’ardeur d’une chrétienté endormie ? Les grands missionnaires que nous désirons tant je crois que ce sont les enfants. Car évangéliser ce n’est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère... Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon quart d’heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors qu’il n’avait encore prononcé aucune parole, le petit Henri interrompt soudainement notre discussion « de grands » pour proposer à cet homme de prier pour lui : cette simple parole l’a bouleversé,
                                    et il lui a demandé avec le plus grand sérieux de prier pour son âme ! Ou d'Athanase qui avait ému une aïeule aux larmes après l’avoir bénie d'une croix sur le front alors qu'elle venait de refuser tout échange.
                                    Donner la chance aux personnes qui ne connaissent pas Dieu de recevoir des enfants un sourire, une parole d’encouragement, une prière, c’est leur offrir le Christ.
                                    Alors chers parents, guidez vos enfants vers la mission !
                                    Ils mèneront beaucoup d’âmes vers le Père…"
                                    <footer>— Pierre-Alexandre Ludwig</footer>

                                    <p style={{ marginTop: '25px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px', textAlign: 'justify' }}>
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

                        <h3 style={{ marginTop: '60px' }}>Le programme d'une mission</h3>
                        <div className="video-wrapper">
                            <iframe src="https://www.youtube.com/embed/ZnW9oGHpAyQ" title="Programme d'une mission d'évangélisation Famissio" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '1.3rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--famissio-orange)', marginTop: 0, marginBottom: 0, textAlign: 'center' }}>Aumônier de Famissio</p>
                        </div>

                        <h3 className="section-subtitle" style={{ textAlign: 'left', maxWidth: 'none', marginLeft: 0, marginRight: 0 }}>L'APPEL DU CHRIST ET LA VOCATION À L'ÉVANGÉLISATION</h3>

                        <div className="text-justify" style={{ paddingTop: 0 }}>
                            <p>Depuis le jour de notre baptême nous sommes devenus enfants bien-aimés du Père, frères et sœurs de Jésus Christ. Nous avons reçu la grâce d'être et de devenir, jour après jour, des autres Christ: "Alter Christus". Nous ne pouvons que remercier nos parents de nous
                                avoir donné ce Trésor inestimable qu'est le sacrement de baptême. Par ce sacrement nous participons à la dignité même du Christ: celle de Prêtre, Prophète et Roi. C'est l'onction du Saint Chrême qui nous invite à vivre cette mission dans toute notre vie: personnelle, familiale, scolaire, professionnelle... Nous savons que Seul le Christ est Prêtre, Prophète et Roi. Il est la tête et nous sommes son Corps. Si la Tête participe à cette mission alors tout le corps doit en faire autant. Quelle belle mission pour chaque baptisé !</p>

                            <p>Mais regardons d'un peu plus près ce que cela signifie:</p>
                        </div>

                        {/* MENU MOBILE 3 ICÔNES */}
                        <div className="mobile-pillars-nav">
                            <div className="mobile-icon-btn" onClick={() => openModalAt(0)}>
                                <IconChurch />
                                <span>Prêtre</span>
                            </div>
                            <div className="mobile-icon-btn" onClick={() => openModalAt(1)}>
                                <IconBullhorn />
                                <span>Prophète</span>
                            </div>
                            <div className="mobile-icon-btn" onClick={() => openModalAt(2)}>
                                <IconCrown />
                                <span>Roi</span>
                            </div>
                        </div>

                        {/* GRILLE DESKTOP */}
                        <div className="priest-pillars">
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconChurch /></span> Je suis Prêtre</h4>
                                <p>Seul Jésus est le "grand prêtre par Excellence" (He 4, 14) comme nous le dit l'auteur de la Lettre aux Hébreux.
                                    Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent.
                                    Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.</p>
                            </div>
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconBullhorn /></span> Je suis Prophète</h4>
                                <p>Le prophète est, étymologiquement, le "porte-parole"
                                    de Dieu. Comme je participe à cette dignité, je suis, moi aussi, un prophète, un homme ou une femme jeune ou moins jeune qui dit, annonce et vit la Parole.
                                    Nous sommes des prophètes de bonheur et non de malheur.
                                    Nous annonçons la Bonne nouvelle, "toujours nouvelle" à nos frères et soeurs en humanité.
                                    Nous leur annonçons que cette Parole est vivante et agissante dans notre vie quotidienne.
                                    Nous ne pouvons pas garder ce trésor pour nous. Notre mission est de l'annoncer.
                                    Pour cela il nous faut être en intimité avec Jésus.
                                    Si nous sommes reliés à Lui, alors nous pourrons dire ce qui nous fait vivre, ce qui nous donne une colonne vertébrale solide que rien ni personne ne pourra nous enlever.</p>
                            </div>
                            <div className="pillar-item">
                                <h4><span className="icon-wrap"><IconCrown /></span> Je suis Roi</h4>
                                <p>Attention à cette fonction car être roi pour un baptisé, qui a revêtu le Christ, c'est être au service.
                                    "Qui es-tu Roi d'humilité, roi sans palais, roi sans armée...".
                                    La fonction royale des baptisés consiste à mettre en oeuvre le commandement ou le sacrement du frère comme Jésus a pu le faire lors du lavement des pieds (Jn 13, 1-15).
                                    Il y a tant de façons d'être au service de ses frères et soeurs que nous sommes invités à regarder autour de nous et discerner ce que nous devons faire.
                                    Soyons inventifs, créatifs dans le service du frère. L'appel du Christ nous presse.
                                    Il nous envoie en mission tout en sachant que c'est lui qui nous précède.
                                    Notre vocation est de témoigner de la vie même du Christ.
                                    Nous sommes ses yeux, nous sommes ses oreilles, nous sommes ses mains.
                                    Rendons grâce à Dieu de nous avoir choisi comme ses témoins.</p>
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
                                <p>“Église en sortie” n’est pas une expression à la mode.
                                    Elle est un commandement du Christ. Soit l’Église est en sortie, soit elle n’est pas l’Église.
                                    Si l’Église ne sort pas, elle se corrompt, se dénature.</p>
                            </div>
                            <div className="point-item">
                                <h4>2. SE LAISSER SURPRENDRE</h4>
                                <p>La mission n’est pas un projet d’entreprise bien rodé.
                                    Ce n’est même pas un spectacle organisé. L’Esprit saint agit comme il le veut, quand il le veut et où il le veut.</p>
                            </div>
                            <div className="point-item">
                                <h4>3. SE METTRE À L’ÉCOUTE</h4>
                                <p>La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l’on éprouve en présence des paroles de Jésus.</p>
                            </div>
                            <div className="point-item">
                                <h4>4. TÉMOIGNER ET NON DÉCLARER</h4>
                                <p>On n’est pas frappé si l’on rencontre quelqu’un qui circule en martelant ce qu’est le christianisme.
                                    On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.</p>
                            </div>
                            <div className="point-item">
                                <h4>5. ÉLOGE DE LA TENDRESSE</h4>
                                <p>Annoncer l’Évangile ne consiste pas à assiéger les autres de discours.
                                    Lancer des vérités comme des pierres, c’est le signe que les paroles se sont transformées en idéologie.</p>
                            </div>
                            <div className="point-item">
                                <h4>6. LE CONTACT HUMAIN</h4>
                                <p>La mission est un contact humain, elle est le témoignage d’hommes et de femmes qui disent à leurs compagnons de voyage : “Je connais Jésus, je voudrais te le faire connaître”.</p>
                            </div>
                            <div className="point-item">
                                <h4>7. HABITER LE TEMPS</h4>
                                <p>Pour suivre Jésus et annoncer l’Évangile, il faut aussi “se poser”, demeurer dans les lieux et les situations où le Seigneur nous conduit.
                                    Sinon la mission peut devenir un prétexte pour faire du tourisme spirituel déguisé en apostolat.
                                    Il ne s'agit pas de faire de l’animation missionnaire comme un métier, mais de vivre avec les autres, de les suivre pas à pas, de demander à les accompagner en apprenant à cheminer à leur rythme.</p>
                            </div>
                        </div>

                        <h3 className="pope-question" style={{ marginTop: '60px' }}>Que puis-je faire en tant que jeune pour mon église ?</h3>

                        <p className="pope-final-text">
                            Chers jeunes, je veux de la pagaille dans les diocèses !
                            Je veux que vous alliez à l’extérieur ! Je veux que l’Église sorte dans les rues !
                            Je veux que nous nous gardions de tout ce qui est mondanité, installation, de tout confort, de tout cléricalisme, de toute fermeture sur nous-mêmes.
                            Les paroisses, les écoles, les institutions, sont appelés à sortir !
                            S’ils ne sortent pas, ils deviennent une ONG et l’Église ne peut pas être une ONG.
                            <br /><br />
                            Que les évêques et les curés me pardonnent, si ensuite quelqu’un met la pagaille, mais c’est un conseil… merci pour ce que vous pouvez faire.
                            N'oubliez pas, mettez la pagaille !
                        </p>
                    </div>
                </section>

                <section className="prayer-section" style={{ backgroundColor: 'var(--bg-prayer)' }}>
                    <div className="container">
                        <img src="https://www.dropbox.com/scl/fi/ozdvwu2oguqbfpnqb13md/image-fi36533979x60.png?rlkey=dhv7afow6nxnv2ni0qx5hkssm&st=5a3ep07c&raw=1" alt="Logo Prière Famissio" className="prayer-logo" />
                        <h2>Prière du Famissionnaire</h2>

                        <p className="prayer-text">Découvrez la prière qui nous accompagne et nous inspire au quotidien dans notre mission.</p>

                        <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" rel="noreferrer" className="prayer-button">
                            Accéder à la prière (paroles, audio & partition)
                        </a>
                    </div>
                </section>

                {/* STRUCTURE DU MODAL (CARROUSEL MOBILE) */}
                <div className={`pillars-modal ${isModalOpen ? 'active' : ''}`}>
                    <button className="close-modal-btn" onClick={closeModal}>×</button>

                    <div
                        className="carousel-container"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                            {/* Slide 1: Prêtre */}
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconChurch /> Je suis Prêtre</h4>
                                    <p>Seul Jésus est le "grand prêtre par Excellence" (He 4, 14) comme nous le dit l'auteur de la Lettre aux Hébreux.
                                        Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent.
                                        Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.</p>
                                </div>
                            </div>

                            {/* Slide 2: Prophète */}
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconBullhorn /> Je suis Prophète</h4>
                                    <p>Le prophète est, étymologiquement, le "porte-parole" de Dieu.
                                        Comme je participe à cette dignité, je suis, moi aussi, un prophète, un homme ou une femme jeune ou moins jeune qui dit, annonce et vit la Parole.
                                        Nous sommes des prophètes de bonheur et non de malheur.
                                        Nous annonçons la Bonne nouvelle, "toujours nouvelle" à nos frères et soeurs en humanité.
                                        Nous leur annonçons que cette Parole est vivante et agissante dans notre vie quotidienne.
                                        Nous ne pouvons pas garder ce trésor pour nous. Notre mission est de l'annoncer.
                                        Pour cela il nous faut être en intimité avec Jésus.
                                        Si nous sommes reliés à Lui, alors nous pourrons dire ce qui nous fait vivre, ce qui nous donne une colonne vertébrale solide que rien ni personne ne pourra nous enlever.</p>
                                </div>
                            </div>

                            {/* Slide 3: Roi */}
                            <div className="carousel-slide">
                                <div className="mobile-card">
                                    <h4><IconCrown /> Je suis Roi</h4>
                                    <p>Attention à cette fonction car être roi pour un baptisé, qui a revêtu le Christ, c'est être au service.
                                        "Qui es-tu Roi d'humilité, roi sans palais, roi sans armée...".
                                        La fonction royale des baptisés consiste à mettre en oeuvre le commandement ou le sacrement du frère comme Jésus a pu le faire lors du lavement des pieds (Jn 13, 1-15).
                                        Il y a tant de façons d'être au service de ses frères et soeurs que nous sommes invités à regarder autour de nous et discerner ce que nous devons faire.
                                        Soyons inventifs, créatifs dans le service du frère. L'appel du Christ nous presse.
                                        Il nous envoie en mission tout en sachant que c'est lui qui nous précède.
                                        Notre vocation est de témoigner de la vie même du Christ.
                                        Nous sommes ses yeux, nous sommes ses oreilles, nous sommes ses mains.
                                        Rendons grâce à Dieu de nous avoir choisi comme ses témoins.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-dots">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`dot ${currentSlide === i ? 'active' : ''}`}
                                onClick={() => goToSlide(i)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}