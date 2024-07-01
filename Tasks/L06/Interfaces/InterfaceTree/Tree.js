"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let Tree1 = {
    TreeType: "Spruce",
    PositionX: 500,
    PositionY: 200,
    SizeX: 10,
    SizeY: 500,
    ColorLeafes: "green",
    ColorStem: "brown",
    ColorNeedles: "none",
    leafes: false,
    needles: true,
};
let Tree2 = {
    TreeType: "Oak",
    PositionX: 200,
    PositionY: 200,
    SizeX: 10,
    SizeY: 500,
    ColorLeafes: "none",
    ColorNeedles: "green",
    ColorStem: "brown",
    leafes: true,
    needles: false,
};
let Trees = [Tree1, Tree2];
function TreeInfo(Tree) {
    console.log(Tree.TreeType, "has leafes?", Tree.leafes, "has?.", Tree.needles, "The tree has a size of", Tree.SizeX, Tree.SizeY);
}
for (let i = 0; i < Trees.length; i++) {
    TreeInfo(Trees[i]);
}
let pathTree = new Path2D;
pathTree.rect(Tree1.PositionX, Tree1.PositionY, Tree1.SizeX, Tree1.SizeY);
ctx.fillStyle = Tree1.ColorStem;
ctx.fill(pathTree);
let pathLeaves = new Path2D;
pathLeaves.ellipse(Tree1.PositionX, Tree1.PositionY, 50, 30, 12.5, 0, Math.PI * 2);
ctx.fillStyle = Tree1.ColorLeafes;
ctx.fill(pathLeaves);
for (let i = 0; i < 10; i++) {
    let pathLeaves = new Path2D;
    pathLeaves.ellipse(Tree1.PositionX + Math.random() * 50 - Math.random() * 50, Tree1.PositionY + Math.random() * 50, 50, 30, 12.5, 0, Math.PI * 2);
    ctx.fillStyle = Tree1.ColorLeafes;
    ctx.fill(pathLeaves);
}
