import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Button, FormGroup, Input, CardFooter, ListGroup, ListGroupItem } from "reactstrap";
import { ArrowRight, Search, Mail, Phone, Headphones, MessageSquare, Check, CheckCircle, HelpCircle } from "react-feather";
import chromLogo from  "../../../assets/img/chrome.png";
import fireFoxLogo from  "../../../assets/img/firefox.png";
import edge from  "../../../assets/img/edge.jpg";
import safari from  "../../../assets/img/safari.png";
import opera from  "../../../assets/img/opera.png";
import idee from  "../../../assets/img/idee.PNG";
import friend from  "../../../assets/img/friend.png";
import world from  "../../../assets/img/world.PNG";
import backfont from "../../../assets/img/backfont.jpg";
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
            <nav style={{background:this.state.navBackground, border:"1px solid #cfcfcf", boxShadow:"0 2px 2px rgba(0,0,60,.08)", zIndex:"999"}}>
                <div className="container" style={{backgroundColor:this.state.navBackground}}>
                    <Row>
                        <Col sm="6">
                            <Card style={{boxShadow:"none", backgroundColor:this.state.navBackground}}>
                                <CardBody className="py-1">

                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" className="px-0">
                            <Card style={{boxShadow:"none", backgroundColor:this.state.navBackground}}>
                                <CardBody className="py-1 d-flex justify-content-end">

                                    <FormGroup className="d-flex justify-content-center mb-0" block>
                                        <Link to="/pages/login">
                                            <Button className="btnGoToApp px-4 py-1 text-center my-0 text-bold-600" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)", display: 'flex', alignItem:"center", borderRadius: "6px", justifyContent: 'center',}}>
                                                Connexion
                                            </Button>
                                        </Link>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </nav>


            <section className="mb-1" style={{paddingTop:"120px", paddingBottom:"120px", boxShadow:"0 2px 2px rgba(0,0,60,.08)", backgroundImage: `url(${backfont})`, backgroundPosition: 'right', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="container" >
                    <Row >
                        <Col sm="6" className="">
                            <h3 className="text-left bg-transparent" style={{fontSize:"40px", lineHeight:"1.3", color: "#000", fontWeight:"600"}}>
                                Premiére plateforme permettant de créer des centres d'appel web au Sénégal.
                            </h3>
                            <h5 className="text-left" style={{lineHeight:"1.5", letterSpacing:"", color: "#000", fontWeight:"400"}}>
                                Nous fournissons un service CCaaS (Contact Center as a Service) qui propose une application de gestion et d'exploitation de centre d'appel web.
                            </h5>
                        </Col>
                        <Col sm="6" className="" >

                        </Col>
                    </Row> 
                </div>
            </section>
        
            <section  className="bg-white py-4">
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Row>
                                <Col sm="3" className="d-flex justify-content-center">
                                    <div style={{boxShadow:"rgba(0, 18, 46, 0.16) 0px 8px 18px 0px", borderRadius:"100px", height:"200px", width:"200px"}} className="align-self-center">
                                    
                                    </div>
                                </Col>
                                <Col sm="9">
                                    <div>
                                        <ul className="list-group">
                                            <li className="list-group-item" style={{border:"none"}}>
                                                <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                    <ArrowRight size={20} />
                                                </Button>
                                                <span className="mx-2" style={{color:"#000", fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"400"}}>Maximisez les opportunités de vente, un moyen rapide et simple de vous contacter.</span>
                                            </li>
                                            <li className="list-group-item" style={{border:"none"}}>
                                                <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                    <ArrowRight size={20} />
                                                </Button>
                                                <span className="mx-2" style={{color:"#000", fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"400"}}>Encouragez vos clients à vous appeler s'ils souhaiteraient des précisions.</span>
                                            </li>
                                            <li className="list-group-item" style={{border:"none"}}>
                                                <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                    <ArrowRight size={20} />
                                                </Button>
                                                <span className="mx-2" style={{color:"#000", fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"400"}}>Fonctionne partout dans le monde à tout moment de la journée.</span>
                                            </li>
                                            <li className="list-group-item" style={{border:"none"}}>
                                                <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                    <ArrowRight size={20} />
                                                </Button>
                                                <span className="mx-2" style={{color:"#000", fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"400"}}>Le visage humain derrière votre site Web, accessible, accueillant et proactif.</span>
                                            </li>
                                            <li className="list-group-item" style={{border:"none"}}>
                                                <Button className="mb-0" style={{boxShadow:"0 4px 12px 0 rgba(42,125,251,.6)", background:"#1391c1", padding:"4px 5px",alignItem:"center", border:"1px solid #cfcfcf", borderRadius:"18px"}}>
                                                    <ArrowRight size={20} />
                                                </Button>
                                                <span className="mx-2" style={{color:"#000", fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"400"}}>Améliorez la satisfaction et la fidélité de vos clients.</span>
                                            </li>

                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </section>
            <section className="py-4" style={{backgroundColor:"#eff2f6"}}>
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Row>
                                <Col sm="12" className="">
                                    <Card>
                                        <CardBody className="d-flex justify-content-start">

                                        <div class="">
                                            <span>
                                                <HelpCircle color="orange" className="mx-3" size={60} />
                                            </span>
                                        </div>
                                        <div class="">
                                        <p className="text-center"  style={{fontFamily: 'Montserrat', lineHeight:"1.5", fontWeight:"500"}}> 
                                            Un centre de contact web est un
                                            système de relation client dans lequel le point d'entrée est le site internet de l'entreprise.
                                            En d’autres termes elle permet à une personne de contacter directement une structure
                                            via son site.
                                        </p>
                                        </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </section>

            <section  style={{backgroundColor:"#1391c1"}} className="py-4">
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Card className="my-0" style={{backgroundColor:"#1391c1", boxShadow:"none"}}>
                                <CardBody className="p-0">
                                    <div className="d-flex justify-content-center" block>
                                        <Button className="text-center my-0 text-bold-600" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"rgb(23, 163, 217)", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                            C'EST PARTI !
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <section  className="bg-white py-4">
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Card style={{boxShadow:"none"}}>
                                <CardBody>
                                <h3 className="text-center" style={{lineHeight:"1.25", color: "#000", fontWeight:"500"}}>POURQUOI JOKKO APPS ?</h3>
                                    <Row>
                                        <Col sm="6">
                                        <h5 className="text-left p-2 mt-3" style={{lineHeight:"1.30", letterSpacing:"", color: "#000", fontWeight:"500"}}>
                                            Premiére plateforme proposant des services Live chat et Click to call
                                            au Sénégal et en Afrique.
                                        </h5>
                                        <p className="mb-8 p-2 text-justify" style={{fontFamily: 'Montserrat', letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        </p>
                                        </Col>
                                        <Col sm="6">                   
                                            <img
                                                className="rounded height-auto"
                                                src={idee}
                                                width="100%"
                                                style={{alignItem:"center",maxWidth:"600px"}}
                                                alt="bg-image04"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                        <img
                                            className="rounded height-auto"
                                            src={friend}
                                            width="100%"
                                            style={{alignItem:"center",maxWidth:"600px"}}
                                            alt="bg-image04"
                                            />
                                        </Col>
                                        <Col sm="6">
                                        <h5 className="text-left p-2 mt-3" style={{lineHeight:"1.30", letterSpacing:"", color: "#000", fontWeight:"500"}}>
                                            Premiére plateforme proposant des services Live chat et Click to call
                                            au Sénégal et en Afrique.
                                        </h5>
                                        <p className="mb-8 p-2 text-justify" style={{fontFamily: 'Montserrat', letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        </p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="py-4" style={{backgroundColor:"#eff2f6"}}>
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Row>
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
            <section  style={{backgroundImage: `url(${world})`, backgroundSize: "cover", backgroundRepeat:"no-repeat"}} className="py-4">
                <div className="container">
                    <h3 className="text-center" style={{lineHeight:"1.25", color: "#fff", fontWeight:"500"}}>
                        NOS SERVICES
                    </h3>
                    <Row>
                        <Col sm="6" className="px-4">

                            <Card className="bg-transparent" style={{}}>
                                <CardBody className="">
                                <h5 className="text-center" style={{lineHeight:"1.25", color: "#fff", fontWeight:"500"}}>
                                    LIVE CHAT
                                </h5>
                                <ListGroup className="bg-transparent">
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Service gratuit</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Nombre d'opérateurs limité à 5</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Communiquez par chat</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Historisation des conversations</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Statistiques des opérateurs</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Tableau de monitoring</span>
                                    </ListGroupItem>
                                </ListGroup>
                                </CardBody>
                                <CardFooter className="bg-transparent">
                                   <FormGroup className="d-flex justify-content-center mb-0" block>
                                        <Button className="text-center my-0 text-bold-600" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"rgb(30, 131, 172)", width:"300px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                            ACTIVER GRATUITEMENT
                                        </Button>
                                    </FormGroup>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col sm="6" className="px-4">

                            <Card className="bg-transparent" style={{}}>
                                <CardBody className="">
                                    <h5 className="text-center" style={{lineHeight:"1.25", color: "#fff", fontWeight:"500"}}>
                                        WEB TO CALL
                                    </h5>
                                    <ListGroup className="bg-transparent">
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Service payant</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Nombre d'opérateurs dépend de l'offre</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Communication vocale </span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Historisation des conversations</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Statistiques des opérateurs</span>
                                    </ListGroupItem>
                                    <ListGroupItem style={{border:"none", fontSize:"18px", color:"#fff", fontWeight:"400", fontFamily:"Montserrat", borderBottom:"1px solid #fff"}} className="bg-transparent pb-3 pl-0">
                                        <CheckCircle color="#00d9b8" size={22} className="mr-3 text-bold-500" />
                                        <span className="">Tableau de monitoring</span>
                                    </ListGroupItem>
                                </ListGroup>
                                </CardBody>
                                <CardFooter className="bg-transparent">
                                   <FormGroup className="d-flex justify-content-center mb-0" block>
                                        <Button className="text-center my-0 text-bold-600" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"rgb(30, 131, 172)", width:"300px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                            COMMANDER
                                        </Button>
                                    </FormGroup>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="py-4">
                <div className="container">
                    <Row>
                        <Col sm="12">

                            <Card >
                                <CardBody>
                                    <Row>
                                        <Col sm="6">
                                            <h3 style={{lineHeight:"1.25", letterSpacing:"-1.9px", fontSize:"45px"}} className="text-bold-700">
                                                Créer gratuitement un web chat
                                            </h3>
                                            <p className="mt-4 mb-8" style={{fontFamily: 'Montserrat', letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                                Créer gratuitement un web chat gyvvuhb ebh eetvbtevjhb etjhtvjht etvhjbvth vte
                                            </p>
                                            <p className="mt-4 mb-8" style={{fontFamily: 'Montserrat', letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                                Créer gratuitement un web chat etvjnvtj etvjh vetj vevvtvt j etv evvjkvtjkvnjnetv tvjnvtj
                                            </p>
                                            <div className="d-flex justify-content-center" block>
                                                <Button className="text-center mt-3 text-bold-600" style={{fontFamily: 'Montserrat', background:"rgb(19, 145, 193)", width:"233px", height:"52px", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                    Créer gratuitement
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <footer className="py-4" style={{backgroundColor:"rgb(19, 145, 193)"}}>
                <div className="container">
                    <Row>
                        <Col sm="3">

                            <Card style={{backgroundColor:"rgb(19, 145, 193)"}}>
                                <CardBody>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card style={{backgroundColor:"rgb(19, 145, 193)"}}>
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

                            <Card style={{backgroundColor:"rgb(19, 145, 193)"}}>
                                <CardBody>
                                    <h6 style={{color: "#a8e4ff", fontWeight:"500"}}>CONTACTS</h6>
                                    <div className="">
                                        <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                            <Phone size={14} className="mr-1" /> +221 77 380 19 30 <Mail size={14} className="mr-1 ml-3" /> gaye.babspro@gmail.com
                                        </p>
                                        <p className="" style={{fontSize:"14px",fontFamily: 'Montserrat', color:"#fff", letterSpacing:"-.6px", lineHeight:"1.5", fontWeight:"500"}}>
                                            <Phone size={14} className="mr-1" /> +221 77 477 58 01 <Mail size={14} className="mr-1 ml-3" /> tallfabi111.babspro@gmail.com
                                        </p>
                                    </div>
                                    <FormGroup>
                                        <h6 style={{color: "#a8e4ff", fontWeight:"500"}}>ABONNEZ VOUS À LA NEWSLETTER</h6>
                                        <div className="position-relative has-icon-left">
                                            <Input style={{padding:".375rem 45px"}} type="text" id="iconLeft" name="iconLeft" />
                                            <div style={{position: "absolute", top:"0", right:"auto", left:"5px", textAlign:"center", lineHeight:"2.2rem", zIndex:"2", display:"block",width:"2.5rem",height:"2.5rem"}} className="form-control-position">
                                                <Mail size={30} className="info" />
                                            </div>
                                        </div>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </footer>
        

</div>


      );
   }
}

export default Home;
