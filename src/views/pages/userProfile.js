// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { updateProfile, updatePassword, updateEmail } from '../../utility/APIutils';
import {
   Row,
   Col,
   Button,
   Form,
   Input,
   Label,
   FormGroup,
   Modal,
   ModalHeader, 
   ModalBody, 
   ModalFooter,
   Card
} from "reactstrap";
import {
   Mail,
   Phone,
   Lock
} from "react-feather";
import { 
   NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
   EMAIL_MAX_LENGTH,
   PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../constants';
import Spinner from "../../components/spinner/spinner";
import avatarm8 from "../../assets/img/portrait/medium/avatar-m-8.png";
import { connect } from 'react-redux';

class UserProfile extends Component {

   constructor(props) {
      super(props);
      this.state = {
         profile: {
            firstname: {
               value: ''
           },
            lastname: {
               value: ''
           },
            phone: {
               value: ''
           }
         },
         email: {
            password: {
               value: ''
           },
            newEmail: {
               value: ''
           }
         },
         password: {
            oldPassword: {
               value: ''
           },
            newPassword: {
               value: ''
           },
            confirmPassword: {
               value: ''
           }
         },

         modalEditProfile: false,
         modalEditEmail: false,
         modalEditPassword: false,

      }
      this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleProfileChange = this.handleProfileChange.bind(this);
      this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this); 
      this.handleEmailSubmit = this.handleEmailSubmit.bind(this); 
      
   }


   componentDidMount(){

      if(this.props.currentUser){
         this.state.profile.firstname.value = this.props.currentUser.firstname;
         this.state.profile.lastname.value = this.props.currentUser.lastname;
         this.state.profile.phone.value = this.props.currentUser.phone;
      }

      console.log("this.props.currentUser ", this.props.currentUser);
   }
   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   openModal = () => {
      this.setState({
         modalEditProfile: !this.state.modalEditProfile
      });
   }

   openModalEmail = () => {
      this.setState({
         modalEditEmail: !this.state.modalEditEmail
      });
   }

   openModalPassword = () => {
      this.setState({
         modalEditPassword: !this.state.modalEditPassword
      });

      console.log("this.state.modalEditPassword ", this.state.modalEditPassword)
   }


   handleProfileChange(e, validationFun) {
      const target = e.target;
      const inputName = target.name;        
      const inputValue = target.value; 
      this.setState({
         profile : {
            ...this.state.profile,
            [inputName]: {
               value: inputValue
            }
         }
      });
   }


   handleEmailChange(e, validationFun) {
      const target = e.target;
      const inputName = target.name;        
      const inputValue = target.value; 
      this.setState({
         email : {
            ...this.state.email,
            [inputName]: {
               value: inputValue
            }
         }
      });

      console.log("this.state.email.oldPassword : ", this.state.email.password.value)
      console.log("this.state.email.newEmail : ", this.state.email.newEmail.value)
   }


   handlePasswordChange(e, validationFun) {
      const target = e.target;
      const inputName = target.name;        
      const inputValue = target.value; 
      this.setState({
         password : {
            ...this.state.password,
            [inputName]: {
               value: inputValue
            }
         }
      });
   }

   handleProfileSubmit(event) {
      event.preventDefault();
  
      // if(this.isFormInvalid()){
      //    return;
      // }

      const profileRequest = {
          firstname: this.state.profile.firstname.value,
          lastname: this.state.profile.lastname.value,
          phone: this.state.profile.phone.value,
      };
      console.log("singup ", profileRequest)
      updateProfile(profileRequest)
      .then(response => {


         console.log("reponse ", response);
         this.props.currentUser.firstname = this.state.profile.firstname.value;
         this.props.currentUser.lastname = this.state.profile.lastname.value;
         this.props.currentUser.phone = this.state.profile.phone.value;

         this.openModal();
      }).catch(error => {
         console.log("error ", error);
      });
   }


   handleEmailSubmit(event) {
      event.preventDefault();
  
      // if(this.isFormInvalid()){
      //    return;
      // }

      const EmailRequest = {
         password: this.state.email.password.value,
         email: this.state.email.newEmail.value
      };

      updateEmail(EmailRequest)
      .then(response => {


         console.log("reponse ", response);

         this.props.currentUser.email = EmailRequest.email; 
         this.openModalEmail();
      }).catch(error => {
         console.log("error ", error);
      });
   }

   handlePasswordSubmit(event) {
      event.preventDefault();
  
      // if(this.isFormInvalid()){
      //    return;
      // }

      const passwordRequest = {
         password: this.state.password.newPassword.value,
         oldPassword: this.state.password.oldPassword.value
      };

      updatePassword(passwordRequest)
      .then(response => {


         console.log("reponse ", response);

         this.openModalPassword();
      }).catch(error => {
         console.log("error ", error);
      });
   }


   isFormInvalid() {
      return !(this.state.profile.firstname.validateStatus === 'success' &&
          this.state.profile.lastname.validateStatus === 'success' &&
          this.state.profile.phone.validateStatus === 'success'
      );
  }

   render() {

      const currentUser = this.props.currentUser;

      if(currentUser == null){
         return(<Spinner />)
      }

      return (
         <Fragment>
            <Row>
               <Col xs="6" id="user-profile">
                  <Card className="">
                     <Row className="media profil-cover-details">
                        <Col xs="12">
                           <div className="align-self-center mt-3 ml-3 halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    src={avatarm8}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>
                     </Row>
                     <div className="profile-section">
                        <Row>


                           <Col lg="12" md="12">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item text-center">
                                 <b className=" font-weight-normal">{currentUser.firstname} {currentUser.lastname}</b>
                                 </li>
                                 <li className="list-group-item justify-content-between d-flex align-items-center">
                                 {currentUser.email}
                                    <span className="badge badge-default badge-pill">
                                    <Mail size={24} />
                                    </span>
                                 </li>
                                 {(currentUser.phone)?(
                                 <li className="list-group-item justify-content-between d-flex align-items-center">
                                 {currentUser.phone}
                                    <span className="badge badge-default badge-pill">
                                    <Phone size={24} />
                                    </span>
                                 </li>):
                                 (<li className="list-group-item justify-content-between d-flex align-items-center">

                                    <a onClick={this.openModal} color="cyan my-1 rounded text-left" className="btn-sm btn-sm-light">
                                       Compléter mon profil
                                    </a>
                                    <span className="badge badge-default badge-pill">
                                    <Phone size={24} />
                                    </span>
                                 </li>)
                                 }

                                 <li className="list-group-item d-flex justify-content-end bg-light">
                                    <Button onClick={this.openModal} color="secondary" className="shadow-z-2 my-1 rounded btn-sm">
                                    Editez mon profil
                                    </Button>
                                    <Modal
                                       isOpen={this.state.modalEditProfile}
                                       toggle={this.toggle}
                                       className={this.props.className}
                                    >
                                       <ModalHeader toggle={this.openModal}>Editez mon profil</ModalHeader>
                                       <Form onSubmit={this.handleProfileSubmit} className="pt-2">
                                       <ModalBody>
                                       
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="firstname"
                                                   autoComplete="off"
                                                   onChange={(event) => this.handleProfileChange(event, this.validateName)}
                                                   id="inputName"
                                                   defaultValue={this.props.currentUser.firstname || ''}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="lastname"
                                                   autoComplete="off"
                                                   id="inputName"
                                                   onChange={(event) => this.handleProfileChange(event, this.validateName)}
                                                   defaultValue={this.props.currentUser.lastname || ''}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="phone"
                                                   autoComplete="off"
                                                   onChange={this.handleProfileChange}
                                                   defaultValue={this.props.currentUser.phone || ''}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                       
                                       </ModalBody>
                                       <ModalFooter>
                                          <Button color="primary" type="submit">
                                             Enrégistrer
                                          </Button>
                                       </ModalFooter>
                                       </Form>
                                    </Modal>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
               <Col xs="4" id="user-profile">
                  <Card className="">
                     {/* <Row className="media profil-cover-details">
                        <Col xs="12">
                           <div className="align-self-center mt-3 ml-3 halfway-fab text-center">
                              <Settings size={64}
                                 />
                           </div>
                        </Col>
                     </Row> */}
                     <div className="profile-section">
                        <Row>


                           <Col lg="12" md="12">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item justify-content-between d-flex">
                                    <Button outline color="secondary btn-sm my-1 rounded" onClick={this.openModalEmail}>
                                             Changer adresse e-mail
                                    </Button>
                                    <Modal
                                       isOpen={this.state.modalEditEmail}
                                       toggle={this.toggle}
                                       className={this.props.className}
                                    >
                                       <ModalHeader toggle={this.openModalEmail}>Changer mon adresse e-mail</ModalHeader>
                                       <Form onSubmit={this.handleEmailSubmit} className="pt-2">
                                       <ModalBody>
                                       
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="password"
                                                   className="form-control"
                                                   name="password"
                                                   autoComplete="off"
                                                   onChange={(event) => this.handleEmailChange(event, this.validatePassword)}
                                                   placeholder="Mot de passe"
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="newEmail"
                                                   autoComplete="off"
                                                   placeholder="Nouvelle adresse e-mail"
                                                   onChange={(event) => this.handleEmailChange(event, this.validateEmail)}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                       
                                       </ModalBody>
                                       <ModalFooter>
                                          <Button color="primary btn-sm" type="submit">
                                             Enregistrer
                                          </Button>
                                       </ModalFooter>
                                       </Form>
                                    </Modal>
                                    <span className="badge badge-default badge-pill">
                                    <Mail size={34} />
                                    </span>
                                 </li>
                                 <li className="list-group-item justify-content-between d-flex">
                                 <Button outline color="danger btn-sm my-1 rounded" onClick={this.openModalPassword}>
                                          Modifier mot de passe
                                 </Button>
                                 <Modal
                                       isOpen={this.state.modalEditPassword}
                                       toggle={this.toggle}
                                       className={this.props.className}
                                    >
                                       <ModalHeader toggle={this.openModalPassword}>Changer mot de passe</ModalHeader>
                                       <Form onSubmit={this.handlePasswordSubmit} className="pt-2">
                                       <ModalBody>
                                       
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="password"
                                                   className="form-control"
                                                   name="oldPassword"
                                                   autoComplete="off"
                                                   onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                   placeholder="Ancien mot de passe"
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="password"
                                                   className="form-control"
                                                   name="newPassword"
                                                   autoComplete="off"
                                                   placeholder="Nouveau mot de passe"
                                                   onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="password"
                                                   className="form-control"
                                                   name="confirmPassword"
                                                   autoComplete="off"
                                                   placeholder="Retapez mot de passe"
                                                   onChange={(event) => this.handleProfileChange(event, this.validateConfirmPassword)}
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                       
                                       </ModalBody>
                                       <ModalFooter>
                                          <Button color="primary btn-sm" type="submit">
                                             Enregistrer
                                          </Button>
                                       </ModalFooter>
                                       </Form>
                                    </Modal>
                                 <span className="badge badge-default badge-pill">
                                 <Lock className="danger" size={34} />
                                 </span>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
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
      if(this.state.password.newPassword.value !== password) {
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



const mapStateToProps = state => ({
   currentUser: state.currentUser,
})

 
export default connect(
   mapStateToProps,
   null
)(UserProfile)