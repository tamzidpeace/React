import React from 'react';

function Login(props) {
    return (
        <div className="p-5">

            <h3 className="text-center mb-5">Login Form</h3>
            <div className="d-flex flex-row justify-content-center">
                <form action="" className="loginForm mx-5">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" name="email"/>

                    <label className="mt-3" htmlFor="">Password</label>
                    <input type="password" className="form-control" name="password"/>

                    <button style={{'float': "right"}} className="btn btn-primary btn-block mt-3">Login</button>
                </form>
            </div>

        </div>
    );
}

export default Login;