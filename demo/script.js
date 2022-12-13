"use strict";
const textBox = document.getElementById("textbox");
const btn1 = document.getElementById("btn1");

//array of nodes where you push each new node until story is done
const storyArray = [
  {
    id: 0,
    text: "try",
    buttons: {
      btn1: {
        text: "move forward",
        id: 1,
      },
      btn2: {
        text: "button 2 has been pressed",
        id: 1,
      },
    },
  },
];

btn1.addEventListener("click", () => {
  textBox.innerText = storyArray[0].text;
  btn1.textContent = storyArray[0].buttons.btn1.text;
});
