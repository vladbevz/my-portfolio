const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Зображення */}
          <div className="w-full md:w-1/2">
            <img 
              src="/your-photo.jpg" 
              alt="Vlad Bevz" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Опис */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate <span className="text-blue-500 font-semibold">Frontend Developer</span> with experience in building interactive and user-friendly web applications. 
              I enjoy crafting modern, responsive, and accessible designs.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Always eager to learn new technologies and improve my skills. My focus is on creating clean, maintainable, and scalable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
