import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip, CardTitle, Row, Col, Table, Button, CardHeader, CardFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import {ChevronDown, Globe, Disc, AlertTriangle, Phone, BarChart, User, Target, PhoneForwarded, PhoneOff
 } from "react-feather";
 import { connect } from 'react-redux';
 import { Bell, BellOff, Edit, Mic, Headphones, PhoneIncoming, PhoneCall as PhoneCallIcon } from "react-feather";
 import { Redirect } from 'react-router-dom';
 import verto from "../verto/verto";
import {verto_params, verto_callbacks} from "./verto";
import { operatorLogin, operatorLogOut } from "../../../utility/APIutils";
import SalesPerVisitChartCardForTab from "../../../components/cards/salesPerVisitChartCardForTab";
import { setOnLine } from "../../../redux/actions/logstatut/onLineAction";
import { setOffLine } from "../../../redux/actions/logstatut/offLineAction";
import { isLoading } from "../../../redux/actions/logstatut/offLineAction";
import { BounceLoader } from 'react-spinners';
import waitImg from "../../../assets/img/wait.png";

class PhoneCall extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dropdownOpen: false,
        micErrorModal: false,
        dropdownOpen: false,
        activeTab: "1",
        SalesPerVisitData: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            series: [[0, 5, 15, 8, 15]]
        }
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

    toggleDropdown = () => {
        this.setState(prevState => ({
           dropdownOpen: !prevState.dropdownOpen
        }));
     }

    loginUserSip () {

        if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){

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
      
        }else if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_AGENT"){

            const params = {
                login: this.props.currentUser.sipExtension+"@srv.babacargaye.com",
                passwd: this.props.currentUser.sipPassword,
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

        var extension = "";

        if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){
            extension = this.props.currentProject.defaultPersonnel.extension.extension;
        }else if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_AGENT"){
            extension = this.props.currentUser.sipExtension;
        }

        this.props.handleLoadingStatut();
        operatorLogOut(this.props.currentProject.domaine, extension)
        .then(response => {
  
            //console.log("error", response);
            this.props.handleLogOutStatut();
        }).catch(error => {
              //console.log("error", error);
        });

    }

    logIn = () => {

        //console.log("Statut "+this.props.logStatut.statut);
        
        var extension = "";

        if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){
            extension = this.props.currentProject.defaultPersonnel.extension.extension;
        }else if(this.props.currentUser && this.props.currentUser.authorities[0].authority == "ROLE_AGENT"){
            extension = this.props.currentUser.sipExtension;
        }
        this.props.handleLoadingStatut();
        operatorLogin(this.props.currentProject.domaine,extension)
        .then(response => {
  
            //console.log("response", response);
            this.props.handleLoginStatut();
        }).catch(error => {
              //console.log("error", error);
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
                    <Col className="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                        <Card style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", minHeight: "200px",}} className="pr-0">
                            <CardHeader >
                                <Row>
                                    <Col className="col-12">
                                        <Nav tabs className="nav-justified">
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
                                </Row>


                            </CardHeader>               
                            <CardBody className="py-0">

                                <TabContent className="p-0" activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Card>
                                            <CardHeader className="p-0">
                                            <CardTitle className="mb-0 d-flex bd-highlight">
                                                {
                                                    (this.props.call_state == "active")?
                                                    (<div className="pr-2 bd-highlight d-flex justify-content-start">
                                                        <div className="mr-2">
                                                            <Button style={{background: "#009da0"}} size="md" className="rounded-sm border-none nohover" outline>
                                                                <Mic className="" style={{color: "#fff"}} size={22} />
                                                            </Button>
                                                        </div>
                                                        <div className="">
                                                            <Button style={{background: "#009da0"}} size="md" className="rounded-sm border-none nohover" outline>
                                                                <PhoneForwarded className="" style={{color: "#fff"}} size={22} />
                                                            </Button>
                                                        </div>
                                                    </div>):""
                                                }
                                                
                                                {
                                                    (this.props.call_state == "ringing")?
                                                    (<div className="pr-2 bd-highlight">
                                                        <Button onClick={() =>{this.takeCall()}} style={{boxShadow:"0 0 0 0.1rem #09925f"}} size="md" className="bg-success fg-white rounded-sm nohover">
                                                            <Phone className="mr-1" style={{color: "#fff"}} size={20} /> Répondre
                                                        </Button>
                                                    </div>):""
                                                }

                                                {
                                                    (this.props.call_state == "ringing" || this.props.call_state == "active")?
                                                    (<div className="pr-2 bd-highlight">
                                                        <Button onClick={() =>{this.hangupCall()}} style={{boxShadow:"0 0 0 0.1rem #FF586B", color: "#fff"}} size="md" className="bg-danger fg-white rounded-sm nohover" outline >
                                                            <Phone className="mr-1" style={{color: "#fff"}} size={20} /> Rejeter
                                                        </Button>
                                                    </div>):""
                                                }
                                                <div className="ml-auto bd-highlight d-flex justify-content-end">
                                                    <div className="mr-2 mt-1">
                                                        {(this.props.logStatut.loading)?
                                                            (<BounceLoader 			
                                                                className="clip-loader left"
                                                                sizeUnit={"px"}
                                                                size={25}
                                                                color={'#d47615'}
                                                                loading={true} 
                                                        />):""
                                                        }
                                                    </div>
                                                    <Dropdown className="nohover" size="md" isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown  }>
                                                        <DropdownToggle className="mb-0 nohover" style={{boxShadow:"0 0 0 0.1rem rgba(0, 157, 160, 0.25)"}}  outline caret>
                                                            <Target color={(this.props.logStatut.statut=="online")?"#28a745":
                                                            (this.props.logStatut.statut=="offline")?"#d84804":""} size={18} className="mr-1" />
                                                            
                                                            {
                                                                (this.props.logStatut.statut=="online")?"en ligne":
                                                                (this.props.logStatut.statut=="offline")?"hors ligne":""
                                                                
                                                            }
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            {(this.props.logStatut.statut=="offline")?
                                                            (<DropdownItem onClick={() => {this.logIn()}}>en ligne</DropdownItem>):
                                                            (this.props.logStatut.statut=="online")?
                                                            (<DropdownItem onClick={() => {this.logOut()}}>hors ligne</DropdownItem>):
                                                            ""}
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </CardTitle>
                                            </CardHeader>
                                            <CardBody style={{background: (this.props.call_state == "ringing")?"#28a745":"#fff"}} className="py-4 pb-0 d-flex justify-content-center">
                                                <div className="d-flex align-self-end">
                                                        {

                                                            (!this.props.call_state == "ringing")?
                                                            (<div className="call-animation">
                                                                <PhoneIncoming style={{color: "#fff"}} size={70} />
                                                            </div>):
                                                            (this.props.call_state == "destroy" || this.props.call_state == "")?
                                                            (<div className="call-off">
                                                                <PhoneOff style={{color: "#fff"}} size={70} />
                                                            </div>):
                                                            (true)?
                                                                (<PhoneCallIcon style={{color: "rgba(21, 181, 26, 0.64)"}} size={150} />):
                                                            ""
                                                        }
                                                </div>
                                            </CardBody>
                                            <CardFooter style={{borderTop:"0px solid #fff"}} className="pt-2 border-none pb-0 text-center">
                                                {/* <h3 style={{fontSize:"18px"}} className="mb-0 text-bold-500">
                                                    Vous étes en attennte d'appel
                                                </h3> */}
                                            </CardFooter>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="2" className="p-0">
                                        <Row className="row-eq-height">
                                            <Col sm="12" md="12" className="p-0">
                                                {
                                                    (this.state.activeTab === "2")?
                                                    (<SalesPerVisitChartCardForTab style={{ height: "100%" }}
                                                        salesPerVisitData={this.state.SalesPerVisitData}
                                                        salesText="Appels Reçus"
                                                    />):""
                                                }
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent> 
                            </CardBody>
                        </Card>
                    </Col>
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
    status: state.operatorStatus,
    logStatut: state.logSatutReducer
 })

 const mapDispatchToProps = dispatch => ({
    handleLoginStatut: () => dispatch(setOnLine()),
    handleLogOutStatut: () => dispatch(setOffLine()),
    handleLoadingStatut: () => dispatch(isLoading())
 })
 
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(PhoneCall)