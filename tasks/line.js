export function drawLine(ctx, canvas) {

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
}