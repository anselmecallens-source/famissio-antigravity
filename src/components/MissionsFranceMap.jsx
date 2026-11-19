import React, { useMemo, useState } from 'react';
import { ArrowUpRight, CalendarDays, X } from 'lucide-react';
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

export default function MissionsFranceMap({ missions, onOpenMission }) {
  const [activeYear, setActiveYear] = useState('all');
  const [hoveredCode, setHoveredCode] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const yearOptions = useMemo(() => [...new Set([ANNOUNCED_MISSION.year, ...missions.map((mission) => mission.year)])], [missions]);
  const missionsByCode = useMemo(() => new Map(FRANCE_DEPARTMENTS.map(({ code }) => [code, missions
    .filter((mission) => (DEPARTMENTS_BY_MISSION[mission.id] || []).includes(code))
    .sort(compareYears)])), [missions]);
  const departmentsByCode = useMemo(() => new Map(FRANCE_DEPARTMENTS.map((department) => [department.code, department])), []);
  const code = hoveredCode || selectedCode;
  const department = departmentsByCode.get(code);
  const announcedDepartment = departmentsByCode.get(ANNOUNCED_MISSION.code);
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
          <CalendarDays size={15} aria-hidden="true" />
          <span>Afficher</span>
          <select aria-label="Filtrer les missions par année" value={activeYear} onChange={(event) => setActiveYear(event.target.value)}>
            <option value="all">Toutes les années</option>
            {yearOptions.map((year) => <option value={year} key={year}>Mission {year}</option>)}
          </select>
        </label>
        <div className="mission-fr-map__legend" aria-label="Légende de la carte">
          <span><i className={activeYear === 'all' || activeYear === ANNOUNCED_MISSION.year ? 'is-announced' : 'is-year'} /> {activeYear === 'all' ? `Mission ${ANNOUNCED_MISSION.year}` : `Mission ${activeYear}`}</span>
          {activeYear === 'all' && <span><i className="is-visited" /> Déjà visité</span>}
        </div>
      </div>

      <div
        className="mission-fr-map__canvas"
        onMouseLeave={() => setHoveredCode(null)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHoveredCode(null); }}
      >
        <svg className="mission-fr-map__svg" viewBox={FRANCE_MAP_VIEWBOX} role="group" aria-label="Départements de France métropolitaine">
          {FRANCE_DEPARTMENTS.map((dept) => (
            <path
              key={dept.code}
              d={dept.d}
              className={departmentClass(dept.code)}
              role="button"
              tabIndex="0"
              aria-label={`${dept.name}, ${dept.code}${hasVisit(dept.code) ? ', mission Famissio' : ', pas encore visité'}`}
              aria-pressed={selectedCode === dept.code}
              onMouseEnter={() => setHoveredCode(dept.code)}
              onFocus={() => setHoveredCode(dept.code)}
              onClick={() => setSelectedCode(dept.code)}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedCode(dept.code); } }}
            >
              <title>{dept.name} ({dept.code})</title>
            </path>
          ))}
          {announcedDepartment && (
            <g className="mission-fr-map__announced-label" transform={`translate(${announcedDepartment.label[0]} ${announcedDepartment.label[1]})`} aria-hidden="true">
              <path d="M0,0 L0.12,-0.27" />
              <rect x="0.12" y="-0.69" width="1.48" height="0.34" rx="0.16" />
              <text x="0.86" y="-0.46" textAnchor="middle">LAVAL · {ANNOUNCED_MISSION.year}</text>
            </g>
          )}
        </svg>

        {department && (hoveredCode || selectedCode) && (
          <section className={`mission-fr-map__popup${isExpanded ? ' is-expanded' : ''}`} aria-live="polite" aria-label={`Missions dans le département ${department.name}`}>
            <div className="mission-fr-map__popup-title">
              <div><strong>{department.name}</strong><span>{department.code} · {isAnnouncedHere ? `mission annoncée ${ANNOUNCED_MISSION.year}` : shownMissions.length ? `${shownMissions.length} mission${shownMissions.length > 1 ? 's' : ''}` : 'à découvrir'}</span></div>
              {isExpanded && <button type="button" className="mission-fr-map__close" aria-label="Fermer les détails" onClick={() => setSelectedCode(null)}><X size={16} /></button>}
            </div>
            {isExpanded && (
              <div className="mission-fr-map__popup-body">
                {isAnnouncedHere && (
                  <div className="mission-fr-map__announced">
                    <span>PROCHAINE MISSION · {ANNOUNCED_MISSION.year}</span>
                    <strong>{ANNOUNCED_MISSION.place}, Mayenne</strong>
                    <small>{ANNOUNCED_MISSION.dates}</small>
                    <a href="#liste-missions">Voir les missions <ArrowUpRight size={14} /></a>
                  </div>
                )}
                {shownMissions.map((mission) => (
                  <div className="mission-fr-map__past" key={mission.id}>
                    <span>{mission.year} · {mission.location}</span>
                    <button type="button" onClick={() => onOpenMission(mission)}>Voir cette mission <ArrowUpRight size={14} /></button>
                  </div>
                ))}
                {!isAnnouncedHere && !shownMissions.length && (
                  <p className="mission-fr-map__empty">Aucune mission Famissio recensée{activeYear !== 'all' ? ` en ${activeYear}` : ' ici pour le moment'}.</p>
                )}
                <a className="mission-fr-map__all" href="#liste-missions">Toutes les missions <ArrowUpRight size={14} /></a>
              </div>
            )}
          </section>
        )}
      </div>

      <div className="mission-fr-map__note">
        {activeYear === 'all' ? (
          <>
            <span><i className="is-announced" /> {ANNOUNCED_MISSION.territory} · mission annoncée</span>
            <span><i className="is-visited" /> Départements déjà visités</span>
          </>
        ) : <span><i className={activeYear === ANNOUNCED_MISSION.year ? 'is-announced' : 'is-year'} /> Départements de la mission {activeYear}</span>}
      </div>
    </div>
  );
}
