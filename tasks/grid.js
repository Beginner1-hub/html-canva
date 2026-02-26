import face from "./facePrimitive.js";

/**
 * Draw a 5×5 grid of faces
 */
export function drawGrid(ctx, canvas) {

    const size = Math.min(canvas.width, canvas.height);
    const radius = size / 10;

    ctx.save();

    // Center square drawing area
    ctx.translate(
        (canvas.width - size) / 2,
        (canvas.height - size) / 2
    );

    ctx.translate(radius, radius);

    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {

            ctx.save();

            ctx.translate(
                2 * x * radius,
                2 * y * radius
            );

            face(ctx, radius);

            ctx.restore();
        }
    }

    ctx.restore();
}