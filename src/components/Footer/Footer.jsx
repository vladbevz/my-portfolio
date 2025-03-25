import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8 mt-12 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative">
        {/* Кнопка повернення наверх */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer absolute top-[-45px] left-1/2 transform -translate-x-1/2 
          bg-gray-400 text-black px-5 py-2 rounded-xl shadow-lg 
          hover:bg-blue-500 transition-opacity opacity-90 hover:opacity-100 
          uppercase font-montserrat font-bold tracking-wider"
        >
          {t("footer.button")}
        </Link>

        {/* Соціальні мережі */}
        <div className="flex justify-center space-x-6 mt-6 text-2xl flex-wrap justify-center">
          {[
            {
              href: "mailto:bevz.vlad15@gmail.com",
              icon: faEnvelope,
              label: "Email",
            },
            { href: "tel:+33767772915", icon: faPhone, label: "Phone" },
            {
              href: "https://github.com/vladbevz",
              icon: faGithub,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/vlad-bevz-109093311/",
              icon: faLinkedin,
              label: "LinkedIn",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition mb-4"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Копірайт */}
        <p className="text-gray-500 text-sm mt-2">
          {t("footer.copyright")} {new Date().getFullYear()} Vlad Bevz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
