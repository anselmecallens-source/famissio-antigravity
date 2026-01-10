import React, { useState, useEffect, useRef } from 'react';

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const [visibleMissions, setVisibleMissions] = useState(new Set());

  const missions = [
    {
      id: 't2025',
      year: '2025',
      title: 'Toussaint 2025',
      diocese: 'Diocèses de Limoges, Angoulême et Tulle',
      cities: ['Confolens', 'Terres-de-Haute-Charente', 'La Rochefoucauld', 'Limoges', 'Nantiat', 'Boisseuil', 'Brive-la-Gaillarde'],
      locations: [
        { name: 'Confolens', lat: 46.0142, lon: 0.6725 },
        { name: 'Terres-de-Haute-Charente', lat: 45.8856, lon: 0.6017 },
        { name: 'La Rochefoucauld', lat: 45.7369, lon: 0.3833 },
        { name: 'Limoges', lat: 45.8297, lon: 1.2614 },
        { name: 'Nantiat', lat: 46.0078, lon: 1.1831 },
        { name: 'Boisseuil', lat: 45.7725, lon: 1.3094 },
        { name: 'Brive-la-Gaillarde', lat: 45.1588, lon: 1.5330 }
      ],
      description: '380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin. Ils se sont ensuite répartis entre 8 paroisses.',
      image: 'https://famissio-99.webself.net/file/si1759337/DSC06804-fi34268819x450.JPG',
      video: null
    },
    {
      id: 't2024',
      year: '2024',
      title: 'Toussaint 2024',
      diocese: 'Diocèses de Mende, Rodez, Saint-Flour et Séez',
      cities: ['Massiac', 'Ruynes-en-Margeride', 'Saint-Chély-d\'Apcher', 'Marvejols', 'Mende', 'Millau', 'Vimoutiers'],
      locations: [
        { name: 'Massiac', lat: 45.2536, lon: 3.1972 },
        { name: 'Ruynes-en-Margeride', lat: 45.0211, lon: 3.2258 },
        { name: 'Saint-Chély-d\'Apcher', lat: 44.8025, lon: 3.2758 },
        { name: 'Marvejols', lat: 44.5539, lon: 3.2894 },
        { name: 'Mende', lat: 44.5186, lon: 3.4983 },
        { name: 'Millau', lat: 44.0975, lon: 3.0775 },
        { name: 'Vimoutiers', lat: 48.9283, lon: 0.2483 }
      ],
      description: '340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonnaient à tout rompre.',
      image: 'https://famissio-99.webself.net/file/si1759337/2024-fi36533476x586.png',
      video: 'fkal1pZgV3Q'
    },
    {
      id: 't2023',
      year: '2023',
      title: 'Toussaint 2023',
      diocese: 'Diocèse de Limoges (Creuse)',
      cities: ['La Souterraine', 'Guéret', 'Aubusson', 'Bourganeuf', 'Chénérailles', 'Gouzon'],
      locations: [
        { name: 'La Souterraine', lat: 46.2386, lon: 1.4867 },
        { name: 'Guéret', lat: 46.1703, lon: 1.8719 },
        { name: 'Aubusson', lat: 45.9556, lon: 2.1678 },
        { name: 'Bourganeuf', lat: 45.9536, lon: 1.7561 },
        { name: 'Chénérailles', lat: 46.115, lon: 2.1764 },
        { name: 'Gouzon', lat: 46.1925, lon: 2.2389 }
      ],
      description: '280 Famissionnaires se sont répartis entre les 6 paroisses qui nous accueillaient.',
      image: 'https://famissio-99.webself.net/file/si1759337/2023-fi36533474x470.png',
      video: null
    },
    {
      id: 't2022',
      year: '2022',
      title: 'Toussaint 2022',
      diocese: 'Diocèse de Digne (Alpes-de-Haute-Provence)',
      cities: ['Manosque', 'Oraison', 'Saint-Auban', 'Barcelonnette', 'Forcalquier', 'Digne', 'Banon'],
      locations: [
        { name: 'Manosque', lat: 43.8344, lon: 5.7836 },
        { name: 'Oraison', lat: 43.9142, lon: 5.9181 },
        { name: 'Saint-Auban', lat: 43.8564, lon: 6.9286 },
        { name: 'Barcelonnette', lat: 44.3858, lon: 6.6525 },
        { name: 'Forcalquier', lat: 43.9589, lon: 5.7797 },
        { name: 'Digne', lat: 44.0931, lon: 6.2339 },
        { name: 'Banon', lat: 44.0381, lon: 5.6292 }
      ],
      description: 'Près de 260 Famissionnaires à arborer un t-shirt orange dans cette si belle région des Alpes de Hautes-Provence.',
      image: 'https://famissio-99.webself.net/file/si1759337/2022-fi36533471x470.jpg',
      video: 'lYaeQevBzuU'
    },
    {
      id: 't2021',
      year: '2021',
      title: 'Toussaint 2021',
      diocese: 'Diocèse de Limoges (Creuse)',
      cities: ['Gouzon', 'Boussac', 'Genouillac', 'Bourganeuf', 'Eymoutiers', 'Chambon-sur-Voueize'],
      locations: [
        { name: 'Gouzon', lat: 46.1925, lon: 2.2389 },
        { name: 'Boussac', lat: 46.3492, lon: 2.215 },
        { name: 'Genouillac', lat: 46.2894, lon: 1.9564 },
        { name: 'Bourganeuf', lat: 45.9536, lon: 1.7561 },
        { name: 'Eymoutiers', lat: 45.736, lon: 1.742 },
        { name: 'Chambon-sur-Voueize', lat: 46.190, lon: 2.428 }
      ],
      description: '180 missionnaires se sont rendus dans le diocèse de Limoges, dans la Creuse.',
      image: 'https://famissio-99.webself.net/file/si1759337/2021-fi36533469x470.jpg',
      video: 'n74BNF8fPcw'
    },
    {
      id: 't2020',
      year: '2020',
      title: 'Toussaint 2020',
      diocese: 'Diocèse de Séez (Orne)',
      cities: ['Alençon', 'Ecouché', 'L\'Aigle', 'Le Mêle-sur-Sarthe'],
      locations: [
        { name: 'Alençon', lat: 48.4322, lon: 0.0892 },
        { name: 'Ecouché', lat: 48.7183, lon: -0.1206 },
        { name: 'L\'Aigle', lat: 48.7656, lon: 0.6267 },
        { name: 'Le Mêle-sur-Sarthe', lat: 48.5133, lon: 0.3344 }
      ],
      description: 'Une semaine de feu malgré le COVID qui a perturbé le projet initial.',
      image: 'https://famissio-99.webself.net/file/si1759337/2020-fi36533468x520.jpg',
      video: 'ngv3kXBMu5Q'
    },
    {
      id: 't2019',
      year: '2019',
      title: 'Toussaint 2019',
      diocese: 'Diocèse de Limoges (Creuse)',
      cities: ['Gouzon', 'Boussac'],
      locations: [
        { name: 'Gouzon', lat: 46.1925, lon: 2.2389 },
        { name: 'Boussac', lat: 46.3492, lon: 2.215 }
      ],
      description: 'Une merveilleuse première mission dans la Creuse avec une trentaine de personnes.',
      image: 'https://famissio-99.webself.net/file/si1759337/2019-fi36533467x498.jpg',
      video: 'DdFKEYBhstk'
    }
  ];

  // Charger Leaflet
  useEffect(() => {
    const loadLeaflet = () => {
      // Check if already loaded to avoid duplicates
      if (document.querySelector('script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]')) {
        setMapLoaded(true);
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => setMapLoaded(true);
      document.body.appendChild(script);
    };

    loadLeaflet();
  }, []);

  // Initialiser la carte
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    // Check if map is already initialized on this element
    // @ts-ignore
    if (mapRef.current._leaflet_id) {
      return; // Already initialized
    }

    const map = window.L.map(mapRef.current, {
      center: [46.6, 2.2],
      zoom: 6,
      scrollWheelZoom: false,
      zoomControl: true
    });

    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

    // Ajouter tous les marqueurs
    missions.forEach(mission => {
      mission.locations.forEach(loc => {
        const marker = window.L.circleMarker([loc.lat, loc.lon], {
          radius: 6,
          fillColor: '#c82904',
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(map);

        marker.bindTooltip(`${loc.name} (${mission.year})`);

        marker.on('click', () => {
          setSelectedMission(mission.id);
          const element = document.getElementById(mission.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      });
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [mapLoaded, missions]);

  // Intersection Observer pour animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleMissions(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    missions.forEach(mission => {
      const element = document.getElementById(mission.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [missions]);

  return (
    <div className="missions-page">
      <style>{`
        .missions-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background: #fafafa;
          min-height: 100vh;
        }

        /* HERO INTRO */
        .missions-hero {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: white;
          padding: 100px 5% 80px;
          position: relative;
          overflow: hidden;
        }

        .missions-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(200, 41, 4, 0.1), transparent 50%);
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f46a07;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 40px;
        }

        .hero-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.85);
          max-width: 700px;
        }

        /* MISSION 2026 - HERO EVENT */
        .mission-2026 {
          background: white;
          padding: 0;
          position: relative;
        }

        .mission-2026-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          min-height: 600px;
        }

        .mission-2026-content {
          padding: 100px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #c82904 0%, #f46a07 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .mission-2026-content::before {
          content: '2026';
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 20rem;
          font-weight: 900;
          color: rgba(255,255,255,0.05);
          top: 50%;
          right: -50px;
          transform: translateY(-50%);
          line-height: 1;
        }

        .m2026-tag {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.9;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .m2026-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .m2026-location {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.95;
          font-weight: 500;
        }

        .m2026-date-box {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 20px 30px;
          border-radius: 15px;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .m2026-date {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .mission-2026-visual {
          position: relative;
          overflow: hidden;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mission-2026-map {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }

        /* TIMELINE AVEC CARTE STICKY */
        .timeline-section {
          background: white;
          padding: 80px 0;
        }

        .timeline-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .timeline-tag {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f46a07;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .timeline-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 80px;
          align-items: start;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .mission-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mission-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mission-card.selected {
          background: linear-gradient(135deg, #fff8f4, white);
        }

        .card-inner {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 30px;
          padding: 40px;
          border-radius: 20px;
          border: 2px solid transparent;
          transition: all 0.4s;
          cursor: pointer;
          background: white;
        }

        .mission-card:hover .card-inner {
          border-color: #f46a07;
          box-shadow: 0 10px 40px rgba(200,41,4,0.1);
          transform: translateX(10px);
        }

        .card-image {
          width: 200px;
          height: 200px;
          border-radius: 15px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }

        .mission-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .card-year {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: #c82904;
          line-height: 1;
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .card-diocese {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 20px;
        }

        .card-cities {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .city-tag {
          background: #f5f5f5;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #333;
          transition: all 0.3s;
        }

        .mission-card:hover .city-tag {
          background: #feeddf;
          color: #c82904;
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
        }

        .card-video-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f46a07;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: gap 0.3s;
        }

        .card-video-link:hover {
          gap: 12px;
        }

        .map-sticky-container {
          position: sticky;
          top: 100px;
        }

        .map-box {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border: 2px solid #f5f5f5;
        }

        .map-header {
          padding: 25px;
          background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
          color: white;
        }

        .map-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
        }

        #missions-map {
          width: 100%;
          height: 500px;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .map-sticky-container {
            position: relative;
            top: 0;
            margin-bottom: 60px;
          }

          .mission-2026-grid {
            grid-template-columns: 1fr;
          }

          .mission-2026-visual {
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .missions-hero {
            padding: 60px 5%;
          }

          .mission-2026-content {
            padding: 60px 30px;
          }

          .card-inner {
            grid-template-columns: 1fr;
            padding: 30px;
          }

          .card-image {
            width: 100%;
            height: 250px;
          }

          .mission-card:hover .card-inner {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* HERO INTRO */}
      <section className="missions-hero">
        <div className="hero-content">
          <div className="hero-tag">Nos Missions</div>
          <h1 className="hero-title">Une Mission par An</h1>
          <p className="hero-description">
            Pendant la semaine autour de La Toussaint, nous organisons chaque année une mission dans plusieurs paroisses d'un même diocèse.
            Cette mission se prépare pendant un an, main dans la main avec chacune des paroisses pour adapter le programme à leurs besoins et spécificités.
          </p>
        </div>
      </section>

      {/* MISSION 2026 - HERO EVENT */}
      <section className="mission-2026">
        <div className="mission-2026-grid">
          <div className="mission-2026-content">
            <div className="m2026-tag">Prochaine Mission</div>
            <h2 className="m2026-title">Mission 2026</h2>
            <p className="m2026-location">
              Monseigneur Bozo nous envoie dans les diocèses de La Rochelle, Angoulême et Poitiers.
            </p>
            <div className="m2026-date-box">
              <div className="m2026-date">24 - 30 OCT 2026</div>
            </div>
          </div>
          <div className="mission-2026-visual">
            <div className="mission-2026-map">
              <iframe
                title="Carte Mission 2026"
                src="https://datawrapper.dwcdn.net/otsD1/1/"
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE AVEC CARTE */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <div className="timeline-tag">Notre Histoire</div>
            <h2 className="timeline-title">Toutes nos Missions</h2>
          </div>

          <div className="timeline-grid">
            <div className="timeline-list">
              {missions.map((mission, index) => (
                <div
                  key={mission.id}
                  id={mission.id}
                  className={`mission-card ${visibleMissions.has(mission.id) ? 'visible' : ''} ${selectedMission === mission.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMission(mission.id)}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="card-inner">
                    <div className="card-image">
                      <img src={mission.image} alt={mission.title} />
                    </div>
                    <div className="card-content">
                      <div className="card-year">{mission.year}</div>
                      <h3 className="card-title">{mission.title}</h3>
                      <div className="card-diocese">{mission.diocese}</div>
                      <div className="card-cities">
                        {mission.cities.map((city, idx) => (
                          <span key={idx} className="city-tag">{city}</span>
                        ))}
                      </div>
                      <p className="card-description">{mission.description}</p>
                      {mission.video && (
                        <a
                          href={`https://youtu.be/${mission.video}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-video-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Voir la vidéo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="map-sticky-container">
              <div className="map-box">
                <div className="map-header">
                  <h3 className="map-title">Carte des Missions</h3>
                </div>
                <div ref={mapRef} id="missions-map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionsPage;