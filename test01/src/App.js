import './App.css';
import Employee from "./Employee";
import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import axios from 'axios';

function App() {

    const employeeInfo = [
        {
            name: 'arafat',
            email: 'arafat@mail.com',
            key: 1,
        },
        {
            name: 'kamal',
            email: 'kamal@mail.com',
            key: 2,
        }
    ]

    const guns = ['ak', 'm416', 'm16a4'];

    const [name, setName] = useState([])

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => {
                const persons = res.data;
                // persons.map(person => {
                //     console.log(person.name)
                // })
                //setName(persons)
                setName(persons)
            })
    })


    return (



        <div className="App">
            <header className="App-header">



                {name && name.map(n => {
                    const {id, name} = n
                    return(<div key={id}>{name}</div>)
                })}


            </header>


        </div>
    );
}

export default App;
