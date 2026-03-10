import createHeader from "./header.js";
import createFooter from "./footer.js";
import { search } from "./articles.js";

const header = createHeader("Metropolitan Museum of Art Collection");
const main = document.createElement("main");
const footer = createFooter();

document.body.append(header, main, footer);

document.body.addEventListener("search", async (ev) => {

    main.classList.add("loading");

    clear();

    const articles = await search(ev.target.value);

    main.dataset.message =
        `found ${articles.length} results for '${ev.target.value}'`;

    main.append(...articles);

    main.classList.remove("loading");
});

function clear() {
    while (main.firstChild) {
        main.firstChild.remove();
    }
}