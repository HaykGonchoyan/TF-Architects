import Project from "../../components/Project"

import UWCmain from "../../components/Project/pictures/UWC/04-UWCDilijan_25.jpg"
import TICmain from "../../components/Project/pictures/TIC/DilijanCityPark_01.jpg"
import IDeAmain from "../../components/Project/pictures/PS_Baghramyan_6/01-Office_06.jpg"

import "./index.css"

const Portfolio = () => {
    return(
        <div className="project-container">
            <h1>
                COMPLETED PROJECTS
            </h1>
            <hr />
            <div className="container">
                <div />
                <Project image={UWCmain} description="UWC-Dilijan"/>
                <Project image={TICmain} description="TIC-Dilijan"/>
                <Project image={IDeAmain} description="IDeA Office-Yerevan"/>
                <div />
            </div>
        </div>
    )
}

export default Portfolio