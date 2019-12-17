import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Badge } from "reactstrap";
import {
 } from "react-feather";

class Dashboard extends Component {

    constructor(props) {
      super(props);
    }

   render() {

      return (
        <Fragment>
        {/* <ContentHeader>Extended Tables </ContentHeader>
            <ContentSubHeader>Tables with some extra elements and feathers.</ContentSubHeader> */}
            <Row>
              <Col sm="4">
                  <Card>
                      <CardBody>
                      </CardBody>
                  </Card>
              </Col>

              <Col sm="8">
              <Row>
                <Col sm="6">
                  <Card>
                      <CardBody>
                      </CardBody>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                      <CardBody>
                      </CardBody>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                      <CardBody>
                      </CardBody>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                      <CardBody>
                      </CardBody>
                  </Card>
                </Col>
              </Row>
              </Col>
            </Row>
        </Fragment>
      );
   }
}

export default Dashboard;
