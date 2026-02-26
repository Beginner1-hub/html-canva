export function drawClosedPath(ctx, canvas) {

    const m = 100;

    ctx.beginPath();
    ctx.moveTo(m, m);
    ctx.lineTo(canvas.width - m, m);
    ctx.lineTo(canvas.width - m, canvas.height - m);
    ctx.lineTo(m, canvas.height - m);
    ctx.closePath();

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;

    ctx.fill();
    ctx.stroke();
}