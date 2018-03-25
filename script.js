/* global $ */

$(document).ready(function(){
    //gets user input and returns a string
    function getInput(){
        var myString = $(".userInput").val();
        console.log(myString);
    }
    
    $("#submit").click(function(){
        console.log("button is clicked");
         console.log(getInput());
    });
    
    //check if user is right  and return booleans
    function checkSolution(userInput, correctAnswer){
        if(userInput===correctAnswer) {
            return(true)
        } else {
            return(false)
    }}
    
    //update htmll page whenevr player gets question correct
    function updateHTML(){
        
    }
    //updates robot when player gets html correct
    function updateRobot(){
        
    }
    //updates page when player is incorrect
    function showError(){
        
    }
});