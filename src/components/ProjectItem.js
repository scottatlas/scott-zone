import React from "react";
import "../styles/ProjectItem.css";

function ProjectItem(props) {
  const { title, intro, link } = props;

  return (
    <div className="project-item">
      <h3 className="title">{title}</h3>
      <div className="project-info">
        <p>{intro}</p>
        <div className="project-links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
