"use strict";
// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Array of words to display
const words = ['Hello', 'World', 'TypeScript', 'JavaScript', 'Random', 'Element'];
// Array of fonts to use
const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];
// Function to create a single random div element with random styles
function createRandomElement() {
    const element = document.createElement('div');
    // Set the position and size of the element randomly
    element.style.position = 'absolute';
    element.style.width = `${getRandomInt(50, 100)}px`;
    element.style.height = `${getRandomInt(50, 100)}px`;
    // Set random background color
    element.style.backgroundColor = getRandomColor();
    // Set random position within the viewport
    element.style.left = `${getRandomInt(0, window.innerWidth - 100)}px`;
    element.style.top = `${getRandomInt(0, window.innerHeight - 100)}px`;
    // Additional styling
    element.style.padding = '5px';
    element.style.border = '1px solid black';
    element.style.color = getRandomColor();
    element.style.fontSize = '12px';
    element.style.fontFamily = fonts[getRandomInt(0, fonts.length - 1)];
    // Set a random word as the text content of the element
    element.innerText = words[getRandomInt(0, words.length - 1)];
    return element;
}
// Function to create a random number of elements and add them to the document body
function createRandomElements() {
    // Get a random number of elements to create (between 5 and 1000)
    const numElements = getRandomInt(5, 1000);
    // Loop to create and append each element
    for (let i = 0; i < numElements; i++) {
        const randomElement = createRandomElement();
        document.body.appendChild(randomElement);
    }
}
document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    let target = _event.target;
    //if (target == document.body) return;
    target.textContent = "World";
    target.style.backgroundColor = getRandomColor();
    console.log(_event.currentTarget);
}
document.body.addEventListener("dblclick", dblClick);
function dblClick(_event) {
    let dbltarget = _event.target;
    if (dbltarget == document.body)
        return;
    dbltarget.style.left = `${getRandomInt(0, window.innerWidth - parseInt(dbltarget.style.width))}px`;
    dbltarget.style.top = `${getRandomInt(0, window.innerHeight - parseInt(dbltarget.style.height))}px`;
    console.log(_event.currentTarget);
}
// When the window loads, create the random elements
window.onload = () => {
    createRandomElements();
};
