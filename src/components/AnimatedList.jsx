import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import './AnimatedList.css';

const AnimatedItem = ({ children, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
      style={{ marginBottom: '1rem', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

export default function AnimatedList({
  items = [],
  onItemSelect,
  showGradients = true,
  displayScrollbar = true
}) {

  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = useCallback((item, index) => {
    setSelectedIndex(index);
    if (onItemSelect) onItemSelect(item, index);
  }, [onItemSelect]);

  return (
    <div className="scroll-list-container">

      <div
        ref={listRef}
        className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`}
      >

        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => handleItemClick(item, index)}
          >
            <div className={`item ${selectedIndex === index ? 'selected' : ''}`}>
              <p className="item-text">{item}</p>
            </div>
          </AnimatedItem>
        ))}

      </div>

      {showGradients && (
        <>
          <div className="top-gradient"></div>
          <div className="bottom-gradient"></div>
        </>
      )}

    </div>
  );
}