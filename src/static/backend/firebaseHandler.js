import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4WfUyGifT91_ip4SLrdngkdbpckWMXdc",
    authDomain: "fullstack-bnmit.firebaseapp.com",
    databaseURL: "https://fullstack-bnmit-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fullstack-bnmit",
    storageBucket: "fullstack-bnmit.appspot.com",
    messagingSenderId: "899372004020",
    appId: "1:899372004020:web:ea2342d1b3683dc29e9de1",
    measurementId: "G-TC35B4BJSF"
  };


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const firebaseDatabase=getDatabase(app);