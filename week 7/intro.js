

var name = prompt("What is your name?");
document.getElementById("xholder").innerHTML = name;

var birthday = prompt("When is your birthday? (mm/dd/yy)");
document.getElementById("xholder2").innerHTML = birthday;

var color = prompt("What is your favorite color?");

document.getElementById("xholder").style.fontFamily = "Helvetica";
document.getElementById("xholder2").style.fontFamily = "Helvetica";
document.getElementById("xholder3").style.fontFamily = "Helvetica";

document.getElementById("xholder").style.fontSize = "x-large";
document.getElementById("xholder2").style.fontSize = "x-large";
document.getElementById("xholder3").style.fontSize = "x-large";
    
document.getElementById("xholder3").innerHTML = color;


document.getElementById("xholder3").style.color = color;
xholder.style.color = color;
xholder2.style.color = color;





