import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-intro">
          I like building thoughtful products, experimenting with AI in practical
          ways, and keeping enough creativity in my life that work never feels
          one‑dimensional.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I completed my MSIT from IIITH with a specialization in Full Stack
              Development and currently work as an Associate Engineer. I build
              full‑stack products with a pinch of AI — because AI is reshaping
              our world, and I&apos;m interested in using it thoughtfully to
              enhance real experiences rather than replace them.
            </p>
          </div>

          <div className="about-card">
            <h3>How I Work</h3>
            <p>
              Day to day, I work on full‑stack projects, design agents, and
              enjoy exploring new technologies. I care about clear architecture,
              clean code, and small details in UX that make products feel calm
              and intuitive instead of overwhelming.
            </p>
          </div>

          <div className="about-card">
            <h3>Beyond Work</h3>
            <p>
              Personally, I love trying a bit of everything — I journal, junk
              journal, draw, write poetry, post on Medium, and read books. I&apos;m
              happiest when I&apos;m learning something new or picking up a fresh
              hobby, whether it&apos;s creative, technical, or somewhere in between.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
