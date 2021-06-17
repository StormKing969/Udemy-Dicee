let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let sourceImg1 = "images/" + "dice" + randomNumber1 + ".png";
let sourceImg2 = "images/" + "dice" + randomNumber2 + ".png";

let player1 = document.querySelectorAll("img")[0].setAttribute("src", sourceImg1);
let player2 = document.querySelectorAll("img")[1].setAttribute("src", sourceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}