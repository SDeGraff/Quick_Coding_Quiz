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

function getQuestion() {
    // get a question
    var currentQuestion = questions[currentQuestionIndex];
  
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
  
    choicesEl.innerHTML = "";
  
    currentQuestion.choices.forEach(function(choice, i) {
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      choiceNode.onclick = questionClick;

      choicesEl.appendChild(choiceNode);
    });
  }

  function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;
      feedbackEl.textContent = "Wrong!";
      feedbackEl.style.color = "red";
      feedbackEl.style.fontSize = "400%";
    } else {
      feedbackEl.textContent = "Correct!";
      feedbackEl.style.color = "green";
      feedbackEl.style.fontSize = "400%";
    }
  
        feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

  