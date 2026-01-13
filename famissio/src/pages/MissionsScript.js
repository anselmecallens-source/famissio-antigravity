export function initMissionsPage() {

    // --- PARTIE 1 : CHARGEMENT DES OUTILS (Leaflet) ---
    function loadAsset(tag, url, onLoadCallback) {
        if (tag === 'link') {
            if (document.querySelector(`link[href="${url}"]`)) {
                if (onLoadCallback) onLoadCallback();
                return;
            }
            let element = document.createElement(tag);
            element.rel = 'stylesheet';
            element.href = url;
            document.head.appendChild(element);
            if (onLoadCallback) setTimeout(onLoadCallback, 0);
        } else { // script
            if (document.querySelector(`script[src="${url}"]`)) {
                if (onLoadCallback) onLoadCallback();
                return;
            }
            let element = document.createElement(tag);
            element.src = url;
            if (onLoadCallback) element.onload = onLoadCallback;
            document.body.appendChild(element);
        }
    }

    // Charger CSS puis JS de Leaflet, puis initialiser la page
    loadAsset('link', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', function () {
        loadAsset('script', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', initFamPage);
    });

    // --- PARTIE 2 : INITIALISATION GLOBALE DE LA PAGE ---

    // Fonctions de recherche (partagées)
    function norm(s) { return (s || "").toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s\-']/g, ' ').replace(/\s+/g, ' ').trim(); }
    function distLev2(a, b) { if (a === b) return 0; var la = a.length, lb = b.length; if (Math.abs(la - lb) > 2) return 3; var m = la + 1, n = lb + 1, prev = new Array(n), cur = new Array(n); for (var j = 0; j < n; j++) prev[j] = j; for (var i = 1; i < m; i++) { cur[0] = i; var from = Math.max(1, i - 2), to = Math.min(lb, i + 2); for (var j = 1; j < n; j++) { if (j < from || j > to) { cur[j] = 3; continue; } var cost = (a[i - 1] === b[j - 1]) ? 0 : 1; cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost); } var t = prev; prev = cur; cur = t; } var min = Math.min.apply(null, prev); return min > 2 ? 3 : min; }
    function tokenMatches(token, hay) { if (!token) return true; if (/[0-9]/.test(token)) { return hay.indexOf(token) > -1; } if (hay.indexOf(token) > -1) return true; var parts = hay.split(/\s+/); for (var k = 0; k < parts.length; k++) { if (distLev2(token, parts[k]) <= 2) return true; } return false; }

    // Variables globales du module
    let allMissionSections = [], allBadges = [], filterResetContainer = null, filterResetButton = null, searchInput = null, mapSection = null;
    let missionData = []; // {id, element, blob, cities: [normCityName]}

    // Variables globales de la carte (préfixées "fam")
    let famMapInstance = null;
    let famMarkerGroup = null; // L.FeatureGroup pour tous les markers
    let famMarkersByCity = {}; // { normCityName: [marker, ...] }
    let famMarkersByMissionId = {}; // { missionId: [marker, ...] }
    let famCurrentPinnedMarker = null;

    function initFamPage() {
        // 1. Références DOM
        allMissionSections = document.querySelectorAll('.fam-mission');
        allBadges = document.querySelectorAll('.fam-badge');
        filterResetContainer = document.getElementById('fam-filter-reset-container');
        filterResetButton = document.getElementById('fam-filter-reset-button');
        searchInput = document.getElementById('missionSearch');
        mapSection = document.getElementById('fam-map-section');

        // 2. Construire la base de données JS des missions
        buildMissionData();
        // 3. Initialiser la carte Leaflet
        if (document.getElementById('fam-leaflet-map')) {
            initFamLeafletMap();
        }
        // 4. Initialiser les scripts de page (Recherche, "Lire la suite", Clic Titre, YouTube)
        initPageScripts();
    }

    function buildMissionData() {
        allMissionSections.forEach(sec => {
            const h2 = sec.querySelector('h2');
            const sub = sec.querySelector('.fam-sub');
            const badges = sec.querySelectorAll('.fam-badge');

            let missionCities = [];
            badges.forEach(badge => {
                const normCity = norm(badge.textContent);
                missionCities.push(normCity);
                badge.dataset.cityNorm = normCity; // Stocker la version norm sur le badge
            });

            const blob = norm([
                sec.dataset.year || '',
                sec.dataset.dioceses || '',
                sec.dataset.depts || '',
                sec.dataset.cities || '',
                (h2 ? h2.textContent : ''),
                (sub ? sub.textContent : '')
            ].join(' '));

            missionData.push({
                id: sec.id,
                element: sec,
                blob: blob,
                cities: missionCities
            });
        });
    }

    function initFamLeafletMap() {
        // Check if map is already initialized
        if (famMapInstance) {
            famMapInstance.remove();
            famMapInstance = null;
        }

        // 1. Données des lieux de mission
        const missionLocations = [
            // AJOUTS 2025
            { name: "Confolens", lat: 46.0142, lon: 0.6725, missions: ["t2025"] },
            { name: "Terres-de-Haute-Charente", lat: 45.8856, lon: 0.6017, missions: ["t2025"] },
            { name: "La Rochefoucauld", lat: 45.7369, lon: 0.3833, missions: ["t2025"] },
            { name: "Limoges", lat: 45.8297, lon: 1.2614, missions: ["t2025"] },
            { name: "Nantiat", lat: 46.0078, lon: 1.1831, missions: ["t2025"] },
            { name: "Boisseuil", lat: 45.7725, lon: 1.3094, missions: ["t2025"] },
            { name: "Brive-la-Gaillarde", lat: 45.1588, lon: 1.5330, missions: ["t2025"] },
            // ANCIENS
            { name: "Massiac", lat: 45.2536, lon: 3.1972, missions: ["t2024"] },
            { name: "Ruynes-en-Margeride", lat: 45.0211, lon: 3.2258, missions: ["t2024"] },
            { name: "Saint-Chély-d’Apcher", lat: 44.8025, lon: 3.2758, missions: ["t2024"] },
            { name: "Marvejols", lat: 44.5539, lon: 3.2894, missions: ["t2024"] },
            { name: "Mende", lat: 44.5186, lon: 3.4983, missions: ["t2024"] },
            { name: "Millau", lat: 44.0975, lon: 3.0775, missions: ["t2024"] },
            { name: "Vimoutiers", lat: 48.9283, lon: 0.2483, missions: ["t2024"] },
            { name: "La Souterraine", lat: 46.2386, lon: 1.4867, missions: ["t2023"] },
            { name: "Guéret", lat: 46.1703, lon: 1.8719, missions: ["t2023"] },
            { name: "Aubusson", lat: 45.9556, lon: 2.1678, missions: ["t2023"] },
            { name: "Bourganeuf", lat: 45.9536, lon: 1.7561, missions: ["t2023", "t2021"] },
            { name: "Chénérailles", lat: 46.115, lon: 2.1764, missions: ["t2023"] },
            { name: "Villeneuve-la-Garenne", lat: 48.9358, lon: 2.3392, missions: ["a2223"] },
            { name: "Manosque", lat: 43.8344, lon: 5.7836, missions: ["t2022"] },
            { name: "Oraison", lat: 43.9142, lon: 5.9181, missions: ["t2022"] },
            { name: "Saint-Auban", lat: 43.8564, lon: 6.9286, missions: ["t2022"] },
            { name: "Barcelonnette", lat: 44.3858, lon: 6.6525, missions: ["t2022"] },
            { name: "Forcalquier", lat: 43.9589, lon: 5.7797, missions: ["t2022"] },
            { name: "Digne", lat: 44.0931, lon: 6.2339, missions: ["t2022"] },
            { name: "Banon", lat: 44.0381, lon: 5.6292, missions: ["t2022"] },
            { name: "Gennevilliers", lat: 48.9256, lon: 2.2944, missions: ["a2122"] },
            { name: "Genouillac", lat: 46.2894, lon: 1.9564, missions: ["t2021"] },
            { name: "Eymoutiers", lat: 45.736, lon: 1.742, missions: ["t2021"] },
            { name: "Chambon-sur-Voueize", lat: 46.190, lon: 2.428, missions: ["t2021"] },
            { name: "Alençon", lat: 48.4322, lon: 0.0892, missions: ["t2020"] },
            { name: "Ecouché", lat: 48.7183, lon: -0.1206, missions: ["t2020"] },
            { name: "L'Aigle", lat: 48.7656, lon: 0.6267, missions: ["t2020"] },
            { name: "Le Mêle-sur-Sarthe", lat: 48.5133, lon: 0.3344, missions: ["t2020"] },
            { name: "Gouzon", lat: 46.1925, lon: 2.2389, missions: ["t2023", "t2021", "t2019"] },
            { name: "Boussac", lat: 46.3492, lon: 2.215, missions: ["t2021", "t2019"] }
        ];
        // 2. Initialiser la carte
        famMapInstance = window.L.map('fam-leaflet-map', {
            center: [46.6, 2.2], zoom: 5.8, minZoom: 5, maxZoom: 10,
            scrollWheelZoom: false, attributionControl: false,
            maxBounds: window.L.latLngBounds(window.L.latLng(41, -5), window.L.latLng(51.5, 9.9)),
            maxBoundsViscosity: 0.9
        });
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png').addTo(famMapInstance);

        // 3. Créer le groupe de marqueurs
        famMarkerGroup = window.L.featureGroup().addTo(famMapInstance);
        // 4. Créer les points (marqueurs DIV animés)
        missionLocations.forEach(loc => {
            const years = loc.missions.map(id => {
                const missionEl = document.getElementById(id);
                return missionEl ? missionEl.dataset.year.split(',')[0] : '';
            }).filter(Boolean).join(', ');

            const icon = window.L.divIcon({
                className: 'fam-mission-marker-leaflet',
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            });

            const tooltipContent = `<span class="fam-tooltip-city">${loc.name}</span><span class="fam-tooltip-year">Année(s) : ${years}</span>`;

            const marker = window.L.marker([loc.lat, loc.lon], { icon: icon })
                .addTo(famMarkerGroup) // Ajouté au groupe
                .bindTooltip(tooltipContent, {
                    direction: 'top',
                    offset: [0, -8],
                    sticky: true
                });

            // Stockage des métadonnées sur le marqueur
            marker.famMissionIds = loc.missions;
            const normalizedCity = norm(loc.name);
            marker.famCityNameNormalized = normalizedCity;
            marker.tooltipContent = tooltipContent;

            // Remplissage des objets de lookup
            if (!famMarkersByCity[normalizedCity]) {
                famMarkersByCity[normalizedCity] = [];
            }
            famMarkersByCity[normalizedCity].push(marker);

            loc.missions.forEach(id => {
                if (!famMarkersByMissionId[id]) {
                    famMarkersByMissionId[id] = [];
                }
                famMarkersByMissionId[id].push(marker);
            });

            // --- INTERACTIONS DEPUIS LA CARTE ---
            marker.on('mouseover', function () {
                if (famCurrentPinnedMarker && famCurrentPinnedMarker !== this) return;
                if (filterResetContainer.style.display === 'block') return;

                if (!famCurrentPinnedMarker) {
                    this.openTooltip();
                }
                highlightMissions(this.famMissionIds);
                highlightBadges(this.famCityNameNormalized);
                if (this._icon) this._icon.classList.add('is-highlighted');
            });
            marker.on('mouseout', function () {
                if (famCurrentPinnedMarker !== this) {
                    clearVisualHighlights();
                }
            });
            // === ACTION AU CLIC SUR LA CARTE ===
            marker.on('click', function (e) {
                applyFamFilter({
                    missionIds: this.famMissionIds,
                    cityToHighlight: this.famCityNameNormalized,
                    clickedMarker: this
                });
            });
        });

        // 5. Fonctions Utilitaires (Highlight, Reset - liées au survol simple)
        function highlightMissions(missionIds) {
            allMissionSections.forEach(sec => {
                if (!sec.classList.contains('is-hidden')) {
                    sec.classList.toggle('is-highlighted', missionIds.includes(sec.id));
                } else {
                    sec.classList.remove('is-highlighted');
                }
            });
        }

        function highlightBadges(normalizedCityName) {
            allBadges.forEach(badge => {
                const badgeNameNormalized = badge.dataset.cityNorm;
                const parentMission = badge.closest('.fam-mission');
                if (parentMission && !parentMission.classList.contains('is-hidden')) {
                    badge.classList.toggle('is-highlighted', badgeNameNormalized === normalizedCityName);
                } else {
                    badge.classList.remove('is-highlighted');
                }
            });
        }

        function highlightMarkers(normalizedCityName) {
            famMarkerGroup.eachLayer(m => {
                if (m._icon && m !== famCurrentPinnedMarker) {
                    const shouldHighlight = m.famCityNameNormalized === normalizedCityName;
                    m._icon.classList.toggle('is-highlighted', shouldHighlight);
                    if (shouldHighlight) m.openTooltip();
                    else m.closeTooltip();
                }
            });
        }

        // NOUVELLE FONCTION pour nettoyer seulement le survol
        function unHighlightMarkers(normalizedCityName) {
            famMarkerGroup.eachLayer(m => {
                if (m.famCityNameNormalized === normalizedCityName && m !== famCurrentPinnedMarker) {
                    if (m._icon) m._icon.classList.remove('is-highlighted');
                    m.closeTooltip();
                }
            });
        }

        function clearVisualHighlights() {
            allMissionSections.forEach(sec => sec.classList.remove('is-highlighted'));
            allBadges.forEach(badge => badge.classList.remove('is-highlighted'));
            famMarkerGroup.eachLayer(m => {
                if (m !== famCurrentPinnedMarker) {
                    if (m._icon) m._icon.classList.remove('is-highlighted');
                    m.closeTooltip();
                }
            });
        }

        // 6. Interaction depuis les BADGES
        allBadges.forEach(badge => {
            // --- SURVOL BADGE ---
            badge.addEventListener('mouseenter', () => {
                const cityNameNormalized = badge.dataset.cityNorm;
                highlightMarkers(cityNameNormalized); // Affiche l'infobulle
                badge.classList.add('is-highlighted'); // Surligne le badge
            });

            // --- SORTIE SURVOL BADGE ---
            badge.addEventListener('mouseleave', () => {
                const cityNameNormalized = badge.dataset.cityNorm;
                if (filterResetContainer.style.display !== 'block') {
                    // Pas de filtre actif : tout nettoyer
                    clearVisualHighlights();
                } else {
                    // Filtre actif : ne nettoyer que le survol
                    // 1. Nettoyer l'infobulle de la carte
                    unHighlightMarkers(cityNameNormalized);
                    // 2. Nettoyer le badge, sauf s'il est filtré (data-is-filtered)
                    if (!badge.dataset.isFiltered) {
                        badge.classList.remove('is-highlighted');
                    }
                }
            });
            // --- CLIC BADGE ---
            badge.addEventListener('click', () => {
                const cityNameNormalized = badge.dataset.cityNorm;
                applyFamFilter({ cityNormalized: cityNameNormalized });
            });
        });

        // 7. Logique du bouton Reset
        if (filterResetButton) {
            filterResetButton.addEventListener('click', function (e) {
                e.preventDefault();
                applyFamFilter({ reset: true });
            });
        }

        // 8. Clic sur la carte pour désépingler/reseter
        famMapInstance.on('click', function (e) {
            if (e.originalEvent.target.classList.contains('leaflet-marker-icon')) return;

            if (filterResetContainer && filterResetContainer.style.display === 'block') {
                applyFamFilter({ reset: true });
            } else {
                unpinTooltip();
                clearVisualHighlights();
            }
        });
    } // Fin de initFamLeafletMap

    // --- PARTIE 3 : LOGIQUE DE FILTRE UNIFIÉ ---

    function applyFamFilter(criteria) {

        // 0. Nettoyer l'état précédent
        unpinTooltip();
        clearAllHighlights();
        stopAllVideos();

        // On réduit tout, sauf si on clique sur un titre déjà étendu
        const missionCheckToKeep = criteria.missionId ? `#${criteria.missionId} .rm-check` : null;
        document.querySelectorAll('.rm-check:checked').forEach(check => {
            const parentMissionId = check.closest('.fam-mission')?.id;
            if (!parentMissionId || parentMissionId !== criteria.missionId) {
                check.checked = false;
            }
        });

        let visibleMissionIds = new Set();
        let visibleCityNames = new Set();
        let markerToPin = criteria.clickedMarker || null;
        let missionToAutoplay = null;
        let missionToExpand = null;
        let cityToHighlight = criteria.cityToHighlight || null;
        let searchTokens = [];

        // --- A. Gérer le Reset ---
        if (criteria.reset) {
            allMissionSections.forEach(sec => sec.classList.remove('is-hidden'));
            famMarkerGroup.eachLayer(m => {
                m.addTo(famMapInstance);
                if (m._icon) m._icon.classList.remove('is-highlighted');
            });
            if (filterResetContainer) filterResetContainer.style.display = 'none';
            if (searchInput) searchInput.value = '';
            allBadges.forEach(badge => delete badge.dataset.isFiltered);
            document.querySelectorAll('.rm-check:checked').forEach(check => check.checked = false);
            return;
        }

        // --- B. Déterminer les éléments visibles ---

        if (criteria.searchText) {
            const qn = norm(criteria.searchText);
            searchTokens = qn.split(' ').filter(Boolean);

            let isSingleCitySearch = false;
            let singleCityNorm = null;

            // Détecter si c'est une recherche de ville
            if (searchTokens.length >= 1) {
                const token = qn;
                const allCityKeys = Object.keys(famMarkersByCity);
                for (const cityKey of allCityKeys) {
                    if (distLev2(token, cityKey) <= 2) {
                        isSingleCitySearch = true;
                        singleCityNorm = cityKey;
                        break;
                    }
                }
            }

            if (isSingleCitySearch) {
                // CAS 1: C'est une recherche de ville
                visibleCityNames.add(singleCityNorm);
                missionData.forEach(mission => {
                    if (mission.cities.includes(singleCityNorm)) {
                        visibleMissionIds.add(mission.id);
                    }
                });
                if (famMarkersByCity[singleCityNorm] && famMarkersByCity[singleCityNorm].length > 0) {
                    markerToPin = famMarkersByCity[singleCityNorm][0];
                }
                cityToHighlight = singleCityNorm;
            } else {
                // CAS 2: C'est une recherche générale
                missionData.forEach(mission => {
                    let ok = true;
                    for (let t = 0; t < searchTokens.length; t++) {
                        if (!tokenMatches(searchTokens[t], mission.blob)) { ok = false; break; }
                    }
                    if (ok) {
                        visibleMissionIds.add(mission.id);
                        mission.cities.forEach(city => visibleCityNames.add(city));
                    }
                });
                if (visibleCityNames.size === 1) {
                    const singleCity = Array.from(visibleCityNames)[0];
                    if (famMarkersByCity[singleCity] && famMarkersByCity[singleCity].length > 0) {
                        markerToPin = famMarkersByCity[singleCity][0];
                    }
                }
            }
        }
        else if (criteria.missionId) { // Clic Titre
            visibleMissionIds.add(criteria.missionId);
            const mission = missionData.find(m => m.id === criteria.missionId);
            if (mission) {
                mission.cities.forEach(city => visibleCityNames.add(city));
            }
            missionToAutoplay = criteria.missionId;
            missionToExpand = criteria.missionId;
        }
        else if (criteria.cityNormalized) { // Clic Badge
            missionData.forEach(mission => {
                if (mission.cities.includes(criteria.cityNormalized)) {
                    visibleMissionIds.add(mission.id);
                }
            });
            visibleCityNames.add(criteria.cityNormalized);
            if (famMarkersByCity[criteria.cityNormalized] && famMarkersByCity[criteria.cityNormalized].length > 0) {
                markerToPin = famMarkersByCity[criteria.cityNormalized][0];
            }
            cityToHighlight = criteria.cityNormalized;
            if (mapSection) {
                mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        else if (criteria.missionIds) { // Clic Marqueur
            criteria.missionIds.forEach(id => visibleMissionIds.add(id));
            missionData.forEach(mission => {
                if (visibleMissionIds.has(mission.id)) {
                    mission.cities.forEach(city => visibleCityNames.add(city));
                }
            });
            const firstMissionElement = document.getElementById(criteria.missionIds[0]);
            if (firstMissionElement) {
                setTimeout(() => {
                    firstMissionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }

        // --- C. Appliquer le filtre à la LISTE ---
        allMissionSections.forEach(sec => {
            sec.classList.toggle('is-hidden', !visibleMissionIds.has(sec.id));
        });

        // --- D. Appliquer le filtre à la CARTE ---
        famMarkerGroup.eachLayer(marker => {
            const isVisible = visibleCityNames.has(marker.famCityNameNormalized);
            if (isVisible) {
                marker.addTo(famMapInstance);
                if (criteria.missionId && marker.famMissionIds.includes(criteria.missionId)) {
                    if (marker._icon) marker._icon.classList.add('is-highlighted');
                }
            } else {
                marker.removeFrom(famMapInstance);
            }
        });

        // --- E. Appliquer les Effets UI ---

        if (markerToPin) {
            famCurrentPinnedMarker = markerToPin;
            markerToPin.unbindTooltip();
            markerToPin.bindTooltip(markerToPin.tooltipContent, {
                permanent: true,
                direction: 'top',
                offset: [0, -8],
                className: 'leaflet-tooltip-permanent'
            }).openTooltip();
            if (markerToPin._icon) markerToPin._icon.classList.add('is-highlighted');
        }

        if (cityToHighlight) {
            allBadges.forEach(badge => {
                if (!badge.closest('.fam-mission').classList.contains('is-hidden')) {
                    const isFiltered = (badge.dataset.cityNorm === cityToHighlight);
                    badge.classList.toggle('is-highlighted', isFiltered);
                    if (isFiltered) badge.dataset.isFiltered = '1'; // Marquer comme filtré
                }
            });
        } else if (missionToExpand) {
            // Cas du Clic Titre : surligner tous les badges de la mission
            const missionEl = document.getElementById(missionToExpand);
            if (missionEl) {
                missionEl.querySelectorAll('.fam-badge').forEach(badge => {
                    badge.classList.add('is-highlighted');
                    badge.dataset.isFiltered = '1'; // Marquer comme filtré
                });
            }
        }

        if (searchTokens.length > 0) {
            applySearchHighlight(searchTokens);
        }

        if (missionToExpand) {
            const check = document.querySelector(`#${missionToExpand} .rm-check`);
            if (check) check.checked = true;
        }

        if (missionToAutoplay) {
            const box = document.querySelector(`#${missionToAutoplay} .yt-box`);
            if (box && !box.classList.contains('no-video') && !box.dataset.playing) {
                box.click();
            }
        }

        if (filterResetContainer) filterResetContainer.style.display = 'block';
    }

    // Fonction pour épingler/désépingler le tooltip
    function unpinTooltip() {
        if (famCurrentPinnedMarker) {
            famCurrentPinnedMarker.closeTooltip();
            famCurrentPinnedMarker.unbindTooltip();
            famCurrentPinnedMarker.bindTooltip(famCurrentPinnedMarker.tooltipContent, {
                direction: 'top',
                offset: [0, -8],
                sticky: true
            });
            if (famCurrentPinnedMarker._icon) {
                famCurrentPinnedMarker._icon.classList.remove('is-highlighted');
            }
            famCurrentPinnedMarker = null;
        }
    }

    // Fonction pour arrêter toutes les vidéos
    function stopAllVideos() {
        document.querySelectorAll('.yt-box[data-playing="1"]').forEach(box => {
            if (box.dataset.originalHtml) {
                box.innerHTML = box.dataset.originalHtml;
                delete box.dataset.playing;
                delete box.dataset.originalHtml;
            } else {
                box.innerHTML = "";
                delete box.dataset.playing;
            }
        });
    }

    // Fonction pour nettoyer tous les surlignages
    function clearAllHighlights() {
        allMissionSections.forEach(sec => sec.classList.remove('is-highlighted'));
        allBadges.forEach(badge => {
            badge.classList.remove('is-highlighted');
            badge.classList.remove('flash-highlight');
            delete badge.dataset.isFiltered; // Nettoyer le marqueur de filtre
        });
        document.querySelectorAll('.fam-card.flash-highlight').forEach(card => {
            card.classList.remove('flash-highlight');
        });
        famMarkerGroup.eachLayer(m => {
            if (m !== famCurrentPinnedMarker && m._icon) {
                m._icon.classList.remove('is-highlighted');
            }
        });
    }

    // Fonction pour "flasher" les résultats de recherche
    function applySearchHighlight(tokens) {
        missionData.forEach(mission => {
            if (mission.element.classList.contains('is-hidden')) return;

            let cardFlash = false;
            const card = mission.element.querySelector('.fam-card');
            const h2 = mission.element.querySelector('h2');
            const sub = mission.element.querySelector('.fam-sub');

            if (h2 && tokens.some(t => tokenMatches(t, norm(h2.textContent)))) cardFlash = true;
            if (!cardFlash && sub && tokens.some(t => tokenMatches(t, norm(sub.textContent)))) cardFlash = true;

            if (cardFlash && card) card.classList.add('flash-highlight');

            mission.element.querySelectorAll('.fam-badge').forEach(badge => {
                if (tokens.some(t => tokenMatches(t, norm(badge.textContent)))) {
                    badge.classList.add('flash-highlight');
                }
            });
        });
    }

    // --- PARTIE 4 : SCRIPTS DE PAGE (Recherche, "Lire la suite", YouTube) ---

    function initPageScripts() {

        /* ===== Recherche ===== */
        (function () {
            if (!searchInput) return;
            let to = null;
            searchInput.addEventListener('input', function () {
                clearTimeout(to);
                const v = searchInput.value;
                to = setTimeout(function () {
                    if (v === '') {
                        applyFamFilter({ reset: true });
                    } else {
                        applyFamFilter({ searchText: v });
                    }
                }, 150);
            });
        })();

        /* ===== "Lire la suite" & Clic Titre ===== */
        (function () {
            function needsToggle(wrap) { var c = wrap.querySelector('.rm-content'); return c ? (c.scrollHeight - c.offsetHeight > 2) : false; }
            function setup() { document.querySelectorAll('.rm-wrap').forEach(function (wrap) { var toggle = wrap.querySelector('.rm-toggle'); if (!toggle) return; toggle.style.display = needsToggle(wrap) ? 'block' : 'none'; }); }
            setTimeout(setup, 500);
            window.addEventListener('resize', function () { setTimeout(setup, 150); });

            // Clic Titre
            document.querySelectorAll('.fam-card h2').forEach(h2 => {
                h2.addEventListener('click', (e) => {
                    e.preventDefault();
                    const missionId = h2.closest('.fam-mission').id;
                    applyFamFilter({ missionId: missionId });
                });
            });
        })();

        /* ===== Lecture YouTube ===== */
        (function () {

            // Fonction de lecture vidéo réutilisable
            function playYouTubeVideo(box) {
                if (!box || box.dataset.playing || box.classList.contains('no-video')) return;
                var id = (box.getAttribute('data-ytid') || "").trim();
                if (!id) return;

                if (!box.dataset.originalHtml) {
                    box.dataset.originalHtml = box.innerHTML;
                }

                box.dataset.playing = "1";
                var ifr = document.createElement('iframe');
                ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&modestbranding=1&rel=0";
                ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                ifr.allowFullscreen = true;
                Object.assign(ifr.style, { position: "absolute", inset: "0", width: "100%", height: "100%", border: "0" });
                box.innerHTML = "";
                box.appendChild(ifr);
            }

            var boxes = document.querySelectorAll('.yt-box');
            boxes.forEach(function (box) {
                box.addEventListener('click', function (e) {
                    e.preventDefault();
                    playYouTubeVideo(box);
                }, { passive: false });

                if (!(box.getAttribute('data-ytid') || "").trim()) {
                    box.classList.add('no-video');
                }
            });
        })();
    }
}
