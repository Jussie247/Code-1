
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

//Ensure we have a valid context to draw on
if (!ctx) {
    throw new Error("could not get canvas context");

}

let score = 0

//Target class to handle the properties and behaviour of the traget
class Target {
    x: number;
    y:number;
    radius: number;
    dx: number; // change in x cord per frame
    dy: number; //change in y cord per frame


constructor() {
    this.radius = 20;
    //randomly place the target within canvas
    this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas.height- this.radius * 2) + this.radius;

    //raandomly set the velocities making sure they can move in both directions
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;


}


}

