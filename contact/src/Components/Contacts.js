import React, {useState} from 'react';
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacts(props) {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (event) =>{
        //console.log(event.target.value);
        setName(event.target.value);

    }

    const handlePhoneChange =(event) =>{
        //console.log(event.target.value);
        setPhone(event.target.value);
    }

    const saveContact = () => {
        hideModal();
        let data = {'name': name, 'phone': phone};

        cnts = [data , ...cnts];
        setContact(cnts);
    }

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
                                    Add New <i className="fas fa-plus-circle"/>
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
                        <input type="text" name="name" value={name} onChange={handleNameChange} className="form-control"/>

                        <label>Phone Number</label>
                        <input type="number" name="phone" value={phone} onChange={handlePhoneChange} className="form-control"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-dark" onClick={hideModal}>Cancel</button>
                        <button className="btn btn-primary" onClick={saveContact}>Save</button>
                    </Modal.Footer>
                </Modal>
            </>




        </div>
    );
}

export default Contacts;