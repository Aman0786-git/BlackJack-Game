let cards= [] //card array
let sum = 0;
let hasBlackJack = false ; 
let isAlive = false ;
let message = "" ;
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={
    name : "User",
    chips : 145 
}

let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) +1 ;
    if(randomCard===1){
        return 1;
    }
    else if(randomCard >10 )
    {
        return 10;
    }
    else
    return randomCard;
}

function startGame(){
    isAlive= true
    let firstCard =  getRandomCard();
    let secondCard = getRandomCard();
    cards= [firstCard,secondCard] ;
    sum = firstCard+ secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: " ;
    for(let i =0 ;i<cards.length ;i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum <=20){
        message = "Do you want to draw a new card? 🙂";
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true ;
    }
    else{
        message = "You're out of the game! 😓";
        isAlive = false 
    }
    messageEl.textContent = message ;
    sumEl.textContent = "Sum: " + sum ;
   
}
function newCard(){
    if(isAlive!= false && hasBlackJack===false){

        let card= getRandomCard() ;
        sum+=card;
        cards.push(card)
        console.log(cards)
        renderGame(); 
    }
}
