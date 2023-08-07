'use strict';

//valeur aléatoir du score demandé qui doit être entre 1 et 20
let score_guess = Math.floor(Math.random()*20)+1;
console.log(score_guess);

// sélectionner les éléments
const btn_again = document.querySelector('.again');
const btn_check = document.querySelector('.check');
let input_number = document.querySelector('.guess');
let text_guess = document.querySelector('.message');
let score = 20;
console.log(score);
// let highScore = document.querySelector('.label-highscore').textContent="0";
const numberGuess = document.querySelector('.number');
numberGuess.textContent="?";

// const btn_again = document.querySelector('again');


//évennements du btn check
btn_check.addEventListener('click', () => { 
   //afficher la valeur de l'input
    input_number = Number(document.querySelector('.guess').value);
    if(!input_number){
        text_guess.textContent ="no a number!";
    } 
         //quand le joueur gagne
     else if(input_number === score_guess ){ 
        text_guess.textContent="correct Number!";
        numberGuess.textContent = score_guess;
        document.querySelector('body').style.backgroundColor='#60b347';
        numberGuess.style.width='30rem';
    } else if(input_number > score_guess ){
        if(score>1){
            text_guess.textContent ="your number is bigger";
            // désincrémentation à chaque fois n'est pas le nbr souhaité
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            text_guess.textContent="you lost the game!"
            document.querySelector('.score').textContent=0;
        }
       
    } else if (input_number < score_guess){
        if(score>1){
            text_guess.textContent ="your number is smaller";
            // désincrémentation à chaque fois n'est pas le nbr souhaité
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            text_guess.textContent="you lost the game!"
            document.querySelector('.score').textContent=0;
        } 
    }
});

btn_again.addEventListener('click',()=>{
    score_guess = Math.floor(Math.random()*20)+1;
    score=20;
    document.querySelector('.guess').value='';

    const numberGuess = document.querySelector('.number');
    numberGuess.textContent="?";
    
    text_guess.textContent="Start guessing...";

    document.querySelector('.score').textContent=score;

    document.querySelector('body').style.backgroundColor='#222';
    numberGuess.style.width='15rem';
});