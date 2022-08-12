function headline() {
  const headline = document.createElement("h1");

  headline.textContent = "Restaurant Name";

  return headline;
}

function homeBtn() {
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  return homeBtn;
}

function menuBtn() {
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";

  return menuBtn;
}

function contactBtn() {
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

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

export { header };
