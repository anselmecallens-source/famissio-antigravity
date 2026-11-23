import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { ANNOUNCED_MISSION } from '../data/announcedMission';
import { FRANCE_DEPARTMENTS, FRANCE_MAP_VIEWBOX } from '../data/franceDepartments';

const DEPARTMENTS_BY_MISSION = {
  10: ['17', '16', '19'],
  1: ['23', '16', '87', '19'],
  2: ['48', '12', '15', '61'],
  3: ['23'],
  5: ['04'],
  7: ['23', '87'],
  8: ['61'],
  9: ['23'],
  4: ['92'],
  6: ['92'],
};

function compareYears(a, b) {
  return Number(b.year.slice(0, 4)) - Number(a.year.slice(0, 4));
}

function simplifyLine(points, tolerance) {
  if (points.length <= 2) return points;
  const [start, end] = [points[0], points[points.length - 1]];
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  let maxDistance = 0;
  let farthestIndex = 0;
  points.slice(1, -1).forEach((point, index) => {
    const denominator = dx * dx + dy * dy;
    const projected = denominator ? Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / denominator)) : 0;
    const distance = Math.hypot(point[0] - (start[0] + projected * dx), point[1] - (start[1] + projected * dy));
    if (distance > maxDistance) { maxDistance = distance; farthestIndex = index + 1; }
  });
  if (maxDistance <= tolerance) return [start, end];
  const left = simplifyLine(points.slice(0, farthestIndex + 1), tolerance);
  const right = simplifyLine(points.slice(farthestIndex), tolerance);
  return [...left.slice(0, -1), ...right];
}

function simplifyRing(points, tolerance) {
  const openRing = points.slice(0, -1);
  if (openRing.length < 15) return points;
  const first = openRing[0];
  let pivotIndex = 1;
  let greatestDistance = 0;
  openRing.forEach((point, index) => {
    const distance = Math.hypot(point[0] - first[0], point[1] - first[1]);
    if (distance > greatestDistance) { greatestDistance = distance; pivotIndex = index; }
  });
  const firstHalf = simplifyLine(openRing.slice(0, pivotIndex + 1), tolerance);
  const secondHalf = simplifyLine([...openRing.slice(pivotIndex), first], tolerance);
  const result = [...firstHalf.slice(0, -1), ...secondHalf];
  return result.length >= 6 ? result : points;
}

function simplifyDepartmentPath(path, tolerance = 0.035) {
  const tokens = path.match(/[MLZ]|-?\d+(?:\.\d+)?/g) || [];
  const rings = [];
  let ring = [];
  let command = '';
  for (let index = 0; index < tokens.length;) {
    const token = tokens[index++];
    if (token === 'M' || token === 'L') {
      command = token;
      const point = [Number(tokens[index++]), Number(tokens[index++])];
      if (command === 'M' && ring.length) { rings.push(ring); ring = []; }
      ring.push(point);
    } else if (token === 'Z') {
      if (ring.length) rings.push([...ring, ring[0]]);
      ring = [];
      command = '';
    }
  }
  if (ring.length) rings.push([...ring, ring[0]]);
  return rings.map((points) => {
    const simplified = simplifyRing(points, tolerance);
    const openRing = simplified.slice(0, -1);
    if (openRing.length < 6) return `M${simplified.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join('L')}Z`;
    const midpoint = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const start = midpoint(openRing[openRing.length - 1], openRing[0]);
    let rounded = `M${start[0].toFixed(3)},${start[1].toFixed(3)}`;
    openRing.forEach((point, index) => {
      const next = midpoint(point, openRing[(index + 1) % openRing.length]);
      rounded += `Q${point[0].toFixed(3)},${point[1].toFixed(3)} ${next[0].toFixed(3)},${next[1].toFixed(3)}`;
    });
    return `${rounded}Z`;
  }).join('');
}

const MAINLAND_DEPARTMENTS = FRANCE_DEPARTMENTS
  .filter(({ code }) => code !== '2A' && code !== '2B')
  .map((department) => ({ ...department, mapPath: simplifyDepartmentPath(department.d) }));

export default function MissionsFranceMap({ missions, onOpenMission }) {
  const [activeYear, setActiveYear] = useState('all');
  const [hoveredCode, setHoveredCode] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const mapCanvasRef = useRef(null);
  const [introStarted, setIntroStarted] = useState(false);
  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return undefined;
    const startIntro = () => {
      setIntroStarted(true);
    };
    if (!('IntersectionObserver' in window)) {
      startIntro();
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      startIntro();
    }, { threshold: 0.15 });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);
  const [hasSelectedOtherDepartment, setHasSelectedOtherDepartment] = useState(false);
  const yearOptions = useMemo(() => [...new Set([ANNOUNCED_MISSION.year, ...missions.map((mission) => mission.year)])], [missions]);
  const missionsByCode = useMemo(() => new Map(MAINLAND_DEPARTMENTS.map(({ code }) => [code, missions
    .filter((mission) => (DEPARTMENTS_BY_MISSION[mission.id] || []).includes(code))
    .sort(compareYears)])), [missions]);
  const departmentsByCode = useMemo(() => new Map(MAINLAND_DEPARTMENTS.map((department) => [department.code, department])), []);
  const announcedIsVisible = activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year;
  // A clicked department stays pinned while the pointer crosses the map.
  const code = selectedCode || hoveredCode;
  const department = departmentsByCode.get(code);
  const pastMissions = code ? missionsByCode.get(code) || [] : [];
  const shownMissions = activeYear === 'all' ? pastMissions : pastMissions.filter((mission) => mission.year === activeYear);
  const isAnnouncedHere = code === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year);
  const isExpanded = Boolean(selectedCode && selectedCode === code);
  const introIsVisible = announcedIsVisible && introStarted && !hasSelectedOtherDepartment;

  const hasVisit = (deptCode) => {
    if (deptCode === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year)) return true;
    const records = missionsByCode.get(deptCode) || [];
    return records.some((mission) => activeYear === 'all' || mission.year === activeYear);
  };

  const departmentClass = (deptCode) => {
    const announced = deptCode === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year);
    const visited = hasVisit(deptCode);
    const selectedYear = activeYear !== 'all' && !announced && visited;
    const color = announced ? 'is-announced' : selectedYear ? 'is-year' : visited ? 'is-visited' : 'is-empty';
    return `mission-fr-map__department ${color}${deptCode === code ? ' is-active' : ''}`;
  };

  return (
    <div className="mission-fr-map" aria-label="Carte interactive des missions Famissio">
      <div className="mission-fr-map__tools">
        <label className="mission-fr-map__filter">
          <select aria-label="Filtrer les missions par année" value={activeYear} onChange={(event) => setActiveYear(event.target.value)}>
            <option value="all">Toutes les années</option>
            {yearOptions.map((year) => <option value={year} key={year}>Mission {year}</option>)}
          </select>
        </label>
        <div className="mission-fr-map__legend" aria-label="Légende de la carte">
          <span><i className={activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year ? 'is-announced' : 'is-year'} /> {activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year ? 'Prochaine mission' : `Mission ${activeYear}`}</span>
          {activeYear === 'all' && <span><i className="is-visited" /> Déjà visité</span>}
        </div>
      </div>

      <div
        ref={mapCanvasRef}
        className="mission-fr-map__canvas"
        onMouseLeave={() => setHoveredCode(null)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHoveredCode(null); }}
      >
        <svg className="mission-fr-map__svg" viewBox={FRANCE_MAP_VIEWBOX} role="group" aria-label="Départements de France métropolitaine">
          {MAINLAND_DEPARTMENTS.map((dept) => (
            <path
              key={dept.code}
              d={dept.mapPath}
              className={`${departmentClass(dept.code)}${dept.code === ANNOUNCED_MISSION.code && introIsVisible ? ' is-intro' : ''}`}
              role="button"
              tabIndex="0"
              aria-label={`${dept.name}, ${dept.code}${hasVisit(dept.code) ? ', mission Famissio' : ', pas encore visité'}`}
              aria-pressed={selectedCode === dept.code}
              onMouseEnter={() => { if (!selectedCode) setHoveredCode(dept.code); }}
              onFocus={() => setHoveredCode(dept.code)}
              onClick={() => { if (dept.code !== ANNOUNCED_MISSION.code) setHasSelectedOtherDepartment(true); setSelectedCode((current) => current === dept.code ? null : dept.code); setHoveredCode(null); }}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (dept.code !== ANNOUNCED_MISSION.code) setHasSelectedOtherDepartment(true); setSelectedCode((current) => current === dept.code ? null : dept.code); setHoveredCode(null); } }}
            >
              <title>{dept.name} ({dept.code})</title>
            </path>
          ))}
          {introIsVisible && departmentsByCode.get(ANNOUNCED_MISSION.code)?.mapPath && <>
            <path className="mission-fr-map__department-halo mission-fr-map__department-halo-underlay is-intro" d={departmentsByCode.get(ANNOUNCED_MISSION.code).mapPath} fill="none" aria-hidden="true" />
            <path className="mission-fr-map__department-halo mission-fr-map__department-halo-outline is-intro" d={departmentsByCode.get(ANNOUNCED_MISSION.code).mapPath} fill="none" aria-hidden="true" />
          </>}
          {department?.mapPath && (hoveredCode || selectedCode) && <>
            <path className="mission-fr-map__department-halo mission-fr-map__department-halo-underlay" d={department.mapPath} fill="none" aria-hidden="true" />
            <path className="mission-fr-map__department-halo mission-fr-map__department-halo-outline" d={department.mapPath} fill="none" aria-hidden="true" />
          </>}
          {announcedIsVisible && <g className="mission-fr-map__callout" aria-hidden="true">
            <defs><linearGradient id="mission-callout-gradient" x1="0" x2="1"><stop stopColor="#c82904" /><stop offset="1" stopColor="#f46a07" /></linearGradient></defs>
            <path className="mission-fr-map__callout-line" d="M2.68 2.29 C2.84 2.38 2.96 2.65 3.1 2.9" />
            <path className="mission-fr-map__callout-arrow" d="M3.02 2.81 L3.1 2.9 L3.14 2.78" />
            <path className="mission-fr-map__callout-shadow" d="M.8 2.04 H2.27 L2.58 2.23 V2.42 L2.4 2.57 H.8 Q.61 2.57 .61 2.38 V2.23 Q.61 2.04 .8 2.04Z" />
            <path className="mission-fr-map__callout-card" d="M.8 1.98 H2.27 L2.58 2.17 V2.36 L2.4 2.51 H.8 Q.61 2.51 .61 2.32 V2.17 Q.61 1.98 .8 1.98Z" />
            <path className="mission-fr-map__callout-accent" d="M.82 2.08 H2.24" />
            <path className="mission-fr-map__callout-detail" d="M2.38 2.25 l.045 .045 -.045 .045 -.045 -.045Z" />
            <text className="mission-fr-map__callout-text" x="1.58" y="2.34" textAnchor="middle">RDV ici en 2027</text>
          </g>}
        </svg>

        {department && (hoveredCode || selectedCode) && (
          <section className={`mission-fr-map__popup${isExpanded ? ' is-expanded' : ''}${isAnnouncedHere ? ' is-announced' : ''}`} aria-live="polite" aria-label={`Missions dans le département ${department.name}`}>
            {isAnnouncedHere ? (
              <div className="mission-fr-map__popup-body mission-fr-map__popup-body--announced">
                <div className="mission-fr-map__announced">
                  <span className="mission-fr-map__announced-kicker"><Sparkles size={13} aria-hidden="true" /> PROCHAINE MISSION · {ANNOUNCED_MISSION.year}</span>
                  <strong>Le diocèse de Laval nous accueille</strong>
                  <span>Une semaine de rencontres et de grande joie partagée.</span>
                  <small>{ANNOUNCED_MISSION.dates}</small>
                </div>
              </div>
            ) : (
              <>
                <div className="mission-fr-map__popup-title">
                  <div><strong>{department.name}</strong><span>{shownMissions.length ? `${shownMissions.length} mission${shownMissions.length > 1 ? 's' : ''}` : 'Nous espérons un jour aller à la rencontre des habitants d’ici.'}</span></div>
                  {isExpanded && <button type="button" className="mission-fr-map__close" aria-label="Fermer les détails" onClick={() => { setSelectedCode(null); setHoveredCode(null); }}><X size={16} /></button>}
                </div>
                {isExpanded && (
                  <div className="mission-fr-map__popup-body">
                    {shownMissions.map((mission) => (
                      <div className="mission-fr-map__past" key={mission.id}>
                        <span><strong>{mission.year}</strong><span>{mission.location}</span></span>
                        <button type="button" onClick={() => onOpenMission(mission)}>Voir cette mission <ArrowUpRight size={14} /></button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        )}
      </div>

    </div>
  );
}
