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
      className="relative h-screen bg-gradient-to-br from-white to-black flex items-center bg-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Ліва частина: текст */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-[40px] font-raleway font-bold text-black">
            {t("hero.text")}
          </p>
          <h1 className="text-[80px] font-raleway font-bold text-black">
            {t("hero.title")}
          </h1>
          <p className="text-[25px] font-raleway font-bold text-[#464444] mt-2">
            {t("hero.subtitle")}
          </p>

          {/* Іконки соцмереж */}
          <div className="flex space-x-4 mt-8">
            <a
              href="mailto:bevz.vlad15@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
            <a
              href="tel:+33767772915"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Phone"
            >
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
            </a>
            <a
              href="https://github.com/vladbevz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/vlad-bevz-109093311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Права частина: фото */}
        <div className="">
          <img src={profileImage} alt="Vlad Bevz" className="max-w-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
