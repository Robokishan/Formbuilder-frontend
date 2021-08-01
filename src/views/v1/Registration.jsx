import React, { useState } from "react";
import { doRegister } from "../../actions/auth";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import Label from "reactstrap/lib/Label";

export default function Registration(props) {
  const [passwordType, setpasswordType] = useState("password");
  const [disable, setdisable] = useState(false);

  const [user, setform] = useState({});

  const dispatch = useDispatch();

  const changePasswordFieldType = (e) => {
    if (passwordType === "password") setpasswordType("text");
    else setpasswordType("password");
  };

  const onChange = (event) => {
    let { name, value } = event.target;
    setform((user) => ({ ...user, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(doRegister(user));
    setdisable(true);
  };

  return (
    <>
      <Container className="mt-8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-4">
                  <h1>Sign up</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign up with credentials</small>
                </div>
                <Form onSubmit={onFormSubmit} role="form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(e) => onChange(e)}
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="user_name"
                        onChange={(e) => onChange(e)}
                        placeholder="username"
                        type="username"
                        autoComplete="username"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        onChange={(e) => onChange(e)}
                        placeholder="Email"
                        type="email"
                        autoComplete="new-email"
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
                        name="password"
                        onChange={(e) => onChange(e)}
                        placeholder="Password"
                        type={`${passwordType}`}
                        autoComplete="new-password"
                      />
                    </InputGroup>
                  </FormGroup>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                          onChange={(e) => changePasswordFieldType(e)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span className="text-muted">Show Password</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button
                      disabled={disable}
                      className="mt-4"
                      color="primary"
                      type="submit"
                    >
                      Create account
                    </Button>
                  </div>
                  <hr className="my-3" />

                  <div className="text-center">
                    <div>
                      <Label>or Sign in here</Label>
                    </div>
                    <div>
                      <Button
                        onClick={(e) => props.history.push("/auth/login")}
                        className="mt-4"
                        color="primary"
                        type="button"
                      >
                        Sign in
                      </Button>
                    </div>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
