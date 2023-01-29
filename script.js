'use strict';

const guessNumber = Math.floor(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click',()=>{
    //récupérer la valeur saisie
    const valueInputNumber = Number(document.querySelector('.guess').value);
    console.log('clic ' + valueInputNumber);

    //message d'erreur
    let messageError = document.querySelector('.message').textContent="Number is not betwwen 1 and 20!!!";

    if(valueInputNumber <1){
        messageError;
    }else if(valueInputNumber>20){
        messageError;
    }else if(!valueInputNumber){
        document.querySelector('.message').textContent="the value is not a Number!!!"
    }else{
        document.querySelector('.message').textContent ="start guessing...";
        if(valueInputNumber > guessNumber){
            document.querySelector('.message').textContent ="Your Number is Low";
        }else if(valueInputNumber < guessNumber){
            document.querySelector('.message').textContent ="Your Number is Less";
        }else{
            document.querySelector('.message').textContent ="greate, Wright Number!"; //message de comfirmation
            document.querySelector('.number').textContent = valueInputNumber; // afficher le nombre exact (le nombre récupéré de l'input)

        }
    }
})