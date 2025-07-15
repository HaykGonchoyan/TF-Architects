import ScrollTop from "../../../components/ScrollTop";
import { useEffect, useState } from "react"
import Viewer from "react-viewer";

const importAll = (r) => {
        return r.keys().map(r);
}
  
const images = importAll(require.context('./images/', false, /.(png)$/))
const viewerImages = []

for (let i = 0; i < images.length; i++) {
    viewerImages.push({src: images[i], alt: ''})
}

const Marash = () => {
        const [count, setCount] = useState(0)
        const [isViewerOpen, setIsViewerOpen] = useState(false)
        const [viewerIndex, setViewerIndex] = useState(0)

        const handleViewer = (index) => {
            setViewerIndex(index)
            setIsViewerOpen(true)
        }

        useEffect(() => {
            setInterval(() => {
                setCount(count => count+1)
            }, 3000)
        }, [])
        

        return(<div className="page-container"><h1>Marash Complex-Yerevan</h1>
            <ScrollTop />
                <h4>1. INITIAL DESIGN DATA</h4>
                The following reference materials have served as the basis for the development of the design documentation:
                <ul>
                <li>The design brief provided by the client;</li>

                <li>The architectural-planning assignment No. 01/18-07/1-D-44620-357 dated 13.06.2023 issued by Yerevan Municipality;</li>

                <li>The conclusion on the site's engineering and geological conditions;</li>

                <li>The geodetic survey of the area;</li>

                <li>The cadastral land classification certificate with its turning points.</li>
                </ul>
                <div className="page-images" style={{backgroundImage: `url(${images[((count) % images.length)]})`}} onClick={() => {handleViewer(((count) % images.length))}}/>
                <h4>2. MASTER PLAN</h4>
                The multifunctional residential complex is planned to be built in the Norq-Marash administrative district, on land plot address 22/29 G. Hovsepyan Street, located on a parallel secondary street approximately 130 meters away from the main G. Hovsepyan Street.
                The area has a steep slope toward the west, with an elevation difference of 12 meters between its upper and lower points.
                Adjacent to the plot are other 2-3 story residential buildings and a multi-apartment residential building with 5 above-ground floors.
                <br />
                <br />
                <h4>3. SPATIAL-VOLUMETRIC SOLUTIONS</h4>
                The architectural and artistic solutions of the building have been influenced by the terrain’s relief, the site’s location with a view toward the city of Yerevan, and the surrounding environment.<br />
                This has manifested in irregular terraced floorplan solutions.<br />
                Given the terrain, emphasis was placed on terraced and contemporary dynamic volumetric compositions, large glazed façade areas, and spacious terraces facing the city.<br />
                <br />
                <br />
                The building has 5 above-ground and 3 underground floors on the side adjacent to the street.<br />
                <br />
                <br />
                It includes an underground parking facility with 2 basement levels.<br />
                Due to the natural terrain, the entrances to the parking garage are planned at the -2 floor level.<br />
                The -1 floor will include public-use areas with single-sided natural lighting.<br />
                <br />
                <br />
                The structure is divided into 2 blocks by seismic joints, sharing one entrance node.<br />
                Each block has its own stairwell with separate exits.<br />
                <br />
                <br />
                Floors 1 through 5 (inclusive) are designated for residential use.<br />
                The total number of apartments in the multi-apartment building is 80.<br />
                The number of parking spaces is 61, which accounts for 76% of the total number of apartments.<br />
                The roof is non-usable.<br />
                <br />
                <br />
                The ±0.000 finished floor elevation of the first floor corresponds to the absolute elevation of 1169.05.<br />
                <br />
                <br />
                <h4>STRUCTURAL SYSTEM</h4>
                The building’s structural system consists of a reinforced concrete frame.<br />
                Foundations are designed as monolithic reinforced concrete strip footings.<br />
                <br />
                <br />
                For the underground floors, the exterior walls will be built with a single row of 200 mm thick reinforced concrete blocks,
                 externally insulated with 80 mm expanded polystyrene boards,
                 and clad with 30 mm thick stone panels anchored to stainless steel fasteners and a metal mesh attached to the wall with cement-sand mortar filling.<br />
                <br /><br />
                For the above-ground floors, the exterior walls are also constructed with a single row of 200 mm thick reinforced concrete blocks,
                insulated on the outside with 80 mm thick mineral wool boards,
                and clad using a frame-anchor system with 40 mm thick stone panels.<br />
                <br /><br />
                Façade cladding materials include travertine, black tuff, basalt panels, and painted plaster.<br />
                <br /><br />
                Heating is planned through a centralized boiler room, and cooling via a centralized chiller system,
                with equipment installed on the non-usable roof.
                <br /><br />
                An automatic fire suppression system is planned for the parking garage.<br />
                The underground parking entrance is accessed from the -2 floor level.<br />
                <br />

            
            <div className="page-images" style={{backgroundImage: `url(${images[((count + 1) % images.length)]})`}} onClick={() => {handleViewer(((count + 1) % images.length))}}/>
            <Viewer
                        visible={isViewerOpen}
                        onClose={() => {setIsViewerOpen(false)}}
                        images={viewerImages}
                        activeIndex={viewerIndex}
            />
        </div>)
}
export default Marash