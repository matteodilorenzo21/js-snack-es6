// JS LINK RUN CHECK
console.log('SNACK #4');

// Dichiariamo l'Array delle squadre
const footballTeams = [
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lecce',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

// Usiamo un forEach che genera i valori per le proprietà dell' Array
footballTeams.forEach((team) => {
    team.puntiFatti = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    team.falliSubiti = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
});

// Generiamo un nuovo Array con i valori generati
const teamData = footballTeams.map(({ nome, puntiFatti,falliSubiti }) => ({ nome, puntiFatti,falliSubiti }));


console.table(teamData);