import React, { useContext } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import MyCart from './MyCart';

export const CheckOut = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const CheckOutForm = () => {
    if (user) {
      return <div>{normalForm()}</div>;
    } else {
      return (
        <>
          <Form.Group controlId="guestInfo">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="textarea" placeholder="First name" />
            <br />
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="textarea" placeholder="Last name" />
            <br />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <br />
          </Form.Group>
          <div>{normalForm()}</div>
        </>
      );
    }
  };

  const normalForm = () => {
    return (
      <Form>
        <Form.Group controlId="shippingAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="textarea" placeholder="Street Address" />
          <br />
          <Form.Label>Apt/Suite (optional)</Form.Label>
          <Form.Control type="textarea" placeholder="Apt/Suite" />
          <br />
          <Form.Label>City</Form.Label>
          <Form.Control type="textarea" placeholder="City" />
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control type="textarea" placeholder="State" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="textarea" placeholder="Zip Code" />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="textarea" placeholder="Phone Number" />
        </Form.Group>
      </Form>
    );
  };

  const paymentForm = () => {
    return (
      <Form>
        <Form.Group controlId="paymentInfo">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="textarea" placeholder="Card Number" />
          <br />
          <Form.Label>Name on Card</Form.Label>
          <Form.Control type="textarea" placeholder="Name" />
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Expiration Month</Form.Label>
              <Form.Control type="textarea" placeholder="Month" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Expiration Year</Form.Label>
              <Form.Control type="textarea" placeholder="Year" />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Label>Security Code</Form.Label>
          <Form.Control type="textarea" placeholder="Security Code" />
        </Form.Group>
      </Form>
    );
  };

  return (
    <div>
      <div>{CheckOutForm()}</div>
      <div>{paymentForm()}</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CheckOut;
