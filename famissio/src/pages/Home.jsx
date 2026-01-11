import { useEffect, useState, useRef } from 'react';
import '../index.css';

/* --- IMAGES --- */
const IMGS = {
    heroBlob: "https://wsrv.nl/?url=https://www.dropbox.com/scl/fi/w2giupgix5rjmf8k97485/Famissio-252.jpg%3Frlkey=t9adnjqx59rmrid5540asx2cw%26st=41ucuw6p%26raw=1&w=1000&output=webp",
    histoire: "https://www.dropbox.com/scl/fi/1yhtq4m69r3azt0bwfhlr/facebook_1607379806212_6741839550715485834.jpg?rlkey=wphw7agzoatzbs9j5lrqucvnb&st=08zbyaix&raw=1",
    prayerLogo: "https://www.dropbox.com/scl/fi/kh7mhfrgqasyw1unjhzbb/Logo-Famissio-1.png?rlkey=4a5umup7f9b66oxtgvr8deas9&st=z51lydtw&raw=1",
    teamSticky: "https://famissio-99.webself.net/file/si1759337/trrrrrrrzzzzzzzf%20(2)-fi36539933x520.jpg",
    priest: "https://famissio-99.webself.net/file/si1759337/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg",
    pope: "https://famissio-99.webself.net/file/si1759337/pape_10_0-fi27235959x470.jpg",
    // Images galerie
    gal: {
        priere: "https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg",
        evang: "https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG",
        veillee: "https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG",
        cimetiere: "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG",
        familles: "https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG",
        envoi: "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG"
    },
    cards: [
        "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG",
        "https://famissio-99.webself.net/file/si1759337/IMGP2714-fi34268817x452.JPG",
        "https://famissio-99.webself.net/file/si1759337/IMG_20211104_171612-fi32460644x451.jpg",
        "https://famissio-99.webself.net/file/si1759337/DSC06168%20(1)-fi34268804x450.JPG",
        "https://famissio-99.webself.net/file/si1759337/DSC07017-fi34268812x450.JPG",
        "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG"
    ],
    afterHero: "https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG",
    toussaint: "https://famissio-99.webself.net/file/si1759337/DSC06370-fi34268813x450.JPG"
};

/* --- COMPOSANTS ICONES --- */
function IconChurch(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2 5 7v15h5v-5h4v5h5V7l-7-5Zm2 12h-4v-2h4v2Zm0-4h-4V8h4v2Z" />
        </svg>
    );
}
function IconBullhorn(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 11v2c0 .55.45 1 1 1h2l3.5 3.5c.63.63 1.72.18 1.72-.71V14h6l4-2V8l-4-2H11V4.21c0-.89-1.08-1.34-1.72-.71L6 7H4c-.55 0-1 .45-1 1v3Zm8 1H6.41L5 10.59V13h6v-1Zm8-2.76v5.52L17.5 14H11V10h6.5L19 9.24Z" />
        </svg>
    );
}
function IconCrown(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M5 16 3 7l5 4 4-6 4 6 5-4-2 9H5Zm0 2h14v2H5v-2Z" />
        </svg>
    );
}

const PROGRAM_DATA = [
    {
        title: "Envoi en Mission",
        icon: "fas fa-rocket",
        img: IMGS.cards[0],
        details: ["Journée de rassemblement", "Temps de prière et louange", "Témoignages poignants", "Envoi officiel"]
    },
    {
        title: "Formation",
        icon: "fas fa-graduation-cap",
        img: IMGS.cards[1],
        details: ["Jeux de rôle", "Préparation témoignage", "Formation quotidienne", "Relecture de mission", "Fiches de formation"]
    },
    {
        title: "Temps de Prière",
        icon: "fas fa-praying-hands",
        img: IMGS.cards[2],
        details: ["Laudes, louanges, adoration", "Messe quotidienne", "Chapelet", "Complies"]
    },
    {
        title: "Au Cœur de la Mission",
        icon: "fas fa-people-carry",
        img: IMGS.cards[3],
        details: ["Visitations (rue, porte-à-porte)", "Bénédictions", "Processions", "Activités culturelles", "Solidarité (EHPAD)"]
    },
    {
        title: "Vie Fraternelle",
        icon: "fas fa-heart",
        img: IMGS.cards[4],
        details: ["Repas partagés", "Soirées jeux", "Détente et sport", "Veillée festive"]
    },
    {
        title: "Les Veillées",
        icon: "fas fa-moon",
        img: IMGS.cards[5],
        details: ["Veillée Miséricorde", "Veillée Au-delà", "Veillée Mariale", "Ciné-débat", "Veillée de consolation"]
    }
];

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);

    // Gestion du scroll quand le modal est ouvert
    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isModalOpen]);

    const openModalAt = (index) => {
        setCurrentSlide(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const goToSlide = (index) => {
        let next = index;
        if (next < 0) next = 0;
        if (next > 2) next = 2; // On a 3 slides (0, 1, 2)
        setCurrentSlide(next);
    };

    // Gestion du Swipe tactile
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX.current - 50) {
            goToSlide(currentSlide + 1); // Swipe gauche -> suivant
        }
        if (touchEndX > touchStartX.current + 50) {
            goToSlide(currentSlide - 1); // Swipe droite -> précédent
        }
    };

    useEffect(() => {
        let isHandlingScroll = false;
        let scrollAccumulator = 0; // Accumulateur pour la résistance (effet "2 scrolls")

        function smoothScrollTo(element, duration) {
            const targetPosition = element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                // Easing "easeInOutQuad" pour un effet smooth
                const ease = (t, b, c, d) => { t /= d / 2; if (t < 1) return c / 2 * t * t + b; t--; return -c / 2 * (t * (t - 2) - 1) + b; };
                const nextScroll = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, nextScroll);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    isHandlingScroll = false;
                    scrollAccumulator = 0; // Reset après animation
                }
            }
            requestAnimationFrame(animation);
        }

        const handleWheel = (e) => {
            if (window.innerWidth <= 1000) return; // Désactivé sur mobile

            const historySection = document.querySelector('#history');
            const heroSec = document.querySelector('#hero');

            // --- SCENARIO 1 : DESCENDRE (HERO -> HISTOIRE) ---
            // On vérifie qu'on est TOUT en haut (scrollY < 20)
            if (window.scrollY < 20 && e.deltaY > 0) {
                if (!isHandlingScroll) {
                    // On empêche le scroll natif pour accumuler l'énergie
                    e.preventDefault();
                    scrollAccumulator += e.deltaY;

                    // SEUIL DE DÉCLENCHEMENT (environ 150 = un bon coup de molette ou deux petits)
                    if (scrollAccumulator > 150) {
                        isHandlingScroll = true;
                        smoothScrollTo(historySection, 800); // 800ms = transition douce
                    }
                }
            }

            // --- SCENARIO 2 : REMONTER (HISTOIRE -> HERO) ---
            else if (historySection) {
                const rect = historySection.getBoundingClientRect();
                // On vérifie que la section Histoire est en haut de l'écran (avec une marge d'erreur)
                // et qu'on scrolle vers le HAUT (deltaY < 0)
                if (rect.top >= -50 && rect.top <= 100 && e.deltaY < 0) {
                    if (!isHandlingScroll) {
                        e.preventDefault();
                        scrollAccumulator += e.deltaY; // deviendra négatif

                        // SEUIL NÉGATIF pour remonter
                        if (scrollAccumulator < -150) {
                            isHandlingScroll = true;
                            smoothScrollTo(heroSec, 800);
                        }
                    }
                } else {
                    // Si on est ailleurs dans la page, on remet le compteur à zéro
                    scrollAccumulator = 0;
                }
            } else {
                scrollAccumulator = 0;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        // Clean up
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <>
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

            {/* AJOUT DU PADDING-TOP ICI pour descendre l'image et la bulle */}
            <div className="diagonal section-target" id="history" style={{ paddingTop: '6rem' }}>
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
                        <p>À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle a voulu poursuivre la mission mais cette fois-ci en restant en France.</p>
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

            {/* --- SECTION 1: PROGRAMME (V2 CARDS) --- */}
            <section className="section-mission-action" id="mission">
                <div className="section-head">
                    <span className="eyebrow">Au cœur de l'action</span>
                    <h2 className="title" style={{ fontFamily: '"Playfair Display", serif' }}>Une Mission Paroissiale</h2>
                    <p className="subtitle">Découvrez notre démarche missionnaire</p>
                </div>
                <div className="mission-gallery">
                    <div className="gallery-item">
                        <img src={IMGS.gal.priere} alt="Temps de prière" />
                        <h4>Temps de prière</h4>
                    </div>
                    <div className="gallery-item">
                        <img src={IMGS.gal.evang} alt="Évangélisation" />
                        <h4>Évangélisation</h4>
                    </div>
                    <div className="gallery-item">
                        <img src={IMGS.gal.veillee} alt="Veillée" />
                        <h4>Veillée</h4>
                    </div>
                    <div className="gallery-item">
                        <img src={IMGS.gal.cimetiere} alt="Bénédiction des cimetières" />
                        <h4>Bénédiction des cimetières</h4>
                    </div>
                    <div className="gallery-item">
                        <img src={IMGS.gal.familles} alt="Journée des familles" />
                        <h4>Journée des familles</h4>
                    </div>
                    <div className="gallery-item">
                        <img src={IMGS.gal.envoi} alt="Envoi en mission" />
                        <h4>Envoi en mission</h4>
                    </div>
                </div>
            </section>

            {/* --- SECTION RESTAURÉE : EN ACTION (GALERIE) --- */}
            <section style={{ background: '#f8f9fa' }} id="temoignages">
                <div className="section-head">
                    <div className="eyebrow">En Action</div>
                    <h2 className="title">Une Mission Paroissiale</h2>
                </div>
                <div className="gallery-wrapper">
                    <div className="gallery-track">
                        <div className="gallery-card"><img src={IMGS.gal.priere} alt="Prière" /><div className="gallery-label">Temps de prière</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.evang} alt="Évangélisation" /><div className="gallery-label">Évangélisation</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.veillee} alt="Veillée" /><div className="gallery-label">Veillée</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.cimetiere} alt="Cimetière" /><div className="gallery-label">Bénédiction des cimetières</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.familles} alt="Familles" /><div className="gallery-label">Journée des familles</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.envoi} alt="Envoi" /><div className="gallery-label">Envoi en mission</div></div>
                    </div>
                </div>
                <div className="section-head" style={{ marginTop: '80px' }}>
                    <h2 className="title">Le Programme en Vidéo</h2>
                </div>
                <div className="video-frame" style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px', background: 'white' }}>
                    <div className="video-box">
                        <iframe src="https://www.youtube.com/embed/ZnW9oGHpAyQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="after-mission-hero">
                <div className="after-mission-overlay"></div>
                <div className="after-mission-content">
                    <div className="after-badge"><i className="fas fa-star"></i> L'Après-Mission</div>
                    <h2>Que faire après<br />la mission ?</h2>
                    <div className="after-separator"></div>
                    <p className="after-lead">Plus les paroissiens sont mobilisés, plus l'élan missionnaire sera grand après la semaine avec Famissio !</p>
                </div>
                <div className="after-mission-image" style={{ backgroundImage: `url(${IMGS.afterHero})` }}></div>
            </section>



            <section className="team-section" id="formation">
                <div className="section-head">
                    <div className="eyebrow">L'Équipe Missionnaire</div>
                    <h2 className="title">Missionnaires à tout âge</h2>
                </div>
                <div className="team-layout">
                    <div className="team-image-box">
                        <div className="team-image"><img src={IMGS.teamSticky} alt="Équipe" /></div>
                    </div>
                    <div className="team-content">
                        <h3>À combien arrivons-nous ?</h3>
                        <p>Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de la paroisse.</p>
                        <h3>Missionnaires à partir de quel âge ?</h3>
                        <p><strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et toucher les cœurs.</p>
                        <div className="quote-box">
                            <p>"Comme nous avons besoin de grands missionnaires ! Les grands missionnaires que nous désirons tant je crois que ce sont les enfants."</p>
                            <div className="quote-author">— Pierre-Alexandre Ludwig</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="banner">
                <div className="geo"></div><div className="geo"></div>
                <h2>La mission nous presse !</h2>
            </div>

            <section className="priest-section">
                <div className="container">
                    <div className="profile-card">
                        <img src={IMGS.priest} alt="Père Jean-Pierre Barrière" />
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
                            <span>Prêtre</span>
                        </div>
                        <div className="mobile-icon-btn" onClick={() => openModalAt(1)}>
                            <span>Prophète</span>
                        </div>
                        <div className="mobile-icon-btn" onClick={() => openModalAt(2)}>
                            <span>Roi</span>
                        </div>
                    </div>

                    {/* GRILLE DESKTOP */}
                    <div className="priest-pillars">
                        <div className="pillar-item">
                            <h4>Je suis Prêtre</h4>
                            <p>Seul Jésus est le "grand prêtre par Excellence" (He 4, 14) comme nous le dit l'auteur de la Lettre aux Hébreux.
                                Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent.
                                Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.</p>
                        </div>
                        <div className="pillar-item">
                            <h4>Je suis Prophète</h4>
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
                            <h4>Je suis Roi</h4>
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

            <section className="section-cream">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="pope-intro">
                        <img src={IMGS.pope} alt="Pape François" className="pope-image" />
                        <h2>Pape François</h2>
                    </div>
                    <div className="rosé-header"><h2 className="title">7 Points Clés pour la Mission</h2></div>
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
                    <div className="pope-message-box">
                        <h3>Que puis-je faire en tant que jeune pour mon église ?</h3>
                        <p style={{ textAlign: "justify" }}>
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
                </div>
            </section>

            <div className="prayer" id="contact">
                <div className="prayer-logo"><img src={IMGS.prayerLogo} alt="Logo Prière" /></div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" className="prayer-cta">Accéder à la prière <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className={`pillars-modal ${isModalOpen ? 'active' : ''}`}>
                <div className="close-modal-btn" onClick={closeModal}>×</div>
                <div className="carousel-container"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {/* Slide 1 : Prêtre */}
                        <div className="carousel-slide">
                            <div className="mobile-card">
                                <h4>
                                    <IconChurch />
                                    Je suis Prêtre
                                </h4>
                                <p>Seul Jésus est le "grand prêtre par Excellence" (He 4, 14) comme nous le dit l'auteur de la Lettre aux Hébreux.
                                    Mais par notre baptême nous rendons vivant le sacerdoce du Christ pour celles et ceux qui nous entourent.
                                    Jésus offre au Père toute prière. Nous participons à cette offrande par notre sacerdoce baptismal.</p>
                            </div>
                        </div>
                        {/* Slide 2 : Prophète */}
                        <div className="carousel-slide">
                            <div className="mobile-card">
                                <h4>
                                    <IconBullhorn />
                                    Je suis Prophète
                                </h4>
                                <p>Le prophète est le "porte-parole" de Dieu.
                                    Comme je participe à cette dignité, je suis, moi aussi, un prophète qui dit, annonce et vit la Parole.
                                    Nous sommes des prophètes de bonheur et non de malheur.
                                    Nous annonçons la Bonne nouvelle à nos frères et soeurs en humanité.
                                    Notre mission est de l'annoncer.
                                    Si nous sommes reliés à Lui, alors nous pourrons dire ce qui nous fait vivre.</p>
                            </div>
                        </div>
                        {/* Slide 3 : Roi */}
                        <div className="carousel-slide">
                            <div className="mobile-card">
                                <h4>
                                    <IconCrown />
                                    Je suis Roi
                                </h4>
                                <p>Être roi pour un baptisé, c'est être au service. "Qui es-tu Roi d'humilité...".
                                    La fonction royale consiste à mettre en oeuvre le commandement du frère comme Jésus lors du lavement des pieds.
                                    Soyons inventifs, créatifs dans le service du frère.
                                    Notre vocation est de témoigner de la vie même du Christ.
                                    Nous sommes ses yeux, ses oreilles, ses mains.
                                    Rendons grâce à Dieu de nous avoir choisi comme ses témoins.</p>
                            </div>
                        </div>
                    </div>
                    {/* Dots */}
                    <div className="carousel-dots" style={{ justifyContent: 'center' }}>
                        {[0, 1, 2].map(idx => (
                            <div
                                key={idx}
                                className={`dot ${currentSlide === idx ? 'active' : ''}`}
                                onClick={() => goToSlide(idx)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;