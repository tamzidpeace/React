import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Components/Footer";
import Header from './Components/Header'
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">

            {/*mobile navigation button*/}
            <button type="button" className="mobile-nav-toggle d-xl-none">
                <i className="icofont-navigation-menu"></i>
            </button>

            <Header/>
            <Hero/>
            <About/>
            <Skills/>
            <Resume/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
