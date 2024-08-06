import NavBar from "../components/NavBar/NavBar";
import HeadLines from "../components/HeadLines/HeadLines";
import LFCretail from "../components/LFCretail/LFCretail";
import Fixtures from "../components/Fixtures/Fixtures";
import LFCwomen from "../components/LFCwomen/LFCwomen";
import Article from "../components/Article/Article";
import Community from "../components/Community/Community";
import Memory from "../components/Memory/Memory";
import Trophies from "../components/Trophies/Trophies";
import Footer from "../components/Footer/Footer";
import Ad from "../components/Ad/Ad";

const homePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeadLines />
        <LFCretail />
        <Ad variant="big" />
        <Fixtures />
        <Ad variant="small"/>
        <Article />
        <Ad variant="big"/>
        <LFCwomen />
        <Community />
        <Memory />
        <Trophies />
        <Footer />
      </main>
    </>
  )
}

export default homePage