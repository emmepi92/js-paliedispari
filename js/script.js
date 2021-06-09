var outputHtml = document.getElementById("result");

//come complicarsi la vita inutilmente
//almeno di funzionare, funzia
function odiosa(word) { 
    //funzione odiosa che stabilisce se una parola o numero è palindromo
    //decido di esaminare la parola a coppie, primo carattere con l'ultimo,
    //secondo con penultimo, e cosi via

    var result = '';   

    //imposto il flag a true, che diventa false se la coppia di caratteri non sono uguali
    var flag = true;
    
    //creo una variabile per l'indice da decrementare per il secondo elemento della coppia
    //parto dalla lunghezza della parola e decremento nel for
    var reverseIndex = word.length;     

    //trovo la meta della lunghezza della parola, che corrisponde al numero delle coppie da confrontare
    //uso math.floor per eliminare il il carattere singolo centrale se la stringa è dispari
    var maxIndex = Math.floor(word.length / 2); 
    
    for ( var i = 0; i < maxIndex; i++) {
        reverseIndex -= 1
        if (word[i] !== word[reverseIndex]) { 
            flag = false; //flag=false solo se trova una coppia non uguale
        }
    }    
    return flag;
}

// con aiuto di Davide
function isPalindrome(name) {
    var nameInverted = '';
    var result = false;
    for (x = name.length-1; x >= 0; x--) {
        nameInverted += name[x];
    }

    if (name === nameInverted) {
        result =true;
    }
    return result;
}



var userWord = prompt("Inserisci una parola");

var risultato = odiosa(userWord); // cambia con isPalindrome

if (risultato) {
    result ='nome palindromo';
} else {
    result ='nome non palindromo';
}

outputHtml.innerHTML = 'Il nome inserito è '+ userWord + '<br/>' + result + '<br/> <br/> <br/>';




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

var userBet = prompt("Scegli fra pari o dispari, scrivendo 'pari' o 'dispari'");
while (userBet !== 'pari' && userBet!=='dispari'){
    alert('Scegli fra pari o dispari');
    userBet = prompt("Scegli fra pari o dispari, scrivendo 'pari' o 'dispari'");
}

var userNum = parseInt(prompt("Inserisci un numero tra 1 e 5"));
while (isNaN(userNum) || userNum === 0 || userNum >=5) {
    alert("Inserisci un numero fra 1 e 5");
    userNum = parseInt(prompt("Inserisci un numero tra 1 e 5"));
}
result2 = '';

var pcNum = getRandonFrom1to5();

var sum = isSumPari( userNum, pcNum);

if ( (sum === true && userBet === 'pari') || (sum === false && userBet === 'dispari')) {
    result2= 'Bravo hai vinto contro il pc';
} else {
    result2 = 'Peccato hai perso contro il pc';
}

// mi serve per capire bene il debug
outputHtml.innerHTML += "<br/>Numero dell'utente è " + userNum + " <br/> Il numero del pc è " + pcNum +
                        "<br/> La loro somma è " + (userNum + pcNum) + "<br/>L'utente ha scommesso su " + userBet;



outputHtml.innerHTML += '<br/>' + result2;














