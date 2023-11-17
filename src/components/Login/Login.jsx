// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    // console.log(app);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }
    return (
        <div>
            {/*  user ? logOut : signIn  */}
            {/* toggle logOut and SignIn option */}
            {user ?
                <button onClick={handleSignOut}>Sing Out</button> :
                <button onClick={handleGoogleSignIn}>GoogleLogin</button>}
            {
                user && <div>
                    <img src={user?.photoURL} alt="" />
                    <h3>User : {user.displayName}</h3>
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.phoneNumber ? user.phoneNumber : "Not Available"}</p>
                </div>
            }
        </div>
    );
};

export default Login;