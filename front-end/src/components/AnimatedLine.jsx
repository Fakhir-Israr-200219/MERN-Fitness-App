import React, { useEffect, useRef } from 'react';
import "../App.css";

const AnimatedLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.classList.add('line-slide');
    }
  }, []);

  return (
    <div 
      ref={lineRef} 
      className="fixed top-0 left-0 h-[10px] bg-[#ed563b] w-0"
    ></div>
  );
};

export default AnimatedLine;
