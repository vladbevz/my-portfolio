import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import emailjs from "emailjs-com";  // імпортуємо EmailJS

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // Використовуємо EmailJS для відправки листа
    try {
      const result = await emailjs.send(
        'service_o9vuf7o',      
        'template_bb0cvec',      
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },                    
        'mOTfvQqRtMuWQzOlM'    
      );

      console.log("Email sent:", result.text);  // Перевірка результату
      setIsSubmitted(true);  // Встановлюємо статус успішної відправки
      reset();  // очищаємо форму після успішної відправки
    } catch (error) {
      console.error("Error submitting form:", error);  // Вивести помилку в консоль
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          CONTACT
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate! Feel free to reach out via email or by filling out the form below.
        </p>

        {isSubmitted && (
          <p className="text-green-600 text-lg font-semibold mt-4">
            ✅ Thank you! Your message has been sent.
          </p>
        )}

        {/* Форма для контакту */}
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="name">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-left" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className=" cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full text-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
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
