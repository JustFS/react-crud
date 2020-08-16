import React, { useEffect, useState } from "react";
import firebase from "../utils/firebaseConfig";
import UpdateDelete from "./UpdateDelete";

const Read = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    const quotesDB = firebase.database().ref("quotesDB");

    quotesDB.on("value", (snapshot) => {
      console.log(snapshot.val());
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
      setQuoteList(list);
    });
  }, []);

  return (
    <div className="read">
      <ul>
        {quoteList &&
          quoteList.map((item, index) => (
            <UpdateDelete item={item} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Read;
