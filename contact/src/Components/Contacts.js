import React from 'react';
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css"

function Contacts(props) {
    return (
        <div className="container">

            <div className="d-flex flex-row justify-content-center mt-5">
                <div className="card" style={{width: "30rem",}}>

                    <div className="card-body">

                        <h1 className="card-title">Contact List</h1>

                        <Contact/>
                        <Contact/>
                        <Contact/>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;