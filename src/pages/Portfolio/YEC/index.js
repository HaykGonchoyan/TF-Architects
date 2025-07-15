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

const YEC = () => {

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
        <h1>Yeghvard Education Center-Yeghvard</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ?
        "We are so excited to share another work of ours, the children's development center built in the frontier village of Yeghvard, Syunik province. The center gives children the opportunity to devour the knowledge required in the 21st century in a comfy and fashionable environment, equipped with modern technologies."
        :
        "Մենք մեծ ոգևորությամբ ենք ներկայացնում մեր հերթական նախագիծը՝ երեխաների զարգացման կենտրոնը, որը կառուցվել է Սյունիքի մարզի սահմանամերձ Եղվարդ գյուղում։ Կենտրոնը երեխաներին ընձեռում է հնարավորություն յուրացնելու 21-րդ դարի համար անհրաժեշտ գիտելիքները՝ հարմարավետ և նորաձև միջավայրում, որը հագեցած է ժամանակակից տեխնոլոգիաներով։"
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

export default YEC