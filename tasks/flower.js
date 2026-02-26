import face from "./facePrimitive.js";

export function drawFlower(ctx, canvas) {

    const r = Math.min(canvas.width, canvas.height) / 4;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    face(ctx, r);

    for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.rotate(i * Math.PI / 4);
        ctx.translate(0, -r * 1.5);
        face(ctx, r / 2);
        ctx.restore();
    }

    ctx.restore();
}