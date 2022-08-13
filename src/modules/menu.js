class menuItem {
  constructor(name, info, price) {
    this.name = name;
    this.info = info;
    this.price = price;
  }

  createHTML() {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemLeft = document.createElement("div");
    menuItemLeft.classList.add("menu-item-left");

    const name = document.createElement("h3");
    name.textContent = this.name;
    name.classList.add("menu-item-name");

    const info = document.createElement("p");
    info.textContent = this.info;
    info.classList.add("menu-item-info");

    const price = document.createElement("p");
    price.textContent = this.price;
    price.classList.add("menu-item-price");

    menuItemLeft.appendChild(name);
    menuItemLeft.appendChild(info);
    menuItem.appendChild(menuItemLeft);
    menuItem.appendChild(price);

    return menuItem;
  }
}

function headline() {
  const headline = document.createElement("h2");
  headline.textContent = "Menu";
  headline.classList.add("menu-headline");

  return headline;
}

function pizzaMagherita() {
  const item = new menuItem("Pizza Magherita", "Tomatensoße, Käse", "7,00€");
  return item.createHTML();
}

function pizzaHawaii() {
  const item = new menuItem("Pizza Hawaii", "Tomatensoße, Schinken, Ananas, Käse", "8,80€");
  return item.createHTML();
}

function pizzaCapriccio() {
  const item = new menuItem("Pizza Capriccio", "Tomatensoße, Käse, Zwiebeln, Thunfisch, Champignon, Paprika, Schinken", "9,90€");
  return item.createHTML();
}

function pizzaTonno() {
  const item = new menuItem("Pizza Tonno e Cipolla", "Tomatensoße, Käse, Zwiebeln, Thunfisch", "9,50€");
  return item.createHTML();
}

function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(headline());
  menu.appendChild(pizzaMagherita());
  menu.appendChild(pizzaHawaii());
  menu.appendChild(pizzaCapriccio());
  menu.appendChild(pizzaTonno());

  return menu;
}

export { menu };
