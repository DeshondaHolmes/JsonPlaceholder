"use strict";

const button = document.getElementById("button");
const div = document.getElementById("messageText");
const todoField = document.getElementById("todoField");

window.onload = () => {
  button.onclick = onButtonClicked;

};

function onButtonClicked() {
    // let inputValue = 0;

  console.log("clicked");
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      for(let i=0; i<i<data.length; i++) {
        // inputValue.valueOf = data[i].title;
        let message1 = "User todo: " + data[i].title;
        let message2 = "User complete " + data[i].completed;
        let message=message1+message2;
        div.innerHTML = message;
        console.log(message);
      
      }
    });
}

// let selectedType = todoField.value;

// const mountain = mountainsArray.find(mountain => mountain.name === mountainSelected);
