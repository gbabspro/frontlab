import React, { Component} from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import logoWordPress from "../../../assets/img/logoWordPress.jpg";
import logoPrestashop from "../../../assets/img/logoPrestashop.png";
import logoShopify from "../../../assets/img/logoShopify.png";
import statitique from "../../../assets/img/state.jpg";
import footerhead from "../../../assets/img/footerhead.png";
import stateimg from "../../../assets/img/stateimg.png";
import backgroundhead from "../../../assets/img/background.gif";
import { Edit, Activity, Sliders, PhoneIncoming, Save, PhoneForwarded } from "react-feather";
class AlloSkyState extends Component {

    constructor(props) {
      super(props);
    }

   render() {

      return (
        <div className="">
            <section className="bg-white" >
                <div className="container bg-white">
                    <Row className="bg-white">
                        <Col sm="6" md="6" className="d-flex align-items-center">
                            <div className="">
                                <h3 style={{fontSize:"30px",fontFamily:"Montserrat"}} className="text-center text-bold-600 text-black mb-2">
                                    Des fonctionnalités conçues pour des conversations de qualité.
                                </h3>
                                <h3 style={{fontSize:"23px",fontFamily:"Montserrat"}} className="text-center text-bold-400 text-black mb-3">
                                        Liste des fonctionnalités disponibles sur la plateforme AlloSky.
                                </h3>
                            </div>
                        </Col>
                        <Col sm="6" md="6">
                            <img
                                className="height-auto"
                                src={stateimg}
                                style={{maxWidth:"100%"}}
                                width="100%"
                            />
                        </Col>
                    </Row>
                </div>
            </section>
            <section  className="bg-white pt-3 pb-5">
                <div className="container">
                    <Row>
                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody style={{}} className="d-flex justify-content-center">
                                        <Edit size={120} style={{color: "#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                Simplifiez la communication
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Personnalisez l'apparence du widget et offrez une expérience inoubliable.
                            </div>
                        </Col>

                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody className="d-flex justify-content-center">
                                        <Activity size={120} style={{color:"#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                Tout superviser
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Le gestionnaire de centres d'appels vous fournit toutes les informations dont vous avez besoin.
                            </div>
                        </Col>

                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody className="d-flex justify-content-center">
                                        <Sliders size={120} style={{color:"#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                Modifications en temps réel
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Basculez vos paramètres à tout moment, y compris en ajoutant de nouveaux utilisateurs en un seul clic.
                            </div>
                        </Col>

                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody className="d-flex justify-content-center">
                                        <PhoneIncoming size={120} style={{color:"#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                File d'attente des appels
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Possibilité aux appelants entrants de rester en attente jusqu'à ce qu'un de vos collaborateurs soit disponible.
                            </div>
                        </Col>

                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody className="d-flex justify-content-center">
                                        <Save size={120} style={{color:"#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                Enregistrement d'appel
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Examinez les enregistrements d'appels pour aider à confirmer les détails, contrôler la qualité et guider les sessions de formation.
                            </div>
                        </Col>

                        <Col sm="4" className="text-center">
                           <div style={{padding:"30px 50px"}}>
                                <Card style={{borderRadius:"100px"}} className="">
                                    <CardBody className="d-flex justify-content-center">
                                        <PhoneForwarded size={120} style={{color:"#4f74fe"}} />
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="text-center px-2 text-bold-600 mb-3" style={{fontFamily:"Montserrat", fontSize:"21px"}}>
                                Routage basé sur les compétences
                            </div>
                            <div className="text-center px-3 text-bold-400" style={{fontFamily:"Montserrat",fontSize:"16px"}}>
                                Acheminez les appels vers vos collaborateurs regroupés par spécialité linguistique ou technique.
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </section>
        </div>
      );
   }
}

export default AlloSkyState;
