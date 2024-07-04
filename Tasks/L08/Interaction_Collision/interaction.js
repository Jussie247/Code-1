"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.radius = 20;
        this.color = "red";
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
