import React, { Component, Fragment } from "react";
import { Card, CardBody, UncontrolledTooltip, CardTitle, Row, Col, Table, Button, CardHeader, CardFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import {ChevronDown, Globe
 } from "react-feather";
 import { connect } from 'react-redux';
 import { Bell, BellOff, Edit, Mic, Headphones, PhoneIncoming, PhoneCall as PhoneCallIcon } from "react-feather";
 import { Redirect } from 'react-router-dom';
 import verto from "../verto/verto";
import {verto_params, verto_callbacks} from "./verto";

class PhoneCall extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount(){
      this.loginUserSip();
      verto.checkDevices(true);
    }

    loginUserSip () {

		console.log("verto_params() ", verto_params())

		verto.connect(verto_params());
		// verto.login();
    }

    takeCall = () =>  {
        verto.dialog.answer();
    }
  
    hangupCall = () => {
        verto.dialog.hangup();
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
                <Col sm="8" className="pr-0">
                    <Card style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", minHeight: "500px",}} className="pr-0">                  
                        <CardHeader className="bg-white p-2" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} >   

                            <Row className="">
                                <Col sm="8" className="">
                                    {(this.props.micConfig.has_error) ? (
                                    <div>
                                        <Button id="micError" onClick={this.refresh} color="red" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded-circle bg-white mr-1 mb-0" >
                                        <Mic size={20} color="red"  />
                                        </Button>
                                        <UncontrolledTooltip
                                        placement="right"
                                        target="micError"
                                        >
                                        L'accès au micro est désactivé, merci de l'activer en haut à droite puis cliquer sur ce bouton
                                        </UncontrolledTooltip>
                                    </div>):
                                    ( <Button id="mic" onClick={this.refresh} style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded-circle bg-white mr-1 mb-0" >
                                        <Mic size={20} color="green"  />
                                      </Button>)
                                    }

                                
                                    <Button color="green" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded-circle bg-white mb-0 mr-1 text-black" >
                                        <Headphones size={20} /> 
                                    </Button>
                                </Col>
                                <Col sm="4" className="">
                                    {
                                        (this.props.call_state == "ringing")?
                                        (<div className="d-flex justify-content-end">
                                            <Button onClick={this.hangupCall} color="white" style={{color: "white", borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="bg-red mr-1 mb-0" >
                                                Décliner
                                            </Button>
                                            <Button onClick={this.takeCall} color="success" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="mb-0" >
                                                Répondre
                                            </Button>
                                        </div>):
                                        (this.props.call_state == "active")?
                                        (<div className="d-flex justify-content-end">
                                            <Button onClick={this.hangupCall} color="white" style={{color: "white", borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="bg-red mr-1 mb-0" >
                                                Terminer
                                            </Button>
                                        </div>):
                                        ""
                                    }

                                </Col>
                            </Row>         

                        </CardHeader>
                        <CardBody className="d-flex justify-content-center">
                            <div className="d-flex  align-self-center">
                                {
                                    (this.props.call_state == "")?
                                    (<Bell style={{color: "#46485563"}} size={150} />):
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
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" className="pl-0">
                   <Card style={{background: "#262f3c", boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", minHeight: "500px",}} className="">                  
                        <CardBody>
                            <Dropdown className="px-3" >
                
                                <DropdownToggle className="text-left mb-0" style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,0.302)", color:"#60848c", background: "#3c485b", width:"100%"}}>
                                <div>
                                <Globe size={18} className="mr-2" />  

                                <ChevronDown size={18} className="ml-3 pull-right mt-1" />  
                                </div>

                                </DropdownToggle>
                                <DropdownMenu style={{width: "250px"}}>
                                    <DropdownItem className="px-2">
                                        Online
                                    </DropdownItem>
                                    <DropdownItem className="px-2">
                                        Offline
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <audio id="ringer" autoPlay="autoplay"/>
			<audio id="webcam" className="webcam" autoPlay="autoplay"/>
        </Fragment>
      );
   }
}

 const mapStateToProps = state => ({
    currentProject: state.currentProject,
    call_state: state.call_state,
    micConfig: state.micConfig
 })
 
  
 export default connect(
    mapStateToProps,
    null
 )(PhoneCall)