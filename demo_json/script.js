"use strict";
const textBox = document.getElementById("textbox");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let story, author, date;

function addData(data) {
  story = data.data;
  author = data.author;
  date = data.date;
}
async function loadData() {
  const response = await fetch("data.json");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    addData(data);
    // storyArray.push(data);
  } else {
    console.log("no data received");
  }
}

function nextQuestion(obj) {
  textBox.textContent = obj.text;
  btn1.innerHTML = obj.buttons.btn1.text;
  btn2.innerHTML = obj.buttons.btn2.text;
  btn3.innerHTML = obj.buttons.btn3.text;
  btn4.innerHTML = obj.buttons.btn4.text;
}

window.addEventListener("load", loadData);

btn1.addEventListener("click", () => {
  nextQuestion(story[0]);
});