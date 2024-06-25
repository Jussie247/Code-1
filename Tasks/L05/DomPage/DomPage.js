"use strict";
let spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World";
let newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
let i = 0;
do {
    i++;
    let newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
    console.log(i);
} while (i < 10);
