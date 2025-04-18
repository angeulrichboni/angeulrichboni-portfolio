import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({...prevData, [id]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ En cours d'envoi...");
    setIsSending(true);

    try {
      console.log(formData);
      // const response = await fetch('http://127.0.0.1:8000/contact', {
      const response = await fetch('https://angeulrichboni-portfolio-api.onrender.com/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if(response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus("❌ Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("⚠️ Impossible d'envoyer le message. Veuillez réessayer.");
    }

    setTimeout(() => {
      setStatus('');
      setIsSending(false);
    }, 3000);
  };

  const getButtonColor = () => {
    if(status.startsWith('✅')) return 'bg-green-500';
    if(status.startsWith('❌') || status.startsWith('⚠️')) return 'bg-red-500';
    if (status.startsWith("⏳")) return 'bg-yellow-500';
    return 'bg-secondary';
  };
  
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
                  <h4 className="font-bold text-text-primary">Mon Email</h4>
                  <p className="text-text-secondary">boniangeulrich@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-primary-light p-4 rounded-lg">
                <i className="fas fa-phone text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-text-primary">Mon Numéro de Téléphone</h4>
                  <p className="text-text-secondary">+216 53 117 212</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-primary-light p-4 rounded-lg">
                <i className="fas fa-map-marker-alt text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-text-primary">Ma Localisation</h4>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-text-primary mb-2">Votre Nom</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-text-primary mb-2">Votre Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-text-primary mb-2">Objet</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary mb-2">Message</label>
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-primary-light border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"></textarea>
              </div>
              <button type="submit" 
              className={`${getButtonColor()} w-full hover:opacity-90 text-primary py-4 rounded-lg transition-all duration-300`} disabled={isSending}>
                {status ? (
                  <>
                    {/* Icône à gauche selon le status */}
                    {status.startsWith("⏳") && (
                      <svg
                        className="animate-spin h-5 w-5 text-primary transition-opacity duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {status.startsWith("✅") && (
                      <span className="animate-bounce text-xl">✅</span>
                    )}
                    {status.startsWith("❌") && (
                      <span className="text-xl">❌</span>
                    )}
                    {status.startsWith("⚠️") && (
                      <span className="text-xl">⚠️</span>
                    )}
                    {/* Texte du status */}
                    <span>{status.replace(/^[^a-zA-Z0-9]+/, '')}</span>
                  </>
                ) : (
                  <span>Envoyer</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 