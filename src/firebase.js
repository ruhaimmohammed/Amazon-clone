import firebase from "firebase";
l
const firebaseConfig = {
    apiKey: "AIzaSyACByTm2Mv_A0rMnDfVL8VOp-Zdv5HEiVs",
    authDomain: "clone-3421f.firebaseapp.com",
    projectId: "clone-3421f",
    storageBucket: "clone-3421f.appspot.com",
    messagingSenderId: "751442598341",
    appId: "1:751442598341:web:cde8fda77da3c2abe993ac",
    measurementId: "G-66J1NH76J6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  c