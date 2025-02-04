const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Лого або ім'я */}
        <h2 className="text-2xl font-semibold">Vlad Bevz</h2>
        <p className="text-gray-400 mt-2">Frontend Developer</p>

        {/* Соціальні мережі */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>

        {/* Копірайт */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Vlad Bevz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
