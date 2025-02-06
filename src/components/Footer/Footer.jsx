import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-10 mt-16 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative">
        {/* Кнопка повернення наверх */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-opacity opacity-90 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </button>
        )}

        {/* Соціальні мережі */}
        <div className="flex justify-center space-x-4 mt-8 text-2xl">
  <a
    href="mailto:bevz.vlad15@gmail.com"
    className="text-gray-400 hover:text-blue-500 transition"
    aria-label="Email"
  >
    <FontAwesomeIcon icon={faEnvelope} />
  </a>
  <a
    href="tel:+33767772915"
    className="text-gray-400 hover:text-blue-500 transition"
    aria-label="Phone"
  >
    <FontAwesomeIcon icon={faPhone} />
  </a>
  <a
    href="https://github.com/vladbevz"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition"
    aria-label="GitHub"
  >
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a
    href="https://www.linkedin.com/in/vlad-bevz-109093311/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition"
    aria-label="LinkedIn"
  >
    <FontAwesomeIcon icon={faLinkedin} />
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
