
import { initializeApp } from "firebase/app";

import 
{ getAuth, createUserWithEmailAndPassword, onAuthStateChanged, 
        signOut, signInWithEmailAndPassword
       } from "firebase/auth";
import 
{ getFirestore,
        doc, setDoc,
        getDoc, addDoc,
        collection, query,
        where, getDocs,
        onSnapshot, orderBy, 
        serverTimestamp, 
        updateDoc, 
        arrayUnion 
       } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCy5Sf0OdYnr6mn2mi5EEL_JHybHEpwEbQ",
  authDomain: "chatapp-sumair.firebaseapp.com",
  projectId: "chatapp-sumair",
  storageBucket: "chatapp-sumair.appspot.com",
  messagingSenderId: "423700054410",
  appId: "1:423700054410:web:ff906642195fe34abfc873"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    onAuthStateChanged,
    getDoc,
    signOut,
    signInWithEmailAndPassword,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    onSnapshot,
    orderBy,
    serverTimestamp,
    updateDoc,
    arrayUnion
}



