import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthState = () => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;
        console.log(currentUser.email);
        setUser(currentUser)
        // ...
      } else {
        console.log("Sorry");
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <div>
      {user ? <p>Welcome: {user?.email}</p> : <p>Please Login</p>}
      {/* <h1>AuthState</h1> */}
    </div>
  );
};

export default AuthState;
