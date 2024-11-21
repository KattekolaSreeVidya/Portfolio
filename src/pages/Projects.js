import React from "react";
import ProjectCard from "../components/ProjectCard"; // Assuming ProjectCard component exists

function Projects() {
  const projectCategories = {
    WebDevelopment: {
      MERN: [
        {
          title: "Task Management App",
          description: "A full-featured task management system.",
          link: "https://github.com/yourrepo/task-management-app",
        },
      ],
      HTMLCSSJS: [
        {
          title: "Skycast Weather Application",
          description: "A weather app built with React and API integration.",
          link: "https://kattekolasreevidya.github.io/SkyCast-Weather-App/",
        },
        {
          title: "Blog Page",
          description: "A personal blog page with React and custom CSS.",
          link: "https://kattekolasreevidya.github.io/Blogpage-demo/",
        },
      ],
      React: [
        {
          title: "Market Rental Place",
          description: "A platform for renting market spaces built with React.",
          link: "https://kattekolasreevidya.github.io/rental-place-frontend/",
        },
      ],
    },
    Python: [
      {
        title: "Image Plagiarism Detection",
        description: "An app for detecting image plagiarism using Python.",
        link: "https://github.com/KattekolaSreeVidya/Image-Plagiarism-Detection",
      },
    ],
  };

  return (
    <section id="projects">
      {/* Web Development Projects */}
      <div className="project-category">
        <h3>Web Development Projects</h3>
        <div className="project-list">
          {/* MERN Projects */}
          <div className="category-section">
            <h4>MERN Stack</h4>
            <div className="projects-row">
              {projectCategories.WebDevelopment.MERN.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* HTML, CSS, JS Projects */}
          <div className="category-section">
            <h4>HTML, CSS, JS</h4>
            <div className="projects-row">
              {projectCategories.WebDevelopment.HTMLCSSJS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* React Projects */}
          <div className="category-section">
            <h4>React Projects</h4>
            <div className="projects-row">
              {projectCategories.WebDevelopment.React.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Python Projects */}
      <div className="project-category">
        <h3>Python Projects</h3>
        <div className="project-list">
          <div className="projects-row">
            {projectCategories.Python.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
