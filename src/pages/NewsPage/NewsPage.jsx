import "./NewsPage.css";
import Ad from "../../components/Ad/Ad";
import NavBar from "../../components/NavBar/NavBar";
import HeadLineCard from "../../components/HeadLineCard/HeadLineCard";
import headLineData from "../../data/headLines.json";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useState } from "react";

const NewsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sWidth, setSWidth] = useState(2000);

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
          {headLineData.map((headLine, index) => {
            return (
              <HeadLineCard
                key={index}
                headLine={headLine}
                variant="white"
                horizontal={sWidth < 775 ? true : false}
              />
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
