import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    /* apiKey: "AIzaSyBEcKf0fLX9XDLMJ9SkkB0IWfCe7kbJEbM",
    authDomain: "genius-car-service-791e7.firebaseapp.com",
    projectId: "genius-car-service-791e7",
    storageBucket: "genius-car-service-791e7.appspot.com",
    messagingSenderId: "299509047282",
    appId: "1:299509047282:web:5d3b41f405d149cbb7556b" */
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
