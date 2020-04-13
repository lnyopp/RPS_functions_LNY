

let userScore = 0;
let computerScore = 0;

// You can store dom elements in a variable using _element to differenciate normal vs dom variables.
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
let scoreBoardUser_id = document.querySelector(".score-board > #user-label");
let scoreBoardComputer_id = document.querySelector(".score-board > #computer-label");
const result_p1 = document.querySelector('.result > #p1');
const result_p2 =document.querySelector('.result > #p2');
const result_p3 =document.querySelector('.result > #p3');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// setting up all variables before you consider logic can help when you are coding. 

// setting up these dom elements in variables is called caching the dom. 
// this is a convientent and efficient way to write your javascript code. 

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random()* 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innterHTML = computerScore;

  //ES6
  result_p1.innerHTML = `Your Choice: ${convertToWord(userChoice)}` 
  result_p2.innerHTML = `Computer Choice: ${convertToWord(computerChoice)}`
  result_p3.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!!`
  scoreBoardUser_id.style.backgroundColor = 'green';
  scoreBoardComputer_id.style.backgroundColor = '#E2584D';
};

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    userScore_span.innterHTML = userScore;
    
  
    //ES6
    result_p1.innerHTML = `Your Choice: ${convertToWord(userChoice)}` 
    result_p2.innerHTML = `Computer Choice: ${convertToWord(computerChoice)}`
    result_p3.innerHTML = ` ${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You Loose.`

    scoreBoardUser_id.style.backgroundColor = '#E2584D';
    scoreBoardComputer_id.style.backgroundColor = 'green';
};

function draw(userChoice, computerChoice){
  
    //ES6
    result_p1.innerHTML = `You Picked: ${convertToWord(userChoice)}`
    result_p2.innerHTML = `Computer Picked: ${convertToWord(computerChoice)}`
    result_p3.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`;

    scoreBoardUser_id.style.backgroundColor = '#E2584D';
    scoreBoardComputer_id.style.backgroundColor = '#E2584D';
};


function game(userChoice){
    const computerChoice = getComputerChoice();   

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;

        case 'ps':
        case 'sr':
        case 'rp':
            lose(userChoice, computerChoice);
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
};

function main() {
rock_div.addEventListener('click',function(){
    game('r');
})

paper_div.addEventListener('click',function(){
    game('p');
})

scissors_div.addEventListener('click',function(){
    game('s');
})

}

main();
