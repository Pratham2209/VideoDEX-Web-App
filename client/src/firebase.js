// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUF3sFAfRpZYqjCcdV0721eoRDz8zpPRY",
  authDomain: "video-9a964.firebaseapp.com",
  projectId: "video-9a964",
  storageBucket: "video-9a964.appspot.com",
  messagingSenderId: "655321663111",
  appId: "1:655321663111:web:1d5458cebc357fc8371a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider= new GoogleAuthProvider()

export default app;

