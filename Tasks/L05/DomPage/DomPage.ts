let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red"


let i:number = 0;
do {
    i++;
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red"
    console.log(i);
} while (i < 10)
