import React from "react";
import firebase from "../utils/firebaseConfig";
import Create from "./Create";
import Read from "./Read";


const Main = () => {
  return (
    <main>
      <div>Signed In</div>
      <div onClick={() => firebase.auth().signOut()}>Sign out</div>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

      <Create />
      <Read />
    </main>
  );
};

export default Main;