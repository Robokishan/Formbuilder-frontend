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
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
// core components
import "react-notification-alert/dist/animate.css";
import NotificationAlert from "react-notification-alert";
import { ReactPassStrength } from "react-pass-strength";
import { GeneratePassword, GenerateUUID } from "../../utils/api/admin";

import { getToken } from "../../utils/storage/storage.js";
import axios from "axios";

class Utils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      hashPassword: "",
      newUUID: "",
      passStrength: 0,
    };

    this.notificationref = React.createRef();
  }

  // onPasswordChange = async(e) =>{
  //     e.preventDefault();
  //     const { value, name } = e.target
  //     var password = this.state.pass;
  //     password[name] = value
  //     this.setState({ pass : password})
  // }
  handlePassStrengthChange = (strength) => {
    this.setState({
      passStrength: strength,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onPasswordSubmit = async (e) => {
    e.preventDefault();
    const password = this.state.password;
    try {
      const response = await GeneratePassword(password);
      this.setState({
        hashPassword: response?.hash,
      });
      if (response?.message) {
        this.showNotification("tr", 2, response.message);
      } else if (Object.keys(response).length > 0)
        this.showNotification("tr", 2, response[Object.keys(response)[0]]);
      else this.showNotification("tr", 2, response);
    } catch (e) {
      if (e.response?.data?.error)
        this.showNotification("tr", 3, e.response.data.error);
      else this.showNotification("tr", 3, e.toString());
    }
  };

  onUUIDSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await GenerateUUID();
      this.setState({
        newuuid: response?.uuid,
      });
      if (response?.message) {
        this.showNotification("tr", 2, response.message);
      } else if (Object.keys(response).length > 0)
        this.showNotification("tr", 2, response[Object.keys(response)[0]]);
      else this.showNotification("tr", 2, response);
    } catch (e) {
      if (e.response?.data?.error)
        this.showNotification("tr", 3, e.response.data.error);
      else this.showNotification("tr", 3, e.toString());
    }
  };

  buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);
    // form.setAttribute('target', target)

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", this.stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  post(details) {
    const form = this.buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  isObj(val) {
    return typeof val === "object";
  }

  stringifyValue(val) {
    if (this.isObj(val) && !this.isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  onPayment = async (e) => {
    e.preventDefault();
    try {
      var amount = "100.00";
      var phone_number = "+917777777777";
      var email = "kishan@gmail.com";
      var orderId = "ORDER_ID" + new Date().getTime();
      let params = {
        orderId: orderId,
        email: email,
        amount: amount,
        phone_number: phone_number,
      };
      var url = "http://localhost:5000/api/v1/public/payment";
      var request = {
        url: url,
        params: params,
        method: "get",
      };
      const response = await axios(request);

      const processParams = await response.data;
      var details = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: processParams,
      };

      this.post(details);
    } catch (error) {}
  };

  componentDidMount() {
    // getUser
  }

  showNotification = (place, color, message) => {
    // var color = Math.floor(Math.random() * 5 + 1);
    var type;
    var discription;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        discription = (
          <div>
            <strong>Generated!</strong> {message}
          </div>
        );
        break;
      case 3:
        type = "danger";
        discription = (
          <div>
            <strong>Error !</strong> {message}
          </div>
        );
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: <div>{discription}</div>,
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    this.notificationref.current.notificationAlert(options);
  };

  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <div className="react-notification-alert-container">
            <NotificationAlert ref={this.notificationref} />
          </div>
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Utility</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form role="form" onSubmit={this.onPasswordSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      Password Generate
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-password"
                            >
                              Password
                            </label>
                            <Input
                              onChange={this.onPasswordChange}
                              className="form-control-alternative"
                              id="input-password"
                              placeholder="Password"
                              type="text"
                              name="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Hash
                            </label>
                            <Input
                              disabled
                              value={
                                this.state.hashPassword
                                  ? this.state.hashPassword
                                  : ""
                              }
                              className="form-control-alternative"
                              id="input-hash-password"
                              placeholder="Hash Password"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <ReactPassStrength
                        passwordToCheck={this.state.password}
                        onStrengthChanged={this.handlePassStrengthChange}
                      />
                      <Col className="text-center">
                        <Button color="info" size="lg" type="submit">
                          Generate Password
                        </Button>
                      </Col>
                    </div>
                  </Form>

                  <hr className="my-4" />
                  <Form onSubmit={this.onUUIDSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      Generate UUID
                    </h6>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          disabled
                          name="uuid"
                          value={this.state.newuuid ? this.state.newuuid : null}
                          placeholder="UUID"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <Col className="text-center">
                      <Button color="info" size="lg" type="submit">
                        Generate UUID
                      </Button>
                    </Col>
                  </Form>
                  <hr className="my-4" />
                  <Form onSubmit={this.onPayment}>
                    <Col className="text-center">
                      <Button color="primary" size="lg" type="submit">
                        100/- Rs Pay Now
                      </Button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Utils;
