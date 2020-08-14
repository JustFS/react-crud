import React, { useEffect, useState } from 'react';
import firebase from "../utils/firebaseConfig";
import Item from './Item';

const TodoList = () => {
  const [todoListItem, setTodoListItem] = useState(['']);

  // remplace component didupdate (READ)
  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');

    // snapshot callback function
    todoRef.on('value', (snapshot) => {
      // vérifier si data fetched
      console.log(snapshot.val());

      let todoList = [];
      const todos = snapshot.val();
      for (let id in todos){
        todoList.push({id, ...todos[id]});
      }
      setTodoListItem(todoList);
    })
  }, [])

  return (
    <div>
      <h2>Liste</h2>
      <ul>
      {
        todoListItem ? todoListItem.map((item, index) =>
          <Item item={item} key={index} />
          ) : ''
      }
      </ul>
    </div>
  );
};

export default TodoList;