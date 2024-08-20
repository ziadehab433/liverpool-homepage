import "./HeadLines.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import HeadLineCard from "../HeadLineCard/HeadLineCard";
import AdCard from "../AdCard/AdCard";
import { useState, useEffect } from "react";
import { fetchNews } from "../../util/newsApi";

const HeadLines = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(5);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  return (
    <div className="headLines-container">
      <HeaderBar
        label="HEADLINES"
        more="ALL NEWS >"
        variant="red"
        linkTo="/news"
      ></HeaderBar>
      <div className="headLines-grid">
        {news.map((headLine, index) => {
          return <HeadLineCard key={index} headLine={headLine} variant="red" />;
        })}

        <AdCard />
      </div>
    </div>
  );
};

export default HeadLines;
