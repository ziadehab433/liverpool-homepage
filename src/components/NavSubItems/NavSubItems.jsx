import { Link } from "react-router-dom";
import "./NavSubItems.css";

const NavSubItems = ({label, items}) => {
  return ( 
    <div className="sub-items">
        <div className="label">
            {label}
        </div>
        <div className="items">
            {items.map((item, index) => { 
                return <Link key={index} style={{textDecoration: "none", color: "rgb(84, 84, 84)"}}>{item}</Link>
            })}
        </div>
    </div>
  );
};

export default NavSubItems;
