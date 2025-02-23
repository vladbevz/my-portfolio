import { Link } from "react-scroll";
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          ABOUT ME
        </h2>
        {/* Короткий опис */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          I'm a <span className="text-blue-500 font-semibold">Full-Stack Developer</span> with a strong focus on building efficient and scalable web applications. 
          Passionate about backend development, database management, and seamless API integration.
        </p>

        {/* Кнопка Explore */}
        <div className="mt-6">
          <Link 
            to="portfolio" smooth={true}
            duration={500}
            className="inline-block border-2 border-black px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition"
          >
            EXPLORE
          </Link>
        </div>

        {/* Роздільник */}
        <div className="my-8">
          <hr className="border-gray-400 w-16 mx-auto" />
          <div className="flex justify-center mt-2 space-x-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Блоки з навичками */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Backend Development */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">Backend Development</h3>
            <p className="text-gray-700">
              I build robust and scalable server-side applications using Node.js, Express, and MongoDB. 
              My focus is on creating secure APIs and optimizing database performance.
            </p>
          </div>

          {/* Web Development */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">Web Development</h3>
            <p className="text-gray-700">
              Experienced in creating modern web applications using React, JavaScript, and responsive design principles 
              to ensure a seamless user experience across all devices.
            </p>
          </div>

          {/* Maintenance */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">Maintenance</h3>
            <p className="text-gray-700">
              Ensuring optimal performance, bug fixes, and ongoing improvements for web applications. 
              I provide continuous support and updates for existing projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
