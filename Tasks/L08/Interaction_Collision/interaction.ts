const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

class Circle {
    x: number;
    y: number;
    vy: number;
    radius: number;
    color: string;
    isBouncing: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.radius = Math.random() * 40 + 10; // Random radius between 10 and 50
        this.color = this.getRandomColor();
        this.isBouncing = true; // Initially set to bounce

    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.y + this.radius < canvas.height) {
            this.vy += 0.5; // Gravity effect
        } else {
            if (this.isBouncing) {
                this.vy *= -0.6; // Bounce effect (reverse direction with reduced velocity)
                this.y = canvas.height - this.radius; // Ensure shape is above floor
                this.isBouncing = false; // Disable further bouncing
            } else {
                this.vy = 0; // Stop movement after bouncing
            }
        }
        this.y += this.vy; // Update position
        this.draw(); // Draw the circle
    }

}


class Square {
    x: number;
    y: number;
    vy: number;
    size: number;
    color: string;
    isBouncing: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.size = Math.random() * 30 + 10; // Random size between 10 and 40
        this.color = this.getRandomColor(); // Assign random color
        this.isBouncing = true; // Initially set to bounce
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.y + this.size < canvas.height) {
            this.vy += 0.5; // Gravity effect
        } else {
            if (this.isBouncing) {
                this.vy *= -0.6; // Bounce effect (reverse direction with reduced velocity)
                this.y = canvas.height - this.size; // Ensure shape is above floor
                this.isBouncing = false; // Disable further bouncing
            } else {
                this.vy = 0; // Stop movement after bouncing
            }
        }
        this.y += this.vy; // Update position
        this.draw(); // Draw the square
    }
}

let shapes: (Circle | Square)[] = [];

function createRandomShape(x: number, y: number): Circle | Square {
    const randomSize = Math.random() * 30 + 10;
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color

    if (Math.random() < 0.5) {
        return new Circle(x, y);
    } else {
        return new Square(x, y);
    }
}

canvas.addEventListener("click", (event: MouseEvent) => {
    const shape = createRandomShape(event.offsetX, event.offsetY);
    shapes.push(shape);
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => shape.update()); // Update each shape
    requestAnimationFrame(animate);
}

animate();
