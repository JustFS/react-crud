import React, { useState, useContext } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from "./UidContext";

const Create = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const uid = useContext(UidContext);

  const create = () => {
    const quotesDB = firebase.database().ref('quotesDB');
    const quote = {
      uid,
      author, 
      text,
    }

    quotesDB.push(quote);
    
    setAuthor('');
    setText('');
  }

  return (
    <div>
      <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />
      <textarea type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={create}>Add</button>
    </div>
  );
};

export default Create;