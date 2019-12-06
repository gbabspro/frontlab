// import external modules
import React, { Component } from "react";
import {
    Card,
    CardDeck,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody,
    CardFooter,
    Row,
    Col,
    Button
 } from "reactstrap";
 import {
    ShoppingCart,
    AlertCircle
 } from "react-feather";
 import {
    Link
  } from "react-router-dom";
import cardImg01 from "../../../assets/img/photos/apps01.png";
import cardImg02 from "../../../assets/img/photos/apps02.png";
import contact from "../../../assets/img/photos/contact.png";


class Catalogue extends Component {

   constructor(props) {
      super(props);
      this.state = {  
      }
   }

   render() {
      return (
         <div className="container">
            <nav className="navbar navbar-light bg-white">
                <p style={{color: "black"}} className="m-2 text-bold-500 navbar-brand text-center" >
                    Jokko Apps
                </p>
            </nav>

            <div className="row">
                <div className="col-12">
                    <div className="card text-center bg-cyan">
                        <div className="card-body">
                            <p style={{color:"white", fontWeight: "bold"}} className="card-text text-center">List des services</p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <CardDeck>
                    <Card md="12">
                        <CardImg top width="100%" src={cardImg01} alt="Card cap" />
                        <CardBody>
                            <CardTitle className="font-weight-bold">CHAT CENTER</CardTitle>
                            <CardSubtitle>Live chat</CardSubtitle>
                            <CardText>Outils de chat de site Web pour les visiteurs de votre site.</CardText>
                            <CardFooter className="pb-0">
                            <Col md="12">
                                <Link  to="/pages/register" block className="btn btn-secondary btn-block text-muted mb-0 white btnjokko">
                                 <ShoppingCart size={18} color="white" className="mr-2 text-bold-400" /> <span className="text-bold-400">Commander</span>
                               </Link>
                            </Col>              
                            </CardFooter>
                        </CardBody>
                    </Card>
                </CardDeck>
                </div>
                <div className="col">
                <CardDeck>
                  <Card md="12">
                     <CardImg top width="100%" src={cardImg02} alt="Card cap" />
                     <CardBody>
                        <CardTitle className="font-weight-bold">CALL CENTER</CardTitle>
                        <CardSubtitle>VoIP Telephone Services</CardSubtitle>
                        <CardText>Logiciel de centre d'appels basé sur un navigateur.</CardText>
                        <CardFooter className="pb-0">
                           <Col md="12">
                               <Link  to="/pages/register" block className="btn btn-secondary btn-block text-muted mb-0 white btnjokko">
                                 <ShoppingCart size={18} color="white" className="mr-2 text-bold-400" /> <span className="text-bold-400">Commander</span>
                               </Link>
                           </Col>              
                        </CardFooter>
                     </CardBody>
                  </Card>
               </CardDeck>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card text-center bg-cyan">
                    <CardImg top width="100%" src={contact} alt="Card cap" />
                    </div>  
                </div>
            </div>


         </div>
      );
   }
}


export default Catalogue;

