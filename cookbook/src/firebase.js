
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


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

const googleLogin = (e) => {
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      //window.location.href = "/";
      console.log("I am logged with Google");
    }).catch((error) => {
      console.log(error.message);
    })
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {

  signOut(auth);

};
export {
  firebaseConfig,
  auth,
  db,
  googleLogin,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);