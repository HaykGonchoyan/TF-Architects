import Project from "../../components/Project"

import UWCmain from "../../components/Project/pictures/UWC/04-UWCDilijan_25.jpg"
import TICmain from "../../components/Project/pictures/TIC/DilijanCityPark_01.jpg"
import IDeAmain from "../../components/Project/pictures/PS_Baghramyan_6/01-Office_06.jpg"
import FASTmain from "../../components/Project/pictures/FAST/01-Fast_01.jpg"
import DiliTownMain from "../../components/Project/pictures/DiliTown/Dili_Cam_1.jpg"
import YECmain from "../../components/Project/pictures/Yeghvard_Education_Center/Creative_Studio_Yeghvard_Cam-6.jpg"
import DiliTropicMain from "../../components/Project/pictures/Dili_Tropic/5.jpg"

import "./index.css"

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
                <Project image={UWCmain} description="UWC-Dilijan" link="./UWC"/>
                <Project image={TICmain} description="TIC-Dilijan" link="./TIC"/>
                <Project image={IDeAmain} description="IDeA Office-Yerevan" link="./IDeA_office"/>
                <Project image={FASTmain} description="FAST-Yerevan" link="./FAST"/>
                <Project image={DiliTownMain} description="DiliTown-Dilijan" link="./Dilitown"/>
                <Project image={YECmain} description="Yeghvard EC-Yeghvard" link="./Yeghvard_EC"/>
            </div>
            <hr />
            <h2 className="portfolio-h2">
                INCOMPLETED PROJECTS
            </h2>
            <hr />
            <div className="container">
                <Project image={DiliTropicMain} description="Dilitropic-Dilijan" link="/Dilitropic"/>
            </div>
        </div>
    )
}

export default Portfolio