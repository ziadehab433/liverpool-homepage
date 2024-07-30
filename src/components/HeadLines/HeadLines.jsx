import "./HeadLines.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import Ad from "../Ad/Ad";
import headLineData from "/src/data/headLines.json";

const HeadLines = () => {
  return (
    <div className="headLines-container">
      <HeaderBar label="HEADLINES" more="ALL NEWS >" variant="red"></HeaderBar>
      <div className="headLines-grid">
        {headLineData.map((headLine, index) => {
          return <HeadLineCard key={index} headLine={headLine} variant="red"/>;
        })}

        <Ad />
      </div>
    </div>
  );
};

export default HeadLines;
