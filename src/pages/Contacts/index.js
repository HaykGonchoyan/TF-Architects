import "./index.css"

const Contacts = () => {
    return(
    <div className="contacts-container">

        <iframe
                className="map"
                title="map"
                src="https://maps.google.com/maps?&amp;hl=en&amp;q=Hanrapetutyan 79&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="388"
                height="270"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
            <div className="cont-info">
                {!Number(localStorage.lang) ?
                (<div>
                <div>Location - Yerevan, Hanrapetutyan 79 apartment 4</div>
                <div>Email - info@tfplusa.com</div>
                <div>Telephone - +374 43 711707</div>
                </div>)
                :
                (<div>
                <div>Վայր - Երևան, Հանրապետության 79 բնակարան 4</div>
                <div>էլ. հասցե - info@tfplusa.com</div>
                <div>Հեռախոսահամար - +374 43 711707</div>
                </div>)
                }
            </div>
    </div>
    )
}

export default Contacts