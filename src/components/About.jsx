const About = () => {
  return (
    <section id="presentation" className="w-full py-20 bg-primary">
      <div className="w-full container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">À propos de moi</h2>
        <div className="w-full grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block flex justify-center items-center">
              <img src={`${import.meta.env.BASE_URL}images/Me2.png`} alt="Ange BONI" className="w-64 h-64 rounded-lg object-cover ring-4 ring-secondary ring-opacity-50" />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-primary p-2 rounded-full">
                <i className="fas fa-robot"></i>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Futur Data Engineer & Administrateur Système</h3>
            <p className="text-lg text-text-secondary mb-4">Passionné par les données et l'infrastructure</p>
            <p className="mb-8 text-text-secondary">
              Je suis en formation pour devenir Data Engineer, une discipline qui me passionne profondément. 
              En parallèle, l'administration système est également une passion que je développe de manière autonome à travers des projets personnels. 
              J'acquiers une solide expérience pratique dans les technologies de données et la gestion des infrastructures cloud et on-premise, en travaillant seul ou en équipe sur des projets concrets. 
              Mon objectif est de combiner ces deux domaines afin de maîtriser les outils clés du secteur et de contribuer à des projets ambitieux, en alliant Data Engineering et Administration Système.
            </p>
            <div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Compétences clés</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Python</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Pandas</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">SQL</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Docker</span>
                  <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Linux</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">ASP.NET</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Laravel</span>
                <span className="bg-primary-light px-4 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">Django Rest Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 