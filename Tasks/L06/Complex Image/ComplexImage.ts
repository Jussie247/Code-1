const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;





//creating Data interface
interface MoonData {
    positionX: number,
    positionY: number,
    size: number,
}



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
    positionX: number;
    positionY: number;
    width: number;
    height: number;
    color: string;
}

interface StarData {
    positionX: number;
    positionY: number;
    size: number;
}

// Setting up Arrays 
let trees: TreeData[] = [];
let clouds: CloudData[] = [];
let fog: FogData[] = [];
let bees: BeeData[] = [];
let Moon: MoonData[] = [];
let stars: StarData[] = [];



Moon.push({
    positionX: Math.random() * 50 + 200,
    positionY: Math.random() * 50 + 100,
    size: Math.random() * 5 + 50,

})




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
        color: "#94949410",
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

// Adding bees at tree height
for(let bee: number = 0; bee < 5; bee++){
bees.push({
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 450, // Adjust to the height of the tree leaves
    width: 40, 
    height: 20,
    color: "#FFD700",
});
}

// Adding star data
for (let s: number = 0; s < 100; s++) {
    stars.push({
        positionX: Math.random() * canvas.width,
        positionY: Math.random() * canvas.height * 0.35, // Stars in the upper half of the canvas
        size: Math.random() * 2 + 1,
    });
}

// Moon
function drawMoon(){
    for(let m: number = 0; m < 1; m++){
        let pathMoon = new Path2D();
        pathMoon.ellipse(Moon[m].positionX, Moon[m].positionY, Moon[m].size, Moon[m].size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffe0";
        ctx.fill(pathMoon); 
    }
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

  
 // Drawing the Bees
function drawBees(): void {
    for(let b: number = 0; b < bees.length; b++) {
        let bee = bees[b];
        
        // Draw bee body
        ctx.fillStyle = bee.color;
        ctx.fillRect(bee.positionX, bee.positionY, bee.width, bee.height);
        
        // Draw bee stripes
        ctx.fillStyle = "#000000";
        ctx.fillRect(bee.positionX + bee.width / 4, bee.positionY, bee.width / 8, bee.height);
        ctx.fillRect(bee.positionX + (bee.width / 2), bee.positionY, bee.width / 8, bee.height);
        ctx.fillRect(bee.positionX + (3 * bee.width / 4), bee.positionY, bee.width / 8, bee.height);

        // Draw bee stinger
        ctx.beginPath();
        ctx.moveTo(bee.positionX + bee.width, bee.positionY + bee.height / 2);
        ctx.lineTo(bee.positionX + bee.width + 10, bee.positionY + bee.height / 2 - 5);
        ctx.lineTo(bee.positionX + bee.width + 10, bee.positionY + bee.height / 2 + 5);
        ctx.closePath();
        ctx.fill();
        
        // Draw bee eye
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(bee.positionX + bee.width / 8, bee.positionY + bee.height / 4, bee.height / 6, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Drawing the Stars
function drawStars(): void {
    for (let s: number = 0; s < stars.length; s++) {
        let star = stars[s];
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.positionX, star.positionY, star.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

drawMoon();
drawTree();
drawClouds();
drawFog();
// making "screenshot" of the static objects
let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
drawStars();
drawBees();


// function for the bee "movement"
const speed: number = 0.5;
function updateBee(){
    for (let i: number = 0; i < bees.length; i++){
        bees[i].positionX -= speed;
        if(bees[i].positionX < 0) {
            bees[i].positionX = canvas.width;
        }
    }
}

const speedStar: number = 0.1;
function updateStar(){
    for (let i: number = 0; i < stars.length; i++){
        stars[i].positionX -= speedStar;
        if(stars[i].positionX < 0) {
            stars[i].positionX = canvas.width;
        }
    }
}




// animation
function animationFrame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
    updateStar();
    drawStars();
    updateBee();
    drawBees();
    
    
    requestAnimationFrame(animationFrame);
}

    requestAnimationFrame(animationFrame);

// let intervalId: number = setInterval(moveEverySecond, 40);
// function moveEverySecond(){
//     ctx.clearRect(0 ,0, canvas.width, canvas.height);
//     updateBee();
//     drawBees();
// }