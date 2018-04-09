let button = document.querySelector('#button');
let childDivs = document.querySelectorAll('#game-container>div');
let gameContainer = document.querySelector('#game-container');
let pseudo;
let green = "green-color";
let red = "red-color";
let score = 0;

function invertColor(div){

    if(div.classList.contains(green)){
        div.classList.remove(green);
        div.classList.add(red);
    } else{
        div.classList.remove(red);
        div.classList.add(green);
    }
};
function checkVictory(divs){
    let victoryStatus = true;
    for(let i = 0; i < divs.length; i++){
        if(divs[i].classList.contains('green-color')){
            victoryStatus = false;
            break;
        }
    }
    if(victoryStatus){
        setTimeout(function(){
            alert('Vous avez gagné');
            refresh();
        }, 500);
    }
};
function CheckGameOver(divs){
    let gameOverStatus = true;
    if (score >= 10){
        gameOverStatus = true;
    }
    else {
        for(let i = 0; i < divs.length; i++){
            if(divs[i].classList.contains('red-color')){
                gameOverStatus = false;
                break;
            }
        }
    }
    if(gameOverStatus){
        setTimeout(function(){
            alert('Vous avez perdu');
            refresh();
        }, 500);
    }
};
function restart(div){
    if(div.classList.contains(red)){
        div.classList.remove(red);
        div.classList.add(green);
    }
};
function refresh(){
    setTimeout(function(){
        for(let i = 0; i < childDivs.length; i++){
            restart(childDivs[i]);
            score = 0;
            document.getElementById('score').innerHTML = score;
        }
    }, 500);
};

document.getElementById('score').innerHTML = score;

gameContainer.addEventListener('click', function(el){
    let clickedElement = el.target;
    
    for(let i = 0; i < childDivs.length; i++){
        if(childDivs[i] == clickedElement){
            if(i > 0 && i < (childDivs.length - 1)){
                invertColor(childDivs[i + 1]);
                invertColor(childDivs[i - 1]);
                invertColor(childDivs[i]);
            } else if(i == 0){
                invertColor(childDivs[i + 1]);
                invertColor(childDivs[i]);
            } else if(i == (childDivs.length - 1)){
                invertColor(childDivs[i - 1]);
                invertColor(childDivs[i]);
            }
        }
    }
    score++;
    document.getElementById('score').innerHTML = score;
    CheckGameOver(childDivs);
    checkVictory(childDivs);
});

button.addEventListener('click', function(){
    for(let i = 0; i < childDivs.length; i++){
        restart(childDivs[i]);
        score = 0;
        document.getElementById('score').innerHTML = score;
    }
});
