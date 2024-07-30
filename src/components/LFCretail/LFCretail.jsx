import "./LFCretail.css";
import Button from "../Button/Button"
import ItemListing from "../ItemListing/ItemListing"
import ItemData from "../../data/LFCretail.json"
import HeaderBar from "../HeaderBar/HeaderBar";

const LFCretail = () => {
  return ( 
    <div className="LFCretail-container">
      <HeaderBar label="LFC RETAIL" variant="white" />
      <div className="LFCretail-item-container">
        <div className="LFCretail-header">
              <div>NEW: 24/25 HOME KIT</div>
              <div>NEW: 24/25 STYLES</div>
              <div>YOU MAY LIKE</div>
        </div>
        <div className="LFCretail-grid">
          { ItemData.map((item, index) => { 
            return <ItemListing key={index} item={item} />
          })}
        </div>
        <Button style={{backgroundColor: "#FFD700", color: "black", width: "400px"}}>VISIT THE LFC STORE NOW {">"}</Button>
      </div>
    </div>
  )
};

export default LFCretail;
