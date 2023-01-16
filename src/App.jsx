import "./App.css";
// import Home from './PortfolioContainer/Home/Home';
// import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import Hero from "./component/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./component/Skill";
import Service from "./component/Services";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Hireme from "./component/Hireme";
import Contact from "./component/Contact.jsx";
import { useEffect } from "react";
import "@fontsource/poppins";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="App">
      {/* <Home/> */}
      {/*    
   <PortfolioContainer/> */}
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Mohammadikram</h6>
        <p>mohammadikram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
}

export default App;
