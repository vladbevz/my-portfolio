import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "Aqua-tracker",
    description: "portfolio.aqua-tracker.description",
    image: "/project-1.png",
    link: "https://aqua-tracker-fe-rose.vercel.app/",
  },
  {
    id: 2,
    title: "Contact App",
    description: "portfolio.contact-app.description",
    image: "/project-2.png",
    link: "https://goit-react-hw-08-three-hazel.vercel.app/",
  },
  {
    id: 3,
    title: "Simply Chocolate",
    description: "portfolio.simply-chocolate.description",
    image: "/project-3.png",
    link: "https://vladbevz.github.io/Simply-chocolate/",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {t("portfolio.title")}
        </h2>

        {/* Контейнер для проектів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{t(project.description)}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 block font-medium"
                >
                  {t("portfolio.link")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для перегляду більше проектів */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vladbevz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition text-lg shadow-md hover:shadow-lg"
          >
            {t("portfolio.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
