let gameContainer = document.querySelector('#game-container');

function invertColor(div){
    let green = "green-color";
    let red = "red-color";
    if(div.classList.contains(green)){
        div.classList.remove(green);
        div.classList.add(red);
    } else{
        div.classList.remove(red);
        div.classList.add(green);
    }
};
function checkVictory(divs){
    let = victoryStatus = true;
    // Si toutes les divs sont rouges, on a gagné
    for(let i = 0; i < divs.length; i++){
        if(divs[i].classList.contains('green-color')){
            victoryStatus = false;
            break;
        }
    }
    if(victoryStatus){
        setTimeout(function(){
            alert('Vous avez gagné'); 
        }, 500);  
    }
};

gameContainer.addEventListener('click', function(el){
    let childDivs = document.querySelectorAll('#game-container>div');
    let clickedElement = el.target;
    
    for(let i = 0; i < childDivs.length; i++){
        if(childDivs[i] == clickedElement){
            if(i > 0 && i < (childDivs.length - 1)){
                invertColor(childDivs[i + 1]);
                invertColor(childDivs[i - 1]);
            } else if(i == 0){
                invertColor(childDivs[i + 1]);
            } else if(i == (childDivs.length - 1)){
                invertColor(childDivs[i - 1]);
            }
        }
    }
    checkVictory(childDivs);
});