import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard"; // Assuming ProjectCard component exists

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = {
    WebDevelopment: {
      MERN: [
        {
          title: "CineWhere",
          description:
            "A full‑stack OTT discovery platform (CineWhere) with MongoDB and AI‑powered touches that helps you quickly see where any movie or show is available to stream.",
          detail:
            "OTT-Finder is a smart, one-stop hub for everything you want to watch, cutting through the chaos of scattered streaming platforms. Instead of hopping between Netflix, Prime, Hotstar and others, users see exactly where a title is available in their region, build a unified watchlist, and get gentle nudges before shows leave a platform. With a modern, responsive UI powered by React and a Node/Express backend talking to real movie/TV APIs, it feels like a polished, production-ready tool rather than just a demo. It showcases not only full-stack skills (frontend, backend, APIs, auth, data modeling), but also a strong product sense: solving a real, everyday pain point in a clean, intuitive way.",
          link: "https://ott-finder-giwc.vercel.app/",
        },
        {
          title: "Poetry Decoder",
          description:
            "A full‑stack app with MongoDB and AI assistance that helps decode and interpret poetry, making themes and meaning more approachable for readers.",
          link: "https://poetry-decoder.vercel.app/",
        },
        {
          title: "Becoming — AI Visualizer",
          description:
            "A full‑stack interactive visualization experience with an AI‑driven layer that explores AI goals and progress through a clean, focused UI.",
          link: "https://becoming-ai-visualizer.vercel.app/",
        },
      ],
      React: [
        {
          title: "Market Rental Place",
          description:
            "A React frontend for renting market spaces, focused on a smooth, intuitive user experience.",
          link: "https://kattekolasreevidya.github.io/rental-place-frontend/",
        },
        {
          title: "Galentine's Day 2026",
          description:
            "A playful, real‑time Galentine's Day micro‑site built with React that asks \"Will you be my Galentine?\" with a fun yes/no interaction.",
          link: "https://galentines-ten.vercel.app/",
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
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          A selection of web and AI‑enhanced, often full‑stack projects I&apos;ve
          built—ranging from OTT discovery to poetry tooling and interactive
          visual experiences.
        </p>
      </div>

      {/* Web Development Projects */}
      <div className="project-category">
        <h3>Web Development</h3>
        <div className="project-list">
          {/* MERN Projects */}
          <div className="category-section">
            <div className="category-header">
              <h4>MERN Stack</h4>
              <span className="category-pill">Full stack</span>
            </div>
            <div className="projects-row">
              {projectCategories.WebDevelopment.MERN.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>

          {/* React Projects */}
          <div className="category-section">
            <div className="category-header">
              <h4>React Micro‑sites</h4>
              <span className="category-pill">Frontend only</span>
            </div>
            <div className="projects-row">
              {projectCategories.WebDevelopment.React.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Python Projects */}
      <div className="project-category">
        <h3>Python</h3>
        <div className="project-list">
          <div className="projects-row">
            {projectCategories.Python.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <p className="project-modal-detail">
              {selectedProject.detail || selectedProject.description}
            </p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-link"
              >
                Visit live project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
