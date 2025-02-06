import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black font-montserrat font-bold shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип або ім'я */}
        <h1 className="text-[17px] font-bold text-white">VB</h1>

        {/* Навігація */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="text-white hover:text-blue-400 transition text-[17px] ">
                About me
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-400 transition text-[17px] ">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-white hover:text-blue-400 transition text-[17px] ">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition text-[15px] uppercase"
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
