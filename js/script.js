var outputHtml = document.getElementById("result");
function odiosa (word) {

    var result = '';    
    var flag = true;      
    var reverseIndex = word.length;     
    var maxIndex = Math.floor(word.length / 2); 
    
    for ( var i = 0; i < maxIndex; i++) {
        reverseIndex -= 1
        if (word[i] !== word[reverseIndex]) {
            flag = false;
        }
    }
    
    if (flag) {
        result ='nome palindromo';
    } else {
        result='nome non palindromo'
    }
    return result;
}

var userWord = prompt("Inserisci una parola");

var risultato = odiosa(userWord);

outputHtml.innerHTML = risultato;






//-------------------------------------------------
function getRandonFrom1to5 () {
    var num = Math.floor(Math.random() * 5 + 1);
    return num;
}

function isSumPari (num1, num2) {
    var sum = num1 + num2;
    var pari = false
    
    if (sum % 2 === 0) {
        pari = true;
    } // else (dispari) e quindi pari resta false
    return pari  
}

var userPariOrDispari = prompt("Scegli fra pari o dispare, scrivendo 'pari' o 'dispari");
var userNum = parseInt(prompt("Inserisci un numero tra 1 e 5"));
result2 = '';

var pcNum = getRandonFrom1to5();

var sum = isSumPari( userNum, pcNum);

if ( (sum === true && userPariOrDispari === 'pari') || (sum === false && userPariOrDispari === 'dispari')) {
    result2= 'Bravo hai vinto contro il pc';
} else {
    result2 = 'Peccato hai perso contro il pc';
}

// mi serve per capire bene il debug
outputHtml.innerHTML += "<br/>Numero dell'utente è " + userNum + " <br/> Il numero del pc è " + pcNum +
                        "<br/> La loro somma è " + (userNum + pcNum) + "<br/>L'utente ha scommesso su " + userPariOrDispari;

outputHtml.innerHTML += '<br/>' + result2;














