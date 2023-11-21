// Project.jsx
export default function Project(props) {
    return (
      <div className="project-container">
        <img src={props.image} alt={`Project: ${props.title}`} className="project-image" />
        <div className="project-details">
          <h3>{props.title}</h3>
          <div>
            <a className="projectLinks" href={props.github}>Github Link</a>
            <br />
            <a className="projectLinks" href={props.link}>Live Link</a>
          </div>
        </div>
      </div>
    );
  }
  