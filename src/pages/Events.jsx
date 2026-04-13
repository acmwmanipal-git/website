import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Events() {
  const [activeYear, setActiveYear] = useState(null);
  const upcomingEvents = [
   {
      title: "From Campus to Startups: Journey into AI, Research and Building Ideas",
      date: "14th April 2026, Time: 5:30pm - 7pm",
      description:
        "Speaker: Abhishek Rhisheekesan (Alumnus, MIT Manipal) ", registrationLink: "https://forms.gle/RMasQouSwHiGsbKo6"
      
    }, {
      title: "SheBuilds 2026",
      date: "To be decided",
      description:
        "A Summer School of five exciting weeks of coding, creativity and fun.",
      
    },
    
  ];

  const eventsData = [
    {
      year: "2026",
      events: ["Search for Research 5.0",
        "Git Real Workshop in collaboration with MOSS Manipal",
        "Women’s Day Special Podcast in collaboration with Blank 101, Manipal ",
        "KAIROS — ACM-W’s first offline Tech Week"
      ]
    },
    {
      year: "2025",
      events: [
        "Resume Building Workshop",
        "OpenCV Workshop + Virtual Paint App",
        "PPS Workshop (Coding + DSA Basics)",
        "Summer School Orientation",
        "Vision Craft (AI + OpenCV Workshop)"
      ]
    },
    {
      year: "2024",
      events: [
        "Serverless Simplified Workshop",
        "Academia to Industry (Microsoft Speaker)"
      ]
    },
    {
      year: "2023",
      events: [
        "Hour of Code Contest",
        "Internship & Placement Talk",
        "Git & GitHub Workshop",
        "Intro to Machine Learning Workshop"
      ]
    },
    {
      year: "2022",
      events: [
        "Udaan (Women Career Awareness)",
        "Cascade (Tech Talk with Industry Expert)",
        "Search for Research 2.0",
        "LinkedIn Profile Workshop",
        "UI/UX Hackathon (Techtatva)"
      ]
    },
    {
      year: "2021",
      events: [
        "RecHERsion Coding Competition",
        "Demystifying Open Source",
        "#IamRemarkable Workshop"
      ]
    },
    {
      year: "2020",
      events: [
        "Hour of Code",
        "Math-e-magic Puzzle Event",
        "Open Source & GSoC Talk"
      ]
    },
    {
      year: "2019",
      events: [
        "Save the Semester",
        "Tech-O-Talk",
        "Research Awareness Session"
      ]
    }
  ];

  const yearDetails = {
    "2026": {
      description:
        "2026 marked a bigger offline presence for ACM-W Manipal, with collaborative storytelling and a flagship tech week that brought the chapter together.",
      imagePlaceholder: "Event visuals coming soon"
    },
    "2025": {
      description:
        "A strong learning year centered around career preparation, coding fundamentals, and practical computer vision sessions for students across batches.",
      imagePlaceholder: "Workshop snapshots coming soon"
    },
    "2024": {
      description:
        "The chapter focused on technical depth and professional exposure, bridging academic learning with real industry experiences.",
      imagePlaceholder: "Speaker session gallery placeholder"
    },
    "2023": {
      description:
        "2023 was built around accessible upskilling, helping members strengthen coding confidence, version control, and machine learning basics.",
      imagePlaceholder: "Highlights reel placeholder"
    },
    "2022": {
      description:
        "From research to professional branding to design, ACM-W expanded the chapter's impact through diverse formats and student-focused opportunities.",
      imagePlaceholder: "Chapter moments placeholder"
    },
    "2021": {
      description:
        "The chapter invested in confidence-building through coding, open-source awareness, and workshops centered on visibility and self-advocacy.",
      imagePlaceholder: "Archive preview placeholder"
    },
    "2020": {
      description:
        "Even in a constrained year, ACM-W kept the community engaged with coding, problem-solving, and early open-source exposure.",
      imagePlaceholder: "Virtual event gallery placeholder"
    },
    "2019": {
      description:
        "A foundation year focused on peer learning, technical conversations, and introducing members to research-oriented growth paths.",
      imagePlaceholder: "Early chapter archive placeholder"
    }
  };

  const impactStats = [
    { value: "28+", label: "Workshops" },
    { value: "10+", label: "Speaker Sessions" },
    { value: "7", label: "Years of Community" },
    { value: "500+", label: "Student Touchpoints" }
  ];

  const toggleYear = (year) => {
    setActiveYear((currentYear) => (currentYear === year ? null : year));
  };

  const activeEvent = eventsData.find((yearData) => yearData.year === activeYear);

  return (
    <div className="events-page">
      <h1 className="events-title">Our Journey</h1>

      <section className="upcoming-events-section">
        <div className="events-section-heading">
          <h2>Upcoming Events</h2>
          <p>Here is where you will find what ACM-W is planning next.</p>
        </div>

        <div className="upcoming-events-grid">
          {upcomingEvents.map((event, index) => (
            <motion.article
              key={event.title}
              className="upcoming-event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="upcoming-event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.registrationLink && (
  <a
    href={event.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className="register-btn"
  >
    Register Now →
  </a>
)}
            </motion.article>
          ))}
        </div>
      </section>

      <div className="timeline">
        {eventsData.map((yearData, index) => (
          <div className="timeline-item" key={yearData.year}>
            <div className="timeline-dot"></div>

            <motion.div
              className="timeline-content"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ scale: 1.02 }}
              
            >
              <div className="timeline-card-header">
                <h2>{yearData.year}</h2>
                
              </div>

              <ul className="timeline-event-list">
                {yearData.events.map((event, i) => (
                  <li key={i}>
                    <span className="event-icon" aria-hidden="true"></span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-actions">
                
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <section className="impact-section">
        <div className="events-section-heading">
          <h2>Our Impact</h2>
          <p>
            Across workshops, talks, and chapter initiatives, ACM-W Manipal creates opportunities
            for students to learn, connect, and grow with confidence.
          </p>
        </div>

        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div key={stat.label} className="impact-card">
              <span className="impact-value">{stat.value}</span>
              <span className="impact-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="timeline-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveYear(null)}
          >
            <motion.div
              className="timeline-modal"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="timeline-modal-header">
                <div>
                  <p className="timeline-modal-label">Past Events</p>
                  <h3>{activeEvent.year}</h3>
                </div>

                <button
                  type="button"
                  className="timeline-modal-close"
                  onClick={() => setActiveYear(null)}
                >
                  Close
                </button>
              </div>

              <p className="timeline-modal-description">
                {yearDetails[activeEvent.year].description}
              </p>

              <div className="timeline-modal-media">
                {yearDetails[activeEvent.year].imagePlaceholder}
              </div>

              <ul className="timeline-modal-list">
                {activeEvent.events.map((event, i) => (
                  <li key={i}>
                    <span className="event-icon" aria-hidden="true"></span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/gallery"
                className="timeline-gallery-button timeline-gallery-button-inline"
              >
                View Gallery
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
