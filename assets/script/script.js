console.log("connected")

// ----------------------------------------------------------------------------------------------------------------------------------------- Global variables

// ---------------------------------------------------------------- House variables

let starterChosen;
let answers = document.getElementById("answer-overlay");

// ---------------------------------------------------------------- Page variables

const bodyPage = document.getElementById("body");
const welcomePage = document.getElementById("js-welcome-page");
const fullPage = document.getElementById("main-area");
const navbar = document.getElementById("script-navbar");
const homepage = document.getElementById("js-choose-starter-page");
const quizpage = document.getElementById("js-quiz-page");
const scorePage = document.getElementById("js-score-page");
const howToPlay = document.getElementById("js-how-to-play-page");
const footerPage = document.getElementById("footer");

// ---------------------------------------------------------------- Counter variables

let questionsAnswered = 0;
let currentScore = 0;
let scoreArea = document.getElementById("score");
let counter = document.getElementById("counter");
let seconds;
let countTimer;

// ---------------------------------------------------------------- Questions variables

let questionsSet;
let currentQuestion;
let questionPool;
let questionsSetLength;

// ---------------------------------------------------------------- Results variables

let resultImage = document.getElementById("result-image");
let resultQuote = document.getElementById("result-quote");

// ---------------------------------------------------------------- Audio variables

let music = "off";
const solemnlyAudio = new Audio('assets/audio/solemnly.mp3');
const fireAudio = new Audio('assets/audio/fire-sound.mp3');
const quizAudio = new Audio('assets/audio/quiz-audio.mp3');

// ----------------------------------------------------------------------------------------------------------------------------------------- Page functions
// ---------------------------------------------------------------- Navigations

function toHomePage() {
    welcomePage.classList.add("hide");
    homepage.classList.remove("hide");
    howToPlay.classList.add("hide");
    navbarMovement();
}

function toInstructionsPage() {
    homepage.classList.add("hide");
    howToPlay.classList.remove("hide");
    navbarMovement();
}

function toSettingsPage() {
    homepage.classList.add("hide");
    howToPlay.classList.add("hide");
    navbarMovement();
}

function navbarMovement() {
    scorePage.classList.add("hide");
    quizpage.classList.add("hide");
    clearInterval(countTimer);
    seconds = 120;
    whichMusic();
}


// ---------------------------------------------------------------- Fading in front page

function enterQuiz() {
        navbar.classList.remove("hiden"); // Show navbar
        bodyPage.classList.add("background-image"); // Add normal background image
        bodyPage.classList.remove("blank-background"); // Remove black background
        footerPage.classList.remove("hiden"); // Show footer
        toHomePage();
        navbarMovement();
        whichMusic();
}