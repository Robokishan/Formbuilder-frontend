/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// reactstrap components
import { Col, Container, Row } from 'reactstrap';
// core components

import routes from '../routes';

class Auth extends React.Component {
  componentDidMount() {
    document.body.classList.add('bg-danger');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-danger');
  }

  getRoutes = (routeList) => routeList.map((prop, key) => {
    if (prop.layout === '/auth') {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    }
    return null;
  });

  render() {
    return (
      <>
        <div className="main-content">
          <div className="header bg-gradient-dark py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Login</h1>
                    {/* <p className="text-lead text-light">
                      Use these awesome forms to login or create new account in
                      your project for free.
                    </p> */}
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-danger"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="*" to="/auth/login" />
              </Switch>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Auth;
