//This code makes sure that the JavaScript doesn't get run until the HTML is finished loading 
$(document).ready(function() {

            //I declare 2 var to create counters:
            var rightAnswer = 0;
            var wrongAnswer = 0;

            // 1. A timer (1mn) which will starts when the page is loaded: 1000 * 60
            window.onload = setTimeout(timeUp, 1000 * 60);
            var timeoutID = scope.setTimeout(function [, delay, param1, param2, ...]);

            function timeUp() {
                console.log("time is up");

                //2. The player read the questions and click on true or false for each questions.

                //3. The answers are hidden from the screen (display none in my CSS).

                //4. For each answer:    if the TRUE button is clicked and the answer is true, then it adds a point to the correct answers counter.
                //                      if the TRUE button is clicked and the answer is false, then it adds a point to the uncorrect answers counter.

                //                      if the FALSE button is clicked and the answer is false, it adds a point to the correct answers counter.
                //                      if the FALSE button is clicked and the answer is true, then it adds a point to the uncorrect answers counter.

                //5. The correct and uncorrect answers are adde to the two counters.
                //6. After 1 minute, the game ends: add a reset game.

                //Created my variables:
                var clickTrue = $("#trueButton").val();
                var clickFalse = $("#falseButton").val();



                $("#trueButton").on("click", function() {
                            totalCorrectAnswers = randomValueR + (totalScore)
                            $("#sumClicks").text(totalScore);
                            console.log(randomValueR);
                            console.log(totalScore);

                            //Created conditionals :
                            if (result === randomNumber) {
                                wins++;

                                else {
                                    losses++;

                                    if (time < 10) {
                                        greeting = "Good morning";
                                    } else if (time < 20) {
                                        greeting = "Good day";
                                    } else {
                                        greeting = "Good evening";
                                    }



                                    wonScore++;
                                    // //Pointed this id in my html. This method will display points won and lossed:
                                    $("#win").text(wonScore);
                                    /// Reset the game at the end:
                                    reset: function()



                                    /////////////////////////////////////////////////////////////////////////////////////////
                                    // Our stopwatch object
                                    // var stopwatch = {
                                    //         time: 0,
                                    //         lap: 1,
                                    //         reset: function() {

                                    //                 stopwatch.time = 0;

                                    // Check the Data types Objects (similar to variables) to format the object to have questions and answers stored. 

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