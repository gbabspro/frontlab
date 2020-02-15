import React, { Component, Fragment } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { Edit, Activity, Sliders, PhoneIncoming, Save, PhoneForwarded, BookOpen, Book } from "react-feather";
import chromLogo from  "../../../assets/img/chrome.png";
import fireFoxLogo from  "../../../assets/img/firefox.png";
import edge from  "../../../assets/img/edge.png";
import safari from  "../../../assets/img/safari.png";
import opera from  "../../../assets/img/opera.png";
import backfront from "../../../assets/img/backfront.jpg";


import logoWordPress from "../../../assets/img/logoWordPress.jpg";
import logoPrestashop from "../../../assets/img/logoPrestashop.png";
import logoShopify from "../../../assets/img/logoShopify.png";
import statitique from "../../../assets/img/state.jpg";
import footerhead from "../../../assets/img/footerhead.png";
import { Link } from "react-router-dom";
class Home extends Component {

    constructor(props) {
      super(props);

      this.state = {
          navBackground:"white",
      }
    }

   render() {

      return (
    <div className="">
            <section className="mb-1" style={{position:"relative", backgroundImage: `url(${backfront})`, backgroundPosition: 'center 0', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    
                <div  className="d-none d-xl-block d-md-block" style={{padding:"200px 50px",background:"linear-gradient(to right,#4f74fe,#70aafb)", maxWidth:"900px"}} >
                    <h3 style={{color:"#fff"}} className="text-left text-bold-500 text-white bg-transparent" style={{fontSize:"50px", lineHeight:"1.3",fontFamily:"Montserrat"}}>
                        Vous cherchez un moyen rapide et facile pour vos clients d'entrer en contact avec vous, <span className="text-bold-600">Bienvenue chez AlloSky</span>
                    </h3>
                    <h5 className="text-left text-white" style={{lineHeight:"1.5", letterSpacing:"", color: "#000", fontWeight:"400"}}>
                        Nous fournissons des solutions CCaaS de téléphonie et de centre de contact basées sur le web pour faire évoluer les entreprises.
                    </h5>
                </div>

                <div  className="d-block d-xl-none .d-md-none " style={{padding:"50px 50px 70px 50px",background:"linear-gradient(to right,#4f74fe,#70aafb)", maxWidth:"900px"}} >
                    <h3 style={{color:"#fff"}} className="text-left text-bold-500 text-white bg-transparent" style={{fontSize:"25px", lineHeight:"1.3",fontFamily:"Montserrat"}}>
                        Vous cherchez un moyen rapide et facile pour vos clients d'entrer en contact avec vous, <span className="text-bold-600">Bienvenue chez AlloSky</span>
                    </h3>
                    <h5 className="text-left text-white" style={{lineHeight:"1.5", letterSpacing:"", color: "#000", fontWeight:"400"}}>
                        Nous fournissons des solutions CCaaS de téléphonie et de centre de contact basées sur le web pour faire évoluer les entreprises.
                    </h5>
                </div>


                <img
                    className="rounded height-auto"
                    src={footerhead}
                    width="100%"
                    style={{position:"absolute", left:"0",bottom:"-7px",width:"100%",height:"70px"}}
                    alt="bg-image04"
                />

            </section>
        
            <section  className="bg-white py-5">
                <div className="container">
                <h3 style={{fontSize:"35px",fontFamily:"Montserrat"}} className="text-center text-bold-600 mb-3">Fonctionnalités AlloSky</h3>
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

                        <Col sm="12" className="text-center mt-5">
                            <div className="d-flex justify-content-center" block>
                                <Link to="/states">
                                    <Button className="text-center my-0 text-bold-600" style={{color:"#fff",boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                        VOIR TOUT
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </section>

            <section  style={{background:"linear-gradient(to right,#4f74fe,#70aafb)"}} className="py-5">
                <div className="container">
                
                    <h3 style={{fontSize:"35px",fontFamily:"Montserrat"}} className="text-center text-bold-500 text-white mb-1">
                        Commencez à utiliser <span className="text-bold-600">AlloSky</span> dès maintenant !
                    </h3>
                    <h3 style={{fontSize:"30px",fontFamily:"Montserrat"}} className="text-center text-bold-400 text-white mb-3">
                        Au lieu d'un simple chat en ligne, vos visiteurs Web peuvent vous appeler directement.
                    </h3>
                    <Row className="mb-3 mt-2">
                        <Col sm="12">

                            <Card className="my-0" style={{background:"none", boxShadow:"none"}}>
                                <CardBody className="p-0">
                                    <div className="d-flex justify-content-center" block>
                                        <Link to="/pages/register">
                                            <Button className="text-center my-0 text-bold-600" style={{color:"#4a8bfc",boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#fff", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                C'EST PARTI !
                                            </Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="p-5" style={{backgroundColor:"#f5fbff"}}>
                <div className="container">
                 <h3 className="text-center text-bold-600 mb-3">Fonctionne très bien sur n'importe quelle plateforme</h3>
                    <Row className="">
                        <Col sm="6" xs="6" md="3" lg="3" className="col-6">
                            <Card style={{borderRadius:"20px"}}>
                                <CardBody className="d-flex justify-content-between">
                            
                                    <div>
                                        <img
                                            className="rounded height-auto"
                                            src={logoWordPress}
                                            style={{alignItem:"left"}}
                                            alt="bg-image04"
                                        />
                                    </div>
                                    <div style={{fontSize:"20px",color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom d-none d-sm-block text-bold-500 mt-2">
                                        WordPress
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xs="6" md="3" lg="3" className="col-6">
                            <Card style={{borderRadius:"20px"}}>
                                <CardBody className="d-flex justify-content-between" style={{}}>
                                    <div>
                                        <img
                                            className="rounded height-auto"
                                            src={logoPrestashop}
                                            style={{alignItem:"left"}}
                                            alt="bg-image04"
                                        />
                                    </div>
                                    <div style={{fontSize:"20px",color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom d-none d-sm-block text-bold-500 mt-2">
                                        Prestashop
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xs="6" md="3" lg="3" className="col-6">
                        <Card style={{borderRadius:"20px"}}>
                                <CardBody className="d-flex justify-content-between" style={{}}>
                                    <div>
                                        <img
                                            className="rounded height-auto"
                                            src={logoShopify}
                                            style={{alignItem:"left",maxHeight:"50px"}}
                                            alt="bg-image04"
                                        />
                                    </div>
                                    <div style={{fontSize:"20px",color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom d-none d-sm-block text-bold-500 mt-2">
                                        Shopify
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm="6" xs="6" md="3" lg="3" className="col-6">
                        <Card style={{borderRadius:"20px"}}>
                                <CardBody className="d-flex justify-content-between" style={{}}>
                                    <div>
                                        <img
                                            className="rounded height-auto"
                                            src={logoWordPress}
                                            style={{alignItem:"left",maxHeight:"50px"}}
                                            alt="bg-image04"
                                        />
                                    </div>
                                    <div style={{fontSize:"20px",color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom d-none d-sm-block text-bold-500 mt-2">
                                        JavaScript
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <p className="text-center mt-3 text-bold-400">Utilisez nos outils prêt à l'emploi pour les plateformes de commerce électronique et les créateurs de sites Web</p>
                </div>
            </section>

            <section className="py-5" style={{backgroundColor:"#f5fbff"}}>
                <div className="container">
                    <Card style={{borderRadius:"20px"}}>
                        <CardBody>
                            <Row>
                                <Col sm="4" className="d-flex justify-content-center">
                                    <div className="d-flex align-items-center" block>

                                        <img
                                            className="height-auto"
                                            src={statitique}
                                            width="100%"
                                            style={{alignItem:"left",maxHeight:"500px"}}
                                            alt="bg-image04"
                                        />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <h3 className="text-center text-bold-600 mb-3"> Statistiques du centre d'appels</h3>
                                    <Row className="mb-3 mt-5"> 
                                        <Col sm="6" style={{fontFamily:"Montserrat"}} className="text-justify text-bold-400 mb-2">
                                            Gardez une trace des indicateurs de performance clés comme le temps d'attente.
                                        </Col>
                                        <Col sm="6" style={{fontFamily:"Montserrat"}} className="text-justify text-bold-400 mb-2">
                                            Obtenez une perspective en temps réel de l'activité de l'équipe afin de pouvoir optimiser la productivité.
                                        </Col>
                                    </Row>

                                    <Row >
                                        <Col sm="6" style={{fontFamily:"Montserrat"}} className="text-justify text-bold-400 mb-2">
                                            Accélérez la formation des employés et améliorez l'assurance qualité en écoutant les appels en direct.
                                        </Col>
                                        <Col sm="6" style={{fontFamily:"Montserrat"}} className="text-justify text-bold-400 mb-2">
                                            Parlez en secret à vos coéquipiers lors d'un appel en direct afin que vous puissiez fournir des conseils en temps opportun.
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12" className="text-center mb-3 mt-5">
                                            <div className="d-flex justify-content-center" block>
                                                
                                                <Button className="text-center my-0 text-bold-600" style={{color:"#fff",boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                    EN SAVOIR PLUS
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </div>
            </section>

            <section className="py-5" style={{background:"linear-gradient(0deg,rgba(245,250,249,.64) 9%,#f5faf9)"}}>
                <div className="container">
                <h3 className="text-center text-bold-600 mb-3">Testez sur les dernieres versions de navigateur web</h3>
                    <Row>
                        <Col sm="12">

                            <Row className="d-flex justify-content-center">
                                <Col sm="2" xs="4" md="2" lg="2" className="">
                                    <Card style={{borderRadius:"50px"}}>
                                        <CardBody className="d-flex justify-content-center">
                                            <img
                                                className="rounded height-auto"
                                                src={chromLogo}
                                                style={{alignItem:"center",borderRadius:"50px",maxWidth:"200px"}}
                                                width="100%"
                                                alt="bg-image04"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="2" xs="4" md="2" lg="2" className="">
                                    <Card style={{borderRadius:"50px"}}>
                                        <CardBody className="d-flex justify-content-center" style={{}}>
                                            <img
                                                className="rounded height-auto"
                                                src={fireFoxLogo}
                                                width="100%"
                                                style={{alignItem:"center",maxWidth:"200px"}}
                                                alt="bg-image04"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="2" xs="4" md="2" lg="2" className="">
                                <Card style={{borderRadius:"50px"}}>
                                        <CardBody className="d-flex justify-content-center" style={{}}>
                                            <img
                                                className="rounded height-auto"
                                                src={edge}
                                                width="100%"
                                                style={{alignItem:"center",maxWidth:"200px"}}
                                                alt="bg-image04"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="2" xs="4" md="2" lg="2" className="">
                                    <Card style={{borderRadius:"50px"}}>
                                        <CardBody className="d-flex justify-content-center" style={{}}>
                                            <img
                                                className="rounded height-auto"
                                                src={safari}
                                                width="100%"
                                                style={{alignItem:"center",maxWidth:"200px"}}
                                                alt="bg-image04"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="2" xs="4" md="2" lg="2" className="">
                                <Card style={{borderRadius:"50px"}}>
                                        <CardBody className="d-flex justify-content-center" style={{}}>
                                            <img
                                                className="rounded height-auto"
                                                src={opera}
                                                width="100%"
                                                style={{alignItem:"center",maxWidth:"200px"}}
                                                alt="bg-image04"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                 
                        </Col>
                    </Row>
                </div>
            </section>
    
</div>


      );
   }
}

export default Home;
