import "./LFCretail.css";
import Button from "../Button/Button"
import ItemListing from "../ItemListing/ItemListing"
import HeaderBar from "../HeaderBar/HeaderBar";
import { useState } from "react";
import LFCretail_away from "../../data/LFCretail_away.json"
import LFCretail_training from "../../data/LFCretail_training.json"

const LFCretail = () => {
  const options = [{title: "NEW: 24/25 AWAY KIT", source: "LFCretail_away"}, {title: "NEW: 24/25 TRAINING", source: "LFCretail_training"} ];
  const [option, setOption] = useState(options[0]);

  return ( 
    <div className="LFCretail-container">
      <HeaderBar label="LFC RETAIL" variant="white" />
      <div className="LFCretail-item-container">
        <div className="LFCretail-header">
          {
            options.map((opt, index) => { 
              return <div key={index} className={opt.title == option.title ? "selected" : ""} onClick={() => { setOption(opt) }}>{opt.title}</div>
            })
          }
        </div>
        <div className="LFCretail-grid">
          { 
            option.source == "LFCretail_away" ? 
            LFCretail_away.map((item, index) => { 
              return <ItemListing key={index} item={item} />
            }) : 
            LFCretail_training.map((item, index) => { 
              return <ItemListing key={index} item={item} />
            }) 
          }
        </div>
        <Button style={{backgroundColor: "#FFD700", color: "black", width: "400px"}}>VISIT THE LFC STORE NOW {">"}</Button>
      </div>
    </div>
  )
};

export default LFCretail;
