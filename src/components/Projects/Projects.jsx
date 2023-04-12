import "./Projects.css"
import CalenDr from '../../assets/CalenDr.jpg'
import MovieSearcher from '../../assets/movie_searcher.jpg'


export default function Projects() {

    const projectData = [
        {
            id: 1,
            image: CalenDr,
            title: 'Online Platform Connecting Patients and Doctors',
            github: "https://github.com/petramare/Doctor",
            demo: "https://calendr.codeboot.cz/"

        },
        {
            id: 2,
            image: MovieSearcher,
            title: 'Movie Searcher',
            github: "https://github.com/Koleckoo/IC-group-assignment",
            demo: ""

        },
    ]

    return <section id="projects">
        <h5>My recent work</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
        {projectData.map((project) => {
            return (
            <article key={project.id} className="portfolio__items">
                <div className="portfolio__item-image">
                    <img src={project.image} alt="CalenDr screenshot" />
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio__item-cta">
                    <a href={project.github} target="_blank" className="btn" rel="noopener noreferrer">Github</a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                </div>
            </article>
        )
        })}
        </div>
    </section>  
}