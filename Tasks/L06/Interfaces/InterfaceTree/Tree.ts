const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

interface TreeData {
    TreeType: string,
    PositionX: number,
    PositionY: number,
    Size: number,
    Color: string,
    leafes: boolean,
    needles: boolean,

}

let Tree1: TreeData = {
    TreeType: "Spruce",
    PositionX: 400,
    PositionY: 400,
    Size: 400,
    Color: "Dark green",
    leafes: false,
    needles: true,

}

let Tree2: TreeData = {
    TreeType: "Oak",
    PositionX: 200,
    PositionY: 200,
    Size: 300,
    Color: "green",
    leafes: true,
    needles: false,
}

let Trees: TreeData[] = [Tree1, Tree2];

function TreeInfo(Tree: TreeData): void {
    console.log(Tree.TreeType, "has leafes?", Tree.leafes, "has?.", Tree.needles, "The tree has a size of", Tree.Size);

}

for(let i: number = 0; i < Trees.length; i++){
    TreeInfo(Trees[i]);
}