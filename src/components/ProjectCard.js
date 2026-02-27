import React from "react";

function ProjectCard({ project, onClick }) {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`project-card ${onClick ? "is-clickable" : ""}`}
      onClick={handleCardClick}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
