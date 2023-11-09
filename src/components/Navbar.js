// Navbar.js
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';
import SearchBar from './Searchbar';
import Sidebar from './Sidebar';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the Sidebar open/close
  };

  return (
    <nav className="navbar">
      {isMobile && <MobileNavbar toggleSidebar={toggleSidebar} />}
      {isTablet && <TabletNavbar toggleSidebar={toggleSidebar} />}
      {isDesktop && <DesktopNavbar toggleSidebar={toggleSidebar} />}
      <h1 className={isMobile ? 'mobile-h1' : isTablet ? 'tablet-h1' : 'desktop-h1'}>
        Environmental Conservation Organization
      </h1>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

const MobileNavbar = ({ toggleSidebar }) => {
  return (
    <div className="mobile-navbar">
      <button onClick={toggleSidebar} className="sidebar-button">
        ☰
      </button>
      <SearchBar />
      {/* Other mobile navigation links and components */}
    </div>
  );
};

const TabletNavbar = ({ toggleSidebar }) => {
  return (
    <div className="tablet-navbar">
      <button onClick={toggleSidebar} className="sidebar-button">
        ☰
      </button>
      <SearchBar />
      {/* Other tablet navigation links and components */}
    </div>
  );
};

const DesktopNavbar = ({ toggleSidebar }) => {
  return (
    <div className="desktop-navbar">
      <SearchBar />
      <button onClick={toggleSidebar} className="sidebar-button">
        ☰
      </button>
      {/* Desktop navigation links and components */}
    </div>
  );
};

export default Navbar;
