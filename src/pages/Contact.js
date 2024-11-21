import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    // Mock sending the form
    setFormStatus("Sending...");

    setTimeout(() => {
      setFormStatus("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Please fill out the form below:</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />

        <button type="submit">Send Message</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

export default Contact;
