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

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

const app = initializeApp(firebaseConfig);
export default app;
