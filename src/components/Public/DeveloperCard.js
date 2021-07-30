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
import {Card, CardBody, CardHeader, Col, Row, Spinner} from "reactstrap";

class DeveloperCard extends React.Component {

    render() {
        let profile_picture = (this.props.developer.avatar != null ? this.props.developer.avatar : require("assets/img/brand/default_avatar.png"));
        let formData = (this.props.developer != null ? this.props.developer : "")
        console.log("[DEVELOPER_CARD]",formData);
        return (
            <>
                {/*<Card className="bg-secondary shadow">*/}
                {/*    <CardHeader className="bg-white border-0">*/}
                {/*        <Row className="align-items-center">*/}
                {/*            <Col xs="8">*/}
                {/*                <h3 className="mb-0">{this.props.developer_name}</h3>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </CardHeader>*/}
                {/*    <CardBody>*/}
                {/*        <hr className="my-4"/>*/}
                {/*        */}
                {/*    </CardBody>*/}
                {/*</Card>*/}
                <Col className="col-auto order-xl-2 mb-5 mt-3 " md="6" lg="4">
                    <Row className="justify-content-center h-100" >
                        <Card style={{
                        width: this.props.width ? this.props.width : "22rem"
                    }}  className="card-profile  shadow-lg">
                        <Row className="justify-content-center">
                            <Col className="order-lg-2" lg="3">
                                <div className="card-profile-image">
                                    <img
                                        width="150" height="150"
                                        alt="..."
                                        className="rounded-circle"
                                        src={profile_picture}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div className="d-flex justify-content-between">
                            </div>
                        </CardHeader>
                        { formData  ?
                            <CardBody className="pt-0 pt-md-4">
                                <Row>
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">

                                        </div>
                                    </div>
                                </Row>
                                <div className="text-center">
                                    <h3>
                                        {formData.owner_name}
                                    </h3>
                                    <div className="h5 font-weight-300" >
                                        {formData?.email ? formData.email : "" }
                                    </div>

                                    <div className="h5 font-weight-300" >
                                        {formData?.user_name ? formData.user_name : "" }
                                    </div>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"/>
                                        {`${ formData?.address?.city ? formData?.address?.city : "" } ${formData.address?.country ? formData.address?.country : ""}`}
                                    </div>
                                    <div className="h5 mt-4">
                                        <i className="ni business_briefcase-24 mr-2"/>
                                        {`${ formData?.owner_details?.title ? formData?.owner_details?.title : "" }`}
                                    </div>
                                    
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"/>
                                        <a href={`${formData?.owner_details?.website ? formData?.owner_details?.website : "" }`} >{`${ formData?.owner_details?.website ? formData?.owner_details?.website : "" }`}</a>
                                    </div>
                                    {/* <div>
                                        <i className="ni education_hat mr-2"/>
                                        {formData?.owner_details?.org?.name ? formData.owner_details.org.name : "" }
                                    </div> */}
                                    <hr className="my-4"/>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"/>
                                        {`${ formData?.owner_details?.brief ? formData?.owner_details?.brief : "" }`}
                                    </div>
                                    {/* <p>
                                        {formData?.owner_details?.org?.info ? formData.owner_details.org.info : "" }
                                    </p> */}
                                </div>
                            </CardBody> :
                            <CardBody className="pt-0 pt-md-4">
                                <Row>
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">

                                        </div>
                                    </div>
                                </Row>
                                <div className="text-center">
                                    <Spinner animation="grow" variant="dark" />
                                </div>
                            </CardBody>
                        }
                    </Card>
                    </Row>
                </Col>
            </>
        );
    }
}

export default DeveloperCard;
