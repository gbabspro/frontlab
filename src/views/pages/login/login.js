// import external modules
import React, { Component } from "react";
import { login } from '../../../utility/APIutils';
import { NavLink } from "react-router-dom";
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Card,   
   CardBody,
   CardFooter
} from "reactstrap";

import { ACCESS_TOKEN } from '../../../constants';
import { Redirect } from 'react-router-dom'

class Login extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isChecked: true,
         email: "",
         password: "",
         hasError:{
            status: false,
            message:""
         },
         isLogin: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

   handleSubmit = (event) => {
      event.preventDefault();   

            const loginRequest = this.state;
            login(loginRequest)
            .then( (response) => {
                  localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                  this.props.onLogin();
                  console.log("this.props ", this.props)
                  this.setState({isLogin:true});
                  return <Redirect to='/pages/services' />
                  // this.props.history.push("/pages/services");
            }).catch(error => {
                  if(error.status === 401) {
                     this.setState({
                        hasError:{
                           status: true,
                           message: "Identifiant ou mot de passe incorrect !"
                        }
                     })
                  } else {
                                      
                  }
            });
   }

   handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   }

   handleChecked = e => {
      this.setState(prevState => ({
         isChecked: !prevState.isChecked
      }));
   };

   render() {  


      if(this.state.isLogin){
         return <Redirect to='/pages/services' />
      }

      return (
         <div className="container-fluid gradient-deep-orange-orange">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="text-center width-400">
                     <CardBody>
                        <h6 className="text-uppercase text-bold-500 black py-2">Connectez-vous à votre compte</h6>
                        <div className="danger" >
                        {(this.state.hasError.status)?this.state.hasError.message:""}
                        </div>
                        <Form className="pt-2" onSubmit={this.handleSubmit}>
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChange}
                                    id="inputEmail"
                                    placeholder="Adresse e-mail"
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.handleChange}
                                    id="inputPass"
                                    placeholder="Mot de passe"
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           {/* <FormGroup>
                              <Row>
                                 <Col md="12">
                                    <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                                       <Input
                                          type="checkbox"
                                          className="custom-control-input"
                                          checked={this.state.isChecked}
                                          onChange={this.handleChecked}
                                          id="rememberme"
                                       />
                                       <Label className="custom-control-label float-left black" for="rememberme">
                                          Remember Me
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup> */}
                           <FormGroup>
                              <Col md="12">
                                 <Button type="submit" color="btnjokko" block className="btnjokko btn-raised">
                                    Se connecter
                                 </Button>
                              </Col>
                           </FormGroup>
                        </Form>
                     </CardBody>
                     <CardFooter>
                        <div className="float-left">
                           <NavLink to="/pages/forgot-password" className="text-black">
                              Mot de passe oublié ?
                           </NavLink>
                        </div>
                        <div className="float-right">
                           <NavLink to="/pages/register" className="text-black">
                              Ouvrir un compte
                           </NavLink>
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Login;
