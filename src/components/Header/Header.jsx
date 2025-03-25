import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      key={i18n.language}
      id="top"
      className="bg-black font-montserrat font-bold shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer text-[17px] font-bold text-white"
        >
          VB
        </Link>

        {/* Бургер-меню для мобільних */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Навігація */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-lg font-medium">
            {[
              { to: "about", label: t("header.about") },
              { to: "skills", label: t("header.skills") },
              { to: "portfolio", label: t("header.portfolio") },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-blue-400 transition text-[17px]"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer bg-white text-gray-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition text-[15px] uppercase"
              >
                {t("header.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Перемикач мов */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Мобільне меню */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-6 text-white text-3xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col space-y-6 text-lg font-medium">
          {[
            { to: "about", label: t("header.about") },
            { to: "skills", label: t("header.skills") },
            { to: "portfolio", label: t("header.portfolio") },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white text-2xl hover:text-blue-400 transition"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer bg-white text-gray-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition text-[15px] uppercase"
            >
              {t("header.contact")}
            </Link>
          </li>
        </ul>

        {/* Перемикач мов в мобільному меню */}
        <div className="mt-6">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
