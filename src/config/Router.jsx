import { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Chat from "../pages/Chat";
import { auth, db, getDoc, doc,onAuthStateChanged } from "./Firebase";

export default function Router() {
  const [user,setUser] = useState(false);
  useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUser(true)
                }
            } else {
                setUser(false)
            }

        })
    }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ?<Chat/>: <Signup />} />
        <Route path="/login" element={user ? <Chat/>: <Login />} />
        <Route path="/chat" element={user ? <Chat />: <Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
