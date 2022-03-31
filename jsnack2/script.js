// JSnack 2
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


let div = document.querySelector('.app');
let emptyArray = [];
let userNumber='';
let index = 0;
while(index <= 5){
    userNumber = prompt('inserisci un numero')
    console.log(userNumber);
    index++
    if(userNumber % 2 !== 0){
        emptyArray.push(userNumber)
    } 
}
div.innerHTML += `<h1>Numeri dispari:${emptyArray}</h1>`;
