function welcomeHeadline() {
  const headline = document.createElement("h2");
  headline.textContent = "Welcome!";

  return headline;
}

function welcomeText() {
  const welcomeText = document.createElement("p");
  welcomeText.textContent =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  return welcomeText;
}

function home() {
  const home = document.createElement("div");

  home.appendChild(welcomeHeadline());
  home.appendChild(welcomeText());

  return home;
}

export { home };
