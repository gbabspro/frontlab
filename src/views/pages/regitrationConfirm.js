// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { confirmRegister } from '../../utility/APIutils';
import { Row, Col, Input, Form, FormGroup, Button, Card, CardBody, CardFooter } from "reactstrap";
import {
    Link
  } from "react-router-dom";

class RegistrationConfirm extends Component {

    constructor(props) {
        super(props);
        this.state = {

         token: {
            value: this.props.match.params.token
         },

         message:{
             body:"",
             asHerror: null
         }
  
        }
  
        console.log("token ", this.state.token)
        confirmRegister(this.state.token.value)         
        .then(response => {
            
            console.log("response", response);
            this.setState({message:{body:response.message, asHerror: false}})
         }).catch(error => {
            console.log("error", error);
            this.setState({message:{body:error.message, asHerror: true}})
         });
     }


   render(){
   return (
      <div className="container-fluid gradient-deep-orange-orange">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center ">
               <Card className="text-center width-400">                  
                  <CardBody className="text-center">
                   {this.state.message.body+" "}
                   <Link  to="/pages/login" >
connexion
                            </Link>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </div>
   );
}
};

export default RegistrationConfirm;
