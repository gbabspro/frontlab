// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Collapse,
   Navbar,
   Nav,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Form,
   Button,
   Col,
   Row,
   Input,
   FormGroup,
   Modal,
   ModalHeader, 
   ModalBody, 
   ModalFooter,
   Media,
   CardFooter,
   CardHeader,
   UncontrolledTooltip,
   Card,   
   CardBody,
   CardDeck,
   CardTitle,
   CardSubtitle,
   CustomInput,
   NavItem,
   Tooltip 
} from "reactstrap";
import {
   Menu,
   MoreVertical,
   User,
   LogOut,
   ChevronRight,
   Plus,
   AlertCircle,
   Globe,
   Mail,
   Mic,
   MicOff
} from "react-feather";
import { BounceLoader } from 'react-spinners';
import NavbarSearch from "../../../components/search/Search";
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import {logOut, newService} from "../../../utility/APIutils";
import  { Redirect } from 'react-router-dom';

import {addProject} from "../../../redux/actions/projects/projectsActions";
import { connect } from 'react-redux';
import { setMicError } from "../../../redux/actions/config/micActions";
import verto from "../../../views/pages/verto/verto";

class ThemeNavbar extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
         redirect: false,
         modalNewAgent: false,
         hasError:{
            value: false,
            message: ""
         },
         selectedService: {
            value: ''
          },
          domaine: {
            value: ''
          },
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.isFormInvalid = this.isFormInvalid.bind(this);
      this.toggleTooltip = this.toggleTooltip.bind(this);
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   toggleTooltip = () => {
      this.setState({
         tooltipOpen: !this.state.tooltipOpen
      });
   };

   setLogout = () => {
      logOut();
      this.setState({ redirect: true });
   }

   componentDidMount(){
  
         verto.checkDevices(true)
         .then(response => {
  
            if(response == false){
               this.props.hasMicError();
            }

        }).catch(error => {
              console.log("error", error);
        });
   }

   
   openModalNewAgent = () => {
      this.setState({
          modalNewAgent: !this.state.modalNewAgent
      });
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

   handleSubmit(event) {
      event.preventDefault();
  
      if(this.isFormInvalid()){
         return;
      }
      

      const request = {
          domaine: this.state.domaine.value,
          serviceType: this.state.selectedService.value,
      };


      console.log("request ", request)

      console.log("singup ", request)
      newService(request)
      .then(response => {
         
         console.log("response ", response); 
         this.props.setNewProject(response);
         this.openModalNewAgent();

         this.setState({
            selectedService: {
               value: '',
               validateStatus: '',
               errorMsg: null
             },
             domaine: {
               value: '',
               validateStatus: '',
               errorMsg: null
             },
         })

      }).catch(error => {
         console.log("error ", error)
         this.openModalNewAgent();
      });
  }

   isFormInvalid() {
      return !(
          this.state.domaine.validateStatus === 'success' && 
          this.state.selectedService.validateStatus === 'success'
      );
   }


   render() {

      if (this.state.redirect) {
         return <Redirect to='/pages/login'/>;
      }

      return (
         <Navbar style={{background: "white"}} className="border-bottom navbar navbar-expand-lg navbar-white px-3 bg-faded">
            <div className="container-fluid px-0">
               <div className="navbar-header">

                  <Row>
                     <Col sm="10"  >
                        <Menu
                           size={14}
                           className="navbar-toggle d-lg-none"
                           onClick={this.handleClick.bind(this)}
                           data-toggle="collapse"
                        />

                        {
                           (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
                           (<Form className="navbar-form" role="search">
                              <NavbarSearch />
                           </Form>):
                           ("")
                        }

                        {
                           (this.props.currentUser.roles && this.props.currentUser.roles[0].name == "ROLE_AGENT")?
                           (<div style={{width: "250px"}}>
                              <Globe size={22} className="mr-2" /><span style={{fontSize: "0.95rem", fontWeight: "400", letterSpacing: "0.6px", }} className="">{(this.props.currentProject)?this.props.currentProject.domaine:""}</span>
                           </div>):""
                        }


                        {/* <Moon size={20} color="#333" className="m-2 cursor-pointer"/> */}
                        <MoreVertical
                           className="mt-1 navbar-toggler black no-border float-right"
                           size={50}
                           onClick={this.toggle}
                        />
                     </Col>

                        {
                           (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
                           (<Col sm="2" className=""> 
                           <Button onClick={this.openModalNewAgent} className="mt-0 p-1 bg-light" style={{border: "1px solid #868e96"}}><Plus  color="#868e96" size={25} /></Button>
                           <Modal
                              isOpen={this.state.modalNewAgent}
                              toggle={this.toggle}
                           >
                              <ModalHeader className="text-center" toggle={this.openModalNewAgent}>Ajouter un nouveau Projet</ModalHeader>
                              <Form onSubmit={this.handleSubmit} className="pt-2">
                              <ModalBody className="bg-light">
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
                                                <CardSubtitle className="text-center">Gratuit à vie</CardSubtitle>
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
                                                <CardSubtitle className="text-center">Gratuit en béta</CardSubtitle>
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
   
                              </Row>
                              
                              </ModalBody>
                              <ModalFooter className="d-flex justify-content-center">
                                    <Button type="submit" className="mt-2" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"rgb(30, 131, 172)", width:"200px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                       Enregistrer
                                    </Button>
                              </ModalFooter>
                              </Form>
                           </Modal>
                        </Col>):""
                        }


                    
                  </Row>
                  
               </div>

                  

               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>

                        <NavItem className="pr-1 mr-3">
                           {
                              (this.props.micConfig.hasError==true)?
                              (<div className="nav-link">
                                 <Button color="primary" style={{fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "3px", minWidth: "60px", height: "22px"}} className="mr-2 px-1 mb-0">
                                    Actualiser
                                 </Button>
                                 <MicOff id={"mic-off"} size={22} color="red" className="text-dark notification-danger animate-shake" />
                                 <Tooltip
                                    // placement={this.props.item.placement}
                                    isOpen={this.state.tooltipOpen}
                                    target={"mic-off"}
                                    toggle={this.toggleTooltip}
                                 >
                                    votre micro est introuvable
                                 </Tooltip>
                              </div>):""
                           }
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                    {this.props.currentUser ? this.props.currentUser.firstname+' '+
                                    this.props.currentUser.lastname  : ''}
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />
                              <Link to="/pages/user-profile" className="p-0">
                                 <DropdownItem>
                                    <User size={16} color="white" style={{color: "white"}} className="mr-1" /> Mon Profile
                                 </DropdownItem>
                              </Link>
                              <DropdownItem divider />
                              <Link to="/logout" className="danger p-0">
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Déconnexion
                                 </DropdownItem>
                              </Link>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
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
}

const mapStateToProps = state => ({
   currentUser: state.currentUser,
   currentProject: state.currentProject,
   micConfig: state.micConfig
})

const mapDispatchToProps = dispatch => ({
   setNewProject: (project) => dispatch(addProject(project)),
   hasMicError: () => dispatch(setMicError())
})
 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ThemeNavbar)