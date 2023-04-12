import "./Footer.css"
import {CiLinkedin} from 'react-icons/ci'
import {BsGithub} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

export default function Footer() {

    return <footer>
        <a href="#" className="footer__logo">Jan Illetško</a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="contact">Contact Me</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/janilletsko/" target="_blank" rel="noopener noreferrer"><CiLinkedin/></a>
            <a href="https://github.com/Koleckoo" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
            <a href="https://twitter.com/JohnIlletsko" target="_blank" rel="noopener noreferrer"><FiTwitter/></a>
        </div>

        <div className="footer__copyright"><small>Copyright &copy; Jan Illetško</small></div>
    </footer>  
}