import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlLEUkYJe1Tzahico2Ua7Yb8YQ89YZlcs",
  authDomain: "bullshit-3f24f.firebaseapp.com",
  databaseURL: "https://bullshit-3f24f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bullshit-3f24f",
  storageBucket: "bullshit-3f24f.appspot.com",
  messagingSenderId: "1047412856059",
  appId: "1:1047412856059:web:bd63625871a34724668c5e",
  measurementId: "G-VY4SCRLFT4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
