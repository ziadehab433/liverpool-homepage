import "./NewsPage.css";
import Ad from "../../components/Ad/Ad";
import NavBar from "../../components/NavBar/NavBar";
import HeadLineCard from "../../components/HeadLineCard/HeadLineCard";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { fetchNews } from "../../util/newsApi";

const NewsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sWidth, setSWidth] = useState(2000);
  const [news, setNews] = useState([]);

  var onresize = function (e) {
    setSWidth(document.body.clientWidth);
  };
  window.addEventListener("resize", onresize);

  const closeFilter = (e) => {
    if (
      e.target.className === "filter-dropdown-open" ||
      e.target.className === "filter-dropdown"
    ) {
      return;
    }

    if (filterOpen == true) {
      setFilterOpen(false);
    }
  };

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(20);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  let randomNum = [];
  for (let i = 0; i < 2; i++) {
    randomNum.push(Math.floor(Math.random() * 20));
  }
  console.log(randomNum);

  return (
    <>
      <Ad />
      <div className="news-page-container" onClick={closeFilter}>
        <NavBar />
        <div className="filter">
          <div>ALL NEWS</div>
          <div
            className={filterOpen ? "filter-dropdown-open" : "filter-dropdown"}
            onClick={() => {
              filterOpen ? setFilterOpen(false) : setFilterOpen(true);
            }}
          >
            <div>FILTER BY TOPIC ^</div>
            <div>
              <h4>All news</h4>
              <p>Men</p>
              <p>Women</p>
              <p>Academy</p>
              <p>Club</p>
              <p>Meida Watch</p>
              <p>Tickets</p>
            </div>
          </div>
        </div>

        <div className="news-page-grid">
          {news.map((headLine, index) => {
            return (
              <div
                className={
                  randomNum.includes(index)
                    ? "headlineCard-container headlineCard-double"
                    : "headlineCard-container"
                }
              >
                <HeadLineCard
                  key={index}
                  headLine={headLine}
                  variant="white"
                  horizontal={sWidth < 775 ? true : false}
                />
              </div>
            );
          })}
        </div>

        <div
          style={{
            padding: "100px 50px 100px 50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "350px" }}>
            <Button style={{ color: "white", backgroundColor: "black" }}>
              LOAD MORE {">"}
            </Button>
          </div>
        </div>
        <Ad variant="small" />
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
