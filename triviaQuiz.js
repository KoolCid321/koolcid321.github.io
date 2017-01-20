i = 1 
            answerDelay = 200;
            checkAnswerDelay = answerDelay + 100;
            totalNumberOfQuestion = 10;
            numberOfCorrectAnswers = 0;

            function main() { 
    
                if (i == 1) {
                   
                    document.view.qnum.value = i; 
                    document.view.question.value = "What movie contained a dangerous animal? \na) Jaws \nb) Marley and Me\nc) Harry Potter ";

                    correct = "a" 

                   setTimeout( pop, answerDelay);               

                } 
                else if (i == 2) {
                    document.view.qnum.value = i; 
                    document.view.question.value = "What is award given to movies?\na) Medal\nb) Oscar\nc) Nobel Prize ";
                    

                    correct = "b" 
                    setTimeout( pop, answerDelay);                

                } 
                else if (i == 3) {
                    document.view.qnum.value = i;
                    document.view.question.value = "What movie did the character Sarah Conner play in?  \na) Mission:Impossible \nb) Austin Powers \nc) Terminator ";
                    correct = "c"
                    setTimeout( pop, answerDelay);
                 
                } else if (i == 4) {
                    document.view.qnum.value = i;
                    document.view.question.value = "What movie is Agent Smith from? \na) Men in Black \nb) The Matrix \nc) Lethal Weapon ";
                    correct = "b"
                    setTimeout( pop, answerDelay);
                  
                } else if (i == 5) {
                    document.view.qnum.value = i;
                    document.view.question.value = "What actor played ghost rider? \na) Nicholas Cage \nb) Quincy Adams \nc) Morgan Freeman ";
                    correct = "a"
					setTimeout( pop, answerDelay);
                    
                   
                } else if (i == 6) {
					document.view.qnum.value =  i;
					document.view.question.value = "Who played jack in the Titanic ? \na) Adam Sandler \nb) Nigel Hawthorne  \nc) Leonardo DiCaprio ";
					correct = "c"
					setTimeout( pop, answerDelay);
				}  else if (i == 7) {
					document.view.qnum.value =  i;
					document.view.question.value = "What movie does not envolve space? \na) Star Trek \nb)Lord of the Rings  \nc)Interstellar  ";
					correct = "b"
					setTimeout (  pop , answerDelay);
				} else if (i == 8) {
					document.view.qnum.value = i;
					document.view.question.value = "Who has never playe James Bond? \na)Harrison Ford  \nb)Sean Connery \nc)Daniel Craig ";
					correct = "a"
					setTimeout ( pop , answerDelay);
				} else if (i == 9) {
					document.view.qnum.value = i;
					document.view.question.value = "What superhero movie envolved a bat like figure? \na) ManBat \nb) BatMan \nc) Bat the man ";
					correct = "b"
					setTimeout ( pop , answerDelay);
				} else if (i == 10) {
					document.view.qnum.value = i;
					document.view.question.value = "What movie did not contain any cartoon character? \na) Home Alone \nb) The Iron Giant \nc) Space Jam ";
					correct = "a"
					setTimeout ( pop , answerDelay);
				} else if (i == 11) {
					correctAnswers()
				}
				
																											
        
                 setTimeout( checkAnswer, checkAnswerDelay);

            } 

            function pop() {

                ans = prompt(i + '.)    ENTER LETTER >>   a,   b,   c, ') 

            }

            function checkAnswer() {

               
               console.log("checkAnswer untion called");

                if (correct == ans) { 

                    document.view.question.value = " You are right!" 
                    numberOfCorrectAnswers++;

                } else {
                    document.view.question.value = " You are wrong" 
                }

                i++; 
                calulatePercent();

            }

            function calulatePercent() {

               percentage = numberOfCorrectAnswers / totalNumberOfQuestion * 100;

              console.log("your percentage is: " + percentage + "%");
			}
			
			function correctAnswers() {
				
			if (numberOfCorrectAnswers >= 8) {
				alert("Congratulations, you've passed this quiz and are now a coding genius!")
			}
			else {
				alert("Sorry you did not score high enough to pass.try again!")
			}
			}