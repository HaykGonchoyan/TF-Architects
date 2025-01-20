

import "./index.css"

const Project = ({ image, description }) => {
    return(
        <div className="image-card" style={{backgroundImage: `url(${image})`}}>
            <div className="text-container">
                <div className="text">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Project