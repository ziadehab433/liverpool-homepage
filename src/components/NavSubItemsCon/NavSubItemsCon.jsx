import "./NavSubItemsCon.css";
import facebookLogo from "../../assets/icons/facebookLogoBlack.png";
import Button from "../Button/Button";
import { useState } from "react";

const NavSubItems = ({ children }) => {
  const [style, setStyle] = useState({top: "120px"})
  window.addEventListener("scroll", () => { 
    if (window.scrollY >= 150) { 
      setStyle({top: "72px"})
    }else { 
      setStyle({top: "120px"})
    }
  });

  return (
    <div className="nav-sub-items-container" style={style}>
      <div className="top-section">

        {children}

        <div className="sub-items-ad">
          <div>JOIN MYLFC, YOUR FREE, OFFICIAL LFC ACCOUNT</div>
          <div>Unlock new, exciting and exclusive benefits including videos, match commentary, emagazine and more, all in one place.</div>
          <Button style={{color: "white", backgroundColor: "black"}}>REGISTER FOR FREE{" > "}</Button>
        </div>
      </div>
      <div className="bar"></div>
      <div className="bottom-section">
        <div className="help">
          <div>HELP</div>
          <a>Help & FAQs</a>
          <a>Contact</a>
          <a>A-Z</a>
        </div>
        <div>
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={facebookLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavSubItems;
