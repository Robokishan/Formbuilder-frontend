/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint eqeqeq: "off" */
import React, { ReactElement, useRef, useState } from 'react';

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
} from 'reactstrap';

import NotificationAlert from 'react-notification-alert';
import { useMutation } from 'urql';
import { useHistory } from 'react-router-dom';
import { fetchDetail, login } from '../../utils/api/owner';
import storage from '../../utils/storage/storage';
import { useLoginMutation } from '../../generated/graphql';

interface State {
  email: string;
  password: string;
  Loading: boolean
  error: boolean,
  showPassword: boolean,
  signIn: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {

}

export default function Login(_state: State, props:Props): ReactElement {
  const notificationref = useRef<any>();
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [Loading, setLoading] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [signIn, setsignIn] = useState<any>(true);
  const history = useHistory();
  const [,loginMut] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const showNotification = (place: string, color: number, message: {} | null | undefined) => {
    // var color = Math.floor(Math.random() * 5 + 1);
    let type: string | undefined;
    let discription: any;
    switch (color) {
      case 1:
        type = 'primary';
        break;
      case 2:
        type = 'success';
        discription = (
          <div>
            <strong>Logged In!</strong>
            {' '}
            {message}
          </div>
        );
        break;
      case 3:
        type = 'danger';
        discription = (
          <div>
            <strong>Error !</strong>
            {' '}
            {message}
          </div>
        );
        break;
      case 4:
        type = 'warning';
        break;
      case 5:
        type = 'info';
        break;
      default:
        break;
    }
    let options = {};
    options = {
      place,
      message: <div>{discription}</div>,
      type,
      icon: 'tim-icons icon-bell-55',
      autoDismiss: 7,
    };
    notificationref.current.notificationAlert(options);
  };

  function handleNameChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setemail(event.target.value);
  }

  function handlePasswordChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setpassword(event.target.value);
  }

  function changePasswordFieldType(event: any) {
    setshowPassword(!showPassword);
  }

  const onSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (email === '') {
      seterror(true);
    } else if (password === '') {
      seterror(true);
    } else {
      setsignIn(false);
      setLoading(true);
      seterror(false);

      try {
        const response = await loginMut({ email, password });
        if (response.data?.login.errors == null) {
          if (response.data?.login.user != null) {
            console.log(response.data?.login?.user[Object.keys(response.data.login.user)[0]]);
            showNotification('tr', 2, response.data?.login.user[Object.keys(response.data?.login.user)[0]]);
          }
        }

        // const response = await login(username, password);
        // if (response.token !== null && response.token !== '') {
        //   if (response?.message) {
        //     showNotification('tr', 2, response.message);
        //   } else if (Object.keys(response).length > 0) { showNotification('tr', 2, response[Object.keys(response)[0]]); } else showNotification('tr', 2, response);
        //   response.token = response.token.access_token;
        storage.setToken(response.data?.login.user?.token.access_token);
        //   storage.saveUser(response);
        //   storage.saveUserId(response.userId);

        //   storage.saveUserDetails(owner);

        // }
        setsignIn(true);
        history.push('/admin/forms');
      } catch (Error) {
        console.log('Error', Error);
        const e = Error as any;
        setsignIn(true);

        if (e?.response?.data?.error) { showNotification('tr', 3, e?.response?.data?.error); } else if (e.response && Object.keys(e?.response?.data).length > 0) {
          showNotification(
            'tr',
            3,
            e.response.data[Object.keys(e.response.data)[0]],
          );
        } else showNotification('tr', 3, e.toString());
      }
    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <div className="react-notification-alert-container">
            <NotificationAlert ref={notificationref} />
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
            <Form role="form" onSubmit={onSubmit}>
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
                    onChange={(e) => handleNameChange(e)}
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
                    type={showPassword == false ? 'password' : 'text'}
                    autoComplete="password"
                    onChange={(e) => handlePasswordChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  onChange={changePasswordFieldType}
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Show Password</span>
                </label>
              </div>
              <div className="text-center">
                <Button disabled={!signIn} className="my-4" color="danger" type="submit">
                  Sign in
                </Button>
              </div>
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
