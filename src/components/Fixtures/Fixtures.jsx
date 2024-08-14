import "./Fixtures.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import FixturesCard from "../FixturesCard/FixturesCard";
import playlistAdd from "/src/assets/icons/playlistAdd.png";
import { useState, useEffect } from "react";

const API_KEY = "57a7fb2998871684b24312bda1446baf31c5b345a293b97a9f1995b3a73baab6";
const TEAM_ID = 84;

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const updateState = (data) => {
    setFixtures(data.result);
  };

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const today = new Date();
        const fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 6);
        const toDate = new Date(today);
        toDate.setDate(today.getDate() + 6);

        const from = fromDate.toISOString().split("T")[0];
        const to = toDate.toISOString().split("T")[0];

        const response = await fetch(
          `https://apiv2.allsportsapi.com/football/?met=Fixtures&teamId=${TEAM_ID}&from=${from}&to=${to}&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("failed to fetch fixtures");
        }
        const data = await response.json();
        updateState(data);
      } catch (error) {
        console.error("error fetching fixtures:", error);
      }
    };

    fetchFixtures();
  }, []);

  const formatFixtureData = (fixtures) => {
    return fixtures.map((fixture) => {
      let opponent;
      if (fixture.event_home_team && fixture.event_away_team) {
        opponent = fixture.event_home_team.includes("Liverpool")
          ? fixture.event_away_team
          : fixture.event_home_team;
      } else {
        opponent = "Unknown";
        console.error("Team data missing for fixture:", fixture);
      }

      let formattedDate = "Date unknown";
      if (fixture.event_date) {
        const date = new Date(fixture.event_date);
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const months = [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER",
        ];

        formattedDate = `${days[date.getDay()]} ${date.getDate()} ${
          months[date.getMonth()]
        } - ${date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}`;
      }

      return {
        date: formattedDate,
        leagueName: fixture.league_name.toUpperCase(),
        opponent: opponent,
        opponentLogo:
          fixture.event_home_team === "Liverpool"
            ? fixture.away_team_logo
            : fixture.home_team_logo,
        competition: fixture.league_name,
        score:
          fixture.event_final_result === "-"
            ? null
            : fixture.event_final_result.split(" - "),
      };
    });
  };

  const fixtureData = formatFixtureData(fixtures);

  return (
    <div className="fixtures-component-container">
      <HeaderBar label="FIXTURES" more="ALL FIXTURES">
        <a href="">
          <button className="add-fixtures-button">
            <img src={playlistAdd} alt="" />
            ADD FIXTURES TO CALENDAR
          </button>
        </a>
      </HeaderBar>
      <div className="fixtures-grid">
        {fixtureData.map((fixture, index) => (
          <FixturesCard key={index} fixture={fixture} />
        ))}
      </div>
    </div>
  );
};

export default Fixtures;