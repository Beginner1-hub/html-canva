export function setupCanvas(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 50;
    }

    resize();
    window.addEventListener("resize", resize);

    return { canvas, ctx };
}