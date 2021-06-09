import './App.css';
import Employee from "./Employee";
import React, {useEffect, useState} from "react";
// import Button from "@material-ui/core/Button";
import axios from 'axios';
import Dashboard from "./dashboard/Dashboard";
import Deposits from "./dashboard/Deposits";
import Orders from "./dashboard/Orders";

function App() {


    return (

        <div className="">

            <Dashboard/>

        </div>
    );
}

export default App;
