"use strict";
const textBox = document.getElementById("textbox");
const btn1 = document.querySelectorAll("btn1");

let story,
  author,
  date,
  start = 0;

function addData(data) {
  story = data.data;
  author = data.author;
  date = data.date;
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

function nextQuestion(obj) {
  textBox.textContent = obj.text;
  btn1.textContent = obj.buttons.btn1.text;
  btn2.textContent = obj.buttons.btn2.text;
  btn3.textContent = obj.buttons.btn3.text;
  btn4.textContent = obj.buttons.btn4.text;
}

window.addEventListener("load", loadData);

btn1.addEventListener("click", (e) => {
  const button = e.target.id;
  console.log(e.target.id);
  start = story[start].buttons[button].id;
  nextQuestion(story[start]);
});

console.log(story);
