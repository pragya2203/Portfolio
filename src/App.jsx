import style from "./App.module.css";
import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import About from "./componets/About/About";
import Skills from "./componets/Skills/Skills";
import Project from "./componets/Project/Project";
import Contact from "./componets/Contact/Contact";

function App(){
  return (
    <div className = {style.App}>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;