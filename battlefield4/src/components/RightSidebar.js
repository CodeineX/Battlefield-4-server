import React, { useState } from 'react';
import '../styles/RightSidebar.css';
import online from "../assets/online.png";
import offline from "../assets/offline.png";

const RightSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`right-sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={online} alt='online' />
      <img src={offline} alt='offline' />
      </div>
  );
};

export default RightSidebar;
