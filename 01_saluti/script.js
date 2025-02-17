/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
function saluta(nome) {
    return `Ciao ${nome}`;
}

// Dichiara la funzione qui.
const userName = 'Mario';

// Invoca la funzione qui e stampa il risultato in console
console.log(saluta(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
