import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

function showMenu() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(menu());
}

function showHome() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(home());
}

function showContact() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(contact());
}

function headline() {
  const headline = document.createElement("h1");
  headline.textContent = "Pizzeria Amalfi";

  return headline;
}

function homeBtn() {
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  homeBtn.addEventListener("click", showHome);

  return homeBtn;
}

function menuBtn() {
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";

  menuBtn.addEventListener("click", showMenu);

  return menuBtn;
}

function contactBtn() {
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  contactBtn.addEventListener("click", showContact);

  return contactBtn;
}

function navBar() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  navBar.appendChild(homeBtn());
  navBar.appendChild(menuBtn());
  navBar.appendChild(contactBtn());

  return navBar;
}

function header() {
  const header = document.createElement("div");

  header.classList.add("header");

  header.appendChild(headline());
  header.appendChild(navBar());

  return header;
}

export { header, showHome };
