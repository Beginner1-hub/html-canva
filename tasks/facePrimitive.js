export default function face(ctx, radius) {

    ctx.save();

    ctx.strokeStyle = "black";
    ctx.lineWidth = radius / 40;
    ctx.fillStyle = "yellow";

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.75, 0, Math.PI);
    ctx.stroke();

    const offset = radius / 3;
    const eyeSize = radius * 0.2;

    for (const side of [-1, 1]) {

        ctx.save();
        ctx.translate(side * offset, -radius / 3);

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ellipse(0, 0, eyeSize, eyeSize * 1.3, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, eyeSize * 0.3, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }

    ctx.restore();
}