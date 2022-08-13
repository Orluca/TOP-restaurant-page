function headline() {
  const headline = document.createElement("h2");
  headline.textContent = "Menu";

  return headline;
}

function menuItem01() {
  const menuItem01 = document.createElement("p");
  menuItem01.textContent = "Spaghetti Bolognese";
  return menuItem01;
}

function menuItem02() {
  const menuItem02 = document.createElement("p");
  menuItem02.textContent = "Pizza Hawaii";
  return menuItem02;
}

function menu() {
  const menu = document.createElement("div");

  menu.appendChild(headline());
  menu.appendChild(menuItem01());
  menu.appendChild(menuItem02());

  return menu;
}

export { menu };
