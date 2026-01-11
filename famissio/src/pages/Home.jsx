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
        title: "Temps de Prière",
        icon: "fas fa-praying-hands",
        img: IMGS.gal.priere,
        details: ["Laudes, louanges, adoration", "Messe quotidienne", "Chapelet", "Complies"]
    },
    {
        title: "Évangélisation",
        icon: "fas fa-bible",
        img: IMGS.gal.evang,
        details: ["Visitations (rue, porte-à-porte)", "Bénédictions", "Processions", "Rencontres"]
    },
    {
        title: "Les Veillées",
        icon: "fas fa-moon",
        img: IMGS.gal.veillee,
        details: ["Veillée Miséricorde", "Veillée Au-delà", "Veillée Mariale", "Soirée festive"]
    },
    {
        title: "Bénédiction des cimetières",
        icon: "fas fa-cross",
        img: IMGS.gal.cimetiere,
        details: ["Prière pour les défunts", "Rencontre des familles", "Espérance", "Toussaint"]
    },
    {
        title: "Journée des familles",
        icon: "fas fa-users",
        img: IMGS.gal.familles,
        details: ["Jeux intervillages", "Repas partagé", "Spectacle", "Messe de clôture"]
    },
    {
        title: "Envoi en Mission",
        icon: "fas fa-rocket",
        img: IMGS.gal.envoi,
        details: ["Journée de rassemblement", "Envoi officiel", "Témoignages", "Louange"]
    }
];

function Home() {
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