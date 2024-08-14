import { useState } from "react";
import "./LocalizationMenu.css"

const LocalizationMenu = () => {

  return (
    <div className="localization-container">
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