/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
function contlett(stri) {
    return stri.match(/[aeiou]/gi)?.length || 0;
}

// Dichiara la funzione qui.
const word = 'javascript';

// Invoca la funzione qui e stampa il risultato in console
console.log(contlett(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)