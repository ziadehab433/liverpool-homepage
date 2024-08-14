import "./FixturesCard.css";
import Button from "../Button/Button";

const FixturesCard = ({ fixture }) => {
  return (
    <div className="fixtures-container">
      <div className="fixtures-text">
        <div>{fixture.leagueName}</div>
        <div>{fixture.date}</div>
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
            <img src={fixture.opponentLogo} alt="" />
            <div>{fixture.opponent}</div>
          </div>
        </div>
        {fixture.score && (
          <div className="fixtures-score">
            <div>{fixture.score[0]}</div>
            <span></span>
            <div>{fixture.score[1]}</div>
          </div>
        )}
      </div>
      <Button
        style={{ backgroundColor: "black", color: "white", height: "80px" }}
      >
        {fixture.score ? "See Match Results >" : "BUY TICKETS HERE >"}
      </Button>
    </div>
  );
};

export default FixturesCard;
