import { Link } from 'react-router-dom';
import projects from '../data/projectsData';

const AllProjects = () => {
  return (
    <section className="w-full py-20 bg-primary">
      <div className="w-full container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">Tous mes projets</h2>

        <div className="w-full grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.id} className="bg-primary-light rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-primary px-3 py-1 rounded-full text-sm border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                      {tag.name}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/projects/${project.id}`} 
                  className="text-secondary hover:text-tertiary flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllProjects;