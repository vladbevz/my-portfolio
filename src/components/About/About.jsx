import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center max-w-4xl">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          {t("about.title")}
        </h2>

        {/* Короткий опис */}
        <p className="text-lg md:text-xl text-gray-700 mx-auto leading-relaxed">
          {t("about.description", {
            span: (text) => (
              <span className="text-blue-500 font-semibold">{text}</span>
            ),
          })}
        </p>

        {/* Кнопка Explore */}
        <div className="mt-6">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="inline-block border-2 border-black px-6 py-3 text-lg md:text-xl font-medium hover:bg-black hover:text-white transition cursor-pointer rounded-lg"
          >
            {t("about.explore")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
