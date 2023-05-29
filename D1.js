/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Stringa "" '' `
Numerico 1 2 3 4
Booleano true false
null 
undefined

Immaginiamo di essere proprietari di una fattoria con vari animali.
Abbiamo i piccioni che vivono dentro un  recinto  con una rete che li tiene li per non farli scappare. La rete sarà indicata  con dei simboli chiamati APICI "" '' `. 
Le galline invece a loro volta vivono a terra, libere di scorazzare. Sono simili ai piccioni perchè sono di una particolare
razza che li rende caratteristici per le loro sfumatore nere e grigie e la piccola stazza. Hanno le ali ma purtroppo non volano. 
Quindi in questo caso non hanno bisogno di una rete e quindi niente apici.
Nulla esclude che a volte le galline trovano il modo di entrare nel recinto dei piccioni per rubacchiare il loro cibo.
Quando questo succede per capire chi è piccione e chi è gallina possiamo ad esempio testare la loro capacità di poter volare o meno. 
Lo stalliere chiamato "Booleano" saprà fare la distinzione prendendoli uno ad uno e dicendo se la loro capacità di volare è True oppure False.
Le galline possono entrare dai piccioni ma non viceversa. Infatti quando i piccioni selvaggi vengono a far compagnia alle nostre galline non riusciamo a distinguerli. 
In un angoletto remoto della fattoria ci sono delle gabbie coperte da un telo nero chiamate undefined dove vanno a rifugiarsi gli animali che passano da li. 
Sappiamo che vengono utilizzate per quel motivo li ma non che tipo di animali che vi si nascondono .
Infine dietro il fienile, abbiamo un caseggiato vuoto, lo abbiamo chiamato null e può servire per ospitare qualcuno ma al momento è vuoto. 
*/

/*ESERCIZIO 2 */
let myName = 'vincenzo'
console.log("il mio nome è",myName)


//  Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12
let n2 = 20
let n3 = n1 + n2 
console.log ("il totale è",n3)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let valoreX = "x"
valoreX = 12
console.log("Il valore di x è", valoreX)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "cicero"
console.log("il mio cognome è", myName)

// const mySurname = "cicero"
// mySurname = "geremy"
// console.log(mySurname)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottraggo = valoreX - 4
console.log(sottraggo)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)

// name2 = "john"
// console.log(name1 === name2)
/* non ho capito l'extra.....*/
