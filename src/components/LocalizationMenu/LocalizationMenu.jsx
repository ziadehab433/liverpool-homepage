import { useState } from "react";
import "./LocalizationMenu.css"

const LocalizationMenu = () => {
  const [style, setStyle] = useState({top: "120px"})
  window.addEventListener("scroll", () => { 
    if (window.scrollY >= 150) { 
      setStyle({top: "72px"})
    }else { 
      setStyle({top: "120px"})
    }
  });

  return (
    <div className="localization-container" style={style}>
        <div>SELECT YOUR LANGUAGE</div>
        <div>
            <a href="">DEUTSCH</a>
            <a href="">ENGLISH</a>
            <a href="">ESPANOL</a>
            <a href="">FRANCAISE</a>
            <a href="">BAHASA INDONESIA</a>
            <a href="">ITALIANO</a>
            <a href="">PORTUGUES</a>
        </div>
    </div>
  )
}

export default LocalizationMenu