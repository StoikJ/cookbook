
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqjPUkvURNTKBGiOqsPsydsS7jvKSIhB8",
  authDomain: "cook-book-8f596.firebaseapp.com",
  projectId: "cook-book-8f596",
  storageBucket: "cook-book-8f596.appspot.com",
  messagingSenderId: "303667610940",
  appId: "1:303667610940:web:af89c7f1963cc0079e0a39",
  measurementId: "G-3EQV4YMSKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}