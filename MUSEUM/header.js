export default function createHeader(mainHeading) {

    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.textContent = mainHeading;

    const section = document.createElement("section");
    section.id = "search";

    const label = document.createElement("label");
    label.textContent = "search";

    const input = document.createElement("input");
    input.type = "search";
    input.id = "query";
    input.placeholder = "e.g. sunflowers";

    label.htmlFor = input.id;

    section.append(label, input);

    header.append(h1, section);

    return header;
}