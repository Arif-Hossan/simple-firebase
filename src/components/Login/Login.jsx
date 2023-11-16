// eslint-disable-next-line no-unused-vars
import React from 'react';
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth =getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        console.log('Google Sign In');
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>GoogleLogin</button>
        </div>
    );
};

export default Login;