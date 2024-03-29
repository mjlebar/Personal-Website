function Card(props) {
  if (props.webpage) {
    return (
      <div className="card">
        <h3>{props.title}</h3>
        <a href={props.webpage}>
          <img src={props.photo} alt={`screenshot of ${props.title} project`} />
        </a>
        <a href={props.webpage}>Webpage</a>
        <a href={props.codebase}>Codebase</a>
        <p className="description">{props.description}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h3>{props.title}</h3>
        <a href={props.codebase}>
          <img src={props.photo} alt={`screenshot of ${props.title} project`} />
        </a>
        <a href={props.codebase}>Codebase</a>
        <p className="description">{props.description}</p>
      </div>
    );
  }
}

export { Card };
