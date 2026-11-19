import React, { useMemo, useState } from 'react';
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

function enlargeDepartmentPath(path, scale = 1.12) {
  const points = [...path.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)]
    .map((match) => [Number(match[1]), Number(match[2])]);
  if (!points.length) return path;
  const centerX = (Math.min(...points.map(([x]) => x)) + Math.max(...points.map(([x]) => x))) / 2;
  const centerY = (Math.min(...points.map(([, y]) => y)) + Math.max(...points.map(([, y]) => y))) / 2;
  return path.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => (
    `${(centerX + (Number(x) - centerX) * scale).toFixed(3)},${(centerY + (Number(y) - centerY) * scale).toFixed(3)}`
  ));
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
  const [hasEnteredMap, setHasEnteredMap] = useState(false);
  const yearOptions = useMemo(() => [...new Set([ANNOUNCED_MISSION.year, ...missions.map((mission) => mission.year)])], [missions]);
  const missionsByCode = useMemo(() => new Map(MAINLAND_DEPARTMENTS.map(({ code }) => [code, missions
    .filter((mission) => (DEPARTMENTS_BY_MISSION[mission.id] || []).includes(code))
    .sort(compareYears)])), [missions]);
  const departmentsByCode = useMemo(() => new Map(MAINLAND_DEPARTMENTS.map((department) => [department.code, department])), []);
  const announcedDepartment = departmentsByCode.get(ANNOUNCED_MISSION.code);
  const announcedIsVisible = activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year;
  const announcedPath = announcedDepartment && enlargeDepartmentPath(announcedDepartment.mapPath);
  // A clicked department stays pinned while the pointer crosses the map.
  const code = selectedCode || hoveredCode;
  const department = departmentsByCode.get(code);
  const activePath = department && (department.code === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year)
    ? enlargeDepartmentPath(department.mapPath)
    : department.mapPath);
  const pastMissions = code ? missionsByCode.get(code) || [] : [];
  const shownMissions = activeYear === 'all' ? pastMissions : pastMissions.filter((mission) => mission.year === activeYear);
  const isAnnouncedHere = code === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year);
  const isExpanded = Boolean(selectedCode && selectedCode === code);

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
        className="mission-fr-map__canvas"
        onMouseEnter={() => setHasEnteredMap(true)}
        onMouseLeave={() => setHoveredCode(null)}
        onFocusCapture={() => setHasEnteredMap(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHoveredCode(null); }}
      >
        <svg className="mission-fr-map__svg" viewBox={FRANCE_MAP_VIEWBOX} role="group" aria-label="Départements de France métropolitaine">
          {MAINLAND_DEPARTMENTS.map((dept) => (
            <path
              key={dept.code}
              d={dept.code === ANNOUNCED_MISSION.code && (activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year) ? enlargeDepartmentPath(dept.mapPath) : dept.mapPath}
              className={departmentClass(dept.code)}
              role="button"
              tabIndex="0"
              aria-label={`${dept.name}, ${dept.code}${hasVisit(dept.code) ? ', mission Famissio' : ', pas encore visité'}`}
              aria-pressed={selectedCode === dept.code}
              onMouseEnter={() => { if (!selectedCode) setHoveredCode(dept.code); }}
              onFocus={() => setHoveredCode(dept.code)}
              onClick={() => { setSelectedCode((current) => current === dept.code ? null : dept.code); setHoveredCode(null); }}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedCode((current) => current === dept.code ? null : dept.code); setHoveredCode(null); } }}
            >
              <title>{dept.name} ({dept.code})</title>
            </path>
          ))}
          {announcedIsVisible && announcedPath && !hasEnteredMap && (
            <>
              <path className="mission-fr-map__active-underlay is-announced is-intro" d={announcedPath} aria-hidden="true" />
              <path className="mission-fr-map__active-outline is-announced is-intro" d={announcedPath} aria-hidden="true" />
            </>
          )}
          {activePath && (hoveredCode || selectedCode) && (
            <>
              <path className={`mission-fr-map__active-underlay${department.code === ANNOUNCED_MISSION.code && announcedIsVisible ? ' is-announced' : ''}`} d={activePath} aria-hidden="true" />
              <path className={`mission-fr-map__active-outline${department.code === ANNOUNCED_MISSION.code && announcedIsVisible ? ' is-announced' : ''}`} d={activePath} aria-hidden="true" />
            </>
          )}
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
