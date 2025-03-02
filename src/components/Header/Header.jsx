import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header
      key={i18n.language} // Оновлює компонент при зміні мови
      id="top"
      className="bg-black font-montserrat font-bold shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип або ім'я */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer text-[17px] font-bold text-white"
        >
          VB
        </Link>

        {/* Навігація */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:text-blue-400 transition text-[17px]"
              >
                {t("header.about")}
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:text-blue-400 transition text-[17px]"
              >
                {t("header.skills")}
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:text-blue-400 transition text-[17px]"
              >
                {t("header.portfolio")}
              </Link>
            </li>
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
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
