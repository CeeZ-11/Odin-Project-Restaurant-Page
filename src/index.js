import { Home } from "./components/home.js";
import { Menu } from "./components/menu.js";
import { About } from "./components/about.j";

function createNavButtons() {
  const homebutton = document.createElement("button");
  homebutton.textContent = "Home";
  homebutton.addEventListener("click", () => {
    const home = new Home();
    home.createContent();
  });

  const menubutton = document.createElement("button");
  menubutton.textContent = "Menu";
  menubutton.addEventListener("click", () => {
    const menu = new Menu();
    menu.createContent();
  });

  const aboutubutton = document.createElement("button");
  aboutubutton.textContent = "About";
  aboutubutton.addEventListener("click", () => {
    const about = new About();
    about.createContent();
  });

  const nav = document.querySelector("nav");
  if (nav) {
    nav.appendChild(homebutton);
    nav.appendChild(menubutton);
    nav.appendChild(aboutubutton);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createNavButtons();
  const home = new Home();
  home.createContent();
});
