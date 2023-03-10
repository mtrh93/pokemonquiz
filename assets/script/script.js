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
const instructipnPage = document.getElementById("instruction-page");
const footerPage = document.getElementById("footer");

// ---------------------------------------------------------------- Counter variables

let answerSelected = 0;
let userScore = 0;
let scoreArea = document.getElementById("scoring");

// ---------------------------------------------------------------- Questions variables

let questionArray;
let activeQuestion;
let questionPool;
let questionArrayLength;
let endQuote = document.getElementById("end-quote");

// ----------------------------------------------------------------------------------------------------------------------------------------- Page functions
// ---------------------------------------------------------------- Navigations

function toHomePage() {
    welcomePage.classList.add("hiden");
    homepage.classList.remove("hiden");
    instructipnPage.classList.add("hiden");
    quizpage.classList.add("hiden");
    bodyPage.classList.remove("fire-background");
    bodyPage.classList.remove("grass-background");
    bodyPage.classList.remove("electric-background");
    bodyPage.classList.remove("water-background");
    bodyPage.classList.add("background-image");
    instructipnPage.classList.add("hiden");
    navbarMovement();
}

function toInstructionsPage() {
    homepage.classList.add("hiden");
    instructipnPage.classList.remove("hiden");
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
    ["What was the name of the fire type badge in generation one?", "Fire Badge", "Heat Badge", "Magma Badge", "Volcano Badge", "Volcano Badge"],
    ["Which of the following types are super effective agaisnt fire types?", "Water", "Ice", "Grass", "Electric", "Water"],
    ["What is the fire Evee evolution called?", "Jolteon", "Blazeon", "Flareon", "Burneon", "Flareon"],
    ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
    ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
    ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
    ["What was the name of the fire legendary bird from generation one?", "Articuno", "Flamedos", "Phoenix", "Moltres", "Moltres"],
    ["What is the final evolution form of Charmander?", "Charizard", "Charmeleon", "Charmastadar", "Charmega", "Charizard"]
   ],
   [ // Grass
   ["What was the grass type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Bulbasaur"],
   ["What was the name of the grass gym location in generation one?", "Celadon", "Lavaridge", "Saffron", "Pallet", "Celadon"],
   ["which of the following are grass types super-effective against?", "Electric", "Dragon", "Fairy", "Ground", "Ground"],
   ["What is the name of the pokemon that Oddish evolves into when it reaches level 21?", "Bellossom", "Gloom", "Oddishsa", "Vileplume", "Gloom"],
   ["What is the grass Evee evolution called?", "Chikoreon", "Leafeon", "Flareon", "Grasseon", "Leafeon"],
   ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
   ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
   ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
   ["What was the name of the grass legendary bird from generation one?", "Plantalon", "Sundres", "There Wasn't One", "Moltres", "There Wasn't One"],
   ["What is the final evolution form of Bulbasuar?", "Venusaur", "Bulbadon", "Venosaur", "Venumegaur", "Venusaur"]
  ],
  [ // Electric
  ["What was the name of the starter pokemon players are given when they begin pokemon yellow?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Pikachu"],
  ["What was the name of the electric gym location in generation one?", "Vermilion", "Voltown", "Veridian", "Pallet", "Vermilion"],
  ["What was the name of the cruise ship in generation one games?", "SS. Anne", "St. Ann", "St. Anne", "SS. Ann", "SS. Anne"],
  ["In pokemon yellow what was the only way to evolve the starter pikachu?", "Trade it", "Use a stone", "You Could Not", "Friendship", "Trade it"],
  ["What is the electric Evee evolution called?", "Jolteon", "Volteon", "Flareon", "Shockeon", "Jolteon"],
  ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
  ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
  ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
  ["What was the name of the electric legendary bird from generation one?", "Bolticuno", "Zapdos", "Ther Wasn't One", "Voltres", "Zapdos"],
  ["What stone is required for pikachu to evolve onto Raichu?", "Thunder Stone", "Lightning Stone", "Charge Stone", "Watt Stone", "Thunder Stone"]
 ],
 [ // Water
 ["What was the water type starter of genration one?", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Squirtle"],
 ["What was the name of the water gym location in generation one?", "Ceruleon", "Cascadia", "Cinnabar", "Pallet", "Ceruleon"],
 ["What was the name of the water type badge in generation one?", "Rain Badge", "Fall Badge", "Cascade Badge", "Aqua Badge", "Cascade Badge"],
 ["What was the name of the water gym leader in gneration one?", "Mista", "Misti", "Misty", "Mistey", "Misty"],
 ["What is the water Evee evolution called?", "Fisheon", "Moisteon", "Waveon", "Vaporeon", "Vaporeon"],
 ["In generation two how many steps would it take to hatch a starter pokemon?", "2560", "5170", "5550", "5120", "5120"],
 ["Which of the below is the name of the fire type pokemon Growlithe's evolution?", "Growlihound", "Arcanine", "Lithengrowl", "Barkanine", "Arcanine"],
 ["What pokemon did ash first catch in a pokeball?", "Buterfree", "Caterpie", "Pikachu", "Pidgey", "Caterpie"],
 ["What was the name of the water legendary bird from generation one?", "Articuno", "There Wasn't One", "Aquados", "Lugia", "There Wasn't One"],
 ["What is the final evolution form of Squirtle?", "Squirtasaur", "Warturtle", "Wartortle", "Blastoise", "Blastoise"]
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
    userScore = 0;
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
    const wholeQuestions = JSON.parse(JSON.stringify(questions));
    if (typeChosen === "fire") {
        questionArray = wholeQuestions[0];
    } else if (typeChosen === "grass") {
        questionArray = wholeQuestions[1];
    } else if (typeChosen === "electric") {
        questionArray = wholeQuestions[2];
    } else if (typeChosen === "water") {
        questionArray = wholeQuestions[3];
    } else {
        alert("Oh no! Something went wrong and your pokemon feinted! Scurry to the Pokemon center and hit that home button!");
    }
    questionArrayLength = questionArray.length; // Set a variable to include the total number of questions in that set, which doesn't change as the questionPool decreases
    document.getElementById("progress-bar").max = questionArrayLength; // Set the progress bar max to the number of questions in the total question set
}

// ---------------------------------------------------------------- Randomises the order of the questions

function randomiseQuestionOrder() {
    questionPool = questionArray.length;
    let randomNumber = Math.floor(Math.random() * questionPool); // Gets a random number between 1 and the total number of questions remaining in the question pool
    activeQuestion = questionArray[`${randomNumber}`]; // Finds a question in the question set with that index number
}

function populateQuestion() { // Fills in the text for question and answer chosen by the randomiseQuestionOrder function
    let questionText = document.getElementById("question-text");
    questionText.innerText = activeQuestion[0];

    let answerOne = document.getElementById("answer-one");
    answerOne.innerText = activeQuestion[1];

    let answerTwo = document.getElementById("answer-two");
    answerTwo.innerText = activeQuestion[2];

    let answerThree = document.getElementById("answer-three");
    answerThree.innerText = activeQuestion[3];

    let answerFour = document.getElementById("answer-four");
    answerFour.innerText = activeQuestion[4];
}

// ---------------------------------------------------------------- To end the quiz

function endQuiz() {
    showScorePage();
    document.getElementById("progress-bar").value = 0;
    scoreArea.innerText = "";
    questionArray = 0;
}


// ---------------------------------------------------------------- Check the answer given by the user and move to the next question

function pushScore() {
    scoreArea.innerText = `${userScore}/10`; // Pushes the updated score to the score area for the user to see
}

function pushProgress() {
    document.getElementById("progress-bar").value = answerSelected;
}

function checkAnswer(num) {
    if (activeQuestion[num] == activeQuestion[5]) { // if content of index of clicked answer is equal to the question correct answer
       userScore++; // Add to the score
       answerSelected++; // Increment how many questions are answered
       pushScore();
    } else {
        answerSelected++; // If the answer is incorrect, just increment the question total
    }
    newQuestion();
    pushProgress();
}

function newQuestion() {
    if (answerSelected < questionArrayLength) { // checks to see if the current question is the last question or not
        questionPool--; // Decrement the question pool for the Randomizer
        removeOldQuestion();
        randomiseQuestionOrder();
        populateQuestion();
    } else if (answerSelected === questionArrayLength) { // ends the quiz if its final question
       endQuiz();
    } else {
        alert("Oh no! Something went wrong and your pokemon feinted! Scurry to the Pokemon center and hit that home button!");
    }
}

function removeOldQuestion() {
    let questionIndex = questionArray.indexOf(activeQuestion);
    questionArray.splice(questionIndex,1); // Remove the question from the set of questions
}


// ---------------------------------------------------------------- Start the quiz

function startQuiz() { // Starts the quiz from scratch,
    userScore = 0;
    answerSelected = 0;
    pushScore();
    pushProgress();
    chooseQuestionSet();
    randomiseQuestionOrder();
    populateQuestion();
}

// ---------------------------------------------------------------- Decides which results page to show the user, and displays their score

function pageSwap() {
    homepage.classList.add("hiden");
    instructipnPage.classList.add("hiden");
    quizpage.classList.add("hiden");
}

function showScorePage() { // Sets the result image and text depending on what score the user achieves
    scorePage.classList.remove("hiden");
    quizpage.classList.add("hiden");
    document.getElementById("final-score").innerText = `${userScore} / 10`; // Populate their score
    if (userScore <= 2) {
        endQuote.innerText = "Did you ever leave Pallet town?";
    } else if (userScore <= 5 && userScore > 2) {
        endQuote.innerText = "Did someone google a few answers?";
    } else if (userScore <= 8 && userScore > 5) {
        endQuote.innerText = "I know what you played when you were younger";
    } else if (userScore <= 10 && userScore > 8) {
        endQuote.innerText = "You are well on your way to becoming a pokemon Master";
    } else {
        alert("Oh no! Something went wrong and your pokemon feinted! Scurry to the Pokemon center and hit that home button!");
    };
}