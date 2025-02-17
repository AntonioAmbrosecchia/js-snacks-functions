/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
function prendiIniziali(namesArr) {
    return namesArr.map(name => name.charAt(0).toUpperCase());
}


// Dichiara la funzione qui.
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Invoca la funzione qui e stampa il risultato in console
console.log(prendiIniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]