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








