import "./Article.css";
import HeadLine from "../HeadLineCard/HeadLineCard";
import HeaderBar from "../HeaderBar/HeaderBar";
import articleData from "../../data/articleData.json";

const Article = () => {
  return (
    <div className="article-component-container">
      <div className="article-container">
      <HeaderBar label="HAVE YOU SEEN?" />
        <div>
          <div className="article-text">
            <span>INTERVIEW</span> How Conor Bradley returned for pre-season
            'bigger, stronger, fitter'
          </div>
          <div className="article-time">2 DAYS AGO</div>
        </div>
        <img
          src="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-07/conor-bradley-liverpool-fc-280724_1.webp?itok=N1iFtbrS&width=1680"
          alt=""
        />
      </div>
      <div className="article-grid">
        {articleData.map((item, index) => {
          return <HeadLine headLine={item} key={index} variant="white"/>;
        })}
      </div>
    </div>
  );
};

export default Article;
