const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 bg-primary">
      <div className="w-full container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">Contact</h2>
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-primary-light p-4 rounded-lg">
                <i className="fas fa-envelope text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-text-primary">Email</h4>
                  <p className="text-text-secondary">boniangeulrich@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-primary-light p-4 rounded-lg">
                <i className="fas fa-phone text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-text-primary">Téléphone</h4>
                  <p className="text-text-secondary">+216 53 117 212</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-primary-light p-4 rounded-lg">
                <i className="fas fa-map-marker-alt text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-text-primary">Localisation</h4>
                  <p className="text-text-secondary">Ariana, Tunis, Tunisie</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/acobe-ange-ulrich-boni" target="_blank" rel='noopener noreferrer' className="text-text-secondary hover:text-secondary transition-colors">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://github.com/angeulrichboni?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" rel='noopener noreferrer' className="text-text-secondary hover:text-secondary transition-colors">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary mb-2">Nom</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-primary mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"></textarea>
              </div>
              <button type="submit" className="bg-secondary hover:bg-tertiary text-primary px-8 py-4 rounded-lg transition-all duration-300">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 