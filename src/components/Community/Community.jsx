import "./Community.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import communityData from "../../data/community.json"

const Community = () => {
  return ( 
    <div className="community-container">
        <HeaderBar label="CLUB AND COMMUNITY" more="MORE >"/>
        <div className="community-grid">
            {communityData.map((item, index) => {
                return <HeadLineCard key={index} headLine={item} variant="white"/>;
            })}
        </div>
    </div>
  );
};

export default Community;
