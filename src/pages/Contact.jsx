import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import "./Contact.css";

const initialFormState = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent!");
    setFormData(initialFormState);
  };

  return (
    <motion.section
      className="contact-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="contact-header">
        <p className="contact-kicker">ACM-W Manipal</p>
        <h1>Get in Touch</h1>
        <p>We&rsquo;d love to hear from you</p>
      </div>

      <div className="contact-layout">
        <motion.div
          className="contact-card contact-form-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell us how we can help"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="contact-submit-button">
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.aside
          className="contact-side-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-card contact-info-card">
            <h2>Contact Information</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:acmw.manipal@gmail.com">acmw.manipal@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <span>Location</span>
                  <p>Manipal Institute of Technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card social-card">
            <h2>Connect With Us</h2>
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/company/acm-w-manipal/"
                target="_blank"
                rel="noreferrer"
                aria-label="ACM-W Manipal LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/acmwmanipal/"
                target="_blank"
                rel="noreferrer"
                aria-label="ACM-W Manipal Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
