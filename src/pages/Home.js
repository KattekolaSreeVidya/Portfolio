import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <div className="intro">
        <p className="intro-tagline">Associate Engineer · Poet</p>
        <h1>Hi, I'm Sree Vidya.</h1>
        <p className="intro-text">
          I build scalable, user‑friendly full‑stack applications—often with a touch
          of AI—and write poetry that explores destiny, life, and the human
          experience. I love turning ideas into experiences that feel both
          thoughtful and intentional.
        </p>

        <div className="intro-actions">
          <Link to="/projects" className="cta-button primary">
            View Projects
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Contact Me
          </Link>
        </div>

        <div className="intro-skills">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Python</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
