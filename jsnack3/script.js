// JSnack 3
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
let div = document.querySelector('.app');
let userNumber = prompt('Inserisci un numero di 4 cifre');
console.log(userNumber);

let userArray = userNumber.split("");
console.log(userArray);

let somma = 0;
let risultato= '';
for(let i = 0; i < userArray.length; i++){
     somma += parseInt(userArray[i])
     console.log(somma);
}
div.append(somma);
