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

const Steko = () => {

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
        <h1>Steko-Yerevan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ?
        (<div>
        We’re excited to present another one of our recent projects! 
        This time, our team had the opportunity to work with STEKO Factory, and the outcome is nothing short of exceptional.
        <br /><br />
        From concept to completion, every detail of the project reflects our commitment to innovation, functionality, and aesthetics. The final result is a space that is unique, forward-thinking, and distinctly modern — a perfect reflection of STEKO’s dynamic vision and industrial identity.
        <br /><br />
        Stay tuned as we continue transforming ideas into spaces that inspire!
        </div>)
        :
        (<div>
        Մեծ ոգևորությամբ ենք ներկայացնում մեր հերթական նախագիծը։ Այս անգամ մեր թիմը համագործակցեց STEKO գործարանի հետ, և արդյունքը միանշանակ կարելի է համարել բացառիկ։
        <br /><br />
        Սկսած գաղափարի ձևավորումից մինչև վերջնական իրականացում՝ յուրաքանչյուր մանրուք արտահայտում է մեր նվիրվածությունը նորարարությանը, ֆունկցիոնալությանը և էսթետիկ մոտեցումներին։ Ստացված տարածքն առանձնանում է իր յուրահատկությամբ, ժամանակակից տեսլականով և համընկնում է STEKO-ի դինամիկ ոգու ու արդյունաբերական ինքնության հետ։
        <br /><br />
        Շարունակեք հետևել մեզ՝ տեսնելու, թե ինչպես ենք վերածում գաղափարները ոգեշնչող տարածքների։
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

export default Steko