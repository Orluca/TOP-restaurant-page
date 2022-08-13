function contactHeadline() {
  const headline = document.createElement("h2");
  headline.textContent = "Contact";

  return headline;
}

function address() {
  const address = document.createElement("p");
  address.textContent = "Address: blablabla";

  return address;
}

function contact() {
  const contact = document.createElement("div");

  contact.appendChild(contactHeadline());
  contact.appendChild(address());

  return contact;
}

export { contact };
