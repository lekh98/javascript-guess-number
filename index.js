let randomNumber= parseInt(Math.random() *100+1);

const submit = document.querySelector('#subt');
const inputNumber = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');


const p =document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame =true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess =parseInt(inputNumber.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else if(guess<1){
        alert('please Enter the number greater than 1')
    }
    else if(guess>100){
        alert('please Enter the number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }

    }
}


function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`yeah you guess the right number`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TooLow`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess){
    inputNumber.value='';
    guessSlot.innerHTML +=  `${guess}  `;
    numGuess++;
    remaining.innerHTML =`${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    inputNumber.value='';
    inputNumber.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();


}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() *100+1);
        prevGuess =[];
        newGuess =1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - newGuess} `
        inputNumber.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });

}