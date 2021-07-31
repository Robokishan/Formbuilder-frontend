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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {Col, Nav, NavItem, NavLink, Row} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className=" bg-xoxodark footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div style={{color: 'white'}} className="copyright text-center text-xl-left">
              © 2018{" "}
              <a
                  style={{color: 'white'}}
                className="font-weight-bold ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Form Builder
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Row className=" align-items-center justify-content-xl-between" >
              <Col className="col-xs-1" >{}</Col>
              <Col className="col-xs-6 col-sm-auto " >
            <div style={{color: 'white'}} className="copyright ">
              Form Builder team
            </div>
              </Col>
              <Col className={" col-xs-5 col-sm-auto"} >
            <div style={{color: 'white'}} className="copyright ">
              MIT License
            </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
