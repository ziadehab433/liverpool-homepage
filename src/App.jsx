import "./index.css"
import NavBar from "./components/NavBar/NavBar"
import HeadLines from "./components/HeadLines/HeadLines"
import LFCretail from "./components/LFCretail/LFCretail"
import Fixtures from "./components/Fixtures/Fixtures"
import LFCwomen from "./components/LFCwomen/LFCwomen"
import Article from "./components/Article/Article"
import Community from "./components/Community/Community"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeadLines />
        <LFCretail />
        <Fixtures />
        <Article />
        <LFCwomen />
        <Community />
        <Footer />
      </main>
    </>
  )
}

export default App