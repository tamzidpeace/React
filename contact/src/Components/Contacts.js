import React, {useReducer, useState} from 'react';
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {ContactReducer} from '../Reducer/ContactReducer';




function Contacts(props) {


    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const initialState = {count: 0, name: '', phone: ''};

    const [state, dispatch] = useReducer(ContactReducer, initialState);


    let cnts = [
        {'name': 'arafat', 'phone': 1234},
        {'name': 'saif', 'phone': 4321},
    ];

    const [contacts, setContact] = useState(cnts);

    return (
        <div className="container">

            <div className="d-flex flex-row justify-content-center mt-5">
                <div className="card" style={{width: "30rem",}}>

                    <div className="card-header">
                        <h1 className="card-title">Contact List</h1>

                        <div className="card-toolbar">

                            <div className="float-end mb-2">
                                <button className="btn btn-primary" onClick={showModal}>
                                    Add New 
                                    {/* <i className="fas fa-plus-circle"/> */}
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="card-body">

                        {contacts.map(contact => <Contact key={contact.name} name={contact.name} pone={contact.phone}/> )}

                    </div>
                </div>
            </div>


            <>
                <Modal animation={false} show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title>Add New Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <label>Name</label>
                        <input type="text" name="name" value={state.name} onChange={() => dispatch({type: 'handleNameChange'})} className="form-control"/>

                        <label>Phone Number</label>
                        <input type="number" name="phone" value={state.phone} onChange={() => dispatch({type: 'handlePhoneChange'})} className="form-control"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-dark" onClick={hideModal}>Cancel</button>
                        <button className="btn btn-primary">Save</button>
                    </Modal.Footer>
                </Modal>
            </>




        </div>
    );
}

export default Contacts;