import TextType from "../components/TextType";
import boardImg from "../assets/board.jpg";
import collageImg from "../assets/collage.jpg";
import { Link } from "react-router-dom";
import webImg from "../assets/domains/web.jpg";
import aimlImg from "../assets/domains/aiml.jpg";
import dsaImg from "../assets/domains/dsa.jpg";
import smgdImg from "../assets/domains/smgd.png";
import researchImg from "../assets/domains/research.jpg";

export default function Home() {
  return (
    <>

      {/* 🔥 HERO */}
      <div className="hero">
        <div 
          className="hero-bg"
          style={{ backgroundImage: `url(${collageImg})` }}
        ></div>

        <div className="hero-content">
          <div className="title-container">
            <TextType 
              text={[
                "ACM-W Manipal",
                "Empowering Women in Tech",
                "Code. Create. Lead."
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </div>
        </div>
      </div>

      {/* 🖼️ ABOUT */}
      <div className="about-wrapper">

        <img 
          src={boardImg} 
          alt="ACM-W Board" 
          className="board-img"
        />

        <p className="about-text">
          ACM-W Manipal is a community dedicated to empowering women in computing. 
          We organize workshops, hackathons, and mentorship programs to help students grow in technology.
        </p>

        <div className="hero-buttons">
          
          <Link to="/events">
  <button className="btn secondary">Explore Events</button>
</Link>
        </div>

      </div>

      {/* 🔥 DOMAINS SECTION */}
      <div className="domains-section">

        <h2 className="section-title">Our Domains</h2>

        <div className="domains-grid">

  <div className="domain-card">
    <img src={webImg} alt="Web Development" />
    <div className="domain-content">
      <h3>Web Development</h3>
      <p>Build modern, responsive websites and full-stack apps.</p>
    </div>
  </div>

  <div className="domain-card">
    <img src={aimlImg} alt="AI ML" />
    <div className="domain-content">
      <h3>AI / ML</h3>
      <p>Explore machine learning and intelligent systems.</p>
    </div>
  </div>

  <div className="domain-card">
    <img src={dsaImg} alt="DSA" />
    <div className="domain-content">
      <h3>DSA</h3>
      <p>Master problem solving and coding interviews.</p>
    </div>
  </div>

  <div className="domain-card">
    <img src={smgdImg} alt="SMGD" />
    <div className="domain-content">
      <h3>SMGD</h3>
      <p>Design, branding, and social media creativity.</p>
    </div>
  </div>

  <div className="domain-card">
    <img src={researchImg} alt="Research" />
    <div className="domain-content">
      <h3>Research</h3>
      <p>Work on innovative ideas and publish research.</p>
    </div>
  </div>

</div>
      </div>

    </>
  );
}