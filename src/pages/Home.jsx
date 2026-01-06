import { useEffect, useRef, useState } from "react";

function IconChurch(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M12 2 5 7v15h5v-5h4v5h5V7l-7-5Zm2 12h-4v-2h4v2Zm0-4h-4V8h4v2Z" />
        </svg>
    );
}

function IconBullhorn(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M3 11v2c0 .55.45 1 1 1h2l3.5 3.5c.63.63 1.72.18 1.72-.71V14h6l4-2V8l-4-2H11V4.21c0-.89-1.08-1.34-1.72-.71L6 7H4c-.55 0-1 .45-1 1v3Zm8 1H6.41L5 10.59V13h6v-1Zm8-2.76v5.52L17.5 14H11V10h6.5L19 9.24Z" />
        </svg>
    );
}

function IconCrown(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M5 16 3 7l5 4 4-6 4 6 5-4-2 9H5Zm0 2h14v2H5v-2Z" />
        </svg>
    );
}

function IconEye(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
    );
}

function IconCalendar(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V8h14v11Zm-7-9h5v5h-5v-5Z" />
        </svg>
    );
}

function IconPin(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M12 2c3.87 0 7 3.13 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.87 3.13-7 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Z" />
        </svg>
    );
}

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slide, setSlide] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    const openModalAt = (index) => {
        setSlide(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const goToSlide = (index) => {
        const next = Math.max(0, Math.min(2, index));
        setSlide(next);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].screenX;
        const diff = endX - touchStartX.current;

        if (diff < -50) goToSlide(slide + 1);
        if (diff > 50) goToSlide(slide - 1);
    };

    const missionCards = [
        {
            title: "Que faisons-nous ?",
            text:
                "Nous nous mettons au service de paroisses pour mener avec elles une mission. Nous arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses d'un même diocèse.",
            Icon: IconEye,
        },
        {
            title: "Préparation",
            text:
                "La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de missionnaires qui se retrouvent régulièrement par visioconférences. Main dans la main, ils élaborent alors le programme de la mission, préparent ensemble ses différents temps et créent des liens fraternels entre eux.",
            Icon: IconCalendar,
        },
        {
            title: "Où allons-nous ?",
            text:
                "Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous envoie en mission, en accord avec le diocèse local. Nous nous adaptons aux besoins spécifiques de chaque communauté.",
            Icon: IconPin,
        },
    ];

    const gallery = [
        {
            title: "Temps de prière",
            src: "https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg",
            alt: "Temps de prière",
        },
        {
            title: "Évangélisation",
            src: "https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG",
            alt: "Évangélisation",
        },
        {
            title: "Veillée",
            src: "https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG",
            alt: "Veillées",
        },
        {
            title: "Bénédiction des cimetières",
            src: "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG",
            alt: "Bénédiction des cimetières",
        },
        {
            title: "Journée des familles",
            src: "https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG",
            alt: "Journée intergénérationnelle",
        },
        {
            title: "Envoi en mission",
            src: "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG",
            alt: "Journée diocésaine",
        },
    ];

    const priestPillars = [
        {
            title: "Je suis Prêtre",
            Icon: IconChurch,
            text:
                'Seul Jésus est le "grand prêtre par Excellence" (He 4, 14) comme nous le dit l\'auteur de la Lettre aux Hébreux. Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent. Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.',
        },
        {
            title: "Je suis Prophète",
            Icon: IconBullhorn,
            text:
                'Le prophète est, étymologiquement, le "porte-parole" de Dieu. Comme je participe à cette dignité, je suis, moi aussi, un prophète... Nous annonçons la Bonne nouvelle, "toujours nouvelle". Nous ne pouvons pas garder ce trésor pour nous. Notre mission est de l\'annoncer.',
        },
        {
            title: "Je suis Roi",
            Icon: IconCrown,
            text:
                'Attention à cette fonction car être roi pour un baptisé, c’est être au service... Soyons inventifs, créatifs dans le service du frère. L\'appel du Christ nous presse.',
        },
    ];

    const popePoints = [
        {
            title: "1. Aller aux périphéries",
            text:
                "“Église en sortie” n’est pas une expression à la mode. Elle est un commandement du Christ. Soit l’Église est en sortie, soit elle n’est pas l’Église.",
        },
        {
            title: "2. Se laisser surprendre",
            text:
                "La mission n’est pas un projet d’entreprise bien rodé. L’Esprit saint agit comme il le veut, quand il le veut et où il le veut.",
        },
        {
            title: "3. Se mettre à l’écoute",
            text:
                "La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l’on éprouve en présence des paroles de Jésus.",
        },
        {
            title: "4. Témoigner et non déclarer",
            text:
                "On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.",
        },
        {
            title: "5. Éloge de la tendresse",
            text:
                "Annoncer l’Évangile ne consiste pas à assiéger les autres de discours. Lancer des vérités comme des pierres, c’est le signe que les paroles se sont transformées en idéologie.",
        },
        {
            title: "6. Le contact humain",
            text:
                "La mission est un contact humain : “Je connais Jésus, je voudrais te le faire connaître”.",
        },
        {
            title: "7. Habiter le temps",
            text:
                "Il ne s'agit pas de faire de l’animation missionnaire comme un métier, mais de vivre avec les autres, de les suivre pas à pas.",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700&display=swap');

        .home {
          --famissio-red: #c82904;
          --famissio-orange: #f46a07;
          --text-dark: #333333;
          --text-light: #fefefe;
          --bg-light: #ffffff;
          --bg-dark: #222222;
          --bg-grey-light: #f8f8f8;
          --bg-mission-action: #f0f5ff;
          --bg-prayer: #e8e8e8;

          font-family: 'Open Sans', sans-serif;
          color: var(--text-dark);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
          background: var(--bg-prayer);
          min-height: 100vh;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 0;
        }

        h2 {
          font-family: 'Open Sans', sans-serif;
          font-size: 2.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--famissio-red);
          text-align: center;
          padding-bottom: 15px;
          position: relative;
          margin: 0 0 40px 0;
        }

        h2::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 70px;
          height: 3px;
          background-color: var(--famissio-orange);
          border-radius: 2px;
        }

        h3, h4 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          text-align: left;
          margin: 40px 0 25px 0;
          line-height: 1.2;
          color: var(--famissio-orange);
        }

        h3 { font-size: 2.2rem; }
        h4 { font-size: 1.6rem; color: var(--famissio-red); margin: 0 0 10px 0; }

        p, ul, ol, blockquote {
          font-size: 1.1rem;
          color: var(--text-dark);
          margin: 0 0 1em 0;
        }

        strong { color: var(--famissio-red); }

        .section-light { background: var(--bg-light); }
        .section-dark { background: var(--bg-dark); color: var(--text-light); }
        .section-dark p { color: var(--text-light); }

        .section-mission-action { background: var(--bg-mission-action); }

        .text-block {
          padding: 0 5%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .text-justify { text-align: left; }
        .text-justify p { text-align: justify; }

        blockquote {
          font-style: italic;
          border-left: 5px solid var(--famissio-orange);
          padding: 20px 25px;
          margin: 30px 0;
          background-color: var(--bg-grey-light);
          border-radius: 8px;
          color: var(--text-dark);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        blockquote footer {
          margin-top: 10px;
          font-style: normal;
          font-weight: 600;
          color: var(--famissio-red);
          display: block;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 900px;
          margin: 50px auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          background: #000;
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .feature-card {
          background: var(--bg-light);
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          padding: 30px;
          text-align: center;
          border-bottom: 5px solid var(--famissio-orange);
        }

        .feature-card h3 {
          color: var(--famissio-red);
          font-size: 1.5rem;
          margin: 0 0 15px 0;
          text-align: center;
          white-space: nowrap;
        }

        .feature-card p {
          color: var(--text-dark);
          font-size: 1rem;
          text-align: justify;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
        }

        .card-icon svg {
          width: 100%;
          height: 100%;
          fill: var(--famissio-orange);
        }

        .age-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          margin-top: 50px;
        }

        .age-text {
          width: 100%;
          max-width: 900px;
          text-align: left;
        }

        .age-text p { text-align: justify; }

        .age-image {
          width: 100%;
          max-width: 900px;
          text-align: center;
        }

        .age-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          object-fit: cover;
          object-position: center top;
          height: auto;
          max-height: 60vh;
        }

        .mission-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .gallery-item {
          background: var(--bg-light);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .gallery-item img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .gallery-item h4 {
          margin: 15px 0 20px 0;
          color: var(--famissio-red);
          font-size: 1.5rem;
          text-align: center;
        }

        .full-width-banner {
          background: linear-gradient(135deg, var(--famissio-red), var(--famissio-orange));
          padding: 50px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        .full-width-banner h2 {
          font-family: 'Playfair Display', serif;
          text-transform: none;
          letter-spacing: normal;
          font-weight: 700;
          margin: 0;
          padding: 0;
          font-size: 2.5rem;
          color: var(--text-light);
        }

        .full-width-banner h2::after { display: none; }

        .profile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 50px;
        }

        .profile-card img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid var(--famissio-orange);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .profile-card h2 {
          font-family: 'Playfair Display', serif;
          text-transform: none;
          letter-spacing: normal;
          font-size: 3rem;
          margin: 0;
        }

        .section-subtitle {
          font-size: 1.6rem;
          margin: 20px 0 30px 0;
          font-weight: 600;
          font-family: 'Open Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: left;
        }

        /* Piliers desktop */
        .priest-pillars {
          display: grid;
          gap: 30px;
          margin-top: 40px;
          max-width: 1200px;
        }

        @media (min-width: 768px) {
          .priest-pillars { grid-template-columns: repeat(2, 1fr); }
          .priest-pillars .pillar-item:nth-child(1) { grid-column: 1 / -1; }
        }

        .pillar-item {
          background: var(--bg-light);
          color: #333;
          padding: 30px;
          border-radius: 10px;
          text-align: left;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pillar-item h4 {
          color: var(--famissio-orange);
          font-size: 1.8rem;
          text-align: center;
          margin: 0 0 20px 0;
          font-family: 'Playfair Display', serif;
        }

        .pillar-icon {
          width: 42px;
          height: 42px;
          fill: var(--famissio-red);
          margin-bottom: 12px;
        }

        .pillar-item p {
          font-size: 1.05rem;
          text-align: justify;
          width: 100%;
          margin: 0;
        }

        /* Mobile nav + modal */
        .mobile-pillars-nav { display: none; }

        .pillars-modal {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 99999;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 12px;
        }

        .pillars-modal.active { display: flex; }

        .close-modal-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid #fff;
          border-radius: 999px;
          width: 40px;
          height: 40px;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          display: grid;
          place-items: center;
        }

        .carousel-container {
          width: 95%;
          max-width: 500px;
          overflow: hidden;
          position: relative;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.3s ease-out;
          width: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          box-sizing: border-box;
          padding: 10px;
        }

        .mobile-card {
          background: var(--bg-light);
          padding: 20px 15px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 0 25px rgba(244, 106, 7, 0.4);
          max-height: 85vh;
          overflow-y: auto;
        }

        .mobile-card h4 {
          color: var(--famissio-orange);
          font-size: 1.4rem;
          margin: 0 0 15px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          line-height: 1.1;
        }

        .mobile-card p {
          text-align: justify;
          font-size: 0.95rem;
          line-height: 1.45;
          color: var(--text-dark);
          margin: 0;
        }

        .carousel-dots {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          cursor: pointer;
        }

        .dot.active {
          background: var(--famissio-orange);
          transform: scale(1.2);
        }

        .mobile-icon-btn {
          width: 75px;
          height: 75px;
          background: var(--bg-light);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          border: 2px solid var(--famissio-orange);
          transition: transform 0.2s;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        .mobile-icon-btn:active {
          transform: scale(0.95);
          background: #ffe6db;
        }

        .mobile-icon-btn svg {
          width: 28px;
          height: 28px;
          fill: var(--famissio-red);
          margin-bottom: 4px;
        }

        .mobile-icon-btn span {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--famissio-orange);
          text-transform: uppercase;
        }

        /* Pape */
        .pope-message { background: var(--bg-grey-light); padding: 60px 0; }
        .pope-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 1100px;
          margin: 40px auto 0 auto;
          padding: 0 5%;
        }

        .pope-points .point-item:last-child { grid-column: 1 / -1; }

        .point-item {
          background: var(--bg-light);
          padding: 20px;
          border-left: 5px solid var(--famissio-orange);
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          text-align: left;
        }

        .point-item h4 {
          color: var(--famissio-red);
          margin: 0 0 10px 0;
          font-size: 1.05rem;
          text-transform: uppercase;
          font-family: 'Open Sans', sans-serif;
          letter-spacing: 0.4px;
        }

        .point-item p {
          margin: 0;
          text-align: justify;
          font-size: 0.98rem;
        }

        .pope-question {
          font-size: 1.6rem;
          color: var(--famissio-red);
          font-weight: 700;
          text-align: center;
          font-family: 'Open Sans', sans-serif;
          text-transform: uppercase;
          margin-top: 60px;
        }

        .pope-final-text {
          max-width: 900px;
          margin: 20px auto 0 auto;
          padding: 0 5%;
          text-align: justify;
          font-size: 1.1rem;
        }

        /* Prière */
        .prayer-section {
          text-align: center;
          padding: 30px 0;
          background: var(--bg-prayer);
          color: var(--text-dark);
        }

        .prayer-logo {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border-radius: 50%;
          border: 6px solid var(--famissio-orange);
          background: var(--bg-light);
          margin: 0 auto 30px auto;
          display: block;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .prayer-text {
          max-width: 600px;
          margin: 20px auto;
          font-size: 1.2rem;
          padding: 0 5%;
        }

        .prayer-button {
          display: inline-block;
          background: var(--famissio-red);
          color: var(--text-light);
          padding: 18px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .prayer-button:hover { background: var(--famissio-orange); }

        /* Responsive */
        @media (max-width: 767px) {
          .priest-pillars { display: none; }
          .mobile-pillars-nav {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 30px 0 20px 0;
          }
          .pope-points { display: flex; flex-direction: column; }
          .feature-card h3 { white-space: normal; }
        }
      `}</style>

            <div className="home">
                {/* GENÈSE */}
                <section className="section-light">
                    <div className="container">
                        <h2>La genèse de Famissio</h2>
                        <div className="text-block text-justify">
                            <p>
                                À l'origine, une famille a découvert la joie de l'évangélisation
                                en suivant pendant deux mois des missionnaires dans l'Himalaya et
                                le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre la
                                mission mais cette fois-ci en restant en France et pour
                                accompagner des curés de paroisses rurales. Des amis ont accepté
                                de les rejoindre dans cette aventure pour découvrir la belle
                                paroisse du père Jean-Pierre Barrière dans la Creuse. Cette
                                semaine les a tous beaucoup nourris et remplis de joie puis
                                confirmés dans cette intuition initiale. Famissio est alors née.
                                Le père Jean-Pierre en devenait l'aumônier. Monseigneur Bozo
                                acceptait de suivre cette initiative.
                            </p>
                        </div>
                    </div>
                </section>

                {/* QUI SOMMES-NOUS */}
                <section className="section-dark">
                    <div className="container">
                        <h2>Qui sommes-nous ?</h2>
                        <div className="text-block">
                            <p>
                                Nous sommes des familles missionnaires venues de toute la France,
                                accompagnées de consacrés, qui se rassemblent chaque année
                                pendant une semaine autour de La Toussaint, pour entourer un curé
                                et ses paroissiens, en vue de faire avec eux de la mission.
                            </p>
                        </div>

                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/bYFu-nvDDHI"
                                title="Présentation de Famissio"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                </section>

                {/* NOTRE MISSION */}
                <section className="section-light">
                    <div className="container">
                        <h2>Notre Mission</h2>

                        <div className="feature-grid">
                            {missionCards.map(({ title, text, Icon }) => (
                                <div className="feature-card" key={title}>
                                    <div className="card-icon">
                                        <Icon />
                                    </div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ÉQUIPE */}
                <section className="section-light">
                    <div className="container">
                        <h2>L'Équipe Missionnaire</h2>

                        <div className="age-content">
                            <div className="age-image">
                                <img
                                    src="https://famissio-99.webself.net/file/si1759337/trrrrrrrzzzzzzzf%20(2)-fi36539933x520.jpg"
                                    alt="L'équipe missionnaire Famissio"
                                    loading="lazy"
                                />
                            </div>

                            <div className="age-text">
                                <h3>À combien arrivons-nous ?</h3>
                                <p>
                                    Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong>{" "}
                                    autour du curé de la paroisse qui nous accueille. Une communauté
                                    dynamique prête à servir !
                                </p>

                                <h3>Missionnaires à partir de quel âge ?</h3>
                                <p>
                                    <strong>À tout âge !</strong> Les enfants ont une grâce
                                    particulière pour ouvrir et toucher les cœurs. Ils nous
                                    évangélisent !!
                                </p>

                                <blockquote>
                                    <p>
                                        "Aujourd’hui, ce n’est pas seulement par-delà les océans
                                        qu’il faut propager la bonne parole, mais aussi dans nos
                                        villes et villages. Comme nous avons besoin de grands
                                        missionnaires ! Mais qui peut réveiller l’ardeur d’une
                                        chrétienté endormie ? Les grands missionnaires que nous
                                        désirons tant je crois que ce sont les enfants..."
                                    </p>
                                    <footer>— Pierre-Alexandre Ludwig</footer>
                                </blockquote>

                                <blockquote>
                                    <p>
                                        «Les enfants sont transparents, ils ne calculent pas. À un
                                        monsieur qui expliquait ne pas croire, Raphaël, âgé de 12
                                        ans, n’a cessé de répéter, inquiet : “Mais vous savez quand
                                        même que Dieu vous aime?”»
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION EN ACTION */}
                <section className="section-mission-action">
                    <div className="container">
                        <h2>Une Mission Paroissiale en Action</h2>

                        <div className="mission-gallery">
                            {gallery.map((g) => (
                                <div className="gallery-item" key={g.title}>
                                    <img src={g.src} alt={g.alt} loading="lazy" />
                                    <h4>{g.title}</h4>
                                </div>
                            ))}
                        </div>

                        <h3 style={{ marginTop: 60 }}>Le programme d'une mission</h3>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/ZnW9oGHpAyQ"
                                title="Programme d'une mission d'évangélisation Famissio"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                </section>

                {/* BANDEAU */}
                <div className="full-width-banner">
                    <h2>La mission nous presse !</h2>
                </div>

                {/* PRÊTRE */}
                <section className="section-light">
                    <div className="container">
                        <div className="profile-card">
                            <img
                                src="https://famissio-99.webself.net/file/si1759337/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg"
                                alt="Père Jean-Pierre Barrière"
                                loading="lazy"
                            />
                            <h2>Père Jean-Pierre Barrière</h2>
                            <p
                                style={{
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "1.3rem",
                                    fontWeight: 600,
                                    fontStyle: "italic",
                                    color: "var(--famissio-orange)",
                                    marginTop: 0,
                                    marginBottom: 0,
                                    textAlign: "center",
                                }}
                            >
                                Aumônier de Famissio
                            </p>
                        </div>

                        <h3 className="section-subtitle">
                            L'APPEL DU CHRIST ET LA VOCATION À L'ÉVANGÉLISATION
                        </h3>

                        <div className="text-justify">
                            <p>
                                Depuis le jour de notre baptême nous sommes devenus enfants
                                bien-aimés du Père, frères et sœurs de Jésus Christ... Quelle
                                belle mission pour chaque baptisé !
                            </p>
                            <p>Mais regardons d'un peu plus près ce que cela signifie :</p>
                        </div>

                        {/* NAV MOBILE */}
                        <div className="mobile-pillars-nav">
                            <div
                                className="mobile-icon-btn"
                                role="button"
                                tabIndex={0}
                                onClick={() => openModalAt(0)}
                                onKeyDown={(e) => e.key === "Enter" && openModalAt(0)}
                            >
                                <IconChurch />
                                <span>Prêtre</span>
                            </div>

                            <div
                                className="mobile-icon-btn"
                                role="button"
                                tabIndex={0}
                                onClick={() => openModalAt(1)}
                                onKeyDown={(e) => e.key === "Enter" && openModalAt(1)}
                            >
                                <IconBullhorn />
                                <span>Prophète</span>
                            </div>

                            <div
                                className="mobile-icon-btn"
                                role="button"
                                tabIndex={0}
                                onClick={() => openModalAt(2)}
                                onKeyDown={(e) => e.key === "Enter" && openModalAt(2)}
                            >
                                <IconCrown />
                                <span>Roi</span>
                            </div>
                        </div>

                        {/* DESKTOP GRID */}
                        <div className="priest-pillars">
                            {priestPillars.map((p) => (
                                <div className="pillar-item" key={p.title}>
                                    <p.Icon className="pillar-icon" />
                                    <h4>{p.title}</h4>
                                    <p>{p.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MODAL MOBILE (CAROUSEL) */}
                <div
                    className={`pillars-modal ${isModalOpen ? "active" : ""}`}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeModal();
                    }}
                    aria-hidden={!isModalOpen}
                >
                    <button className="close-modal-btn" onClick={closeModal} aria-label="Fermer">
                        ×
                    </button>

                    <div
                        className="carousel-container"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${slide * 100}%)` }}
                        >
                            {priestPillars.map((p) => (
                                <div className="carousel-slide" key={p.title}>
                                    <div className="mobile-card">
                                        <p.Icon style={{ width: 34, height: 34, fill: "var(--famissio-red)" }} />
                                        <h4>{p.title}</h4>
                                        <p>{p.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-dots" role="tablist" aria-label="Piliers">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`dot ${slide === i ? "active" : ""}`}
                                onClick={() => goToSlide(i)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && goToSlide(i)}
                                aria-label={`Aller au pilier ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* PAPE */}
                <section className="pope-message">
                    <div className="container">
                        <div className="profile-card">
                            <img
                                src="https://famissio-99.webself.net/file/si1759337/pape_10_0-fi27235959x470.jpg"
                                alt="Pape François"
                                loading="lazy"
                            />
                            <h2>Pape François</h2>
                        </div>

                        <h3 className="section-subtitle">
                            7 points clés pour la mission selon le Pape François
                        </h3>

                        <div className="pope-points">
                            {popePoints.map((pt) => (
                                <div className="point-item" key={pt.title}>
                                    <h4>{pt.title}</h4>
                                    <p>{pt.text}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="pope-question">
                            Que puis-je faire en tant que jeune pour mon église ?
                        </h3>

                        <p className="pope-final-text">
                            Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux
                            que vous alliez à l’extérieur ! Je veux que l’Église sorte dans
                            les rues ! (...)
                            <br />
                            <br />
                            N'oubliez pas, mettez la pagaille !
                        </p>
                    </div>
                </section>

                {/* PRIÈRE */}
                <section className="prayer-section">
                    <div className="container">
                        <img
                            src="https://famissio-99.webself.net/file/si1759337/image-fi36533979x60.png"
                            alt="Logo Prière Famissio"
                            className="prayer-logo"
                            loading="lazy"
                        />
                        <h2 style={{ fontFamily: "Playfair Display, serif", textTransform: "none" }}>
                            Prière du Famissionnaire
                        </h2>

                        <p className="prayer-text">
                            Découvrez la prière qui nous accompagne et nous inspire au quotidien
                            dans notre mission.
                        </p>

                        <a
                            href="https://famissio-99.webself.net/priere-de-famissio"
                            target="_blank"
                            rel="noreferrer"
                            className="prayer-button"
                        >
                            Accéder à la prière (paroles, audio & partition)
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}