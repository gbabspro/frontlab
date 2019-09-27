// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { changerPassword } from '../../utility/APIutils';
import { Row, Col, Input, Form, FormGroup, Button, Card, CardBody, CardFooter, UncontrolledTooltip } from "reactstrap";
import {
    Edit,
    Mail,
    Phone,
    AlertCircle
 } from "react-feather";
 import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
 } from '../../constants';

class ResetPassword extends Component {

   constructor(props) {
      super(props);
      this.state = {
        password: {
            value: ''
        },
        passwordConfirmation: {
          value: ''
       },
       token: {
          value: this.props.match.params.token
       }

      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this); 

      console.log("token ", this.state.token)
   }


     handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

   handleSubmit(event) {
      event.preventDefault();   

            const passwordRequest  = {
                password: this.state.password.value,
                token: this.state.token.value
            };
            
            console.log("passwordRequest : ", passwordRequest);

            changerPassword(passwordRequest)
            .then(response => {

                  console.log("réponse : ", response);
            }).catch(error => {
                  console.log("error : ", error);
            });
   }

   handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   }

   render(){
   return (
      <div className="container-fluid gradient-deep-orange-orange">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center ">
               <Card className="text-center width-400">                  
                  <CardBody>
                     <div className="text-center">
                        <h6 className="text-uppercase text-bold-500 black py-2">Nouveau mot de passe</h6>
                     </div>
                     <Form className="pt-2" onSubmit={this.handleSubmit}>

                     <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onBlur={this.validateEmailAvailability}
                                    id="inputPass"
                                    placeholder="Mot de passe"
                                    onBlur={(event) => this.handleInputChange(event, this.validatePassword)}
                                    required
                                 />
                                 {this.state.password.validateStatus === "error" ? (
                                    <div className="form-control-position pr-4">
                                       <AlertCircle id="passwordTooltip" className="danger"/>
                                       <UncontrolledTooltip
                                          placement="right"
                                          target="passwordTooltip"
                                       >
                                          {this.state.password.errorMsg}
                                       </UncontrolledTooltip>
                                    </div>):''
                                 }
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="passwordConfirmation"
                                    id="inputPass"
                                    onBlur={(event) => this.handleInputChange(event, this.validateConfirmPassword)}
                                    placeholder="Retapez mot de passe"
                                    required
                                 />
                                 {this.state.passwordConfirmation.validateStatus === "error" ? (
                                    <div className="form-control-position pr-4">
                                       <AlertCircle id="confirmTooltip" className="danger"/>
                                       <UncontrolledTooltip
                                          placement="right"
                                          target="confirmTooltip"
                                       >
                                          {this.state.passwordConfirmation.errorMsg}
                                       </UncontrolledTooltip>
                                    </div>):''
                                 }
                                 
                              </Col>
                           </FormGroup>
                        <FormGroup className="pt-2">
                           <Col md="12">
                              <div className="text-center">
                                 <Button color="default" className="btnjokko" block>
                                    Enrégistrer
                                 </Button>
                              </div>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </div>
   );
}

validatePassword = (password) => {
    if(password.length < PASSWORD_MIN_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
        }
    } else if (password.length > PASSWORD_MAX_LENGTH) {
        return {
            validationStatus: 'error',
            errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
        }
    } else {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };            
    }
}


validateConfirmPassword = (password) => {
 if(this.state.password.value !== password) {
     return {
         validateStatus: 'error',
         errorMsg: `Password is too.)`
     }
 } else {
     return {
         validateStatus: 'success',
         errorMsg: null,
     };            
 }
}

};

export default ResetPassword;
