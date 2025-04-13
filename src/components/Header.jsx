import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetail = location.pathname.includes('/projects/');

  const handleNavigation = (section) => {
    setMobileMenuOpen(false);
    if (isProjectDetail) {
      navigate('/');
      // Attendre que la page soit chargée avant de faire défiler
      setTimeout(() => {
        const element = document.querySelector(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full bg-primary/90 text-text-primary z-50 transition-all duration-300 glass-effect">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold gradient-text">B.A.A.U</Link>
          <button 
            className={`md:hidden hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-text-primary mb-1 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-text-primary mb-1 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
          </button>
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/" onClick={() => handleNavigation('#accueil')} className="hover:text-secondary transition-colors">Accueil</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#presentation')} className="hover:text-secondary transition-colors">Présentation</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#cv')} className="hover:text-secondary transition-colors">CV</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#certifications')} className="hover:text-secondary transition-colors">Certifications</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#projets')} className="hover:text-secondary transition-colors">Projets</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#contact')} className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </nav>
        {/* Menu mobile */}
        <div className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-primary/95 py-4 px-4 glass-effect`}>
          <ul className="space-y-4">
            <li><Link to="/" onClick={() => handleNavigation('#accueil')} className="block hover:text-secondary transition-colors">Accueil</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#presentation')} className="block hover:text-secondary transition-colors">Présentation</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#cv')} className="block hover:text-secondary transition-colors">CV</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#certifications')} className="block hover:text-secondary transition-colors">Certifications</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#projets')} className="block hover:text-secondary transition-colors">Projets</Link></li>
            <li><Link to="/" onClick={() => handleNavigation('#contact')} className="block hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
