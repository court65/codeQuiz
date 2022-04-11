// TIMER
var time = document.querySelector(".timer");
var score =document.querySelector("#score");
var secondsLeft = 75;

// BUTTONS
const start = document.querySelector("#start");

// START
const codersIntro = document.querySelector("#challenge-begins");

// CALL END
const questionsE1 = document.querySelector(".all-question");

//LOCATIONS
let questionE1 = document.querySelector('#question')
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;

//FINAL SCORE
const finalE1 = document.querySelector("#final-score");
let initialInput = document.querySelector('#initials')


// HIGH SCORE
const highscoresE1 = document.querySelector("#high-scores");
let scoreListE1 = document.querySelector('#score-list');
let scoreList =[];


// ANSWER BUTTON
const ansBtn = document.querySelector("button.answer-btn");

// SUBMIT-CLEAR-VIEW-RETURN
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");

//ANSWER CALL
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");



// Questions Array
const questions = [
    {
        question: "Commonly used data types DO Not include:",
        answers: ["1. strings", "2. booleans","3. alerts","4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ["1. quotes", "2. curly brackets","3. parentheses","4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: ["1. numbers and strings", "2. other arrays","3. booleans","4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets","3. quotes","4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash","3. for loops","4. console.log"],
        correctAnswer: "3"
    }

];


