let board = [];



function play(clickedId){
    let playerSpan =document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText ='O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    }else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

let topLeft= board[0];
let topCenter= board[1];    
let topRight= board[2];
let middleLeft= board[3];
let middleCenter= board[4];
let middleRight= board[5];
let bottomLeft= board[6];
let bottomCenter= board[7];    
let bottomRight= board[8];


}