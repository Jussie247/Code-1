const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

//creating Data interface
interface TreeData {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    leaves: number;
    color: string;
    hasLeaves: boolean;
}

interface CloudData {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    cloudParts: number,
    color: string;
}

// Setting up Arrays 
let trees: TreeData[] = [];
let clouds: CloudData[] = [];

for(let t: number = 0; t < 7; t++){
    trees.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 50 + 500,
        scaleX: 10,
        scaleY: 1,
        leaves: Math.random() * 15 + 15,
        color: "#80755a",
        hasLeaves: true,
    })
    }
for(let c: number = 0; c  < 5; c++){
    clouds.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 50 + 150,
        scaleX: 1,
        scaleY: 1,
        cloudParts: Math.random() * 15 + 15,
        color: "#808080",
    })
}

// Drawing the Tree
function drawTree(): void {
    for(let i: number = 0; i < trees.length; i++){
        let pathTree = new Path2D();
        pathTree.rect(trees[i].positionX, trees[i].positionY, trees[i].scaleX, 500 * trees[i].scaleY);
        ctx.fillStyle = trees[i].color;
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

    // Drawing the Clouds
function drawClouds(): void {

    for(let d: number = 0; d < clouds.length; d++) {

    


   
    for(let i: number = 0; i < clouds[d].cloudParts; i++) {
        let pathClouds = new Path2D;
        pathClouds.ellipse(clouds[d].positionX + (Math.random() * 100) - (Math.random() * 100), clouds[d].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 +25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI) 
        ctx.fillStyle = clouds[d].color;
        ctx.fill(pathClouds);
        }
    }
}
    drawClouds();