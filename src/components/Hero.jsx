import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ 
      backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url("https://res.cloudinary.com/ddivqszbt/image/upload/v1744896882/background-hero_eglnyp.jpg")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: 0,
      padding: 0
    }}>
      <div className="w-full text-center text-text-primary max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 animate-slide-down">Acobe Ange Ulrich BONI</h1>
        <div className="text-2xl mb-8 animate-slide-up gradient-text">
          <TypeAnimation
            sequence={[
              'Je suis en recherche de stage',
              6000,
              'Développeur Backend',
              2000,
              'Data Engineer (en formation)',
              2000,
              'Administrateur Système',
              2000,
              'Développeur Backend',
              2000,
              'Passionné par les données et l’optimisation des flux',
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>
        <div className="flex justify-center space-x-4 animate-fade-in">
          {/* <a href="#presentation" className="bg-secondary hover:bg-tertiary text-primary px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">En savoir plus</a>
          <a href="#projets" className="border-2 border-secondary hover:bg-secondary hover:text-primary text-secondary px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">Voir mes projets</a> */}
          <a href="#projets" className="flex items-center justify-center bg-secondary hover:bg-tertiary text-primary px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Voir mes projets <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 