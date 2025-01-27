import { Link } from "react-router-dom"

import "./index.css"

const Project = ({ image, description, link }) => {
    return(
        <Link to={link}>
            <div className="image-card" style={{backgroundImage: `url(${image})`}}>
                <div className="text-container">
                    <div className="text">
                        {description}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Project