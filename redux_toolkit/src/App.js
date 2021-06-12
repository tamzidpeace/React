import './App.css';
import {useState} from "react";
import {Counter} from "./features/counter/Counter";

function App() {

  const [vote, setVote] = useState();

  return (
    <div className="App">


    <Counter/>

    </div>
  );
}

export default App;
