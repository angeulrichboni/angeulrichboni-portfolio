const CV = () => {
  return (
    <section id="cv" className="w-full py-20 bg-primary">
      <div className="w-full container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">Mon CV</h2>
        <div className="w-full bg-primary-light rounded-xl shadow-lg p-8 card-hover">

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Compétences Techniques</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-text-primary">Data Engineering</h4>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>Python, Pandas</li>
                  <li>SQL (PostgreSQL, MySQL)</li>
                  <li>ETL/ELT (Airflow)</li>
                  <li>Data Warehousing</li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-text-primary">System Administration</h4>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>Linux/Unix Administration</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-text-primary">Developpement Backend</h4>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>C#, ASP.NET</li>
                  <li>Python, Django / Django Rest Framework</li>
                  <li>Java, Spring Boot</li>
                  <li>PHP, Laravel, Symfony</li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-text-primary">Base de données</h4>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>PostgreSQL, MySQL</li>
                  <li>MongoDB</li>
                  <li>SQL Server</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Expérience Professionnelle</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Stage en Data Analytics</h4>
                <p className="text-text-secondary">Mentorness</p>
                <p className="text-text-secondary">Juin 2024 - Juillet 2024</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
                  <li>Analyse de donnée Youtube avec SQL (SQL Server)</li>
                  <li>Analyser et Visualiser les données Youtube avec Power BI</li>
                  <li>Utilisation de Git et GitHub</li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Technicien Support Système</h4>
                <p className="text-text-secondary">Nouvelle Parfumerie Gandour (Côte d'Ivoire)</p>
                <p className="text-text-secondary">Juillet 2023 - Août 2023	</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
                  <li>Surveillance des applications et des serveurs</li>
                  <li>Monitoring des bases de données</li>
                  <li>Automatisation des deploiements docker avec Scripting Bash</li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Technicien Support Réseaux</h4>
                <p className="text-text-secondary">Nouvelle Parfumerie Gandour (Côte d'Ivoire)</p>
                <p className="text-text-secondary">Novembre 2022 - Juillet 2023	</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
                  <li>Câblage et maintenance des réseaux</li>
                  <li>Assistance aux utilisateurs</li>
                  <li>Configuration des appareils réseaux(Imprimantes, Téléphonie IP, Ordinateurs)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Formation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Cycle Ingénieur</h4>
                <p className="text-text-secondary">TEK-UP University</p>
                <p className="text-text-secondary">2023 - En cours</p>
                <p className="text-text-secondary">Spécialisation Data Science & IA</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Licence Professionnelle en Réseaux et Télécommunications</h4>
                <p className="text-text-secondary">Ecole Supérieure Africaine des Technologies de l'Information et de la Communication (ESATIC)</p>
                <p className="text-text-secondary">2022</p>
                <p className="text-text-secondary">Spécialisation en Réseaux et Télécommunications</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-bold text-text-primary">Baccalauréat</h4>
                <p className="text-text-secondary">Lycée Moderne Agou (Côte d'Ivoire)</p>
                <p className="text-text-secondary">2018</p>
                <p className="text-text-secondary">Options Serie D (Mathématiques, Sciences Physiques, Sciences de la Vie et de la Terre)</p>
              </div>
            </div>
          </div>
          

          <div className="flex justify-center space-x-4">
            <a href="https://drive.google.com/file/d/1AA9d3i38mIEXtNGf8SjT_QJrkGCbeMHu/view?usp=sharing" target="_blank" rel='noopener noreferrer' className="inline-flex items-center bg-secondary hover:bg-tertiary text-primary px-8 py-4 rounded-lg transition-all duration-300" download>
              <i className="fas fa-download mr-2"></i> Download CV in English
            </a>
            <a href="https://drive.google.com/file/d/1tTVXSdQa8kKDnhY8giZqUndgcRFNQhl_/view?usp=sharing" target="_blank" rel='noopener noreferrer' className="inline-flex items-center bg-secondary hover:bg-tertiary text-primary px-8 py-4 rounded-lg transition-all duration-300" download>
              <i className="fas fa-download mr-2"></i> Télécharger CV en Français
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV 