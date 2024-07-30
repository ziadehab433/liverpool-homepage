import "./Ad.css";
import Button from "../Button/Button";

const Ad = () => {
  let btnStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div className="ad-component-container">
      <div className="ad-container">
        <div>
          <span>LFC ONLINE STORE</span> Shop the latest LFC label fashion,
          souvenirs and more. LFC Official Members and season ticket holders get
          10% off!
        </div>
        <img
          src="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2023-10/MXO%20Retail.webp?itok=upgs_bX3"
          alt=""
        />
        <Button style={btnStyle}>BUY NOW {">"}</Button>
      </div>
    </div>
  );
};

export default Ad;
