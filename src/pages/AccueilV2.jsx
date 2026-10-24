import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  HelpingHand,
  Calendar,
  MapPin,
  Church,
  Megaphone,
  Crown,
  ArrowRight,
  Play,
  Heart,
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import './AccueilV2.css';

// Hook personnalisé pour le défilement horizontal à la souris (Drag-to-Scroll)
const useDraggableScroll = (ref) => {
  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      slider.style.scrollSnapType = 'none';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      slider.classList.remove('active');
      slider.style.scrollSnapType = 'x mandatory';
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', stopDrag);
    slider.addEventListener('mouseup', stopDrag);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', stopDrag);
      slider.removeEventListener('mouseup', stopDrag);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, [ref]);
};

const AccueilV2 = () => {
  // Références pour le défilement horizontal
  const practiceCardsRef = useRef(null);
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);

  useDraggableScroll(practiceCardsRef);

  const scrollToCard = (ref, index) => {
    if (!ref.current) return;
    const cards = ref.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setActivePracticeIndex(index);
    }
  };

  // State pour la modal des 6 Temps Forts
  const [activeMission, setActiveMission] = useState(null);
  const missionModalTriggerRef = useRef(null);

  const openMission = (block, event) => {
    missionModalTriggerRef.current = event.currentTarget;
    setActiveMission(block);
  };

  useEffect(() => {
    if (!activeMission) return undefined;

    const scrollY = window.scrollY;
    const body = document.body;
    const root = document.documentElement;

    body.classList.add('modal-open');
    root.classList.add('modal-open');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveMission(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('modal-open');
      root.classList.remove('modal-open');
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      root.style.overflow = '';

      window.scrollTo({ left: 0, top: scrollY, behavior: 'instant' });
      missionModalTriggerRef.current?.focus({ preventScroll: true });
    };
  }, [activeMission]);

  // Données officielles des 6 Temps Forts
  const missionBlocks = [
    {
      id: 1,
      num: '01',
      title: 'ENVOI EN MISSION',
      image: '/assets/images/6 piliers de la mission/Envoi en mission.webp',
      summary:
        "Avant de partir dans les villages, les familles se rassemblent pour se confier au Seigneur et recevoir ensemble la bénédiction de l'Église.",
      content:
        "La semaine de mission commence pour les Famissionnaires (seulement) par une journée de rassemblement, de prière, de témoignages, de temps fraternels et d'envoi en mission."
    },
    {
      id: 2,
      num: '02',
      title: 'FORMATION',
      image: '/assets/images/6 piliers de la mission/Formation.webp',
      summary:
        "Pour oser témoigner avec simplicité, chacun apprend à revisiter sa propre foi et à trouver les mots justes pour parler de Dieu.",
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
      num: '03',
      title: 'TEMPS DE PRIÈRE',
      image: '/assets/images/6 piliers de la mission/Temps de prière.webp',
      summary:
        "La prière est le souffle secret de la mission : chaque journée s'enracine auprès du Seigneur pour porter toutes les rencontres vécues.",
      items: [
        "Chaque journée commence par une heure de laudes, louanges, adoration et formation",
        "Une messe quotidienne",
        "La récitation du Chapelet",
        "Les Complies pour clore la journée"
      ]
    },
    {
      id: 4,
      num: '04',
      title: 'DES TEMPS DE MISSION',
      image: '/assets/images/6 piliers de la mission/Temps d évangélisation.webp',
      summary:
        "C'est l'aventure de la rencontre : aller vers ceux qui ne viennent plus à l'église, écouter avec bienveillance et témoigner avec joie.",
      items: [
        "Visitations dans la rue et sur les marchés",
        "Porte-à-porte",
        "Bénédictions de cimetière, commerces, maisons, fermes...",
        "Journée des familles",
        "Pièces de théâtre sur les places publiques",
        "Processions, chemins de croix",
        "Visites aux EHPAD",
        "Concert polyphonique dans la rue"
      ]
    },
    {
      id: 5,
      num: '05',
      title: 'TEMPS FRATERNELS',
      image: '/assets/images/6 piliers de la mission/Temps fraternel.webp',
      summary:
        "Vivre la joie simple d'être ensemble : la fraternité partagée au quotidien avec les paroissiens est déjà le plus beau des témoignages.",
      items: [
        "Repas entre Famissionnaires et Paroissiens",
        "Soirée jeux pour apprendre à se connaître",
        "Temps de détente autour d'un ballon ou de jeux de société",
        "Veillée festive en fin de mission"
      ]
    },
    {
      id: 6,
      num: '06',
      title: 'VEILLÉES',
      image: '/assets/images/6 piliers de la mission/Veillés.webp',
      summary:
        "Ouvrir grand les portes de l'église le soir pour offrir à tous les habitants, où qu'ils en soient, un temps de paix et d'espérance.",
      items: [
        "Veillée de prière, de louange et de rencontre ouverte à tous",
        "Veillée sur le thème de l'au-delà et de nos défunts",
        "Veillée mariale",
        "Veillée ciné-débat",
        "Veillée pour les malades et les personnes qui souffrent"
      ]
    }
  ];

  return (
    <div className="fam-v2" id="top">
      <Helmet>
        <title>Famissio - Missions paroissiales en famille (Aperçu Nouvelle Identité)</title>
        <meta
          name="description"
          content="Famissio rassemble des familles missionnaires venues de toute la France pour entourer les curés de campagne, raviver la foi au cœur de nos villages et partager une aventure spirituelle bouleversante."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ====================================================================
          BANDEAU PRIVÉ DE TRAVAIL & RELECTURE (Non visible sur la nav publique)
          ==================================================================== */}
      <div className="fam-v2-preview-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="fam-v2-preview-pill">Page privée</span>
          <span>Aperçu de la nouvelle identité Famissio (Charte Fraunces & Arches)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/" className="fam-v2-preview-link">
            Voir l'accueil actuel en ligne →
          </Link>
        </div>
      </div>

      {/* ====================================================================
          1. HERO SECTION (Nouvelle Identité + Esprit Famissio conservé)
          ==================================================================== */}
      <section className="fam-v2-hero">
        <div className="fam-v2-hero-backdrop-shape" aria-hidden="true" />
        <div className="fam-v2-container">
          <div className="fam-v2-hero-grid">
            {/* Texte & Titre */}
            <div className="fam-v2-hero-content">
              <div className="fam-v2-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>Missions paroissiales en famille</span>
              </div>

              <h1 className="fam-v2-hero-title">
                Des familles<br />
                <em>en mission.</em>
              </h1>

              <div className="fam-v2-hero-rule" />

              <p className="fam-v2-hero-sub">
                Au service des curés et de leurs paroisses rurales,<br />
                chaque année à la Toussaint.
              </p>

              <div className="fam-v2-hero-actions">
                <Link to="/missions#liste-missions" className="fam-v2-btn-primary">
                  <span>Découvrir nos missions</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a href="#notre-histoire" className="fam-v2-btn-secondary">
                  <span>Notre Histoire</span>
                </a>
              </div>
            </div>

            {/* Photo Arch Window */}
            <div className="fam-v2-hero-media-wrap">
              <div className="fam-v2-hero-arch-card fam-arch">
                <img
                  src="/assets/images/Famissio-252.jpg"
                  alt="Familles Famissio réunies en mission"
                  fetchPriority="high"
                />
              </div>

              <div className="fam-v2-hero-floating-badge">
                <div>
                  <div className="fam-v2-hero-floating-badge-title">Semaine de la Toussaint</div>
                  <div className="fam-v2-hero-floating-badge-text">
                    La joie de l'Évangile partagée de maison en maison
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CAROUSEL HERO (Formation, Prière, Mission 2026)
          ==================================================================== */}
      <div className="fam-v2-carousel-wrap">
        <HeroCarousel />
      </div>

      {/* ====================================================================
          2. NOTRE HISTOIRE (Comment tout a commencé)
          ==================================================================== */}
      <section id="notre-histoire" className="fam-v2-story-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">Notre Histoire</div>
            <h2 className="fam-v2-section-title">
              Comment tout <em>a commencé</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Une aventure familiale devenue un mouvement missionnaire d'Église
            </p>
          </div>

          <div className="fam-v2-story-grid">
            {/* Colonne Photo Arch */}
            <div className="fam-v2-story-photo-wrap">
              <div className="fam-v2-story-arch fam-arch">
                <img
                  src="/assets/images/facebook_1607379806212_6741839550715485834.jpg"
                  alt="Équipe fondatrice Famissio"
                  loading="lazy"
                />
              </div>
              <div className="fam-v2-story-accent-card">
                Fondation Creuse 2019
              </div>
            </div>

            {/* Colonne Récit */}
            <div className="fam-v2-story-text">
              <p className="fam-v2-dropcap">
                À l'origine, une famille a découvert la joie de l'évangélisation en suivant pendant
                deux mois des missionnaires dans l'Himalaya et le Tamil Nadu, en Inde. Au retour, elle
                a voulu poursuivre la mission mais cette fois-ci en restant en France et pour
                accompagner des curés de paroisses rurales.
              </p>
              <p style={{ marginTop: '20px' }}>
                Des amis ont accepté de les rejoindre dans cette aventure pour découvrir la belle
                paroisse du père Jean-Pierre Barrière dans la Creuse. Cette semaine les a tous beaucoup
                nourris et remplis de joie puis confirmés dans cette intuition initiale.
              </p>

              <div className="fam-v2-story-highlight">
                <p>
                  <strong>Famissio est alors née.</strong> Le père Jean-Pierre en devenait l'aumônier.
                  Monseigneur Bozo acceptait de suivre cette initiative.
                </p>
                <a href="#mgr-bozo" className="fam-v2-story-video-link">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Voir le témoignage en vidéo de Monseigneur Bozo ↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. QUI SOMMES-NOUS ? (VIDÉO OFFICIELLE)
          ==================================================================== */}
      <section id="qui-sommes-nous" className="fam-v2-video-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow white">Découvrez-nous</div>
            <h2 className="fam-v2-section-title">
              Qui <em>sommes-nous ?</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Nous sommes des familles missionnaires venues de toute la France, accompagnées de
              consacrés, qui se rassemblent chaque année pendant une semaine autour de La Toussaint,
              pour entourer un curé et ses paroissiens, en vue de faire avec eux de la mission.
            </p>
          </div>

          <div className="fam-v2-video-container">
            <div className="fam-v2-video-aspect">
              <iframe
                src="https://www.youtube.com/embed/bYFu-nvDDHI"
                title="Présentation Famissio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. MONSEIGNEUR BOZO (SUR RCF)
          ==================================================================== */}
      <section id="mgr-bozo" className="fam-v2-bozo-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">Témoignage pastoral</div>
            <h2 className="fam-v2-section-title">
              Monseigneur Bozo présente <em>Famissio</em>{' '}
              <span style={{ fontSize: '0.65em', color: 'var(--fam-tee)', fontWeight: 700 }}>
                (sur RCF)
              </span>
            </h2>
            <p className="fam-v2-section-subtitle">
              Monseigneur Pierre-Antoine Bozo accompagne Famissio depuis sa 1<sup>re</sup> édition en 2019
            </p>
          </div>

          <div className="fam-v2-bozo-box">
            <div className="fam-v2-video-aspect">
              <iframe
                src="https://www.youtube.com/embed/SskypDiEr0c?start=878"
                title="Monseigneur Bozo présente Famissio sur RCF"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. LA MISSION EN PRATIQUE
          ==================================================================== */}
      <section id="mission" className="fam-v2-practice-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">Notre Mission</div>
            <h2 className="fam-v2-section-title">
              La mission <em>en pratique</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Une présence fraternelle et priante pour réchauffer les cœurs au cœur de nos campagnes
            </p>
          </div>

          <div
            ref={practiceCardsRef}
            className="fam-v2-practice-grid"
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft;
              const width = e.target.offsetWidth;
              const index = Math.round(scrollLeft / width);
              setActivePracticeIndex(index);
            }}
          >
            {/* Card 1 */}
            <div
              className="fam-v2-practice-card"
              onClick={() => scrollToCard(practiceCardsRef, 0)}
            >
              <div className="fam-v2-practice-icon-wrap">
                <HelpingHand className="w-8 h-8" />
              </div>
              <h3>Que faisons-nous ?</h3>
              <p>
                Nous nous mettons au service de paroisses pour mener avec elles une mission. Nous
                arrivons à plusieurs groupes de missionnaires pour accompagner différentes paroisses
                d'un même diocèse.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="fam-v2-practice-card"
              onClick={() => scrollToCard(practiceCardsRef, 1)}
            >
              <div className="fam-v2-practice-icon-wrap">
                <Calendar className="w-8 h-8" />
              </div>
              <h3>Préparation</h3>
              <p>
                La mission se prépare un an en avance avec un noyau de paroissiens et un groupe de
                missionnaires qui se retrouvent régulièrement par visioconférences pour élaborer le
                programme ensemble.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="fam-v2-practice-card"
              onClick={() => scrollToCard(practiceCardsRef, 2)}
            >
              <div className="fam-v2-practice-icon-wrap">
                <MapPin className="w-8 h-8" />
              </div>
              <h3>Où allons-nous ?</h3>
              <p>
                Dans le diocèse vers lequel Monseigneur Bozo, évêque de Limoges nous envoie en
                mission, en accord avec le diocèse local. Nous nous adaptons aux besoins de chaque
                communauté.
              </p>
            </div>
          </div>

          {/* Dots mobile */}
          <div className="fam-v2-dots">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Aller à la carte ${idx + 1}`}
                className={`fam-v2-dot ${activePracticeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToCard(practiceCardsRef, idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. L'ÉQUIPE MISSIONNAIRE (Missionnaires à tout âge)
          ==================================================================== */}
      <section className="fam-v2-team-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">L'Équipe Missionnaire</div>
            <h2 className="fam-v2-section-title">
              Missionnaires <em>à tout âge</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Des tout-petits aux grands-parents, chacun est porteur de la tendresse de Dieu
            </p>
          </div>

          <div className="fam-v2-team-grid">
            {/* Arch photo */}
            <div className="fam-v2-team-photo-wrap">
              <div className="fam-v2-team-arch fam-arch">
                <img
                  src="/assets/images/Equipe missionnaire.webp"
                  alt="Équipe de familles missionnaires Famissio"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Questions & Témoignage */}
            <div className="fam-v2-team-content">
              <h3>À combien arrivons-nous ?</h3>
              <p>
                Nous arrivons entre <strong>30 à 40 disciples missionnaires</strong> autour du curé de
                la paroisse qui nous accueille. Une communauté dynamique prête à servir !
              </p>

              <h3>Missionnaires à partir de quel âge ?</h3>
              <p>
                <strong>À tout âge !</strong> Les enfants ont une grâce particulière pour ouvrir et
                toucher les cœurs. Ils nous évangélisent !!
              </p>

              <div className="fam-v2-team-quote-card">
                <div className="fam-v2-quote-mark">“</div>
                <p>
                  Comme nous avons besoin de grands missionnaires ! Mais qui peut réveiller l’ardeur
                  d’une chrétienté endormie ? Les grands missionnaires que nous désirons tant je crois
                  que ce sont les enfants. Car évangéliser ce n’est pas asséner une vérité comme une
                  évidence, mais la présenter en tremblant comme un mystère...
                </p>
                <p>
                  Je me souviens de ce monsieur très courtois avec qui nous discutions depuis un bon
                  quart d’heure déjà de la foi sans parvenir à toucher sa pensée rationnelle. Alors
                  qu’il n’avait encore prononcé aucune parole, le petit Henri interrompt soudainement
                  notre discussion « de grands » pour proposer à cet homme de prier pour lui : cette
                  simple parole l’a bouleversé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. LE PROGRAMME (VIDÉO)
          ==================================================================== */}
      <section className="fam-v2-program-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">Organisation</div>
            <h2 className="fam-v2-section-title">
              Le <em>Programme</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Une immersion vidéo pour découvrir le rythme d'une journée de mission
            </p>
          </div>

          <div className="fam-v2-program-box">
            <div className="fam-v2-video-aspect">
              <iframe
                src="https://www.youtube.com/embed/ZnW9oGHpAyQ"
                title="Programme de la mission Famissio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. LE CHOIX DE LA TOUSSAINT
          ==================================================================== */}
      <section className="fam-v2-toussaint-section">
        <div className="fam-v2-toussaint-bg">
          <img
            src="/assets/images/IMGP2672.JPG"
            alt="Ambiance de la Toussaint"
            loading="lazy"
          />
        </div>
        <div className="fam-v2-toussaint-overlay" />

        <div className="fam-v2-container">
          <div className="fam-v2-toussaint-content">
            <div className="fam-v2-eyebrow white">La Toussaint</div>

            <h2 className="fam-v2-toussaint-title">
              Le choix de <em>la Toussaint</em>
            </h2>

            <div className="fam-v2-toussaint-lead">
              Partir en mission à ce moment-là, c'est suivre l'exemple des saints et annoncer
              l'Évangile à notre tour.
            </div>

            <div className="fam-v2-toussaint-body">
              <p>
                C'est aussi une occasion unique de rencontre. Chacun a déjà connu la perte d'un être
                cher ou s'est interrogé sur la vie après la mort. Parfois, on garde en soi un merci ou
                un pardon qu'on n'a pas exprimé à temps.
              </p>

              <p>
                À la Toussaint, beaucoup de personnes se rendent dans les cimetières et s'interrogent
                sur le sens de la vie. Nous y allons pour échanger avec elles, les écouter et témoigner
                de notre espérance chrétienne.
              </p>

              <p>
                Ce temps est propice à des cœurs à cœurs, à des rencontres profondes pour guider chacun
                vers le Seigneur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. LES 6 TEMPS FORTS (PILIERS & MODALE)
          ==================================================================== */}
      <section className="fam-v2-pillars-section">
        <div className="fam-v2-container">
          <div className="fam-v2-section-head">
            <div className="fam-v2-eyebrow">Une Semaine de Mission</div>
            <h2 className="fam-v2-section-title">
              Les 6 <em>Temps Forts</em>
            </h2>
            <p className="fam-v2-section-subtitle">
              Découvrez le déroulement d'une semaine missionnaire avec Famissio
            </p>
          </div>

          <div className="fam-v2-pillars-grid">
            {missionBlocks.map((block) => (
              <div
                key={block.id}
                className="fam-v2-pillar-card"
                onClick={(e) => openMission(block, e)}
              >
                <div className="fam-v2-pillar-image-wrap">
                  <img src={block.image} alt={block.title} loading="lazy" />
                  <div className="fam-v2-pillar-badge">{block.num}</div>
                </div>

                <div className="fam-v2-pillar-body">
                  <h3 className="fam-v2-pillar-title">{block.title}</h3>
                  <p className="fam-v2-pillar-summary">
                    {block.summary || block.content || (block.items && block.items[0])}
                  </p>
                  <div className="fam-v2-pillar-cta">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL FULLSCREEN 6 TEMPS FORTS */}
      {activeMission && (
        <div
          className="fam-v2-modal-backdrop"
          onClick={() => setActiveMission(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="fam-v2-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="fam-v2-modal-close-icon"
              onClick={() => setActiveMission(null)}
              aria-label="Fermer"
            >
              ×
            </button>

            <img
              src={activeMission.image}
              alt={activeMission.title}
              className="fam-v2-modal-hero-img"
            />

            <div className="fam-v2-modal-scroll-body">
              <h3 className="fam-v2-modal-title">{activeMission.title}</h3>

              {activeMission.summary && (
                <div className="fam-v2-modal-summary">{activeMission.summary}</div>
              )}

              {activeMission.content && (
                <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: '#4b3831', marginBottom: '24px' }}>
                  {activeMission.content}
                </p>
              )}

              {activeMission.items && (
                <ul className="fam-v2-modal-list">
                  {activeMission.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="fam-v2-modal-footer">
                <button
                  type="button"
                  onClick={() => setActiveMission(null)}
                  className="fam-v2-btn-primary"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          10. ET APRÈS CETTE SEMAINE ?
          ==================================================================== */}
      <section className="fam-v2-after-section">
        <div className="fam-v2-container">
          <div className="fam-v2-after-box">
            <div className="fam-v2-after-plus">+</div>
            <h2 className="fam-v2-after-title">
              Que faire <em>après la mission ?</em>
            </h2>
            <p className="fam-v2-after-text">
              Plus les paroissiens sont{' '}
              <span className="fam-v2-after-highlight">mobilisés dans la préparation</span>, plus ils
              participent aux temps de mission, plus la{' '}
              <span className="fam-v2-after-highlight">communion fraternelle</span> se vit pendant la
              semaine et plus beau, plus grand sera l'
              <span className="fam-v2-after-highlight">élan missionnaire</span> au sein de la paroisse
              après la semaine de mission avec Famissio !
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. BANNIÈRE : LA MISSION NOUS PRESSE !
          ==================================================================== */}
      <section className="fam-v2-banner-section">
        <h2 className="fam-v2-banner-title">
          La mission <em>nous presse !</em>
        </h2>
      </section>

      {/* ====================================================================
          12. PÈRE JEAN-PIERRE BARRIÈRE
          ==================================================================== */}
      <section className="fam-v2-priest-section">
        <div className="fam-v2-container">
          {/* Header avec photo en arche */}
          <div className="fam-v2-priest-header">
            <div className="fam-v2-priest-img-arch fam-arch">
              <img
                src="/assets/images/pere-jean-pierre-barriere.webp"
                alt="Père Jean-Pierre Barrière"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="fam-v2-priest-title">
                Père Jean-Pierre <em>Barrière</em>
              </h2>
              <div className="fam-v2-priest-role">Aumônier de Famissio</div>
            </div>
          </div>

          <div className="fam-v2-priest-lead-box">
            <h3>L'appel du Christ et la vocation à l'évangélisation</h3>
            <p>
              Depuis le jour de notre baptême nous sommes devenus enfants bien-aimés du Père. Par ce
              sacrement nous participons à la dignité même du Christ : celle de Prêtre, Prophète et
              Roi.
            </p>
          </div>

          {/* 3 Pilliers du Baptême */}
          <div className="fam-v2-pillars-three">
            <div className="fam-v2-pillar-box">
              <div className="fam-v2-pillar-box-icon">
                <Church className="w-8 h-8" />
              </div>
              <h3>Je suis Prêtre</h3>
              <p>
                Seul Jésus est le "grand prêtre par Excellence". Mais par notre baptême nous rendons
                vivant le sacerdoce du Christ. Jésus offre au Père toute prière. Nous participons à
                cette offrande par notre sacerdoce baptismal.
              </p>
            </div>

            <div className="fam-v2-pillar-box">
              <div className="fam-v2-pillar-box-icon">
                <Megaphone className="w-8 h-8" />
              </div>
              <h3>Je suis Prophète</h3>
              <p>
                Le prophète est le "porte-parole" de Dieu. Comme je participe à cette dignité, je suis
                un prophète qui annonce et vit la Parole. Nous annonçons la Bonne nouvelle à nos
                frères et sœurs en humanité.
              </p>
            </div>

            <div className="fam-v2-pillar-box">
              <div className="fam-v2-pillar-box-icon">
                <Crown className="w-8 h-8" />
              </div>
              <h3>Je suis Roi</h3>
              <p>
                Être roi pour un baptisé, c'est être au service. La fonction royale des baptisés
                consiste à mettre en œuvre le commandement du frère comme Jésus a pu le faire lors du
                lavement des pieds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          13. PAPE FRANÇOIS (7 POINTS CLÉS)
          ==================================================================== */}
      <section className="fam-v2-pape-section">
        <div className="fam-v2-container">
          <div className="fam-v2-pape-header">
            <div className="fam-v2-pape-img-arch fam-arch">
              <img
                src="/assets/images/Pape François.webp"
                alt="Pape François"
                loading="lazy"
              />
            </div>
            <h2 className="fam-v2-pape-title">
              Pape <em>François</em>
            </h2>
          </div>

          <div className="fam-v2-section-head" style={{ marginBottom: '30px' }}>
            <h2 className="fam-v2-section-title">
              7 Points Clés <em>pour la Mission</em>
            </h2>
          </div>

          {/* Grille 6 Points */}
          <div className="fam-v2-pape-grid">
            <div className="fam-v2-pape-card">
              <h4>1. Aller aux périphéries</h4>
              <p>
                "Église en sortie" n'est pas une expression à la mode. Elle est un commandement du
                Christ. Soit l'Église est en sortie, soit elle n'est pas l'Église.
              </p>
            </div>

            <div className="fam-v2-pape-card">
              <h4>2. Se laisser surprendre</h4>
              <p>
                La mission n'est pas un projet d'entreprise bien rodé. L'Esprit saint agit comme il
                le veut, quand il le veut et où il le veut.
              </p>
            </div>

            <div className="fam-v2-pape-card">
              <h4>3. Se mettre à l'écoute</h4>
              <p>
                La fécondité de la mission ne tient pas à nos méthodes, mais elle est liée à ce
                vertige que l'on éprouve en présence des paroles de Jésus.
              </p>
            </div>

            <div className="fam-v2-pape-card">
              <h4>4. Témoigner et non déclarer</h4>
              <p>
                On est marqué par la rencontre avec une personne dont les gestes révèlent la foi.
              </p>
            </div>

            <div className="fam-v2-pape-card">
              <h4>5. Éloge de la tendresse</h4>
              <p>
                Annoncer l'Évangile ne consiste pas à assiéger les autres de discours. Lancer des
                vérités comme des pierres, c'est le signe que les paroles se sont transformées en
                idéologie.
              </p>
            </div>

            <div className="fam-v2-pape-card">
              <h4>6. Le contact humain</h4>
              <p>
                La mission est un contact humain, elle est le témoignage d'hommes et de femmes qui
                disent : "Je connais Jésus, je voudrais te le faire connaître".
              </p>
            </div>
          </div>

          {/* 7ème Point : Message pour les jeunes */}
          <div className="fam-v2-pape-highlight-card">
            <h3>7. Que puis-je faire en tant que jeune pour mon église ?</h3>
            <p>
              Chers jeunes, je veux de la pagaille dans les diocèses ! Je veux que vous alliez à
              l'extérieur ! Je veux que l'Église sorte dans les rues ! Les paroisses, les écoles, les
              institutions, sont appelées à sortir ! S'ils ne sortent pas, ils deviennent une ONG et
              l'Église ne peut pas être une ONG.
            </p>
            <div className="fam-v2-pape-pagaille">
              N'oubliez pas, mettez la pagaille !
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          14. PRIÈRE DU FAMISSIONNAIRE
          ==================================================================== */}
      <section className="fam-v2-prayer-section">
        <div className="fam-v2-container">
          <div className="fam-v2-prayer-box">
            <div className="fam-v2-prayer-logo">
              <img
                src="/assets/images/Logo Famissio rouge.webp"
                alt="Logo Famissio Prière"
                loading="lazy"
              />
            </div>
            <h2 className="fam-v2-prayer-title">
              Prière du <em>Famissionnaire</em>
            </h2>
            <p className="fam-v2-prayer-sub">
              Retrouvez la prière qui nous accompagne durant cette semaine missionnaire.
            </p>
            <Link to="/priere" className="fam-v2-btn-primary">
              <span>Accéder à la prière</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccueilV2;
