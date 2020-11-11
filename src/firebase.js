import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnf-rYKv9HfP1ydsdhBenYZ-xwfYo9ryk",
    authDomain: "nwitter-84731.firebaseapp.com",
    databaseURL: "https://nwitter-84731.firebaseio.com",
    projectId: "nwitter-84731",
    storageBucket: "nwitter-84731.appspot.com",
    messagingSenderId: "1079243392272",
    appId: "1:1079243392272:web:2bd21fdf728b71a2c11195"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);