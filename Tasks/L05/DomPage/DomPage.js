"use strict";
let spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World";
let newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
for (let i = 0; i < 10; i++) {
    let newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
    newSpan.addEventListener("click", hndClick);
}
function hndClick(_event) {
    console.log(_event);
}
