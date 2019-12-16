// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { register, checkUsernameAvailability, checkEmailAvailability } from '../../../utility/APIutils';
import { UncontrolledTooltip } from "reactstrap";
import StepZilla from "./wizard-steps/main";
import Step1 from "./wizard-steps/Step1";
import Step2 from "./wizard-steps/Step2";
import "../../../assets/scss/views/form/wizard.scss"
import { 
   NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
   USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
   EMAIL_MAX_LENGTH,
   PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../../constants';
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

  }

  sampleStore = {
    email: "",
    gender: "",
    savedToCloud: false
 };

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



 componentDidMount() {}

 componentWillUnmount() {}

 getStore() {
    return this.sampleStore;
 }

 updateStore(update) {
    this.sampleStore = {
       ...this.sampleStore,
       ...update
    };
 }


   render() {

    const steps = [
        {
           name: "informations du profil",
           component: (
              <Step1
                 getStore={() => this.getStore()}
                 updateStore={u => {
                    this.updateStore(u);
                 }}
              />
           )
        },
        {
           name: "Step2",
           component: (
              <Step2
                 getStore={() => this.getStore()}
                 updateStore={u => {
                    this.updateStore(u);
                 }}
              />
           )
        }
     ];
      return (

        <div className="">
            <section className="">
            <div className="container">
                <Row className="bg-white px-5 py-3">
                    <Col sm="6">
                        <Card >
                            <CardBody className="mt-5">
                   
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mr-0">
                    <Card >
                        <CardBody className="">
                            <div className="step-progress">
                                <StepZilla
                                    steps={steps}
                                    preventEnterSubmission={true}
                                    nextTextOnFinalActionStep={"Save"}
                                    hocValidationAppliedTo={[2]}
                                    startAtStep={window.sessionStorage.getItem("step") ? parseFloat(window.sessionStorage.getItem("step")) : 0}
                                    onStepChange={step => window.sessionStorage.setItem("step", step)}
                                />
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </div>
            </section>
        </div>
        //  <div className="container-fluid gradient-deep-orange-orange">
        //     <Row className="full-height-vh">
        //        <Col xs="12" className="d-flex align-items-center justify-content-center">
        //           <Card className="register-card text-center width-400">
        //              <CardBody>
        //                 <h6 className="text-uppercase text-bold-500 black py-2">Créer votre compte</h6>
                        
        //              </CardBody>
        //              <CardFooter>
        //                 <div className="float-left">
        //                    <NavLink to="/pages/forgot-password" className="text-black">
        //                       Mot de passe oublié ?
        //                    </NavLink>
        //                 </div>
        //                 <div className="float-right">
        //                    <NavLink to="/pages/login" className="text-black">
        //                       Se connecter
        //                    </NavLink>
        //                 </div>
        //              </CardFooter>
        //           </Card>
        //        </Col>
        //     </Row>
        //  </div>
      );
   }



}


export default Register;
