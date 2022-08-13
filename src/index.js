import { header } from "./modules/header.js";
import { footer } from "./modules/footer.js";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu";
import { contact } from "./modules/contact";

function main() {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
}

function changeContent() {
  //   const main = main();
  //   main.innerHTML = "";
  //   main.appendChild(home());
}

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(header());
  //   content.appendChild(home());
  //   content.appendChild(contact());
  //   content.appendChild(menu());
  content.appendChild(main());
  content.appendChild(footer());

  changeContent();
}

buildWebsite();
