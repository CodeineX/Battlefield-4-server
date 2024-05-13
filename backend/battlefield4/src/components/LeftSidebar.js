import React from 'react';
import battlefieldV_Icon from "../assets/bV_icon.png";
import battlefieldI_Icon from "../assets/bI_icon.png";
import battlefieldIV_Icon from "../assets/bIV_icon.png";
import battlefieldH_Icon from "../assets/bH_icon.png";
import career from "../assets/career_icon.png";
// import watch from "../assets/watch.png";
// import news from "../assets/news.png";

const LeftSidebar = () => {
  const styles = { // Defined styles
    leftSidebar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      padding: '1rem',
      marginTop: '8rem',
    },
    sidebarItems: {
      
    marginBottom: '0.5rem',
    marginLeft: '1rem',
    },
  };

  return (
    <div className="left-sidebar" style={styles.leftSidebar}> {/* Apply styles */}
      <div className="sidebar-item">
      <img src={battlefieldV_Icon} alt='BV' ></img>
      </div>
      <div className="sidebar-item">
      <img src={battlefieldI_Icon} alt='BI' ></img>
      </div>
      <div className="sidebar-item">
      <img src={battlefieldIV_Icon} alt='BIV' ></img>
      </div>
      <div className="sidebar-item">
      <img src={battlefieldH_Icon} alt='BH' ></img>
      </div>
      <div className="sidebar-item">
      <img src={career} alt='career' ></img>
      </div>
    </div>
  );
};

export default LeftSidebar;
