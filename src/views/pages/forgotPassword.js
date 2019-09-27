// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { resetPassword } from '../../utility/APIutils';
import { Row, Col, Input, Form, FormGroup, Button, Card, CardBody, CardFooter } from "reactstrap";

class ForgotPassword extends Component {

   constructor(props) {
      super(props);
      this.state = {
         email: "",
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      
   }

   handleSubmit(event) {
      event.preventDefault();   

            const passwordRequest = this.state;
            console.log("password Request : ", passwordRequest);
            resetPassword(passwordRequest)
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
                        <h6 className="text-uppercase text-bold-500 black py-2">Mot de passe oublié</h6>
                     </div>
                     <Form className="pt-2" onSubmit={this.handleSubmit}>
                        <FormGroup>
                           <Col md="12">
                              <Input
                                 type="email"
                                 className="form-control"
                                 name="email"
                                 onChange={this.handleChange}
                                 placeholder="Votre adresse e-mail"
                              />
                           </Col>
                        </FormGroup>
                        <FormGroup className="pt-2">
                           <Col md="12">
                              <div className="text-center">
                                 <Button color="default" className="btnjokko" block>
                                    Submit
                                 </Button>
                              </div>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
                  <CardFooter>
                     <div className="float-left white">
                        <NavLink exact className="text-black" to="/pages/login">
                           Connectez-vous
                        </NavLink>
                     </div>
                     <div className="float-right white">
                        <NavLink exact className="text-black" to="/pages/register">
                        Créer un compte
                        </NavLink>
                     </div>
                  </CardFooter>
               </Card>
            </Col>
         </Row>
      </div>
   );
}
};

export default ForgotPassword;
