export const Dashbord = () => {
    return (
        <div className="container mx-auto p-4">
        <header className="text-center">
          <h1 className="text-4xl text-green-400 font-bold">Bienvenue dans le monde cybernétique</h1>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li><a href="#" className="text-green-400 hover:text-green-300">Accueil</a></li>
              <li><a href="#" className="text-green-400 hover:text-green-300">Services</a></li>
              <li><a href="#" className="text-green-400 hover:text-green-300">À propos</a></li>
              <li><a href="#" className="text-green-400 hover:text-green-300">Contact</a></li>
            </ul>
          </nav>
        </header>
        <section className="mt-8">
          <h2 className="text-2xl text-green-400 font-bold">Services Cybernétiques</h2>
          <div className="service mt-4">
            <h3 className="text-xl text-green-400 font-bold">Augmentation Humaine</h3>
            <p className="text-green-200">Améliorez vos capacités avec nos implants cybernétiques de pointe.</p>
          </div>
          <div className="service mt-4">
            <h3 className="text-xl text-green-400 font-bold">Sécurité Avancée</h3>
            <p className="text-green-200">Protégez vos données sensibles avec nos solutions de sécurité informatique.</p>
          </div>
          <div className="service mt-4">
            <h3 className="text-xl text-green-400 font-bold">Virtual Reality</h3>
            <p className="text-green-200">Explorez des mondes virtuels immersifs avec notre technologie de réalité virtuelle.</p>
          </div>
        </section>
        <footer className="mt-8 text-center">
          <p className="text-green-400">&copy; 2024 CyberTech Solutions - Tous droits réservés</p>
        </footer>
      </div>
    );
}