import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function HeaderSocials () {
    return <div className="header__socials">
        <a href="https://www.linkedin.com/in/janilletsko/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Koleckoo" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
}