import { Link } from "react-router-dom"
import { ROUTE_CONSTANTS } from "../../components/core/utils/constants"

import "./index.css"

const Home = () => {
    return(
        <div className="home-container">
            <div className="left-container">
                <h1 className="home-h1">TF+Arcitects</h1>
                <Link className="home-single-link" to={ROUTE_CONSTANTS.PORTFOLIO}><div>PORTFOLIO</div></Link>
                <div className="home-single-link">SERVICES</div>
                <div className="home-single-link">ABOUT US</div>
                <div className="home-single-link">OUR PARTNERS</div>
                <div className="home-single-link">CONTACTS</div>
            </div>
        </div>
    )
}

export default Home