import React from 'react';

function Contact(props) {
    return (
        <div className="contact my-3 d-flex flex-row justify-content-between">
            <div>{props.name}</div>
            <div>{props.pone}</div>
            <div>
                <i className="mx-2 fas fa-edit text-info"/>
                <i className="fas fa-trash text-danger"/>
            </div>
        </div>
    );
}

export default Contact;