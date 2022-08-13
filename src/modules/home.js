function welcomeHeadline() {
  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("welcome-header");

  const headlinePart1 = document.createElement("h2");
  headlinePart1.textContent = "Herzlich Willkommen";
  headlinePart1.classList.add("welcome-header-pt1");

  const headlinePart2 = document.createElement("h2");
  headlinePart2.textContent = "bei der";
  headlinePart2.classList.add("welcome-header-pt2");

  const headlinePart3 = document.createElement("h2");
  headlinePart3.textContent = "Pizzeria Amalfi";
  headlinePart3.classList.add("welcome-header-pt3");

  headlineContainer.appendChild(headlinePart1);
  headlineContainer.appendChild(headlinePart2);
  headlineContainer.appendChild(headlinePart3);

  return headlineContainer;
}

function welcomeText() {
  const welcomeText = document.createElement("p");
  welcomeText.textContent =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  return welcomeText;
}

function home() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(welcomeHeadline());
  home.appendChild(welcomeText());

  return home;
}

export { home };
