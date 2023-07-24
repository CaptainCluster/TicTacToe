/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/

/*
parentDiv is a global function to allow easy access
This will be used in multiple functions
*/
import { opponentAlgorithm } from "./dumbopponent.js";
import { conditionChecker } from "./conditionchecker.js";

const parentDiv = document.getElementById("gameBoard");

if(document.readyState !== "loading") {
    mainFunction();
} else {
    document.addEventListener("DOMContentLoaded", function () {
    mainFunction();
    });
}

function mainFunction(){
    //Event listener allows us to interact with all the options in the
    //3x3 box of TicTacToe.
    for(let i = 0; i < parentDiv.childElementCount; i++){
        parentDiv.children[i].addEventListener("click", function(){
            if(parentDiv.children[i].textContent == ""){
                //We want to check if the criteria for victory are met
                //by checking after every SINGLE move.
                playerMove(i, parentDiv);
                conditionChecker();
                opponentAlgorithm();
                conditionChecker();
            }
        });
    }
}

function playerMove(i, parentDiv){
    parentDiv.children[i].textContent = "X";
}

function opponentMove(i){
    parentDiv.children[i].textContent = "O";
}

function thereAreEmptyBoxes(){
    //This function makes sure there are boxes remaining that haven't been chosen.
    let status = false;
    //We go through each of the boxes individually and returning true, if a single
    //empty box is found.
    for(let i = 0; i < parentDiv.childElementCount; i++){
        if(parentDiv.children[i].textContent == ""){
            status = true;
            break;
        }
    }
    return status;
}

export {opponentMove, thereAreEmptyBoxes}