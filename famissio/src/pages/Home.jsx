import { useEffect, useState } from 'react';

/* --- IMAGES --- */
const IMGS = {
    heroBlob: "https://wsrv.nl/?url=https://www.dropbox.com/scl/fi/w2giupgix5rjmf8k97485/Famissio-252.jpg%3Frlkey=t9adnjqx59rmrid5540asx2cw%26st=41ucuw6p%26raw=1&w=1000&output=webp",
    histoire: "https://www.dropbox.com/scl/fi/1yhtq4m69r3azt0bwfhlr/facebook_1607379806212_6741839550715485834.jpg?rlkey=wphw7agzoatzbs9j5lrqucvnb&st=08zbyaix&raw=1",
    prayerLogo: "https://www.dropbox.com/scl/fi/kh7mhfrgqasyw1unjhzbb/Logo-Famissio-1.png?rlkey=4a5umup7f9b66oxtgvr8deas9&st=z51lydtw&raw=1",
    teamSticky: "https://famissio-99.webself.net/file/si1759337/trrrrrrrzzzzzzzf%20(2)-fi36539933x520.jpg",
    priest: "https://famissio-99.webself.net/file/si1759337/facebook_1607380343662_6741841804946048579-fotor-enhance-20251028173949-fi36537319x470.jpg",
    pope: "https://famissio-99.webself.net/file/si1759337/pape_10_0-fi27235959x470.jpg",
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
        color: "#c82904",
        details: ["La semaine de mission commence pour les Famissionaires (seulement) par une journée de rassemblement, de prière, de témoignages, de temps fraternels et d'envoi en mission."]
    },
    {
        title: "Formation",
        icon: "fas fa-graduation-cap",
        img: IMGS.cards[1],
        color: "#f46a07",
        details: [
            "Formation et jeux de rôle pour les Famissionnaires comme pour les Paroissiens le Dimanche après-midi.",
            "Préparation d'un témoignage personnel, pendant laquelle chacun revisite, sous le regard de Dieu, sa propre histoire sainte. Il s'entraine ensuite plusieurs fois en binôme à partager son témoignage.",
            "Une formation quotidienne de 5mn donnée chaque matin par un consacré sur un sujet nécessaire à la mission.",
            "Un temps de relecture de mission quotidien, organisé par tranche d'âge et animé par les consacrés, permettant de revenir sur des points de formation nécessaires.",
            "Des fiches de formation disponibles sur ce Blog à l'onglet Formation sur lesquelles chacun peut revenir 365 jours/365"
        ]
    },
    {
        title: "Temps de Prière",
        icon: "fas fa-praying-hands",
        img: IMGS.cards[2],
        color: "#dc2626",
        details: [
            "Chaque journée commence par une heure de laudes, louanges, adoration et formation.",
            "Une messe quotidienne",
            "La récitation du Chapelet",
            "Les Complies pour clore la journée."
        ]
    },
    {
        title: "Des Temps de Mission",
        icon: "fas fa-people-carry",
        img: IMGS.cards[3],
        color: "#ea580c",
        details: [
            "Visitations dans la rue",
            "Visitations sur les marchés",
            "Visitations de personnes indiquées par la paroisse",
            "Porte-à-porte",
            "Bénédictions de cimetière",
            "Bénédictions de commerces, de maisons, de tracteurs, de fermes...",
            "Journée des familles (activités pour les jeunes et ateliers éducatifs pour les parents)",
            "Pièces de théâtre sur les places publiques",
            "Tournois de foot",
            "Procession des saints, procession du Saint Sacrement, procession mariale, procession aux flambeaux",
            "Visite aux AHPAD, dans des structures pour personnes handicapées...",
            "Chemins de croix dans les rues",
            "Pélerinage",
            "Concert polyphonique dans la rue"
        ]
    },
    {
        title: "Temps Fraternels",
        icon: "fas fa-heart",
        img: IMGS.cards[4],
        color: "#c2410c",
        details: [
            "Repas entre Famissionnaires et Paroissiens",
            "Soirée jeux pour apprendre à se connaître",
            "Temps de détente autour d'un ballon ou de jeux de société pour les enfants à l'heure du déjeuner",
            "Veillée festive en fin de mission entre Famissionnaires et Paroissiens"
        ]
    },
    {
        title: "Veillées",
        icon: "fas fa-moon",
        img: IMGS.cards[5],
        color: "#991b1b",
        details: [
            "Veillée Miséricorde",
            "Veillée sur le thème de l'au-delà et de nos défunts",
            "Veillée mariale",
            "Veillée ciné-débat",
            "Veillée pour les malades et les personnes qui souffrent"
        ]
    }
];

function Home() {
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        let isScrolling = false;
        let targetScroll = 0;
        let currentScroll = 0;
        let animationId = null;

        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function smoothScroll() {
            if (Math.abs(targetScroll - currentScroll) < 0.5) {
                currentScroll = targetScroll;
                isScrolling = false;
                window.scrollTo(0, currentScroll);
                return;
            }

            currentScroll = lerp(currentScroll, targetScroll, 0.08);
            window.scrollTo(0, currentScroll);
            animationId = requestAnimationFrame(smoothScroll);
        }

        const handleWheel = (e) => {
            if (window.innerWidth <= 1000) return;

            const heroSection = document.querySelector('#hero');
            const historySection = document.querySelector('#history');
            const scrollPos = window.scrollY;
            const heroHeight = heroSection?.offsetHeight || 0;
            const historyTop = historySection?.offsetTop || 0;

            const transitionStart = heroHeight * 0.3;
            const transitionEnd = heroHeight * 0.95;

            if (scrollPos >= transitionStart && scrollPos < transitionEnd && e.deltaY > 0) {
                e.preventDefault();
                if (!isScrolling) {
                    isScrolling = true;
                    targetScroll = historyTop;
                    currentScroll = scrollPos;
                    cancelAnimationFrame(animationId);
                    smoothScroll();
                }
                return;
            }

            if (scrollPos > transitionStart && scrollPos <= historyTop + 200 && e.deltaY < 0) {
                e.preventDefault();
                if (!isScrolling) {
                    isScrolling = true;
                    targetScroll = 0;
                    currentScroll = scrollPos;
                    cancelAnimationFrame(animationId);
                    smoothScroll();
                }
                return;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
            cancelAnimationFrame(animationId);
        };
    }, []);

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <style>{`
                /* Ajustement position hero */
                .hero-right-adjusted {
                    margin-top: 100px;
                }
            `}</style>

            {/* 1. HERO */}
            <div className="hero" id="hero">
                <div className="hero-left">
                    <div className="hero-content">
                        <h1>Famissio</h1>
                        <div className="underline"></div>
                        <p>Des familles missionnaires au service des paroisses rurales de France, pour entourer le prêtre et donner un élan missionnaire.</p>
                        <a href="/missions" className="cta">
                            <span>Découvrir nos missions <i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="hero-right hero-right-adjusted">
                    <div className="image-blob">
                        <img src={IMGS.heroBlob} alt="Équipe Famissio" />
                    </div>
                    <div className="float-stat"><i className="fas fa-users"></i> Aventure familiale</div>
                    <div className="float-stat"><i className="fas fa-heart"></i> Service des paroisses</div>
                    <div className="float-stat"><i className="fas fa-book-open"></i> Disciples missionnaires</div>
                </div>
                <div className="scroll-indicator"><div className="scroll-line"></div></div>
            </div>

            {/* 2. HISTOIRE */}
            <div className="diagonal section-target" id="history">
                <div className="section-head">
                    <div className="eyebrow">Notre Histoire</div>
                    <h2 className="title">Comment tout a commencé</h2>
                    <p className="subtitle">Une aventure familiale devenue mouvement missionnaire</p>
                </div>
                <div className="story-grid" style={{ paddingTop: '12rem' }}>
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

            {/* 3. VIDEO */}
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

            {/* 4. PROGRAMME */}
            <section className="mission-program-section" id="mission">
                <div className="section-head">
                    <span className="eyebrow">Au cœur de l'action</span>
                    <h2 className="title">Une Mission Paroissiale</h2>
                    <p className="subtitle">Découvrez notre démarche missionnaire</p>
                </div>
                <div className="expandable-cards-grid">
                    {PROGRAM_DATA.map((card, index) => (
                        <div
                            className={`expandable-card ${expandedCards[index] ? 'expanded' : ''}`}
                            key={index}
                            onClick={() => toggleCard(index)}
                            style={{ '--card-color': card.color }}
                        >
                            <div className="expandable-card-header">
                                <div className="expandable-icon">
                                    <i className={card.icon}></i>
                                </div>
                                <h3>{card.title}</h3>
                                <div className="expand-indicator">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="expandable-card-content">
                                <ul>
                                    {card.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. TEMOIGNAGES / GALERIE */}
            <section style={{ background: '#f8f9fa' }} id="temoignages">
                <div className="section-head">
                    <div className="eyebrow">En Action</div>
                    <h2 className="title">La Mission en Images</h2>
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

            {/* 6. APRES-MISSION */}
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

            {/* 7. TOUSSAINT */}
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

            {/* 8. EQUIPE / FORMATION */}
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

            {/* 9. BANNIERE */}
            <div className="banner">
                <div className="geo"></div><div className="geo"></div>
                <h2>La mission nous presse !</h2>
            </div>

            {/* 10. PRETRE */}
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

            {/* 11. PAPE */}
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

            {/* 12. PRIERE */}
            <div className="prayer" id="contact">
                <div className="prayer-logo"><img src={IMGS.prayerLogo} alt="Logo Prière" /></div>
                <h2>Prière du Famissionnaire</h2>
                <p>Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.</p>
                <a href="https://famissio-99.webself.net/priere-de-famissio" target="_blank" rel="noopener noreferrer" className="prayer-cta">Accéder à la prière <i className="fas fa-arrow-right"></i></a>
            </div>
        </>
    );
}

export default Home;