// import external modules
import React, { Component } from "react";
import { login } from '../../utility/APIutils';
import { NavLink } from "react-router-dom";
import {toastr} from 'react-redux-toastr';
import { UncontrolledAlert } from "reactstrap";
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,   
   CardBody,
   CardFooter
} from "reactstrap";

import { ACCESS_TOKEN } from '../../constants';

class CallInterface extends Component {

    constructor(props) {
      super(props);
      
    }


   render() {
      return (
         <div className="container-fluid gradient-deep-orange-orange">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="text-center width-600">
                     <CardBody>
        
                     </CardBody>
                     <CardFooter>

                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default CallInterface;
