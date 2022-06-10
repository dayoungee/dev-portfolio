import logo from './logo.svg';
import './style/App.css';
import Header from "./component/header/Header";
import About from "./component/about/about";
import Skill from "./component/skill/Skill";
import Projects from "./component/project/Projects";
import Career from "./component/career/Career";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

import { PortfolioProvider } from "./context/context";
import { headerData,mainData,aboutData }  from "./mock/data";
import {useEffect, useState} from "react";
import Main from "./component/main/Main";

function App() {
    const [header, setHeader ] = useState({});
    const [main, setMain] = useState({});
    const [about, setAbout] = useState({});

    useEffect(()=>{
       setHeader( {...headerData});
       setMain({...mainData});
       setAbout({...aboutData});
    },[]);

  return (
    <PortfolioProvider value={{ header, main, about }}>
        <div id='App'>
            <Header/>
            <Main/>
            <About/>
            <Skill/>
            <Projects/>
            <Career/>
            <Contact/>
            <Footer/>
        </div>
    </PortfolioProvider>
  );
}

export default App;
