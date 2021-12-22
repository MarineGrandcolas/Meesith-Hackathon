import React from "react"
import Logo from "../components/Logo";
import CarrouselClones from '../components/CarrouselClones';
import PresProject from "../components/PresProject"
import "./Home.css"

const Home = () => {
    return (
    <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <h2>Clones du mois</h2>
        <CarrouselClones/>
    </div>
  )
}

export default Home
