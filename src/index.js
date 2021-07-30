/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Protectedroute from "./utils/Auth/Protected";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "leaflet/dist/leaflet.css";
import { store } from "./store";
import { Provider } from "react-redux";
import AdminLayout from "layouts/Admin";
import AuthLayout from "layouts/Auth";
import "./style.css";
if (process.env.NODE_ENV !== "development")
  console.log = console.warn = console.error = () => {};
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <Protectedroute path="/admin" component={AdminLayout} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        {/*TODO: Ennable this if portfolio not enabled*/}
        <Redirect from="/" to="/admin/forms" />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
