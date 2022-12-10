const homeInfo1 = document.createElement("p");
const homeInfo2 = document.createElement("p");
const homeHead = document.createElement("h1");

function setUpHome() {
  const main = document.querySelector("main");

  main.appendChild(homeHead);
  main.appendChild(homeInfo1);
  main.appendChild(homeInfo2);
  homeHead.textContent = "Welcome to my website!";
  homeInfo1.textContent =
    "Hi! My name is Matthew LeBar, and I am a former math major and math educator looking to use my skills to begin a career as a software developer. I've been working the past few months to learn JavaScript, Java,  SQL,  CSS, and  HTML. In that process, I've found that the skills I trained in math - rapidly developing deep conceptual understanding, creative problem-solving, and precisely articulating technical concepts - have been invaluable. My background in math gives me the tools I need to feel confident understanding code, and to use that understanding to solve problems. I've learned a lot already but I'm excited to continue to deepen my knowledge - I would love to bring my passion for learning to your company!";
  homeInfo2.textContent =
    "To see some of the projects I've been working on to learn JavaScript, HTML, and CSS, check out the projects tab! Projects in Java and using SQL are forthcoming. For more information about my educational background and what I've been doing to learn software development, check out the about me tab.";
}

export { setUpHome, homeInfo1, homeInfo2, homeHead };
