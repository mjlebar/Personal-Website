import todoPhoto from "./todo.png";
import ticTacToePhoto from "./tic-tac-toe.png";
import calcPhoto from "./calc.png";
import etchPhoto from "./etch.png";

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
          learn new skills like React, MongoDB, and Node. I also hope to return
          to some of these projects to sharpen their design and add new features
          as I continue to learn web development skills. (You may need to scroll
          to see all the projects).
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>To Do List</h3>
          <a href="https://mjlebar.github.io/todo-project/">
            <img src={todoPhoto} alt="screenshot of to do list project" />
          </a>
          <a href="https://mjlebar.github.io/todo-project/">Webpage</a>
          <a href="https://github.com/mjlebar/todo-project">Codebase</a>
          <p className="dec">
            This is a slightly more complex project - I put this one together
            with webpack. Took some effort to figure out how to get that to work
            with github but mission accomplished! Allows for adding and editing
            todos or projects, and stores everything in local storage (though I
            am not sure that aspect works with GitHub).
          </p>
        </div>
        <div className="card">
          <h3>Tic-Tac-Toe</h3>
          <a href="https://mjlebar.github.io/tic-tac-toe-project/">
            <img src={ticTacToePhoto} alt="screenshot of tic-tac-toe project" />
          </a>
          <a href="https://mjlebar.github.io/tic-tac-toe-project/">Webpage</a>
          <a href="https://github.com/mjlebar/tic-tac-toe-project">Codebase</a>
          <p className="dec">
            This was a tic-tac-toe game I developed in JavaScript. Right now you
            can play against another player (or yourself). I'm planning to come
            back and add a CPU at some point!
          </p>
        </div>
        <div className="card">
          <h3>Etch-A-Sketch</h3>
          <a href="https://mjlebar.github.io/etch-a-sketch/">
            <img src={etchPhoto} alt="screenshot of etch-a-sketch project" />
          </a>
          <a href="https://mjlebar.github.io/etch-a-sketch/">Webpage</a>
          <a href="https://github.com/mjlebar/etch-a-sketch">Codebase</a>
          <p className="dec">
            A fairly simple but fun JavaScript project - an etch-a-sketch that
            allows you to recreate the grid in any size you'd like.
          </p>
        </div>
        <div className="card">
          <h3>Calculator</h3>
          <a href="https://mjlebar.github.io/Calculator/">
            <img src={calcPhoto} alt="screenshot of Calculator project" />
          </a>
          <a href="https://mjlebar.github.io/Calculator/">Webpage</a>
          <a href="https://github.com/mjlebar/Calculator">Codebase</a>
          <p className="dec">
            A calculator also developed in JavaScript. The main functionality
            isn't super complicated, but there are a decent number of possible
            cases you have to look out for (what if operations are chained? what
            if the number is too long for the calculator? Etc.). Check out the
            codebase if you want to see how I handled them.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Projects };
