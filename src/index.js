// Our initializing script

// These are the functions to set up the three different pages
import { setUpHome } from "./home";
import { setUpProj } from "./proj";
import { setUpAbout } from "./about";

const homeItems = setUpHome();
const projItems = setUpProj();
const aboutItems = setUpAbout();
// These are the items received from each page... we export them so they are available to the showPage function

const home = document.querySelector("li.home");
const proj = document.querySelector("li.proj");
const abt = document.querySelector("li.abt");
// these are the three tabs in the header

import { showPage } from "./showPage";
// this detects which tab we've clicked, and shows the appropriate page

proj.addEventListener("click", showPage);
home.addEventListener("click", showPage);
abt.addEventListener("click", showPage);
// these are of course necessary for showPage to do its  work

export { homeItems, projItems, aboutItems };
