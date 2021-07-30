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
// reactstrap components
import {Card, CardBody, CardTitle, Col, Container, Row} from "reactstrap";
import {getOverview} from "../../utils/api/assets.js"
import {eraseAllvalues} from "../../utils/storage/storage.js"
import { useDispatch, useSelector } from 'react-redux';

export default function Header(props) {

  const formCount = useSelector((store) => store.forms.formCount);

  const logout = () => {
    eraseAllvalues();
    props.history.push('/');
  }

  return (
    <>
        <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8 opacity-8" >
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0">
                            Total Forms
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {formCount}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          {/* <i className="fa fa-arrow-up" /> {' '} */}
                        </span>{" "}
                        {/* <span className="text-nowrap">Since last month</span> */}
                        <span className="text-nowrap">{' '}</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
  )
}