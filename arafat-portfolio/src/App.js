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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">

                {/*mobile navigation button*/}
                <button type="button" className="mobile-nav-toggle d-xl-none">
                    <i className="icofont-navigation-menu"></i>
                </button>

                <Header/>
                <Switch>

                    <Route exact path="/">
                        <Hero/>
                    </Route>

                    <Route exact path="/about">
                        <About/>
                    </Route>

                    <Route exact path="/skills">
                        <Skills/>
                    </Route>

                    <Route exact path="/resume">
                        <Resume/>
                    </Route>

                    <Route exact path="/portfolio">
                        <Portfolio/>
                    </Route>

                    <Route exact path="/contact">
                        <Contact/>
                    </Route>

                </Switch>
                <Footer/>

            </div>
        </Router>
    );
}

export default App;
