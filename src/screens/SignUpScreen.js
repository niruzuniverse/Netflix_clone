import React,{ useRef } from 'react'
import "./SignUpScreen.css";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



function SignUpScreen() {
    const emailRef = useRef();
    const passwordRef = useRef();
   
    
    const register = (e) => {
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth,
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        
        .catch(error => {
          alert(error.message);
        });
      };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    
    .catch((error => alert(error.message)
    ));
  }
  return (
    <div className="signUpScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password"type="password" />
            <button type="submit" onClick={signIn}>Sign In</button>
            
            <h4>
              <span className="signUpScreen_gray"> New to Netflix? </span>
              <span className="signUpScreen_link" onClick={register}> Sign Up now. </span>
              
              </h4>
        </form>
    </div>
  )
}

export default SignUpScreen