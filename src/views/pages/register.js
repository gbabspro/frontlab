// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { register, checkUsernameAvailability, checkEmailAvailability } from '../../utility/APIutils';
import { UncontrolledTooltip } from "reactstrap";
import { 
   NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
   USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
   EMAIL_MAX_LENGTH,
   PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../constants';
import {
   AlertCircle
} from "react-feather";
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

class Register extends Component {

   constructor(props) {
      super(props);
      this.state = {
          firstname: {
              value: ''
          },
          lastname: {
              value: ''
          },
          email: {
              value: ''
          },
          password: {
              value: ''
          },
          passwordConfirmation: {
            value: ''
         }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
      this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
      this.isFormInvalid = this.isFormInvalid.bind(this);
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
  
      if(this.isFormInvalid()){
         return;
      }

      const signupRequest = {
          firstname: this.state.firstname.value,
          lastname: this.state.lastname.value,
          email: this.state.email.value,
          password: this.state.password.value,
      };
      console.log("singup ", signupRequest)
      register(signupRequest)
      .then(response => {
         
          this.props.history.push("/pages/login");
      }).catch(error => {

      });
  }

   isFormInvalid() {
      return !(this.state.firstname.validateStatus === 'success' &&
          this.state.lastname.validateStatus === 'success' &&
          this.state.email.validateStatus === 'success' &&
          this.state.password.validateStatus === 'success' &&
          this.state.passwordConfirmation.validateStatus === 'success'
      );
  }

   render() {
      return (
         <div className="container-fluid gradient-deep-orange-orange">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="register-card text-center width-400">
                     <CardBody>
                        <h6 className="text-uppercase text-bold-500 black py-2">Créer votre compte</h6>
                        <Form onSubmit={this.handleSubmit} className="pt-2">
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="text"
                                    className="input-style"
                                    name="firstname"
                                    onBlur={(event) => this.handleInputChange(event, this.validateName)}
                                    autoComplete="off"
                                    id="inputName"
                                    placeholder="Prénom"
                                    required
                                 />
                                 {this.state.firstname.validateStatus === "error" ? (
                                    <div className="form-control-position pr-4">
                                       <AlertCircle id="firstnameTooltip" className="danger"/>
                                       <UncontrolledTooltip
                                          placement="right"
                                          target="firstnameTooltip"
                                       >
                                          {this.state.firstname.errorMsg}
                                       </UncontrolledTooltip>
                                    </div>):''
                                 }
                              </Col>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="text"
                                    className="form-control"
                                    name="lastname"
                                    onBlur={(event) => this.handleInputChange(event, this.validateName)}
                                    autoComplete="off"
                                    id="inputLastName"
                                    placeholder="Nom"
                                    required
                                 />
                                 {this.state.lastname.validateStatus === "error" ? (
                                    <div className="form-control-position pr-4">
                                       <AlertCircle id="lastnameTooltip"  className="danger"/>
                                       <UncontrolledTooltip
                                          placement="right"
                                          target="lastnameTooltip"
                                       >
                                          {this.state.lastname.errorMsg}
                                       </UncontrolledTooltip>
                                    </div>):''
                                 }
                              </Col>
                           </FormGroup>
                           <FormGroup>
                           
                              <Col md="12">
                                 <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="inputEmail"
                                    placeholder="Adresse e-mail"
                                    onBlur={(event) => this.handleInputChange(event, this.validateEmail)}
                                    required
                                 />
                                 
                                 {this.state.email.validateStatus === "error" ? (
                                    <div className="form-control-position pr-4">
                                       <AlertCircle id="emailTooltip" className="danger"/>
                                       <UncontrolledTooltip
                                          placement="right"
                                          target="emailTooltip"
                                       >
                                          {this.state.email.errorMsg}
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
                                       <Label className="custom-control-label float-left white" for="rememberme">
                                          I agree terms and conditions.
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup> */}
                           <FormGroup>
                              <Col md="12">
                                 <Button type="submit" color="default" block className="btnjokko btn-raised">
                                    Créer un compte
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
                           <NavLink to="/pages/login" className="text-black">
                              Se connecter
                           </NavLink>
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }

    // Validation Functions

   validateName = (name) => {

      if(name.length < NAME_MIN_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
          }
      } else if (name.length > NAME_MAX_LENGTH) {
          return {
              validationStatus: 'error',
              errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
          }
      } else {
          return {
              validateStatus: 'success',
              errorMsg: null,
            };            
      }
  }

   validateEmail = (email) => {
      if(!email) {
          return {
              validateStatus: 'error',
              errorMsg: 'Email may not be empty'                
          }
      }

      const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
      if(!EMAIL_REGEX.test(email)) {
          return {
              validateStatus: 'error',
              errorMsg: 'Email not valid'
          }
      }else if(email.length > EMAIL_MAX_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
          }
      }else{
         return {
            validateStatus: 'success',
            errorMsg: null
        }
      }
  }

  validateUsername = (username) => {
      if(username.length < USERNAME_MIN_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
          }
      } else if (username.length > USERNAME_MAX_LENGTH) {
          return {
              validationStatus: 'error',
              errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
          }
      } else {
          return {
              validateStatus: "success",
              errorMsg: null
          }
      }
  }

  validateUsernameAvailability() {
      // First check for client side errors in username
      const usernameValue = this.state.username.value;
      const usernameValidation = this.validateUsername(usernameValue);

      if(usernameValidation.validateStatus === 'error') {
          this.setState({
              username: {
                  value: usernameValue,
                  ...usernameValidation
              }
          });
          return;
      }

      this.setState({
          username: {
              value: usernameValue,
              validateStatus: 'validating',
              errorMsg: null
          }
      });

      checkUsernameAvailability(usernameValue)
      .then(response => {
          if(response.available) {
              this.setState({
                  username: {
                      value: usernameValue,
                      validateStatus: 'success',
                      errorMsg: null
                  }
              });
          } else {
              this.setState({
                  username: {
                      value: usernameValue,
                      validateStatus: 'error',
                      errorMsg: 'This username is already taken'
                  }
              });
          }
      }).catch(error => {
          // Marking validateStatus as success, Form will be recchecked at server
          this.setState({
              username: {
                  value: usernameValue,
                  validateStatus: 'success',
                  errorMsg: null
              }
          });
      });
  }

  validateEmailAvailability() {
      // First check for client side errors in email
      const emailValue = this.state.email.value;
      const emailValidation = this.validateEmail(emailValue);

      if(emailValidation.validateStatus === 'error') {
          this.setState({
              email: {
                  value: emailValue,
                  ...emailValidation
              }
          });    
          return;
      }

      this.setState({
          email: {
              value: emailValue,
              validateStatus: 'validating',
              errorMsg: null
          }
      });

      checkEmailAvailability(emailValue)
      .then(response => {
          if(response.available) {
              this.setState({
                  email: {
                      value: emailValue,
                      validateStatus: 'success',
                      errorMsg: null
                  }
              });
          } else {
              this.setState({
                  email: {
                      value: emailValue,
                      validateStatus: 'error',
                      errorMsg: 'This Email is already registered'
                  }
              });
          }
      }).catch(error => {
          // Marking validateStatus as success, Form will be recchecked at server
          this.setState({
              email: {
                  value: emailValue,
                  validateStatus: 'success',
                  errorMsg: null
              }
          });
      });
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
           errorMsg: `Les mot de passes ne sont pas identiques`
       }
   } else {
       return {
           validateStatus: 'success',
           errorMsg: null,
       };            
   }
}

}


export default Register;
