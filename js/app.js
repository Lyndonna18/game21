
// all querys
const gamePlay = document.querySelector('.gamePlay');
const startPage = document.querySelector('.startPage');
const rulesPage = document.querySelector('.rulesPage')
const startButton= document.querySelector('#start');
const hitButton= document.querySelector('#hit');
const stayButton= document.querySelector('#stay');
const resetButton= document.querySelector('#reset');
const rulesButton = document.querySelector('#rules');
const backToGameButton = document.querySelector('#backToGame');


//scoreboard consts
const cpuScoreDisplay = document.querySelector(`#cpuScore`)
const userScoreDisplay = document.querySelector(`#userScore`)

// function startGamePage() {
//     rulesButton.addEventListener("click", () => {
//         gamePlay.style.display = 'none';
//     })
// }

// object.onload = startGamePage();

//card object for randomization
let back ={
    deckPhoto: {link:"../media/card_images/deckPhoto.png", num:0}
}
let cards ={
    twoClubs: {link:"../media/card_images/2_of_clubs.png", num:2,},
    twoDiamonds: {link:"../media/card_images/2_of_diamonds.png", num:2,},
    twoHearts: {link:"../media/card_images/2_of_hearts.png", num:2,},
    twoSpades:{link:"../media/card_images/2_of_spades.png", num:2,},
    
    threeClubs: {link:"../media/card_images/3_of_clubs.png", num:3},
    threeDiamonds: {link:"../media/card_images/3_of_diamonds.png", num:3},
    threeHearts: {link:"../media/card_images/3_of_hearts.png", num:3},
    threeSpades:{link:"../media/card_images/3_of_spades.png", num:3},

    fourClubs: {link:"../media/card_images/4_of_clubs.png", num:4},
    fourDiamonds: {link:"../media/card_images/4_of_diamonds.png", num:4},
    fourHearts: {link:"../media/card_images/4_of_hearts.png", num:4},
    fourSpades:{link:"../media/card_images/4_of_spades.png", num:4},

    fiveClubs: {link:"../media/card_images/5_of_clubs.png", num:5},
    fiveDiamonds: {link:"../media/card_images/5_of_diamonds.png", num:5},
    fiveHearts: {link:"../media/card_images/5_of_hearts.png", num:5},
    fiveSpades:{link:"../media/card_images/5_of_spades.png", num:5},

    sixClubs: {link:"../media/card_images/6_of_clubs.png", num:6},
    sixDiamonds: {link:"../media/card_images/6_of_diamonds.png", num:6},
    sixHearts: {link:"../media/card_images/6_of_hearts.png", num:6},
    sixSpades:{link:"../media/card_images/6_of_spades.png", num:6},
    
    sevenClubs: {link:"../media/card_images/7_of_clubs.png", num:7},
    sevenDiamonds:{link:"../media/card_images/7_of_diamonds.png", num:7},
    sevenHearts: {link:"../media/card_images/7_of_hearts.png", num:7},
    sevenSpades:{link:"../media/card_images/7_of_spades.png", num:7},

    eightClubs: {link:"../media/card_images/8_of_clubs.png", num:8},
    eightDiamonds: {link:"../media/card_images/8_of_diamonds.png", num:8},
    eightHearts: {link:"../media/card_images/8_of_hearts.png", num:8},
    eightSpades:{link:"../media/card_images/8_of_spades.png", num:8},

    nineClubs: {link:"../media/card_images/9_of_clubs.png", num:9},
    nineDiamonds: {link:"../media/card_images/9_of_diamonds.png", num:9},
    nineHearts: {link:"../media/card_images/9_of_hearts.png", num:9},
    nineSpades:{link:"../media/card_images/9_of_spades.png", num:9},

    tenClubs: {link:"../media/card_images/10_of_clubs.png", num:10},
    tenDiamonds: {link:"../media/card_images/10_of_diamonds.png", num:10},
    tenHearts: {link:"../media/card_images/10_of_hearts.png", num:10},
    nineSpades:{link:"../media/card_images/10_of_spades.png", num:10},
    
    aceClubs: {link:"../media/card_images/ace_of_clubs.png", num:11},
    aceDiamonds: {link:"../media/card_images/ace_of_diamonds.png", num:11},
    aceHearts: {link:"../media/card_images/ace_of_hearts.png", num:11},
    aceSpades:{link:"../media/card_images/ace_of_spades.png", num:11},

    jackClubs: {link:"../media/card_images/jack_of_clubs.png", num:11},
    jackDiamonds: {link:"../media/card_images/jack_of_diamonds.png", num:11},
    jackHearts: {link:"../media/card_images/jack_of_hearts.png", num:11},
    jackSpades:{link:"../media/card_images/jack_of_spades.png", num:11},
    
    queenClubs: {link:"../media/card_images/queen_of_clubs.png", num:11},
    queenDiamonds: {link:"../media/card_images/queen_of_diamonds.png", num:11},
    queenHearts: {link:"../media/card_images/queen_of_hearts.png", num:11},
    queenSpades:{link:"../media/card_images/queen_of_spades.png", num:11},

    kingClubs: {link:"../media/card_images/king_of_clubs.png", num:11},
    kingDiamonds: {link:"../media/card_images/king_of_diamonds.png", num:11},
    kingHearts: {link:"../media/card_images/king_of_hearts.png", num:11},
    kingSpades:{link:"../media/card_images/king_of_spades.png", num:11},
    
}

// functions to pull images from the object
const firstCard= document.querySelector("#firstCard");
firstCard.setAttribute("src", `${back.deckPhoto.link}`);
// console.log(firstCard);
// console.log(firstCard.twoClubs);

const secondCard= document.querySelector("#secondCard");
secondCard.setAttribute("src", `${back.deckPhoto.link}`);

const thirdCard= document.querySelector("#thirdCard");
thirdCard.setAttribute("src", `${back.deckPhoto.link}`);

const fourthCard= document.querySelector("#fourthCard");
fourthCard.setAttribute("src", `${back.deckPhoto.link}`);


 const keys= Object.keys(cards)

let playerPoints =0;
let compPoints = 0;

// Event Listeners
startButton.addEventListener("click", () => {
    //get the keys 
    //choose a random num from key array 
    let randomCardsKeys= Object.keys(cards)[Math.floor(Math.random() * keys.length)];
    // console.log(randomCardsKeys);
    
    //get the cards divs, set those elements to be the pic chosen from random, add the num to the scores
    const firstCard= document.querySelector("#firstCard");
    firstCard.setAttribute("src", `${back["deckPhoto"].link}`);
    
    const secondCard= document.querySelector("#secondCard");
    secondCard.setAttribute("src", `${cards[randomCardsKeys].link}`);
    compPoints += cards[randomCardsKeys].num;
    
     randomCardsKeys= Object.keys(cards)[Math.floor(Math.random() * keys.length)];
    //  console.log("debug: " + cards[randomCardsKeys].num)

    const thirdCard= document.querySelector("#thirdCard");
    thirdCard.setAttribute("src", `${cards[randomCardsKeys].link}`);
    playerPoints += cards[randomCardsKeys].num;
     randomCardsKeys= Object.keys(cards)[Math.floor(Math.random() * keys.length)];
    //  console.log("debug: " + cards[randomCardsKeys].num)

    const fourthCard= document.querySelector("#fourthCard");
    fourthCard.setAttribute("src", `${cards[randomCardsKeys].link}`);
    playerPoints += cards[randomCardsKeys].num;
    // console.log("debug: " + cards[randomCardsKeys].num)

    //get the two point divs and set those divs innerHTML to be "Score: " + points
    cpuScoreDisplay.innerHTML = "CPU SCORE: " + compPoints;
    userScoreDisplay.innerHTML = "YOUR SCORE: " + playerPoints;

    // console.log("Start button working")
    hitButton.removeAttribute("class");
    // console.log(hitButton)
    hitButton.setAttribute("class" , "show");

    if(playerPoints>21){
        alert("you lose!");
        // gamePlay.style.display = 'none';
        // rulesPage.style.display = 'none';
        // startPage.style.display = 'none';
        // const newH1 = document.createElement('h1');``
        // const newMessage = document.createTextNode("Player you lose!");                                                
        // newH1.appendChild(newMessage)
        // const
    }
});


hitButton.addEventListener("click", () =>{
    //make new img variable  
    let newPic = document.createElement("img");

    //get random card from object
    let randomCardsKeys= Object.keys(cards)[Math.floor(Math.random() * keys.length)];
    console.log(randomCardsKeys);

    //set it to the new img 
    newPic.setAttribute("src", `${cards[randomCardsKeys].link}`);
    newPic.setAttribute("class", "cardSize");
    
    //get the parent div 
    const playerCards = document.getElementById("playerCardsSec");
    playerCards.appendChild(newPic)
    playerPoints += cards[randomCardsKeys].num;
    userScoreDisplay.innerHTML = "YOUR SCORE: " + playerPoints;
    // console.log("Hit button working")

    // set up alert if userScore exceeds 21
    if(playerPoints>21){
        alert("you lose!");
        
    }});

stayButton.addEventListener("click", () =>{
    //first card should flip to random card 
    console.log("Stay button works")
    let randomCardsKeys= Object.keys(cards)[Math.floor(Math.random() * keys.length)];
    const firstCard= document.querySelector("#firstCard");
    firstCard.setAttribute("src", `${cards[randomCardsKeys].link}`);
    
    //add score to total score 
    compPoints += cards[randomCardsKeys].num;
    cpuScoreDisplay.innerHTML = "CPU SCORE: " + compPoints;

    //set up an alert that says who wins  
    
    if(chooseWinner()){
        alert("winner!");
    }else{
        alert("you lose!");
    }
    console.log("Stay button working")
});

//return true if player won return false if  cop won
function chooseWinner(){
    //
    if(compPoints> 21){
        return true
    }else if(playerPoints>21){
        return false;
    }

    
    let compDiff = 21- compPoints
    let personDiff = 21- playerPoints 

    if(compDiff < personDiff){
        return false
    }
    else {return true;}
    };

rulesButton.addEventListener("click", () => {
    gamePlay.style.display = 'none';
})
backToGameButton.addEventListener("click", () => {
    gamePlay.removeAttribute("style", "display:none;")
})  

