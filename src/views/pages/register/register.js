// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { register, checkEmailAvailability } from '../../../utility/APIutils';
import { UncontrolledTooltip } from "reactstrap";
import "../../../assets/scss/views/form/wizard.scss"
import { 
   NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
   USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
   EMAIL_MAX_LENGTH,
   PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../../constants';
import {
   AlertCircle, ArrowLeft, CheckCircle
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
   CardFooter,
   CardDeck,
   CardImg,
   CardTitle,
   CardSubtitle,
   CardText,
   CustomInput
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

          selectedService: {
            value: 'SERVICE_CALL',
            validateStatus:"success",
            errorMessage: ""
          },
          domaine: {
            value: ''
          },

         registerDone: false,
         registerMsg:"",

         canGoNext: false,
        
         nextErrorMsg: "",
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
      this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
      this.isFormInvalid = this.isFormInvalid.bind(this);
      this.goNext = this.goNext.bind(this);
      this.onServiceChanged = this.onServiceChanged.bind(this);
      this.handleCheck = this.handleCheck.bind(this);

      console.log("this.props ", this.props)
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

   goNext  = () => {

      if(this.isNextReady()){
         return;
      }

      this.setState({canGoNext: !this.state.canGoNext})

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
          domaine: this.state.domaine.value,
          serviceType: this.state.selectedService.value,
      };


      console.log("signupRequest ", signupRequest)

      console.log("singup ", signupRequest)
      register(signupRequest)
      .then(response => {
         
         console.log("response ", response)  
         this.setState({
            registerDone: true
         })
      }).catch(error => {
         console.log("error ", error)
      });
  }

   isFormInvalid() {
      return !(this.state.firstname.validateStatus === 'success' &&
          this.state.lastname.validateStatus === 'success' &&
          this.state.email.validateStatus === 'success' &&
          this.state.password.validateStatus === 'success' &&
          this.state.domaine.validateStatus === 'success' && 
          this.state.selectedService.validateStatus === 'success'
      );
   }


   isNextReady() {
      return !(this.state.firstname.validateStatus === 'success' &&
          this.state.lastname.validateStatus === 'success' &&
          this.state.email.validateStatus === 'success' &&
          this.state.password.validateStatus === 'success'
      );
   }



 componentDidMount() {}

 componentWillUnmount() {}

handleCheck(service){

   this.setState({
      selectedService:{
         value: service,
         validateStatus:"success",
         errorMessage: ""
      },
      errorForm:{
         status: false,
         message:""
      },
   }, ()=>{console.log("this.state.selectedService : ", this.state.selectedService);});
}

onServiceChanged(e){

   console.log(e.target.name)

   this.setState({
      selectedService: {
         value: e.currentTarget.value,
         validateStatus:"success",
         errorMessage: ""
         
      },
      errorForm:{
         status:false,
         message:""
      },
   });
}


   render() {

      return (

        <div className="">
            <section className="">
            <div className="container py-3">

                    {
                       (this.state.registerDone)?
                       (<Row className="bg-white px-5 py-3">
                           <Col sm="12">
                                 <Card >
                                       <CardBody className="mt-5 bg-light">
                                          <p color="black" className="text-center">
                                          <CheckCircle color="green" size={88} /><br />
                                          <strong style={{fontSize:"22px"}} className="p-3 mt-2"> Inscription réussie</strong>
                                          </p>
                                          <p color="black" className="text-left">
                                             Un e-mail de validation a étè envoyé sur l'adresse e-mail que vous avez fourni.<br />
                                             Merci de cliquer sur le bouton de validation qui est indiqué dans cet e-mail pour activer votre compte. 
                                          </p>
                                       </CardBody>
                                 </Card>
                              </Col>
                           </Row>
                           ):
                           (
                              <Row className="bg-white px-5 py-3">
                                 <Col sm="6">
                                    <Card >
                                          <CardBody className="mt-5">

                                          </CardBody>
                                    </Card>
                                 </Col>
                              <Col sm="6" className="mr-0">
                              <Card >
                                 <CardBody className="bg-light">
         
                                 <h3 className="text-center text-bold-500">
                                    {
                                       (this.state.canGoNext)?
                                       (<Button className="p-1 mr-2 bg-white" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)", borderRadius: "20px"}} onClick={this.goNext} >
                                       <ArrowLeft color="black" />
                                    </Button>):""
                                    }
                                    
                                    Créer un compte gratuit</h3>
                                 
         
                                 <Form onSubmit={this.handleSubmit} className="pt-2">
                                    {(!this.state.canGoNext)?
                                       (         <div className="step step1">
                                       
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="input-style py-3"
                                                   name="firstname"
                                                   onBlur={(event) => this.handleInputChange(event, this.validateName)}
                                                   onFocus={(event) => {this.setState({firstname:{validateStatus: '',
                                                   errorMsg: null,}})}}
                                                   autoComplete="off"
                                                   defaultValue={this.state.firstname.value}
                                                   id="inputName"
                                                   placeholder="Prénom"
                                                   required
                                                />
                                                {this.state.firstname.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-4 pt-1">
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
                                                   onFocus={(event) => {this.setState({lastname:{validateStatus: '',
                                                   errorMsg: null,}})}}
                                                   autoComplete="off"
                                                   defaultValue={this.state.lastname.value}
                                                   id="inputLastName"
                                                   placeholder="Nom"
                                                   required
                                                />
                                                {this.state.lastname.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-4 pt-1">
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
                                                   defaultValue={this.state.email.value}
                                                   onFocus={(event) => {this.setState({email:{validateStatus: '',
                                                   errorMsg: null,}})}}
                                                   placeholder="Adresse e-mail"
                                                   onBlur={(event) => this.handleInputChange(event, this.validateEmailAvailability)}
                                                   required
                                                />
                                                
                                                {this.state.email.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-4 pt-1">
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
                                                   defaultValue={this.state.password.value}
                                                   onFocus={(event) => {this.setState({password:{validateStatus: '',
                                                   errorMsg: null,}})}}
                                                   onBlur={this.validateEmailAvailability}
                                                   id="inputPass"
                                                   placeholder="Mot de passe"
                                                   onBlur={(event) => this.handleInputChange(event, this.validatePassword)}
                                                   required
                                                />
                                                {this.state.password.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-4 pt-1">
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
                                             <Col md="12" className="d-flex justify-content-center" >
                                                <Button block className="mt-2" onClick={this.goNext} style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                   SUIVANT
                                                </Button>
                                             </Col>
                                          </FormGroup>
                                       
                                    </div>):
                                       (<div className="form-body">
         
                                       <Row>
                           
                                             <Col md="12">
                                             <FormGroup>
                                                <Input
                                                   type="text"
                                                   className="input-style py-3"
                                                   name="domaine"
                                                   autoComplete="off"
                                                   defaultValue={this.state.domaine.value}
                                                   onFocus={(event) => {this.setState({domaine:{validateStatus: '',
                                                   errorMsg: null,}})}}
                                                   onBlur={(event) => this.handleInputChange(event, this.validateDomaine)}
                                                   placeholder="Site web : monsite.com"
                                                   required
                                                />
                                                
                                                {this.state.domaine.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-2 pt-1">
                                                      <AlertCircle id="emailTooltip" className="danger"/>
                                                      <UncontrolledTooltip
                                                         placement="right"
                                                         target="emailTooltip"
                                                      >
                                                         {this.state.domaine.errorMsg}
                                                      </UncontrolledTooltip>
                                                   </div>):''
                                                }
         
                                             </FormGroup>
                                             </Col>
                              
                                             <Col md="6">
                                                <FormGroup>
                                                   <CardDeck>
                                                      <Card onClick={() => this.handleCheck("SERVICE_CHAT")} style={{borderRadius: "10px", boxShadow: (!this.state.selectedService.value=="SERVICE_CHAT")? "0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06)":"0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06)"}} className md="12" className="cursor-pointer" >
                                       
                                                         <CardBody>
                                                            <CardTitle className="font-weight-bold text-center">Live Chat</CardTitle>
                                                            <CardSubtitle className="text-center text-warning">Disponible bientôt</CardSubtitle>
                                                            {/* <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">25 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa / mois</b></span></CardText> */}
                                                            <CardFooter className="pb-0 ">
                                                               <Col md="12" className="d-flex justify-content-center">
                                                                  <FormGroup check className="px-0">
                                                                     <CustomInput value="SERVICE_CHAT"  checked={this.state.selectedService.value=="SERVICE_CHAT"} onChange={this.onServiceChanged} type="radio" id="serviceChat" />
                                                                  </FormGroup>
                                                               </Col>              
                                                            </CardFooter>
                                                         </CardBody>
                                                      </Card>
                                                   </CardDeck>
                                                </FormGroup>
                                             </Col>
                           
                                             <Col md="6">
                                                <FormGroup>
                                                   <CardDeck>
                                                      <Card onClick={() => this.handleCheck("SERVICE_CALL")} style={{borderRadius: "10px",boxShadow:"0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06)"}} md="12" className=" cursor-pointer" >
                              
                                                         <CardBody >
                                                            <CardTitle className="font-weight-bold text-center">Web to Call</CardTitle>
                                                            <CardSubtitle className="text-center text-success">Disponible</CardSubtitle>
                                                            {/* <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">75 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa / mois</b></span></CardText> */}
                                                            <CardFooter className="pb-0 ">
                                                               <Col md="12" className="d-flex justify-content-center">
                                                                  <FormGroup check className="px-0">
                                                                     <CustomInput value="SERVICE_CALL"  checked={this.state.selectedService.value=="SERVICE_CALL"} onChange={this.onServiceChanged} type="radio" id="serviceCall" />
                                                                  </FormGroup>
                                                               </Col>              
                                                            </CardFooter>
                                                         </CardBody>
                                                      </Card>
                                                   </CardDeck>
                                                </FormGroup>
                                             </Col>
                                          <Col md="12">
                                             <FormGroup className="d-flex justify-content-center">
                                                <Button block type="submit" className="mt-2" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                   Créer un compte
                                                </Button>
                                             </FormGroup>
                                          </Col>
                                       </Row>
                                    </div>)
                                    }
         
                                       <div className="text-center">
                                          Vous avez déjà un compte ?  <NavLink to="/pages/login" className="text-black">
                                             Se connecter
                                          </NavLink>
                                       </div>
         
                                    </Form>
                                 </CardBody>
                              </Card>
                              </Col>
                           </Row>)
                    }
                </div>
            </section>
        </div>
      );
   }


       // Validation Functions

       validateName = (name) => {

         if(name.length < NAME_MIN_LENGTH) {
             return {
                 validateStatus: 'error',
                 errorMsg: `Le nom/prenom est trop court (Minimum ${NAME_MIN_LENGTH} caractères nécessaires.)`
             }
         } else if (name.length > NAME_MAX_LENGTH) {
             return {
                 validationStatus: 'error',
                 errorMsg: `Le nom/prenom est trop court (Maximum ${NAME_MAX_LENGTH} caractères nécessaires.)`
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
                 errorMsg: 'L\'email ne peut pas être vide'                
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
                 errorMsg: `L\'email est trop long (Maximum ${EMAIL_MAX_LENGTH} caractères nécessaires)`
             }
         }else{
            return {
               validateStatus: 'success',
               errorMsg: null
           }
         }
     }


     validateDomaine = (domaine) => {

      if(!domaine) {
          return {
              validateStatus: 'error',
              errorMsg: 'Merci de renseigner le domaine de votre site'                
          }
      }

      const DOMAINE_REGEX = RegExp(/([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/);
      if(!DOMAINE_REGEX.test(domaine)) {
          return {
              validateStatus: 'error',
              errorMsg: 'Le domaine n\'est pas valide'
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
   
     validateEmailAvailability(email) {
         // First check for client side errors in email
         const emailValue = email;
         const emailValidation = this.validateEmail(emailValue);
   
         if(emailValidation.validateStatus === 'error') {
             return emailValidation;
         }
   
         this.setState({
             email: {
                 value: emailValue,
                 validateStatus: 'success',
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
                         errorMsg: 'Cet e-mail est déjà enregistré'
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



}


export default Register;
