import { useTranslation } from "react-i18next";
import profileImage from "../../assets/result.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-white to-black flex items-center px-6 md:px-12 lg:px-24"
    >
      {/* Контейнер */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:space-x-4 w-full max-w-4xl">
        {/* Ліва частина: текст */}
        <div className=" md:w-1/2 flex flex-col justify-center items-center text-center">
          <p className="text-3xl md:text-4xl font-raleway font-bold text-black">
            {t("hero.text")}
          </p>
          <h1 className="text-5xl md:text-6xl font-raleway font-bold text-black">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-bold text-[#464444] mt-2">
            {t("hero.subtitle")}
          </p>

          {/* Іконки соцмереж */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="mailto:bevz.vlad15@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
            <a
              href="tel:+33767772915"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
            </a>
            <a
              href="https://github.com/vladbevz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/vlad-bevz-109093311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Права частина: фото */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={profileImage}
            alt="Vlad Bevz"
            className="w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
