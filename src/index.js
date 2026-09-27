import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");

function showTab(tabName) {
    content.replaceChildren(tabName());
}

document.querySelector(".home-button").addEventListener("click", () => showTab(loadHome));
document.querySelector(".menu-button").addEventListener("click", () => showTab(loadMenu));
document.querySelector(".about-button").addEventListener("click", () => showTab(loadAbout));

showTab(loadHome); // Load the home tab by default when the page is first loaded