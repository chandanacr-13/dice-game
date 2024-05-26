var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesSrc = "images/" + randomDiceImage;
// Select the left <img> element (assuming it has the class "img1")
var leftImageElement = document.querySelector(".img1");
leftImageElement.setAttribute("src",randomImagesSrc);



var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImagesSrc2 = "images/" + randomDiceImage2;
// Select the right <img> element (assuming it has the class "img2")
var rightImageElement = document.querySelector(".img2");
rightImageElement.setAttribute("src",randomImagesSrc2);


var headingElement = document.querySelector("h1");

if(randomNumber1>randomNumber2){
    headingElement.textContent = "player1 wins!!!";   
}
else if(randomNumber1<randomNumber2){
    headingElement.textContent = "player2 wins!!";
}
else{
    headingElement.textContent = "its a drawww";
}





