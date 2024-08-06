import { Link } from "react-router-dom"
import "./HeaderBar.css"

const HeaderBar = ({ children, label, more, linkTo, variant}) => {
  return (
    <div className="header"> 
      <div className={variant=="red" ? "label-red" : "label-white"} >{label}</div>
      <div>
        { children }
        <Link to={linkTo}>
          <div className={variant=="red" ? "more-red" : "more-white"}>{more}</div> 
        </Link>
      </div>
    </div>
  )
}

export default HeaderBar