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
            {/* Плейсхолдери для майбутніх робіт */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 w-full"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
                <p className="text-gray-600 mt-2">Short description of the project.</p>
              </div>
            </div>
  
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 w-full"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
                <p className="text-gray-600 mt-2">Short description of the project.</p>
              </div>
            </div>
  
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 w-full"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
                <p className="text-gray-600 mt-2">Short description of the project.</p>
              </div>
            </div>
          </div>
  
          {/* Кнопка для перегляду більше проектів (опціонально) */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/yourgithub"
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
  