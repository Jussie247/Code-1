"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let Tree1 = {
    TreeType: "Spruce",
    PositionX: 400,
    PositionY: 400,
    Size: 400,
    Color: "Dark green",
    leafes: false,
    needles: true,
};
let Tree2 = {
    TreeType: "Oak",
    PositionX: 200,
    PositionY: 200,
    Size: 300,
    Color: "green",
    leafes: true,
    needles: false,
};
let Trees = [Tree1, Tree2];
function TreeInfo(Tree) {
    console.log(Tree.TreeType, "has leafes?", Tree.leafes, "has?.", Tree.needles, "The tree has a size of", Tree.Size);
}
for (let i = 0; i < Trees.length; i++) {
    TreeInfo(Trees[i]);
}
