console.log("connected")

// ----------------------------------------------------------------------------------------------------------------------------------------- Global variables

// ---------------------------------------------------------------- House variables

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
let scoreArea = document.getElementById("score");
let counter = document.getElementById("counter");

// ---------------------------------------------------------------- Questions variables

let questionsSet;
let currentQuestion;
let questionPool;
let questionsSetLength;

// ----------------------------------------------------------------------------------------------------------------------------------------- Page functions
// ---------------------------------------------------------------- Navigations

function toHomePage() {
    welcomePage.classList.add("hiden");
    homepage.classList.remove("hiden");
    howToPlay.classList.add("hiden");
    navbarMovement();
}

function toInstructionsPage() {
    homepage.classList.add("hiden");
    howToPlay.classList.remove("hiden");
    navbarMovement();
}

function toSettingsPage() {
    homepage.classList.add("hiden");
    howToPlay.classList.add("hiden");
    navbarMovement();
}

function navbarMovement() {
    scorePage.classList.add("hiden");
    quizpage.classList.add("hiden");
}


// ---------------------------------------------------------------- Fading in front page

function enterQuiz() {
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
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Lion"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Scarlet and Gold"],
        ["Who was Hermione's date at the Yule Ball?", "Ron Weasley", "Harry Potter", "Viktor Krum", "Draco Malfoy", "Viktor Krum"],
        ["Which character served as Quiddich commentator?", "Neville Longbottom", "Dean Thomas", "Lavender Brown", "Lee Jordan", "Lee Jordan"],
        ["Which insect is Ron most scared of?", "Worms", "Spiders", "Ladybugs", "Caterpillars", "Spiders"],
        ["What is the name of Hermione's cat?", "Paws", "Mittens", "Crookshanks", "Sebastian", "Crookshanks"],
        ["How did Neville help to defeat Voldemort?", "Sacrificed himself", "Killed Nagini", "Cast Avada Kedavra", "Found a horcrux", "Killed Nagini"],
        ["How does Harry catch his first snitch?", "In his mouth", "In his hand", "In his pocket", "In a pokeball", "In his mouth"],
        ["How does Hermione take extra classes in third year?", "Weekend classes", "Made a clone", "Penseive", "Time Turner", "Time Turner"],
        ["Other than Harry, who else could have been the object of the prophecy regarding Voldemort's downfall?", 
            "Hermione Granger", "Luna Lovegood", "Neville Longbottom", "Dean Thomas", "Neville Longbottom"]
    ],
    [ // Grass
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Snake"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Silver and Green"],
        ["How many horcruxes did Voldemort make?", "Six", "Seven", "Eight", "Nine", "Eight"],
        ["Finish the quote. “After all this time?”", "Always.", "Maybe.", "I guess...", "No!", "Always."],
        ["What was the name of Voldemort's snake?", "Sid", "Basilisk", "Medusa", "Nagini", "Nagini"],
        ["Who killed Dobby by throwing a knife at him?", "Draco Malfoy", "Severus Snape", "Voldemort", "Bellatrix Lestrange", "Bellatrix Lestrange"],
        ["Which medieval wizard was in Slytherin?", "Magnus", "Flamel", "Merlin", "Donnubáin", "Merlin"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In the gardens", "In the dungeons"],
        ["Who is the resident ghost of Slytherin?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Bloody Baron"],
        ["What qualities does a Slytherin possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Cunning and Deceit"]
    ],
    [ // Electric
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Badger"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Yellow and Black"],
        ["What colour ink are Hogwarts invitation letters written in?", "Red", "Blue", "Green", "Black", "Green"],
        ["Which Quiddich position did Captain Cedric Diggory play?", "Keeper", "Seeker", "Chaser", "Beater", "Seeker"],
        ["Which dragon did Cedric Diggory face in the Triwizard Tournament?", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball", "Common Welsh Green", "Swedish Short-Snout"],
        ["What was the password to the prefect's bathroom?", "Chocolate frogs", "Acid pops", "Cauldron cakes", "Sherbet lemons", "Sherbet lemons"],
        ["Who is the head of Hufflepuff house?", "Professor McGonegal", "Professor Flitwick", "Professor Snape", "Professor Sprout", "Professor Sprout"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In a tower", "In the kitchen"],
        ["Who is the resident ghost of Hufflepuff?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Fat Friar"],
        ["How do you get into the Hufflepuff common room?", "Hum a tune", "Tap out a rhythm", "Perform a poem", "Answer a riddle", "Tap out a rhythm"]
    ],
    [ // Water
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Eagle"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Blue and Silver"],
        ["What qualities does a Ravenclaw possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Wit and Learning"],
        ["Which gem is contained in the Ravenclaw house points hourglass?", "Amythests", "Emeralds", "Sapphires", "Rubies", "Sapphires"],
        ["What does Felix Felicis do?", "Poisons you", "Gives you good luck", "Makes you fall in love", "Ressurects someone", "Gives you good luck"],
        ["Who is the Seeker of the Ravenclaw Quiddich team?", "Padma Patil", "Luna Lovegood", "Terry Boot", "Cho Chang", "Cho Chang"],
        ["Who is the resident ghost of Ravenclaw?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Grey Lady"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In a tower", "In a tower"],
        ["How do you get into the Ravenclaw common room?", "Hum a tune", "Tap out a rhythm", "Perform a poem", "Answer a riddle", "Answer a riddle"],
        ["Who is the head of Ravenclaw house?", "Professor McGonegal", "Professor Flitwick", "Professor Snape", "Professor Sprout", "Professor Flitwick"],
    ]
];


// Sets color scheme and question set depending on which House is chosen on index.html

function setType(type) {

    resetQuiz(typeChosen); // Reset which type was chosen for repeated

    typeChosen = type;
    answers.classList.add(`${type}`);

    homepage.classList.add("hiden"); // Hide home page
    quizpage.classList.remove("hiden"); // Show quiz page

    startQuiz();
}

function resetQuiz(type) { // Reset the type at the start, so if the user is playing a second time
    answers.classList.remove(type);
    currentScore = 0;
}

// ---------------------------------------------------------------- Chooses question set depending on which type was chosen

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
    document.getElementById("scoring").innerText = `${currentScore} / 10`; // Populate their score
    if (currentScore <= 2) {
        resultQuote.innerText = "Well, I suppose you can always buy your acceptance to Hogwarts?";
    } else if (currentScore <= 5 && currentScore > 2) {
        resultQuote.innerText = "Oh no! It looks like you could do with a Remembrall!";
    } else if (currentScore <= 8 && currentScore > 5) {
        resultQuote.innerText = "Congratulations, your Hogwarts acceptance letter is here! You could still do with a bit more revision before you go, though.";
    } else if (currentScore <= 10 && currentScore > 8) {
        resultQuote.innerText = "Here's your ticket for the Hogwarts express! You'll fit in just fine!";
    } else {
        alert("Oh no! Something went wrong! Please try again.");
    };
}