var question = [];
var questionWrapperEl = document.querySelector(".question-wrapper");
var questionContentEl = document.createElement("div");
var questionCounter = 0;
var temp = "";
var isWrong = false;
var time = 150;
var timerStop = false;


question = [
    {
        "id": "0",
        "question": "Commonly used data types DO Not inlude:",
        "option1": "1. strings",
        "option2": "2. booleans",
        "option3": "3. alerts",
        "option4": "4. numbers",
        "answer": "b"
    },
    {
        "id": "1",
        "question": "The condition in an if / else statement is enclosed with ______.",
        "option1": "1. quotes",
        "option2": "2. curly brackets",
        "option3": "3. parenthesis",
        "option4": "4. square brackets",
        "answer": "c"
    },
    {
        "id": "2",
        "question": "Arrays in JavaScript can be used to store _____.",
        "option1": "1. numbers and strings",
        "option2": "2. other arrays",
        "option3": "3. booleans",
        "option4": "4. all of the above",
        "answer": "d"
    },
    {
        "id": "3",
        "question": "String values must be enclosed within _____ when being assigned to variables.",
        "option1": "1. commas",
        "option2": "2. curly brackets",
        "option3": "3. quotes",
        "option4": "4. parenthesis",
        "answer": "b"
    },
    {
        "id": "4",
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "option1": "1. JavaScript",
        "option2": "2. terminal/bash",
        "option3": "3. for loops",
        "option4": "4. console.log",
        "answer": "c"
    }
];

console.log(question);

var timer = function() {
    if (timerStop === false) {
        time--;
        console.log(time);
        var headerEl = document.querySelector("#time");
        headerEl.textContent = time;
        return(time);
    };
    
};

var startButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;
    
    // delete button was clicked
    if (targetEl.matches("#start")) {
        var questionContentEl = document.querySelector(".info");
        questionContentEl.remove();
        createQuestionEl(question);
        //start timer
        setInterval(timer,1000);
    }
    else if (targetEl.matches("#button-a")) {
        var picked = "a"
        checkAnswer(picked);
      }
    else if (targetEl.matches("#button-b")) {
        var picked = "b"
        checkAnswer(picked);
      }
    else if (targetEl.matches("#button-c")) {
        var picked = "c"
        checkAnswer(picked);
      }
    else if (targetEl.matches("#button-d")) {
        var picked = "d"
        checkAnswer(picked);
      }


  };
  var checkAnswer = function(option) {
    if (option === question[(questionCounter-1)].answer) {
        temp = "Correct";
        questionContentEl.remove();
        if (questionCounter < question.length) {
            createQuestionEl(question);
        }
        else {
            timerStop = true;
            createFinalEl();
        }
        
    }
    else {
        temp = "Wrong";
        time = time - 10;
        if (isWrong === false) {
            var wrongTextEl = document.createElement("p");
            wrongTextEl.textContent = "Wrong(minus 10 seconds), Please try again!";
            wrongTextEl.className = "question";
            wrongTextEl.id = "wrong";
            questionContentEl.appendChild(wrongTextEl);
            isWrong = true;
        };
        
    }
    console.log(question[(questionCounter-1)].answer);
    console.log(temp);
  };

  var createQuestionEl = function(questionDataObj) {
    isWrong = false;
    questionContentEl.className = "info";
    questionContentEl.innerHTML =
      "<p class='question'>" + questionDataObj[questionCounter].question + "</p>";
    questionWrapperEl.appendChild(questionContentEl);

    var questionUlEl = document.createElement("Ul");
    questionUlEl.className = "task-list";
    questionUlEl.id = "tasks-to-do";
    questionContentEl.appendChild(questionUlEl);

    for (var i = 0; i < 4; i++) {
        var buttonliEl = document.createElement("li");
        //buttonliEl.className = "task-item";
        buttonliEl.id = "option" + (i+1);
        switch (i) {
            case 0:
                buttonliEl.innerHTML = "<button class='btn delete-btn' id='button-a'>" + questionDataObj[questionCounter].option1 + "</button>";
            break;
            case 1:
                buttonliEl.innerHTML = "<button class='btn delete-btn' id='button-b'>" + questionDataObj[questionCounter].option2 + "</button>";
            break;
            case 2:
                buttonliEl.innerHTML = "<button class='btn delete-btn' id='button-c'>" + questionDataObj[questionCounter].option3 + "</button>";
            break;
            case 3:
                buttonliEl.innerHTML = "<button class='btn delete-btn' id='button-d'>" + questionDataObj[questionCounter].option4 + "</button>";
            break;
            default:
            console.log("Something went wrong!");
        }       
        questionUlEl.appendChild(buttonliEl);
    };
    
    questionCounter++;
  };

  var createFinalEl = function() {
    questionContentEl.className = "info";
    questionContentEl.innerHTML =
      "<h3>All done!</h3>";
    questionWrapperEl.appendChild(questionContentEl);

    var finaltextEl = document.createElement("p");
    finaltextEl.className = "question";
    finaltextEl.textContent = "Your final score is: " + time;
    questionContentEl.appendChild(finaltextEl);

    var finalFormEl = document.createElement("form");
    finalFormEl.id = "task-form";
    finalFormEl.innerHTML =
      "<div class='form-group'><input type='text'name='task-name'placeholder='Enter your name'/></div>"+
      "<div class='form-group'><button class='btn delete-btn'id='submit'>Submit</button></div>";
    questionContentEl.appendChild(finalFormEl);

   

  };

questionWrapperEl.addEventListener("click", startButtonHandler);