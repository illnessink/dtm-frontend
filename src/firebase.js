// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeD8KZjac_qx7BHKIn9v7SP5AdaHMtTuE",
  authDomain: "down-to-match.firebaseapp.com",
  projectId: "down-to-match",
  storageBucket: "down-to-match.appspot.com",
  messagingSenderId: "643187186225",
  appId: "1:643187186225:web:a79ddff77397699bd09310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Config the provider
const provider = new GoogleAuthProvider();

// Create a reference to our firebase authentication instance
const auth = getAuth(app);

//Config login and logout workflows
function login(){
    return signInWithPopup(auth, provider);
}

function logout(){
    return signOut(auth);
}

// Export functionality so we can access it inside of
export { login, logout, auth };