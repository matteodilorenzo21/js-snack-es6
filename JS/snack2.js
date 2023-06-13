// JS LINK RUN CHECK
console.log('JS run as well #2');

// Array Studenti con: id, name e grades
const studenti = [
    {
        id: 213,
        name: 'Marco Della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero Della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca Da Polenta',
        grades: 84,
    },
]

// Array di studenti con voti superiori a 70
const studentiVotiSuperiori70 = studenti.filter(studente => studente.grades > 70);
  
// Array di studenti con voti superiori a 70 e id superiore a 120
const studentiVotiSuperiori70IdSuperiore120 = studenti.filter(studente => studente.grades > 70 && studente.id > 120);
  
// Array di nomi degli studenti in maiuscolo
const nomiStudentiMaiuscolo = studenti.map(studente => studente.name.toUpperCase());
  
console.log("Studenti con voti superiori a 70:");
console.table(studentiVotiSuperiori70);
  
console.log("Studenti con voti superiori a 70 e id superiore a 120:");
console.table(studentiVotiSuperiori70IdSuperiore120);
  
console.log("Nomi degli studenti in maiuscolo:");
console.log(nomiStudentiMaiuscolo);