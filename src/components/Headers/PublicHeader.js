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
import Rellax from 'rellax'
class PublicHeader extends React.Component {

    constructor(props){
        super(props);
        this.rellaxHeaderText = null;
        this.headerTextRef = null;
        this.rellaxDiscription=null;
        this.descriptionRef = null;
    }

    componentDidMount() {
        this.rellaxHeaderText = new Rellax(this.headerTextRef,{speed: 3});
        this.rellaxDiscription = new Rellax(this.descriptionRef,{speed: 1});
        window.addEventListener("scroll",()=>{ 
            let offset = window.pageYOffset;
            var posY = 1 - ( offset * 0.003 );
            if(this.headerTextRef)
                this.headerTextRef.style.opacity = posY;
            if(this.descriptionRef)
                this.descriptionRef.style.opacity = posY;
         })
    }

    render() {
        return (
            <>
                <div className="header pb-8  pt-lg-8 d-flex align-items-center"
                    style={{
                        maxHeight:"600px",
                        background:"no-repeat",

                        // backgroundImage:
                        //   `url(${Quadxpng})`,
                        backgroundSize: "100% auto",
                        // backgroundSize: "cover",
                        backgroundPosition: "center"
                    }} >
                    {/* Mask */}
                    {/* <span className="mask bg-gradient-darker opacity-5" /> */}
                    {/* Header container */}
                    <Container className="d-flex justify-content-center" fluid>
                        <Row>
                            <Col lg="12" md="10">
                                <h1 ref={ref => { this.headerTextRef = ref }}  className="display-2 text-white">{"Hey There! Looking for Developers ?"}</h1>
                                <h3 ref={ref => { this.descriptionRef = ref }}  className="display-5 text-center text-white">{"Android, Embedded, and Web development"}</h3>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default PublicHeader;
