import React from 'react';
import UseAuth from '../../../Context/UseAuth';

const Login = () => {
    const { users, googleSignIn } = UseAuth()
    return (
        <div>
            <h3>Please login </h3>
            <button onClick={googleSignIn} className="btn btn-warning">Google SignIn </button>
        </div>
    );
};

export default Login;