var randomNumber1 = Math.ceil(Math.random()*6);
// console.log(randomNumber1);

var randomNumber2 = Math.ceil(Math.random()*6);
// console.log(randomNumber2);

var randomDiceImages1 = "images/dice" + randomNumber1+ ".png";
var randomDiceImages2 = "images/dice" + randomNumber2+ ".png";

if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").textContent="Player 1 Wins!";
}
else if( randomNumber1<randomNumber2){

  document.querySelector(".container h1").textContent="Player 2 wins!";
}
else{
  document.querySelector(".container h1").textContent="Draw!";
}

document.querySelector(".img1").setAttribute("src", randomDiceImages1);
document.querySelector(".img2").setAttribute("src", randomDiceImages2);
