const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
    // Draw the coordinate system 
    function drawCoordinateSystem(ctx: CanvasRenderingContext2D, originX: number, originY: number, notchDistance: number, axisLength: number){
        // Draw x and Y axes 
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX + axisLength, originY);
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX, originY + axisLength);
        ctx.stroke();

        // Draw notcheson X and Y axes 
        for (let i = 0; i<= axisLength; i+= notchDistance) {
            ctx.moveTo(originX + i, originY - 5);
            ctx.lineTo(originX + i, originY + 5);
            ctx.moveTo(originX - 5, originY + i);
            ctx.lineTo(originX + 5, originY + i);
            ctx.stroke();
        }
    }
    // Draw the coordinate sytsem at (0,0)
    drawCoordinateSystem(ctx, 0, 0, 10, 200);
}