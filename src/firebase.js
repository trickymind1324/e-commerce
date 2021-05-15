// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAA_R8ZjJ5cTbodEqxqiJby5efjcFS56MA",
    authDomain: "v-shopping-f5df1.firebaseapp.com",
    projectId: "v-shopping-f5df1",
    storageBucket: "v-shopping-f5df1.appspot.com",
    messagingSenderId: "854265587619",
    appId: "1:854265587619:web:c6a3d6b7e07c860c239c16",
    measurementId: "G-RBRHVEMTEY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};