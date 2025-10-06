import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const Logout = () => {
  const auth = getAuth(app);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign out successful")
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      });
  };
  return (
    <div>
      <div>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white px-4 py-2"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Logout;
