const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface TreeData {
    TreeType: string,
    PositionX: number,
    PositionY: number,
    SizeX: number,
    SizeY: number,
    ColorLeafes: string,
    ColorNeedles: string,
    ColorStem: string,
    leafes: boolean,
    needles: boolean,

}

let Tree1: TreeData = {
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

}

let Tree2: TreeData = {
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
}

let Trees: TreeData[] = [Tree1, Tree2];

function TreeInfo(Tree: TreeData): void {
    console.log(Tree.TreeType, "has leafes?", Tree.leafes, "has?.", Tree.needles, "The tree has a size of", Tree.SizeX, Tree.SizeY);

}



for(let i: number = 0; i < Trees.length; i++){
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

for(let i: number = 0; i < 10; i++) {
    let pathLeaves = new Path2D;
pathLeaves.ellipse(Tree1.PositionX + Math.random()* 50 - Math.random() * 50, Tree1.PositionY + Math.random() * 50, 50, 30, 12.5, 0, Math.PI * 2);
ctx.fillStyle = Tree1.ColorLeafes;
ctx.fill(pathLeaves);

}