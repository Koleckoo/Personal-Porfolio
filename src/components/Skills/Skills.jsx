import "./Skills.css"
import {BsPatchCheckFill} from 'react-icons/bs'

export default function Skills() {

    return <section id="skills">
        <h5>These are the skills I have</h5>
        <h2>My Skills</h2>

        <div className="container skills__container">
            <div className="skills__frontend">
                <h3>Frontend Development</h3>
                <div className="skills__content">
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>                      
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>React.js</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>BootStrap</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>Tailwind.js</h4>
                            <small className="text-light">Beginner</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="skills__backend">
                <h3>Backend Development</h3>
                <div className="skills__content">
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>PHP</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>Laravel</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="skills__details">
                        <BsPatchCheckFill className="skills__details-icon"/>
                        <div>
                            <h4>Python</h4>
                            <small className="text-light">Beginner</small>
                        </div>
                    </article>
                    
                </div>
            </div>
        </div>
    </section>  
}