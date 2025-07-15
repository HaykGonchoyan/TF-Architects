import { useState, useEffect } from "react"

import "./index.css"

const ScrollTop = () => {
    
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setIsButtonVisible(false)
        }else{
            setIsButtonVisible(true)
        }
    }

    const handleScrollButton = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
    
      }, []);

    return(<div>
        {/* {isButtonVisible &&}*/ <div className={"scroll-button " + (isButtonVisible && "hide")} onClick={handleScrollButton}/>}
    </div>
)
}

export default ScrollTop