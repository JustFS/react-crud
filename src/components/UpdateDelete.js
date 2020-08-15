import React, { useState, useContext, useEffect } from "react";
import firebase from "../utils/firebaseConfig";
import { UidContext } from "./UidContext";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);

  const uid = useContext(UidContext);

  useEffect(() => {
    if (item.uid === uid) {
      setIsAuthor(true);
    } 
  }, [item.uid, uid])

  const updateItem = () => {
    // pointer id de l'élement à update
    let quote = firebase.database().ref("quotesDB").child(item.id);

    // make sure there's no undifined
    if (authorUpdate !== null) {
      quote.update({
        author: authorUpdate
      });
    }
    if (textUpdate !== null) {
      quote.update({
        text: textUpdate
      });
    }
    // repasse update sur false
    setUpdate(false);
  };

  const deleteItem = () => {
    // pointer id de l'élement à delete
    let quote = firebase.database().ref("quotesDB").child(item.id);

    quote.remove()
  };

  return (
    <div>
      {update === false && 
        <div className="item-container">
          <h3>{item.author}</h3>
          <p>{item.text}</p>

          {
            isAuthor &&
              <button onClick={() => setUpdate(!update)}>Update</button>
          }
        </div>
      }

      {update && 
        <div className="item-container-update">
          <input type="text" defaultValue={item.author} onChange={(e) => setAuthorUpdate(e.target.value)} />
          <textarea defaultValue={item.text} onChange={(e) => setTextUpdate(e.target.value)} />
          <button onClick={updateItem}>Validate update</button>
        </div>
      }

      {
        isAuthor && 
          <button onClick={deleteItem}>Delete</button>
      }
    </div>
  );
};

export default UpdateDelete;