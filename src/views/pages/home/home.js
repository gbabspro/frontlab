import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, CardFooter, CardHeader, DropdownToggle, Dropdown,  Table, Row, Col, Button } from "reactstrap";
import { Edit, Activity, Sliders, Mic, Phone, Target,  PhoneIncoming, Save, PhoneForwarded, Check, Book, PhoneCall, UserPlus, X, User, PhoneOff, Play } from "react-feather";
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
import femmecasque from "../../../assets/img/femmecasque.jpg";
import footerhead from "../../../assets/img/footerhead.png";
import { Link } from "react-router-dom";
import MinimalStatistics from "../../../components/cards/minimalStatisticsCard";
import SalesPerVisitChartCard from "../../../components/cards/salesPerVisitChartCard";
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
                    
                <div  className="d-none d-xl-block d-md-block" style={{padding:"200px 40px",background:"linear-gradient(to right,#4f74fe,#70aafb)", maxWidth:"52%"}} >
                    <h3 style={{color:"#fff"}} className="text-left text-bold-500 text-white bg-transparent" style={{fontSize:"38px", lineHeight:"1.3",fontFamily:"Montserrat"}}>
                        <span className="text-bold-600">AlloSky,</span> Web contact center
                    </h3>
                    <h5 className="text-left text-white" style={{lineHeight:"1.5", letterSpacing:"", color: "#000", fontWeight:"400"}}>
                    Notre solution permet à une entreprise de proposer aux visiteurs de son site Web 
                    de pouvoir le contacter via <span className="text-bold-600">appel vocal</span> ou par <span className="text-bold-600">chat.</span> 
                    </h5>
                </div>

                <div  className="d-block d-xl-none .d-md-none " style={{padding:"50px 50px 70px 50px",background:"linear-gradient(to right,#4f74fe,#70aafb)", maxWidth:"900px"}} >
                    <h3 style={{color:"#fff"}} className="text-left text-bold-500 text-white bg-transparent" style={{fontSize:"25px", lineHeight:"1.3",fontFamily:"Montserrat"}}>
                        Vous cherchez un moyen rapide et facile pour vos clients d'entrer en contact avec vous, <span className="text-bold-600">Bienvenue chez AlloSky</span>
                    </h3>
                    <h5 className="text-left text-white" style={{lineHeight:"1.5", letterSpacing:"", color: "#000", fontWeight:"400"}}>
                    Notre solution permet à une entreprise de proposer aux visiteurs de son site Web 
                    de pouvoir le contacter via un appel vocal ou par chat.
                        
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


            <section style={{padding:"120px 0px", backgroundImage: `url(${femmecasque})`, backgroundPosition: 'right', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <Row>
                        <Col sm="8" className="d-flex justify-content-center text-bold-500">
                            <ul className="list-group" style={{fontFamily:"Montserrat",fontSize:"18px"}}>
                                <li style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",borderRight:"0px"}} className="list-group-item my-2">
                                <Check size="30" color="green" className="mr-1" /> Appels gratuits, où que vous soyez dans le monde.</li>
                                <li style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",borderRight:"0px"}} className="list-group-item my-2">
                                <Check size="30" color="green" className="mr-1" /> Augmentent considérablement le taux de satisfaction de vos clients.</li>
                                <li style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",borderRight:"0px"}} className="list-group-item my-2">
                                <Check size="30" color="green" className="mr-1" /> Elimine le besoin d'appels téléphoniques et de courriels.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </section>
        
            <section  className="bg-white py-5">
                <div className="container">
                <h3 style={{fontSize:"32px",fontFamily:"Montserrat"}} className="text-center text-bold-600 mb-3">
                Ces fonctionnalités pourraient vous intéresser
                </h3>
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
                            <div className="d-flex justify-content-center" >
          
                                    <Button className="text-center my-0 text-bold-600" style={{color:"#fff",boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"#4f74fe", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                        VOIR TOUT
                                    </Button>
                                
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </section>

            <section  style={{background:"linear-gradient(to right,#4f74fe,#70aafb)"}} className="py-5">
                <div className="container">
                
                    <h3 style={{fontSize:"30px",fontFamily:"Montserrat"}} className="text-center text-bold-400 text-white mb-3">
                    <span className="text-bold-600">AlloSky</span> convertit les utilisateurs de votre site Web en clients engagés en créant un moyen simple
                    pour vos clients de contacter vos équipes de vente et d'assistance directement sur votre site Web. 
                    </h3>
                    <Row className="mb-3 mt-2">
                        <Col sm="12">

                            <Card className="my-0" style={{background:"none", boxShadow:"none"}}>
                                <CardBody className="p-0">
                                    <div className="d-flex justify-content-center" >
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

            <section className="py-5" style={{backgroundColor:"#f5fbff"}}>
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

                    <Row className="d-flex justify-content-center">
                        <Col sm="8" >
                            <Card id="home-ui" className="bg-transparent" style={{borderRadius:"10px"}}>
                                <CardBody>
                                    <Row >
                                        <Col sm="12" xs="12" md="3" xl="3" lg="3">
                                            <MinimalStatistics
                                                statisticsColor="warning"
                                                style={{fontSize:"3px"}}
                                                statistics="100 %"
                                                text="Qualité"
                                                iconSide="right"
                                                
                                            >
                                                <Activity size={27} strokeWidth="1.3" className="warning" />
                                            </MinimalStatistics>
                                        </Col>

                                        <Col sm="12" xs="12" md="3" xl="3" lg="3">
                                            <MinimalStatistics
                                                statisticsColor="success"
                                                statistics={"5 / 10"}
                                                text="En ligne"
                                                iconSide="right"
                                            >
                                                <UserPlus size={27} strokeWidth="1.3" className="success" />
                                            </MinimalStatistics>
                                        </Col>

                                        <Col sm="12" xs="12" md="3" xl="3" lg="3">
                                            <MinimalStatistics statistics={7} statisticsColor="danger" text="En attente" iconSide="right">
                                                    <PhoneIncoming size={27} strokeWidth="1.3" className="danger" />
                                            </MinimalStatistics>
                                        </Col>

                                        <Col sm="12" xs="12" md="3" xl="3" lg="3">

                                            <MinimalStatistics statistics={5} statisticsColor="info" text="En cours" iconSide="right">
                                                    <PhoneCall size={27} strokeWidth="1.3" className="info" />
                                            </MinimalStatistics>
                                            
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <Row className="row-eq-height">
                                                <Col sm="12" md="12">
                                                    <SalesPerVisitChartCard
                                                        salesPerVisitData={{
                                                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                                                            series: [[0, 5, 15, 8, 15], [0, 3, 5, 2, 8]]
                                                        }}
                                                        
                                                        // cardTitle="Appels reçus sur Appels manqués"
                                                        salesText="Appels Reçus"
                                                        visitText="Appels manqués"
                                                    />
                                                </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                </CardBody>
                            </Card>
                        </Col>  
                        </Row>
                        <Row>
                        {/* <Col sm="4">
                            <Card style={{borderRadius:"10px"}}>
                                <CardHeader className="">
                                <CardTitle className="mb-0 d-flex bd-highlight">
                                    <div className="pr-2 bd-highlight">
                                        <Button size="md" className="bg-info rounded-sm nohover" outline color="28a745">
                                            <Mic className="" style={{color: "#fff"}} size={22} />
                                        </Button>
                                    </div>

                                    <div className="ml-auto bd-highlight">
                                        <Button className="mr-2" style={{background:"#28a745"}} size="md" >
                                            <Phone  className="" style={{color: "#fff"}} size={22} />
                                        </Button>
                                        <Button className="bg-danger" style={{background:"#28a745"}} size="md" >
                                            <PhoneOff  className="" style={{color: "#fff"}} size={22} />
                                        </Button>
                                    </div>
                                </CardTitle>
                                </CardHeader>
                                <CardBody className="pb-5">
                                    <div className="call-animation text-center" style={{borderRadius:"70px", padding: "20px", paddingTop: "30px", background:"#28a745", boxShadow:"0 0 0 0.1rem rgba(0, 157, 160, 0.25)"}}>
                                        
                                        <Target style={{color: "#fff"}} size={60} />  
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{borderRadius:"10px"}}>
                                <CardHeader className="">
                                    <CardTitle className="mb-0 d-flex bd-highlight">
                                        <div className="ml-auto bd-highlight">
                                            <Button size="md" className="bg-info rounded-sm nohover mr-2" color="28a745">
                                                <Mic className="" style={{color: "#fff"}} size={22} />
                                            </Button>
                                            <Button className="bg-danger" style={{background:"#28a745", border: "2px solid #fff"}} size="md" >
                                                <PhoneOff  className="" style={{color: "#fff"}} size={22} />
                                            </Button>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="">
                                    <div style={{background:"#28a745", height: "50%"}} className="py-3">
                                        <div className="div-rounded text-center" style={{borderRadius:"70px", padding: "20px", paddingTop: "30px", background:"#28a745", boxShadow:"0 0 0 0.1rem rgba(0, 157, 160, 0.25)"}}>
                                            <Phone  style={{color: "#fff"}} size={60} />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card className="" style={{borderRadius:"10px", backgroundColor: "#0892ab !important"}}>
                                <CardBody className="">
                                    <Button size="md" className="item-rounded bg-info mb-0 nohover">
                                        <Play  style={{color: "#fff"}} size={30} />
                                    </Button>
                                </CardBody>
                            </Card>
                            <Card style={{borderRadius:"10px"}}>
                                <CardBody className="">
                                    <div className="item-rounded text-center pt-2" style={{backgroundColor:"rgb(14, 79, 158)"}}>
                                        <Play  style={{color: "#fff"}} size={30} />
                                    </div>
                                </CardBody>
                            </Card>
                            <Card style={{borderRadius:"10px"}}>
                                <CardBody className="">
                                    <div className="item-rounded text-center pt-2" style={{backgroundColor:"rgb(14, 79, 158)"}}>
                                        <Play  style={{color: "#fff"}} size={30} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col> */}
                    </Row>
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
