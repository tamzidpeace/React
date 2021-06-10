import {useEffect, useState} from "react";
import axios from "axios";
import {CircularProgress} from "@material-ui/core";
import TodoCard from "./TodoCard";

export default function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(function (response) {
                console.log(response.data)
                setTodos(response.data)
            }).catch(function (error) {
            console.log(error)
        }).then(function () {
            console.log('always executed')
        })
    }, [])


    return (
        <div>
            <h1>Todos Component</h1>
            {todos? (
                <div>
                    <h3>Data</h3>
                    { {todos} && <div>{todos.map((todo) => (<TodoCard todo={todo}/>))}</div>}
                </div>
            ) : <CircularProgress/>}

        </div>

    );
}