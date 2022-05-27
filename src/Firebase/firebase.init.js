import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAuboMdpmjTpm5_uoZOsRuizzHzy4itOTY",
    authDomain: "password-to-login.firebaseapp.com",
    projectId: "password-to-login",
    storageBucket: "password-to-login.appspot.com",
    messagingSenderId: "579954202031",
    appId: "1:579954202031:web:155095b0affe119e750b5a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;