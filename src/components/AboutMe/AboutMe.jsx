import "./AboutMe.css"
import MeOnBeach from "../../assets/meOnBeach.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'
export default function AboutMe() {

    return <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
            <div className="about__me-image">
                <img src={MeOnBeach} alt='me on beach' />
            </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>6+ months</small>
                    </article>
                    <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Client</h5>
                        <small>1</small>
                    </article>
                    <article className="about__card">
                        <VscFolderOpened className="about__icon"/>
                        <h5>Projects</h5>
                        <small>1 completed</small>
                    </article>
                </div>
                <p> I am a junior full-stack web developer, that knows his way around HTML, CSS, JavaScript, React,
                    PHP, and Laravel. Capable of providing new ideas and new ways to approach problems. Committed
                    to finishing assignments under pressure.
                </p>
                <a href="#contact" className="btn btn-primary">Let's work together</a>
            </div>
        </div>
    </section>  
}