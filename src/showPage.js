import { homeItems, projItems, aboutItems } from "./index";

function showPage(e) {
  const main = document.querySelector("main");
  const cards = document.querySelectorAll(".card");
  //   we select the cards from the HTML, already constructed - it's easier to put them in HTML than to load them in proj.js, since they have so much content (and we can just hide them until we need them). As I add more projects I will probably change this so it's easier to add a new project
  const sidebar = document.querySelector("sidebar");
  let show, hide1, hide2;
  // based on what header has been clicked, we want to show one page and hide the other 2

  switch (e.target.classList[0]) {
    //   in each case, we hide or show the sidebar and the cards as appropriate, set show, hide1, and hide2 appropriately, and change main's classList to show which tab is being displayed
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
