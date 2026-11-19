// Single source of truth for the announced mission. The hero and map both read
// this record, so updating the announcement automatically moves the highlight.
export const ANNOUNCED_MISSION = Object.freeze({
  year: '2027',
  code: '53',
  place: 'Laval',
  titleLine: 'nous accueille.',
  dates: '30 octobre – 5 novembre',
  territory: 'Mayenne (53)',
  description: 'À la Toussaint 2027, nous nous retrouverons en Mayenne pour une semaine de rencontres, de service auprès des paroisses et de grande joie partagée.',
});
