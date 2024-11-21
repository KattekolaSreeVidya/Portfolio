import React from "react";


function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Sree Vidya | Built with ❤️ using React
      </p>
      <div className="social-links">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:your-email@example.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
