import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
// Remove this and sematic-ui-react  sematic-ui-css in package.json if you don't want to use
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { initMiddleware } from "devise-axios";

// const store = createStore(cartReducer);

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
