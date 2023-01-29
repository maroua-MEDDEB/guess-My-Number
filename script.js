'use strict';

let guessNumber = Math.floor(Math.random()*20)+1;
let score = 20; //notre score initial

document.querySelector('.check').addEventListener('click',()=>{

    //récupérer la valeur saisie
    const valueInputNumber = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = valueInputNumber; // afficher le nombre exact (le nombre récupéré de l'input)

    console.log('clic ' + valueInputNumber);

    //message d'erreur
    let messageError = document.querySelector('.message').textContent="Number is not betwwen 1 and 20!!!";

    if(valueInputNumber <1){
        messageError;
        document.querySelector('.number').textContent = '?'; // afficher le nombre exact (le nombre récupéré de l'input)
      
    }else if(valueInputNumber>20){
        messageError;
       

    }else if(!valueInputNumber){
        document.querySelector('.message').textContent="the value is not a Number!!!";
        document.querySelector('.number').textContent = '?'; // afficher le nombre exact (le nombre récupéré de l'input)


    }else{
        document.querySelector('.message').textContent ="start guessing...";
        
        if(valueInputNumber > guessNumber){
            document.querySelector('.message').textContent ="Your Number is Low";
            score--;
            document.querySelector('.score').textContent= score--;
            if(score<0){
                document.querySelector('.score').textContent= "0";
                document.querySelector('.message').textContent= "Sorry, you Lost!";
            }
             }else if(valueInputNumber < guessNumber){
            document.querySelector('.message').textContent ="Your Number is Less";
            score--;
            document.querySelector('.score').textContent= score--;
            if(score<0){
                document.querySelector('.score').textContent= "0";
                document.querySelector('.message').textContent= "Sorry, you Lost!";
            }
        }else{
            document.querySelector('.message').textContent ="greate, Wright Number!"; //message de comfirmation
            document.querySelector('.number').textContent = valueInputNumber; // afficher le nombre exact (le nombre récupéré de l'input)
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.score').textContent='20';
            document.querySelector('body').style.backgroundColor='green';

        }
    }
})