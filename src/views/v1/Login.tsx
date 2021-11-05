/*eslint eqeqeq: "off"*/
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { fetchDetail, login } from "../../utils/api/owner";
import storage from "../../utils/storage/storage";
import NotificationAlert from "react-notification-alert";

interface State  {
  email: string;
  password: string;
  Loading: boolean
  error: boolean,
  showPassword: boolean,
  signIn: boolean
}

class Login extends React.Component<{}, State> {
  notificationref: React.RefObject<any>;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Loading: false,
      error: false,
      showPassword: false,
      signIn: true,
    };
    this.notificationref = React.createRef<any>();
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
            <strong>Logged In!</strong> {message}
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

  handleNameChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  changePasswordFieldType(event) {
    this.setState({ showPassword: !this.state.showPassword });
  }
  render() {
    var signInButton ;
    if (this.state.signIn == false) {
      signInButton = (
        <Button disabled className="my-4" color="danger" type="submit">
          Sign in
        </Button>
      );
    } else {
      signInButton = (
        <Button className="my-4" color="danger" type="submit">
          Sign in
        </Button>
      );
    }
    var passwordFieldType =
      this.state.showPassword == false ? "password" : "text";
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <div className="react-notification-alert-container">
              <NotificationAlert ref={this.notificationref} />
            </div>
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div> */}
              <Form role="form" onSubmit={this.onSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      onChange={this.handleNameChange.bind(this)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type={passwordFieldType}
                      autoComplete="password"
                      onChange={this.handlePasswordChange.bind(this)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    onChange={this.changePasswordFieldType.bind(this)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Show Password</span>
                  </label>
                </div>
                <div className="text-center">{signInButton}</div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            {/* <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col> */}
            {/* <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col> */}
          </Row>
        </Col>
      </>
    );
  }

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({ error: true });
    } else if (this.state.password === "") {
      this.setState({ error: true });
    } else {
      this.setState({ signIn: false, Loading: true, error: false });
      let username = this.state.email;
      let password = this.state.password;
      try {
        const response = await login(username, password);
        if (response.token !== null && response.token !== "") {
          if (response?.message) {
            this.showNotification("tr", 2, response.message);
          } else if (Object.keys(response).length > 0)
            this.showNotification("tr", 2, response[Object.keys(response)[0]]);
          else this.showNotification("tr", 2, response);
          response.token = response.token.access_token;
          storage.setToken(response.token);
          storage.saveUser(response);
          storage.saveUserId(response.userId);
          const owner = await fetchDetail();
          storage.saveUserDetails(owner);
          (this.props as any).history.push("/admin/forms");
        }
        this.setState({ signIn: true });
        console.log("Here reached")
      } catch (Error) {
        console.log("Error", Error);
        let e = Error as any
        this.setState({ signIn: true });
        if (e?.response?.data?.error)
          this.showNotification("tr", 3, e?.response?.data?.error);
        else if (e.response && Object.keys(e?.response?.data).length > 0) {
          this.showNotification(
            "tr",
            3,
            e.response.data[Object.keys(e.response.data)[0]]
          );
        } else this.showNotification("tr", 3, e.toString());
      }
    }
  };
}

export default Login;
