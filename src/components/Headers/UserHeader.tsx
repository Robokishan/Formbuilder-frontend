/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// reactstrap components
import { Col, Container, Row } from 'reactstrap';
import storage from '../../utils/storage/storage';

class UserHeader extends React.PureComponent {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: '600px',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-dark opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">{`Hello ${storage.getUser().name}`}</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your profile
                </p>
                {/* <Button
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button> */}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
