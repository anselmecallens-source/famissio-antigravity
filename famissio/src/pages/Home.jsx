import { useEffect } from 'react';
import '../styles.css';

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
    }
};

function Home() {

    useEffect(() => {
        // --- 1. GESTION DE L'APPARITION DU LOGO FIXE & NAV ---
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


        // --- 2. EFFET ANTIGRAVITY (SCROLL) ---
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
                // Descente vers l'histoire
                if (window.scrollY < 50 && e.deltaY > 0 && !isHandlingScroll) {
                    const target = document.querySelector('.section-target');
                    if (target) {
                        e.preventDefault();
                        isHandlingScroll = true;
                        smoothScrollTo(target, 1000);
                    }
                }

                // Remontée vers le Hero
                const historySection = document.querySelector('.section-target');
                const heroSec = document.querySelector('.hero');

                if (historySection && heroSec) {
                    const rect = historySection.getBoundingClientRect();
                    // Si on est juste au-dessus de l'Histoire et qu'on scrolle vers le haut
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
                        <div className="badge" style={{ display: 'none' }}>Mission • Foi • Famille</div>
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
                        <div className="mission-icon"><i className="fas fa-hands-helping"></i></div>
                        <h3>Que faisons-nous ?</h3>
                        <p>Nous nous mettons au service de paroisses pour mener avec elles une mission. Nous arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses d'un même diocèse.</p>
                    </div>
                    <div className="mission-card">
                        <div className="mission-icon"><i className="fas fa-calendar-alt"></i></div>
                        <h3>Préparation</h3>
                        <p>La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de missionnaires qui se retrouvent régulièrement par visioconférences pour élaborer le programme ensemble.</p>
                    </div>
                    <div className="mission-card">
                        <div className="mission-icon"><i className="fas fa-map-marker-alt"></i></div>
                        <h3>Où allons-nous ?</h3>
                        <p>Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous envoie en mission, en accord avec le diocèse local. Nous nous adaptons aux besoins de chaque communauté.</p>
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
                            <p>"Aujourd'hui, ce n'est pas seulement par-delà les océans qu'il faut propager la bonne parole, mais aussi dans nos villes et villages. Comme nous avons besoin de grands missionnaires ! Les grands missionnaires que nous désirons tant je crois que ce sont les enfants. Car évangéliser ce n'est pas asséner une vérité comme une évidence, mais la présenter en tremblant comme un mystère..."</p>
                            <div className="quote-author">— Pierre-Alexandre Ludwig</div>
                        </div>
                        <p style={{ fontStyle: 'italic', color: '#666' }}>«Les enfants sont transparents, ils ne calculent pas. À un monsieur qui expliquait ne pas croire, Raphaël, âgé de 12 ans, n'a cessé de répéter, inquiet : "Mais vous savez quand même que Dieu vous aime?"»</p>
                    </div>
                </div>
            </section>

            <section style={{ background: '#f8f9fa' }} id="temoignages">
                <div className="section-head">
                    <div className="eyebrow">En Action</div>
                    <h2 className="title">Une Mission Paroissiale</h2>
                </div>
                <div className="gallery-wrapper">
                    <div className="gallery-track" id="galleryTrack">
                        <div className="gallery-card"><img src={IMGS.gal.priere} alt="Prière" /><div className="gallery-label">Temps de prière</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.evang} alt="Évangélisation" /><div className="gallery-label">Évangélisation</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.veillee} alt="Veillée" /><div className="gallery-label">Veillée</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.cimetiere} alt="Cimetière" /><div className="gallery-label">Bénédiction des cimetières</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.familles} alt="Familles" /><div className="gallery-label">Journée des familles</div></div>
                        <div className="gallery-card"><img src={IMGS.gal.envoi} alt="Envoi" /><div className="gallery-label">Envoi en mission</div></div>
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
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="pope-intro">
                        <img src={IMGS.pope} alt="Pape François" className="pope-image" />
                        <h2>Pape François</h2>
                    </div>
                    <div className="rosé-header">
                        <h2 className="title">7 Points Clés pour la Mission</h2>
                    </div>
                    <div className="pope-grid">
                        <div className="pope-item"><h4>1. Aller aux périphéries</h4><p>"Église en sortie" n'est pas une expression à la mode. Elle est un commandement du Christ. Soit l'Église est en sortie, soit elle n'est pas l'Église.</p></div>
                        <div className="pope-item"><h4>2. Se laisser surprendre</h4><p>La mission n'est pas un projet d'entreprise bien rodé. L'Esprit saint agit comme il le veut, quand il le veut et où il le veut.</p></div>
                        <div className="pope-item"><h4>3. Se mettre à l'écoute</h4><p>La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce vertige que l'on éprouve en présence des paroles de Jésus.</p></div>
                        <div className="pope-item"><h4>4. Témoigner et non déclarer</h4><p>On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.</p></div>
                        <div className="pope-item"><h4>5. Éloge de la tendresse</h4><p>Annoncer l'Évangile ne consiste pas à assiéger les autres de discours. Lancer des vérités comme des pierres, c'est le signe que les paroles se sont transformées en idéologie.</p></div>
                        <div className="pope-item"><h4>6. Le contact humain</h4><p>La mission est un contact humain, elle est le témoignage d'hommes et de femmes qui disent : "Je connais Jésus, je voudrais te le faire connaître".</p></div>
                    </div>
                    <div className="pope-message-box">
                        <h3>Que puis-je faire en tant que jeune pour mon église ?</h3>
                        <p>Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à l'extérieur ! Je veux que l'Église sorte dans les rues ! Les paroisses, les écoles, les institutions, sont appelés à sortir ! S'ils ne sortent pas, ils deviennent une ONG et l'Église ne peut pas être une ONG.</p>
                        <p style={{ marginTop: '20px', fontWeight: '600' }}>N'oubliez pas, mettez la pagaille !</p>
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