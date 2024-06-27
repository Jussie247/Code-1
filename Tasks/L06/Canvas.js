"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
// Draw a rectangle with stroke
ctx.rect(10, 10, 100, 100);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
// Draw a filled rectangle using Path2D
let path = new Path2D();
path.rect(20, 20, 80, 80);
ctx.fillStyle = "rgb(255, 0, 255)";
ctx.fill(path);
// Draw a blue filled rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 130, 100, 50);
// Draw a black line
ctx.beginPath();
ctx.moveTo(130, 130);
ctx.lineTo(230, 180);
ctx.strokeStyle = 'black';
ctx.stroke();
// Draw a green arc (circle)
ctx.beginPath();
ctx.arc(200, 55, 50, 0, Math.PI * 2);
ctx.strokeStyle = 'green';
ctx.stroke();
// Draw a red ellipse
ctx.beginPath();
ctx.ellipse(200, 55, 50, 15, 2, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
// Draw a gradient rectangle
const gradient = ctx.createLinearGradient(50, 250, 110, 250);
gradient.addColorStop(0, 'purple');
gradient.addColorStop(1, 'orange');
ctx.fillStyle = gradient;
ctx.fillRect(10, 200, 200, 50);
