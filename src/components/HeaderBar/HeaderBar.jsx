import "./HeaderBar.css"

const HeaderBar = ({ children, label, more, variant}) => {
  return (
    <div className="header"> 
      <div className={variant=="red" ? "label-red" : "label-white"} >{label}</div>
      <div>
        { children }
        <div className={variant=="red" ? "more-red" : "more-white"}>{more}</div> 
      </div>
    </div>
  )
}

export default HeaderBar