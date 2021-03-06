


var playerName;
var amount; // hold player's balance amount
var bettingAmount;
var guess;
var dice; // hold computer generated number
var choice;

function clearMainScreen() {
  main.textContent = '';
}

function clearHeaderScreen() {
  header.textContent = '';
}

function startGame(){
  clearMainScreen();

  // while amount is higher than 0 play game
  // show current balance at all time
  // ask for betting amount
  

};

function displayRule() {
  header.textContent = 'CASINO GAME';

  main.textContent = 'Choose any number from 1 to 10. If you win you will get 10 times of money you bet. If you bet on wrong number you will lose your betting amount.';

  var startButton = document.createElement('input');
  startButton.type = "submit";
  startButton.value = "Start Game";
  main.appendChild(startButton);
  startButton.addEventListener('click', startGame);
};

function getUserName() {
  // input box for username
  var box = document.createElement('input');
  box.id = 'userName';
  // submit button to send username 
  var subButton = document.createElement('input');
  subButton.type = 'submit';
  // store name function
  function storeName(){
    var userName = document.getElementById('userName').value;
    console.log(userName);

    playerName = userName;
    console.log('playname: ' + playerName);
  }

  clearMainScreen();
  // Displays input boxes on the DOM
  main.appendChild(box);
  main.appendChild(subButton);

  subButton.addEventListener('click', storeName);
  subButton.addEventListener('click', getDepositAmount);

}

function getDepositAmount() {

  clearMainScreen();
  // Tells player to enter $$ amount
  header.textContent = 'Hi '+ playerName + '! Enter Deposit amount to play : $';
  var amount = document.createElement("input");
  amount.type = 'number';
  // Create input box
  var box = document.createElement('input');
  box.id = 'userName';
  box.type = 'number';
  // submit button to send username 
  var subButton = document.createElement('input');
  subButton.type = 'submit';
  function storeMoney(){
    var monies = document.getElementById('userName').value;
    console.log(monies);

    amount = monies;
    console.log('monies: ' + amount);
  }

  main.appendChild(box);
  main.appendChild(subButton);

  subButton.addEventListener('click', storeMoney);
  subButton.addEventListener('click', clearMainScreen);
  subButton.addEventListener('click', clearHeaderScreen);
  subButton.addEventListener('click', displayRule);

  
}

// Title of Game
const header = document.querySelector('header');

header.textContent = 'CASINO GAME';

const main = document.querySelector('main');

// Start Button

var startButton = document.createElement('input');
startButton.type = "submit";
startButton.value = "Start";
main.appendChild(startButton);
startButton.addEventListener('click', getUserName);



