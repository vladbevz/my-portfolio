import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Skills from "../../components/Skills/Skills.jsx"

import Portfolio from "../../components/Portfolio/Portfolio.jsx"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portfolio/>
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Home;
