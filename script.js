/* global $ */

$(document).ready(function(){
    //gets user input and returns a string
    function getInput(){
        var myString = $(".userInput").val();
        return myString;
    }
    
    //check if user is right  and return booleans
    function checkSolution(userInput, correctAnswer){
        if(userInput===correctAnswer) {
            return(true)
        } else {
            return(false)
    }}
    
    //update htmll page whenevr player gets question correct
    function updateHTML(userInput){
        $(".col_2").html(userInput);
    }
    //updates robot when player gets html correct
    function updateRobot(){
        
    }
    //updates page when player is incorrect
    function showError(){
        $(".col_2").html("<h1>You have an error!</h1>");
    }

    $("#submit").click(function(){
        var userInput = getInput();
        if(checkSolution(userInput, "anything") === true){
            console.log("correct");
        } else {
            console.log("false");
        }
    });
    
});