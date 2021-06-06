// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBofyuBDuqXM1ZcOhQa7yDEuI4ep4xHQo0",
    authDomain: "twitter-clone-6e5d3.firebaseapp.com",
    projectId: "twitter-clone-6e5d3",
    storageBucket: "twitter-clone-6e5d3.appspot.com",
    messagingSenderId: "556125183659",
    appId: "1:556125183659:web:91b23612774a153f3c61ee",
    measurementId: "G-XSF0LFDQQY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;