import "./Community.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import { useState, useEffect } from "react";
import { fetchNews } from "../../util/newsApi";

const Community = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(3);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  return ( 
    <div className="community-container">
        <HeaderBar label="CLUB AND COMMUNITY" more="MORE >"/>
        <div className="community-grid">
            {news.map((item, index) => {
                return <HeadLineCard key={index} headLine={item} variant="white"/>;
            })}
        </div>
    </div>
  );
};

export default Community;
