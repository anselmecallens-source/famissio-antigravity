import React, { useState, useRef, useCallback } from 'react';
import { franceDepartments } from '../data/franceDepartmentsData';
import { MapPin, Calendar, Sparkles, Navigation, Heart } from 'lucide-react';

export default function FranceMissionMap() {
  const [hoveredDept, setHoveredDept] = useState(null);
  // Par défaut, le département actif sélectionné est la Mayenne (53)
  const [selectedDept, setSelectedDept] = useState(() =>
    franceDepartments.find((d) => d.code === '53')
  );
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const activeDept = hoveredDept || selectedDept;

  const handleMouseEnter = useCallback((dept, e) => {
    setHoveredDept(dept);
    updateTooltip(e);
  }, []);

  const handleMouseMove = useCallback((e) => {
    updateTooltip(e);
  }, []);

  const updateTooltip = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Clamp tooltip position to stay nicely within bounds
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    const clampedX = Math.max(110, Math.min(rect.width - 110, rawX));
    const clampedY = Math.max(80, rawY);
    setTooltipPos({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = useCallback(() => {
    setHoveredDept(null);
  }, []);

  const handleDeptClick = useCallback((dept) => {
    setSelectedDept(dept);
  }, []);

  // Statistiques calculées
  const totalVisited = franceDepartments.filter(
    (d) => d.status === 'visited' || d.status === 'current'
  ).length;

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Barre de statistiques et légende */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 mb-6 bg-gradient-to-r from-orange-50/80 via-white/90 to-amber-50/80 backdrop-blur-md border border-orange-200/70 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#c82904] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
            <strong className="text-[#c82904] font-black">{totalVisited}</strong> départements visités par Famissio
          </span>
        </div>

        {/* Légende interactive */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-br from-[#c82904] to-[#f46a07] shadow-sm"></span>
            </span>
            <span className="font-bold text-gray-900">
              Mayenne (53) · 2027
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full bg-[#f97316] shadow-sm"></span>
            <span className="font-semibold text-gray-700">
              Missions passées
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full bg-[#f4ebe1] border border-[#d8c7b4]"></span>
            <span className="font-medium text-gray-500">
              Autres
            </span>
          </div>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative mx-auto max-w-[760px] aspect-[570/550] flex items-center justify-center px-2">
        <svg
          viewBox="0 0 570 550"
          className="w-full h-full drop-shadow-[0_16px_32px_rgba(200,41,4,0.07)] overflow-visible"
        >
          <defs>
            {/* Dégradé flamboyant pour la Mayenne (Mission actuelle) */}
            <linearGradient id="currentMissionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c82904" />
              <stop offset="50%" stopColor="#e03508" />
              <stop offset="100%" stopColor="#f46a07" />
            </linearGradient>

            {/* Dégradé pour départements visités */}
            <linearGradient id="visitedMissionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>

            {/* Ombre portée pour département survolé */}
            <filter id="hoverShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#c82904" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* Calque de fond : départements neutres */}
          <g>
            {franceDepartments
              .filter((d) => d.status === 'other')
              .map((dept) => {
                const isHovered = hoveredDept?.code === dept.code;
                const isSelected = selectedDept?.code === dept.code;
                return (
                  <path
                    key={dept.code}
                    d={dept.path}
                    fill={isHovered || isSelected ? '#eadacf' : '#f5ebe1'}
                    stroke={isHovered || isSelected ? '#f46a07' : '#dfcfbd'}
                    strokeWidth={isHovered || isSelected ? '1.5' : '0.9'}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="transition-all duration-150 cursor-pointer"
                    onMouseEnter={(e) => handleMouseEnter(dept, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleDeptClick(dept)}
                  />
                );
              })}
          </g>

          {/* Calque intermédiaire : départements visités passés */}
          <g>
            {franceDepartments
              .filter((d) => d.status === 'visited')
              .map((dept) => {
                const isHovered = hoveredDept?.code === dept.code;
                const isSelected = selectedDept?.code === dept.code;
                return (
                  <path
                    key={dept.code}
                    d={dept.path}
                    fill={isHovered || isSelected ? '#ea580c' : 'url(#visitedMissionGradient)'}
                    stroke="#ffffff"
                    strokeWidth={isHovered || isSelected ? '2.4' : '1.3'}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="transition-all duration-150 cursor-pointer"
                    style={{
                      filter: isHovered || isSelected ? 'url(#hoverShadow)' : undefined,
                    }}
                    onMouseEnter={(e) => handleMouseEnter(dept, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleDeptClick(dept)}
                  />
                );
              })}
          </g>

          {/* Calque supérieur : Mayenne 53 (Mission actuelle) */}
          {franceDepartments
            .filter((d) => d.status === 'current')
            .map((dept) => {
              const isHovered = hoveredDept?.code === dept.code;
              const isSelected = selectedDept?.code === dept.code;
              return (
                <path
                  key={dept.code}
                  d={dept.path}
                  fill="url(#currentMissionGradient)"
                  stroke="#ffffff"
                  strokeWidth={isHovered || isSelected ? '3' : '2.2'}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="transition-all duration-150 cursor-pointer"
                  style={{
                    filter: 'url(#hoverShadow)',
                  }}
                  onMouseEnter={(e) => handleMouseEnter(dept, e)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDeptClick(dept)}
                />
              );
            })}

          {/* Balise animée repère sur Laval (Mayenne 53) cx=174, cy=172 */}
          <g transform="translate(174, 172)" className="pointer-events-none">
            <circle r="14" fill="#c82904" opacity="0.3" className="animate-ping" />
            <circle r="6" fill="#c82904" stroke="#ffffff" strokeWidth="1.5" />
            <circle r="2" fill="#ffffff" />
          </g>
        </svg>

        {/* Tooltip flottant au survol du curseur (desktop) */}
        {hoveredDept && (
          <div
            className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-4 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-200 text-left min-w-[220px] max-w-[280px] animate-in fade-in zoom-in-95 duration-150"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y}px`,
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                {hoveredDept.nom}
              </span>
              <span className="px-2 py-0.5 text-xs font-black rounded-md bg-orange-100 text-orange-800">
                {hoveredDept.code}
              </span>
            </div>

            {hoveredDept.status === 'current' && (
              <div className="mt-2 pt-2 border-t border-orange-100">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-[#c82904] uppercase tracking-wider mb-1">
                  <Sparkles size={13} className="text-[#f46a07]" />
                  Mission 2027 · Prochaine
                </div>
                <p className="text-xs font-bold text-gray-900">
                  Diocèse de {hoveredDept.diocese}
                </p>
                <p className="text-[11px] text-[#c82904] font-semibold mt-0.5">
                  30 octobre – 5 novembre 2027
                </p>
              </div>
            )}

            {hoveredDept.status === 'visited' && (
              <div className="mt-2 pt-2 border-t border-orange-100">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-600 uppercase tracking-wider mb-1">
                  <Calendar size={12} className="text-orange-500" />
                  Mission {hoveredDept.year}
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Diocèse de {hoveredDept.diocese}
                </p>
                {hoveredDept.note && (
                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">
                    {hoveredDept.note}
                  </p>
                )}
              </div>
            )}

            {hoveredDept.status === 'other' && (
              <p className="text-xs text-gray-400 mt-1 italic">
                Territoire à évangéliser
              </p>
            )}
          </div>
        )}
      </div>

      {/* Carte d'information interactive pour le département sélectionné (parfait sur mobile & tactile) */}
      {activeDept && (
        <div className="mt-6 mx-auto max-w-[620px] p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/95 to-orange-50/70 border border-orange-200/80 shadow-md backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow-sm ${
                  activeDept.status === 'current'
                    ? 'bg-gradient-to-br from-[#c82904] to-[#f46a07] text-white ring-4 ring-orange-200'
                    : activeDept.status === 'visited'
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#f4ebe1] text-gray-700 border border-[#dfcfbd]'
                }`}
              >
                {activeDept.code}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                  {activeDept.nom}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  {activeDept.status === 'current' && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#c82904]">
                      <Sparkles size={12} />
                      Diocèse de {activeDept.diocese} · Laval 2027
                    </span>
                  )}
                  {activeDept.status === 'visited' && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700">
                      <MapPin size={12} />
                      Diocèse de {activeDept.diocese} · {activeDept.year}
                    </span>
                  )}
                  {activeDept.status === 'other' && (
                    <span className="text-xs font-medium text-gray-500">
                      Diocèse à évangéliser
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Badge d'état */}
            <div>
              {activeDept.status === 'current' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-[#c82904] text-xs font-extrabold tracking-wide uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c82904]"></span>
                  </span>
                  Prochaine mission
                </span>
              ) : activeDept.status === 'visited' ? (
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                  Mission Famissio {activeDept.year}
                </span>
              ) : (
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  À visiter
                </span>
              )}
            </div>
          </div>

          {/* Description ou note historique */}
          {activeDept.note ? (
            <p className="mt-3 pt-3 border-t border-orange-100 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {activeDept.note}
            </p>
          ) : activeDept.status === 'other' ? (
            <p className="mt-3 pt-3 border-t border-orange-100 text-xs text-gray-500 italic">
              Famissio n'a pas encore posé ses valises dans ce département. Qui sait pour les prochaines années !
            </p>
          ) : null}
        </div>
      )}

      {/* Petit texte discret d'interaction */}
      <div className="mt-4 text-center">
        <span className="text-[11px] sm:text-xs font-medium text-gray-500 tracking-wide">
          Survolez ou touchez un département pour explorer les missions de Famissio
        </span>
      </div>
    </div>
  );
}
