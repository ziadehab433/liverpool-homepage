import React from 'react';
import globe from "/src/assets/icons/globe.png";
import arrowForward from "/src/assets/icons/arrowForward.png";
import arrowDown from "/src/assets/icons/arrowDown.png";
import facebookLogo from "/src/assets/icons/facebookLogoBlack.png"
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: "HOME", subItems: [] },
    {
      label: "NEWS",
      subItems: ["Latest News", "Media Watch", "Match Reports"],
    },
    {
      label: "FIXTURES & TEAMS",
      subItems: ["Fixtures", "Results", "Tables"],
    },
    {
      label: "TICKETS & BOOKING",
      subItems: ["Ticket Info", "Memberships", "Events"],
    },
    {
      label: "SHOP",
      subItems: ["Shop Men", "Shop Women", "Shop Kids"],
    },
    {
      label: "VIDEO",
      subItems: ["Latest Videos", "Highlights", "Interviews"],
    },
    {
      label: "MORE",
      subItems: ["Membership", "About Us", "History"],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-logo">LFC</span>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="sidebar-language">
        <img src={globe} className="icon" alt="Language Icon" />
        <span>EN</span>
        <img src={arrowDown} className="icon" alt="Dropdown Arrow" />
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <a key={index} href="">
            {item.label}
            {item.subItems.length > 0 && <img src={arrowForward} className="icon" alt="Arrow" />}
          </a>
        ))}
      </div>
      <div className="sidebar-join">
        <h3>JOIN MYLFC, YOUR FREE, OFFICIAL LFC ACCOUNT</h3>
        <p>Unlock new, exciting, and exclusive benefits including videos, match commentary, emagazine, and more, all in one place.</p>
        <Link to={"/register"}>REGISTER FOR FREE {">"}</Link>
      </div>
      <div className="sidebar-login">
        <div>ALREADY REGISTERED? <Link to={"/login"}>Log in here</Link></div>
      </div>
      <div className="sidebar-social">
        <img src={facebookLogo} alt="Facebook" />
        <img src={facebookLogo} alt="LinkedIn" />
        <img src={facebookLogo} alt="TikTok" />
        <img src={facebookLogo} alt="Twitter" />
        <img src={facebookLogo} alt="YouTube" />
      </div>
      <div className="sidebar-help">
        <div>HELP</div>
        <a>Help & FAQs</a>
        <a>Contact</a>
        <a>A-Z</a>
      </div>
    </div>
  );
};

export default SideBar;
