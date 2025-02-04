import profileImage from "../../assets/IMG_9231.jpg"; // Додай своє фото
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gray-100">
      {/* Контейнер */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Ліва частина: текст */}
        <div className="md:w-1/2 text-left">
          <p className="text-lg text-gray-700">Hi, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Vlad Bevz
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Full-stack Developer / UI Designer
          </p>

          {/* Іконки соцмереж */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">
               <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* Кнопка */}
          <a
            href="#contact"
            className="mt-6 inline-block border border-black text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

        {/* Права частина: фото */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src={profileImage}
            alt="Vlad Bevz"
            className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
