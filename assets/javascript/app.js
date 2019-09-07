//This code makes sure that the JavaScript doesn't get run until the HTML is finished loading 

//I declare 2 var to create counters:
var rightAnswer = 0;
var wrongAnswer = 0;

// Set a timer (1mn) which will starts when the page is loaded: 1000 * 60
//The $(document).ready() is a jQuery event which occurs when the HTML document has been fully loaded, while the window.onload event occurs later, when everything including images on the page loaded. Also window.onload is a pure javascript event in the DOM, while the $(document).ready() event is a method in jQuery.




// window.onload = setTimeout(timeUp, 1000 * 60);
// var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
// function timeUp() {
//     console.log("time is up");


// Our stopwatch object
// var stopwatch = {
//         time: 0,
//         lap: 1,
//         reset: function() {

//                 stopwatch.time = 0;



// Check the Data types Objects (similar to variables) to format the object to have questions and answers stored.




//NOT SURE OF THIS : If the player click the button true answer and the answer is true, it add a point to the right answer counter.


if (result === randomNumber) {
    wins++;

    else {
        losses++;



        /// Reset the game at the end:
        reset: function()



        /////////////////////////////////////////////////////////////////////////////////////////
        // $("#trueButton").on("click", function() {
        //     totalScore = randomValueR + (totalScore)
        //     $("#sumClicks").text(totalScore);
        //     console.log(randomValueR);
        //     console.log(totalScore);
        //     //Created 2 conditionals :
        //     if (totalScore === randomly) {
        //         console.log()
        //         incrementWins();
        //     }

        //     if (totalScore > randomly) {
        //         console.log()
        //         incrementLosses();
        //     }
        // });

        //     $("#blueButton").on("click", function() {
        //         totalScore = randomValueB + (totalScore)
        //         $("#sumClicks").text(totalScore);
        //         console.log(randomValueB);
        //         console.log(totalScore);
        //         if (totalScore === randomly) {
        //             console.log()
        //             incrementWins();
        //         }

        //         if (totalScore > randomly) {
        //             console.log()
        //             incrementLosses();
        //         }
        //     });

        //     function incrementWins() {
        //         wonScore++;
        //         // //Pointed this id in my html. This method will display points won and lossed:
        //         $("#win").text(wonScore);
        //         // Reset the total score:
        //         totalScore = 0;
        //         console.log(totalScore);
        //         $("#sumClicks").text(totalScore);
        //         randomly = Math.floor(Math.random() * 101) + 19
        //         $("#numberToReach").text(randomly);
        //     }

        //     function incrementLosses() {
        //         //This fonction to display the message You win! each time a point is won.
        //         alert("You lose!");
        //         lostScore++;
        //         // These methods will display points won and lossed:
        //         $("#lost").text(lostScore);
        //         // Reset the total score:
        //         totalScore = 0;
        //         $("#sumClicks").text(totalScore);
        //         randomly = Math.floor(Math.random() * 101) + 19
        //         $("#numberToReach").text(randomly);
        //     }

        // })