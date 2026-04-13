import React, { useState } from "react";
import CircularGallery from "../components/CircularGallery";

const galleryItems = [
  { image: "/images/event1.png", text: "Merch Reveal'26" },
  { image: "/images/event2.png", text: "OpenCV Workshop" },
  { image: "/images/event3.png", text: "PPS Workshop" },
  { image: "/images/event4.png", text: "SheBuilds '25" },
  { image: "/images/event5.png", text: "Merch Reveal '25" },
  { image: "/images/board.png", text: "Board Transfer'25" },
   { image: "/images/event6.png", text: "Git Real Workshop" },
   { image: "/images/event7.png", text: "Women’s Day Special Podcast" },
   { image: "/images/event8.jpeg", text: "KAIROS" },
   { image: "/images/event9.png", text: "Resume Building Workshop '25" },
   { image: "/images/event10.png", text: "Academia To Industry" },
   { image: "/images/event11.png", text: "Git It Together Workshop" },
   { image: "/images/event12.png", text: "Board Transfer'24" },
    { image: "/images/event13.jpeg", text: "Search for Research '5.0" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{
      height: "80vh",
      width: "100%",
      position: "relative",
      overflow: "hidden"
    }}>
      
      <CircularGallery
        items={galleryItems}
        onItemClick={setSelected}   // 🔥 ADD THIS
        bend={1.5}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
      />
      {/* 🔥 CLICK OVERLAY */}
<div className="gallery-overlay">
  {galleryItems.map((item, index) => (
    <div
      key={index}
      className="click-zone"
      onClick={() => setSelected(item)}
    />
  ))}
</div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} alt="" />

            {/* TEXT AT BOTTOM */}
            <div className="modal-caption">
              {selected.text}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;