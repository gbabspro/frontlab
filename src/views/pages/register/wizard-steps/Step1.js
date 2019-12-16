import React, { Component } from "react";
import {
   AlertCircle
} from "react-feather";
import { register, checkUsernameAvailability, checkEmailAvailability } from '../../../../utility/APIutils';
import { 
   NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
   USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
   EMAIL_MAX_LENGTH,
   PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../../../constants';
import {
   Row,
   Col,
   Input,
   Form, 
   FormGroup,
   Button,
   Card,   
   CardBody,
   CardFooter,
   UncontrolledTooltip
} from "reactstrap";
export default class Step1 extends Component {
   state = {};

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
      // this.handleInputChange = this.handleInputChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
      // this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
      this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
      // this.isFormInvalid = this.isFormInvalid.bind(this);
  }

   componentDidMount() {}

   componentWillUnmount() {}

   // not required as this component has no forms or user entry
   // isValidated() {}

   render() {
      return (
         <div className="step step1">
            <Form onSubmit={this.handleSubmit} className="pt-2">
               <FormGroup>
                  <Col md="12">
                     <Input
                        type="text"
                        className="input-style py-3"
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
                        className="form-control py-3"
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
                        className="form-control py-3"
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
                        className="form-control py-3"
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


               {/* <FormGroup>
                  <Col md="12" className="d-flex justify-content-center">
                     <Button type="submit" >
                        VALIDER
                     </Button>
                  </Col>
               </FormGroup> */}
            </Form>
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
