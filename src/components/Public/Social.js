import React, {Fragment} from "react";
import youtube from "assets/img/brand/youtube.png";
import blogger from "assets/img/brand/blogger.png";

export default class Social extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container top-container p-16 remove-padding d-sm-flex flex-column flex-sm-column flex-md-column flex-lg-row
        justify-content-center
        align-items-center">
                    <div className="right p-4 mb-5 text-center text-md-left">
                        <div className="social">
                            <a href={"https://youtube.com/robokishan"}>
                                <img className={"mx-1"} width={70} alt="behance" src={youtube}/>
                            </a>
                            <a href={"https://robokishan.blogspot.com"}>
                                <img className={"mx-1"} width={70} alt="dribble" src={blogger}/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="hr remove-margin"/>
            </Fragment>
        );
    }
}
