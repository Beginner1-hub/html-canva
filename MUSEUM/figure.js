export default function createFigure(object) {

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.loading = "lazy";

    img.src = object.primaryImageSmall;
    img.alt = object.title;

    const caption = document.createElement("figcaption");

    caption.textContent = object.title;

    figure.append(img, caption);

    return figure;
}