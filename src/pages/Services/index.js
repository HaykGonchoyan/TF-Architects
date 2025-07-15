import "./index.css"

const Services = () => {
    return(<div className="services-cont">
        <h1>{!Number(localStorage.lang) ? "Services" : "Սերվիս"}</h1>
        <br />
        {!Number(localStorage.lang) ? 
        (<div>
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
        :
        (<div>
        <h2>Ճարտարապետական նախագծում</h2>
        <ul>
            <li>Անհատական բնակելի տներ</li>
            <li>Հանրային շինություններ</li>
            <li>Բազմաֆունկցիոնալ բնակելի համալիրներ</li>
            <li>Շենքերի վերակառուցում և վերականգնում</li>
            <li>Քաղաքաշինական պլանավորում</li>    
        </ul>
        <h2>Ինտերիերի դիզայն</h2>
        <ul>
            <li>Բնակելի տարածքների ինտերիերի դիզայն</li>
            <li>Առևտրային օբյեկտների ինտերիերի դիզայն</li>
        </ul>
        <h2>3D Տեսանելիացում և ներկայացում</h2>
        <ul>
            <li>Գաղափարային մշակման և 3D տեսանելիացում</li>
            <li>Ֆոտոռեալիստիկ 3D վիզուալիզացիաներ</li>
            <li>VR և ինտերակտիվ շրջայցեր</li>
            <li>Ճարտարապետական նախագծերի անիմացիաներ</li>
        </ul>
        <h2>Նյութերի, սարքավորումների և ինտերիերի ձևավորման ընտրություն</h2>
        <ul>
            <li>Սարքավորումների և նյութերի ընտրություն</li>
            <li>Հարդարման նյութերի և կահույքի ընտրություն</li>
            <li>Համագործակցություն մատակարարների և արտադրողների հետ</li>
        </ul>
        <h2>Նախագծի կառավարում</h2>
        <ul>
            <li>Հեղինակային վերահսկողություն</li>
            <li>Շինարարական աշխատանքների կառավարում և հսկողություն</li>
            <li>Կապալառուների ընտրություն</li>
            <li>Բյուջեի և ժամանակացույցի կառավարում</li>
        </ul>
        </div>)
        }
    </div>)
}

export default Services