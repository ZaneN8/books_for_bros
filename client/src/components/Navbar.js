import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// For Basic setup only please change
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const correctNavBar = () => {
    if (user) {
      return (
        <Nav variant="tabs">
          <Link onClick={() => handleLogout(history)}>Logout</Link>
          <span style={{ color: "aqua" }}></span>
        </Nav>
      );
    } else {
      return (
        <Nav variant="tabs">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      );
    }
  };

  return (
    <Nav variant="pills">
      <Nav.Item>{correctNavBar()}</Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/itemShow">Browse Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cart">Reducer Cart</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/checkOut">Checkout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
