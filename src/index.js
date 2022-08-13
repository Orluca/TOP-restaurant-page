import { header, showHome } from "./modules/header.js";
import { footer } from "./modules/footer.js";

function main() {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
}

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());

  showHome();
}

buildWebsite();
