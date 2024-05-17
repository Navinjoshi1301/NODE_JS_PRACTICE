// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-If_aLcmaHSQBkeYMBYKrOlLbZHoVqqM",
  authDomain: "test-ec604.firebaseapp.com",
  projectId: "test-ec604",
  storageBucket: "test-ec604.appspot.com",
  messagingSenderId: "506425622152",
  appId: "1:506425622152:web:3a2841f60d43ad896d293d",
  measurementId: "G-2W0KS856HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);
export default firebase;