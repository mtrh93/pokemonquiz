// ----------------------------------------------------------------Type variables

let typeChosen;
let answers = document.getElementById("a-overlay");

// ---------------------------------------------------------------- Page variables

const bodyPage = document.getElementById("body");
const welcomePage = document.getElementById("welcome-page");
const fullPage = document.getElementById("main-area");
const navbar = document.getElementById("script-navbar");
const homepage = document.getElementById("choose-type-page");
const quizpage = document.getElementById("quiz-page");
const scorePage = document.getElementById("score-page");
const howToPlay = document.getElementById("how-to-play-page");
const footerPage = document.getElementById("footer");

// ---------------------------------------------------------------- Counter variables

let questionsAnswered = 0;
let currentScore = 0;
let scoreArea = document.getElementById("scoring");

// ---------------------------------------------------------------- Questions variables

let questionsSet;
let currentQuestion;
let questionPool;
let questionsSetLength;
let resultQuote = document.getElementById("result-quote");

// ----------------------------------------------------------------------------------------------------------------------------------------- Page functions
// ---------------------------------------------------------------- Navigations

function toHomePage() {
    welcomePage.classList.add("hiden");
    homepage.classList.remove("hiden");
    howToPlay.classList.add("hiden");
    quizpage.classList.add("hiden");
    bodyPage.classList.remove("fire-background");
    bodyPage.classList.remove("grass-background");
    bodyPage.classList.remove("electric-background");
    bodyPage.classList.remove("water-background");
    bodyPage.classList.add("background-image");
    howToPlay.classList.add("hiden");
    navbarMovement();
}

function toInstructionsPage() {
    homepage.classList.add("hiden");
    howToPlay.classList.remove("hiden");
    quizpage.classList.add("hiden");
    navbarMovement();
}


function navbarMovement() {
    scorePage.classList.add("hiden");
}


// ---------------------------------------------------------------- Fading in front page

function loadQuiz() {
        navbar.classList.remove("hiden"); // Show navbar
        bodyPage.classList.add("background-image"); // Add normal background image
        bodyPage.classList.remove("blank-background"); // Remove black background
        footerPage.classList.remove("hiden"); // Show footer
        toHomePage();
        navbarMovement();
}

// ---------------------------------------------------------------- Questions sets

const questions = [
   [ // Fire
    ["What was the fire type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Charmander"],
    ["What was the name of the fire gym location in generation one?", "Ceruleon", "Lavaridge", "Cinnabar", "Pallet", "Cinnabar"],
    ["What was the name of the fire type badge in generation one?", "Fire Badge", "Heat Badge", "Magma Badge", "Volcanoe Badge", "Volcanoe Badge"],
    ["Which of the following types are super effective agaisnt fire types?", "Water", "Ice", "Grass", "Electric", "Water"],
    ["What is the fire Evee evolution called?", "Jolteon", "Blazeon", "Flareon", "Burneon", "Flareon"],
    ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
    ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
    ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
    ["What was the name of the fire legendary bird from generation one?", "Articuno", "Flamedos", "Phoenix", "Moltres", "Moltres"],
    ["What is the final evolution form of Charmander?", "Charizard", "Charmeleon", "Charmastadar", "Charmega", "Charizard"]
   ],
   [ // Grass
   ["What was the fire type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Charmander"],
   ["What was the name of the fire gym location in generation one?", "Ceruleon", "Lavaridge", "Cinnabar", "Pallet", "Cinnabar"],
   ["What was the name of the fire type badge in generation one?", "Fire Badge", "Heat Badge", "Magma Badge", "Volcanoe Badge", "Volcanoe Badge"],
   ["Which of the following types are super effective agaisnt fire types?", "Water", "Ice", "Grass", "Electric", "Water"],
   ["What is the fire Evee evolution called?", "Jolteon", "Blazeon", "Flareon", "Burneon", "Flareon"],
   ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
   ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
   ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
   ["What was the name of the fire legendary bird from generation one?", "Articuno", "Flamedos", "Phoenix", "Moltres", "Moltres"],
   ["What is the final evolution form of Charmander?", "Charizard", "Charmeleon", "Charmastadar", "Charmega", "Charizard"]
  ],
  [ // Electric
  ["What was the fire type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Charmander"],
  ["What was the name of the fire gym location in generation one?", "Ceruleon", "Lavaridge", "Cinnabar", "Pallet", "Cinnabar"],
  ["What was the name of the fire type badge in generation one?", "Fire Badge", "Heat Badge", "Magma Badge", "Volcanoe Badge", "Volcanoe Badge"],
  ["Which of the following types are super effective agaisnt fire types?", "Water", "Ice", "Grass", "Electric", "Water"],
  ["What is the fire Evee evolution called?", "Jolteon", "Blazeon", "Flareon", "Burneon", "Flareon"],
  ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
  ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
  ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
  ["What was the name of the fire legendary bird from generation one?", "Articuno", "Flamedos", "Phoenix", "Moltres", "Moltres"],
  ["What is the final evolution form of Charmander?", "Charizard", "Charmeleon", "Charmastadar", "Charmega", "Charizard"]
 ],
 [ // Water
 ["What was the fire type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Charmander"],
 ["What was the name of the fire gym location in generation one?", "Ceruleon", "Lavaridge", "Cinnabar", "Pallet", "Cinnabar"],
 ["What was the name of the fire type badge in generation one?", "Fire Badge", "Heat Badge", "Magma Badge", "Volcanoe Badge", "Volcanoe Badge"],
 ["Which of the following types are super effective agaisnt fire types?", "Water", "Ice", "Grass", "Electric", "Water"],
 ["What is the fire Evee evolution called?", "Jolteon", "Blazeon", "Flareon", "Burneon", "Flareon"],
 ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
 ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
 ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
 ["What was the name of the fire legendary bird from generation one?", "Articuno", "Flamedos", "Phoenix", "Moltres", "Moltres"],
 ["What is the final evolution form of Charmander?", "Charizard", "Charmeleon", "Charmastadar", "Charmega", "Charizard"]
]
];


// Sets color scheme and question set depending on which House is chosen on index.html

function setType(type) {

    resetQuiz(typeChosen); // Reset which type was chosen for repeated

    typeChosen = type;
    answers.classList.add(`${type}`);

    homepage.classList.add("hiden"); // Hide home page
    quizpage.classList.remove("hiden"); // Show quiz page

    backgroundChange()
    startQuiz();
}

function resetQuiz(type) { // Reset the type at the start, so if the user is playing a second time, they're not stuck with the same house
    answers.classList.remove(type);
    currentScore = 0;
}

// ---------------------------------------------------------------- Chooses question set depending on which type was chosen
function backgroundChange() {
    if (typeChosen === "fire") {
        bodyPage.classList.remove("background-image"); // remove normal background image
        bodyPage.classList.add("fire-background"); // add fire background
    } else if (typeChosen === "grass") {
        bodyPage.classList.remove("background-image"); // remove normal background image
        bodyPage.classList.add("grass-background"); // add grass background
    } else if (typeChosen === "electric") {
        bodyPage.classList.remove("background-image"); // remove normal background image
        bodyPage.classList.add("electric-background"); // add electric background
    } else if (typeChosen === "water") {
        bodyPage.classList.remove("background-image"); // remove normal background image
        bodyPage.classList.add("water-background"); // add water background
    } 
}

function chooseQuestionSet() {
    const fullQuestions = JSON.parse(JSON.stringify(questions));
    if (typeChosen === "fire") {
        questionsSet = fullQuestions[0];
    } else if (typeChosen === "grass") {
        questionsSet = fullQuestions[1];
    } else if (typeChosen === "electric") {
        questionsSet = fullQuestions[2];
    } else if (typeChosen === "water") {
        questionsSet = fullQuestions[3];
    } else {
        alert("That's not a valid type. Please return to the welcome page and choose again.");
    }
    questionsSetLength = questionsSet.length; // Set a variable to include the total number of questions in that set, which doesn't change as the questionPool decreases
    document.getElementById("progress-bar").max = questionsSetLength; // Set the progress bar max to the number of questions in the total question set
}

// ---------------------------------------------------------------- Randomises the order of the questions

function randomiseQuestionOrder() {
    questionPool = questionsSet.length;
    let randomNumber = Math.floor(Math.random() * questionPool); // Gets a random number between 1 and the total number of questions remaining in the question pool
    currentQuestion = questionsSet[`${randomNumber}`]; // Finds a question in the question set with that index number
}

function populateQuestion() { // Fills in the text for question and answer chosen by the randomiseQuestionOrder function
    let questionText = document.getElementById("question-text");
    questionText.innerText = currentQuestion[0];

    let answerOne = document.getElementById("answer-one");
    answerOne.innerText = currentQuestion[1];

    let answerTwo = document.getElementById("answer-two");
    answerTwo.innerText = currentQuestion[2];

    let answerThree = document.getElementById("answer-three");
    answerThree.innerText = currentQuestion[3];

    let answerFour = document.getElementById("answer-four");
    answerFour.innerText = currentQuestion[4];
}

// ---------------------------------------------------------------- To end the quiz

function endQuiz() {
    showScorePage();
    document.getElementById("progress-bar").value = 0;
    scoreArea.innerText = "";
    questionsSet = 0;
}


// ---------------------------------------------------------------- Check the answer given by the user and move to the next question

function pushScore() {
    scoreArea.innerText = `${currentScore}/10`; // Pushes the updated score to the score area for the user to see
}

function pushProgress() {
    document.getElementById("progress-bar").value = questionsAnswered;
}

function checkAnswer(num) {
    if (currentQuestion[num] == currentQuestion[5]) { // if content of index of clicked answer is equal to the question correct answer
       currentScore++; // Add to the score
       questionsAnswered++; // Increment how many questions are answered
       pushScore();
    } else {
        questionsAnswered++; // If the answer is incorrect, just increment the question total
    }
    nextQuestion();
    pushProgress();
}

function nextQuestion() {
    if (questionsAnswered < questionsSetLength) { // checks to see if the current question is the last question or not
        questionPool--; // Decrement the question pool for the Randomizer
        removeOldQuestion();
        randomiseQuestionOrder();
        populateQuestion();
    } else if (questionsAnswered === questionsSetLength) { // ends the quiz if its final question
       endQuiz();
    } else {
        alert("Oh no! Something went wrong! Please return to the homepage and try again.");
    }
}

function removeOldQuestion() {
    let questionIndex = questionsSet.indexOf(currentQuestion);
    questionsSet.splice(questionIndex,1); // Remove the question from the set of questions
}


// ---------------------------------------------------------------- Start the quiz

function startQuiz() { // Starts the quiz from scratch,
    currentScore = 0;
    questionsAnswered = 0;
    pushScore();
    pushProgress();
    chooseQuestionSet();
    randomiseQuestionOrder();
    populateQuestion();
}

// ---------------------------------------------------------------- Decides which results page to show the user, and displays their score

function pageSwap() {
    homepage.classList.add("hiden");
    howToPlay.classList.add("hiden");
    quizpage.classList.add("hiden");
}

function showScorePage() { // Sets the result image and text depending on what score the user achieves
    scorePage.classList.remove("hiden");
    quizpage.classList.add("hiden");
    document.getElementById("final-score").innerText = `${currentScore} / 10`; // Populate their score
    if (currentScore <= 2) {
        resultQuote.innerText = "Did you ever leave Pallet town?";
    } else if (currentScore <= 5 && currentScore > 2) {
        resultQuote.innerText = "Did someone google a few answers?";
    } else if (currentScore <= 8 && currentScore > 5) {
        resultQuote.innerText = "I know what you played when you were younger";
    } else if (currentScore <= 10 && currentScore > 8) {
        resultQuote.innerText = "You are well on your way to becoming a pokemon Master";
    } else {
        alert("Oh no! Something went wrong! Please try again.");
    };
}