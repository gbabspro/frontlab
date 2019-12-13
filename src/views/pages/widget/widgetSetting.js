import React, { Component, Fragment } from "react";
import { Card, CardBody, CardHeader, CardTitle, Row, Col, FormGroup, Button, Input, CardFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
 import { connect } from 'react-redux';
 import imgBack from "../../../assets/img/background.gif";
import { User, Mic, Speaker, Volume2, Delete, X, Phone } from "react-feather";
import phoneCall from "../call/phoneCall";
class WidgetSetting extends Component {

   constructor(props) {
      super(props);

      this.state = {
         toggleView: true
      }
   }


   render() {
      return (
        <Fragment>
           <Row>
                <Col sm="8" className="">
                   <Card>                  
                        <CardBody>
                           <Row>
                              <Col sm="7" className="">
                                 <Card>                  
                                    <CardBody>

                                    </CardBody>
                                 </Card>
                              </Col>

                              <Col sm="5" className="" style={{height:"470px"}}>

                              <div style={{padding: "15px", backgroundImage: `url(${imgBack})`, height:"470px"}} className="">

                              {
                                
                                 (!this.state.toggleView)?(
                                    
                                    <Card className="bg-white m-0" style={{boxShadow: "0 8px 18px 0 rgba(0,18,46,0.16)", height:"100%",width:"100%", borderRadius:"10px"}}>  
                                       <CardHeader className="bg-light px-2 py-3">                    
                                          <Row row className="mr-0 ml-0" >
                                             <Col sm="10" className="d-flex justify-content-end col-md-10 col-xs-10 col-sm-10">
                                             </Col>
                                             <Col sm="2" className="d-flex pr-1 justify-content-end col-md-2 col-xs-2 col-sm-2">
                                                <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} className="p-0 mb-0 bg-transparent">
                                                    <X style={{color:"#343a40"}} />
                                                </Button>
                                                
                                             </Col>
                                          </Row>
                                       </CardHeader>                
                                       <CardBody >
                                          <Row row >
                                          </Row>
                                          

                                       <div className="d-flex justify-content-center col-md-12 col-xs-12 col-sm-12">

                                          <div style={{color: "rgb(23, 162, 184)", background: "rgba(23, 162, 184, 0.22)"}} className="p-5 rounded-circle d-flex align-items-center fg-white">

                                                   <User  style={{color:"#17a2b8", fontWeight: "normale"}} size={90} />

                                          </div>
                                       </div>
                                       
                                          {/* <div style={{position: "relative", height:"50%"}} className="p-2 pt-5 bd-highlight">

                                             <div style={{}} >
                                                <Row check row >
                                                   <Col sm="6" xs="6" className="d-flex justify-content-end">
                                                      <Button className="rounded-circle p-2">
                                                         <Mic />
                                                      </Button>
                                                   </Col>
                                                   <Col sm="6" xs="6" className="d-flex justify-content-start">
                                                      <Button className="rounded-circle p-2">
                                                         <Volume2 />
                                                      </Button>
                                                   </Col>
                                                </Row>
                                             </div>

                                          </div>

                                       </div> */}

                                       </CardBody>
                                       <CardFooter>
                                          <Row row >
                                             <Col sm="12" className="col-md-12 col-xs-12 col-sm-12">
                                                <Button block style={{background: "rgb(221, 28, 90)", color: "rgb(255, 255, 255)", fontSize: "18px", lineHeight: "34px", fontWeight: "400"}} className="btn mb-0 btn-block btn-md">
                                                   Terminer
                                                </Button>
                                             </Col>
                                          </Row>
                                       </CardFooter>
                                    </Card>
                                 
                                 ):(<div className="" style={{position:"absolute", width:"112px", height:"100px", bottom:"12px", display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none", zIndex:"1", right:"12px"}}>
                                    <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} style={{width:"60px", height: "60px", paddingTop: "12px", borderRadius: "30px", pointerEvents: "initial", transform: "translateY(0px)", transition: "none 0s ease 0s", cursor: "pointer", color: "rgb(255, 255, 255)", background: "rgb(10, 128, 94)", justifyContent: "center", position: "relative", outline: "none", willChange: "transform", boxShadow: "rgba(58, 199, 206, 0.5) 0px 4px 24px"}} className="p-0 mb-0">
                                          <Phone style={{color:"#fff"}} />
                                    </Button>
                                 </div>)
                                 
                              }
                              </div>

                              </Col>
                           </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="3" className="">
                   <Card>                  
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
      );
   }
}
  

 const mapStateToProps = state => ({
    currentProject: state.currentProject
 })
  
 export default connect(
    mapStateToProps,
    null
 )(WidgetSetting)