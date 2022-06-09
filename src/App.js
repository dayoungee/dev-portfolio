import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header";
import About from "./component/about/about";
import Skill from "./component/skill/Skill";
import Projects from "./component/project/Projects";
import Career from "./component/career/Career";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skill/>
      <Projects/>
      <Career/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
