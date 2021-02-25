var questionsAsked = 0;
var time = questions.length * 10;
var timerId;

var questionsEl = document.getElementById("questions")
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var initialsEl = document.getElementById("init");

function startQuiz() {

    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questions.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    currentTime.textContent = time;

    getQuestions();

    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;


        choiceNode.onClick = questionClick;

        choicesEl.appendChild(choiceNode);
    });
}