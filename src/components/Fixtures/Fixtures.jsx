import "./Fixtures.css"
import HeaderBar from "../HeaderBar/HeaderBar"
import FixturesCard from "../FixturesCard/FixturesCard"
import playlistAdd from "/src/assets/icons/playlistAdd.png"

const Fixtures = () => {
    const dumb = [1, 2, 3];

    return (
        <div className="fixtures-component-container">
            <HeaderBar label="PRE-SEASON" more="ALL FIXTURES">
                <a href="">
                    <button className="add-fixtures-button">
                        <img src={playlistAdd} alt="" />
                        ADD FIXTURES TO CALENDAR
                    </button>
                </a>
            </HeaderBar>
            <div className="fixtures-grid">
                {dumb.map((item, index) => {
                    return <FixturesCard key={index} />
                })}
            </div>
        </div>
    )
}

export default Fixtures
