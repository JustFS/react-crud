import React, { useState, useContext } from "react";
import firebase from "../utils/firebaseConfig";
import { UidContext } from "./UidContext";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);

  const uid = useContext(UidContext);

  const authorCheck = () => {
    if (item.uid === uid) {
      return true;
    } else {
      return false;
    }
  };
  authorCheck();

  const updateItem = () => {
    // pointer id de l'élement à update
    let quote = firebase.database().ref("quotesDB").child(item.id);

    // make sure there's no undifined
    if (authorUpdate !== null) {
      quote.update({
        author: authorUpdate,
      });
    }
    if (textUpdate !== null) {
      quote.update({
        text: textUpdate,
      });
    }
    // repasse update sur false
    setUpdate(false);
  };

  const deleteItem = () => {
    // pointer id de l'élement à delete
    let quote = firebase.database().ref("quotesDB").child(item.id);

    quote.remove();
    authorCheck();
  };

  return (
    <li>
      {update === false && (
        <div className="item-container">
          <p>"{item.text}"</p>
          <h6>{item.author}</h6>

          {authorCheck() && (
            <div className="buttons-container">
              <button onClick={() => setUpdate(!update)}>Update</button>
              <button onClick={deleteItem}>Delete</button>
            </div>
          )}
        </div>
      )}

      {update && (
        <div className="item-container-update">
          <textarea
            defaultValue={item.text}
            onChange={(e) => setTextUpdate(e.target.value)}
          />
          <input
            type="text"
            defaultValue={item.author}
            onChange={(e) => setAuthorUpdate(e.target.value)}
          />
          <button onClick={updateItem}>Validate update</button>
        </div>
      )}
    </li>
  );
};

export default UpdateDelete;
