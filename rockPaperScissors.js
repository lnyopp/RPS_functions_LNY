var handsArray = ["Rock", "Paper", "Scissors"];

playerOneWins = 0; // variable to store wins for player 1
playerTwoWins = 0; // variable to store wins for player 2

function getHand(player1, player2) {


    while (playerOneWins < 5 && playerTwoWins < 5) {

        var player1 = handsArray[parseInt(Math.random() * 10) % 3];  // generates a random choice of rock paper or scissors.
        var player2 = handsArray[parseInt(Math.random() * 10) % 3]; // generates a random choice of rock paper or scissors.

        console.log("player 1: " + player1)
        console.log("Player 2: " + player2)
        // console.log("Player 2: " + playerTwoWins)
        // console.log("Player 1: " + playerOneWins)


        function compare() {
            if (player1 === player2) {
                return ("It's a tie!");
            } else if (player1 === handsArray[0, 1, 2] && player2 === handsArray[2, 0, 1]) {
                playerOneWins++;
                console.log("Player 1 wins!!");
                return ("Player 1 has won: " + playerOneWins + " times");
            } else {
                playerTwoWins++;
                console.log("Player 2 wins this round!!");
                return ("Player 2 has won: " + playerTwoWins + " times");
            };
        };
        console.log(compare());
    };
};

getHand();


