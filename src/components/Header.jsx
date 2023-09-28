import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/MIELECTOR-Isotipo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  

  return (
    <header className="header">
      
      <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="Logo de Mi App"  className='isotipo'/>
        <span><a href="/" className="brand-name"><span className='logo-star'>Mi</span> Elector</a></span>
      </div>
    
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>

          <li>
            <Link to="/privacity">Política</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/mielectorapp/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/mi-elector">Linkedin</a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;
