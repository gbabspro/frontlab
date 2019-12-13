import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Button } from "reactstrap";
import { ArrowRight } from "react-feather";

class Home extends Component {

    constructor(props) {
      super(props);
    }

   render() {

      return (
<div className="">
<Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Row>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
        <div className="container">
            <Fragment>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col sm="4" className="d-flex justify-content-center">
                                            <div style={{boxShadow:"rgba(0, 18, 46, 0.16) 0px 8px 18px 0px", borderRadius:"100px", height:"200px", width:"200px"}} className="align-self-center">
                                            </div>
                                        </Col>
                                        <Col sm="8">
                                            <div>
                                                <ul className="list-group">
                                                    <li className="list-group-item" style={{border:"none"}}>
                                                        <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                            <ArrowRight size={20} />
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item" style={{border:"none"}}>
                                                        <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                            <ArrowRight size={20} />
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item" style={{border:"none"}}>
                                                        <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                            <ArrowRight size={20} />
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item" style={{border:"none"}}>
                                                        <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                            <ArrowRight size={20} />
                                                        </Button>
                                                    </li>
                                                    <li className="list-group-item" style={{border:"none"}}>
                                                        <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                            <ArrowRight size={20} />
                                                        </Button>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                
            </Fragment>
        </div>

</div>


      );
   }
}

export default Home;
