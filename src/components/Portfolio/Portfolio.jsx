import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Aqua-tracker',
    description: 'Short description of the project.',
    image: '/src/assets/project-1.png', // Сюди можна додати URL картинки для проекту
    link: 'https://aqua-tracker-fe-rose.vercel.app/', // Замінити на реальний лінк
  },
  {
    id: 2,
    title: 'Contact App',
    description: 'Short description of the project.',
    image: '/src/assets/project-2.png',
    link: 'https://goit-react-hw-08-three-hazel.vercel.app/',
  },
  {
    id: 3,
    title: 'Simply chocolate',
    description: 'Short description of the project.',
    image: '/src/assets/project-3.png',
    link: 'https://vladbevz.github.io/Simply-chocolate/',
  },
  // Додай ще проекти за потребою
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Portfolio
        </h2>

        {/* Контейнер для проектів */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 w-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для перегляду більше проектів (опціонально) */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/vladbevz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition text-lg"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
