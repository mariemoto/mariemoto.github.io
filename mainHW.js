var myWords = {
    
    askFivequestions: function() {
     
var noun = prompt("Write noun");
document.getElementById("word1").innerHTML = noun;

var adjective1 = prompt("Write adjective(Positive)");
document.getElementById("word2").innerHTML = adjective1;

var adjective2 = prompt("Write adjective(Negative)");
document.getElementById("word3").innerHTML = adjective2;

var adjective3 = prompt("Write adjective(Nagative)");
document.getElementById("word4").innerHTML = adjective3;

var verb = prompt("Write verb");
document.getElementById("word5").innerHTML = verb;
        
document.getElementById("word1").style.fontFamily = "Helvetica";
document.getElementById("word1").style.color = "blue";
document.getElementById("word1").style.fontSize = "x-large";

        
 
        
     
 }
}




window.onload = function() {
    
var link = document.getElementById("put");
     link.onclick = function() {   
          myWords.askFivequestions();
        
var put = myWords.putFivewords();

document.getElementById("word").innerHTML = put;
    }
    
        
}

