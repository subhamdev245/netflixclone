// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCejdGXZvjAmeJ-bHgzSnKDZDIa-yoydQk",
  authDomain: "netflic-gpt-feac9.firebaseapp.com",
  projectId: "netflic-gpt-feac9",
  storageBucket: "netflic-gpt-feac9.appspot.com",
  messagingSenderId: "264245439945",
  appId: "1:264245439945:web:9cc6766926f62418640c18",
  measurementId: "G-WZHVRFZ7XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()