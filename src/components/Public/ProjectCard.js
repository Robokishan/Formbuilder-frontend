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
import {Card, CardBody, CardHeader, Col, Row,} from "reactstrap";
import {Link} from "react-router-dom";
import playstore from "assets/img/brand/playstore.png"

class ProjectCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "loading":false,
            "projects":[]
        }
    }

    render() {
        var iconTypes = [
            "github",
            "playstore"
        ]
        const project  = this.props.project;
        var projectWebsite = null;
        // const projectType = this.props.project.url ? this.props.project.projectType : "normal";
        if( this.props && this.props.project && this.props.project.url && this.props.project.url.length > 0 ) {
            projectWebsite = this.props.project.url.map((url) => {
                    return ( <div key={url.url} className="h5 font-weight-300">
                        {/* TODO: ADD ICON HERE */}
                        <a href={url.url}>
                        { iconTypes.indexOf(url.type) !== -1 ? 
                        (<img className={"mx-1"} width={40} alt="behance" src={require(`assets/img/brand/${url.type}.png`)}/> ) 
                        : 
                        <a href={url.url}>{url.url}</a>}
                        </a>
                    </div> )
            });
        }
        // var projectWebsite  = <div className="h5 font-weight-300">
        //                         {/* TODO: ADD ICON HERE */}
        //                         <a href={project.website}>{project.website}</a>
        //                     </div> ;
        // if(projectType === "playstore") {
        //     projectWebsite =   <a href={project.website}>
        //                         <img className={"mx-1"} width={40} alt="behance" src={playstore}/>
        //                     </a>
        // } else {
        //     projectWebsite = <div className="h5 font-weight-300">
        //                         {/* TODO: ADD ICON HERE */}
        //                         <a href={project.website}>{project.website}</a>
        //                     </div>
        // }

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

                <Col  className="col-auto mt-2 mb-md-2 px-md-1"  md="6" lg="4">
                    <Row className="justify-content-center h-100" >
                        <Card style={{
                        width: this.props.width ? this.props.width : "22rem"
                    }} className="card-profile shadow-lg--hover">
                        <Row className="justify-content-center mt-4 mb-4">
                        <div style={{
                                boxShadow:"0 2px 4px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.12)",
                                borderRadius: '12px'
                        }} className=" ">
                                <img className="img-card p-2 "
                                    width="110" height="110"
                                    alt="Card cap"
                                    src={project.avatar} />
                            </div>
                        </Row>
                        <CardHeader className="text-center border-0 pt-md-4 pb-0 pb-md-3">
                            <div className="d-flex justify-content-center">
                                <h3>
                                    <span>{project.title}</span>
                                </h3>
                            </div>
                        </CardHeader>
                        <CardBody className="pt-0 pt-md-4">
                            <div className="text-center">
                                {projectWebsite}
                                <hr className="my-4"/>
                                <div className="h5 font-weight-300">
                                    <span>
                                        {project.description}
                                    </span>
                                </div>
                                <div className="h5 font-weight-300">
                                    <span className="card-title">{project.message}</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Row>
                </Col>
            </>
        );
    }
}

export default ProjectCard;
