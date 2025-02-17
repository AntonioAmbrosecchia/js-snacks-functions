/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
function letterFilter(namesArr, letter) {
    return namesArr.filter(name => name.charAt(0).toUpperCase() === letter.toUpperCase());
}

// Dichiara la funzione qui.
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Invoca la funzione qui e stampa il risultato in console
console.log(letterFilter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]