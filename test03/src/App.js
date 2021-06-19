import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

function App() {
    return (
        <div className="App">

            <Router>
                <div>
                    <h2>Accounts</h2>

                    <ul>
                        <li>
                            <Link to="/netflix">Netflix</Link>
                        </li>
                        <li>
                            <Link to="/zillow-group">Zillow Group</Link>
                        </li>
                        <li>
                            <Link to="/yahoo">Yahoo</Link>
                        </li>
                        <li>
                            <Link to="/modus-create">Modus Create</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/:id" children={<Child/>}/>
                    </Switch>
                </div>
            </Router>

        </div>
    );


    function Child() {
        // We can use the `useParams` hook here to access
        // the dynamic pieces of the URL.
        let {id} = useParams();

        console.log(id)

        return (
            <div>
                <h3>ID: {id}</h3>
            </div>
        );
    }
}


export default App;
