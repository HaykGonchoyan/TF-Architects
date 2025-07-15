import Project from "../../components/Project"
import { ROUTE_CONSTANTS } from "../../components/core/utils/constants"
import UWCmain from "../../components/Project/pictures/UWC/UWCmain.png"
import TICmain from "../../components/Project/pictures/TIC/TICmain.png"
import IDeAmain from "../../components/Project/pictures/PS_Baghramyan_6/IDeAmain.png"
import FASTmain from "../../components/Project/pictures/FAST/FASTmain.png"
import DiliTownMain from "../../components/Project/pictures/DiliTown/DiliTownMain.png"
import YECmain from "../../components/Project/pictures/Yeghvard_Education_Center/YECmain.png"
import DiliTropicMain from "../../components/Project/pictures/Dili_Tropic/DilitropicMain.png"
import RubyMain from "../../components/Project/pictures/Ruby/RubyMain.png"
import StecoMain from "../../components/Project/pictures/Steko/main.png"
import MarashMain from "../../components/Project/pictures/Marash/main.png";
import HotelMain from "../../components/Project/pictures/HotelComplex/Sort/main.jpg"

import "./index.css"
import ScrollTop from "../../components/ScrollTop"

const Portfolio = () => {
    return(
        <div className="project-container">
            <h1 className="portfolio-h1">
                PORTFOLIO
            </h1>
            <h2 className="portfolio-h2">
                COMPLETED PROJECTS
            </h2>
            <hr />
            <div className="container">
                <Project image={UWCmain} description="UWC-Dilijan" link={ROUTE_CONSTANTS.PORTFOLIO + "/UWC"}/>
                <Project image={TICmain} description="TIC-Dilijan" link={ROUTE_CONSTANTS.PORTFOLIO + "/TIC"}/>
                <Project image={IDeAmain} description="IDeA Office-Yerevan" link={ROUTE_CONSTANTS.PORTFOLIO + "/IDeA_office"}/>
                <Project image={FASTmain} description="FAST-Yerevan" link={ROUTE_CONSTANTS.PORTFOLIO + "/FAST"}/>
                <Project image={DiliTownMain} description="DiliTown-Dilijan" link={ROUTE_CONSTANTS.PORTFOLIO + "/Dilitown"}/>
                <Project image={YECmain} description="Yeghvard EC-Yeghvard" link={ROUTE_CONSTANTS.PORTFOLIO + "/Yeghvard_EC"}/>
                <Project image={RubyMain} description="Ruby-Dubai" link={ROUTE_CONSTANTS.PORTFOLIO + "/Ruby"}/>
            </div>
            <hr />
            <h2 className="portfolio-h2">
                INCOMPLETED PROJECTS
            </h2>
            <hr />
            <div className="container">
                <Project image={DiliTropicMain} description="Dilitropic-Dilijan" link={ROUTE_CONSTANTS.PORTFOLIO + "/Dilitropic"}/>               
                <Project image={StecoMain} description="Steko-Yerevan" link={ROUTE_CONSTANTS.PORTFOLIO + "/Steko"}/>
                <Project image={MarashMain} description="Marash Complex-Yerevan" link={ROUTE_CONSTANTS.PORTFOLIO + "/Marash"}/>
                <Project image={HotelMain} description="Hotel-Dilijan" link={ROUTE_CONSTANTS.PORTFOLIO + "/HotelComplex"}/>               
            </div>
            <ScrollTop />
        </div>
    )
}

export default Portfolio