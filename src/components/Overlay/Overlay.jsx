import "./Overlay.css";

const Overlay = ({ children, closeFunc }) => {
  const overlayClick = (e) => { 
    if (e.target.className === "overlay") { 
        closeFunc()
    }
  }

  return <div className="overlay" onClick={overlayClick}
  >{children}</div>;
};

export default Overlay;
