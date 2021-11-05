/*eslint no-unused-vars: "off"*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Protectedroute from "./utils/Auth/Protected";
import "./assets/plugins/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import "leaflet/dist/leaflet.css";
import { store } from "./store";
import { Provider } from "react-redux";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import "./style.css";
import "react-form-builder2/dist/app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Public from "./layouts/Public";
import Registration from "./views/v1/Registration";

if (process.env.NODE_ENV !== "development")
  console.log = console.warn = console.error = () => {};
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <ToastContainer hideProgressBar={true} />
        <Protectedroute path="/admin" component={AdminLayout} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/public" render={(props) => <Public {...props} />} />
        <Route path="/" exact render={(props) => <Registration {...props} />} />
        {/* <Redirect exact path="/"  to="/admin/forms" /> */}
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
