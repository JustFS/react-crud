import React, { useEffect, useState } from 'react';
import firebase from "../utils/firebaseConfig";
import UpdateDelete from './UpdateDelete';

const Read = () => {
  const [quoteList, setQuoteList] = useState([]);

  // remplace component didupdate
  useEffect(() => {
    const quotesDB = firebase.database().ref('quotesDB');

    // snapshot callback function
    quotesDB.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let list = [];
      let previousList = snapshot.val();
      for (let id in previousList){
        list.push({id, ...previousList[id]});
      }
      setQuoteList(list);
    })
  }, [])

  return (
    <div>
      <h2>Liste</h2>
      <ul>
      {
        quoteList ? quoteList.map((item, index) =>
          <UpdateDelete item={item} key={index} />
          ) : ''
      }
      </ul>
    </div>
  );
};

export default Read;