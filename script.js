const home = document.querySelector("li.home");
const proj = document.querySelector("li.proj");
const abt = document.querySelector("li.abt");

const sidebar = document.querySelector(".sidebar");

const main = document.querySelector("main");

const cards = document.querySelectorAll(".card"); //add event listeners to set up card structure with projects

const projInfo = document.createElement("p");
const projHead = document.createElement("h3");
sidebar.appendChild(projHead);
sidebar.appendChild(projInfo);
projHead.textContent = "Check out my coding projects!";
projInfo.textContent =
  "These are just a small handful of my favorite projects completed for The Odin Project, an open-source web development education resource. The Odin Project has been a great way for me to learn web development in depth in a hands-on way. I'll be continuing to add projects as I learn new skills like React, MongoDB, and Node. I also hope to return to some of these projects to sharpen their design and add new features as I continue to learn web development skills. (You may need to scroll to see all the projects).";

const homeInfo1 = document.createElement("p");
const homeInfo2 = document.createElement("p");
const homeHead = document.createElement("h1");
main.appendChild(homeHead);
main.appendChild(homeInfo1);
main.appendChild(homeInfo2);
homeHead.textContent = "Welcome to my website!";
homeInfo1.textContent =
  "Hi! My name is Matthew LeBar, and I am a former math major and math educator looking to use my skills to begin a career as a software developer. I've been working the past few months to learn JavaScript, Java,  SQL,  CSS, and  HTML. In that process, I've found that the skills I trained in math - rapidly developing deep conceptual understanding, creative problem-solving, and precisely articulating technical concepts - have been invaluable. My background in math gives me the tools I need to feel confident understanding code, and to use that understanding to solve problems. I've learned a lot already but I'm excited to continue to deepen my knowledge - I would love to bring my passion for learning to your company!";
homeInfo2.textContent =
  "To see some of the projects I've been working on to learn JavaScript, HTML, and CSS, check out the projects tab! Projects in Java and using SQL are forthcoming. For more information about my educational background and what I've been doing to learn software development, check out the about me tab.";

const aboutInfo1 = document.createElement("p");
const aboutImg = document.createElement("img");
aboutImg.classList.add("prof-pic");
const aboutInfo2 = document.createElement("p");
const aboutItems = [aboutInfo1, aboutImg, aboutInfo2];
for (let item of aboutItems) {
  main.appendChild(item);
  item.classList.add("hidden");
}

aboutInfo1.textContent =
  "I graduated Davidson College in May, 2019 with a degree in math and philosophy. I took and enjoyed a couple coding classes (including a Data Structures class using Java), but just didn't have the time to pursue coding further in college. Still, my favorite topics in math were the ones closest to computer science - discrete math, mathematical logic, and theory of computing. After graduating, I spent three years working in math education. I thoroughly enjoyed teaching math, and I will take the practice of clearly and quickly communicating technical concepts with me, I felt it was time to further develop my knowledge and problem-solving skills by entering the coding world.";
aboutInfo1.classList.add("abt-info-1");
aboutImg.src = "./Matthew_LeBar.jpg";
aboutImg.alt = "A picture of me smiling";

aboutInfo2.innerHTML = `My focus has been on learning Java and SQL for back-end development, and JavaScript, CSS, and HTML for front-end development. I have completed a<a href="https://www.udemy.com/course/master-practical-java-development/">Java Certification Course</a>to refresh the fundamentals of Java, as well as reviewing material on data structures. I've also complete an<a href="https://verify.w3schools.com/1N5K1DMUGK">SQL certification</a>and have read up on the relational database management system. For front-end development, I have been working through<a href="https://www.theodinproject.com/">The Odin Project,</a>where I have practiced not just JavaScript, HTML, and CSS, but tools like Jest, Webpack, git and gitHub, and NPM. As I continue to work through the course, I will learn React, MongoDB, and Node.js. I've also been working on my Java, JavaScript, and SQL with practice questions on websites like LeetCode and HackerRank.`;
aboutInfo2.classList.add("abt-info-2");

proj.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  for (let card of cards) {
    card.classList.remove("hidden");
  }
  homeInfo1.classList.add("hidden");
  homeInfo2.classList.add("hidden");
  homeHead.classList.add("hidden");
  main.classList.add("proj");
  main.classList.remove("home");
  main.classList.remove("abt");
  for (let item of aboutItems) {
    item.classList.add("hidden");
  }
});

home.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  for (let card of cards) {
    card.classList.add("hidden");
  }
  homeInfo1.classList.remove("hidden");
  homeInfo2.classList.remove("hidden");
  homeHead.classList.remove("hidden");
  main.classList.add("home");
  main.classList.remove("proj");
  main.classList.remove("abt");
  for (let item of aboutItems) {
    item.classList.add("hidden");
  }
});

abt.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  for (let card of cards) {
    card.classList.add("hidden");
  }
  homeInfo1.classList.add("hidden");
  homeInfo2.classList.add("hidden");
  homeHead.classList.add("hidden");

  main.classList.add("abt");
  main.classList.remove("proj");
  main.classList.remove("home");

  for (let item of aboutItems) {
    item.classList.remove("hidden");
  }
});
