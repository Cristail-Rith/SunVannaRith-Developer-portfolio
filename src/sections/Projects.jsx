import ProjectCard from '../components/ui/ProjectCard.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section id="projects">
      <div className="section-ambience" aria-hidden="true" />
      <SectionTitle
        number="03"
        label="Projects"
        description="A collection of experiments across web development, full-stack systems and hardware."
        aside={projects.length ? `${String(projects.length).padStart(2, '0')} projects / web + hardware` : null}
      >
        Ideas made tangible
      </SectionTitle>
      <div className="project-grid p-5">
        {projects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
      </div>
      {projects.length === 0 && (
        <div className="projects-empty">
          <div className="projects-empty-index" aria-hidden="true">01</div>
          <div className="projects-empty-content">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-accent-ink)]">The work starts here</span>
            <h3>Your first project</h3>
            <p>Add a project to the data file and it will appear here as a portfolio card.</p>
          </div>
          <span className="projects-empty-path">src/data/projects.js</span>
        </div>
      )}
    </section>
  )
}

export default Projects
