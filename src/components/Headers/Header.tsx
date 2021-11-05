import React, { useEffect } from "react";
// reactstrap components
import {Card, CardBody, CardTitle, Col, Container, Row} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { getFormsList } from "../../actions/forms";
import { getAnswersList } from "../../actions/formAnswers";
import { RootState } from "../../store";

export default function Header(props) {

  const dispatch = useDispatch();
  const formCount = useSelector((store: RootState) => store.forms.formCount);
  const answersCount = useSelector((store : RootState) => store.answers.answersCount);

  useEffect(() => {
    dispatch(getFormsList());
    dispatch(getAnswersList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0">
                            Total Answers
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {answersCount}
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