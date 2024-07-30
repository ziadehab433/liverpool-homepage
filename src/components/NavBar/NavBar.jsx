import "./NavBar.css";
import logo from "/src/assets/images/Liverpool-Logo.png";
import personIcon from "/src/assets/icons/person.png";
import arrowDown from "/src/assets/icons/arrowDown.png";
import globe from "/src/assets/icons/globe.png";
import standardChartered from "/src/assets/icons/standardChartered.png";
import hamburgerMenu from "/src/assets/icons/hamburgerMenu.png";
import { useState } from "react";

const NavBar = () => {
  const [smallLogo, setSmallLogo] = useState(false);
  const [style, setStyle] = useState({ padding: "20px 110px" });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setSmallLogo(true);
      setStyle({ padding: "0px 20px" , width: "90%" ,left: "50%", transform: "translateX(-50%)"});
    } else {
      setSmallLogo(false);
      setStyle({ padding: "20px 110px" });
    }
  });

  return (
    <nav style={style}>
      <img src={hamburgerMenu} className="menu-icon show-on-mobile" alt="" />
      <a href="" className="hide-on-mobile">
        {smallLogo ? (
          <img className="LFC-logo" src={logo} alt="liverpool's logo" />
        ) : (
          <img className="logo" src={logo} alt="liverpool's logo" />
        )}
      </a>
      <a href="" className="show-on-mobile">
        <img className="LFC-logo" src={logo} alt="liverpool's logo" />
      </a>
      <div className="nav-options hide-on-mobile">
        <a>NEWS</a>
        <a>FIXTURES & TEAMS</a>
        <a>TICKETS & BOOKING</a>
        <a>SHOP</a>
        <a>VIDEO</a>
        <a>MORE</a>
        <span>|</span>
        <a className="align-divs">
          <img src={personIcon} className="icon" alt="" />
          <span>JOIN</span>
        </a>
        <a>LOGIN</a>
        <span>|</span>
        <a className="align-divs">
          <img src={globe} className="icon" alt="" />
          <span>EN</span>
          <img src={arrowDown} className="icon" alt="" />
        </a>
        <span>|</span>
        <img src={standardChartered} className="standardChartered" alt="" />
      </div>
      <img
        src={standardChartered}
        className="standardChartered show-on-mobile"
        alt=""
      />
    </nav>
  );
};

export default NavBar;
