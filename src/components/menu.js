export class Menu {
  constructor() {}

  createContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const menuItems = ["Item 1", "Item 2", "Item 3"];
    const list = document.createElement("ul");
    list.style.listStyleType = "none";
    menuItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(list);
  }
}
