'use strict';
// document.querySelector('.message');
// console.log(document.querySelecto('.message'));
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log (document.querySelector('.guess').value);
*/
// * Code for Event Listening
// * User input is always string
// * Whenever we want to manupilating style we have to specify a string


let secret = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess); 
    //when there is no input
    if(!guess){
        displayMessage('⛔ No Number!');
        // console.log(document.querySelector('.message').textContent);
    }
    // when player wins
    else if(guess===secret){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        // console.log(document.querySelector('.message').textContent);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secret;
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(guess!==secret){
        if(score>1){
            displayMessage(guess>secret?'Too High':'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('Yout lost the game!');
            document.querySelector('.score').textContent = 0;
        }        

    }
    // else if(guess>secret){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'Yout lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
    // else if(guess<secret){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'Yout lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     } 
    // }
    
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secret = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
