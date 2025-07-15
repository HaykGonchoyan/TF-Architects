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

const UWC = () => {
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
        

        return(<div className="page-container"><h1>UWC-Dilijan</h1>
            <ScrollTop />
        
            {!Number(localStorage.lang) ? 
            "The architecture of UWC Dilijan, located in Armenia, blends modern design with the natural beauty of the surrounding forests and mountains. Designed by Tim Flynn Architects, the campus features environmentally sustainable architecture that integrates local materials like Armenian tuff and wood." : 
            "UWC Դիլիջան-ի ճարտարապետությունը, որը տեղակայված է Հայաստանի Դիլիջան քաղաքում, համադրում է ժամանակակից դիզայնն ու շրջակա անտառների և լեռների բնական գեղեցկությունը։ Այն նախագծվել է Tim Flynn Architects ճարտարապետական ստուդիայի կողմից և առանձնանում է շրջակա միջավայրի պահպանությանն ուղղված լուծումներով՝ կիրառելով տեղական նյութեր՝ ինչպես հայկական տուֆը, այնպես էլ փայտ։"}
            <div className="page-images" style={{backgroundImage: `url(${images[count % images.length]})`}} onClick={() => {handleViewer(count % images.length)}}/>
            {!Number(localStorage.lang) ?
            (<div>
            <h2>Key Architectural Features:</h2><ul>
                <li>Sustainability – The buildings incorporate energy-efficient designs, natural ventilation, and water conservation systems.</li><br />

                <li>Natural Integration – The structures follow the contours of the land, minimizing environmental impact.</li><br />

                <li>Modern & Traditional Mix – While using contemporary materials like glass and steel, the design also reflects Armenian cultural elements.</li><br />

                <li>Open and Collaborative Spaces – The interiors focus on open learning environments with communal areas that encourage interaction.</li><br />

                <li>Green Campus – The landscaping blends with Dilijan’s lush nature, making the school feel like part of the surrounding forest.</li>
            </ul>
            </div>)
            :
            (<div>
            <h2>Հիմնական ճարտարապետական առանձնահատկություններ․</h2><ul>
                <li>Կայունություն – Շենքերն ունեն էներգաարդյունավետ դիզայն, բնական օդափոխման համակարգեր և ջրի խնայողության լուծումներ։</li><br />

                <li>Բնական ինտեգրում – Կառույցները հետևում են տեղանքի թեքություններին՝ նվազագույնի հասցնելով բնությանը հասցվող միջամտությունը։</li><br />

                <li>Ժամանակակից և ավանդական համադրություն – Օգտագործելով ապակի և պողպատ՝ միաժամանակ պահպանվում են հայկական մշակութային մոտիվները։</li><br />

                <li>Բաց և համագործակցային տարածքներ – Ներքին միջավայրերը ձևավորված են որպես բաց ուսումնական գոտիներ՝ խթանելով փոխգործակցությունը։</li><br />

                <li>Կանաչ համալսարանային տարածք – Կանաչապատ տարածքները սահուն միաձուլվում են Դիլիջանի բնական միջավայրի հետ՝ դպրոցը դարձնելով անտառի անբաժան մաս։</li>
            </ul>
            </div>)
            }
            <div className="page-images" style={{backgroundImage: `url(${images[((count + 1) % images.length)]})`}} onClick={() => {handleViewer(((count + 1) % images.length))}}/>
            <Viewer
                        visible={isViewerOpen}
                        onClose={() => {setIsViewerOpen(false)}}
                        images={viewerImages}
                        activeIndex={viewerIndex}
            />
        </div>)
}

export default UWC