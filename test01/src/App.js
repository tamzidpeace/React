import './App.css';
import Employee from "./Employee";
import React, {useEffect, useState} from "react";
// import Button from "@material-ui/core/Button";
import axios from 'axios';
import Dashboard from "./dashboard/Dashboard";
import SignIn from "./Signin/SignIn";
import SignInSide from "./Signin/SignInSide";
import Todos from "./todo/Todos";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Todo from "./todo/todo";

function App() {


    return (

        <div className="App">

            <Router>

                <Switch>
                    <Route exact path="/" children={<Todos/>}/>
                    <Route path="/:id" children={<Todo/>}/>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
