
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

//Ensure we have a valid context to draw on
if (!ctx) {
    throw new Error("could not get canvas context");

}

let score = 0;

function drawScore(score: number): void {
    ctx.textBaseline = "hanging";
    ctx.font = "48px sans-serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 7, 7);
    

}

//Target class to handle the properties and behaviour of the traget
class Target {
    x: number;
    y: number;
    radius: number;
    dx: number; // change in x cord per frame
    dy: number; //change in y cord per frame
    color: string;


    constructor() {
        this.radius = 20;
    //randomly place the target within canvas
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas.height- this.radius * 2) + this.radius;

    //raandomly set the velocities making sure they can move in both directions
        this.dx = (Math.random() - 0.5) * 4;
        this.dy = (Math.random() - 0.5) * 4;
    
    this.color = this.getRandomColor();


}


getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//draw the target
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    //update the targets position and handly wall collision
    update() {
        this.x += this.dx 
        this.y += this.dy

        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }

        if(this.y + this.radius > canvas.height || this.y -this.radius < 0) {
            this.dy = -this.dy
        }

        this.draw();
        
        
    }

    // Check if a point (mouse click) is within the target's path
    isHit(mouseX: number, mouseY: number): boolean {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        return ctx!.isPointInPath(mouseX, mouseY);
    }
}

let target = new Target();

// Main game loop to update and render the scene 
function gameLoop() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);  
    target.update(); 
    drawScore(score);
    requestAnimationFrame(gameLoop); 
}
// Handle canvas click events to detect hits on the target
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the click is within the target's path
    if (target.isHit(mouseX, mouseY)) {
        score += 1;
        console.log('Score:', score);
        target = new Target();
    }
});


gameLoop();  // Start the game loop
