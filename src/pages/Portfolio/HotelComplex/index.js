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

const HotelComplex = () => {

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
        <h1>Hotel Complex-Dilijan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ? 
        (<div>
        Presenting Our New Project: A State-of-the-Art Hotel Complex in Dilijan<br />
        Nestled in the picturesque heart of Dilijan, surrounded by lush forests, fresh mountain air, and breathtaking panoramic views, a unique hotel complex is being developed — distinguished by its refined design, modern comforts, and seamless integration with nature.
        <br /><br />
        This exceptional project is designed to go beyond offering just accommodation. It aims to become a true oasis of relaxation for all those seeking a memorable and elevated experience. Every guest will enjoy premium service, elegantly furnished rooms, and a variety of leisure and recreation options, including a swimming pool, spa center, restaurant, game room, and thoughtfully curated outdoor areas ideal for complete rest and rejuvenation.
        <br /><br />
        The hotel is perfectly suited for family vacations, solo travelers, and corporate visits alike. It offers all the necessary facilities to host business events such as seminars and conferences in a professional and comfortable setting.
        <br /><br />
        Blending the architectural essence of old Dilijan with innovative design concepts, this stylish new complex becomes a symbol of refined relaxation — promising unforgettable moments and an inspiring retreat in one of Armenia’s most beautiful natural settings.<br />
        </div>)
        :
        (<div>
        Ներկայացնում ենք մեր նոր նախագիծը՝ Դիլիջանում ժամանակակից հարմարություններով հյուրընկալության համալիր:<br />
        Դիլիջանի սրտում, հմայիչ անտառներով, մաքուր լեռնային օդով և անթերի տեսարաններով շրջապատված, կառուցվում է յուրահատուկ հյուրանոցային համալիր՝ իր նրբաճաշակ դիզայնով, ժամանակակից հարմարություններով և բնության հետ անբաժան համադրությամբ:
        <br /><br />
        Այս բացառիկ նախագիծը նպատակ ունի ոչ միայն հարմարավետություն ապահովել, այլ նաև հանդիսանալ հանգստի իսկական օազիս՝ բոլորի համար, ովքեր փնտրում են հիշարժան և բարձրակարգ փորձառություն: Յուրաքանչյուր հյուր կվայելի բարձրակարգ ծառայություն, շքեղ կահավորված սենյակներ և լայն բազմազանությամբ ժամանցի և հանգստի հնարավորություններ՝ ներառյալ լողավազան, սպա կենտրոն, ռեստորան, խաղերի սենյակ և հատուկ ընտրված բացօթյա տարածքներ՝ լիարժեք հանգստի և վերականգնման համար:
        <br /><br />
        Համալիրն իդեալական է ինչպես ընտանիքների հանգստի, այնպես էլ անհատական ճանապարհորդների և կորպորատիվ այցերի համար: Այն տրամադրում է անհրաժեշտ բոլոր հարմարությունները՝ բիզնես միջոցառումների, սեմինարների և կոնֆերանսների անցկացման համար՝ պրոֆեսիոնալ և հարմարավետ միջավայրում:
        <br /><br />
        Հին Դիլիջանի ճարտարապետական ոգին համակցելով նորարար դիզայնի մոտեցումներով՝ այս նորաոճ համալիրն դառնում է նրբաճաշակ հանգստի խորհրդանիշ՝ խոստանալով անջնջելի պահեր և ոգեշնչող հանգիստ Հայաստանի ամենագեղեցիկ բնության գրկում:<br />
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

export default HotelComplex