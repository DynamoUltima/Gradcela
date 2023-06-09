// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3SDBuOA2YYvTEATUYhOuNcF1RpFnOJwM",
  authDomain: "expeed-admin.firebaseapp.com",
  projectId: "expeed-admin",
  storageBucket: "expeed-admin.appspot.com",
  messagingSenderId: "30315655269",
  appId: "1:30315655269:web:cb43501edcaeb80fc2568c",
  measurementId: "G-NPKY6PVHZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)