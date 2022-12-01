// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAkqguf7HjYs6UcWrSJe7YifM3iAoQv_w",
  authDomain: "video-bcfe2.firebaseapp.com",
  projectId: "video-bcfe2",
  storageBucket: "video-bcfe2.appspot.com",
  messagingSenderId: "587668116901",
  appId: "1:587668116901:web:c4705e9f030364aa09844c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;