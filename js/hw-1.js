// function greeting() {
//   sayHello();
//   console.log();
// }

// function sayHello() {
//   greeting();
// }

// greeting();

const inputRef = document.querySelector("input");
const btnStart = document.getElementById("start");
const btnClick = document.getElementById("click");
const btnCurrent = document.getElementById("current");
const btnTotal = document.getElementById("total");
let count = 0;

btnClick.setAttribute("disabled", "disabled");

btnStart.addEventListener("click", onStart);
btnClick.addEventListener("click", onClick);
btnCurrent.addEventListener("click", onCurrent);

function onCurrent() {
  const currentPoint = JSON.parse(sessionStorage.getItem("Current Point"));
  console.log(currentPoint);
}

function onClick() {
  count += 1;
}

function onStart() {
  btnClick.removeAttribute("disabled");
  count = 0;
  setTimeout(() => {
    btnClick.setAttribute("disabled", "disabled");
    sessionStorage.setItem("Current Point", JSON.stringify(count));
    const bestScore = JSON.parse(localStorage.getItem("Best score"));
    if (count >= bestScore) {
      localStorage.setItem("bestScore", JSON.stringify(count));
    }
  }, 5000);
}
