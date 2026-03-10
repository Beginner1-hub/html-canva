export default function createFooter() {

    const footer = document.createElement("footer");

    const link = document.createElement("a");

    link.href = "https://metmuseum.github.io/";

    link.textContent = "Met Museum API";

    footer.append(link);

    return footer;
}