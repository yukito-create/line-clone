import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBznkXiJBW0MdwiWAIJ6Z9glAbF49n8Tmk",
  authDomain: "line-clone-aa40e.firebaseapp.com",
  projectId: "line-clone-aa40e",
  storageBucket: "line-clone-aa40e.firebasestorage.app",
  messagingSenderId: "1091914853673",
  appId: "1:1091914853673:web:471ecb65ed874c20e69b38"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };