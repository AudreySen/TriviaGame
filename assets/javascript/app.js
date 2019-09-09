//This code makes sure that the JavaScript doesn't get run until the HTML is finished loading 
// 1. A timer (1mn) starts when the page is loaded:
window.onload = function() {
    $("#lap").on("click", timer.recordLap);
    $("#stop").on("click", timer.stop);
    $("#reset").on("click", timer.reset);
    $("#start").on("click", timer.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var toto;

// prevents the clock from being sped up unnecessarily
var lili = false;

// Our stopwatch object
var stoptimer = {

    time: 0,
    lap: 1,

    reset: function() {

        timer.time = 0;
        timer.lap = 1;

        // DONE: Change the "display" div to "00:00."
        $("#display").text("00:00");

        // DONE: Empty the "laps" div.
        $("#laps").text("");
    },
    start: function() {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!lili) {
            lili = true;
            toto = setInterval(timer.count, 1000);

        }
    },
    stop: function() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(toto);
        lili = false;
    },
    recordLap: function() {

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var riri = timer.timeConverter(timer.time);

        // DONE: Add the current lap and time to the "laps" div.
        $("#laps").append("<p>Lap " + timer.lap + " : " + riri + "</p>");

        // DONE: Increment lap by 1. Remember, we can't use "this" here.
        timer.lap++;
    },
    count: function() {

        // DONE: increment time by 1, remember we cant use "this" here.
        timer.time++;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var riri = timer.timeConverter(timer.time);
        console.log(riri);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#display").text(riri);
    },
    timeConverter: function(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    //setTimeout(sixtySeconds, 1000 * 60);
    //add a setTimeOut function???
};


//2. The player read the questions and click on true or false for each questions.

//3. The answers are hidden from the screen (display none in my CSS).

//4. For each answer:    if the TRUE button is clicked and the answer is true, then it adds a point to the correct answers counter.
//                      if the TRUE button is clicked and the answer is false, then it adds a point to the uncorrect answers counter.

//                      if the FALSE button is clicked and the answer is false, it adds a point to the correct answers counter.
//                      if the FALSE button is clicked and the answer is true, then it adds a point to the uncorrect answers counter.

//5. The correct and uncorrect answers are added to the two counters.
//6. After 1 minute, the game ends: add a reset game.

//Declare variables to create counters:
var rightAnswer = 0;
var wrongAnswer = 0;

//Created variables:
var clickTrue = $("#trueButton").val();
var clickFalse = $("#falseButton").val();

//jQuery to set my true and false answers counters:
$("#trueButton").on("click", function() {
    rightAnswer = clickTrue + (rightAnswer);
    $("#totalCorrectAnswers").text(rightAnswer);
    console.log(totalCorrectAnswers);

    //Created conditionals:
    if (clickTrue === ".true") {
        console.log()
        rightAnswer++;
    }
    if (clickTrue === ".false") {
        console.log()
        wrongAnswer++;
    }
});
//jQuery to set my true and false answers counters:
$("#falseButton").on("click", function() {
    wrongAnswer = clickFalse + (wrongAnswer);
    $("#totalUncorrectAnswers").text(wrongAnswer);
    console.log(totalUncorrectAnswers);

    //Created conditionals :
    if (clickFalse === ".false") {
        console.log()
        rightAnswer++;
    }
    if (clickFalse === ".true") {
        console.log()
        wrongAnswer++;
    }
    reset: function startTimer();
});

//!!!!!!!! REVIEW THIS IT'S NOT CORRECT EITHER !!!!! Pointed this id in my html. This method will display Total of correct and uncorrect answers:
$("#totalCorrectAnswers").text(totalCorrectAnswers);
$("#totalUncorrectAnswers").text(totalCorrectAnswers);

};


/// Reset the game at the end:

/////////////////////////////////////////////////////////////////////////////////////////
// Stopwatch object:
// var stopwatch = {
//         time: 0,
//         lap: 1,
//         reset: function() {

//                 stopwatch.time = 0;

// Check the Data types Objects (similar to variables) to format the object to have questions and answers stored. 

});