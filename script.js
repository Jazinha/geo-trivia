const questionList = [
    {
        question: "How many continents are in the world?",
        answers : ["4","6","8","7"],
        correctAnswer: "7"
    },
    {
        question: "Which of the following countries is located in both Europe and Asia?",
        answers: ["Russia","Brazil","Canada","Australia"],
        correctAnswer: "Russia" 
    },
    {
        question: "What is the capital city of Japan?",
        answers: ["Tokyo","Beijing","Seoul","Bangkok"],
        correctAnswer: "Tokyo" 
    },
    {
        question: "Which continent is known as the Dark Continent?",
        answers: ["Africa","Europe","South America","Antartica"],
        correctAnswer: "Africa" 
    },
    {
        question: "The Great Barrier Reef, the world's largest coral reef system, is located in which country?",
        answers: ["Australia","Brazil","Indonesia","Mexico"],
        correctAnswer: "Australia" 
    },
];

var question = document.getElementById("question");
var answers = document.getElementsByClassName("answer");
var btn = document.getElementById("submit-question-bt");
var idx = 0;
var choice = 0;
var score = 0;
var timer = document.getElementById("timer");
var isWrong = false;
var statusElem = document.getElementById("status");

function timeClock(time_left) {
    if (time_left == 1)
    {
       window.location.replace("gameover.html");
    }
    timer.innerHTML = time_left;
    if (!isWrong)
    {
        
        setTimeout(() => {
            timeClock(time_left - 1);
        }, 1000);
    }
    else
    {
        isWrong = false;
        setTimeout(() => {
            timeClock(time_left - 10);
        }, 1000);
    }
}


function loadQuestion(idx)
{
    statusElem.innerHTML = "";
    question.innerHTML = questionList[idx].question;
    for (var i = 0; i < 4; i++)
    {
        answers[i].innerHTML = questionList[idx].answers[i];
    }
}

function init()
{
    timeClock(60);

    for (var i = 0; i < 4; i++)
    {
        answers[i].addEventListener("click", (e) => {
            choice = e.target.innerHTML;
            console.log(choice);
        })
    }

    btn.addEventListener("click", () => {
        if (choice == questionList[idx].correctAnswer)
        {
            statusElem.innerHTML = "Correct!";
            score += 5;
            localStorage.setItem("score", score);
        }
        else
        {
            statusElem.innerHTML = "Wrong!";
            isWrong = true;
        }
        idx = idx + 1;
        if (idx == questionList.length)
        {
            localStorage.setItem("score", score);
            window.location.replace("gameover.html");
            
        }
        else
        {
            setTimeout(() => {
                loadQuestion(idx);
            }, 500);
        }
        
    });
    loadQuestion(idx);
    
}




init()