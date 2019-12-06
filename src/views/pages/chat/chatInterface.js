// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Row,
   Col,
   Card,   
   CardBody,
   CardFooter,
   CardHeader,
   Button,
   Input
} from "reactstrap";
import { UncontrolledTooltip } from "reactstrap";
import {
   User,
   Smile,
   Headphones,
   Coffee,
   Bell,
   Phone
} from "react-feather";
import { connect } from 'react-redux'
import Spinner from "../../../components/spinner/spinner";
import verto from "../verto/verto";
import {verto_params, verto_callbacks} from "./verto";
import {sendMsg} from "../../../redux/actions/chat/chatActions"


class ChatInterface extends Component {

   constructor(props) {
      super(props);
      this.state = {  
         msg: ""
      }
      this.takeCall = this.takeCall.bind(this);;
   }

   handleError(error) {

   }


   componentDidMount(){

      console.log("this.props ", this.props)
      this.loginUserSip();
   }

   loginUserSip () {

		console.log("verto_params() ", verto_params())

		verto.connect(verto_params());
		// verto.login();
   }
   
   takeCall (){
      verto.dialog.answer();
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

      if(this.loading == true){
         return(<Spinner />);
     }

      return (
         <div className="container-fluid gradient-deep-orange-orange">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="text-center width-600">
                  <CardHeader className="bg-white p-2" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} >   

                     <Row className="">
                        <Col xs="8" className="">
                        </Col>
                        <Col xs="4" className="">
                           <UncontrolledDropdown style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="">
                              <DropdownToggle style={{borderRadius: '5px'}} className="rounded bg-white" nav>
                                 <User size={16} className="mr-1" />
                                 <span className="font-small-5 .font-medium-2 font-weight-normal ml-1 text-black">
                                    Fabi Tall
                                 </span>
                              </DropdownToggle>
                              <DropdownMenu right>

                                 <Link to="/pages/user-profile" className="p-0">
                                    <DropdownItem>
                                       Déconnecté
                                    </DropdownItem>
                                 </Link>
                              </DropdownMenu>
                           </UncontrolledDropdown>    
                        </Col>
                     </Row>         

                     </CardHeader>

                     {(this.props.call_state == "active")?
                           (<CardBody style={{height: "590px", maxHeight: "400px", overflow: "auto", background: "#e0e0de"}} className="d-flex p-0 align-items-end">
                                {/* <div className="text-left">
                                    <Coffee size={100} color="grey" className="text-bold-300" />
                                </div>
                                <div className="text-right">
                                    En attente de conversation
                                </div> */}
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

                           </CardBody>):

                           ((this.props.call_state == "ringing")?
                           
                           (<CardBody style={{background: "orange"}}>
                              <div className="text-left">
                                 <div className="text-left">
                                    <Bell size={100} color="white" />
                                 </div>
                                 <div className="text-right">
                                    <Button onClick={this.takeCall} color="red" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded bg-white mr-1 mb-0" >
                                       Répondre
                                    </Button>
                                 </div>
                              </div>
                           </CardBody>):
                           
                           ((this.props.call_state == "destroy")?
                           (<CardBody>
                              <div className="text-center">
                              <Coffee size={100} color="grey" className="text-bold-300" />
                              </div>
                           </CardBody>):

                           ((this.props.call_state == "")?
                           (<CardBody>
                              <div className="text-center">
                              <Coffee size={100} color="grey" className="text-bold-300" />
                              </div>
                           </CardBody>):
                           
                           "")
                           
                           ))
                        }
                     
                     <CardFooter className="bg-white">
                        <Row className="">
                            <fieldset className="col-lg-10 col-8 m-0"> 
                                <Input 
                                    type="text" 
                                    className="form-control" 
                                    id="iconLeft4" 
                                    placeholder="Entrer votre message" 
                                    onChange={this.handleChatMsgChange}
                                    value={this.state.msg} 
                                />
                            </fieldset>
                            <fieldset className="form-group position-relative has-icon-left col-lg-2 col-4 m-0">
                                <button onClick={this.handleSendMsg} style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}}  type="button" className="btn rounded bg-white mb-0 btn-raised" >
                                    <i className="fa fa-paper-plane-o hidden-lg-up"></i>
                                </button>
                            </fieldset>
                        </Row>   
                        <audio id="ringer" autoPlay="autoplay"/>
			               <audio id="webcam" className="webcam" autoPlay="autoplay"/>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
            <audio id="ringer" autoPlay="autoplay"/>
			   <audio id="webcam" className="webcam" autoPlay="autoplay"/>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   micConfig: state.micConfig,
   call_state: state.call_state,
   chatsMessages: state.chatState
})

const mapDispatchToProps = dispatch => {
   return {
     // dispatching plain actions
     sendMsg: (message) => dispatch(sendMsg(message)),
   //   decrement: () => dispatch({ type: 'DECREMENT' }),

   }
 }

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ChatInterface);

