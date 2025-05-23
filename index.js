//Setting up key elements
const button = document.getElementById("play");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//List of minigame starter functions to be selected from
const minigames = [];

function loadScreen() {
    button.style.display = "block";
    canvas.style.display = "none";
}

function loadGame() {
    button.style.display = "none";
    canvas.style.display = "block";
    //Minigame starter function will be selected from minigames and called here
}

button.addEventListener("click", loadGame);

loadScreen(); //Start at the loading screen