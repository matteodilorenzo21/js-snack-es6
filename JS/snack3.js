// JS LINK RUN CHECK
console.log('SNACK #3');

// Dichiariamo l'Array Bikes
const bikes = [
    {
        name: 'Atala',
        weight: 10.4,
    },
    {
        name: 'Bianchi',
        weight: 11.2,
    },
    {
        name: 'Carrera',
        weight: 8.7,
    },
    {
        name: 'Piaggio',
        weight: 9.5,
    },
    {
        name: 'Lombardo',
        weight: 9.8,
    },
    {
        name: 'Torpado',
        weight: 10,
    },
    {
        name: 'Ducati',
        weight: 9.2,
    },
    {
        name: 'Graziella',
        weight: 7.5,
    },
    {
        name: 'Olympia',
        weight: 8.8,
    },
    {
        name: 'Fantic',
        weight: 10.7,
    },
]

console.log(bikes);

// Dichiariamo una variabile che ha come valore il primo indice dell'Array
let lowerWeightBike = bikes[0];

// Generiamo un ciclo For che confronta i pesi
for (let i = 1; i < bikes.length; i++) {
    const currentBike = bikes[i];
    if (currentBike.weight < lowerWeightBike.weight) {
        lowerWeightBike = currentBike;
    }
}

// Stampiamo l'oggetto in console
console.log(lowerWeightBike);