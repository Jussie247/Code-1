"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let trees = [];
for (let t = 0; t < 7; t++) {
    trees.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 50 + 500,
        scaleX: 1,
        scaleY: 1,
        leaves: Math.random() * 15 + 15,
        color: "#80755a",
        hasLeaves: true,
    });
}
function drawTree() {
    for (let i = 0; i < trees.length; i++) {
        let pathTree = new Path2D();
        pathTree.rect(trees[i].positionX, trees[i].positionY, trees[i].scaleX, 500 * trees[i].scaleY);
        ctx.fillStyle = trees[i].color;
        ctx.fill(pathTree);
        for (let l = 0; l < trees[i].leaves; l++) {
            let pathLeaf = new Path2D;
            pathLeaf.ellipse(trees[i].positionX + (Math.random() * 100) - (Math.random() * 100), trees[i].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "#507d2a";
            ctx.fill(pathLeaf);
        }
    }
}
drawTree();
