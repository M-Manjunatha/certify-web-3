/*
import firebase from "firebase";
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
var fire = firebase.initializeApp(config);
export default fire;
*/
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import { database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCE3mvhPM2MyAdRQOJR-8kUpxTJjLy7QkA",
  authDomain: "certify-ease.firebaseapp.com",
  projectId: "certify-ease",
  storageBucket: "certify-ease.appspot.com",
  messagingSenderId: "268153182746",
  appId: "1:268153182746:web:a4a4e563e8afdefffd4fa3",
  databaseURL: "https://certify-ease-default-rtdb.firebaseio.com/",
  // apiKey: "",
  // authDomain: "",
  // databaseURL: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: ""
};

const app = initializeApp(firebaseConfig);
// const db = firebase.database();
export default app;
