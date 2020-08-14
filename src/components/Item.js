import React, { useState } from "react";
import firebase from "../utils/firebaseConfig";

const Item = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState();
  const [textUpdate, setTextUpdate] = useState();

  const updateItem = () => {
    // pointer id de l'élement à update
    let todoRef = firebase.database().ref("Todo").child(item.id);
    // authoriser l'update en passant sur true
    todoRef.update({
      title: titleUpdate,
      text: textUpdate,
    });

    // repasse update sur false
    setUpdate(false);
  };

  const deleteItem = () => {
    // pointer id de l'élement à delete
    let todoRef = firebase.database().ref("Todo").child(item.id);
    todoRef.remove();
  };

  return (
    <div>
      {update === false && 
        <div className="item-container">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <button onClick={() => setUpdate(!update)}>Update</button>
        </div>
      }

      {update && 
        <div className="item-container-update">
          <input type="text" defaultValue={item.title} onChange={(e) => setTitleUpdate(e.target.value)} />
          <textarea defaultValue={item.text} onChange={(e) => setTextUpdate(e.target.value)} />
          <button onClick={updateItem}>Validate update</button>
        </div>
      }

      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default Item;
