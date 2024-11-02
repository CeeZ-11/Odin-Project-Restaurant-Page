import restauImage from "./img/restau.jpg";

//create nav buttons
const homebutton = document.createElement("button");
homebutton.textContent = "Home";

const menubutton = document.createElement("button");
menubutton.textContent = "Menu";

const aboutubutton = document.createElement("button");
aboutubutton.textContent = "About";

const nav = document.querySelector("nav");

if (nav) {
  nav.appendChild(homebutton);
  nav.appendChild(menubutton);
  nav.appendChild(aboutubutton);
}

//create heading element
const heading = document.createElement("h1");
heading.textContent =
  "Experience Culinary Bliss at Le Kalan An Di Re Sa Negros – Where Every Bite Tells a Story";

//create paragraph element
const paragraph = document.createElement("p");
paragraph.textContent =
  "  Step into a world of exquisite flavors and exceptional dining at Le Kalan An Di Re Sa Negros. Nestled in the heart of Bacolod City, ourrestaurant is a haven for food lovers who crave the perfect blend ofgourmet cuisine, vibrant ambiance, and impeccable service. From thefreshest ingredients to expertly crafted dishes, each plate is acelebration of taste and creativity. Whether you're enjoying a romanticdinner for two or gathering with friends, Le Kalan An Di Re Sa Negrospromises an unforgettable dining experience that will leave you comingback for more. Come for the food, stay for the memories!";

//create image
const image = document.createElement("img");
image.src = restauImage;
image.alt = "Restaurant";
image.style.width = "100%";
image.style.height = "100%";

const content = document.getElementById("content");

if (content) {
  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(image);
}
