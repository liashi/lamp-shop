import React from 'react';

import '../style.css';


const Login = () => (
    <div className="main">
        <h1>Create an account</h1>
        <div className="main__container-border">
            <div className="main__container">
                <div>
                    <div>
                        <h3>Email</h3>
                    </div>
                    <input type="email"/>
                    <div>
                        <h3>Password</h3>
                        <input type="password"/>
                    </div>
                </div>
                <div className="btn__container">
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    </div>
);

export default Login;