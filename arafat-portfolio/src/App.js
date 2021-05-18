import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Components/Footer";
import Header from './Components/Header'

function App() {
    return (
        <div className="App">

            {/*mobile navigation button*/}
            <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
            <Header/>

            <Footer/>

        </div>
    );
}

export default App;
