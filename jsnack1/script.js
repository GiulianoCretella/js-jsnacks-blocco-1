// JSnack 1
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo array con nomi invitati
// chiedo nome all'utente
// controllo che il suo nome sia presente nell'array

let partyGuest = [
    'Abdel',
    'Agostino',
    'Alessandra',
    'Alfonso',
    'Andrea',
    'Antonio',
    'Clelia',
    'Davide',
    'Dennis',
    'Domenico',
    'Elisa',
    'Ennio',
    'Fabrizio',
    'Federico',
    'Filippo',
    'Flavio',
    'Francesco',
    'Gabriel',
    'Giacomo',
    'Gianmarco',
    'Giulia',
    'Giuliano',
    'Giuseppe',
    'Greta',
    'Jae',
    'Leonardo',
    

];
let div = document.querySelector('.app');
let userName = prompt('Inserisci il tuo nome') ;
let messaggio;
let find = false

for(let i = 0; i < partyGuest.length; i++){
    
    if(userName === partyGuest[i]){
        find = true; 
    } 
    if(find){
        messaggio = ('Il tuo nome è presente nella lista')
    } else {
        messaggio = ('Il tuo nome non è presente nella lista') 
    };
}
div.append(messaggio);


