import React from 'react'
import { Button } from "@mui/material"
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  )
}

export default SignIn