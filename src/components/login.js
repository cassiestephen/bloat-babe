import React from "react";
// for signing in with google
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithGoogle } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import bloatBabeWhite from "./BloatBabe.png";


// setIsAuth is passed in from home screen
function Login( { setIsAuth } ) {

    let navigate = useNavigate();

    // sign in function
    const signInWithGoogle = () => {
        // result has info about user that just logged in
        // 
        signInWithPopup(auth, provider).then((result) => {
            // so we have an identifier if logged in or not in login.js page
            localStorage.setItem("isAuth", true);
            setIsAuth(true); // since logged in, we can set it to true
            navigate("/home");
        });
    };

    return (
    <div>
    <img className="login-logo-pic" src={bloatBabeWhite} />
    <div className="login-page" >
        <div className="right-side-login-page">
        
            <h1 className="login-header">
                Share your creations:
            </h1>
            <text className="login-subheader">
                sign in to post recipies and help others navigate a gut-friendly lifestyle
            </text>
        </div>
        <button className="login-with-google-btn"  onClick={signInWithGoogle}>
            Sign in With Google
        </button>
    </div>
    </div>
    )
}

export default Login;