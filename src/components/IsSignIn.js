import React from "react";
import firebase from "../utils/firebaseConfig";
import Form from "./Form";
import TodoList from "./TodoList";

const IsSignIn = () => {
  return (
    <span>
      <div>Signed In!</div>
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

      <Form />
      <TodoList />
    </span>
  );
};

export default IsSignIn;
