// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    // console.log(app);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
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
    const handleGithubSignIn = () => {
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedInUser = result.user;
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            {/*  user ? logOut : signIn  */}
            {/* toggle logOut and SignIn option */}
            {user ?
                <button onClick={handleSignOut}>Sing Out</button> :
               <>
                <button onClick={handleGoogleSignIn}>Google Login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>
               </>
            }
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