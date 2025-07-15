import ScrollTop from "../../../components/ScrollTop"
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

const IDeAoffice = () => {    
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


        return(<div className="page-container">
            <ScrollTop />
            <h1>IDeA Office-Yerevan</h1>
            {!Number(localStorage.lang) ?
            "TF Architects’ role was to develop a brief and establish an occupancy strategy and interior design concept for the new office of IDeA Foundation. The office design had to be adapted to the building itself, which had elements of a historical Yerevan building mixed with a contemporary design."
            :
            "TF Architects-ի դերը եղել է կազմել տեխնիկական առաջադրանք, մշակել օգտագործման ռազմավարություն և ինտերիերի դիզայնի հայեցակարգ՝ նախատեսված IDeA հիմնադրամի նոր գրասենյակի համար։ Գրասենյակի դիզայնը պետք է հարմարեցվեր շենքին, որն իր մեջ ներառում էր պատմական Երևանի շենքին բնորոշ տարրեր՝ համադրված ժամանակակից լուծումներով։"}
            <div className="page-images" style={{backgroundImage: `url(${images[count % images.length]})`}} onClick={() => {handleViewer(count % images.length)}}/>
            <Viewer
                        visible={isViewerOpen}
                        onClose={() => {setIsViewerOpen(false)}}
                        images={viewerImages}
                        activeIndex={viewerIndex}
            />
        </div>)
}

export default IDeAoffice