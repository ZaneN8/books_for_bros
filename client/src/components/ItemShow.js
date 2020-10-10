import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemShow = () => {
  const [items, setItems] = useState([]);

  const getItem = async () => {
    try {
      let res = await axios.get(`/api/items/`);
      setItems(res.data);
    } catch (err) {
      console.log(err.response);
      alert("error");
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <h1>ITEMS PAGE</h1>
      {items.map((t) => (
        <div key={t.id}>
          <img src={t.image} />
          <h4>{t.name}</h4>
          <div>${t.price}</div>
          <div>Stars: {t.rating}</div>
          <p>Summary: {t.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemShow;

// :price, :rating, :name, :description, :image
