import React from "react";
import { ShoppingCart, Headphones, MessageSquare, BookOpen, Book, Phone, Mail } from "react-feather";
import { Card, CardBody, Row, Col, FormGroup, Button, Input} from "reactstrap";
import templateConfig from "../../../templateConfig";

const HomeFooter = props => (
   <footer style={{background:"linear-gradient(to right, rgb(39, 82, 243), rgb(107, 157, 226))"}}>
      <div className="container">
        <Row>
            <Col sm="3">

                <Card style={{backgroundColor:"transparent"}}>
                    <CardBody>
                        <h6 style={{color: "#a8e4ff", fontWeight:"500"}}>RESSOURCES</h6>
                        <div className="">
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <Book size={14} className="mr-1" /> Blog
                            </p>
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <BookOpen size={14} className="mr-1" /> Documentation
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="3">
                <Card style={{backgroundColor:"transparent"}}>
                    <CardBody>
                    <h6 style={{color: "#a8e4ff", fontWeight:"500"}}>NOS SERVICES</h6>
                        <div className="">
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <MessageSquare size={14} className="mr-1" /> Live chat
                            </p>
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <Headphones size={14} className="mr-1" /> Click to call
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="6">

                <Card style={{backgroundColor:"transparent"}}>
                    <CardBody>
                        <h6 style={{color: "#a8e4ff", fontWeight:"500"}}>CONTACTS</h6>
                        <div className="">
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <Phone size={14} className="mr-1" /> +221 77 380 19 30 
                            </p>
                            <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                <Phone size={14} className="mr-1" /> +221 77 477 58 01 
                            </p>
                        </div>

                    <Row>
                        <h6 className="ml-2" style={{color: "#a8e4ff", fontWeight:"500"}}>ABONNEZ VOUS À LA NEWSLETTER</h6>
                        <Col sm="9" xs="9" md="9" lg="9" className="col-9"> 
                            <FormGroup>
                                <div className="position-relative has-icon-left">
                                    <Input style={{padding:".375rem 45px"}} type="text" id="iconLeft" name="iconLeft" />
                                    <div style={{position: "absolute", top:"0", right:"auto", left:"5px", textAlign:"center", lineHeight:"2.2rem", zIndex:"2", display:"block",width:"2.5rem",height:"2.5rem"}} className="form-control-position">
                                        <Mail size={30} className="info" />
                                    </div>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col sm="3" xs="3" md="3" lg="3" className="col-3">
                            <FormGroup className="mb-0">
                                <Button block type="submit" className="mb-0" style={{color:"#4a8bfc",fontFamily: 'Montserrat', background:"#fff", boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat',borderRadius: "4px",}}>
                                    Valider
                                </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>

         <p className="text-center pt-3 mb-0 text-white">
            © 2020{" "}
            <a
               href="https://www.allosky.net"
               rel="noopener noreferrer"
               target="_blank"
               className="text-white"
            >
               AlloSky{" "}
            </a>
         </p>
      </div>

   </footer>
);

export default HomeFooter;
