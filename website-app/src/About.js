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
        I'm currently working on learning Python, and several of its most useful
        libraries, including PyTorch, NumPy, and Pandas. I am developing my own
        machine learning project using PyTorch to create a Transformer neural
        network trained on a small language dataset. I've also been learning the
        fundamentals behind the theory of machine learning, so that I can have
        both practical and theoretical mastery of neural networks. In addition
        to learning JavaScript (including React and Node), CSS, HTML, I've been
        learning languages and tools like Java, SQL, and MongoDB for the
        backend. A project using Node to connect to MongoDB through express is
        forthcoming. Additionally, since much of my front-end learning has been
        through{" "}
        <a href="https://www.theodinproject.com/about">
          The Odin Project,
        </a>{" "}
        I've been able to develop knowledge of many other tools, like Jest,
        Weback, git, and GitHub, just to name a few.
      </p>
    </div>
  );
}

export { About };
