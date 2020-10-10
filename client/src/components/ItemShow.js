import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { Button, Card, CardGroup } from "react-bootstrap";

const ItemShow = () => {
  const [items, setItems] = useState([]);
  // const productList = useContext(ProductContext).products;

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
    addToCart(id);
    sessionStorage.cart = id;
  };

  const renderBooks = () => {
    return items.map((t) => (
      <CardGroup style={{ display: "flex", flexDirection: "row" }}>
        <Card key={t.id} style={{ flex: 1 }}>
          <Card.Body>
            <Card.Img style={{ width: "3rem" }} src={t.image} />
            <Card.Title>{t.name}</Card.Title>
            <Card.Subtitle>${t.price}</Card.Subtitle>
            <Card.Subtitle>Stars: {t.rating}</Card.Subtitle>
            <Card.Text>{t.description}</Card.Text>
            <Button onClick={() => handleButton(t.id)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    ));
  };

  // Card key={t.id} styled={{ width: "18rem" }}>

  // <Card.Img src={t.image} />
  // <Card.Title>{t.name}</Card.Title>
  // <Card.Subtitle>${t.price}</Card.Subtitle>
  // <Card.Subtitle>Stars: {t.rating}</Card.Subtitle>
  // <p>Summary: {t.description}</p>
  // <Button onClick={() => handleButton(t.id)}>Add to Cart</Button>

  return (
    <>
      <h1>New Releases!</h1>
      <div>{renderBooks()}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
