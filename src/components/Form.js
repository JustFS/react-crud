import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';

const Form = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');


  const create = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title, 
      text,
    }

    todoRef.push(todo);
    setTitle('');
    setText('');
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <textarea type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={create}>Add</button>
    </div>
  );
};

export default Form;