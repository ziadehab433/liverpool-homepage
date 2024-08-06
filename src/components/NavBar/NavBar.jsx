import "./NavBar.css";
import logo from "/src/assets/images/Liverpool-Logo.png";
import personIcon from "/src/assets/icons/person.png";
import arrowDown from "/src/assets/icons/arrowDown.png";
import globe from "/src/assets/icons/globe.png";
import standardChartered from "/src/assets/icons/standardChartered.png";
import hamburgerMenu from "/src/assets/icons/hamburgerMenu.png";
import { useState, useRef, useEffect } from "react";
import LocalizationMenu from "../LocalizationMenu/LocalizationMenu";
import NavSubItemsCon from "../NavSubItemsCon/NavSubItemsCon";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";
import NavSubItems from "../NavSubItems/NavSubItems";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  const [smallLogo, setSmallLogo] = useState(false);
  const [style, setStyle] = useState({ padding: "20px 110px" });

  const [activeItem, setActiveItem] = useState(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setSmallLogo(true);
      setStyle({
        padding: "15px 20px",
        width: "91%",
        left: "50%",
        transform: "translateX(-50%)",
      });
    } else {
      setSmallLogo(false);
      setStyle({ padding: "20px 110px" });
    }
  });

  const [LMisOpen, setLMisOpen] = useState(false);

  const closeNSI = () => {
    setActiveItem(null);
  };

  const menuItems = [
    {
      label: "NEWS",
      sub: [
        {
          label: "NEWS",
          subItems: [
            "All News",
            "Men",
            "Women",
            "Academy",
            "Club",
            "Media Watch",
            "Tickets",
          ],
        },
      ],
    },
    {
      label: "FIXTURES & TEAMS",
      sub: [
        {
          label: "MENS",
          subItems: [
            "Fixtures",
            "Results",
            "Tables",
            "Match Centre",
            "Players & Staff",
            "Stats",
          ],
        },
        {
          label: "WOMENS",
          subItems: [
            "Fixtures",
            "Results",
            "Tables",
            "Match Centre",
            "Players & Staff",
            "St Helens Stadium",
          ],
        },
        {
          label: "ACADEMY",
          subItems: [
            "Players & Staff",
            "U18s Fixtures",
            "U18s Results",
            "U21s Fixtures",
            "U21s Results",
          ],
        },
      ],
    },
    {
      label: "TICKETS & BOOKING",
      sub: [
        {
          label: "TICKETS",
          subItems: [
            "Tickets Availability",
            "How To Buy Tickets",
            "Away Travel",
            "Accessibility",
          ],
        },
        {
          label: "LFC WOMEN TICKETS",
          subItems: [
            "LFC Women Season Tickets",
            "LFC Women Tickets Availability",
          ],
        },
        {
          label: "BOOKING",
          subItems: [
            "Match Hospitality",
            "Meetings & Events",
            "Stadium Tours",
            "Concerts",
            "LFC Events",
            "Official Match Breaks Hospitality",
          ],
        },
      ],
    },
    {
      label: "SHOP",
      sub: [
        {
          label: "SHOP",
          subItems: [
            "Online Store",
            "Club Store",
            "Soccer Schools",
            "Membership",
            "E-Academy",
            "Anfield Forever",
            "Programme & Magazine",
            "Wholesale Partners",
          ],
        },
        {
          label: "MENS",
          subItems: ["Men's Home Kit", "Men's Away Kit", "Men's Third Kit"],
        },
        {
          label: "WOMENS",
          subItems: [
            "Women's Home Kit",
            "Women's Away Kit",
            "Women's Third Kit",
          ],
        },
        {
          label: "SALE",
          subItems: ["Men's Fashion", "Women's Fashion", "Kid's Fashion"],
        },
      ],
    },
    {
      label: "VIDEO",
      sub: [
        {
          label: "VIDEO",
          subItems: ["LFCTV GO", "Matches", "Players", "Browse", "Playlists", "Live"],
        },
      ],
    },
    {
      label: "MORE",
      sub: [
        {
          label: "MORE",
          subItems: ["Membership", "About Us", "History"],
        },
      ],
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <nav style={style}>
        <img
          src={hamburgerMenu}
          className="menu-icon show-on-mobile"
          alt=""
          onClick={() => setIsSidebarOpen(true)}
        />
        <div href="" className="hide-on-mobile">
          {smallLogo ? (
            <a className="LFC-logo"> LFC </a>
          ) : (
            <img className="logo" src={logo} alt="liverpool's logo" />
          )}
        </div>
        <div href="" className="show-on-mobile">
          <a className="LFC-logo"> LFC </a>
        </div>
        <div className="nav-options hide-on-mobile">
          {menuItems.map((item, index) => (
            <a
              key={index}
              onClick={() => {
                setActiveItem(index);
              }}
            >
              {item.label}
            </a>
          ))}
          <span>|</span>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
            className="align-divs"
          >
            <img src={personIcon} className="icon" alt="" />
            <span>JOIN</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/login"}
          >
            LOGIN
          </Link>
          <span>|</span>
          <a
            className="align-divs"
            onClick={() => {
              setLMisOpen(true);
            }}
          >
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

      {LMisOpen && (
        <Overlay closeFunc={() => setLMisOpen(false)}>
          <LocalizationMenu />
        </Overlay>
      )}
      {activeItem !== null && (
        <Overlay closeFunc={closeNSI}>
          <NavSubItemsCon>
            {menuItems[activeItem].sub.map((item, index) => {
              return (
                <NavSubItems
                  key={index}
                  label={item.label}
                  items={item.subItems}
                />
              );
            })}
          </NavSubItemsCon>
        </Overlay>
      )}

      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default NavBar;
