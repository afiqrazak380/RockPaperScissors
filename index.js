const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  // const element = document.getElementById("myElement");
  // const text = element.textContent; // Retrieves the text content of the element
  
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent =`Computer: ${computer}`;
  // const element = document.getElementById("myElement");
  // element.textContent = "New content"; // Sets the text content of the element to "New content"

  resultText.textContent = checkWinner(); 
}));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3 ) + 1; //const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  switch(randNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "You Win!" : "You Lose!"; 
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "You Win!" : "You Lose!";
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "You Win!" : "You Lose!";
  }
}
