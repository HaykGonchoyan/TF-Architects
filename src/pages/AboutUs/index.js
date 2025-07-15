

import "./index.css"

const AboutUs = () => {
    const textENG = `At the heart of Tim Flynn Architects is the philosophy of innovation, listening and collaboration. Instead of imposing a strict signature style, Tim Flynn Architects treats every project as a journey that starts and ends with the individual vision of our clients.
    Established in 2010 we are team of skilled architects and designers renowned for a sustainable, creative and bespoke approach to living and working TFA founders have over 20 years of experience and leads the multi-disciplinary and creative teams in successful delivery of local and global solutions. We are recognised for architecture services of any scale in residential, commercial, hospitality and education sector as well as interior and landscape design, project planning and bespoke furniture. Our clients appreciate the attention to detail, quality, simplicity and functionality that our projects deliver.`
    const textARM = `Թիմ Ֆլին Ճարտարապետներ (Tim Flynn Architects) ընկերության հիմքում ընկած է նորարարության, լսելու և համագործակցության փիլիսոփայությունը։ Փոխարենը՝ պարտադրելու խիստ որոշակի ոճ, Tim Flynn Architects-ը յուրաքանչյուր նախագիծ դիտարկում է որպես ճանապարհորդություն, որն սկսվում և ավարտվում է մեր հաճախորդների անհատական տեսլականով։
    Հիմնադրված լինելով 2010 թվականին՝ մենք հմուտ ճարտարապետների և դիզայներների թիմ ենք, որը հայտնի է իր կայուն, ստեղծարար և անհատական մոտեցմամբ՝ ապրելու և աշխատելու միջավայրերի նախագծման գործում։ TFA-ի հիմնադիրները ունեն ավելի քան 20 տարվա փորձ և ղեկավարում են բազմապրոֆիլ և ստեղծագործ թիմեր՝ հաջողությամբ իրագործելով տեղական և միջազգային լուծումներ։ Մեր ընկերությունը ճանաչված է բնակելի, կոմերցիոն, հյուրանոցային և կրթական ոլորտների ճարտարապետական ծառայությունների մատուցման համար՝ ինչպես նաև ինտերիերի և լանդշաֆտային դիզայնի, նախագծման պլանավորման և անհատական կահույքի արտադրության ոլորտներում։ Մեր հաճախորդները գնահատում են մանրամասներին ուշադրությունը, որակը, պարզությունն ու գործառույթը, որոնք մարմնավորված են մեր նախագծերում։`
    
    return(<div className="about-container">
        <h1>{!Number(localStorage.lang) ? "About Us" : "Մեր Մասին"}</h1>
        {!Number(localStorage.lang) ? textENG : textARM}
    </div>)
}

export default AboutUs