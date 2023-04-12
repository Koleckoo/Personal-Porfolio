import CTA from "./CTA"
import "./Header.css"
import ME from "../../assets/mypictureCut.png"
import HeaderSocials from "./HeaderSocials"


export default function Header() {

    return <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Jan Illetško</h1>
            <h5 className="text-ligh">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className="scroll__down"> Scroll Down </a>
        </div>
    </header>
}

