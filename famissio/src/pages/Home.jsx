import React, { useEffect } from 'react';

const Home = () => {
    // Inject FontAwesome and Google Fonts dynamically to ensure they are available
    useEffect(() => {
        const linkABC = document.createElement("link");
        linkABC.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
        linkABC.rel = "stylesheet";
        document.head.appendChild(linkABC);

        const linkFonts = document.createElement("link");
        linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Inter:wght@400;500;600;700;800&display=swap";
        linkFonts.rel = "stylesheet";
        document.head.appendChild(linkFonts);

        return () => {
            // Optional cleanup
            document.head.removeChild(linkABC);
            document.head.removeChild(linkFonts);
        }
    }, []);

    return (
        <div className="home-container">
            <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --flame: #c82904;
            --ember: #f46a07;
            --coral: #ff8b6b;
            --cream: #fff8f4;
            --charcoal: #1a1a1a;
            --off-white-warm: #faf7f5;
            
            /* Variables pour la section Pape */
            --spacing-sm: 16px;
            --spacing-md: 24px;
            --spacing-lg: 48px;
            --spacing-xl: 80px;
        }
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; color: var(--charcoal); line-height: 1.7; overflow-x: hidden; }

        /* HERO */
        .hero { 
            height: 100vh; /* Plein écran strict */
            display: grid; 
            grid-template-columns: 1.3fr 1fr; 
            position: relative; 
            overflow: hidden; /* Coupe ce qui dépasse pour éviter le scroll */
            background: white; /* Fond blanc pour la partie droite */
        }
        
        .hero-left { 
            background: linear-gradient(135deg, var(--flame), var(--ember)); 
            padding: 0 8%; 
            display: flex; 
            align-items: center; 
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%); 
            position: relative; 
            height: 100%;
            z-index: 2; /* Au-dessus de la droite pour le clip-path */
        }
        .hero-left::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23fff' opacity='0.04'/%3E%3C/svg%3E"); }
        
        .hero-content { position: relative; z-index: 2; color: white; width: 100%; }
        
        .badge { display: none; }
        
        /* Titre Hero */
        .hero h1 { 
            font-family: 'Playfair Display', serif;
            font-size: 8.5vw; 
            font-weight: 900; 
            line-height: 0.85; 
            margin-bottom: 30px; 
            letter-spacing: -3px;
        }
        
        .underline { 
            width: 120px; 
            height: 5px; 
            background: white; 
            border-radius: 3px; 
            margin: 25px 0 40px; 
            position: relative; 
            overflow: hidden; 
        }
        .underline::after { 
            content: ''; 
            position: absolute; 
            width: 40%; 
            height: 100%; 
            background: #d4af37; 
            left: 0; 
        }
        
        .hero p { 
            font-size: 1.35rem;
            line-height: 1.6; 
            opacity: 0.95; 
            margin-bottom: 50px; 
            max-width: 850px;
            font-weight: 300;
            text-align: left;
        }
        
        .cta {
            display: flex; 
            align-items: center;
            justify-content: space-between;
            width: 90%; 
            max-width: 900px; 
            color: white;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            padding: 16px 0;
            border-bottom: 3px solid white;
            transition: padding-left 0.3s;
        }
        
        .cta span { display: flex; align-items: center; gap: 12px; }
        .cta:hover span { gap: 20px; transition: gap 0.3s; }
        
        .hero-right { 
            position: relative; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            padding: 5%; 
            height: 100%;
            /* Remonte le contenu globalement comme demandé */
            margin-top: -40px; 
        }
        
        .image-blob { 
            width: 80%; 
            height: 70%; 
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%; 
            overflow: hidden; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.3); 
            animation: morph 10s ease-in-out infinite; 
        }
        @keyframes morph { 0%, 100% { border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%; } 50% { border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%; } }
        .image-blob img { width: 100%; height: 100%; object-fit: cover; }
        
        .float-stat { 
            position: absolute; 
            background: white; 
            padding: 15px 30px; /* Padding latéral augmenté pour la longueur */
            border-radius: 20px; 
            box-shadow: 0 20px 50px rgba(0,0,0,0.15); 
            font-weight: 700; 
            font-size: 0.95rem; 
            animation: float 4s ease-in-out infinite; 
            min-width: 180px; /* Force un peu la longueur */
            text-align: center;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        
        /* POSITIONS DES BULLES */
        .float-stat:nth-child(2) { top: 18%; right: 5%; color: var(--ember); animation-delay: 0s; }
        .float-stat:nth-child(3) { bottom: 20%; right: 8%; color: var(--flame); animation-delay: -2s; }
        
        /* Bulle Disciples: Remontée un peu et décalée gauche */
        .float-stat:nth-child(4) { 
            bottom: 25%; /* Remontée (était 10-15%) */
            left: -2%;   /* Légèrement à gauche */
            color: var(--coral); 
            animation-delay: -1s; 
        }

        /* SECTIONS GENERAL */
        section { padding: 120px 5%; position: relative; }
        .section-cream { background: var(--cream); }
        
        /* REPRISE EXACTE DU SCRIPT 1 POUR LES TITRES (Correction bug) */
        .section-head { 
            text-align: center; 
            margin-bottom: 80px; 
        }
        
        .eyebrow { 
            font-size: 0.85rem; 
            font-weight: 800; 
            color: var(--ember); 
            text-transform: uppercase; 
            letter-spacing: 3px; 
            margin-bottom: 15px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 15px; 
        }
        .eyebrow::before, .eyebrow::after { content: ''; width: 40px; height: 2px; background: var(--ember); }
        
        .title { 
            font-family: 'Playfair Display', serif; 
            font-size: clamp(2.5rem, 5vw, 4.5rem); 
            font-weight: 700; 
            color: var(--charcoal); 
            margin-bottom: 20px; 
            line-height: 1.15; 
        }
        
        .subtitle { 
            font-size: 1.2rem; 
            color: #666; 
            max-width: 700px; 
            margin: 0 auto; 
        }

        /* Justification des textes */
        .story-text p, .team-content p, .mission-card p, .pope-item p, .priest-description p, .pillar-box p {
            text-align: justify;
        }

        /* DIAGONAL STORY */
        .diagonal { 
            background: #f8f9fa; 
            clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%); 
            margin: 80px 0; 
            padding: 150px 5%; 
            position: relative; 
            z-index: 1; /* Assure que le clip-path fonctionne bien par dessus le fond */
        }
        .story-grid { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center; }
        .image-wrap { position: relative; height: 600px; }
        .main-img { position: absolute; width: 90%; height: 90%; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.2); }
        .main-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .main-img:hover img { transform: scale(1.08); }
        .accent-shape { position: absolute; width: 45%; height: 45%; background: linear-gradient(135deg, var(--ember), var(--coral)); border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%; bottom: 0; right: 0; opacity: 0.12; z-index: -1; }
        .story-text p { font-size: 1.1rem; line-height: 1.9; color: #444; margin-bottom: 25px; }
        .story-text p:first-of-type::first-letter { font-family: 'Playfair Display', serif; font-size: 4.5rem; font-weight: 700; color: var(--flame); float: left; line-height: 1; margin: -10px 15px 0 0; }
        .highlight-box { background: linear-gradient(135deg, var(--cream), #fff); padding: 35px; border-radius: 25px; border-left: 5px solid var(--ember); margin-top: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); }

        /* VIDEO */
        .video-section { background: linear-gradient(135deg, #0f0f0f, #1a1a2e); position: relative; }
        .video-frame { max-width: 1200px; margin: 0 auto; padding: 40px; background: rgba(255,255,255,0.03); border-radius: 40px; border: 1px solid rgba(255,255,255,0.08); }
        .video-box { position: relative; padding-bottom: 56.25%; border-radius: 20px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.6); }
        .video-box iframe { position: absolute; inset: 0; width: 100%; height: 100%; }

        /* SECTION MISSION */
        .mission-cards {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        
        .mission-card {
            background: white;
            padding: 50px 40px;
            border-radius: 30px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.5s;
            position: relative;
            overflow: hidden;
        }
        
        .mission-card::before { display: none; }
        
        .mission-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 30px 80px rgba(0,0,0,0.15);
        }
        
        .mission-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto 30px;
            background: linear-gradient(135deg, var(--flame), var(--ember));
            border-radius: 35% 65% 60% 40% / 55% 45% 55% 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            animation: morphIcon 8s ease-in-out infinite;
            transition: transform 0.4s;
        }
        
        @keyframes morphIcon {
            0%, 100% { border-radius: 35% 65% 60% 40% / 55% 45% 55% 45%; }
            50% { border-radius: 65% 35% 40% 60% / 45% 55% 45% 55%; }
        }
        
        /* Animation Icône sur le côté */
        .mission-card:hover .mission-icon {
            transform: scale(1.15) rotate(20deg) translateX(15px);
        }
        
        .mission-card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            color: var(--flame);
            margin-bottom: 20px;
            font-weight: 700;
        }
        
        .mission-card p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #555;
            text-align: justify;
        }

        /* SECTION ÉQUIPE MISSIONNAIRE */
        .team-section { background: white; }
        .team-layout { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 500px 1fr; gap: 60px; align-items: start; }
        .team-image-box { position: sticky; top: 50px; }
        .team-image { width: 100%; height: 600px; border-radius: 35px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.2); margin-bottom: 30px; }
        
        .team-image img { 
            width: 100%; height: 100%; object-fit: cover; 
            object-position: 25% center; 
            transition: transform 0.6s;
        }
        .team-image:hover img { transform: scale(1.08); }
        
        .team-content h3 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--flame); margin-bottom: 20px; font-weight: 700; }
        .team-content p { font-size: 1.05rem; line-height: 1.7; color: #555; margin-bottom: 25px; }
        .quote-box { background: linear-gradient(135deg, var(--cream), #fff); padding: 40px; border-radius: 30px; margin: 30px 0; position: relative; border: 2px solid rgba(248,106,7,0.1); box-shadow: 0 15px 50px rgba(0,0,0,0.05); }
        .quote-box p { font-style: italic; color: #333; margin-top: 20px; }
        .quote-author { margin-top: 20px; font-weight: 700; color: var(--flame); font-style: normal; text-align: right; }

        /* MASONRY */
        .masonry { max-width: 1400px; margin: 0 auto; columns: 3; column-gap: 25px; }
        .mas-item {
            break-inside: avoid;
            margin-bottom: 25px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            position: relative;
            cursor: pointer;
            transition: all 0.4s;
        }
        .mas-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        .mas-item img {
            width: 100%;
            display: block;
            transition: transform 0.6s;
        }
        .mas-item:hover img {
            transform: scale(1.1);
        }
        .mas-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 30px;
            background: rgba(0,0,0,0.85);
            color: white;
            transform: translateY(100%);
            transition: transform 0.4s;
        }
        .mas-item:hover .mas-overlay {
            transform: translateY(0);
        }
        .mas-overlay h4 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        /* BANNER */
        .banner { background: linear-gradient(135deg, var(--flame), var(--ember), var(--coral)); padding: 100px 5%; text-align: center; color: white; position: relative; overflow: hidden; }
        .geo { position: absolute; border: 2px solid rgba(255,255,255,0.1); animation: spin 25s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .geo:nth-child(1) { width: 300px; height: 300px; border-radius: 50%; top: 10%; left: 5%; }
        .geo:nth-child(2) { width: 200px; height: 200px; top: 50%; right: 10%; animation-duration: 30s; }
        .banner h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 5rem); font-weight: 900; text-shadow: 3px 3px 20px rgba(0,0,0,0.3); position: relative; z-index: 2; }

        /* SECTION PÈRE JEAN-PIERRE */
        .priest-dual {
            padding: 150px 10%;
            background: var(--off-white-warm);
        }
        .priest-intro-flex {
            display: flex;
            gap: 80px;
            max-width: 1200px;
            margin: 0 auto 100px;
            align-items: center;
        }
        .priest-circle-img {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            object-fit: cover;
            border: 8px solid white;
            box-shadow: 0 25px 70px rgba(0,0,0,0.2);
            flex-shrink: 0;
        }
        .priest-name-zone h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            color: var(--flame);
            font-weight: 900;
            margin-bottom: 15px;
        }
        .priest-name-zone p {
            font-size: 1.4rem;
            color: var(--ember);
            font-weight: 600;
            font-style: italic;
        }
        .priest-description {
            max-width: 1000px;
            margin: 0 auto 100px;
            text-align: center;
        }
        .priest-description h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            color: var(--charcoal);
            margin-bottom: 30px;
            font-weight: 700;
        }
        .priest-description p {
            font-size: 1.2rem;
            line-height: 2;
            color: #555;
        }
        .pillars-three {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 50px;
            max-width: 1300px;
            margin: 0 auto;
        }
        .pillar-box {
            background: white;
            padding: 60px 45px;
            border-top: 8px solid var(--ember);
            transition: all 0.4s;
        }
        .pillar-box:hover {
            transform: translateY(-20px) scale(1.03);
            box-shadow: 0 40px 90px rgba(0,0,0,0.15);
        }
        .pillar-emoji {
            font-size: 4rem;
            margin-bottom: 30px;
            display: block;
        }
        .pillar-box h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: var(--flame);
            margin-bottom: 25px;
            font-weight: 700;
        }
        .pillar-box p {
            font-size: 1.05rem;
            line-height: 2;
            color: #666;
        }

        /* SECTION PAPE */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        
        .pope-intro {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
        }
        .pope-image {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--ember);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .pope-intro h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            color: var(--flame);
            font-weight: 700;
        }
        
        /* Titre Section Pape (centré et petit) */
        .rosé-header {
            text-align: center;
            margin-bottom: var(--spacing-xl);
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* Titre spécifique au Pape pour qu'il soit "plus petit" comme demandé */
        .rosé-header .title {
            font-size: 3rem;
        }
        
        .pope-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-xl);
        }
        .pope-item {
            background: white;
            padding: var(--spacing-lg);
            border-radius: 16px;
            border-left: 4px solid var(--ember);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
            transition: all 0.3s;
        }
        .pope-item:hover {
            transform: translateX(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .pope-item h4 {
            font-size: 1.1rem;
            color: var(--flame);
            margin-bottom: var(--spacing-sm);
            font-weight: 700;
            text-transform: uppercase;
        }
        .pope-item p {
            font-size: 0.98rem;
            line-height: 1.7;
            color: #555;
        }
        
        .pope-message-box {
            background: linear-gradient(135deg, var(--cream), white);
            padding: var(--spacing-xl);
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }
        .pope-message-box h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            color: var(--flame);
            text-align: center;
            margin-bottom: var(--spacing-md);
            font-weight: 700;
        }
        .pope-message-box p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: var(--spacing-sm);
        }

        /* PRAYER SECTION */
        .prayer { background: linear-gradient(135deg, var(--flame), var(--ember)); text-align: center; color: white; position: relative; overflow: hidden; padding: 60px 5%; }
        .prayer-logo { 
            width: 160px; height: 160px; margin: 0 auto 40px; background: white; 
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
            animation: morph 8s ease-in-out infinite;
            display: flex; align-items: center; justify-content: center; 
            box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative; overflow: hidden;
        }
        .prayer-logo img { width: 70%; height: 70%; object-fit: contain; transform: scale(1.35); }
        .prayer h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 25px; font-weight: 700; }
        .prayer p { font-size: 1.3rem; opacity: 0.95; margin-bottom: 45px; }
        .prayer-cta {
            display: inline-flex; align-items: center; gap: 12px; color: white; text-decoration: none; font-weight: 700; font-size: 1.2rem; padding: 18px 0; border-bottom: 3px solid white; transition: gap 0.3s;
        }
        .prayer-cta:hover { gap: 20px; }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
            .hero { grid-template-columns: 1fr; }
            .hero-left { clip-path: none; padding: 80px 5%; }
            .hero-right { display: none; }
            .story-grid { grid-template-columns: 1fr; gap: 60px; }
            .mission-cards { grid-template-columns: repeat(2, 1fr); }
            .team-layout { grid-template-columns: 1fr; }
            .pope-grid { grid-template-columns: 1fr; }
            .pillars-three { grid-template-columns: 1fr; }
            .masonry { columns: 2; }
            .priest-intro-flex { flex-direction: column; text-align: center; }
        }
        @media (max-width: 768px) {
            .diagonal { clip-path: none; padding: 80px 5%; }
            .mission-cards { grid-template-columns: 1fr; }
            .masonry { columns: 1; }
        }
        `}</style>

            <div className="hero">
                <div className="hero-left">
                    <div className="hero-content">
                        <div className="badge">Mission • Foi • Famille</div>
                        <h1>Famissio</h1>

                        <div className="underline"></div>

                        <p>Des familles missionnaires au service des paroisses rurales de France, pour entourer le prêtre et donner un élan missionnaire.</p>

                        <a href="https://famissio-99.webself.net/nomissions" className="cta">
                            <span>Découvrir nos missions <i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="image-blob">
                        <img src="https://wsrv.nl/?url=https://www.dropbox.com/scl/fi/w2giupgix5rjmf8k97485/Famissio-252.jpg%3Frlkey=t9adnjqx59rmrid5540asx2cw%26st=41ucuw6p%26raw=1&w=1000&output=webp" alt="Équipe Famissio" />
                    </div>
                    <div className="float-stat"><i className="fas fa-users"></i> Aventure familiale</div>
                    <div className="float-stat"><i className="fas fa-heart"></i> Service des paroisses</div>
                    <div className="float-stat"><i className="fas fa-bible"></i> Disciples missionnaires</div>
                </div>
            </div>

            <div className="diagonal">
                <div className="section-head">
                    <div className="eyebrow">Notre Histoire</div>
                    <h2 className="title">Comment tout a commencé</h2>
                    <p className="subtitle">Une aventure familiale devenue mouvement missionnaire</p>
                </div>
                <div className="story-grid">
                    <div className="image-wrap">
                        <div className="main-img">
                            <img src="https://www.dropbox.com/scl/fi/1yhtq4m69r3azt0bwfhlr/facebook_1607379806212_6741839550715485834.jpg?rlkey=wphw7agzoatzbs9j5lrqucvnb&st=08zbyaix&raw=1" alt="Équipe" />
                        </div>
                        <div className="accent-shape"></div>
                    </div>
                    <div className="story-text">
                        <p>À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre la mission mais cette fois-ci en restant en France et pour accompagner des curés de paroisses rurales.</p>
                        <p>Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle paroisse du père Jean-Pierre Barrière dans la Creuse. Cette semaine les a tous beaucoup nourris et remplis de joie puis confirmés dans cette intuition initiale.</p>
                        <div className="highlight-box">
                            <p><strong>Famissio est alors née.</strong> Le père Jean-Pierre en devenait l'aumônier. Monseigneur Bozo acceptait de suivre cette initiative.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="video-section">
                <div className="section-head">
                    <div className="eyebrow" style={{ color: 'var(--ember)' }}>Découvrez-nous</div>
                    <h2 className="title" style={{ color: 'white' }}>Qui sommes-nous ?</h2>
                    <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Nous sommes des familles missionnaires venues de toute la France, accompagnées de consacrés</p>
                </div>
                <div className="video-frame">
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/bYFu-nvDDHI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section id="mission">
                <div className="section-head">
                    <div className="eyebrow">Notre Mission</div>
                    <h2 className="title">La mission en pratique</h2>
                </div>
                <div className="mission-cards">
                    <div className="mission-card">
                        <div className="mission-icon">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h3>Que faisons-nous ?</h3>
                        <p>Nous nous mettons au service de paroisses pour mener avec elles une mission. Nous arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses d'un même diocèse.</p>
                    </div>
                    <div className="mission-card">
                        <div className="mission-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3>Préparation</h3>
                        <p>La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de missionnaires qui se retrouvent régulièrement par visioconférences pour élaborer le programme ensemble.</p>
                    </div>
                    <div className="mission-card">
                        <div className="mission-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Où allons-nous ?</h3>
                        <p>Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous envoie en mission, en accord avec le diocèse local. Nous nous adaptons aux besoins de chaque communauté.</p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="section-head">
                    <div className="eyebrow">L'Équipe Missionnaire</div>
                    <h2 className="title">Missionnaires à tout âge</h2>
                </div>
                <div className="team-layout">
                    <div className="team-image-box">
                        <div className="team-image">
                            <img src="https://famissio-99.webself.net/file/si1759337/trrrrrrrzzzzzzzf%20(2)-fi36539933x520.jpg" alt="Équipe" />
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>À combien arrivons-nous ?</h3>
                        <p>Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de la paroisse qui nous accueille. Une communauté dynamique prête à servir !</p>

                        <h3>Missionnaires à partir de quel âge ?</h3>
                        <p><strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et toucher les cœurs. Ils nous évangélisent !!</p>

                        <div className="quote-box">
                            <p>"Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Comme nous avons besoin de grands missionnaires ! Les grands missionnaires que nous désirons tant je crois que ce sont les enfants. Car évangéliser ce n'est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère..."</p>
                            <div className="quote-author">— Pierre-Alexandre Ludwig</div>
                        </div>

                        <p style={{ fontStyle: 'italic', color: '#666' }}>«Les enfants sont transparents, ils ne calculent pas. À un monsieur qui expliquait ne pas croire, Raphaël, âgé de 12 ans, n'a cessé de répéter, inquiet : "Mais vous savez quand même que Dieu vous aime?"»</p>
                    </div>
                </div>
            </section>

            <section style={{ background: '#f8f9fa' }}>
                <div className="section-head">
                    <div className="eyebrow">En Action</div>
                    <h2 className="title">Une Mission Paroissiale</h2>
                </div>
                <div className="masonry">
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg" alt="Prière" />
                        <div className="mas-overlay">
                            <h4>Temps de prière</h4>
                        </div>
                    </div>
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG" alt="Évangélisation" />
                        <div className="mas-overlay">
                            <h4>Évangélisation</h4>
                        </div>
                    </div>
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG" alt="Veillée" />
                        <div className="mas-overlay">
                            <h4>Veillée</h4>
                        </div>
                    </div>
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG" alt="Cimetière" />
                        <div className="mas-overlay">
                            <h4>Bénédiction des cimetières</h4>
                        </div>
                    </div>
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG" alt="Familles" />
                        <div className="mas-overlay">
                            <h4>Journée des familles</h4>
                        </div>
                    </div>
                    <div className="mas-item">
                        <img src="https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG" alt="Envoi" />
                        <div className="mas-overlay">
                            <h4>Envoi en mission</h4>
                        </div>
                    </div>
                </div>
                <div className="section-head" style={{ marginTop: '80px' }}>
                    <h2 className="title">Le Programme</h2>
                </div>
                <div className="video-frame" style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px', background: 'white' }}>
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/ZnW9oGHpAyQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <div className="banner">
                <div className="geo"></div><div className="geo"></div>
                <h2>La mission nous presse !</h2>
            </div>

            <section className="priest-dual">
                <div className="priest-intro-flex">
                    <img src="https://famissio-99.webself.net/file/si1759337/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg" alt="Père Barrière" className="priest-circle-img" />
                    <div className="priest-name-zone">
                        <h2>Père Jean-Pierre Barrière</h2>
                        <p>Aumônier de Famissio</p>
                    </div>
                </div>

                <div className="priest-description">
                    <h3>L'appel du Christ et la vocation à l'évangélisation</h3>
                    <p>Depuis le jour de notre baptême nous sommes devenus enfants bien-aimés du Père. Par ce sacrement nous participons à la dignité même du Christ: celle de Prêtre, Prophète et Roi.</p>
                </div>

                <div className="pillars-three">
                    <div className="pillar-box">
                        <span className="pillar-emoji"><i className="fas fa-church"></i></span>
                        <h3>Je suis Prêtre</h3>
                        <p>Seul Jésus est le "grand prêtre par Excellence". Mais par notre baptême nous rendons vivant le sacerdoce du Christ. Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.</p>
                    </div>

                    <div className="pillar-box">
                        <span className="pillar-emoji"><i className="fas fa-bullhorn"></i></span>
                        <h3>Je suis Prophète</h3>
                        <p>Le prophète est le "porte-parole" de Dieu. Comme je participe à cette dignité, je suis un prophète qui annonce et vit la Parole. Nous annonçons la Bonne nouvelle à nos frères et sœurs en humanité.</p>
                    </div>

                    <div className="pillar-box">
                        <span className="pillar-emoji"><i className="fas fa-crown"></i></span>
                        <h3>Je suis Roi</h3>
                        <p>Être roi pour un baptisé, c'est être au service. La fonction royale des baptisés consiste à mettre en œuvre le commandement du frère comme Jésus a pu le faire lors du lavement des pieds.</p>
                    </div>
                </div>
            </section>

            <section className="section-cream">
                <div className="container">
                    <div className="pope-intro">
                        <img src="https://famissio-99.webself.net/file/si1759337/pape_10_0-fi27235959x470.jpg" alt="Pape François" className="pope-image" />
                        <h2>Pape François</h2>
                    </div>

                    <div className="rosé-header">
                        <h2 className="title">7 Points Clés pour la Mission</h2>
                    </div>

                    <div className="pope-grid">
                        <div className="pope-item">
                            <h4>1. Aller aux périphéries</h4>
                            <p>"Église en sortie" n'est pas une expression à la mode. Elle est un commandement du Christ. Soit l'Église est en sortie, soit elle n'est pas l'Église.</p>
                        </div>
                        <div className="pope-item">
                            <h4>2. Se laisser surprendre</h4>
                            <p>La mission n'est pas un projet d'entreprise bien rodé. L'Esprit saint agit comme il le veut, quand il le veut et où il le veut.</p>
                        </div>
                        <div className="pope-item">
                            <h4>3. Se mettre à l'écoute</h4>
                            <p>La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l'on éprouve en présence des paroles de Jésus.</p>
                        </div>
                        <div className="pope-item">
                            <h4>4. Témoigner et non déclarer</h4>
                            <p>On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.</p>
                        </div>
                        <div className="pope-item">
                            <h4>5. Éloge de la tendresse</h4>
                            <p>Annoncer l'Évangile ne consiste pas à assiéger les autres de discours. Lancer des vérités comme des pierres, c'est le signe que les paroles se sont transformées en idéologie.</p>
                        </div>
                        <div className="pope-item">
                            <h4>6. Le contact humain</h4>
                            <p>La mission est un contact humain, elle est le témoignage d'hommes et de femmes qui disent : "Je connais Jésus, je voudrais te le faire connaître".</p>
                        </div>
                    </div>

                    <div className="pope-message-box">
                        <h3>Que puis-je faire en tant que jeune pour mon église ?</h3>
                        <p>Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à l'extérieur ! Je veux que l'Église sorte dans les rues ! Les paroisses, les écoles, les institutions, sont appelés à sortir ! S'ils ne sortent pas, ils deviennent une ONG et l'Église ne peut pas être une ONG.</p>
                        <p style={{ marginTop: '20px', fontWeight: '600' }}>N'oubliez pas, mettez la pagaille !</p>
                    </div>
                </div>
            </section>

            <div className="prayer">
                <div className="prayer-logo">
                    <img src="https://www.dropbox.com/scl/fi/kh7mhfrgqasyw1unjhzbb/Logo-Famissio-1.png?rlkey=4a5umup7f9b66oxtgvr8deas9&st=z51lydtw&raw=1" alt="Logo Prière" />
                </div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" className="prayer-cta">
                    Accéder à la prière
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};

export default Home;
