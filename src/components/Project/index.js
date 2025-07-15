import { Link } from "react-router-dom"

import "./index.css"

const Project = ({ image, description, link }) => {
    return(
        
            <div className="image-card" style={{backgroundImage: `url(${image})`}}>
                <Link to={link} className="project-a">
                <div className="text-container">
                    <div className="text">
                        {description}
                    </div>
                </div></Link>
            </div>
        
    )
}

export default Project

