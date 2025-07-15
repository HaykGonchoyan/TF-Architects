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

const Marash = () => {
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
        

        return(<div className="page-container"><h1>Marash Complex-Yerevan</h1>
            <ScrollTop />
                {!Number(localStorage.lang) ?
                (<div>
                <h4>1. Initial design data</h4>
                The following reference materials have served as the basis for the development of the design documentation:
                <ul>
                <li>The design brief provided by the client;</li>

                <li>The architectural-planning assignment No. 01/18-07/1-D-44620-357 dated 13.06.2023 issued by Yerevan Municipality;</li>

                <li>The conclusion on the site's engineering and geological conditions;</li>

                <li>The geodetic survey of the area;</li>

                <li>The cadastral land classification certificate with its turning points.</li>
                </ul>
                </div>)
                :
                (<div>
                <h4>1. Սկզբնական նախագծային տվյալներ</h4>
                Նախագծային փաստաթղթերի մշակման հիմք են հանդիսացել՝
                <ul>
                <li>Հաճախորդի կողմից տրամադրված նախագծային առաջադրանքը</li>

                <li>Երևանի քաղաքապետարանի՝ 13.06.2023թ․ թվագրված թիվ 01/18-07/1-D-44620-357 հատակագծային առաջադրանքը</li>

                <li>Հողամասի երկրաբանական պայմանների վերաբերյալ եզրակացությունը</li>

                <li>Տարածքի գեոդեզիական հետազոտությունը</li>

                <li>Կադաստրային վկայականը սահմանագծերով</li>
                </ul>
                </div>)
                }
                <div className="page-images" style={{backgroundImage: `url(${images[((count) % images.length)]})`}} onClick={() => {handleViewer(((count) % images.length))}}/>
                {!Number(localStorage.lang) ? 
                (<div>
                <h4>2. Master plan</h4>
                The multifunctional residential complex is planned to be built in the Norq-Marash administrative district, on land plot address 22/29 G. Hovsepyan Street, located on a parallel secondary street approximately 130 meters away from the main G. Hovsepyan Street.
                The area has a steep slope toward the west, with an elevation difference of 12 meters between its upper and lower points.
                Adjacent to the plot are other 2-3 story residential buildings and a multi-apartment residential building with 5 above-ground floors.
                <br />
                <br />
                <h4>3. Spatial-volumeric solutions</h4>
                The architectural and artistic solutions of the building have been influenced by the terrain’s relief, the site’s location with a view toward the city of Yerevan, and the surrounding environment.<br />
                This has manifested in irregular terraced floorplan solutions.<br />
                Given the terrain, emphasis was placed on terraced and contemporary dynamic volumetric compositions, large glazed façade areas, and spacious terraces facing the city.
                <br />
                <br />
                The building has 5 above-ground and 3 underground floors on the side adjacent to the street.
                <br />
                <br />
                It includes an underground parking facility with 2 basement levels.
                Due to the natural terrain, the entrances to the parking garage are planned at the -2 floor level.
                The -1 floor will include public-use areas with single-sided natural lighting.
                <br />
                <br />
                The structure is divided into 2 blocks by seismic joints, sharing one entrance node.
                Each block has its own stairwell with separate exits.
                <br />
                <br />
                Floors 1 through 5 (inclusive) are designated for residential use.
                The total number of apartments in the multi-apartment building is 80.
                The number of parking spaces is 61, which accounts for 76% of the total number of apartments.
                The roof is non-usable.
                <br />
                <br />
                The ±0.000 finished floor elevation of the first floor corresponds to the absolute elevation of 1169.05.
                <br />
                <br />
                <h4>Structural system</h4>
                The building’s structural system consists of a reinforced concrete frame.<br />
                Foundations are designed as monolithic reinforced concrete strip footings.
                <br />
                <br />
                For the underground floors, the exterior walls will be built with a single row of 200 mm thick reinforced concrete blocks,
                 externally insulated with 80 mm expanded polystyrene boards,
                 and clad with 30 mm thick stone panels anchored to stainless steel fasteners and a metal mesh attached to the wall with cement-sand mortar filling.
                <br /><br />
                For the above-ground floors, the exterior walls are also constructed with a single row of 200 mm thick reinforced concrete blocks,
                insulated on the outside with 80 mm thick mineral wool boards,
                and clad using a frame-anchor system with 40 mm thick stone panels.
                <br /><br />
                Façade cladding materials include travertine, black tuff, basalt panels, and painted plaster.
                <br /><br />
                Heating is planned through a centralized boiler room, and cooling via a centralized chiller system,
                with equipment installed on the non-usable roof.
                <br /><br />
                An automatic fire suppression system is planned for the parking garage.<br />
                The underground parking entrance is accessed from the -2 floor level.
                
                </div>)
                :
                (<div>
                <h4>2. Գլխավոր հատակագիծ</h4>
                Բնակելի համալիրը նախատեսվում է կառուցել Նորք Մարաշ վարչական շրջանում՝ Գ. Հովսեփյան փողոցի 22/29 հասցեում գտնվող հողատարածքում, որը գտնվում է երկրորդական փողոցի վրա՝ Գ. Հովսեփյանի գլխավոր փողոցից մոտ 130 մետր հեռավորության վրա։ Տարածքը ունի 12 մետր թեքություն դեպի արևմուտք։ Կից տարածքում կան 2-3 հարկանի առանձնատներ և 5-հարկանի բազմաբնակարան շենք։
                <br />
                <br />
                <h4>3. Ծավալատարածական լուծումներ</h4>
                Նախագծման ժամանակ հաշվի է առնվել տեղանքի ռելիեֆը, Երևանի տեսարանը և շրջակա միջավայրը, ինչի արդյունքում ընտրվել են անկանոն տեռասային հատակագծային լուծումներ։<br />
                Շեշտադրվել է ժամանակակից դինամիկ ծավալային կոմպոզիցիաները, մեծ ապակեպատ ճակատները և ընդարձակ բաց պատշգամբները։
                <br />
                <br />
                Շենքը ունի 5 վերգետնյա և 3 ստորգետնյա հարկ՝ փողոցին հարող կողմից։
                <br />
                <br />
                Այն ներառում է երկհարկանի ստորգետնյա ավտոկայանատեղի։<br />
                Բնական ռելիեֆի պատճառով ավտոկայանատեղու մուտքերը նախատեսված են -2-րդ հարկի մակարդակում։<br />
                -1-րդ հարկում տեղակայված են հասարակական օգտագործման տարածքներ՝ միակողմ բնական լուսավորությամբ։
                <br />
                <br />
                Շինությունը բաժանված է երկու բլոկի՝ սեյսմիկ հոդերով, որոնք ունեն ընդհանուր մուտքի հանգույց։<br />
                Յուրաքանչյուր բլոկ ունի իր սանդուղք և առանձին ելքեր։
                <br />
                <br />
                1-ից 5-րդ հարկերը նախատեսված են որպես բնակելի։
                Բազմաբնակարան շենքում ընդհանուր առմամբ նախագծված է 80 բնակարան։
                Ավտոկայանատեղիների քանակը 61 է, որը կազմում է բնակարանների ընդհանուր թվի 76%-ը։
                Տանիքը նախատեսված չէ շահագործման համար։
                <br />
                <br />
                ±0.000 նշված ավարտուն հատակի բարձրությունը համապատասխանում է 1169.05 մետր բացարձակ բարձրությանը։
                <br />
                <br />
                <h4>Շենքի կոնստրուկտիվ համակարգը</h4>
                Շենքի կոնստրուկտիվ համակարգը իրենից ներկայացնում է ե/բետոնե շրջանակային հիմնակմախք: Հիմքերը իրականացված են ե/բ միաձույլ ժապավենների տեսքով: Ստորգետնյա հարկերի համար արտաքին պատերը նախատեսվում են իրականացնել 1 շարք 200 մմ հաստությամբ ամրանավորված բետոնե բլոկներով, 80 մմ հաստությամբ փրփրապոլիստերոլի ջերմամեկուսիչ սալերով (արտաքին կողմից) և երեսպատել 30 մմ հաստությամբ քարե սալերով՝ ամրացված չժանգոտվող պողպատե խարիսխներով մետաղական ցանցին, որը ամրացված է պատին խարիսխներով ցեմենտ-ավազե շաղախի լցոնմամբ: Վերգետնյա հարկերի համար արտաքին պատերը նախատեսվում են իրականացնել 1 շարք 200 մմ հաստությամբ ամրանավորված բետոնե բլոկներով, 80 մմ հաստությամբ հանքաբամբակ ջերմամեկուսիչ սալերով (արտաքին կողմից) և երեսպատել ստադախարսխային համակարգի միջոցով 40 մմ հաստությամբ քարե սալերով: Շենքի երեսապատման նյութերն են՝ տրավերտինե, սև տուֆե, բազալտե սալեր և ներկված սվաղ:
                <br />
                <br />
                Ստորգետնյա հարկերի համար արտաքին պատերը կկառուցվեն 200 մմ հաստությամբ երկաթբետոնե բլոկներից՝ մեկ շերտով։ Դրսի կողմից պատերը ջերմամեկուսացվելու են 80 մմ հաստությամբ ընդլայնված պոլիստիրոլե սալիկներով և երեսպատվելու են 30 մմ հաստությամբ քարե սալիկներով, որոնք ամրացվելու են չժանգոտվող պողպատից ամրացումների և մետաղական ցանցի միջոցով՝ պատին ամրացված ցեմենտավազային շաղախով։
                <br /><br />
                Վերերկրյա հարկերի համար արտաքին պատերը նույնպես կառուցվելու են 200 մմ հաստությամբ երկաթբետոնե բլոկներից՝ մեկ շերտով, դրսի կողմից ջերմամեկուսացվելու են 80 մմ հաստությամբ հանքային բամբակե սալիկներով և երեսպատվելու են շրջանակ-ամրակային համակարգով՝ օգտագործելով 40 մմ հաստությամբ քարե սալիկներ։
                <br /><br />
                Շենքի ֆասադային երեսպատման նյութերն են՝ տրավերտին, սև տուֆ, բազալտե սալիկներ և ներկված սվաղ։
                <br /><br />
                Ջեռուցումը նախատեսված է կազմակերպել կենտրոնացված կաթսայատան միջոցով, իսկ հովացումը՝ կենտրոնացված չիլլերային համակարգով, որի սարքավորումները տեղադրվելու են ոչ շահագործվող տանիքի վրա։
                <br /><br />
                Ենթագետնյա ավտոկայանատեղիում նախատեսված է ավտոմատ հրդեհաշիջման համակարգ։<br />
                Ավտոկայանատեղիի մուտքը կազմակերպվելու է -2 հարկից։
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
export default Marash