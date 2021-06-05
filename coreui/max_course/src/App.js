import './App.css';
import Person2 from "./Person/Person2";

function App() {

    const clickEvent  = () => {
        console.log(123)
    }



    return (
        <div className="App">
            <header className="App-header">
                {/*<Person name="arafat"/>*/}
                <Person2 click={clickEvent}/>

            </header>
        </div>
    );
}

export default App;
