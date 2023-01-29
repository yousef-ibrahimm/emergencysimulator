"use strict";
const textBox = document.getElementById("textbox");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let story,
  author,
  date,
  optimum = 0,
  questionsDone = 0,
  start = 0;

function addData(data) {
  story = data.data;
  author = data.author;
  date = data.date;
  console.log(story);
  nextQuestion(story[start]);
}
async function loadData() {
  const response = await fetch("data.json");
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    addData(data);
  } else {
    console.log("no data received");
  }
}

function checkEnd(obj) {
  if (obj.end) {
    textBox.textContent = `You chose ${optimum} best choices out of ${
      questionsDone - 1
    }`;
    const buttons = document.querySelectorAll(".btn");
    buttons.classList.add("hide");
  }
}

function nextQuestion(obj) {
  textBox.textContent = obj.text;
  btn1.textContent = obj.buttons.btn1.text;
  btn2.textContent = obj.buttons.btn2.text;
  btn3.textContent = obj.buttons.btn3.text;
  btn4.textContent = obj.buttons.btn4.text;
  questionsDone += 1;
}

window.addEventListener("load", loadData);

btn1.addEventListener("click", (e) => {
  const button = e.target.id;
  if (story[start].buttons[button].optimum) {
    optimum += 1;
  }
  console.log(optimum);
  start = story[start].buttons[button].id;
  nextQuestion(story[start]);
  checkEnd(story[start]);
});

btn2.addEventListener("click", (e) => {
  const button = e.target.id;
  if (story[start].buttons[button].optimum) {
    optimum += 1;
  }
  console.log(optimum);
  start = story[start].buttons[button].id;
  nextQuestion(story[start]);
  checkEnd(story[start]);
});

btn3.addEventListener("click", (e) => {
  const button = e.target.id;
  if (story[start].buttons[button].optimum) {
    optimum += 1;
  }
  console.log(optimum);
  start = story[start].buttons[button].id;
  nextQuestion(story[start]);
  checkEnd(story[start]);
});

btn4.addEventListener("click", (e) => {
  const button = e.target.id;
  if (story[start].buttons[button].optimum) {
    optimum += 1;
  }
  console.log(optimum);
  start = story[start].buttons[button].id;
  nextQuestion(story[start]);
  checkEnd(story[start]);
});
