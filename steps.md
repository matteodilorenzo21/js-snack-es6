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