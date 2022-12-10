import { homeItems, projItems, aboutItems } from "./index";

function showPage(e) {
  const main = document.querySelector("main");
  const cards = document.querySelectorAll(".card"); //add event listeners to set up card structure with projects
  const sidebar = document.querySelector("sidebar");
  let show, hide1, hide2;
  switch (e.target.classList[0]) {
    case "proj":
      sidebar.classList.remove("hidden");
      show = projItems;
      hide1 = aboutItems;
      hide2 = homeItems;
      for (let card of cards) {
        card.classList.remove("hidden");
      }
      main.classList.add("proj");
      main.classList.remove("home");
      main.classList.remove("abt");
      break;
    case "abt":
      sidebar.classList.add("hidden");
      show = aboutItems;
      hide1 = projItems;
      hide2 = homeItems;
      for (let card of cards) {
        card.classList.add("hidden");
      }
      main.classList.add("abt");
      main.classList.remove("home");
      main.classList.remove("proj");
      break;
    case "home":
      sidebar.classList.add("hidden");
      show = homeItems;
      hide1 = aboutItems;
      hide2 = projItems;
      for (let card of cards) {
        card.classList.add("hidden");
      }
      main.classList.add("home");
      main.classList.remove("proj");
      main.classList.remove("abt");
      break;
  }
  for (let item of show) {
    item.classList.remove("hidden");
  }
  for (let item of hide1) {
    item.classList.add("hidden");
  }
  for (let item of hide2) {
    item.classList.add("hidden");
  }
}

export { showPage };
