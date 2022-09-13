import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2UGp0nT-twxEtvUiWtYJcX5zn7YErsQU",
  authDomain: "fir-4a4f5.firebaseapp.com",
  projectId: "fir-4a4f5",
  storageBucket: "fir-4a4f5.appspot.com",
  messagingSenderId: "1017395335684",
  appId: "1:1017395335684:web:459ee5b2a8deacb63e1b51",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const EmailProvider = new firebase.auth.EmailAuthProvider();
export { db, auth, Googleprovider, EmailProvider };
