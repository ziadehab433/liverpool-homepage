import "./Overlay.css";

const Overlay = ({ closeFunc }) => {
  const overlayClick = (e) => { 
    if (e.target.className === "overlay") { 
        closeFunc()
    }
  }

  return <div className="overlay" onClick={overlayClick} ></div>;
};

export default Overlay;
