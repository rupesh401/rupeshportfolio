import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutme/AboutMe";
import MySkills from "./components/MySkills/MySkills";
import MyServices from "./components/myservices/MyServices";
import MyProject from "./components/myprojects/MyProject";
import Contact from "./components/contactme/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <MyServices />
      <MyProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
