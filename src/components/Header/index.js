import { Link } from "react-router-dom"
import { LANG_CONSTANTS, ROUTE_CONSTANTS } from "../core/utils/constants"
import { useState } from "react"
import { GlobalOutlined } from "@ant-design/icons"


import "./index.css"


const Header = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(true)
    const [menuClass, setMenuClass] = useState('')
    const [menuLinkClass, setMenuLinkClass] = useState('closed-menu')
    const [lang, setLang] = useState(Number(localStorage.lang))    
    window.scrollTo(0, 0);
    
    
   

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
        if (isMenuOpen) {
            setMenuClass('menu')
            setMenuLinkClass('single_link-menu')
        }else{
            setMenuClass('')
            setMenuLinkClass('closed-menu')
        }

      }

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
    
    return(
        <div className="header">
        <div className="header-main">
        <Link className="logo" to="/"/>
        <div className="pages">
             <div className="links" id="links">
                <Link className="single_link on-menu-link" to="/"><div>{LANG_CONSTANTS.HOME[lang]}</div></Link>
                <Link className="single_link on-menu-link" to={ROUTE_CONSTANTS.PORTFOLIO}><div>{LANG_CONSTANTS.PORTFOLIO[lang]}</div></Link>
                <Link className="single_link on-menu-link" to={ROUTE_CONSTANTS.SERVICES}><div>{LANG_CONSTANTS.SERVICES[lang]}</div></Link>
                <Link className="single_link on-menu-link" to={ROUTE_CONSTANTS.ABOUT_US}><div>{LANG_CONSTANTS.ABOUT_US[lang]}</div></Link>
                <Link className="single_link on-menu-link" to={ROUTE_CONSTANTS.CONTACTS}><div>{LANG_CONSTANTS.CONTACTS[lang]}</div></Link>

                
                <div className="single_link" onClick={handleLangClick}>{LANG_CONSTANTS.LANG[lang]}<GlobalOutlined /></div>
                
                
                
                <div className="single_link header-menu" onClick={handleMenuClick}>{LANG_CONSTANTS.MENU[lang]}</div>
            </div>  
            
        </div>
    </div>


    <div className={menuClass}>
        <Link className={menuLinkClass} onClick={handleMenuClick} to="/"><div>HOME</div></Link>
        <Link className={menuLinkClass} onClick={handleMenuClick} to={ROUTE_CONSTANTS.PORTFOLIO}><div>{LANG_CONSTANTS.PORTFOLIO[lang]}</div></Link>
        <Link className={menuLinkClass} onClick={handleMenuClick} to={ROUTE_CONSTANTS.SERVICES}><div>{LANG_CONSTANTS.SERVICES[lang]}</div></Link>
        <Link className={menuLinkClass} onClick={handleMenuClick} to={ROUTE_CONSTANTS.ABOUT_US}><div>{LANG_CONSTANTS.ABOUT_US[lang]}</div></Link>
        <Link className={menuLinkClass} onClick={handleMenuClick} to={ROUTE_CONSTANTS.CONTACTS}><div>{LANG_CONSTANTS.CONTACTS[lang]}</div></Link>
    </div>
    </div>
    )
}

export default Header