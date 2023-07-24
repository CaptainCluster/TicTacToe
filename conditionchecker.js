/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/

import {thereAreEmptyBoxes } from "./index.js";

const parentDiv = document.getElementById("gameBoard");

function conditionChecker(){
    victoryConditionChecker();
    tieConditionChecker();
}

function victoryConditionChecker(){
    //If one of these conditions is met, the game is over and there is a winner
    const horizontalResults = horizontalConditionChecker();
    const verticalResults = verticalConditionChecker();
    const otherResults = otherConditionChecker();
    if(horizontalResults[0]){
        processVictory(horizontalResults[1]);
    } else if(verticalResults[0]){
        processVictory(verticalResults[1]);
    } else if(otherResults[0]){
        processVictory(otherResults[1]);
    }
}

function tieConditionChecker(){
    if(!thereAreEmptyBoxes()){
        processTie();
    }
}

function horizontalConditionChecker(){
    let winWinner = [false, ""];
    for(let i = 0; i < 9; i+=3){
        if(
        parentDiv.children[i].textContent == "X" && 
        parentDiv.children[i+1].textContent == "X" && 
        parentDiv.children[i+2].textContent == "X"){
            winWinner = [true, "player"];
        } 
        else if(
        parentDiv.children[i].textContent == "O" && 
        parentDiv.children[i+1].textContent == "O" && 
        parentDiv.children[i+2].textContent == "O"){
            winWinner = [true, "opponent"];
        }
    }
    return winWinner;
}

function verticalConditionChecker(){
    let winWinner = [false, ""];
    for(let i = 0; i < 3; i++){
        if(
        parentDiv.children[i].textContent == "X" && 
        parentDiv.children[i+3].textContent == "X" && 
        parentDiv.children[i+6].textContent == "X"){
            winWinner = [true, "player"];
        } 
        else if(
        parentDiv.children[i].textContent == "O" && 
        parentDiv.children[i+3].textContent == "O" && 
        parentDiv.children[i+6].textContent == "O"){
            winWinner = [true, "opponent"];
        }
    }
    return winWinner;
}

function otherConditionChecker(){
    //There are two other possibilities, thus we will handle
    //them here.
    let winWinner = [false, ""];
    if(
    parentDiv.children[0].textContent == "X" &&
    parentDiv.children[4].textContent == "X" &&
    parentDiv.children[8].textContent == "X"){
        winWinner = [true, "player"];
    } else if(
    parentDiv.children[0].textContent == "O" &&
    parentDiv.children[4].textContent == "O" &&
    parentDiv.children[8].textContent == "O"
    ){
        winWinner = [true, "opponent"];
    } else if(
    parentDiv.children[2].textContent == "X" &&
    parentDiv.children[4].textContent == "X" &&
    parentDiv.children[6].textContent == "X"){
        winWinner = [true, "player"];
    }
    else if(
    parentDiv.children[2].textContent == "O" &&
    parentDiv.children[4].textContent == "O" &&
    parentDiv.children[6].textContent == "O"){
        winWinner = [true, "opponent"];
    }
    return winWinner;
}

function processVictory(winner){
    //The parameter we get is the winner in a string.
    const endResultElement = document.getElementById("endResult");
    endResultElement.textContent = "Winner: " + winner;
}

function processTie(){
    const endResultElement = document.getElementById("endResult");
    endResultElement.textContent = "The game ends in a tie!";
}

export {conditionChecker}