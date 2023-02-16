import todoPhoto from "./todo.png";
import ticTacToePhoto from "./tic-tac-toe.png";
import calcPhoto from "./calc.png";
import etchPhoto from "./etch.png";
import cvPhoto from "./cv.png";
import memoryPhoto from "./memory.png";
import zooShopPhoto from "./zooshop.png";
import { Card } from "./Card.js";

function Projects() {
  return (
    <div className="projects">
      <div className="sidebar">
        <h3>Check out my coding projects!</h3>
        <p>
          These are just a small handful of my favorite projects completed for
          The Odin Project, an open-source web development education resource.
          The Odin Project has been a great way for me to learn web development
          in depth in a hands-on way. I'll be continuing to add projects as I
          learn new skills like MongoDB and Node. I also hope to return to some
          of these projects to sharpen their design and add new features as I
          continue to learn web development skills. (You will need to scroll to
          see all the projects).
        </p>
      </div>
      <div className="cards">
        <Card
          title={"Zoo Shop"}
          photo={zooShopPhoto}
          webpage={"https://mjlebar.github.io/shopping-cart/"}
          codebase={"https://github.com/mjlebar/shopping-cart"}
          description={
            "My most recent project, built with React Router (like this website!). In this one, I focused on clean, simple design and an easy-to-understand UI. I used lazy-loading to help speed up the page."
          }
        ></Card>
        <Card
          title={"Memory Card"}
          photo={memoryPhoto}
          webpage={"https://mjlebar.github.io/memory-card-project/"}
          codebase={"https://github.com/mjlebar/memory-card-project"}
          description={
            "This is my second project built in React. This is just a fun, simple game, and didn't take much time to develop. Still, it was a great chance to practice React and sharpen my eye for design."
          }
        ></Card>
        <Card
          title={"CV Project"}
          photo={cvPhoto}
          webpage={"https://mjlebar.github.io/cv-Project/"}
          codebase={"https://github.com/mjlebar/cv-Project/"}
          description={
            "This was my first project in React, and the most complex one behind the scenes. My focus was on making sure everything functioned exactly as it should - it was difficult to develop code flexible enough to accomodate all the possible inputs (since you could have any number of degrees or jobs), while rigid enough to provide them the right formatting. I'm proud of how it works but hope to give it a nicer design at some point."
          }
        ></Card>
        <Card
          title={"To Do List"}
          photo={todoPhoto}
          webpage={"https://mjlebar.github.io/todo-project/"}
          codebase={"https://github.com/mjlebar/todo-project"}
          description={
            "This is a slightly more complex project - I put this one together with webpack. Took some effort to figure out how to get that to work with github but mission accomplished! Allows for adding and editing todos or projects, and stores everything in local storage. I've recently updated the design, as I've developed a better sense of what makes website look good."
          }
        ></Card>
        {/* <Card
          title={"Tic-Tac-Toe"}
          photo={ticTacToePhoto}
          webpage={"https://mjlebar.github.io/tic-tac-toe-project/"}
          codebase={"https://github.com/mjlebar/tic-tac-toe-project"}
          description={
            "This was a tic-tac-toe game I developed in JavaScript. Right now you can play against another player (or yourself), and I hope to come back and add an artifical player."
          }
        ></Card> */}
        <Card
          title={"Etch-A-Sketch"}
          photo={etchPhoto}
          webpage={"https://mjlebar.github.io/etch-a-sketch/"}
          codebase={"https://github.com/mjlebar/etch-a-sketch"}
          description={
            "A fairly simple but fun JavaScript project - an etch-a-sketch that allows you to recreate the grid in any size you'd like."
          }
        ></Card>

        <Card
          title={"Calculator"}
          photo={calcPhoto}
          webpage={"https://mjlebar.github.io/Calculator/"}
          codebase={"https://github.com/mjlebar/Calculator"}
          description={
            "A calculator also developed in JavaScript. The main functionality isn't super complicated, but there are a decent number of possible cases you have to look out for (what if operations are chained? what if the number is too long for the calculator? Etc.). Check out the codebase if you want to see how I handled them."
          }
        ></Card>
      </div>
    </div>
  );
}

export { Projects };
