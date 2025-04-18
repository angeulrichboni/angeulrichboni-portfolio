import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projectsData";
const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState({
    url: project?.image || '',
    caption: 'Image principale'
  });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    text: ''
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.text) {
      setComments([...comments, { ...newComment, id: Date.now(), date: new Date().toLocaleDateString() }]);
      setNewComment({ name: '', email: '', text: '' });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center p-8 bg-primary-light rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Projet non trouvé</h1>
          <p className="text-text-secondary mb-6">Le projet que vous recherchez n'existe pas.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-tertiary text-primary rounded-lg transition-all duration-300"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    { url: project.image, caption: 'Image principale' },
    ...project.gallery.map(item => ({ url: item.url, caption: item.caption }))
  ];
  const showSlider = allImages.length > 4;

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-8 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-light rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            {/* Titre du projet */}
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">{project.title}</h1>
            </div>

            {/* Image principale avec overlay */}
            <div className="relative h-[500px] overflow-hidden group">
              <img 
                src={currentImage.url}
                alt={currentImage.caption}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>

            {/* Légende de l'image principale */}
            <div className="p-4 bg-primary/20 text-center">
              <p className="text-text-secondary italic">{currentImage.caption}</p>
            </div>

            {/* Galerie d'images */}
            <div className="p-8 bg-primary/20">
              <h3 className="text-xl font-bold text-text-primary mb-4">Galerie du projet</h3>
              {showSlider ? (
                <div className="relative">
                  <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                    {allImages.map((image, index) => (
                      <div 
                        key={index}
                        className="relative cursor-pointer group flex-shrink-0 w-64"
                        onClick={() => setCurrentImage(image)}
                      >
                        <img 
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm text-center px-2">{image.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/50 hover:bg-primary/70 text-white p-2 rounded-full">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/50 hover:bg-primary/70 text-white p-2 rounded-full">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative cursor-pointer group"
                      onClick={() => setCurrentImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm text-center px-2">{image.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags avec icônes et Contenu */}
            <div className="p-8 md:p-12">
              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg">
                      <img 
                        src={tag.iconUrl} 
                        alt={`${tag.name} icon`}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-text-primary">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description détaillée */}
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.description_detaillee}
                </p>
              </div>

              {/* Lien GitHub */}
              {project.githubUrl && (
                <div className="mb-8">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#24292e] text-white rounded-lg hover:bg-[#2f363d] transition-colors duration-300"
                  >
                    <i className="fab fa-github mr-2"></i>
                    Voir le code sur GitHub
                  </a>
                </div>
              )}

              {/* Projet en équipe */}
              {project.isTeamProject && project.teamMembers.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Projet en équipe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.teamMembers.map((member, index) => (
                      <div key={index} className="bg-primary/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                            <i className="fas fa-user text-xl"></i>
                          </div>
                          <p className="text-text-primary font-semibold text-lg">
                            {member.name}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {member.roles.map((role, rIndex) => (
                            <span
                              key={rIndex}
                              className="bg-secondary text-primary text-sm px-3 py-1 rounded-full text-center"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                        {member.profileUrl && (
                          <a
                            href={member.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-secondary hover:text-tertiary transition-colors duration-300 text-sm"
                          >
                            <i className="fas fa-external-link-alt mr-2"></i>
                            Voir le profil
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ressources du projet */}
              {project.ressources && project.ressources.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Ressources du projet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.ressources.map((ressource, index) => (
                      <a
                        key={index}
                        href={ressource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary/20 px-4 py-3 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>{ressource.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-text-primary rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Retour à l'accueil
                </Link>
                <Link 
                  to="/#projets" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary transition-colors duration-300"
                >
                  <i className="fas fa-th-large mr-2"></i>
                  Voir tous les projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 