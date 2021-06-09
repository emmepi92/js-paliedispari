var outputHtml = document.getElementById("result");
var halfWordLenght = 0;

var userWord = prompt("Inserisci una parola");


halfWordLenght = Math.floor(userWord.length / 2);  // nuova lunghezza delle due parole da confrontare

var firstWord = userWord.slice(0,halfWordLenght); // prima parola dall'inizio alla metà
var secondWord = userWord.slice(halfWordLenght);// seconda parola dalla meta fino alla fine

if (userWord.length % 2 === 1) {          // se la parola inserita è di lung dispari, eliminiamo il carattere centrale dalla seconda parola
    secondWord = userWord.slice(halfWordLenght +1);    
}

var spazio = ' ';
var result = '';

outputHtml.innerHTML = userWord + spazio + halfWordLenght + spazio + firstWord + spazio + secondWord;

var flag = false;

for ( var x = 0, y = (halfWordLenght -1); x < halfWordLenght, y >= 0 ; x++, y--) {
    if (firstWord[x] === secondWord[y]) {
        flag = true
    }    
}

if (flag) {
    result = 'nome palindromo';
} else {
    result= 'nome non palindromo'
}

outputHtml.innerHTML +='<br/>' + result;


