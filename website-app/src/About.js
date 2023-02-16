import profPhoto from "./Matthew_LeBar.jpg";

function About() {
  return (
    <div className="about">
      <p className="abt-info-1">
        I graduated Davidson College in May, 2019 with a degree in math and
        philosophy. I took and enjoyed a couple coding classes (including a Data
        Structures class using Java), but just didn't have the time to pursue
        coding further in college. Still, my favorite topics in math were the
        ones closest to computer science - discrete math, mathematical logic,
        and theory of computing. After graduating, I spent three years working
        in math education. While I thoroughly enjoyed teaching math, and I will
        take the practice of clearly and quickly communicating technical
        concepts with me, I felt it was time to further develop my knowledge and
        problem-solving skills by entering the coding world.
      </p>
      <img className="prof-pic" src={profPhoto} alt="Me smiling"></img>
      <p className="abt-info-2">
        {" "}
        My focus has been on learning React, JavaScript, CSS, and HTML for
        front-end development, and Java and SQL for back-end development,. For
        front-end development, I have been working through
        <a href="https://www.theodinproject.com/">The Odin Project,</a>where I
        have practiced not just React, JavaScript, MongodB, HTML, and CSS, but
        tools like Jest, Webpack, git and gitHub, and NPM. To finish the course,
        I will learn Node.js. I have completed a
        <a href="https://www.udemy.com/course/master-practical-java-development/">
          Java Certification Course
        </a>
        to refresh the fundamentals of Java, as well as reviewed material on
        data structures. I've also completed an
        <a href="https://verify.w3schools.com/1N5K1DMUGK">SQL certification</a>
        and have read up on the relational database management system. Finally,
        I've been working on my Java (especially data structures), JavaScript,
        and SQL with practice questions on websites like LeetCode and
        HackerRank. I've noticed how much my math training helps me solve
        problems cleanly and efficiently, by utilizing conceptual understanding
        and persisting through cognitive frustration.
      </p>
    </div>
  );
}

export { About };
