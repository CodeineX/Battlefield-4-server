import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import MainScreen from './components/MainScreen';
import RightSidebar from './components/RightSidebar';
import "@fontsource/rajdhani";
import './styles/App.css';

const App = () =>{
    return (
      <div className="app">
        <LeftSidebar />
        <MainScreen />
        <RightSidebar />
      </div>
    );
  };

export default App;
