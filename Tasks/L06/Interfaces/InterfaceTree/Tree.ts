const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface TreeData {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    leaves: number;
    color: string;
    hasLeaves: boolean;
}

let tree: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree2: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree3: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}


let tree4: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}


let tree5: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}


let tree6: TreeData = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 50,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let trees: TreeData[] = [tree, tree2, tree3, tree4, tree5, tree6];

function drawTree(): void {
    for(let i: number = 0; i < trees.length; i++){
        let pathTree = new Path2D();
        pathTree.rect(trees[i].positionX, trees[i].positionY, trees[i].scaleX, 500 * trees[i].scaleY);
        ctx.fillStyle = tree.color;
        ctx.fill(pathTree);

        for (let l: number = 0; l < trees[i].leaves; l++) {
            let pathLeaf = new Path2D;
            pathLeaf.ellipse(trees[i].positionX + (Math.random() * 100) - (Math.random() * 100), trees[i].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI)
            ctx.fillStyle = "#507d2a";
            ctx.fill(pathLeaf);

        }
    }
}
    drawTree();