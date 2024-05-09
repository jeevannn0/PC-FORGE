// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYy6PRks4CyB0gPVeeUjMEp9eNTn-uFvw",
  authDomain: "pcforge-2354f.firebaseapp.com",
  projectId: "pcforge-2354f",
  storageBucket: "pcforge-2354f.appspot.com",
  messagingSenderId: "133734092140",
  appId: "1:133734092140:web:54733ec4a040a7b5a0f749"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}

