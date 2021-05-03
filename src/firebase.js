// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2I1_5H4y4urZfUsSrE27ZFkwMTcVrPKA",
  authDomain: "clone-99968.firebaseapp.com",
  projectId: "clone-99968",
  storageBucket: "clone-99968.appspot.com",
  messagingSenderId: "123244212408",
  appId: "1:123244212408:web:3422f0ca5acda812d6444d",
  measurementId: "G-ZQMNHC6Z18",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
