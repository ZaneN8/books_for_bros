import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [ten, setTen] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        setItems(res.data);
        getRandomSample(res.data);
      })

      .catch(console.log);
  }, []);

  const getRandomSample = (array) => {
    let randomTen = [];
    for (let i = 0; i < 10; i++) {
      randomTen.push(array[Math.floor(Math.random() * array.length)]);
    }
    setTen(randomTen);
  };

  const renderItems = () => {
    return ten.map((p) => (
      <>
        <div key={p.id}>
          <img src={p.image} />
          <h4>{p.name}</h4>
          <div>${p.price}</div>
          <div>Stars: {p.rating}</div>
          <p>Summary: {p.description}</p>
        </div>
      </>
    ));
  };

  return (
    <div>
      <h1>Welcome to Books For Bros dot Com</h1>
      <h3>Books for only the manliest men!</h3>
      <div>{renderItems()}</div>
    </div>
  );
};

export default Home;
