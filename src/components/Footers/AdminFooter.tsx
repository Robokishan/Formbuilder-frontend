/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// reactstrap components
import {
  Col, Row,
} from 'reactstrap';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className=" bg-xoxodark footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div style={{ color: 'white' }} className="copyright text-center text-xl-left">
              © 2018
              {' '}
              <a
                style={{ color: 'white' }}
                className="font-weight-bold ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Form Builder
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Row className=" align-items-center justify-content-xl-between">
              <Col className="col-xs-1">{}</Col>
              <Col className="col-xs-6 col-sm-auto ">
                <div style={{ color: 'white' }} className="copyright ">
                  Form Builder team
                </div>
              </Col>
              <Col className=" col-xs-5 col-sm-auto">
                <div style={{ color: 'white' }} className="copyright ">
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
