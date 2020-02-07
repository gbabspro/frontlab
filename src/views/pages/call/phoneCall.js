import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip, CardTitle, Row, Col, Table, Button, CardHeader, CardFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import {ChevronDown, Globe, Disc, AlertTriangle, Phone, BarChart, User
 } from "react-feather";
 import { connect } from 'react-redux';
 import { Bell, BellOff, Edit, Mic, Headphones, PhoneIncoming, PhoneCall as PhoneCallIcon } from "react-feather";
 import { Redirect } from 'react-router-dom';
 import verto from "../verto/verto";
import {verto_params, verto_callbacks} from "./verto";
import { operatorLogin, operatorLogOut } from "../../../utility/APIutils";

class PhoneCall extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dropdownOpen: false,
        micErrorModal: false,
        activeTab: "1"
      }; 
      this.toggleMicError = this.toggleMicError.bind(this); 
      this.toggleTab = this.toggleTab.bind(this);
    }
  
    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    toggleMicError = () => {
        this.setState({
            micErrorModal: !this.state.micErrorModal
        });
    }

    componentDidMount(){
      this.loginUserSip();
    //   verto.checkDevices(true);
       if(this.props.micConfig.hasError){
            this.toggleMicError()
       }
    }

    loginUserSip () {

        if(this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){

            const params = {
                    login: this.props.currentProject.defaultPersonnel.extension.extension+"@srv.babacargaye.com",
                    passwd: this.props.currentProject.defaultPersonnel.extension.sipPassword,
                    socketUrl: "wss://srv.babacargaye.com:8082",
                    tag: "webcam",
                    ringFile: "/assets/sounds/bell_ring2.mp3",
                    iceServers: [
                        // { url: 'stun:[YOUR_STUN_SERVER]',}
                    ],
                    deviceParams: {
                        useMic: false,
                        useSpeak: false
                    }
                }

                verto.connect(params);
                verto.login();
      
        }
    }

    takeCall = () =>  {
        verto.dialog.answer();
    }
  
    hangupCall = () => {
        verto.dialog.hangup();
    }
    
    toggle = () => {
        this.setState(prevState => ({
           dropdownOpen: !prevState.dropdownOpen
        }));
    }

    logOut = () => {

        operatorLogOut(this.props.currentProject.domaine, this.props.currentProject.defaultPersonnel.extension.extension)
        .then(response => {
  
            console.log("error", response);

        }).catch(error => {
              console.log("error", error);
        });

    }

    logIn = () => {
        console.log("loging...");
        operatorLogin(this.props.currentProject.domaine,this.props.currentProject.defaultPersonnel.extension.extension)
        .then(response => {
  
            console.log("error", response);

        }).catch(error => {
              console.log("error", error);
        });
        
    }

   render() {

        if(this.props.currentProject.typeService == "SERVICE_CHAT"){
            return <Redirect to='/pages/live-chat' />
        }
      return (
            <Fragment>
                {/* <ContentHeader className="pl-1">
                <span style={{fontSize:"14px"}}><Users size={22} className="" />  Opérateurs</span> </ContentHeader> */}
                <Row>
                    <Col className="col-sm-8 col-xs-8 col-md-6 col-lg-6">
                        <Card style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", minHeight: "500px",}} className="pr-0">
                            <CardHeader >
                                <Row>
                                    <Col className="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.activeTab === "1"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleTab("1");
                                                    }}
                                                >
                                                    <div> 
                                                        <Phone /> 
                                                    </div> 
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.activeTab === "2"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleTab("2");
                                                    }}
                                                >
                                                    <BarChart /> 
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col className="col-sm-4 col-xs-12 col-md-4 col-lg-4">
                                        <div className="d-flex justify-content-end">
                                            {/* <Button style={{fontSize:"13px", padding: "0 8px", lineHeight: "1.5", borderRadius: "4px", minWidth: "60px", height: "28px"}} className="gradient-bloody-mary px-1 mb-0">
                                                Hors ligne <ChevronDown size={14} />
                                            </Button>
                                            {" "} */}
                                            <Button style={{fontSize:"13px", padding: "0 8px", lineHeight: "1.5", borderRadius: "4px", minWidth: "60px", height: "28px"}} className="gradient-green-teal px-1 mb-0">
                                                En ligne <ChevronDown size={14} />
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>


                            </CardHeader>               
                            <CardBody>

                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <div className="d-flex justify-content-center">
                                            <div className="d-flex align-self-center">
                                                {
                                                    (this.props.call_state == "")?
                                                        (<Phone style={{color: "#46485563"}} size={150} />):
                                                    (this.props.call_state == "ringing")?
                                                    (<div>
                                                        <PhoneIncoming style={{color: "#fd480091"}} size={150} />
                                                    </div>):
                                                    (this.props.call_state == "destroy")?
                                                        (<Bell style={{color: "#46485563"}} size={150} />):
                                                    (this.props.call_state == "active")?
                                                        (<PhoneCallIcon style={{color: "rgba(21, 181, 26, 0.64)"}} size={150} />):
                                                    ""
                                                }
                                            </div> 
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">

                                    </TabPane>
                                </TabContent> 
                            </CardBody>
                        </Card>
                    </Col>
                    {/* <Col className="pl-0 col-sm-4 col-md-3 col-lg-3 col-xs-4">
                    <Card style={{background: "#262f3c", boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", minHeight: "500px",}} className="">                  
                            <CardBody>
                                <Dropdown isOpen={this.state.dropdownOpen} className="px-3" toggle={this.toggle}>
                    
                                    <DropdownToggle className="text-left mb-0" style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,0.302)", color:"#60848c", background: "#3c485b", width:"100%"}}>
                                    <div>
                                    <Disc color="#d84804" size={18} className="mr-2" />  
                                    {
                                        (this.props.status)?"En ligne":"Hors ligne"
                                        
                                    }
                                    <ChevronDown size={18} className="ml-3 pull-right mt-1" />  
                                    </div>

                                    </DropdownToggle>
                                    <DropdownMenu style={{width: "250px"}}>
                                        <DropdownItem onClick={() => {this.logIn()}} className="px-2">
                                            Se connecter
                                        </DropdownItem> 
                                        <DropdownItem onClick={() => {this.logOut()}} className="px-2">
                                            Se déconnecter
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </CardBody>
                        </Card>
                    </Col> */}
                </Row>
            <audio id="ringer" autoPlay="autoplay"/>
			<audio id="webcam" className="webcam" autoPlay="autoplay"/>
            <Modal
               isOpen={this.state.micErrorModal}
               toggle={this.toggleMicError}
               backdrop="static"
            >
               <ModalHeader toggle={this.toggleMicError}>Configuration requise</ModalHeader>
               <ModalBody className="text-center">
               <AlertTriangle className="text-warning" size={55} /><br />
               <span className="mt-2">Votre micro est introuvable, merci de vérifier si votre machine dispose d'un microphone intégré</span>
               </ModalBody>
               <ModalFooter>
                  <Button color="danger" onClick={this.toggleMicError}> 
                     Fermer
                  </Button>
               </ModalFooter>
            </Modal>
        </Fragment>
      );
   }
}

 const mapStateToProps = state => ({
    currentProject: state.currentProject,
    call_state: state.call_state,
    micConfig: state.micConfig,
    currentUser: state.currentUser,
    status: state.operatorStatus
 })
 
  
 export default connect(
    mapStateToProps,
    null
 )(PhoneCall)