const Footer = () => {
  return (
    <footer className="bg-primary text-text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 Acobe Ange Ulrich BONI. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 