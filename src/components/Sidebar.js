// Sidebar.js
import React from 'react';
import './Sidebar.css'
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`} >
        <div className="sidebar-content">
        <div className="sidebar-link"><a href="#home">Home</a></div>
        <div className="sidebar-link"><a href="#analytics">Aanlytics</a></div>
        <div className="sidebar-link"><a href="#data">Data</a></div>
        <div className="sidebar-link"><a href="#form">Form</a></div>
        <div/>
      <button onClick={toggleSidebar} className="close-button">
        &times;
      </button>
    </div>
    </div>
  );
};

export default Sidebar;
