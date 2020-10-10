import React from "react";
import { Route, Switch } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ItemShow from "./components/ItemShow";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import SamplesDemo from "./samples/SamplesDemo";
import MyCart from "./components/MyCart";

function App() {
  return (
    <>
      <NavBar />
      <>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/samplesDemo" component={SamplesDemo} />
            <Route exact path="/itemShow" component={ItemShow} />
            <Route exact path="/myCart" component={MyCart} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </>
    </>
  );
}

export default App;
