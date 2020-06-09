const X_Symbol = 'X';
const O_Symbol = 'O';
let check = false;
var X_array = [];
var O_array = []; 
let elements =[ ...document.getElementsByClassName('item')];
const container = document.querySelector('.container');
const winnerEle = document.querySelector('.winner');
const playAgain = document.querySelector('.play');
const drawEle = document.querySelector('.draw');
//playAgain.addEventListener('click', repeat);
//console.log(elements);
const WINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
//const ele = elements.addEventListener('click', clickEvent, {once:true});
// function winnerX (X_array) {
//     if (findWinner(X_array)) {
//         //console.log('X Wins !');
//         return ;
//     }
    
// }
// function winnerO (O_array) {
//     if (findWinner(O_array)) {
//         console.log('O Wins !');
//         return ;
//     }
    
// }
// var winnerX;
function findWinner(array) {
    
    WINNER.forEach((ele) => {
        let count = 0;
        for (let i =0; i < ele.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (ele[i] === array[j] && count < 3) {
                    count++;
                }
                if (count >  2 ) {
                    console.log('winner');
                    container.classList.add('hide');
                    winnerEle.classList.remove('hide');
                    return;
                }
                if (count > 3) {
                    console.log('winner');
                    container.classList.add('hide');
                    drawEle.classList.remove('hide');
                    return;
                }
                if (array.length>4) {
                    console.log('winner');
                    container.classList.add('hide');
                    drawEle.classList.remove('hide');
                    return;
                }
            }
            
        }
    })
};
    
function compareRes(current) {
    if(check) {
        current.innerText = O_Symbol;
        let item = elements.indexOf(current);
        O_array.push(item);
        //winner(item);
        //console.log(O_array);
    }
    else {
        current.innerText = X_Symbol;
        let item = elements.indexOf(current);
        X_array.push(item);
        //winner();
        
    }
    check = !check;
};

const clickEvent = () => {
    
    let current = event.target;
    compareRes(current);
    findWinner(X_array);
    findWinner(O_array);
    console.log(findWinner(X_array));
    //console.log(compareRes(current));
    // if (findWinner(X_array)) {
    //     console.log('X Wins');
    // };
    
    //console.log(X_array);
    //console.log(O_array);
    //console.log(O_array);
    
}


function playGame() {
    
    elements.forEach(ele => {
        //ele.innerText = '';
        //console.log(ele);
        ele.removeEventListener('click', clickEvent);
        ele.addEventListener('click', clickEvent, {once:true});
        
     });
    
}




playGame();

// function repeat() {
//     winnerEle.classList.add('hide');
//     container.classList.remove('hide');
//     playGame();
// }
// repeat();
// //console.log(X_array);

