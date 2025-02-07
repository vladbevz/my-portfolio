import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative">
        {/* Кнопка повернення наверх */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer absolute top-[-40px] left-1/2 transform -translate-x-1/2 
    bg-gray-400 text-black px-5 py-2 rounded-xl shadow-lg 
    hover:bg-blue-500 transition-opacity opacity-90 hover:opacity-100 
    uppercase font-montserrat font-bold tracking-wider"
        >
          Back to Top
        </Link>

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
