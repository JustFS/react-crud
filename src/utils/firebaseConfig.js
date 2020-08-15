import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVPb5Wkan3Ma6shPRxV89ilDB7wrlN0yE",
  // auth
  authDomain: "react-auth-4f668.firebaseapp.com",
  databaseURL: "https://react-auth-4f668.firebaseio.com",
  projectId: "react-auth-4f668",
  storageBucket: "react-auth-4f668.appspot.com",
  messagingSenderId: "133314651046",
  appId: "1:133314651046:web:353807c7bd784eb7346567",
  measurementId: "G-EHS1EER2GK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;