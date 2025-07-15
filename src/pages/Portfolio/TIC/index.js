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

const TIC = () => {

    const [count, setCount] = useState(1)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [viewerIndex, setViewerIndex] = useState(1)
        
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
        <h1>TIC-Dilijan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ?
        "In 2017 TF+Architects has fulfilled a project for Dilijan Tourism informational center, which works to help all of the guests of Dilijan to productively organize their rest there."
        :
        "2017 թվականին TF+Architects ստուդիան իրականացրել է Դիլիջանի տուրիստական տեղեկատվական կենտրոնի նախագիծը, որն օգնում է Դիլիջանի բոլոր հյուրերին արդյունավետ կազմակերպել իրենց հանգիստը։"}
        <div className="page-images" style={{backgroundImage: `url(${images[((count) % images.length)]})`}} onClick={() => {handleViewer(((count) % images.length))}}/>
        
        <Viewer
            visible={isViewerOpen}
            onClose={() => {setIsViewerOpen(false)}}
            images={viewerImages}
            activeIndex={viewerIndex}
        />
    </div>)
}

export default TIC