import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { IconName } from "react--icons/bs";

class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.image} className="" />
            </div>
            <div className="item-desc">
              <span className="title">{item.name}</span>
              <p>{item.description}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>{/* <b>Quantity: {item.quantity}</b> */}</p>
              <div className="add-remove">
                <Link to="/cart">
                  <i> Add - remove </i>
                </Link>
                <Link to="/cart">
                  <i>arrow drop down</i>
                </Link>
              </div>
              <button>Remove</button>
            </div>
          </li>
        );
      })
    ) : (
      <p>You get Nothing!</p>
    );
    return (
      <div className="container">
        <div>
          <h5>You have ordered:</h5>
          <ul>{addedItems}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};
export default connect(mapStateToProps)(Cart);
