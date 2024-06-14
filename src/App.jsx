import Router from "./config/Router";
import User from "./context/UserContext.jsx";
import { useState, useEffect } from "react";
import {
  db,
  auth,
  doc,
  getDoc,
  onAuthStateChanged,
} from "./config/Firebase.jsx";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    });
  }, []);
  return (
    <User.Provider value={{ user }}>
      <Router />
    </User.Provider>
  );
}
