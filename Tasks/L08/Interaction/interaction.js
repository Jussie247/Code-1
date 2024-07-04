"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0.5;
        this.vy = 0;
        this.radius = Math.random() * 40 + 10; // Random radius between 10 and 50
        this.color = this.getRandomColor();
        this.bounceCount = 0; // Initially no bounces
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
        }
        else {
            if (this.bounceCount < 2) {
                this.vy *= -0.6; // Bounce effect (reverse direction with reduced velocity)
                this.y = canvas.height - this.radius; // Ensure shape is above floor
                this.bounceCount++; // Increase bounce count
            }
            else {
                this.vy = 0; // Stop movement after second bounce
                this.x -= this.vx;
            }
        }
        this.y += this.vy; // Update vertical position
        this.draw(); // Draw the circle
        if (this.x < 0) {
            this.x = canvas.width;
        }
    }
}
class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.size = Math.random() * 30 + 10; // Random size between 10 and 40
        this.color = this.getRandomColor(); // Assign random color
        this.bounceCount = 0; // Initially no bounces
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
        }
        else {
            if (this.bounceCount < 2) {
                this.vy *= -0.6; // Bounce effect (reverse direction with reduced velocity)
                this.y = canvas.height - this.size; // Ensure shape is above floor
                this.bounceCount++; // Increase bounce count
            }
            else {
                this.vy = 0; // Stop movement after second bounce
            }
        }
        // No horizontal movement for squares
        this.y += this.vy; // Update vertical position
        this.draw(); // Draw the square
    }
}
let shapes = [];
function createRandomShape(x, y) {
    if (Math.random() < 0.5) {
        return new Circle(x, y);
    }
    else {
        return new Square(x, y);
    }
}
canvas.addEventListener("click", (event) => {
    const shape = createRandomShape(event.offsetX, event.offsetY);
    shapes.push(shape);
});
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => shape.update()); // Update each shape
    requestAnimationFrame(animate);
}
animate();
