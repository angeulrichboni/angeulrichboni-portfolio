import certifications from '../data/certificationsData';

const Certifications = () => {

  return (
    <section id="certifications" className="w-full py-20 bg-primary">
      <div className="w-full container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">Certifications</h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certifications.map(cert => (
            <div key={cert.id} className="bg-primary-light rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="p-6">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <img src={cert.logo.startsWith('http') ? cert.logo : `${import.meta.env.BASE_URL}${cert.logo}`} alt={`${cert.issuer} Logo`} className="max-h-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{cert.title}</h3>
                  <p className="text-text-secondary mb-1">Obtenue en {cert.date}</p>
                  <p className="text-text-secondary mb-1">
                    {cert.exp ? `Expire le ${cert.exp}` : ""}
                  </p>
                  <p className="text-text-secondary mb-4">{cert.issuer}</p>
                  <a href={cert.link} target="_blank" rel='noopener noreferrer' className="text-secondary hover:text-tertiary flex items-center">
                    <i className="fas fa-external-link-alt mr-2"></i> Voir le certificat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications 