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

const DiliTown = () => {

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
        <h1>Dilitown-Dilijan</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ?
        `The "Dilitown" recreation center is being designed as a self-sufficient structure.
        However, it can also be considered part of a larger complex, complementing the cottages being built on the northern side.
        It is a 2-3 story reinforced concrete monolithic structure, with two structural bays.`
        :
        `«Dilitown» հանգստյան կենտրոնը նախագծվում է որպես ինքնաբավ կառուցվածք, սակայն միաժամանակ դիտարկվում է որպես ավելի մեծ համալիրի մաս՝ համադրվելով հյուսիսային հատվածում կառուցվող քոթեջների հետ։ Այն երկհարկանի կամ մասնակիորեն եռահարկ մոնոլիտ երկաթբետոնե կառույց է՝ երկու հիմնական կառուցվածքային բազայով։`}
        <br />
        <div className="page-images" style={{backgroundImage: `url(${images[count % images.length]})`}} onClick={() => {handleViewer(count % images.length)}}/>
        <br />
        {!Number(localStorage.lang) ? 
        (<div>
        On the first floor are located service rooms (refrigeration rooms, laundry, security post, etc.),
        a playroom, restrooms for guests, changing rooms, and swimming pools with an adjacent spa center.
        <br />
        The pool area includes a mezzanine and is structurally separated from the main building.
        It is covered with metal trusses and sandwich panels.
        <br />
        The second floor houses the restaurant with its main kitchen area and conference halls.
        From the northern side of the second floor, there are wide exits to an outdoor area,
        which, due to the terrain, is on the same elevation as the second floor.
        <br />
        The third floor partially covers axes 5 to 7 and includes a staircase unit and a boiler room.
        <br />
        The roof, except for the swimming pool section, is flat.
        Heating and cooling equipment is installed on the roof,
        as well as photovoltaic panels and water heaters.
        Heating will be implemented through air ducts.
        
        <ul>
        <li>The landscaping area is 710 m².</li>
        
        <li>The total construction area of the building is 2,333 m².</li>
        
        <li><ul>The building footprint is 1,211.8 m², including:
        
        <li>85.3 m² for the outdoor swimming pool area</li>

        <li>50.0 m² for the entrance stairs</li>

        <li>44.8 m² for the underground water reservoir</li>
        </ul></li></ul>
        </div>)
        :
        (<div>
        Առաջին հարկում գտնվում են սպասարկման տարածքները՝ սառնարանային սենյակներ, լվացքատուն, պահակակետ և այլ անհրաժեշտ ենթակառուցվածքներ, խաղասենյակ, հյուրերի զուգարաններ, հանդերձարաններ, ինչպես նաև լողավազաններ՝ կից սպա կենտրոնով։
        Լողավազանի գոտին ներառում է նաև միջհարկային (մեզոնին) հատված և կառուցվածքային առումով տարանջատված է հիմնական շենքից։ Այն ծածկված է մետաղական ֆերմաներով և սենդվիչ տիպի պանելներով։
        <br />
        Լողավազանի գոտին ներառում է միջհարկային հատված և կառուցվածքային առումով տարանջատված է հիմնական շենքից։ Այն ծածկված է մետաղական ֆերմաներով և սենդվիչ պանելներով։
        <br />
        Երկրորդ հարկում տեղակայված են ռեստորանը՝ իր հիմնական խոհանոցային հատվածով, և համաժողովների սրահները։ Երկրորդ հարկի հյուսիսային կողմից կան լայն ելքեր բացօթյա տարածք, որը տեղանքի ռելիեֆի պատճառով գտնվում է նույն մակարդակի վրա, ինչ երկրորդ հարկը։
        <br />
        Երրորդ հարկը մասամբ ծածկում է 5-ից 7 առանցքները և ներառում է սանդուղքային հանգույց ու կաթսայատուն։
        <br />
        Տանիքը, բացի լողավազանի հատվածից, հարթ է։ Տանիքին տեղադրված են ջեռուցման և սառեցման սարքավորումներ, արևային ֆոտովոլտային վահանակներ և ջրատաքացուցիչներ։ Ջեռուցումը նախատեսվում է իրականացնել օդային ուղիների միջոցով։
        
        <ul>
        <li>TԿանաչապատման տարածք՝ 710 մ²</li>
        
        <li>Ընդհանուր շինարարական մակերես՝ 2,333 մ²</li>
        
        <li><ul>Կառույցի հիմքային զբաղեցրած մակերես՝ 1,211.8 մ², այդ թվում՝
        
        <li>Բացօթյա լողավազան՝ 85.3 մ²</li>

        <li>Մուտքի աստիճաններ՝ 50.0 մ²</li>

        <li>Ստորգետնյա ջրամբար՝ 44.8 մ²</li>
        </ul></li></ul>
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

export default DiliTown