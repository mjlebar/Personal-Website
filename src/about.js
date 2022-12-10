import profPhoto from "./Matthew_LeBar.jpg";

function setUpAbout() {
  const main = document.querySelector("main");

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
  aboutImg.src = profPhoto;
  aboutImg.alt = "A picture of me smiling";

  aboutInfo2.innerHTML = `My focus has been on learning Java and SQL for back-end development, and JavaScript, CSS, and HTML for front-end development. I have completed a<a href="https://www.udemy.com/course/master-practical-java-development/">Java Certification Course</a>to refresh the fundamentals of Java, as well as reviewing material on data structures. I've also complete an<a href="https://verify.w3schools.com/1N5K1DMUGK">SQL certification</a>and have read up on the relational database management system. For front-end development, I have been working through<a href="https://www.theodinproject.com/">The Odin Project,</a>where I have practiced not just JavaScript, HTML, and CSS, but tools like Jest, Webpack, git and gitHub, and NPM. As I continue to work through the course, I will learn React, MongoDB, and Node.js. I've also been working on my Java, JavaScript, and SQL with practice questions on websites like LeetCode and HackerRank.`;
  aboutInfo2.classList.add("abt-info-2");
  return aboutItems;
}

export { setUpAbout };
