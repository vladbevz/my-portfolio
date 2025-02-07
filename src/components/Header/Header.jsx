import { Link } from "react-scroll";

const Header = () => {
  return (
    <header
      id="top"
      className="bg-black font-montserrat font-bold shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип або ім'я */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className=" cursor-pointer  text-[17px] font-bold text-white"
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
                className="cursor-pointer text-white hover:text-blue-400 transition text-[17px] "
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className=" cursor-pointer text-white hover:text-blue-400 transition text-[17px] "
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className=" cursor-pointer text-white hover:text-blue-400 transition text-[17px] "
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className=" cursor-pointer bg-white text-gray-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition text-[15px] uppercase"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
