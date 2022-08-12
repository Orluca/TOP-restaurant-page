function githubLink() {
  const githubLink = document.createElement("a");
  githubLink.innerHTML = `<i class="fa-brands fa-github"></i>`;
  githubLink.href = "https://github.com/Orluca/TOP-restaurant-page";
  githubLink.target = "_blank";

  githubLink.classList.add("github-link");

  return githubLink;
}

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  footer.appendChild(githubLink());

  return footer;
}

export { footer };
