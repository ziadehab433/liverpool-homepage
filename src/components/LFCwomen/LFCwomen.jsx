import "./LFCwomen.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import womenData from "../../data/LFCwomen.json";
import HeadLineCard from "../HeadLineCard/HeadLineCard";

const LFCwomen = () => {
  return (
    <div className="LFCwomen-container">
      <HeaderBar label="LFC WOMEN" more="MORE NEWS >" variant="red" />
      <div className="LFCwomen-grid">
        {womenData.map((item, index) => {
            return <HeadLineCard key={index} headLine={item} variant="red"/>;
        })}
      </div>
    </div>
  );
};

export default LFCwomen;
