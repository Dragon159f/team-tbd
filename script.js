/* global $ */

$(document).ready(function(){
    //gets user input and returns a string
    var levels=[
    {
        difficulty:"very easy",
        instructions:'Make header with "I Robot"',
        imageURL:"https://vignette.wikia.nocookie.net/goosebumps/images/d/dc/Robot.gif/revision/latest?cb=20170123203114",
        correctAnswer:"<h1>I Robot</h1>"
    },
    {
        difficulty:"easy",
        instructions:'Make a div and inside a paragraph with "I Dragon"',
        imageURL:"https://media1.tenor.com/images/f7b7545a3aff92df4e86816bf6deeadd/tenor.gif?itemid=5342788",
        correctAnswer:"<div><p>I Dragon</p></div>"
    },
    {
        difficulty:"pretty easy",
        instructions:'Make a header with "I Dog" and an unordered list with "Brown" and "Happy" as list items.',
        imageURL:"https://thumbs.gfycat.com/DaringSimilarLabradorretriever-max-1mb.gif",
        correctAnswer:"<h1>I Dog</h1><ul><li>Brown</li><li>Happy</li></ul>"
    },
    {
        difficulty:"simple",
        instructions:'Make me a button that say "I" and then create an input box.',
        imageURL:"http://www.sridharkatakam.com/wp-content/uploads/2014/01/clear-search-form.gif",
        correctAnswer:"<button>I</button><input>"
    },
    {
        difficulty:"average",
        instructions:'Create a div with class "row". Inside the div make 6 divs with "col-sm-2". In the first div put I, the next put a space, the next put a "w", the next put an "o", the next put a "n", and last put an "z".',
        imageURL:"https://media.giphy.com/media/1GTZA4flUzQI0/giphy.gif",
        correctAnswer:'<div class="row"><div class="col-sm-2">I</div><div class="col-sm-2"> </div><div class="col-sm-2">W</div><div class="col-sm-2">o</div><div class="col-sm-2">n</div><div class="col-sm-2">z</div></div>'
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
            $("#confettiImage").fadeIn(1000);
            $("#next").fadeIn(2000);
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
        $("#confettiImage").hide();
    }

    function updateProgressbar(currentLevel, numLevels){
        var progressPercent = currentLevel/numLevels
        progressPercent = progressPercent * 100
        console.log("run");
        $(".progress-bar").css("width", progressPercent+"%");
        $(".progress-bar").html(progressPercent+"%");
    }
});