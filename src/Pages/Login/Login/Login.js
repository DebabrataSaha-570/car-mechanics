import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../Context/UseAuth';

const Login = () => {
    const { users, googleSignIn } = UseAuth()
    // const location = useLocation()
    // const history = useHistory()
    // const redirectUri = location.state?.from || '/'
    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then((result) => {
    //             history.push(redirectUri)
    //         })
    // }
    return (
        <div>
            <h3>Please login </h3>
            {/* <button onClick={handleGoogleSignIn} className="btn btn-warning">Google SignIn </button> */}
            <button onClick={googleSignIn} className="btn btn-warning">Google SignIn </button>
        </div>
    );
};

export default Login;