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

const Dilitropic = () => {

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
        <h1>Dilitropic-Dilijan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ? 
        (<div>
        Welcome to DiliTropic — where summer never ends!
        <br /><br />
        Step into a tropical paradise and experience three vibrant worlds under one roof:
        <br />
        <ul>
        <li>Asia – immerse yourself in serene landscapes and rich cultural flavors</li>
        <li>Amazon – venture through lush greenery and wild, exotic vibes</li>
        <li>Africa – feel the warmth of the savanna and the soul of the continent</li>
        </ul>
        At DiliTropic, we’ve created an escape where nature, culture, and ambiance come together in perfect harmony. Whether you're dining, relaxing, or exploring — you’ll always find yourself in a state of eternal summer.
        </div>) :
        (<div>
        Բարի գալուստ DiliTropic — որտեղ ամառը երբեք չի ավարտվում։
        <br /><br />
        Մեկ տանիքի տակ ձեզ են սպասում երեք կախարդական մթնոլորտներ՝
        <br />
        <ul>
        <li>Ասիա – հանգիստ, խաղաղ միջավայր՝ հարուստ մշակույթով և նուրբ գույներով</li>
        <li>Ամազոն – բուռն կանաչապատ տարածքներ և վայրի բնության յուրահատուկ շունչ</li>
        <li>Աֆրիկա – տաք ավազներ, արևոտ մթնոլորտ և խորհրդավոր մշակութային աշխարհ</li>
        </ul>
        DiliTropic-ը իսկական տրոպիկական դրախտ է՝ հանգստի, արկածի և յուրահատուկ փորձառությունների համար։<br />
        Այստեղ ամեն ինչ ստեղծված է այնպես, որ դուք մշտապես գտնվեք անկրկնելի ամառային տրամադրության մեջ։
        </div>)
        }

        <div className="page-images" style={{backgroundImage: `url(${images[((count) % images.length)]})`}} onClick={() => {handleViewer(((count) % images.length))}}/>
        
        <Viewer
            visible={isViewerOpen}
            onClose={() => {setIsViewerOpen(false)}}
            images={viewerImages}
            activeIndex={viewerIndex}
        />
    </div>)
}

export default Dilitropic