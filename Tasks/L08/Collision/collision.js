"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//Ensure we have a valid context to draw on
if (!ctx) {
    throw new Error("could not get canvas context");
}
let score = 0;
//Target class to handle the properties and behaviour of the traget
class Target {
    constructor() {
        this.radius = 20;
        //randomly place the target within canvas
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
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
}
