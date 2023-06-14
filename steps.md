# LISTA OSPITI

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[...]
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

# Steps #1

1. Definiamo la variabile **tavolo** con la stringa "Tavolo Vip".
2. Definiamo un Array **invitati** con i nomi degli invitati.
3. Utilizziamo il metodo map per creare un nuovo Array **listaOspiti**.
4. Dentro la funzione di callback di map, per ogni elemento **ospite** e **indice** eseguiamo i seguenti passaggi:
    1. Aumentiamo l'indice degli elementi in una costante **posto**.
    2. Restituiamo un nuovo Array contenente 10 oggetti le seguenti proprietà: **tavolo**, **ospite** e **posto**.


# LISTA STUDENTI

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);


# Steps #2

0. Creiamo un Array di Oggetti, dove ognuno di essi avrà proprietà: **id**, **name** e **grades**
1. Usiamo il metodo **filter** per gli studenti con voto superiore a 70 salvandoli nell'Array **studentiVotiSuperiori70**.
2. Usiamo il metodo **filter** per gli studenti con voti superiori a 70 e id superiore a 120 salvandoli nell'Array **studentiVotiSuperiori70IdSuperiore120**.
3. Crea un array **nomiStudentiMaiuscolo** utilizzando il metodo map per salvare il nome degli studenti in maiuscolo.


# LISTA BICI
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring.

# Steps #3

0. Creiamo un Array di bici, dove ognuna di esse avrà proprietà: **name** e **weight**.
1. Dichiariamo una variabile **lowerWeightBike** che ha come valore il primo indice dell'Array di bici.
2. Generiamo un ciclo For che confronta il peso di ogni bici e riassegna alla variabile dichiarata prima l'oggetto con la proprietà peso più bassa;
3. Stampiamo in console l'oggetto con peso più basso.

# LISTA SQUADRE
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

# Steps #4
0. Creiamo un Array di squadre, dove ognuna avrà proprietà: **nome**, **punti fatti** e **falli subiti**, dove le ultime due saranno settate a 0.
1. Usiamo un forEach che genera i valori per le proprietà punti fatti e falli subiti attraverso Math.random.
2. Attraverso il metodo .map() generiamo un Array con i nuovi valori generati dall'operazione precedente.