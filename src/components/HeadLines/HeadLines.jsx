import "./HeadLines.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import AdCard from "../AdCard/AdCard";
import headLineData from "/src/data/headLines.json";

const HeadLines = () => {
  return (
    <div className="headLines-container">
      <HeaderBar label="HEADLINES" more="ALL NEWS >" variant="red" linkTo="/news"></HeaderBar>
      <div className="headLines-grid">
        {headLineData.map((headLine, index) => {
          return <HeadLineCard key={index} headLine={headLine} variant="red" />;
        })}

        <AdCard />
      </div>
    </div>
  );
};

export default HeadLines;
