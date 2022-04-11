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
