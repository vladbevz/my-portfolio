const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Contact
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          If you’d like to work together, feel free to reach out to me via email or through the contact form below.
        </p>

        {/* Форма для контакту */}
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Альтернативні контакти */}
        <div className="mt-8">
          <p className="text-gray-700">Or reach me directly:</p>
          <p className="text-gray-900 font-semibold">📧 bevz.vlad15@gmail.com</p>
          <p className="text-gray-900 font-semibold">📍 Nimes, France</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
