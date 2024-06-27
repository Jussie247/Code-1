const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.rect(10, 10, 100, 100);
ctx.fillStyle = "rgb(255, 0, 255)";
//ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();



let path: Path2D = new Path2D();
ctx.rect(200, 200, 50, 50);
ctx.fill(path);