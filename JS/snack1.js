// JS LINK RUN CHECK
console.log('SNACK #1');

// Definiamo la variabile tavolo
const tavolo = "Tavolo Vip";

// Definiamo la lista degli invitati
const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Usiamo il metodo map per creare un nuovo Array
const listaOspiti = invitati.map((ospite, indice) => {
  const posto = indice + 1;
  return { tavolo, ospite, posto };
});

console.log(listaOspiti);