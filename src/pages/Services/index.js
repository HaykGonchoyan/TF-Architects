import "./index.css"

const Services = () => {
    return(<div className="services-cont">
        <h1>{!Number(localStorage.lang) ? "Services" : "Սերվիս"}</h1>
        <br />
        <h2>Architectural Design</h2>
        <ul>
            <li>Individual Residential Houses</li>
            <li>Public Buildings</li>
            <li>Multi-functional Residential Complexes</li>
            <li>Building Reconstruction and Restoration</li>
            <li>Urban Planning</li>    
        </ul>
        <h2>Interior Design</h2>
        <ul>
            <li>Interior Design of Residential Spaces</li>
            <li>Interior Design of Commercial Objects</li>
        </ul>
        <h2>3D Visualization and Rendering</h2>
        <ul>
            <li>Concept Development and Visualization</li>
            <li>Photorealistic 3D Visualizations</li>
            <li>VR and Interactive Tours</li>
            <li>Architectural Project Animations</li>
        </ul>
        <h2>Selection of Equipment and Materials</h2>
        <ul>
            <li>Selection of Finishing Materials and Furniture</li>
            <li>Collaboration with Suppliers and Manufacturers</li>
            <li>Interior Styling and Decoration</li>
        </ul>
        <h2>Project Management</h2>
        <ul>
            <li>Author's Supervision</li>
            <li>Management and Supervision of Construction Works</li>
            <li>Selection of Contractors</li>
            <li>Budget and Time Management</li>
        </ul>
    </div>)
}

export default Services