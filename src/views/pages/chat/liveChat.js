import React, { Component, Fragment } from "react";
import { Card, CardBody, CardHeader, CardTitle, Row, Col, Table, Button, Input, CardFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";
import {ChevronDown, Globe
 } from "react-feather";
 import { connect } from 'react-redux';
import { getUserOperators } from "../../../utility/APIutils";
import { LoadOperators } from "../../../redux/actions/operators/operatorsActions";
import { Users, Trash2, Edit, MessageSquare, Coffee, Bell, PhoneIncoming, PhoneCall as PhoneCallIcon  } from "react-feather";
import Toggle from "react-toggle";
import { Redirect } from 'react-router-dom';
import verto from "../verto_chat/verto";
import {verto_params, verto_callbacks} from "./verto";
import {sendMsg} from "../../../redux/actions/chat/chatActions";
class LiveChat extends Component {

    constructor(props) {
      super(props);
      this.state = {  
        msg: ""
     }
     this.takeCall = this.takeCall.bind(this);
    }


    componentDidMount(){

        console.log("this.props ", this.props)
        this.loginUserSip();
     }
  
     loginUserSip () {
  
          
          
          console.log("verto_params() ", verto.options)
          verto.connect(verto_params());
          verto.login();

     }
     
     takeCall (){
        verto.dialog.answerChat();
     }
  
     hangupCall = () => {
        verto.dialog.hangup();
     }

     handleSendMsg = () =>{

        if(this.state.msg==""){
           return;
        }
  
        const msg = {
           to: verto.dialog.params.caller_id_number+"@51.91.120.241",
           body: this.state.msg,
        }
        verto.dialog.message(msg);
        console.log("my message message : ", {from:"1002", ...msg, isMsgExt:false});
        this.props.sendMsg({from:"1002", ...msg, isMsgExt:false});
        this.setState({msg:""});
     }
  
     handleChatMsgChange = (event) =>{
        this.setState({msg: event.target.value});
     }

   render() {
    if(this.props.currentProject.typeService == "SERVICE_CALL"){
        return <Redirect to='/pages/phone-call' />
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
                        
                            
                                {
                                    (this.props.call_state == "")?
                                    (<CardBody className="d-flex justify-content-center">
                                    <div className="d-flex  align-self-center">
                                    <Coffee style={{color: "#46485563"}} size={150} />
                                    </div>
                                    </CardBody>
                                    ):
                                    (this.props.call_state == "ringing")?
                                    (<CardBody className="d-flex justify-content-center">
                                    <div className="d-flex  align-self-center">
                                    <MessageSquare style={{color: "#fd480091"}} size={150} />
                                    </div>
                                    </CardBody>):
                                    (this.props.call_state == "destroy")?
                                    (<CardBody className="d-flex justify-content-center">
                                    <div className="d-flex  align-self-center">
                                    <Coffee style={{color: "#46485563"}} size={150} />
                                    </div>
                                    </CardBody>):
                                    (this.props.call_state == "active")?
                                    (<CardBody style={{height: "404px", maxHeight: "404px", overflow: "auto", background: "#e0e0de"}} className="d-flex p-0 align-items-end">
                                    <Row style={{width: "100%"}} className="mx-0 pb-1">

                                        {
                                           this.props.chatsMessages.map((message, id) => {
                                                return (
                                                (!message.isMsgExt)?                                            
                                                (<fieldset key={id} style={{background: "#e0e0de"}} className="p-0 pr-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                    <span style={{display: "flex"}} className="msg-to text-right ml-2 bg-light px-2 py-1 float-right rounded">
                                                       {message.body}
                                                    </span> 
                                                 </fieldset>)
                                                :(<fieldset key={id} style={{background: "#e0e0de"}} className="p-0 pl-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                    <span style={{display: "flex"}} className="msg-from mr-2 bg-white px-2 py-1 float-left rounded">
                                                       {message.body}
                                                    </span> 
                                                 </fieldset>));
                                            })
                                        }
                                    </Row>
                                    </CardBody>
                                    ):
                                    ""
                                }
                                
                        
                        <CardFooter className="bg-white">
                            <Row className="">
                                <fieldset className="col-lg-10 col-10 m-0"> 
                                    <Input 
                                        type="text" 
                                        className="form-control" 
                                        id="iconLeft4" 
                                        placeholder="Entrer votre message" 
                                        onChange={this.handleChatMsgChange}
                                        value={this.state.msg} 
                                    />
                                </fieldset>
                                <fieldset className="col-lg-2 col-2 m-0 pl-0">
                                    <button onClick={this.handleSendMsg}  style={{boxShadow: "0 0 0 2px rgba(38, 48, 60, 0.21)", borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}}  type="button" className="pull-right btn rounded bg-white mb-0 btn-raised" >
                                        <i className="fa fa-paper-plane-o hidden-lg-up"></i>
                                    </button>
                                </fieldset>
                            </Row>  
                        </CardFooter>
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
    chatsMessages: state.chatState
 })
 
 const mapDispatchToProps = dispatch => {
    return {
      sendMsg: (message) => dispatch(sendMsg(message)),
 
    }
  }
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(LiveChat)