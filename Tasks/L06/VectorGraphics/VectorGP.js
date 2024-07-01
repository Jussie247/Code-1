"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
if (ctx) {
    // Draw the coordinate system 
    function drawCoordinateSystem(ctx, originX, originY, notchDistance, axisLength) {
        // Draw x and Y axes 
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX + axisLength, originY);
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX, originY + axisLength);
        ctx.stroke();
        // Draw notcheson X and Y axes 
        for (let i = 0; i <= axisLength; i += notchDistance) {
            ctx.moveTo(originX + i, originY - 5);
            ctx.lineTo(originX + i, originY + 5);
            ctx.moveTo(originX - 5, originY + i);
            ctx.lineTo(originX + 5, originY + i);
            ctx.stroke();
        }
    }
    // Draw the coordinate sytsem at (0,0)
    drawCoordinateSystem(ctx, 0, 0, 10, 200);
    ctx.beginPath();
    ctx.translate(300, 300);
    ctx.scale(1, 1);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(0.75, 0.75);
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
        ctx.fillRect(200, 50, 50, 100);
        ctx.rotate(25 * Math.PI / 180);
    }
}
