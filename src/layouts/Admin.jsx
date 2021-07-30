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
import { Redirect, Route, Switch } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";

import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import { fetchDetail } from "../utils/api/owner";
import { saveUserDetails } from "../utils/storage/storage";
import Header from "../components/Headers/Header";

// reactstrap components

class Admin extends React.Component {
  async componentDidMount() {
    try {
      const owner = await fetchDetail();
      saveUserDetails(owner);
    } catch (e) {}
  }

  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        var path = prop.layout + prop.path;
        // if(prop.arg) path+=prop.arg;
        return <Route path={path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    var sideBarList = [];
    routes.map((route) => {
      if (route.show == true) {
        sideBarList.push(route);
      }
    });

    return (
      <>
        <Sidebar
          {...this.props}
          routes={sideBarList}
          logo={{
            innerLink: "/admin/forms",
            imgSrc: require("assets/img/brand/quadx.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Header />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/forms" />
          </Switch>

          {/*creativ tiv author footer*/}
          {/*<Container fluid>*/}
          {/*  <AdminFooter />*/}
          {/*</Container>*/}
        </div>
      </>
    );
  }
}

export default Admin;
