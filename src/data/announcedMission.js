// Single source of truth for the announced mission. The hero and map both read
// this record, so updating the announcement automatically moves the highlight.
export const ANNOUNCED_MISSION = Object.freeze({
  year: '2027',
  code: '53',
  place: 'Laval',
  titleLine: 'nous accueille.',
  dates: '30 octobre – 5 novembre',
  diocese: 'Diocèse de Laval (Mayenne)',
  territory: 'Mayenne (53)',
  mapLabel: 'Territoire de mission · Diocèse de Laval',
  description: 'Pendant une semaine, des familles et des jeunes venus de toute la France se rassemblent en Mayenne au service des paroisses locales. Une mission diocésaine vivante et fraternelle pour aller à la rencontre des habitants, prier avec les communautés et témoigner ensemble de la joie de l’Évangile.',
});
