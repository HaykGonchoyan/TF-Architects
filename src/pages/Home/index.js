import { Link } from "react-router-dom"
import { LANG_CONSTANTS, ROUTE_CONSTANTS } from "../../components/core/utils/constants"


import "./index.css"
import { useEffect, useState } from "react"

const importAll = (r) => {
        return r.keys().map(r);
}
  
const images = importAll(require.context('./SlideShow/', false, /.(png)$/))

const routes = ["/UWC", "/Yeghvard_EC", "/TIC", "/IDeA_office", "/FAST", "/Dilitown", "/Dilitropic", "/Marash"]

const Home = () => {
    const [count, setCount] = useState(0) 

    useEffect(() => {
        setInterval(() => {
            setCount(count => count+1)
        }, 3000)
    }, [])
    
    return(
        <div className="home-container" >
            <Link to = {ROUTE_CONSTANTS.PORTFOLIO + routes[count]}><div className="home-slideshow" style={{backgroundImage: `url(${images[count%images.length]})`}} /></Link>
            <div className="left-container">
                <h1 className="home-h1">TF+Architects</h1>
                <Link className="home-single-link" to={ROUTE_CONSTANTS.PORTFOLIO}><div>{LANG_CONSTANTS.PORTFOLIO[0]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.SERVICES}><div>{LANG_CONSTANTS.SERVICES[0]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.ABOUT_US}><div>{LANG_CONSTANTS.ABOUT_US[0]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.CONTACTS}><div>{LANG_CONSTANTS.CONTACTS[0]}</div></Link>
                <br />
 
            </div>
        </div>
    )
}

export default Home