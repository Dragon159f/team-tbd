/* global $ */

$(document).ready(function(){
    //gets user input and returns a string
    var levels=[
    {
        difficulty:"very easy",
        instructions:'Make header with "I Robot"',
        imageURL:"https://i.pinimg.com/236x/24/04/b7/2404b7680fe382595126e74f5707b5c3--robot-clipart-ha-ha.jpg",
        correctAnswer:"<h1>I Robot</h1>"
    },
    {
        difficulty:"easy",
        instructions:'Make a div and inside a paragraph with "I Dragon"',
        imageURL:"http://www.getcoloringpages.com/images/99/995mh79.gif",
        correctAnswer:"<div><p>I Dragon</p></div>"
    },
    {
        difficulty:"easy",
        instructions:'Make a header with "I Dog" and an unordered list with "Brown" and "Happy" as list items.',
        imageURL:"https://julieulstrup.files.wordpress.com/2010/08/happy-dog-in-the-snow2009-10-29-0143.jpg",
        correctAnswer:"<h1>I Dog</h1><ul><li>Brown</li><li>Happy</li><ul>"
    },
    {
        difficulty:"easy",
        instructions:'Make me a button that say "I" and then create an input box.',
        imageURL:"http://www.excel-easy.com/vba/examples/images/inputbox-function/inputbox-function-example-1.png",
        correctAnswer:"<button>I</button><input>"
    },
    {
        difficulty:"easy",
        instructions:'Create a div with class "row". Inside the div make 6 divs with "col-sm-2". In the first div put I, the next put a space, the next put a "w", the next put an "o", the next put a "n", and last put an "s".',
        imageURL:"http://www.excel-easy.com/vba/examples/images/inputbox-function/inputbox-function-example-1.png",
        correctAnswer:'<div class="row"><div class="col-sm-2">I</div><div class="col-sm-2"> </div><div class="col-sm-2">W</div><div class="col-sm-2">o</div><div class="col-sm-2">n</div><div class="col-sm-2">s</div></div>'
    },
    ];
    var currentLevel = 0;
    updateInstructions(currentLevel);
    $("#next").hide();
    $("#submit").click(function(){
        var userInput = getInput();
        if(checkSolution(userInput, levels[currentLevel].correctAnswer)){
            updateHTML(userInput);
            currentLevel = currentLevel + 1;
            $("body").append('<img src="http://gph.is/2dcEEy2">')
            $("#next").show();
            updateProgressbar(currentLevel, levels.length);
        } else {
            showError();
        }
    });
    $("#next").click(function(){
        updateInstructions(currentLevel);
        clearContent();
        $("#next").hide();
    });
    function getInput(){
        var myString = $(".userInput").val();
        console.log(myString);
        return myString;
    }
    
    
    //check if user is right  and return booleans
    function checkSolution(userInput, correctAnswer){
        if(userInput.replace(/ /g,'').replace(/\n/g,'')===correctAnswer.replace(/ /g,'').replace(/\n/g,'')) {
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
        $("#instructions").text(levels[currentLevel].instructions);
        $("#robotImage").attr("src",levels[currentLevel].imageURL);
    }
    //updates page when player is incorrect
    function showError(){
        $(".col_2").html("<div class=\"alert alert-danger\" role=\"alert\">Your answer is incorrect! Try Again.</div>");
    }
    function clearContent(){
        $(".userInput").val('');
        $(".col_2").empty();
    }

    function updateProgressbar(currentLevel, numLevels){
        var progressPercent = currentLevel/numLevels
        progressPercent = progressPercent * 100
        console.log("run");
        $(".progress-bar").css("width", progressPercent+"%");
    }
});