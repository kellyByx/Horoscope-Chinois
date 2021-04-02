// number -> number
// transformer une année en index qui va etre celui d'un signe dans la data
// import signes from './data/signes';

export function getSign(annee) {
  // if ([2020, 2032, 2004].includes(annee)) {
  // const arr =['singe','coq','chien','cochon','rat','buffle','tigre','lapin',dragon','serpent','cheval','chevre']
  // return signes[annee % 12];
  return annee % 12;
}

// console.log(getSign(1996));
