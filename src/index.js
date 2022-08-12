import { home } from "./modules/home.js";

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(home());
}

buildWebsite();
