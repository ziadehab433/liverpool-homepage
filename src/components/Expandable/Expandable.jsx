import React, { useState } from "react";
import "./Expandable.css";

const Expandable = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-section">
      <div className="section-header" onClick={toggleSection}>
        <h2>{header}</h2>
        <span className="toggle-icon">{isOpen ? "✖" : "✚"}</span>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
      <div className="bar"></div>
    </div>
  );
};

export default Expandable;
