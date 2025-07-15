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

const FAST = () => {

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

    return(
    
    <div className="page-container">
        <h1>FAST-Yerevan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ?
        (<div>
        FAST office space, a modern and innovative environment that reflects the organization's mission to promote science and technology in Armenia.
        <br />
        <h4>Space Description:</h4>
        <ul>
        <li>The image depicts a meeting or training room designed for discussions, workshops, or brainstorming sessions.</li>

        <li>The environment features a clean, minimalist design, with a vibrant wall of vertical acoustic panels in various shades of blue, creating a dynamic and inspiring atmosphere.</li>

        <li>At the center of the table, there is a live green plant arrangement, which supports FAST's eco-conscious design approach and helps create a fresh, welcoming workspace.</li>

        <li>On the right side, we see glass walls leading into a hallway, where a robotic unit is visible — possibly part of a tech demonstration or research project.</li>
        </ul>
        <h4>Purpose:</h4>
        FAST’s mission is to advance science, technology, and innovation in Armenia. Workspaces like this are crafted to encourage creative thinking, scientific collaboration, and a forward-thinking startup culture.
        </div>
        ):
        (<div>
        
        FAST գրասենյակային տարածքը՝ ժամանակակից և նորարարական միջավայր է, որն արտացոլում է կազմակերպության առաքելությունը՝ Հայաստանում գիտության և տեխնոլոգիաների զարգացումը։
        <br />
        <h4>Տարածքի նկարագրություն․</h4>
        <ul>
        <li>Նկարում պատկերված է հանդիպումների կամ վերապատրաստումների սենյակ, որը նախատեսված է քննարկումների, վորքշոփների կամ գաղափարական աշխատանքների համար։</li>

        <li>Միջավայրը առանձնանում է մինիմալիստական և մաքուր դիզայնով՝ համալրված ուղղահայաց ակուստիկ պանելների գունավոր պատով, որը կազմված է կապույտի տարբեր երանգներից։ Այն ստեղծում է դինամիկ և ներշնչող մթնոլորտ։</li>

        <li>Սեղանի կենտրոնում տեղադրված են կենդանի բույսեր՝ ընդգծելով FAST-ի էկո-մտածող դիզայնի մոտեցումը և նպաստելով թարմ ու հյուրընկալ աշխատավայրի ձևավորմանը։</li>

        <li>Աջ կողմում երևում են ապակե պատերով միջանցքներ, որոնցից մեկում գտնվում է ռոբոտային միավոր՝ հնարավոր է տեխնոլոգիական ցուցադրության կամ գիտահետազոտական նախագծի մաս։</li>
        </ul>
        <h4>Նպատակ․</h4>
        FAST-ի առաքելությունն է՝ Հայաստանում զարգացնել գիտությունը, տեխնոլոգիան և նորարարությունը։ Նման աշխատատարածքները ստեղծվում են՝ խթանելու ստեղծագործ մտածողությունը, գիտական համագործակցությունը և ժամանակակից ստարթափ մշակույթը։
        </div>)}


        <div className="page-images" style={{backgroundImage: `url(${images[((count) % images.length)]})`}} onClick={() => {handleViewer(((count) % images.length))}}/>
        
        <Viewer
            visible={isViewerOpen}
            onClose={() => {setIsViewerOpen(false)}}
            images={viewerImages}
            activeIndex={viewerIndex}
        />
    </div>)
}

export default FAST