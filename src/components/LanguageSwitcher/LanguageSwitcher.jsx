import { useTranslation } from "react-i18next"; // імпортуємо useTranslation для роботи з перекладами

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // отримуємо i18n для зміни мови

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // змінюємо мову
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage("en")}
        className="text-white hover:text-blue-400 transition"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("uk")}
        className="text-white hover:text-blue-400 transition"
      >
        UA
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="text-white hover:text-blue-400 transition"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
