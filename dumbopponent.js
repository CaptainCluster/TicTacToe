/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/

/*
This file contains a weaker opponent algorithm that works
differently and has flaws the player can exploit. 
*/

import { opponentMove, thereAreEmptyBoxes,} from "./index.js";

const parentDiv = document.getElementById("gameBoard");

function opponentAlgorithm(){
    //If the player doesn't initially choose the box in the center, the 
    //opponent will choose it due to it being the ideal choice.
    if(parentDiv.children[4].textContent == ""){
        opponentMove(4);
    } else{
        //We don't want to end up in undesirable situations, thus we make
        //sure there are available boxes before the opponent proceeds to
        //choose the one it considers ideal.
        if(thereAreEmptyBoxes()){
            //Then the opponent finds a good box to fill to prevent player
            //victory.
            opponentAnalyzeProcess();
        }
    }
}

function opponentAnalyzeProcess(){
    //Here the opponent looks for an appropriate move to secure victory
    //or to prevent the player from winning. It first tries to find a move
    //that guarantees victory, and proceeds to stop the player from winning
    //if it does not find a good "offensive" move.
    if(!opponentAnalyzeOwnHorizontal()){
        if(!opponentAnalyzeOwnVertical()){
            if(!opponentAnalyzeOwnOther()){
                if(!opponentAnalyzePlayerHorizontal()){
                    if(!opponentAnalyzePlayerVertical()){
                        if(!opponentAnalyzePlayerOther()){
                            while(true){
                                //If all else fails, the opponent will choose a random box
                                //which can then be exploited by the player.
                                const randomNumber = Math.floor(Math.random() * 9);
                                if(parentDiv.children[randomNumber].textContent == ""){
                                    opponentMove(randomNumber);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Next up the opponent analyzes a bunch of patterns that can either lead
//to victory or defeat. The opponent will make its move based on an 
//if-condition that has an applying condition.
function opponentAnalyzeOwnHorizontal(){
    for(let i = 0; i < 6; i+=3){
        if(parentDiv.children[i].textContent == "O" &&
        parentDiv.children[i+1].textContent == "O"){
            if(parentDiv.children[i+2].textContent == ""){
                opponentMove(i+2);
                return true;
            }
        } else if( parentDiv.children[i+1].textContent == "O" &&
        parentDiv.children[i+2].textContent == "O"){
            if(parentDiv.children[i].textContent == ""){
                opponentMove(i);
                return true;
            }
        } else if(parentDiv.children[i].textContent == "O" &&
        parentDiv.children[i+2].textContent == "O"){
            if(parentDiv.children[i+1].textContent == ""){
                opponentMove(i+1);
                return true;
            }
        }
    }
    return false;
}

function opponentAnalyzeOwnVertical(){
    for(let i = 0; i < 3; i++){
        if(parentDiv.children[i].textContent == "O" &&
        parentDiv.children[i+3].textContent == "O"){
            if(parentDiv.children[i+6].textContent == ""){
                opponentMove(i+6);
                return true;
            }
        } else if( parentDiv.children[i+3].textContent == "O" &&
        parentDiv.children[i+6].textContent == "O"){
            if(parentDiv.children[i].textContent == ""){
                opponentMove(i);
                return true;
            }
        } else if(parentDiv.children[i].textContent == "O" &&
        parentDiv.children[i+6].textContent == "O"){
            if(parentDiv.children[i+3].textContent == ""){
                opponentMove(i+3);
                return true;
            }
        }
    }
    return false;
}

function opponentAnalyzeOwnOther(){
    if(parentDiv.children[0].textContent == "O" &&
    parentDiv.children[4].textContent == "O"){
        if(parentDiv.children[8].textContent == ""){
            opponentMove(8);
            return true;
        }
    } else if(parentDiv.children[4].textContent == "O" &&
    parentDiv.children[8].textContent == "O"){
        if(parentDiv.children[0].textContent == ""){
            opponentMove(0);
            return true;
        }
    } else if(parentDiv.children[2].textContent == "O" &&
    parentDiv.children[4].textContent == "O"){
        if(parentDiv.children[6].textContent == ""){
            opponentMove(6);
            return true;
        }
    } else if(parentDiv.children[4].textContent == "O" &&
    parentDiv.children[6].textContent == "O"){
        if(parentDiv.children[2].textContent == ""){
            opponentMove(2);
            return true;
        }
    } 
    return false;
}

function opponentAnalyzePlayerHorizontal(){
    for(let i = 0; i < 9; i+=3){
        if(parentDiv.children[i].textContent == "X" &&
        parentDiv.children[i+1].textContent == "X"){
            if(parentDiv.children[i+2].textContent == ""){
                opponentMove(i+2);
                return true;
            }
        } else if( parentDiv.children[i+1].textContent == "X" &&
        parentDiv.children[i+2].textContent == "X"){
            if(parentDiv.children[i].textContent == ""){
                opponentMove(i);
                return true;
            }
        } else if(parentDiv.children[i].textContent == "X" &&
        parentDiv.children[i+2].textContent == "X"){
            if(parentDiv.children[i+1].textContent == ""){
                opponentMove(i+1);
                return true;
            }
        }
    }
    return false;
}

function opponentAnalyzePlayerVertical(){
    for(let i = 0; i < 3; i++){
        if(parentDiv.children[i].textContent == "X" &&
        parentDiv.children[i+3].textContent == "X"){
            if(parentDiv.children[i+6].textContent == ""){
                opponentMove(i+6);
                return true;
            }
        } else if( parentDiv.children[i+3].textContent == "X" &&
        parentDiv.children[i+6].textContent == "X"){
            if(parentDiv.children[i].textContent == ""){
                opponentMove(i);
                return true;
            }
        } else if(parentDiv.children[i].textContent == "X" &&
        parentDiv.children[i+6].textContent == "X"){
            if(parentDiv.children[i+3].textContent == ""){
                opponentMove(i+3);
                return true;
            }
        }
    }
    return false;
}

function opponentAnalyzePlayerOther(){
    if(parentDiv.children[0].textContent == "X" &&
    parentDiv.children[4].textContent == "X"){
        if(parentDiv.children[8].textContent == ""){
            opponentMove(8);
            return true;
        }
    } else if(parentDiv.children[4].textContent == "X" &&
    parentDiv.children[8].textContent == "X"){
        if(parentDiv.children[0].textContent == ""){
            opponentMove(0);
            return true;
        }
    } else if(parentDiv.children[2].textContent == "X" &&
    parentDiv.children[4].textContent == "X"){
        if(parentDiv.children[6].textContent == ""){
            opponentMove(6);
            return true;
        }
    } else if(parentDiv.children[4].textContent == "X" &&
    parentDiv.children[6].textContent == "X"){
        if(parentDiv.children[2].textContent == ""){
            opponentMove(2);
            return true;
        }
    } 
    return false;
}

export {opponentAlgorithm}