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
      <div className="container-fluid" style={{background:"linear-gradient(to right,#4f74fe,#70aafb)"}}>
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
                                 required
                                 type="email"
                                 className="input-style form-control py-3"
                                 name="email"
                                 onChange={this.handleChange}
                                 placeholder="Votre adresse e-mail"
                              />
                           </Col>
                        </FormGroup>
                        <FormGroup>
                              <Col md="12" className="d-flex justify-content-center" >
                                 <Button block type="submit" className="mt-2" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                    Valider
                                 </Button>
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
