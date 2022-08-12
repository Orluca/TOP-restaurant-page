import { header } from "./modules/header.js";
import { footer } from "./modules/footer.js";
import { home } from "./modules/home";

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(header());
  content.appendChild(home());
  content.appendChild(footer());
}

buildWebsite();
