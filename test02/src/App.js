import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import {TestContext} from "./Contexts/TestContext";
import {useState} from 'react';


function App() {


    const [name, setName] = useState('Arafat');

    return (
        <div className="container App">

            <TestContext.Provider value={{ name }}>
                <Login/>
            </TestContext.Provider>


            <Profile/>

        </div>
    );
}

export default App;
