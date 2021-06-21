import React from 'react';

function Contact(props) {
    return (
        <div className="contact my-3 d-flex flex-row justify-content-between">
            <div>Name</div>
            <div>1234567879</div>
            <div>
                <i className="mx-2 fas fa-edit text-info"></i>
                <i className="fas fa-trash text-danger"></i>
            </div>
        </div>
    );
}

export default Contact;