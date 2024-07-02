const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;



// Moon
function drawMoon(){
    for(let m: number = 0; m < 1; m++){
        let pathMoon = new Path2D();
        let size = Math.random() * 5 + 50;
        pathMoon.ellipse(Math.random() * 50 + 200, Math.random() * 50 + 100, size, size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffe0";
        ctx.fill(pathMoon); 
    }
}
drawMoon();

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
    cloudParts: number;
    color: string;
}

interface FogData {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    FogParts: number;
    color: string;
}

interface BeeData {
 
}

// Setting up Arrays 
let trees: TreeData[] = [];
let clouds: CloudData[] = [];
let fog: FogData[] = [];

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
        color: "#5A5A5A",
    })
}

for(let f: number = 0; f < 100; f++){
    fog.push({
       positionX: Math.random() * 1920,
       positionY: Math.random() * 50 + 800,
       scaleX: 1,
       scaleY: 1,
       FogParts: Math.random() * 15 +15,
       color: "#ffffff03" 
    })
} 

// Drawing fog
function drawFog(): void {

    for(let fg: number = 0; fg < fog.length; fg++) {

   
        for(let i: number = 0; i < fog[fg].FogParts; i++) {
        let pathFog = new Path2D;
        pathFog.ellipse(fog[fg].positionX + (Math.random() * 100) - (Math.random() * 100), fog[fg].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 +25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI) 
        ctx.fillStyle = fog[fg].color;
        ctx.fill(pathFog);
        }
    }
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

  
    drawTree();
    drawClouds();
    drawFog();