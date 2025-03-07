import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <Services />
      <Skills />
      <Project />
      <Certificates />
      
      <About />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
