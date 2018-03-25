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
            return(true);
        } else {
            return(false);
    }}
    
    //update htmll page whenevr player gets question correct
    function updateHTML(userInput){
        $(".col_2").html(userInput);
    }
    //updates robot when player gets html correct
    function updateInstructions(currentLevel){
        $("#text").text(levels[currentLevel].instructions);
        $("").attr("src",levels);
    }
    //updates page when player is incorrect
    function showError(){
        $(".col_2").html("<div class=\"alert alert-danger\" role=\"alert\">Your answer is incorrect! Try Again.</div>");
    }
    function clearContent(){
        $(".userInput").val('');
        $(".col_2").empty();
    }
    var currentLevel = 0;
    $("#next").hide();
    $("#submit").click(function(){
        var userInput = getInput();
        if(checkSolution(userInput, levels[currentLevel].correctAnswer)){
            updateHTML(userInput);
            currentLevel = currentLevel + 1;
            $("#next").show();
        } else {
            showError();
        }
    });
    $("#next").click(function(){
        updateInstructions(currentLevel);
        clearContent();
        $("#next").hide();
    });
     var levels=[
    {
        difficulty:"very easy",
        instructions:'Make header with "I Robot"',
        imageURL:"https://goo.gl/images/RxJCkw",
        correctAnswer:"<h1>I Robot</h1>"
    },
    {
        difficulty:"easy",
        instructions:'Make a div and inside a paragraph with "I Dragon"',
        imageURL:"https://goo.gl/images/RxJCkw ",
        correctAnswer:"<div><p>I Dragon</p></div>"
    }
    ];
});