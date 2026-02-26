export function drawRectangles(ctx, canvas) {

    const margin = 50;
    const height = canvas.height - margin * 2;
    const width = (canvas.width - margin * 3) / 2;

    ctx.beginPath();
    ctx.rect(margin, margin, width, height);
    ctx.rect(margin * 2 + width, margin, width, height);

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    ctx.fill();
    ctx.stroke();
}