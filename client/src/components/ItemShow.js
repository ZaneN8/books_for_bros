import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

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

  const handleButton = (id) => {
    sessionStorage.cart = id;
    console.log(id);
  };

  console.log(sessionStorage.cart);

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
          <button onClick={() => handleButton(t.id)}>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { items: state.items };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => {
//       dispatch(addToCart(id));
//     },
//   };
// };

// export default ItemShow;
// export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
export default ItemShow;

// :price, :rating, :name, :description, :image
