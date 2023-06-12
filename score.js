var score = localStorage.getItem("score");
var scoreElem = document.getElementById("score");
var submitBtn = document.getElementById("initial-submit-bt");
var initialElem = document.getElementById("initial");

function setScore()
{
    scoreElem.innerHTML = "SCORE: " + score.toString();
}

document.getElementById("submit-button").addEventListener("click", function() {
    var initial = document.getElementById("initial-input").value;
    document.getElementById("initial-enter").textContent = "Your initial: " + initial;
  });
  
/*
submitBtn.addEventListener("click", () => {
    const currentScores = JSON.parse(localStorage.getItem('score'));

    const initial = initialElem.value;
    const temp = {
        initial : initial,
        score : score,
    }
    currentScores.push(temp);
    localStorage.setItem("score", JSON.stringify(currentScores))
})
*/



function init()
{
    setScore();
}

init()