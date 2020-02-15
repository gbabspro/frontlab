import React, { Component } from "react";
import { Card, CardBody, Row, Col, Button, FormGroup} from "reactstrap";
import { Link } from "react-router-dom";
import logoAlloSky from "../../../assets/img/logoallosky.png";

class HomeNavbar extends Component {

   constructor(props) {
        super(props);
        this.state = {
            navBackground:"white",
        }
   }

   render() {
    return ( <nav style={{background:this.state.navBackground, border:"1px solid #cfcfcf", boxShadow:"0 2px 2px rgba(0,0,60,.08)", zIndex:"999"}}>
                <div className="container" style={{backgroundColor:this.state.navBackground}}>
                    <Row>
                        <Col sm="6" className="d-none d-xl-block d-md-block">
                            <Card style={{boxShadow:"none", backgroundColor:this.state.navBackground}}>
                                <CardBody className="py-1">

                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" className="px-0">
                            <Card style={{boxShadow:"none", backgroundColor:this.state.navBackground}}>
                                <CardBody className="d-flex justify-content-end py-0">

                                    <FormGroup className="d-flex justify-content-center mb-0 " block>
                                        <Link to="/pages/login">
                                            <Button className="btnGoToApp px-4 py-1 text-center my-0 text-bold-400" style={{background:"linear-gradient(to right,#4f74fe,#70aafb)",boxShadow:"0 2px 2px rgba(0,0,60,.08)", display: 'flex', alignItem:"center", borderRadius: "6px", justifyContent: 'center'}}>
                                                Se connecter
                                            </Button>
                                        </Link>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </nav>);
   
   }

}

export default HomeNavbar;