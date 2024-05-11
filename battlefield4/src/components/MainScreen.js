import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLessThan } from '@fortawesome/free-solid-svg-icons';
import ger_flag from '../assets/germany-flag.png';
import axios from 'axios';
import MapRotation from './MapRotation';

const MainScreen = () => {
  const styles = {
    mainScreen: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto', /* Center horizontally */
      padding: '1rem',
    },
    topButtonContainer: {
      display: 'flex',
      marginBottom: '1rem', /* Add spacing below buttons */
    },
    topButton: {
      backgroundColor: 'transparent', /* Remove button border */
      border: 'none', /* Remove button border */
      padding: '0.5rem', /* Adjust padding as needed */
      cursor: 'pointer', /* Enable hover effect */
      color: 'white', /* Text color for visibility on background */
      fontWeight: 'normal', /* Default font weight */
      margin: '0.5rem', 
    },
    topButtonHover: {
      fontWeight: 'bold', /* Bold text on hover */
    },
    backButton: {
      backgroundColor: 'transparent', /* Remove button border */
      border: 'none', /* Remove button border */
      margin: '1rem',
      color: 'black', /* Adjust back button text color */
    },
    scrollableContent: {
      flex: 1, /* Take remaining space */
      overflowY: 'auto', /* Enable vertical scroll */
      maxHeight: '80vh', /* Optional: Set maximum height */
    },
    placeholders: {
      marginBottom: '1rem',
    },
    serverInfo: {
      fontSize: '46px',
      fontWeight: 'bold',
    },
    serverName: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    buttonContainer: {
      display: 'flex', /* Arrange buttons horizontally */
      justfyContent: 'space-between', /* Distribute buttons evenly */
  
    },
    button: {
      backgroundColor: 'transparent', /* Remove button border */
      border: '1px solid grey', /* Remove button border */
      padding: '0.5rem', /* Adjust padding as needed */
      cursor: 'pointer', /* Enable hover effect */
      color: 'white', /* Text color for visibility on background */
      fontWeight: 'normal', /* Default font weight */
      margin: '0.15rem', 
    },
    playerInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    serverSettings: {
      display: 'flex',
      padding: '0.5rem', /* Adjust padding as needed */
    },
    settingsButton: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'transparent', /* Remove button border */
      border: 'none',
      borderBottom: '0.5px solid grey',
      color: 'white',
      width: '180px',
      padding: '0.5rem', /* Adjust padding as needed */
      alignItems: 'left',
      cursor: 'pointer',
      marginRight: '75px',
    },
    spanFirst: {
      marginLeft: '0rem',
      align: 'left',
    },
    spanSecond:{
      marginRight: '0rem',
    },
  };

  const [sessionData, setSessionData] = useState(null);
  const [error, setError] = useState(null);

  const sessionId = "663ef9bda6a3f80ac5328350"; //sample session ID
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`http://192.168.29.139:5000/api/sessions/${sessionId}`);
        setSessionData(response.data);
      }
      catch (error){
        setError(error);
      }
    };
  
    fetchData();
  }, [sessionId]); //runs only if sessionId changes
  
  if(error){
    console.log(error.message);
    return <div>Error fetching data: {error.message}</div>;
  }

  if(!sessionData){
    return <div>Loading...</div>;
  }

  return (
    <div className="main-screen" style={styles.mainScreen}>
      <div className="top-button-container" style={styles.topButtonContainer}>
        <button style={styles.backButton}> {/* Combine styles for back button */}
        <FontAwesomeIcon icon={faLessThan} style = {{color: 'white'}}/>{/* Assuming you have FontAwesome icons */}
        </button>
        <button style={styles.topButton} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>
          MULTIPLAYER
        </button>
        <span style={styles.topButton}>/</span>
        <button style={styles.topButton} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>
          SERVER BROWSER
        </button>
        <span style={styles.topButton}>/</span>
      </div>
      <span style={styles.serverInfo}>SERVER INFO</span>
      <div className="scrollable-content" style={styles.scrollableContent}>
        <span style={styles.serverName}>! RC3-BASEMAPS</span>
        <p>
          <img src={ger_flag} alt='Heil Hitler' style={{marginRight: '5px'}}/>
          CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ
        </p>
        <p>Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord<br />https://discord.gg/3r5NK4d</p>
        <div className="button-container" style={styles.buttonContainer}>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>JOIN</button>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>SPECTATE</button>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>JOIN AS COMMANDER</button>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>
              <FontAwesomeIcon icon={faStar} style={{marginRight: '2px'}}/>
              13672
          </button>
        </div>
        <div style={styles.playerInfo}>
          <h2 style={{width: '150px'}}>PLAYERS<br />{sessionData.numPlayers}/64</h2>
          <h2 style={{width: '150px'}}>PING<br />{sessionData.ping}ms</h2>
          <h2 style={{width: '150px'}}>TICKRATE<br />{sessionData.tickrate} Hz</h2>
        </div>
        <div className="serverSettings" style={styles.serverSettings}>
            <div className='settings' style={styles.settings}>
          <span>SETTINGS</span>
              {(sessionData.settingsLabel).map((label, index) => (
                <button 
                style={styles.settingsButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }} 
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';}}>
                  <span style={styles.spanFirst}>{label[0]}</span>
                  <span style={styles.spanSecond}>{label[1]}</span>
                </button>
              ))}
            </div>
            <div className='settings' style={styles.settings}>
            <span>ADVANCED</span>
              {(sessionData.advancedLabel).map((label, index) => (
                <button 
                style={styles.settingsButton} 
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }} 
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';}}>
                  <span style={styles.spanFirst}>{label[0]}</span>
                  <span style={styles.spanSecond}>{label[1]}</span>
                </button>
              ))}
            </div>
            <div className='settings' style={styles.settings}>
            <span>RULES</span>
              {(sessionData.rulesLabel).map((label, index) => (
                <button 
                style={styles.settingsButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }} 
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';}}>
                  <span style={styles.spanFirst}>{label[0]}</span>
                  <span style={styles.spanSecond}>{label[1]}</span>
                </button>
              ))}
            </div>
        </div>
        <div className="placeholders" style={styles.placeholders}>
          <MapRotation/>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
