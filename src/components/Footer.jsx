import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-advanced">

      {/* TOP SECTION */}
      <div className="footer-grid">

        {/* LEFT */}
        <div className="footer-left">
          <h4>WHAT WE DO:</h4>

          <ul className="footer-list">
            <li>Workshops</li>
            <li>Hackathons</li>
            <li>Tech Talks</li>
            <li>Community Building</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>CONTACT US:</h4>

          <p>ACM-W Manipal</p>

          <div className="footer-contact">
            <a href="mailto:acmw.manipal@gmail.com">
              <FaEnvelope /> acmw.manipal@gmail.com
            </a>

            
          </div>
        </div>

      </div>

      {/* LINE */}
      <div className="footer-line"></div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>© 2026 ACM-W Manipal. All rights reserved.</p>

        <div className="footer-icons">
          <a href="https://in.linkedin.com/company/acm-w-manipal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/acmwmanipal/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="tel:+919620982968">
            <FaPhone />
          </a>
        </div>

      </div>

    </footer>
  );
}