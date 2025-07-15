import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children, language}) => {
    
    return(<div>
        <Header language = {language}/>
        <div style={{position: "relative", minHeight: "calc(100vh - 176px)"}}>{children}</div>
        <Footer />
    </div>)
}

export default Layout