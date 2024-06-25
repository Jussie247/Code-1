let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red"



for(let i: number = 0; i < 10; i++) {
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red"

    newSpan.addEventListener("click" , hndClick);

}

function hndClick(_event: Event): void {
    console.log(_event)
}
