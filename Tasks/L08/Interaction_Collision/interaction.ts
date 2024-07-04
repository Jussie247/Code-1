const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

class Circle {
    x: number;
    y: number;
    vy: number;
    radius: number;
    color: string;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.vy = 0;
            this.radius = 20;
            this.color = "red";

        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }



    }