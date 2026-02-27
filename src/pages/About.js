import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I am a master&apos;s IT student and Associate Engineer with a strong
              focus on Full-Stack Development and a deep appreciation for clean,
              reliable software.
              I enjoy designing end‑to‑end solutions that are both technically
              solid and user‑centric.
            </p>
          </div>

          <div className="about-card">
            <h3>What I Work With</h3>
            <ul className="about-list">
              <li>JavaScript, React, Node.js, Express</li>
              <li>HTML, CSS, responsive design</li>
              <li>MongoDB and RESTful APIs</li>
              <li>Python for scripting and problem solving</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>The Poet in Me</h3>
            <p>
              Beyond code, I write poetry that explores destiny, life, and the
              human experience. This creative side influences how I think about
              interfaces, storytelling in products, and the emotions behind the
              user journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
