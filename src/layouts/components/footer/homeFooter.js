import React from "react";
import { ShoppingCart, Headphones, MessageSquare, BookOpen, Book, Phone, Mail, Twitter, Facebook, Linkedin } from "react-feather";
import { Card, CardBody, Row, Col, FormGroup, Button, Input} from "reactstrap";
import templateConfig from "../../../templateConfig";
import logoAlloSkyBlanc from "../../../assets/img/logoalloskyblanc.png";
const HomeFooter = props => (
   <footer style={{background:"linear-gradient(to right, rgb(39, 82, 243), rgb(107, 157, 226))"}}>
      <div className="container">
        <Row>
        <Col sm="3" className="mt-3">
        <div>
            <img
                className="rounded height-auto"
                src={logoAlloSkyBlanc}
                width="150px"
                height="auto"
                style={{alignItem:"left"}}
                alt="bg-image04"
            />
        </div>
        </Col>
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
            <Col sm="3">

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
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm="3" className="">

            </Col>
            <Col sm="3">
                <Card style={{borderRight:"7px solid #1da1f2",borderRadius:"50px 00px 100px 50px"}}>
                    <CardBody className="d-flex py-2 justify-content-left">
                        <Twitter style={{color:"#1da1f2"}} className="mr-2" /> Twitter
                    </CardBody>
                </Card>
            </Col>
            <Col sm="3">
                <Card style={{borderRight:"7px solid #1877f2",borderRadius:"50px 00px 100px 50px"}}>
                    <CardBody className="d-flex py-2 justify-content-left">
                        <Facebook style={{color:"#1877f2"}} className="mr-2" /> Facebook
                    </CardBody>
                </Card>
            </Col>
            <Col sm="3">
               <Card style={{borderRight:"7px solid #007bb5",borderRadius:"50px 00px 100px 50px"}}>
                    <CardBody className="d-flex py-2 justify-content-left">
                        <Linkedin style={{color:"#007bb5"}} className="mr-2" /> Linkedin
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
