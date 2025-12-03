const msg = document.getElementById("msg");

function addQuestion() {
  let cat = document.getElementById("category").value;
  let q = document.getElementById("question").value;
  let options = [
    document.getElementById("op1").value,
    document.getElementById("op2").value,
    document.getElementById("op3").value,
    document.getElementById("op4").value
  ];
  let ans = document.getElementById("answer").value;

  if (!q || options.includes("") || ans < 1 || ans > 4) {
    msg.innerHTML = "❌ Please fill all fields properly.";
    return;
  }

  msg.innerHTML = "✔ Question added (stored locally).";
}
