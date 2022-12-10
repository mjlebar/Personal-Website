const home = document.querySelector("li.home");
const proj = document.querySelector("li.proj");
const abt = document.querySelector("li.abt");

import { setUpHome } from "./home";
import { setUpProj } from "./proj";
import { setUpAbout } from "./about";
import { showPage } from "./showPage";
const homeItems = setUpHome();
const projItems = setUpProj();
const aboutItems = setUpAbout();

proj.addEventListener("click", showPage);
home.addEventListener("click", showPage);
abt.addEventListener("click", showPage);

export { homeItems, projItems, aboutItems };
