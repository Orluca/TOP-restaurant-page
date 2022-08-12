import { header } from "./modules/header.js";
import { footer } from "./modules/footer.js";

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(header());
  content.appendChild(footer());
}

buildWebsite();
