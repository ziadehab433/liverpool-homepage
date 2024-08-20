import "./LFCwomen.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import { useState, useEffect } from "react";
import { fetchNews } from "../../util/newsApi";

const LFCwomen = () => {
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
    <div className="LFCwomen-container">
      <HeaderBar label="LFC WOMEN" more="MORE NEWS >" variant="red" />
      <div className="LFCwomen-grid">
        {news.map((item, index) => {
          return <HeadLineCard key={index} headLine={item} variant="red" />;
        })}
      </div>
    </div>
  );
};

export default LFCwomen;
