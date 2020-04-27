//Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// generare 16 numeri casuali:
var arrayRandom =[];

for (var i = 0; i < 16 ; i++) {
    //numero tra 1 e 100
    arrayRandom.push(Math.floor(Math.random()*100)+1);
    var listaMine = arrayRandom[i]
    console.log('Numero random '+ i + ': ' + listaMine);
}

var next = true ; //altrimenti sarà un loop

do {
    var userNumber = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    if (listaMine.includes(userNumber)) {
        //se il numero inserito dall'utente è presente nell'array la partita è finita
        next = false;
    }
    else {
        console.log('Inserisci un altro numero');
    }
} while (next);
