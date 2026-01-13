import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
    // State pour la section "6 Temps Forts"
    const [activeMission, setActiveMission] = useState(null);

    // Injection des polices et icônes
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
            // Cleanup optional
        }
    }, []);

    // Données pour "6 Temps Forts"
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
            min-height: 80vh; /* Plus flexible que 100vh */
            display: grid; 
            grid-template-columns: 1.3fr 1fr; 
            position: relative; 
            overflow: hidden; 
            background: white; 
            padding-bottom: 0; /* Colle au carrousel */
        }
        
        .hero-left { 
            background: linear-gradient(135deg, var(--flame), var(--ember)); 
            padding: 80px 8%; /* Padding ajusté */
            display: flex; 
            align-items: center; 
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%); 
            position: relative; 
            height: 100%;
            z-index: 2; 
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
            margin-top: 0; 
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
            margin: 0; /* Marge supprimée pour coller au carrousel */
            padding: 100px 5%; /* Padding réduit (était 150px) */
            position: relative; 
            z-index: 1; 
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

        /* SECTION MISSION (La Mission en Pratique) */
        .mission-cards {
            max-width: 1150px; /* Largeur réduite pour affiner les cartes */
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        
        .mission-card {
            background: white;
            padding: 80px 40px; /* Cartes plus allongées (padding vertical augmenté) */
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
        .team-image-box { 
            position: sticky; 
            top: 50px; 
        }
        .team-image { 
            width: 100%; 
            height: 600px; 
            border-radius: 35px; 
            overflow: hidden; 
            box-shadow: 0 30px 80px rgba(0,0,0,0.2); 
            margin-bottom: 30px; 
        }
        
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
            transform: translateY(10px);
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
        .prayer { 
            background: #ede0d4; 
            text-align: center; 
            color: var(--charcoal); /* Texte Noir/Charcoal */
            position: relative; 
            overflow: hidden; 
            padding: 60px 5%; 
        }
        .prayer-logo { 
            width: 160px; height: 160px; margin: 0 auto 40px; background: white; 
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
            animation: morph 8s ease-in-out infinite;
            display: flex; align-items: center; justify-content: center; 
            box-shadow: 0 20px 60px rgba(0,0,0,0.1); /* Ombre plus douce */
            position: relative; overflow: hidden;
        }
        .prayer-logo img { width: 70%; height: 70%; object-fit: contain; transform: scale(1.35); }
        .prayer h2 { 
            font-family: 'Playfair Display', serif; 
            font-size: clamp(2.5rem, 5vw, 4rem); 
            margin-bottom: 25px; 
            font-weight: 700; 
            color: var(--flame); /* Titre en Rouge pour le style */
        }
        .prayer p { 
            font-size: 1.3rem; 
            opacity: 1; 
            margin-bottom: 45px; 
            color: var(--charcoal); /* Texte en Noir */
        }
        .prayer-cta {
            display: inline-flex; 
            align-items: center; 
            gap: 12px; 
            color: black; /* Lien en Noir */
            text-decoration: none; 
            font-weight: 700; 
            font-size: 1.2rem; 
            padding: 18px 0; 
            border-bottom: 3px solid black; /* Soulignement Noir */
            transition: gap 0.3s;
        }
        .prayer-cta:hover { gap: 20px; }

        /* --- STYLES AJOUTÉS POUR LES SECTIONS RESTAURÉES (CLASSES RENOMMÉES en tf-) --- */

        /* TOUSSAINT SECTION - DESIGN BLANC */
        .toussaint-section {
          background: white;
          color: var(--charcoal);
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        .toussaint-inner {
          max-width: 1400px;
          margin: 0 auto;
          min-height: auto;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .toussaint-content {
          max-width: 1100px; /* Largeur augmentée */
          margin: 0 auto;
          text-align: center;
          display: block;
          width: 100%;
        }

        .toussaint-tag {
          display: inline-block;
          background: rgba(248, 106, 7, 0.1);
          color: #f46a07;
          padding: 12px 30px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .toussaint-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 60px;
          color: var(--charcoal); /* Texte foncé */
        }

        .questions-cascade {
          margin-bottom: 60px;
          text-align: left;
          background: var(--off-white-warm); /* Légère distinction */
          padding: 40px;
          border-radius: 20px;
        }

        .question-item {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #555; /* Texte foncé */
          margin-bottom: 25px;
          padding-left: 40px;
          position: relative;
        }



        .question-item::before {
          content: '?';
          position: absolute;
          left: 0;
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #f46a07;
          font-weight: 700;
        }

        .toussaint-answer {
          font-size: 1.35rem;
          line-height: 1.9;
          color: #333; /* Texte foncé */
          border-left: 4px solid #f46a07;
          padding-left: 40px;
          margin-top: 60px;
          font-weight: 400;
          text-align: left;
        }

        /* SECTION 6 TEMPS FORTS - Grid innovante avec images (RENOMMÉ EN tf-*) */
        .tf-showcase {
          background: white;
          padding: 120px 0 0 0; /* Plus d'espace blanc en bas */
        }

        .tf-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 100px;
          padding: 0 5%;
        }

        .tf-super {
          font-size: 0.8rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #f46a07;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .tf-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 30px;
        }

        .tf-subtitle {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.7;
        }

        .tf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 100%;
          margin: 0 auto;
        }

        .tf-card {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .tf-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .tf-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(30%);
        }

        .tf-card:hover .tf-card-image img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .tf-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          transition: all 0.4s;
        }

        .tf-card:hover .tf-overlay {
          background: linear-gradient(to top, rgba(200,41,4,0.95) 0%, rgba(200,41,4,0.7) 70%, rgba(200,41,4,0.3) 100%);
        }

        .tf-number {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.15);
          line-height: 1;
          margin-bottom: 15px;
          transition: all 0.4s;
        }

        .tf-card:hover .tf-number {
          color: rgba(255,255,255,0.3);
          transform: translateY(-10px);
        }

        .tf-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          line-height: 1.2;
          transition: all 0.4s;
        }

        .tf-card:hover .tf-card-title {
          transform: translateY(-5px);
        }

        .tf-preview {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s;
        }

        .tf-card:hover .tf-preview {
          max-height: 200px;
          opacity: 1;
        }

        /* Panel latéral pour détails */
        .tf-panel {
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

        .tf-panel.active {
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
          padding: 0 5% 120px 5%; /* Plus d'espace en haut */
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

        /* OVERRIDE pour la section "Notre Histoire" (Comment tout a commencé) */
        .diagonal {
            margin-top: 0 !important; /* On colle au slider */
            padding-top: 100px !important; /* Moins de padding en haut car plus de "biais" */
            /* Pente douce et droite : légère inclinaison en bas */
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%) !important;
            padding-bottom: 10rem !important;
        }
        
        /* RESPONSIVE ADDITIONS */
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
            .tf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .diagonal { clip-path: none; padding: 80px 5%; }
            .mission-cards { grid-template-columns: 1fr; }
            .masonry { columns: 1; }
            .tf-grid { grid-template-columns: 1fr; }
            .after-number { font-size: 10rem; margin-bottom: -50px; }
        }

        /* --- STYLES SPÉCIFIQUES POUR LA TRANSITION MISSION -> ÉQUIPE --- */

        /* 1. La section Mission en GRIS CLAIR */
        .mission-section-gray {
            background-color: #f4f6f8; /* Gris clair */
            position: relative;
            z-index: 1;
            padding-bottom: 220px; /* Beaucoup plus d'espace gris en bas */
        }

        /* 2. La section Équipe en BLANC avec le TRIANGLE VERS LE HAUT */
        .team-section-white {
            background-color: white;
            position: relative;
            z-index: 2;
            padding-top: 100px;
        }

        /* LE TRIANGLE : pseudo-élément sur la section BLANCHE qui pointe vers le HAUT */
        .team-section-white::before {
            content: '';
            position: absolute;
            top: -60px; /* On le remonte de sa hauteur */
            left: 0;
            width: 100%;
            height: 60px;
            background-color: white; /* Même couleur que la section équipe */
            /* Forme : Triangle pointant vers le haut */
            clip-path: polygon(0 100%, 50% 0, 100% 100%);
            z-index: 3;
        }
    `}</style>

            {/* HERO */}
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-content">
                        <div className="badge">Mission • Foi • Famille</div>
                        <h1>Famissio</h1>

                        <div className="underline"></div>

                        <p>Des familles missionnaires au service des paroisses rurales de France, pour entourer le prêtre et donner un élan missionnaire.</p>

                        <Link to="/missions#liste-missions" className="cta">
                            <span>Découvrir nos missions <i className="fas fa-arrow-right"></i></span>
                        </Link>
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

            {/* CAROUSEL AJOUTÉ */}
            <HeroCarousel />

            {/* NOTRE HISTOIRE */}
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

            {/* QUI SOMMES NOUS - VIDEO */}
            <section className="video-section">
                <div className="section-head">
                    <div className="eyebrow" style={{ color: 'var(--ember)' }}>Découvrez-nous</div>
                    <h2 className="title" style={{ color: 'white' }}>Qui sommes-nous ?</h2>
                    <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Nous sommes des familles missionnaires venues de toute la France, accompagnées de consacrés, qui se rassemblent chaque année pendant une semaine autour de La Toussaint, pour entourer un curé et ses paroissiens, en vue de faire avec eux de la mission.</p>
                </div>
                <div className="video-frame">
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/bYFu-nvDDHI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>



            {/* LA MISSION EN PRATIQUE (SECTION GRISE AVEC TRIANGLE HAUT) */}
            {/* J'ai ajouté la classe 'mission-section-gray' ici */}
            <section id="mission" className="mission-section-gray">
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

            {/* TEAM SECTION (SECTION BLANCHE SUIVANTE) */}
            <section className="team-section-white">
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
                            <p>Comme nous avons besoin de grands missionnaires ! Mais qui peut réveiller l’ardeur d’une chrétienté endormie ? Les grands missionnaires que nous désirons tant je crois que ce sont les enfants. Car évangéliser ce n’est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère...</p>
                            <p style={{ marginTop: '20px' }}>Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon quart d’heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors qu’il n’avait encore prononcé aucune parole, le petit Henri interrompt soudainement notre discussion « de grands » pour proposer à cet homme de prier pour lui : cette simple parole l’a bouleversé, et il lui a demandé avec le plus grand sérieux de prier pour son âme !</p>
                            <p style={{ marginTop: '20px' }}>Ou d’Athanase qui avait ému une aïeule aux larmes après l’avoir bénie d’une croix sur le front alors qu’elle venait de refuser tout échange. Donner la chance aux personnes qui ne connaissent pas Dieu de recevoir des enfants un sourire, une parole d’encouragement, une prière, c’est leur offrir le Christ. Alors chers parents, guidez vos enfants vers la mission ! Ils mèneront beaucoup d’âmes vers le Père...</p>
                            <div className="quote-author">— Pierre-Alexandre Ludwig</div>
                        </div>

                        <p style={{ fontStyle: 'italic', color: '#666' }}>«Les enfants sont transparents, ils ne calculent pas. À un monsieur qui expliquait ne pas croire, Raphaël, âgé de 12 ans, n'a cessé de répéter, inquiet : "Mais vous savez quand même que Dieu vous aime?"»</p>
                    </div>
                </div>
            </section>

            {/* LE PROGRAMME (Inserted) - FOND BLANC MAINTENANT */}
            <section style={{ background: 'white', padding: '60px 5% 120px 5%' }}>
                <div className="section-head">
                    <h2 className="title">Le Programme</h2>
                </div>
                <div className="video-frame" style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px', background: 'white' }}>
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/ZnW9oGHpAyQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* POURQUOI LA MISSION A LA TOUSSAINT (Depuis Source B) - FOND CRÈME MAINTENANT */}
            <section className="toussaint-section" style={{ background: 'var(--cream)' }}>
                <div className="toussaint-inner">
                    <div className="toussaint-content">
                        <div className="eyebrow">La Toussaint</div>
                        <h2 className="toussaint-title">Pourquoi faire ça à la Toussaint ?</h2>

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

            {/* SECTION 6 TEMPS FORTS - TIMELINE COMPACTE */}
            <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf7f5 100%)', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
                <style>{`
                    /* Timeline Container */
                    .timeline-showcase {
                        max-width: 1300px;
                        margin: 0 auto;
                        position: relative;
                    }

                    /* Timeline Line */
                    .timeline-line {
                        position: absolute;
                        left: 50%;
                        top: 100px;
                        bottom: 0;
                        width: 3px;
                        background: linear-gradient(180deg, var(--ember), var(--coral), transparent);
                        transform: translateX(-50%);
                        z-index: 1;
                    }

                    /* Timeline Items */
                    .timeline-track {
                        display: flex;
                        flex-direction: column;
                        gap: 60px;
                        position: relative;
                        z-index: 2;
                    }

                    .timeline-item {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 60px;
                        align-items: center;
                        position: relative;
                    }

                    .timeline-item:nth-child(even) {
                        direction: rtl;
                    }

                    .timeline-item:nth-child(even) > * {
                        direction: ltr;
                    }

                    /* Timeline Dot */
                    .timeline-dot {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 24px;
                        height: 24px;
                        background: var(--ember);
                        border: 4px solid white;
                        border-radius: 50%;
                        z-index: 3;
                        box-shadow: 0 0 0 8px rgba(248, 106, 7, 0.15);
                        cursor: pointer;
                        transition: all 0.4s ease;
                    }

                    .timeline-item:hover .timeline-dot {
                        transform: translate(-50%, -50%) scale(1.4);
                        box-shadow: 0 0 0 15px rgba(248, 106, 7, 0.25);
                    }

                    /* Image Blob - FIXÉ */
                    .timeline-blob {
                        position: relative;
                        width: 100%;
                        max-width: 450px;
                        height: 350px;
                        margin: 0 auto;
                    }

                    .blob-shape {
                        width: 100%;
                        height: 100%;
                        border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
                        overflow: hidden;
                        box-shadow: 0 25px 60px rgba(0,0,0,0.18);
                        position: relative;
                        cursor: pointer;
                        transition: box-shadow 0.5s ease, transform 0.5s ease;
                    }

                    .blob-shape:hover {
                        transform: none;
                        box-shadow: 0 35px 80px rgba(200, 41, 4, 0.25);
                    }

                    .blob-shape img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.6s ease;
                    }

                    .blob-shape:hover img {
                        transform: none;
                    }

                    /* Content */
                    .timeline-content {
                        position: relative;
                    }

                    .timeline-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 2.2rem;
                        font-weight: 900;
                        color: var(--flame);
                        margin-bottom: 20px;
                        line-height: 1.2;
                        position: relative;
                    }

                    .timeline-title::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -8px;
                        width: 70px;
                        height: 3px;
                        background: linear-gradient(90deg, var(--ember), var(--coral));
                        border-radius: 2px;
                    }

                    .timeline-description {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: #555;
                        margin: 25px 0;
                        text-align: justify;
                    }

                    .timeline-expand-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 12px;
                        padding: 14px 32px;
                        background: linear-gradient(135deg, var(--flame), var(--ember));
                        color: white;
                        border: none;
                        border-radius: 50px;
                        font-weight: 700;
                        font-size: 0.95rem;
                        cursor: pointer;
                        transition: all 0.4s ease;
                        box-shadow: 0 8px 25px rgba(200, 41, 4, 0.3);
                    }

                    .timeline-expand-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 35px rgba(200, 41, 4, 0.4);
                        gap: 16px;
                    }

                    /* Modal Fullscreen */
                    .timeline-modal-backdrop {
                        position: fixed;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.85);
                        backdrop-filter: blur(10px);
                        z-index: 9999;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 40px;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .timeline-modal-backdrop.active {
                        opacity: 1;
                        visibility: visible;
                    }

                    .timeline-modal {
                        background: white;
                        border-radius: 30px;
                        max-width: 1100px;
                        width: 100%;
                        max-height: 90vh;
                        overflow: hidden;
                        box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5);
                        display: grid;
                        grid-template-columns: 45% 55%;
                        transform: scale(0.8) translateY(50px);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .timeline-modal-backdrop.active .timeline-modal {
                        transform: scale(1) translateY(0);
                    }

                    .modal-image-section {
                        position: relative;
                        overflow: hidden;
                        background: var(--charcoal);
                    }

                    .modal-image-section img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: none !important;
                        transform: none !important;
                    }

                    .modal-content-section {
                        padding: 50px;
                        overflow-y: auto;
                    }

                    .modal-close-btn {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        width: 50px;
                        height: 50px;
                        background: rgba(255, 255, 255, 0.9);
                        border: none;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.8rem;
                        color: var(--flame);
                        cursor: pointer;
                        transition: all 0.3s ease;
                        z-index: 10;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                    }

                    .modal-close-btn:hover {
                        transform: rotate(90deg) scale(1.1);
                        background: var(--flame);
                        color: white;
                    }

                    .modal-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 2.5rem;
                        font-weight: 900;
                        color: var(--flame);
                        margin-bottom: 30px;
                        line-height: 1.2;
                    }

                    .modal-main-text {
                        font-size: 1.1rem;
                        line-height: 1.9;
                        color: #444;
                        margin-bottom: 30px;
                        text-align: justify;
                    }

                    .modal-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    .modal-list li {
                        padding: 15px 0 15px 35px;
                        position: relative;
                        font-size: 1.05rem;
                        line-height: 1.7;
                        color: #555;
                        border-bottom: 1px solid rgba(0,0,0,0.06);
                    }

                    .modal-list li:last-child {
                        border-bottom: none;
                    }

                    .modal-list li::before {
                        content: '✦';
                        position: absolute;
                        left: 0;
                        color: var(--ember);
                        font-size: 1.3rem;
                        font-weight: bold;
                    }

                    /* Responsive */
                    @media (max-width: 1200px) {
                        .timeline-item {
                            grid-template-columns: 1fr;
                            gap: 35px;
                        }

                        .timeline-item:nth-child(even) {
                            direction: ltr;
                        }

                        .timeline-line {
                            left: 30px;
                        }

                        .timeline-dot {
                            left: 30px;
                        }

                        .timeline-blob {
                            max-width: 100%;
                            height: 300px;
                        }

                        .timeline-modal {
                            grid-template-columns: 1fr;
                            max-height: 95vh;
                        }

                        .modal-image-section {
                            min-height: 250px;
                            max-height: 300px;
                        }

                        .modal-content-section {
                            padding: 30px;
                        }
                    }

                    @media (max-width: 768px) {
                        .timeline-track {
                            gap: 50px;
                        }

                        .timeline-blob {
                            height: 280px;
                        }

                        .timeline-title {
                            font-size: 1.8rem;
                        }

                        .timeline-description {
                            font-size: 1rem;
                        }

                        .modal-title {
                            font-size: 1.8rem;
                        }
                    }
                `}</style>

                {/* Section Header */}
                <div className="section-head">
                    <div className="eyebrow">Une Semaine de Mission</div>
                    <h2 className="title">Les 6 Temps Forts</h2>
                    <p className="subtitle">Découvrez le déroulement d'une semaine missionnaire avec Famissio</p>
                </div>

                {/* Timeline Container */}
                <div className="timeline-showcase">
                    <div className="timeline-line"></div>

                    <div className="timeline-track">
                        {missionBlocks.map((block) => (
                            <div key={block.id} className="timeline-item">
                                {/* Image Blob */}
                                <div className="timeline-blob" onClick={() => setActiveMission(block)}>
                                    <div className="blob-shape">
                                        <img src={block.image} alt={block.title} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{block.title}</h3>
                                    <p className="timeline-description">
                                        {block.content || (block.items && block.items[0]) || 'Découvrez les détails de cette activité'}
                                    </p>
                                    <button
                                        className="timeline-expand-btn"
                                        onClick={() => setActiveMission(block)}
                                    >
                                        <span>En savoir plus</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>

                                {/* Timeline Dot */}
                                <div className="timeline-dot" onClick={() => setActiveMission(block)}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Fullscreen */}
                <div
                    className={`timeline-modal-backdrop ${activeMission ? 'active' : ''}`}
                    onClick={() => setActiveMission(null)}
                >
                    <div className="timeline-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setActiveMission(null)}>
                            ×
                        </button>

                        {activeMission && (
                            <>
                                {/* Image Section */}
                                <div className="modal-image-section">
                                    <img src={activeMission.image} alt={activeMission.title} />
                                </div>

                                {/* Content Section */}
                                <div className="modal-content-section">
                                    <h3 className="modal-title">{activeMission.title}</h3>

                                    {activeMission.content && (
                                        <p className="modal-main-text">{activeMission.content}</p>
                                    )}

                                    {activeMission.items && (
                                        <ul className="modal-list">
                                            {activeMission.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </section>

            {/* ET APRES CETTE SEMAINE (Depuis Source B) */}
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



            {/* BANNER */}
            <div className="banner">
                <div className="geo"></div><div className="geo"></div>
                <h2>La mission nous presse !</h2>
            </div>

            {/* PRIEST */}
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

            {/* POPE */}
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

            {/* PRAYER */}
            <div className="prayer">
                <div className="prayer-logo">
                    <img src="https://www.dropbox.com/scl/fi/kh7mhfrgqasyw1unjhzbb/Logo-Famissio-1.png?rlkey=4a5umup7f9b66oxtgvr8deas9&st=z51lydtw&raw=1" alt="Logo Prière" />
                </div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <Link to="/priere-famissio" className="prayer-cta">
                    Accéder à la prière
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div >
    );
};

export default Home;
