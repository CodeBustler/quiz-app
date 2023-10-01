const questions = [
	{
		question: "Correct syntax to print a page using JavaScript",
		answers: [
			{ text: "A. window.print()", correct: true },
			{ text: "B. browser.print()", correct: false },
			{ text: "C. navigator.print()", correct: false },
			{ text: "D. document.print()", correct: false },
		],
	},
	{
		question:
			"Array object calls a function for each element in the array?",
		answers: [
			{ text: "A. concat()", correct: false },
			{ text: "B. every()", correct: false },
			{ text: "C. filter()", correct: false },
			{ text: "D. forEach()", correct: true },
		],
	},
	{
		question: "Function of Array object sorts the elements of an array?",
		answers: [
			{ text: "A. toSource()", correct: false },
			{ text: "B. sort()", correct: true },
			{ text: "C. toString()", correct: false },
			{ text: "D. unshift()", correct: false },
		],
	},
	{
		question:
			"To insert a JavaScript into an HTML page, which tag is used?",
		answers: [
			{ text: "A. scriptJS", correct: false },
			{ text: "B. script", correct: true },
			{ text: "C. link", correct: false },
			{ text: "D. JavaScript", correct: false },
		],
	},
	{
		question: "Why so Java and JavaScript have similar name?",
		answers: [
			{ text: "A. JavaScript is a version of Java", correct: false },
			{ text: "B. JavaScript based on Java syntax", correct: false },
			{ text: "C. both support OOPs", correct: false },
			{ text: "D. None of the above", correct: true },
		],
	},
];

// DOM elements
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answers-buttons");
const nextButton = document.querySelector(".next-btn");

// Variables to track current question index and user score
let currentQuestionIndex = 0;
let score = 0;
let userName = prompt("Enter your name?");

// Function to initialize and start the quiz
function startQuiz() {
	// Reset question index, user score, and button text
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	// Display the first question
	showQuestion();
}

// Function to display the current question and its answer options
function showQuestion() {
	// Reset answer buttons and get current question data
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	// Display the question text
	questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

	// Create buttons for answer options and add click event listeners
	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		// Set data attribute for correct answers and add click event listener
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

// Function to reset answer buttons
function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// Function to handle user's answer selection
function selectAnswer(e) {
	const selectBtn = e.target;
	const isCorrect = selectBtn.dataset.correct === "true";
	// Add styles based on correct/incorrect answers
	if (isCorrect) {
		selectBtn.classList.add("correct");
		score++;
	} else {
		selectBtn.classList.add("incorrect");
	}
	// Disable all buttons and display the next button
	Array.from(answerButtons.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

// Function to show user's final score and allow replaying the quiz
function showScore() {
	resetState();
	questionElement.innerHTML = `${userName} your scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}

// Function to handle the "Next" button click
function handleNextButton() {
	currentQuestionIndex++;
	// Check if there are more questions to display or show final score
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

// Add event listener for the "Next" button
nextButton.addEventListener("click", () => {
	// Check if there are more questions to display or restart the quiz
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		// Reset quiz and start again
		startQuiz();
	}
});

// Start the quiz when the page loads
startQuiz();
