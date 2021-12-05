let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToText(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";

}

function win(u_Choice, c_Choice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    // result_p.innerHTML = convertToText(u_Choice) + " beats " + convertToText(c_Choice) + ". You win ! ";
    result_p.innerHTML = `${convertToText(u_Choice)}  beats ${convertToText(c_Choice)} . You win ! `;
    document.getElementById(u_Choice).classList.add('green-glow');    
    // setTimeout(function(){ document.getElementById(u_Choice).classList.remove(('green-glow')) },300);
    setTimeout(() => document.getElementById(u_Choice).classList.remove(('green-glow')) ,300);
}

function lose(u_Choice, c_Choice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    // result_p.innerHTML = convertToText(c_Choice) + " loses to  " + convertToText(u_Choice) + ". You lose ! ";
    result_p.innerHTML = `${convertToText(u_Choice)}  loses to  ${convertToText(c_Choice)} . You lose ! `;
    document.getElementById(u_Choice).classList.add('red-glow');
    // setTimeout(function(){ document.getElementById(u_Choice).classList.remove(('red-glow')) },300);
    setTimeout(() => document.getElementById(u_Choice).classList.remove(('red-glow')) ,300);
}


function draw(u_Choice, c_Choice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    // result_p.innerHTML = convertToText(u_Choice) + " equal to " + convertToText(c_Choice) + ". It's a Draw ! ";
    result_p.innerHTML = `${convertToText(u_Choice)}  equal to ${convertToText(c_Choice)} . It's a Draw ! `;
    document.getElementById(u_Choice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(u_Choice).classList.remove(('gray-glow')) },300);
    setTimeout(() => document.getElementById(u_Choice).classList.remove(('gray-glow')) ,300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })

}
main();