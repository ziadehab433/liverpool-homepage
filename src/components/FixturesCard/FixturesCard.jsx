import "./FixturesCard.css";
import Button from "../Button/Button";

const FixturesCard = ({ score }) => {
  return (
    <div className="fixtures-container">
      <div className="fixtures-text">
        <div>FRIENDLY</div>
        <div>SUN 4 AUGUST - 02:45</div>
      </div>
      <div className="fixtures-teamScore">
        <div className="fixtures-team">
          <div>
            <img
              src="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/lfc-digital-crest-2024.webp?itok=-LvUwDai"
              alt=""
            />
            <div>Liverpool</div>
          </div>
          <div></div>
          <div>
            <img
              src="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-04/manchester-united-crest.webp?itok=aZyRmIzS"
              alt=""
            />
            <div>Man Utd</div>
          </div>
        </div>
        <div className="fixtures-score">
          <div>1</div>
          <span></span>
          <div>0</div>
        </div>
      </div>
      <Button style={{ backgroundColor: "black", color: "white", height: "80px"}}>
        BUY TICKETS HERE {">"}
      </Button>
    </div>
  );
};

export default FixturesCard;
