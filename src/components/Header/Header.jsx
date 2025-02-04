import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип або ім'я */}
        <h1 className="text-2xl font-bold text-gray-900">VB</h1>

        {/* Навігація */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
                About me
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-gray-700 hover:text-blue-500 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
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
