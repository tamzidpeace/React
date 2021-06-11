import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {

    return (
        <React.Fragment>

            <div style={{textAlign: 'center',}}>
                <h1>Redux Made Easy</h1>

                <div className="count">

                    <h3>Count : 0</h3>

                    <div className="mt-5">
                        <button className="btn btn-primary mr-2">
                            <i className="fas fa-plus"/>
                        </button>
                        <button className="btn btn-primary mr-2">
                            <i className="fas fa-minus"/>
                        </button>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

