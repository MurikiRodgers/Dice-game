/*first dice*/
var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;
var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src" ,randomImageSource);

/*second dice*/
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2= "\./images/dice" + randomNumber2 +".png";
var img2 =document.querySelectorAll("img")[1];
img2.setAttribute("src" ,randomImageSource2);

/*if player 1 wins*/
if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins";
}
/*if player 2 wins*/
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
