import './App.css';
import Employee from "./Employee";
import React from "react";

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

    return (
        <div className="App">
            <header className="App-header">
                <h1>Company Directory</h1>
                {employeeInfo.map((employee) => {
                   return <Employee {...employee} />
                })}


                {guns.map(gun => (<p>{gun}</p>))}

            </header>


        </div>
    );
}

export default App;
