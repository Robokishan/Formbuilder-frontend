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
import {Col, Container, Row} from "reactstrap";
import Quadxpng from 'assets/img/brand/quadx.png'

class PublicHeader extends React.Component {
    render() {
        return (
            <>
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        maxHeight:"600px",
                        background:"no-repeat",
                        backgroundImage:
                            `url(${Quadxpng})`,
                        backgroundSize: "100% auto",
                        // backgroundSize: "cover",
                        backgroundPosition: "center"
                    }} >
                    {/* Mask */}
                    <span className="mask bg-gradient-dark opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center" fluid>
                        <Row>
                            <Col lg="7" md="10">
                                <h1 className="display-2 text-white">{"WelCome to Quadx technologies"}</h1>
                                <p className="text-white mt-0 mb-5">
                                    This is your profile page. You can see the progress you've
                                    made with your work and manage your profile
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default PublicHeader;
