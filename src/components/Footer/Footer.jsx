import "./Footer.css";
import facebookLogo from "../../assets/icons/facebookLogoWhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bigSponsers">
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Nike_White.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_AXA_White.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-05/Expedia%20Logo%202023.svg"
            alt=""
          />
        </div>
      </div>
      <div className="smallSponsers">
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-05/logo-carlsberg.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2022-02/wasabi-logo-stacked-white.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Nivea%20White.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2024-06/JAL%20logo%20all%20white.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-07/kodansha_logo_horizontal_lockup_fixed.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2024-07/11_micro_no_box_no_type_white_pos.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-07/Peloton.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-08/Logo_Secondary_GPixel_Horz_White_900%20bound.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-12/Orion_Logo_Registered_White%201.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-04/EAS_PRIMARY_LOGO_WHT_PNG%20clear.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2022-02/_Fury_Horizontal.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2022-11/Extreme-Networks-WH.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2023-09/ups_flat_shield_white.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2024-07/husqvarna-white.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Cadbury%20White.svg"
            alt=""
          />
        </div>
      </div>

      <div className="links">
        <div className="top-section">
          <div className="left">
            <a>PRIVACY POLICY</a>
            <Link to={"/contact"} style={{color: "white", textDecoration: "none"}}>CONTACT US</Link>
            <a>TERMS AND CONDITIONS</a>
            <a>ACCESSIBILITY</a>
            <a>ANTI-SLAVERY</a>
            <a>COOKIE SETTINGS</a>
            <a>COOKIES</a>
            <a>HELP</a>
          </div>
          <div className="bar show-on-mobile"></div>
          <div className="right">
            <div className="socials">
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={facebookLogo} alt="" />
            </div>
            <div className="bar show-on-mobile"></div>
            <div className="download">
              <div>DOWNLOAD THE OFFICIAL LFC APP</div>
              <div>
                <img
                  src="https://backend.liverpoolfc.com/sites/default/files/2023-05/Expedia%20Logo%202023.svg"
                  alt=""
                />
                <img
                  src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bar"></div>
        <div className="copyright">
          © Copyright 2024 The Liverpool Football Club and Athletic Grounds
          Limited. All rights reserved. Match Statistics supplied by Opta Sports
          Data Limited. Reproduced under licence from Football DataCo Limited.
          All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
