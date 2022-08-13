import { header } from "./modules/header.js";
import { footer } from "./modules/footer.js";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu";
import { contact } from "./modules/contact";

function buildWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(header());
  //   content.appendChild(home());
  //   content.appendChild(contact());
  content.appendChild(menu());
  content.appendChild(footer());
}

buildWebsite();
