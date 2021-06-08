import React from "react";


const Employee = (props) => {
    console.log(props)

    const {name, email} = props;

    return (
        <React.Fragment>

        <h3>
            {name} {email}
        </h3>

        </React.Fragment>
    );
}

export default Employee