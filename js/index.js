console.log("hello eugene")

let choices = ["rock", "paper", "scissors"];

function computerSelection(){
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function decideWinner(player,computer){

    if(player===choices[0]){
        if(computer===choices[2]){
            return "player";
        }else if(computer===choices[1]){
            return "computer";
        }else{
            return "draw";
        }
    }else if(player===choices[1]){
        if(computer===choices[0]){
            return "player";
        }else if(computer===choices[2]){
            return "computer";
        }else{
            return "draw";
        }
    }else if(player===choices[2]){
        if(computer===choices[1]){
            return "player";
        }else if(computer===choices[0]){
            return "computer";
        }else{
            return "draw";
        }
    }else{
        return "invalid input"
    }
}

function validateForm() {
    
    event.preventDefault(); 

    var selectedChoice = document.querySelector('input[name="player_choice"]:checked');

    if (!selectedChoice) {
        console.log("Please select a choice before submitting.");
        return false; 
    }

    var playerChoice = selectedChoice.value;
    var computerChoice = computerSelection();

    console.log("Selected choice: " + playerChoice);
    console.log("This is the computer's choice: " + computerChoice);

    var winner = decideWinner(playerChoice, computerChoice);

    console.log("The winner is: " + winner);

    var result = document.getElementById("result");

    result.innerHTML = "";

    if(winner==="player"){
        result.innerHTML = "You win!";

    }else if(winner==="computer"){
        result.innerHTML = "You lose!";

    }else{
        result.innerHTML = "It's a draw!";

    }

    return true; 
}

