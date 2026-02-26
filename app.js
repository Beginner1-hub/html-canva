import { setupCanvas } from "./canvas.js";
import { drawLine } from "./tasks/line.js";
import { drawClosedPath } from "./tasks/closedPath.js";
import { drawRectangles } from "./tasks/rectangles.js";
import { drawArcs } from "./tasks/arcs.js";
import { drawFlower } from "./tasks/flower.js";
import { drawGrid } from "./tasks/grid.js";

const { canvas, ctx } = setupCanvas("canvas");
const selector = document.getElementById("taskSelector");

function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (selector.value) {

        case "line":
            drawLine(ctx, canvas);
            break;

        case "closed":
            drawClosedPath(ctx, canvas);
            break;

        case "rectangles":
            drawRectangles(ctx, canvas);
            break;

        case "arcs":
            drawArcs(ctx, canvas);
            break;

        case "flower":
            drawFlower(ctx, canvas);
            break;

        case "grid":
            drawGrid(ctx, canvas);
            break;
    }
}

selector.addEventListener("change", render);
render();