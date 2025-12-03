const quizBox = document.getElementById("quizBox");
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

document.getElementById("categoryTitle").innerText =
  category.toUpperCase() + " QUIZ";

fetch("../data/questions.json")
  .then(res => res.json())
  .then(data => startQuiz(data[category]));

let index = 0, score = 0;

function startQuiz(questions) {
  loadQ(questions);
}

function loadQ(questions) {
  let q = questions[index];

  quizBox.innerHTML = `
    <h2>${q.q}</h2>
    ${q.options.map((o,i)=>`
      <div class="option">
        <input type="radio" name="opt" value="${i+1}"> ${o}
      </div>`).join("")}
    <button class="btn" onclick="nextQ()">Next</button>
  `;

  window.nextQ = function () {
    let selected = document.querySelector("input[name='opt']:checked");

    if (!selected) {
      alert("Select an option!");
      return;
    }

    if (parseInt(selected.value) === q.answer) score++;

    index++;

    if (index < questions.length) {
      loadQ(questions);
    } else {
      quizBox.innerHTML = `<h2>Quiz Completed</h2>
                           <p>Your Score: ${score}/${questions.length}</p>`;
    }
  };
}
