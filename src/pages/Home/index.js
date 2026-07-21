import { Link } from "react-router-dom"
import { LANG_CONSTANTS, ROUTE_CONSTANTS } from "../../components/core/utils/constants"
import { GlobalOutlined } from "@ant-design/icons"
import ImageLoader from "../../components/ImageLoader"


import "./index.css"
import { useEffect, useState } from "react"

const importAll = (r) => {
        return r.keys().map(r);
}
  
const images = importAll(require.context('./SlideShow/', false, /.(png)$/))

const routes = ["/UWC", "/Yeghvard_EC", "/TIC", "/IDeA_office", "/FAST", "/Dilitown", "/Dilitropic", "/Marash"]
const names = ["UWC", "YEGHVARD EC", "TIC", "IDEA OFFICE", "FAST", "DILITOWN", "DILITROPIC", "MARASH"]

const Home = () => {
    const [count, setCount] = useState(0) 
    const [lang, setLang] = useState(Number(localStorage.lang))  

    const handleLangClick = () => {
        if (!lang) {
            setLang(1)
            localStorage.setItem("lang", `1`)
        } else {
            setLang(0)
            localStorage.setItem("lang", `0`)
        }
        window.location.reload()
      }

    useEffect(() => {
        setInterval(() => {
            setCount(count => count+1)
        }, 3000)
    }, [])
    
    return(
        <div className="home-container" >
            <Link to = {ROUTE_CONSTANTS.PORTFOLIO + routes[count%routes.length]}><div className="home-slideshow" > <ImageLoader imageUrl={images[count%images.length] }  imageName={names[count%images.length]}/> </div></Link>
            <div className="left-container">
                <h1 className="home-h1">TF+Architects</h1>
                <Link className="home-single-link" to={ROUTE_CONSTANTS.PORTFOLIO}><div>{LANG_CONSTANTS.PORTFOLIO[lang]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.SERVICES}><div>{LANG_CONSTANTS.SERVICES[lang]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.ABOUT_US}><div>{LANG_CONSTANTS.ABOUT_US[lang]}</div></Link>
                <br />
                <Link className="home-single-link" to={ROUTE_CONSTANTS.CONTACTS}><div>{LANG_CONSTANTS.CONTACTS[lang]}</div></Link>

                <div className="home-single-link" onClick={handleLangClick}><GlobalOutlined className="globe"/> {LANG_CONSTANTS.LANGUAGE[lang]}</div>
            </div>
        </div>
    )
}

export default Home
