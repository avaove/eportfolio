import firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvssom1LLqj-7ZvLqCpXKVpRAL0nH1DrE",
  authDomain: "eportfolio-contact-form.firebaseapp.com",
  databaseURL: "https://eportfolio-contact-form-default-rtdb.firebaseio.com",
  projectId: "eportfolio-contact-form",
  storageBucket: "eportfolio-contact-form.appspot.com",
  messagingSenderId: "435147467873",
  appId: "1:435147467873:web:2fa2273e2b3a7e27930e20"
};

const app = initializeApp(firebaseConfig);

var db = app.firestore();
export { db };

