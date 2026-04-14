import React, { useEffect, useMemo, useState } from "react";
import CardSwap, { Card } from "../components/CardSwap";
import "./Team.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const boards = [
  {
    year: "2025-26",
    members: [
      {
         name: "Urja Srivastava",
  role: "Chairperson",
  img: "/images/urja.png",
 
  linkedin: "https://www.linkedin.com/in/urjasrivastava/",
      },
      {
        name: "Simone Menezes",
        role: "Vice Chairperson",
        img: "/images/simone.png",
       
  linkedin: "https://www.linkedin.com/in/simonemenez/",
      },
      {
        name: "Anushka Singh",
        role: "General Secretary/SMGD Head",
        img: "/images/singh.jpeg",
       
  linkedin: "https://www.linkedin.com/in/anushka-singh2506/",
      },
      {
        name: "Soumya Jha",
        role: "Treasurer",
        img: "/images/soumya.png",
        
  linkedin: "https://www.linkedin.com/in/soumya-jha-465ab9280/",
      },
      {
        name: "Riya Shanbhag",
        role: "Web Master",
        img: "/images/rgs.jpeg",
       
  linkedin: "https://www.linkedin.com/in/riya-shanbhag/",
      },
      {
        name: "Dishita Sanvi Thogata",
        role: "Membership Chair",
        img: "/images/dishita.png",
        
  linkedin: "https://www.linkedin.com/in/dishita-sanvi-thogata-837ab4319/",
      },
      {
        name: "S Visalakshi",
        role: "Ambassador",
        img: "/images/visalakshi.png",
        
  linkedin: "https://www.linkedin.com/in/visalakshi-subramanian-3247812a6/",
      },
      {
        name: "Shravani Sawant",
        role: "Ambassador",
        img: "/images/shravani.png",
       
  linkedin: "https://www.linkedin.com/in/shravanissawant/",
      },
    ],
  },
  {
    year: "2024-25",
    members: [
      {
         name: "Uppaluri Jahnavi",
  role: "Chairperson",
  img: "/images/cp24.jpeg",
 
  linkedin: "https://www.linkedin.com/in/jahnavi-uppaluri-011a4026a/",
      },
      {
        name: "Amruni Miriyala",
        role: "Vice Chairperson",
        img: "/images/Amruni.jpeg",
       
  linkedin: "https://www.linkedin.com/in/amruni-miriyala/",
      },
      {
        name: "Jewel Naga Satya Kruthi Penjarla",
        role: "General Secretary",
        img: "/images/jewel.jpeg",
       
  linkedin: "https://www.linkedin.com/in/kruthi-penjarla-90234529b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Eva Hemantkumar Shah",
        role: "Treasurer",
        img: "/images/eva.jpeg",
       
  linkedin: "https://www.linkedin.com/in/eva-shah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Ishita Deodhar",
        role: "Tech Head",
        img: "/images/ishita.jpeg",
       
  linkedin: "https://www.linkedin.com/in/ishita-deodhar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Urja Srivastava ",
        role: "Membership Chair",
        img: "/images/urja.png",
        
  linkedin: "https://www.linkedin.com/in/urjasrivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Tarini Sai Padmanabhuni",
        role: "Ambassador",
        img: "/images/Tarini.jpeg",
        
  linkedin: "https://www.linkedin.com/in/tarini-padmanabhuni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Bhavya Vats",
        role: "Ambassador",
        img: "/images/Bhavya.jpeg",
        
  linkedin: "https://www.linkedin.com/in/bhavya-vats-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    year: "2023-24",
   members: [
      {
         name: "Yashika Goyal",
  role: "Chairperson",
  img: "/images/yash.jpeg",
 
  linkedin: "https://www.linkedin.com/in/yashika-goyal-872400248/",
      },
      {
        name: "Khushi Agarwal",
        role: "Vice Chairperson",
        img: "/images/khushi.jpeg",
      
  linkedin: "https://www.linkedin.com/in/khushi-agarwal-092995219/",
      },
      {
        name: "Prerna Mittal",
        role: "General Secretary",
        img: "/images/prerana.jpeg",
      
  linkedin: "https://www.linkedin.com/in/prernamittal03/",
      },
      {
        name: "Shreya Sadhasivam",
        role: "Treasurer",
        img: "/images/shreya.jpeg",
        
  linkedin: "https://www.linkedin.com/in/shreya-sadhasivam/",
      },
      {
        name: "Ishita Singh",
        role: "Web Master",
        img: "/images/ishitta.jpeg",
       
  linkedin: "https://www.linkedin.com/in/ishitasingh20/",
      },
      {
        name: "Chainika Vaishnavi",
        role: "Membership Chair",
        img: "/images/chainika.png",
       
  linkedin: "https://www.linkedin.com/in/pschainika/",
      },
      
    ],
  },

  {
    year: "2022-23",
   members: [
      {
         name: "Sinchana Kumbale",
  role: "Chairperson",
  img: "/images/sinchana.jpeg",
  
  linkedin: "https://www.linkedin.com/in/sinchana-kumbale/",
      },
      {
        name: "Tejaswini Gurumoorthy",
        role: "Vice Chairperson",
        img: "/images/teja.jpg",
        
  linkedin: "https://www.linkedin.com/in/tejaswini-gurumoorthy-89216720b/",
      },
      {
        name: "Diya Dhabade",
        role: "General Secretary",
        img: "/images/diya.jpeg",
       
  linkedin: "https://www.linkedin.com/in/diya-dhabade-7267b6210/",
      },
      {
        name: "Shreeyanka Das",
        role: "Treasurer",
        img: "/images/shreeyanka.jpeg",
       
  linkedin: "https://www.linkedin.com/in/shreeyanka-das/",
      },
      {
        name: "Somya Bansal",
        role: "Web Master",
        img: "/images/somya.jpg",
        
      },
      {
        name: "Khushee Kapoor",
        role: "Membership Chair",
        img: "/images/khushee.jpeg",
      
  linkedin: "https://www.linkedin.com/in/khusheekapoor/",
      },
      
    ],
  },
  {
    year: "2021-22",
    members: [
      {
         name: "Sonalika Sahoo",
  role: "Chairperson",
  img: "/images/sonalika.jpg",
 
  linkedin: "https://www.linkedin.com/in/sonalika-sahoo/",
      },
      {
        name: "Jahnavi Kolakaluri",
        role: "Vice Chairperson",
        img: "/images/jahnavi.jpg",
       
  linkedin: "https://www.linkedin.com/in/jahnsite/",
      },
      {
        name: "Shreya Tewari",
        role: "General Secretary",
        img: "/images/sh.jpg",
        
  linkedin: "https://www.linkedin.com/in/shreya-tewari-a28844194/",
      },
      {
        name: "Sinchana Kumballe",
        role: "Treasurer",
        img: "/images/sinchana.jpeg",
       
  linkedin: "https://www.linkedin.com/in/sinchana-kumbale/",
      },
      {
        name: "Geetika Raut",
        role: "Web Master",
        img: "/images/gee.jpg",
       
  linkedin: "https://www.linkedin.com/in/geetika-raut-6a87941a9/",
      },
      {
        name: "Ishita Pandey",
        role: "Membership Chair",
        img: "/images/ishi.jpg",
        
  linkedin: "https://www.linkedin.com/in/ishita-pandey-8b03951b5/",
      },
      
    ],
  },
  {
    year: "2020-21",
    members: [
      {
         name: "Gauri Gupta",
  role: "Chairperson",
  img: "/images/gauri.jpg",
  linkedin: "https://www.linkedin.com/in/g-gauri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Smriti Singh",
        role: "Vice Chairperson",
        img: "/images/smriti.jpg",
       
  linkedin: "https://www.linkedin.com/in/smriti-singh-ss2000?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Garima Singh",
        role: "General Secretary",
        img: "/images/gar.jpg",
       
 
      },
      {
        name: "Shreya Tiwari",
        role: "Treasurer",
        img: "/images/default.png",
       
      },
      {
        name: "Rasika Muralidharan ",
        role: "Social Media Head",
        img: "/images/ras.jpg",
     
  linkedin: "https://www.linkedin.com/in/rasika-murali1301/",
      },
      {
        name: "Harshita Binani",
        role: "Senior Chair",
        img: "/images/harshita.jpg",
      
  linkedin: "https://www.linkedin.com/in/harshita-binani-00a9b4173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      
    ],
  },
  {
    year: "2019-20",
    members: [
      {
         name: "Tanvi Anand",
  role: "Senior Chairperson",
  img: "/images/tanvi.jpg",
 
  linkedin: "https://www.linkedin.com/in/tanviaanand/",
      },
      {
        name: "Harshita Binani",
        role: " Chairperson",
        img: "/images/harshita.jpg",
       
  linkedin: "https://www.linkedin.com/in/harshita-binani-00a9b4173/",
      },
      {
        name: "Akshatha Kamath",
        role: "Vice-Chairperson",
        img: "/images/ak.jpg",
      
  linkedin: "https://www.linkedin.com/in/akshatha-kamath-2b2538161/",
      },
      {
        name: "Gauri Gupta",
        role: "Treasurer and Design Head",
        img: "/images/gauri.jpg",
    
  linkedin: "https://www.linkedin.com/in/g-gauri/",
      },
      {
        name: "Rasika Muralidharan ",
        role: "Secretary and Social Media Head",
        img: "/images/ras.jpg",
        
  linkedin: "https://www.linkedin.com/in/rasika-murali1301/",
      },
      
    ],
  },
  {
    year: "2018-19",
    members: [
      {
         name: "Aastha Singh",
  role: "Chairperson/Co-Founder",
  img: "/images/aastha.jpg",
 
  linkedin: "https://www.linkedin.com/in/aastha-singh-20/",
      },
      {
        name: "Tanvi Anand",
        role: "Vice Chairperson",
        img: "/images/tanvi.jpg",
      
  linkedin: "https://www.linkedin.com/in/tanviaanand/",
      },
      {
        name: "Harshita Binani",
        role: "General Secretary",
        img: "/images/harshita.jpg",
       
  linkedin: "https://www.linkedin.com/in/harshita-binani-00a9b4173/",
      },
      {
        name: "Vidisha Shah",
        role: "Treasurer",
        img: "/images/vid.jpg",
        
  linkedin: "https://www.linkedin.com/in/vidishashah29/",
      },
      {
        name: "Samyuktha Prabhu",
        role: "Technical Secretary",
        img: "/images/sam.jpg",
        
  linkedin: "https://www.linkedin.com/in/m-samyuktha-prabhu/",
      },
      
    ],
  },
  {
    year: "2017-18",
    members: [
      {
         name: "Sukriti Paul",
  role: "Chairperson/Founder",
  img: "/images/sukriti.jpg",
 
  linkedin: "https://www.linkedin.com/in/sukriti-paul-72a115126/",
      },
      {
        name: "Aastha Singh",
        role: "Vice Chairperson/Co founder ",
        img: "/images/aastha.jpg",
      
  linkedin: "https://www.linkedin.com/in/aastha-singh-20/",
      },
      {
        name: "Saumya Bahukhandi",
        role: "General Secretary",
        img: "/images/sau.jpg",
       
  linkedin: "https://www.linkedin.com/in/saumya-bahukhandi-565813104/",
      },
      {
        name: "Ananya Gupta",
        role: "Treasurer",
        img: "/images/default.png",
        
 
      },
      {
        name: "Disha Agarwal",
        role: "Web Master/Technical Head",
        img: "/images/default.png",
        
  
      },
      
    ],
  },
];

const BoardCard = ({ board, isCurrent = false }) => (
  <div className={`team-board-shell ${isCurrent ? "current-board-shell" : ""}`}>
    <div className="bookmark">{board.year}</div>
    <div className="board-card-header">
      <div>
       
        <h2 className="year">{board.year}</h2>
      </div>
      
    </div>

    <div className="members-grid">
      {board.members.map((member, index) => (
        <div key={`${board.year}-${member.name}-${index}`} className="profile-card">
          <div className="profile-image-wrap">
            <img
              src={member.img || `https://ui-avatars.com/api/?name=${member.name}`}
              alt={member.name}
              className="profile-img"
            />
          </div>

          <div className="profile-content">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
          </div>

          <div className="social-icons">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} LinkedIn`}
                onClick={(event) => event.stopPropagation()}
              >
                <FaLinkedin />
              </a>
            )}

            {member.insta && (
              <a
                href={member.insta}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} Instagram`}
                onClick={(event) => event.stopPropagation()}
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Team = () => {
  const [viewMode, setViewMode] = useState("current");
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1200 : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentBoard = boards[0];
  const pastBoards = boards.slice(1);
  const useAccordion = viewportWidth < 1200;

  const cardSwapDimensions = useMemo(() => {
  if (viewportWidth < 640) {
    return {
      width: Math.min(viewportWidth - 32, 360),
      height: 620,
      cardDistance: 8,
      verticalDistance: 10
    };
  }

  if (viewportWidth < 960) {
    return {
      width: Math.min(viewportWidth - 48, 720),
      height: 660,
      cardDistance: 12,
      verticalDistance: 14
    };
  }

  return {
    width: 900,
    height: 650,
    cardDistance: 16,
    verticalDistance: 18
  };
}, [viewportWidth]);
  return (
    <div className="team-page">
      <div className="team-header">
        <p className="team-kicker">ACM-W Manipal Board</p>
        <h1 className="team-title">Meet The Team</h1>
        <p className="team-subtitle">
          Explore the current board and revisit the chapter leadership that shaped our journey.
        </p>

        <div className="team-toggle" role="tablist" aria-label="Board view toggle">
          <button
            type="button"
            className={viewMode === "current" ? "active" : ""}
            onClick={() => setViewMode("current")}
          >
            Current Board
          </button>
          <button
            type="button"
            className={viewMode === "past" ? "active" : ""}
            onClick={() => setViewMode("past")}
          >
            Past Boards
          </button>
        </div>

        <p className="team-instruction">Click on the card to explore previous boards</p>
      </div>

      <div className="cards-container">
        {viewMode === "current" ? (
          <section className="current-board-section">
            <BoardCard board={currentBoard} isCurrent />
          </section>
        ) : (
          <section className="past-boards-section">
            {useAccordion ? (
              <div className="team-accordion">
                {pastBoards.map((board, boardIndex) => {
                  const isOpen = activeAccordionIndex === boardIndex;

                  return (
                    <div
                      key={board.year}
                      className={`team-board-shell team-accordion-item ${isOpen ? "current-board-shell open" : ""}`}
                    >
                      <button
                        type="button"
                        className="team-toggle-button"
                        aria-expanded={isOpen}
                        aria-controls={`board-panel-${boardIndex}`}
                        onClick={() =>
                          setActiveAccordionIndex((currentIndex) =>
                            currentIndex === boardIndex ? -1 : boardIndex
                          )
                        }
                      >
                        <div className="bookmark">{board.year}</div>

                        <div className="board-card-header">
                          <div>
                            <p className="board-eyebrow">Board Archive</p>
                            <h2 className="year">{board.year}</h2>
                          </div>
                          <p className="board-member-count">{board.members.length} members</p>
                        </div>
                      </button>

                      <div
                        id={`board-panel-${boardIndex}`}
                        className={`team-accordion-panel ${isOpen ? "open" : ""}`}
                      >
                        <div className="members-grid">
                          {board.members.map((member, index) => (
                            <div key={`${board.year}-${member.name}-${index}`} className="profile-card">
                              <div className="profile-image-wrap">
                                <img
                                  src={member.img || `https://ui-avatars.com/api/?name=${member.name}`}
                                  alt={member.name}
                                  className="profile-img"
                                />
                              </div>

                              <div className="profile-content">
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                              </div>

                              <div className="social-icons">
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <FaLinkedin />
                                  </a>
                                )}

                                {member.insta && (
                                  <a
                                    href={member.insta}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <FaInstagram />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <CardSwap
                width={cardSwapDimensions.width}
                height={cardSwapDimensions.height}
                cardDistance={cardSwapDimensions.cardDistance}
                verticalDistance={cardSwapDimensions.verticalDistance}
              >
                {pastBoards.map((board) => (
                  <Card key={board.year} customClass="team-card">
    <div className="bookmark">{board.year}</div>

    <div className="board-card-header">
      <div>
        <p className="board-eyebrow">Board Archive</p>
        <h2 className="year">{board.year}</h2>
      </div>
      <p className="board-member-count">{board.members.length} members</p>
    </div>

    <div className="members-grid">
      {board.members.map((member, index) => (
        <div key={`${board.year}-${member.name}-${index}`} className="profile-card">

          <div className="profile-image-wrap">
            <img
              src={member.img || `https://ui-avatars.com/api/?name=${member.name}`}
              alt={member.name}
              className="profile-img"
            />
          </div>

          <div className="profile-content">
    <h3>{member.name}</h3>
    <p className="role">{member.role}</p>
  </div>

  <div className="social-icons">
    {member.linkedin && (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <FaLinkedin />
      </a>
    )}

    {member.insta && (
      <a
        href={member.insta}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <FaInstagram />
      </a>
    )}
  </div>

        </div>
      ))}
    </div>
  </Card>
                ))}
              </CardSwap>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Team;
