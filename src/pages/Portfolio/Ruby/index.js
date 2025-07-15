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

const Ruby = () => {

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
        <h1>Ruby-Dubai</h1>
        <ScrollTop />
        {!Number(localStorage.lang) ? 
        (<div>
        Ruby Passion For Meat is more than just a restaurant — it's a true culinary destination for meat lovers. With a deep appreciation for premium cuts and expertly prepared dishes, Ruby offers a unique dining experience centered around the art of meat.
        <br /><br />
        Located in the heart of Jumeirah 2, one of Dubai’s most vibrant and upscale districts, the restaurant combines elegant design with a warm, welcoming atmosphere. Spanning an impressive 400 square meters, the space is thoughtfully designed to accommodate both intimate dinners and larger gatherings, making it ideal for everything from casual meals to special occasions.
        <br /><br />
        Since its opening in the fall of 2021, Ruby Passion For Meat has become a go-to spot for those seeking high-quality, flavorful meat dishes crafted with passion and precision. Whether you're a fan of juicy steaks, slow-cooked ribs, or gourmet burgers, Ruby promises an unforgettable taste experience that keeps guests coming back for more.
        </div>)
        :
        (<div>
        «Ruby Passion For Meat»-ը պարզապես ռեստորան չէ․ դա իսկական գաստրոնոմիկ ուղղություն է մսի սիրահարների համար։ Որպես պրեմիում մսամթերքի և վարպետորեն պատրաստված ուտեստների իսկական գնահատող՝ Ruby-ն առաջարկում է յուրահատուկ ճաշելու փորձառություն, որը կենտրոնանում է մսի արվեստի վրա։
        <br /><br />
        Ռեստորանը տեղակայված է Դուբայի ամենաբազմազան և էլիտար շրջաններից մեկի՝ Jumeirah 2-ի սրտում։ Ներսի դիզայնը համադրում է նրբագեղությունը և ջերմ հյուրընկալությունը՝ ստեղծելով մթնոլորտ, որը միաժամանակ հարմար է թե՛ անձնական ընթրիքների, թե՛ մեծ հանդիպումների համար։ 400 քմ տարածքը գրագետ նախագծված է՝ ապահովելով կոմֆորտ և ֆունկցիոնալություն։
        <br /><br />
        Բացման պահից՝ 2021 թվականի աշնանից սկսած, «Ruby Passion For Meat»-ը դարձել է մսի բարձրակարգ, համեղ և յուրահատուկ ուտեստներ փնտրողների նախընտրելի ուղղությունը։ Ցանկացած այցելու՝ լինի դա հյութալի ստեյքերի, դանդաղ եփված կողերի կամ գուրման բուրգերների սիրահար, այստեղ կգտնի համի անմոռանալի փորձ, որը կստիպի վերադառնալ նորից ու նորից։
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

export default Ruby