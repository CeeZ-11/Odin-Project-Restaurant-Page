export class About {
  constructor() {}

  createContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Learn more about Le Kalan An Di Re Sa Negros and our story...";

    content.appendChild(heading);
    content.appendChild(paragraph);
  }
}
