import "./index.css"

const Footer = () => {

    function linkToFacebook() {
        window.location.href = "https://www.facebook.com/share/18bPBkHahA/?mibextid=wwXIfr"
    }
    function linkToInstagram() {
        window.location.href = "https://www.instagram.com/tfplusa?igsh=MTVuYjdzdGZsaTFiYg=="
    }


    return(<div>
        <div className="footer-container">
            <div className="socials">
                {!Number(localStorage.lang) ?
                "Follow us "
                :
                "Հետևեք մեզ"
                }
                <div onClick={linkToFacebook} replace class="fa fa-facebook"></div>
                <div onClick={linkToInstagram} replace class="fa fa-instagram"></div>
            </div>
            <hr className="f-hr"/>
            <div className="socials">
                {!Number(localStorage.lang) ?
                "Email - info@tfplusa.com "
                :
                "Էլ. հասցե - info@tfplusa.com"
                }
            </div>
        </div>
    </div>)
}

export default Footer