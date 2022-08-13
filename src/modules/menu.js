class menuItem {
  constructor(name, info, price) {
    this.name = name;
    this.info = info;
    this.price = price;
  }

  createHTML() {
    const menuItem = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = this.name;

    const info = document.createElement("p");
    info.textContent = this.info;

    const price = document.createElement("p");
    price.textContent = this.price;

    menuItem.appendChild(name);
    menuItem.appendChild(info);
    menuItem.appendChild(price);

    return menuItem;
  }
}

function headline() {
  const headline = document.createElement("h2");
  headline.textContent = "Menu";

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

function menu() {
  const menu = document.createElement("div");

  menu.appendChild(headline());
  menu.appendChild(pizzaMagherita());
  menu.appendChild(pizzaHawaii());

  return menu;
}

export { menu };
