# Quiz App README

## Question Data:

-   There is an array called `questions`, which contains objects.
-   Each object represents a question and has a `question` property (the actual question) and an `answers` property (an array of answer options).

## HTML Elements:

-   The script interacts with HTML elements using their classes. There are three elements identified:
    -   `.question` is where the question text is displayed.
    -   `.answers-buttons` is where answer buttons are added dynamically.
    -   `.next-btn` is a button to move to the next question or restart the quiz.

## Quiz Logic:

-   `startQuiz()` function initializes the quiz. It resets the question index and score, sets the button text to "Next", and calls `showQuestion()` to display the first question.
-   `showQuestion()` function updates the question text and creates answer buttons based on the current question's data. Each button has a click event listener that calls `selectAnswer()` function.
-   `selectAnswer()` function checks if the selected answer is correct. It updates the score and styles the selected button and correct answer buttons.
-   `handleNextButton()` function manages what happens when the "Next" button is clicked. If there are more questions, it displays the next question. If all questions are answered, it shows the final score and changes the button text to "Play Again".

## User Interaction:

-   When a user clicks an answer, it shows whether the answer was correct or not and disables all buttons to prevent multiple selections.
-   After all questions are answered, it shows the total score and allows the user to play the quiz again.

This script essentially creates an interactive quiz experience for the user where they can answer questions and see their score at the end. If they want, they can play the quiz again by clicking "Play Again".
