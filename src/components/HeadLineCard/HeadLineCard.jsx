import "./HeadLineCard.css";

const HeadLine = ({ headLine, variant, horizontal}) => {
  if (horizontal) { 
    return ( 
      <div className="headLine-component-container-horizontal">
        <div className="headLine-container-horizontal">
          <img className="headLine-img" src={headLine.img} alt="" />
          <div>
            <div className="headLine-time">{headLine.timePassed}</div>
            <div className="headLine-text" >
              <span>{headLine.type}</span>
              {headLine.title}
            </div>
          </div>
        </div>
        <div className="stand" ></div>
      </div>
    )
  }

  return (
    <div className={variant =="red" ? "headLine-component-container-red" : "headLine-component-container-white"}>
      <div className="headLine-container">
        <img className="headLine-img" src={headLine.img} alt="" />
        <div style={variant == "red"? {color: "white"} : {color: "black"}}>
          <div className="headLine-time">{headLine.timePassed}</div>
          <div className="headLine-text" >
            <span>{headLine.type}</span>
            {headLine.title}
          </div>
        </div>
        <div className="stand" ></div>
      </div>
    </div>
  );
};

export default HeadLine;
