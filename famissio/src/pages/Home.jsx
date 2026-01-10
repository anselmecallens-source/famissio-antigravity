import { useEffect } from 'react';
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
    useEffect(() => {
        let isHandlingScroll = false;
        let scrollAccumulator = 0;

        function smoothScrollTo(element, duration) {
            // Position cible ajustée (un petit décalage pour que ce soit pile poil)
            const targetPosition = element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;

                // Fonction Easing plus douce (Quintic) pour un démarrage lent et une fin douce
                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t * t * t + 2) + b;
                };

                const nextScroll = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, nextScroll);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    isHandlingScroll = false;
                    scrollAccumulator = 0;
                }
            }
            requestAnimationFrame(animation);
        }

        const handleWheel = (e) => {
            if (window.innerWidth <= 1000) return;

            const historySection = document.querySelector('#history');
            const heroSec = document.querySelector('#hero');

            // --- SCENARIO 1 : DESCENDRE (HERO -> HISTOIRE) ---
            // On détecte si l'utilisateur est dans la zone du Hero (0 à 100px)
            if (window.scrollY < 150 && e.deltaY > 0) {
                // On preventDefault IMMÉDIATEMENT pour éviter le conflit scroll natif vs JS
                e.preventDefault();

                if (!isHandlingScroll) {
                    scrollAccumulator += e.deltaY;

                    // SEUIL AUGMENTÉ (180) : Il faut scroller un peu (2-3 coups) pour déclencher l'effet
                    // C'est ça qui donne l'effet "je commence à scroller, puis tu m'aides"
                    if (scrollAccumulator > 180) {
                        isHandlingScroll = true;
                        // 1200ms = Scroll lent et fluide
                        smoothScrollTo(historySection, 1200);
                    } else {
                        // Si on n'a pas atteint le seuil, on simule un petit scroll manuel
                        // pour ne pas que l'utilisateur ait l'impression d'être bloqué
                        window.scrollBy(0, e.deltaY * 0.5);
                    }
                }
            }

            // --- SCENARIO 2 : REMONTER (HISTOIRE -> HERO) ---
            else if (historySection) {
                const rect = historySection.getBoundingClientRect();
                // Si le haut de la section Histoire est visible (proche du haut de l'écran)
                // et qu'on scrolle vers le haut
                if (rect.top >= -50 && rect.top <= 200 && e.deltaY < 0) {
                    e.preventDefault(); // Stop le glitch orange

                    if (!isHandlingScroll) {
                        scrollAccumulator += e.deltaY; // devient négatif

                        // Seuil négatif pour remonter
                        if (scrollAccumulator < -180) {
                            isHandlingScroll = true;
                            smoothScrollTo(heroSec, 1200);
                        } else {
                            // Petit scroll manuel simulé en attendant le déclenchement
                            window.scrollBy(0, e.deltaY * 0.5);
                        }
                    }
                } else {
                    scrollAccumulator = 0;
                }
            } else {
                scrollAccumulator = 0;
            }
        };

        // Ajout de { passive: false } CRUCIAL pour que e.preventDefault() fonctionne
        window.addEventListener('wheel', handleWheel, { passive: false });
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

            <div className="diagonal section-target" id="history">
                <div className="section-head">
                    <div className="eyebrow">Notre Histoire</div>
                    <h2 className="title">Comment tout a commencé</h2>
                    <p className="subtitle">Une aventure familiale devenue mouvement missionnaire</p>
                </div>
                {/* MODIFICATION ICI : 
                   marginTop: '120px' pousse le contenu vers le bas par rapport au container diagonal.
                   Cela dégage l'image de la navbar sans casser le fond orange.
                */}
                <div className="story-grid" style={{ marginTop: '120px' }}>
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
            <section className="mission-program-section" id="mission">
                <div className="section-head">
                    <span className="eyebrow">Au cœur de l'action</span>
                    <h2 className="title">Les Piliers de la Mission</h2>
                    <p className="subtitle">Découvrez notre démarche missionnaire</p>
                </div>
                <div className="program-grid">
                    {PROGRAM_DATA.map((card, index) => (
                        <div className="program-card" key={index}>
                            <div className="program-card-image"><img src={card.img} alt={card.title} /></div>
                            <div className="program-overlay"></div>
                            <div className="program-card-content">
                                <div className="program-icon-wrapper"><i className={card.icon}></i></div>
                                <h3>{card.title}</h3>
                            </div>
                            <div className="program-details">
                                <div className="program-details-inner">
                                    <h4>{card.title}</h4>
                                    <ul>{card.details.map((detail, idx) => <li key={idx}>{detail}</li>)}</ul>
                                </div>
                            </div>
                        </div>
                    ))}
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

            <section className="toussaint-section">
                <div className="toussaint-split">
                    <div className="toussaint-image" style={{ backgroundImage: `url(${IMGS.toussaint})` }}>
                        <div className="toussaint-image-overlay"></div>
                    </div>
                    <div className="toussaint-content">
                        <div className="toussaint-inner">
                            <div className="toussaint-badge"><i className="fas fa-cross"></i> La Toussaint</div>
                            <h2>Pourquoi la Mission à cette période ?</h2>
                            <div className="toussaint-divider"></div>
                            <div className="toussaint-questions">
                                <div className="question-item"><i className="fas fa-question-circle"></i><p>Qui n'est jamais venu à l'église pour l'enterrement d'un proche ?</p></div>
                                <div className="question-item"><i className="fas fa-cloud"></i><p>Qui ne s'est jamais interrogé sur la vie après la mort ?</p></div>
                            </div>
                            <div className="toussaint-message">
                                <p>"La Toussaint est une formidable période pour entrer en contact avec nos contemporains concernés par la question de l'au-delà."</p>
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

            <section className="priest-dual">
                <div className="priest-intro-flex">
                    <img src={IMGS.priest} alt="Père Barrière" className="priest-circle-img" />
                    <div className="priest-name-zone"><h2>Père Jean-Pierre Barrière</h2><p>Aumônier de Famissio</p></div>
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
                    <div className="rosé-header"><h2 className="title">7 Points Clés pour la Mission</h2></div>
                    <div className="pope-grid">
                        <div className="pope-item"><h4>1. Aller aux périphéries</h4><p>"Église en sortie" n'est pas une expression à la mode. Elle est un commandement du Christ.</p></div>
                        <div className="pope-item"><h4>2. Se laisser surprendre</h4><p>La mission n'est pas un projet d'entreprise bien rodé.</p></div>
                        <div className="pope-item"><h4>6. Le contact humain</h4><p>La mission est un contact humain, elle est le témoignage d'hommes et de femmes.</p></div>
                    </div>
                    <div className="pope-message-box">
                        <h3>Que puis-je faire en tant que jeune pour mon église ?</h3>
                        <p>Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à l'extérieur !</p>
                    </div>
                </div>
            </section>

            <div className="prayer" id="contact">
                <div className="prayer-logo"><img src={IMGS.prayerLogo} alt="Logo Prière" /></div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" className="prayer-cta">Accéder à la prière <i className="fas fa-arrow-right"></i></a>
            </div>
        </>
    );
}

export default Home;