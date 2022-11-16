var questionEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

// Quiz Variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Hide Screen
function startQuiz() {
    var startScreenEl = document.getElementById("intro");
    startScreenEl.setAttribute("class", "hide");
// Unhide
    questionEl.removeAttribute("class");

//Start Timer
    timerId = setInterval(clockTick, 1000)

//Show Time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {

    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("class", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        choicesEl.appendChild(choiceNode);
    });
}

