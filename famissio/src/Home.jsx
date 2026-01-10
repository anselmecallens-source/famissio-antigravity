import { useEffect } from 'react';
import './index.css'; // Assure-toi que c'est le bon import css

/* --- IMAGES & CONFIGURATION --- */
const IMGS = {
    heroBlob: "https://wsrv.nl/?url=https://www.dropbox.com/scl/fi/w2giupgix5rjmf8k97485/Famissio-252.jpg%3Frlkey=t9adnjqx59rmrid5540asx2cw%26st=41ucuw6p%26raw=1&w=1000&output=webp",
    histoire: "https://www.dropbox.com/scl/fi/1yhtq4m69r3azt0bwfhlr/facebook_1607379806212_6741839550715485834.jpg?rlkey=wphw7agzoatzbs9j5lrqucvnb&st=08zbyaix&raw=1",
    prayerLogo: "https://www.dropbox.com/scl/fi/kh7mhfrgqasyw1unjhzbb/Logo-Famissio-1.png?rlkey=4a5umup7f9b66oxtgvr8deas9&st=z51lydtw&raw=1",
    teamSticky: "https://famissio-99.webself.net/file/si1759337/trrrrrrrzzzzzzzf%20(2)-fi36539933x520.jpg",
    priest: "https://famissio-99.webself.net/file/si1759337/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg",
    pope: "https://famissio-99.webself.net/file/si1759337/pape_10_0-fi27235959x470.jpg",
    // Images pour les cartes programmes (réutilisation des images existantes pour la démo)
    cards: [
        "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG", // Envoi
        "https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG", // Formation
        "https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg", // Prière
        "https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG", // Mission
        "https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG", // Fraternel
        "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG"  // Veillées
    ],
    afterHero: "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG",
    toussaint: "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG"
};

const PROGRAM_DATA = [
    {
        title: "Envoi en Mission",
        icon: "fas fa-rocket",
        img: IMGS.cards[0],
        details: [
            "Journée de rassemblement pour les Famissionnaires",
            "Temps de prière et de louange",
            "Témoignages poignants",
            "Envoi officiel par l'évêque ou le curé"
        ]
    },
    {
        title: "Formation",
        icon: "fas fa-graduation-cap",
        img: IMGS.cards[1],
        details: [
            "Jeux de rôle le dimanche après-midi",
            "Préparation du témoignage personnel",
            "Formation quotidienne de 5mn (Consacré)",
            "Relecture de mission par tranche d'âge",
            "Fiches de formation accessibles 365j/an"
        ]
    },
    {
        title: "Temps de Prière",
        icon: "fas fa-praying-hands",
        img: IMGS.cards[2],
        details: [
            "Laudes, louanges et adoration le matin",
            "Messe quotidienne au cœur de la mission",
            "Récitation du Chapelet",
            "Complies pour clore la journée dans la paix"
        ]
    },
    {
        title: "Au Cœur de la Mission",
        icon: "fas fa-people-carry",
        img: IMGS.cards[3],
        details: [
            "Visitations (rue, marché, porte-à-porte)",
            "Bénédictions (maisons, commerces, champs...)",
            "Processions (Saints, Saint Sacrement, Flambeaux)",
            "Activités culturelles (Théâtre, Concerts)",
            "Solidarité (EHPAD, Handicap)"
        ]
    },
    {
        title: "Vie Fraternelle",
        icon: "fas fa-heart",
        img: IMGS.cards[4],
        details: [
            "Repas partagés Famissionnaires & Paroissiens",
            "Soirées jeux pour briser la glace",
            "Détente et sport pour les enfants",
            "Grande veillée festive de clôture"
        ]
    },
    {
        title: "Les Veillées",
        icon: "fas fa-moon",
        img: IMGS.cards[5],
        details: [
            "Veillée Miséricorde",
            "Veillée sur l'Au-delà et les défunts",
            "Veillée Mariale",
            "Ciné-débat",
            "Veillée de consolation pour les malades"
        ]
    }
];

function Home() {

    useEffect(() => {
        // --- 1. GESTION NAVIGATION & SCROLL ---
        const heroNavbar = document.querySelector('.hero-navbar');
        const navCircle = document.querySelector('.nav-circle');
        const fixedLogoLink = document.querySelector('.fixed-logo-link');
        const heroSection = document.querySelector('.hero');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.innerWidth > 1200) {
                    if (entry.isIntersecting) {
                        heroNavbar?.classList.remove('hidden');
                        navCircle?.classList.remove('visible');
                        fixedLogoLink?.classList.remove('visible');
                    } else {
                        heroNavbar?.classList.add('hidden');
                        navCircle?.classList.add('visible');
                        fixedLogoLink?.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.1 });

        if (heroSection) observer.observe(heroSection);

        // --- GESTION MENU MOBILE ---
        const menuToggle = document.getElementById('menuToggle');
        const sideMenu = document.getElementById('sideMenu');
        const menuBackdrop = document.getElementById('menuBackdrop');
        const sideLinks = document.querySelectorAll('.side-link');

        function toggleMenu() {
            if (!sideMenu || !menuBackdrop) return;
            sideMenu.classList.toggle('active');
            menuBackdrop.classList.toggle('active');

            const icon = menuToggle?.querySelector('i');
            if (icon) {
                if (sideMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }

        menuToggle?.addEventListener('click', toggleMenu);
        menuBackdrop?.addEventListener('click', toggleMenu);
        sideLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // --- EFFET ANTIGRAVITY (SCROLL DOUX) ---
        let isHandlingScroll = false;
        function smoothScrollTo(element, duration) {
            const targetPosition = element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };
                const nextScroll = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, nextScroll);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    isHandlingScroll = false;
                }
            }
            requestAnimationFrame(animation);
        }

        const handleWheel = (e) => {
            if (window.innerWidth > 1000) {
                if (window.scrollY < 50 && e.deltaY > 0 && !isHandlingScroll) {
                    const target = document.querySelector('.section-target');
                    if (target) {
                        e.preventDefault();
                        isHandlingScroll = true;
                        smoothScrollTo(target, 1000);
                    }
                }
                const historySection = document.querySelector('.section-target');
                const heroSec = document.querySelector('.hero');
                if (historySection && heroSec) {
                    const rect = historySection.getBoundingClientRect();
                    if (rect.top >= -50 && rect.top <= 100 && e.deltaY < 0 && !isHandlingScroll) {
                        e.preventDefault();
                        isHandlingScroll = true;
                        smoothScrollTo(heroSec, 1000);
                    }
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            if (heroSection) observer.unobserve(heroSection);
            window.removeEventListener('wheel', handleWheel);
            menuToggle?.removeEventListener('click', toggleMenu);
            menuBackdrop?.removeEventListener('click', toggleMenu);
            sideLinks.forEach(link => link.removeEventListener('click', toggleMenu));
        };
    }, []);

    return (
        <>
            <a href="#hero" className="fixed-logo-link">
                <div className="fixed-logo-text">Famissio</div>
            </a>

            <nav className="hero-navbar">
                <div className="nav-logo-wrapper">
                    <a href="#hero">
                        <img src="https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1" alt="Famissio Logo" className="nav-logo-img" />
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#hero">Accueil</a></li>
                    <li><a href="#mission">Nos missions</a></li>
                    <li><a href="#formation">Formation</a></li>
                    <li><a href="#temoignages">Témoignages</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="nav-circle">
                <button className="nav-toggle" id="menuToggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="menu-backdrop" id="menuBackdrop"></div>
            <div className="side-menu" id="sideMenu">
                <ul className="side-links">
                    <li><a href="#hero" className="side-link">Accueil</a></li>
                    <li><a href="#mission" className="side-link">Nos missions</a></li>
                    <li><a href="#formation" className="side-link">Formation</a></li>
                    <li><a href="#temoignages" className="side-link">Témoignages</a></li>
                    <li><a href="#contact" className="side-link">Contact</a></li>
                </ul>
            </div>

            <div className="hero" id="hero">
                <div className="hero-left">
                    <div className="hero-content">
                        <h1>Famissio</h1>
                        <div className="underline"></div>
                        <p>Des familles missionnaires au service des paroisses rurales de France, pour entourer le prêtre et donner un élan missionnaire.</p>
                        <a href="#mission" className="cta">
                            <span>Découvrir nos missions <i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="image-blob">
                        <img src={IMGS.heroBlob} alt="Équipe Famissio" />
                    </div>
                    <div className="float-stat"><i className="fas fa-users"></i> Aventure familiale</div>
                    <div className="float-stat"><i className="fas fa-heart"></i> Service des paroisses</div>
                    <div className="float-stat"><i className="fas fa-book-open"></i> Disciples missionnaires</div>
                </div>
                <div className="scroll-indicator"><div className="scroll-line"></div></div>
            </div>

            <div className="diagonal section-target" id="history">
                <div className="section-head">
                    <div className="eyebrow">Notre Histoire</div>
                    <h2 className="title">Comment tout a commencé</h2>
                    <p className="subtitle">Une aventure familiale devenue mouvement missionnaire</p>
                </div>
                <div className="story-grid">
                    <div className="image-wrap">
                        <div className="main-img">
                            <img src={IMGS.histoire} alt="Équipe" />
                        </div>
                        <div className="accent-shape"></div>
                    </div>
                    <div className="story-text">
                        <p>À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre la mission mais cette fois-ci en restant en France et pour accompagner des curés de paroisses rurales.</p>
                        <p>Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle paroisse du père Jean-Pierre Barrière dans la Creuse.</p>
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
                </div>
                <div className="video-frame">
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/bYFu-nvDDHI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* --- NOUVELLE SECTION 1 : PROGRAMME EN CARTES (MAGAZINE STYLE) --- */}
            <section className="mission-program-section" id="mission">
                <div className="section-head">
                    <span className="eyebrow">Au cœur de l'action</span>
                    <h2 className="title">Une Mission Paroissiale</h2>
                    <p className="subtitle">Découvrez les 6 piliers de notre semaine missionnaire</p>
                </div>

                <div className="program-grid">
                    {PROGRAM_DATA.map((card, index) => (
                        <div className="program-card" key={index}>
                            <div className="program-card-image">
                                <img src={card.img} alt={card.title} />
                            </div>
                            <div className="program-overlay"></div>

                            <div className="program-card-content">
                                <div className="program-icon-wrapper">
                                    <i className={card.icon}></i>
                                </div>
                                <h3>{card.title}</h3>
                            </div>

                            <div className="program-details">
                                <div className="program-details-inner">
                                    <h4>{card.title}</h4>
                                    <ul>
                                        {card.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- NOUVELLE SECTION 2 : APRÈS LA MISSION (HERO SPLIT) --- */}
            <section className="after-mission-hero">
                <div className="after-mission-overlay"></div>
                <div className="after-mission-content">
                    <div className="after-badge">
                        <i className="fas fa-star"></i> L'Après-Mission
                    </div>
                    <h2>Que faire après<br />la mission ?</h2>
                    <div className="after-separator"></div>
                    <p className="after-lead">
                        Plus les paroissiens sont mobilisés dans la préparation, plus ils participent aux temps de mission, plus la communion fraternelle se vit pendant la semaine.
                        <br /><br />
                        <strong>Plus beau et plus grand sera l'élan missionnaire au sein de la paroisse après la semaine avec Famissio !</strong>
                    </p>
                </div>
                <div className="after-mission-image" style={{ backgroundImage: `url(${IMGS.afterHero})` }}></div>
            </section>

            {/* --- NOUVELLE SECTION 3 : TOUSSAINT (SPLIT DESIGN) --- */}
            <section className="toussaint-section">
                <div className="toussaint-split">
                    <div className="toussaint-image" style={{ backgroundImage: `url(${IMGS.toussaint})` }}>
                        <div className="toussaint-image-overlay"></div>
                    </div>
                    <div className="toussaint-content">
                        <div className="toussaint-inner">
                            <div className="toussaint-badge">
                                <i className="fas fa-cross"></i> La Toussaint
                            </div>
                            <h2>Pourquoi la Mission à cette période ?</h2>
                            <div className="toussaint-divider"></div>

                            <div className="toussaint-questions">
                                <div className="question-item">
                                    <i className="fas fa-question-circle"></i>
                                    <p>Qui n'est jamais venu à l'église pour l'enterrement d'un proche ?</p>
                                </div>
                                <div className="question-item">
                                    <i className="fas fa-heart-broken"></i>
                                    <p>Qui n'a jamais connu la séparation avec un être aimé ?</p>
                                </div>
                                <div className="question-item">
                                    <i className="fas fa-cloud"></i>
                                    <p>Qui ne s'est jamais interrogé sur la vie après la mort ?</p>
                                </div>
                            </div>

                            <div className="toussaint-message">
                                <p>
                                    "La Toussaint est une formidable période pour entrer en contact avec nos contemporains concernés par la question de l'au-delà. Ce temps est propice à des cœurs à cœurs et des rencontres profondes."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section" id="formation">
                <div className="section-head">
                    <div className="eyebrow">L'Équipe Missionnaire</div>
                    <h2 className="title">Missionnaires à tout âge</h2>
                </div>
                <div className="team-layout">
                    <div className="team-image-box">
                        <div className="team-image">
                            <img src={IMGS.teamSticky} alt="Équipe" />
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>À combien arrivons-nous ?</h3>
                        <p>Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de la paroisse qui nous accueille. Une communauté dynamique prête à servir !</p>
                        <h3>Missionnaires à partir de quel âge ?</h3>
                        <p><strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et toucher les cœurs. Ils nous évangélisent !!</p>
                        <div className="quote-box">
                            <p>"Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Comme nous avons besoin de grands missionnaires ! Les grands missionnaires que nous désirons tant je crois que ce sont les enfants."</p>
                            <div className="quote-author">— Pierre-Alexandre Ludwig</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="banner">
                <div className="geo"></div><div className="geo"></div>
                <h2>La mission nous presse !</h2>
            </div>

            <section className="priest-dual">
                <div className="priest-intro-flex">
                    <img src={IMGS.priest} alt="Père Barrière" className="priest-circle-img" />
                    <div className="priest-name-zone">
                        <h2>Père Jean-Pierre Barrière</h2>
                        <p>Aumônier de Famissio</p>
                    </div>
                </div>
                <div className="priest-description">
                    <h3>L'appel du Christ et la vocation à l'évangélisation</h3>
                    <p>Depuis le jour de notre baptême nous sommes devenus enfants bien-aimés du Père. Par ce sacrement nous participons à la dignité même du Christ: celle de Prêtre, Prophète et Roi.</p>
                </div>
            </section>

            <section className="section-cream">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="pope-intro">
                        <img src={IMGS.pope} alt="Pape François" className="pope-image" />
                        <h2>Pape François</h2>
                    </div>
                    <div className="rosé-header">
                        <h2 className="title">7 Points Clés pour la Mission</h2>
                    </div>
                    <div className="pope-grid">
                        <div className="pope-item"><h4>1. Aller aux périphéries</h4><p>"Église en sortie" n'est pas une expression à la mode. Elle est un commandement du Christ.</p></div>
                        <div className="pope-item"><h4>2. Se laisser surprendre</h4><p>La mission n'est pas un projet d'entreprise bien rodé. L'Esprit saint agit comme il le veut.</p></div>
                        <div className="pope-item"><h4>3. Se mettre à l'écoute</h4><p>La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l'on éprouve en présence des paroles de Jésus.</p></div>
                        <div className="pope-item"><h4>4. Témoigner et non déclarer</h4><p>On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.</p></div>
                        <div className="pope-item"><h4>5. Éloge de la tendresse</h4><p>Annoncer l'Évangile ne consiste pas à assiéger les autres de discours.</p></div>
                        <div className="pope-item"><h4>6. Le contact humain</h4><p>La mission est un contact humain, elle est le témoignage d'hommes et de femmes.</p></div>
                    </div>
                    <div className="pope-message-box">
                        <h3>Que puis-je faire en tant que jeune pour mon église ?</h3>
                        <p>Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à l'extérieur ! Je veux que l'Église sorte dans les rues !</p>
                    </div>
                </div>
            </section>

            <div className="prayer" id="contact">
                <div className="prayer-logo">
                    <img src={IMGS.prayerLogo} alt="Logo Prière" />
                </div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" className="prayer-cta">
                    Accéder à la prière <i className="fas fa-arrow-right"></i>
                </a>
            </div>

            <footer className="site-footer">
                <ul className="footer-nav">
                    <li><a href="#hero">Accueil</a></li>
                    <li><a href="#mission">Nos missions</a></li>
                    <li><a href="#formation">Formation</a></li>
                    <li><a href="#temoignages">Témoignages</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer-copy">© 2024 Famissio - Tous droits réservés</div>
            </footer>
        </>
    );
}

export default Home;