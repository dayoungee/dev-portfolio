import Project from "../Project";

const Projects = () => {

    return(
        <section id="projects">
            <div className="projects-title-wrapper">
               <span className="projects-title">Projects</span>
            </div>
            <div className="projects-wrapper">
                <Project/>
            </div>
        </section>
    )
}

export default Projects;