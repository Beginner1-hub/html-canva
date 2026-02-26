export function drawArcs(ctx, canvas) {

    const x1 = canvas.width / 3;
    const x2 = x1 * 2;
    const y = canvas.height / 2;
    const r = Math.min(canvas.width, canvas.height) / 6;

    ctx.fillStyle = "lightblue";
    ctx.strokeStyle = "blue";

    ctx.beginPath();
    ctx.arc(x1, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x2, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}