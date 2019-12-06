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
   Button
} from "reactstrap";
import { UncontrolledTooltip } from "reactstrap";
import {
   User,
   Mic,
   Headphones,
   PhoneOff,
   PhoneCall,
   Phone
} from "react-feather";
import { connect } from 'react-redux'
import Spinner from "../../../components/spinner/spinner";
import verto from "../verto/verto";
import {verto_params, verto_callbacks} from "./verto";


class CallInterface extends Component {

   constructor(props) {
      super(props);
      this.state = {
         loading: true
      }

      this.takeCall = this.takeCall.bind(this);
   }

   handleError(error) {

   }

   loginCenter(){
		verto.newCall({
			destination_number: "400",
			caller_id_name: "center",
			caller_id_number: "1008",
			useVideo: false,
			useAudio: true,
			useCamera: false,
			useMic: true,
			useSpeak: true,
			useStereo: true,
			outgoingBandwidth: 'default',
			incomingBandwidth: 'default',
			deviceParams: {
				useMic: true,
				useSpeak: true,
				useCamera: false
			}
		});
   }


   componentDidMount(){

      console.log("this.props ", this.props)
      this.loginUserSip();
      verto.checkDevices(true);
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

   
   render() {

      if(this.loading == true){
         return(<Spinner />);
     }

      return (
         <div className="container-fluid gradient-deep-orange-orange">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="text-center width-600">
                  <CardHeader className="bg-light p-2" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} >   

                     <Row className="">
                        <Col xs="8" className="">
                        </Col>
                        <Col xs="4" className="">
                           <UncontrolledDropdown style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="">
                              <DropdownToggle style={{borderRadius: '5px'}} className="rounded bg-white" nav>
                                 <User size={16} className="mr-1" />
                                 <span className="font-small-5 .font-medium-2 font-weight-normal ml-1 text-black">
                                    Fatou Tall
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
                     
                        {(this.props.call_state == "")?
                           (<CardBody>
                              <div className="text-center font-weight-light">
                              <PhoneOff size={100} color="grey" className="text-bold-300" />
                              </div>
                           </CardBody>):

                           ((this.props.call_state == "ringing")?
                           
                           (<CardBody style={{background: "orange"}}>
                              <div className="text-left">
                                 <div className="text-left">
                                    <PhoneCall size={100} color="white" />
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
                              <PhoneOff size={100} color="grey" className="text-bold-300" />
                              </div>
                           </CardBody>):

                           ((this.props.call_state == "active")?
                           (<CardBody style={{background: "#20c997"}}>
                              <div className="text-center">
                                 <div className="text-left">
                                     <Phone size={100} color="white" />
                                 </div>
                                 <div className="text-right">
                                    <Button onClick={this.hangupCall} color="white" style={{color: "white", borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded bg-red mr-1 mb-0" >
                                       Terminer
                                    </Button>
                                 </div>
                              </div>
                           </CardBody>):
                           
                           "")))
                        }
                     
                     <CardFooter className="bg-light">
                        <Row className="">
                           <Col xs="8" className="d-flex flex-row">
                              {(this.props.micConfig.has_error) ? (
                                 <div>
                                    <Button id="micError" onClick={this.refresh} color="red" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded bg-white mr-1 mb-0" >
                                       <Mic size={16} color="red"  />
                                    </Button>
                                    <UncontrolledTooltip
                                       placement="right"
                                       target="micError"
                                    >
                                       L'accès au micro est désactivé, merci de l'activer en haut à droite puis cliquer sur ce bouton
                                    </UncontrolledTooltip>
                                 </div>):
                                 ( <Button id="mic" onClick={this.refresh} color="green" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded bg-white mr-1 mb-0" >
                                 <Mic size={16} color="green"  />
                              </Button>)
                              }

                              
                              <Button color="green" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}} className="rounded bg-white mb-0 mr-1 text-black" >
                                 <Headphones size={16} /> 
                              </Button>

                           </Col>
                           <Col xs="4" className="">
                           </Col>
                        </Row>   
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
   call_state: state.call_state
})

export default connect(
   mapStateToProps,
   null
)(CallInterface);

