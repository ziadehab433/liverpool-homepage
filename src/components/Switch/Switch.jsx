import React, { useState } from "react";
import "./Switch.css";

const SwitchComponent = ({ isOn, toggleSwitch}) => {

  return (
    <div
      className={`switch ${isOn ? "switch-on" : "switch-off"}`}
      onClick={toggleSwitch}
    >
      <div
        className={`switch-handle ${isOn ? "handle-on" : "handle-off"}`}
      ></div>
    </div>
  );
};

export default SwitchComponent;
