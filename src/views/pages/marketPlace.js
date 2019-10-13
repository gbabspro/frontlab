// import external modules
import React, { Fragment, Component } from "react";
import { newCommande } from '../../utility/APIutils';
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
   Button,
   Modal,
   ModalHeader, 
   ModalBody, 
   ModalFooter,
   Form,
   Input,
   FormGroup,
   CustomInput
} from "reactstrap";
import {
   ShoppingCart,
} from "react-feather";

import cardImg01 from "../../assets/img/photos/apps01.png";
import cardImg02 from "../../assets/img/photos/apps02.png";
import offrestart_img from "../../assets/img/photos/offrestart.png";
import offrepremium_img from "../../assets/img/photos/offrepremium.png";
import offrebusiness_img from "../../assets/img/photos/offrebusiness.png";

class MarketPlace extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serviceType: "",
         selectedOffre: "",
         organisation: "",
         serviceName: "",
         modalCommande: false
      }
      this.onOffreChanged = this.onOffreChanged.bind(this);
      this.handleSubmitCommande = this.handleSubmitCommande.bind(this);
      
  }



   openModalCommande = (type) => {

      this.setState({
         serviceType: type,
         modalCommande: !this.state.modalCommande
      });

      
   }

   handleCheck(offreName){

      this.setState({
         selectedOffre: offreName,
      }, ()=>{console.log("this.state.selectedOffre : ", this.state.selectedOffre);});
   }

   onOffreChanged(e){

      console.log(e.target.name)

      this.setState({
         selectedOffre: e.currentTarget.value
      });
   }


      handleInputChange(event) {
            const target = event.target;
            const inputName = target.name;        
            const inputValue = target.value;

            this.setState({
               [inputName]: inputValue,
               
            });
      }

      handleSubmitCommande(event) {
            event.preventDefault();
      
            // if(this.isFormInvalid()){
            //    return;
            // }

            const commandeRequest = {
               serviceType: this.state.serviceType,
               offreName: this.state.selectedOffre,
               organisation: this.state.organisation,
               serviceName: this.state.serviceName
            };

            console.log("commandeRequest", commandeRequest)

            newCommande(commandeRequest)
            .then(response => {
               
               console.log("response", response);
               this.openModalCommande("");
            }).catch(error => {
               console.log("error", error);
            });
      }

         isFormInvalid() {
            return !(this.state.firstname.validateStatus === 'success' &&
               this.state.lastname.validateStatus === 'success' &&
               this.state.email.validateStatus === 'success' &&
               this.state.password.validateStatus === 'success' &&
               this.state.passwordConfirmation.validateStatus === 'success'
            );
      }
      

   render() {
      return (
         <Fragment>
         <Row className="d-flex justify-content-center">
            <Col xs="4" md="3">
               <CardDeck>
                  <Card md="12">
                     <CardImg top width="100%" src={cardImg01} alt="Card cap" />
                     <CardBody>
                        <CardTitle className="font-weight-bold">CHAT CENTER</CardTitle>
                        <CardSubtitle>Live chat</CardSubtitle>
                        <CardText>Outils de chat de site Web pour les visiteurs de votre site.</CardText>
                        <CardFooter className="pb-0">
                           <Col md="12">
                              <Button onClick={() => this.openModalCommande("SERVICE_CHAT")} block className="text-muted mb-0 white btnjokko">
                                 <ShoppingCart size={18} color="white" className="mr-2 text-bold-400" /> <span className="text-bold-400">Commander</span></Button>
                           </Col>              
                        </CardFooter>
                     </CardBody>
                  </Card>
               </CardDeck>
            </Col>
            <Col xs="4" md="3">
               <CardDeck>
                  <Card md="12">
                     <CardImg top width="100%" src={cardImg02} alt="Card cap" />
                     <CardBody>
                        <CardTitle className="font-weight-bold">CALL CENTER</CardTitle>
                        <CardSubtitle>VoIP Telephone Services</CardSubtitle>
                        <CardText>Logiciel de centre d'appels basé sur un navigateur.</CardText>
                        <CardFooter className="pb-0">
                           <Col md="12">
                              <Button onClick={() => this.openModalCommande("SERVICE_CALL")} block className="text-muted mb-0 white btnjokko">
                                 <ShoppingCart size={18} color="white" className="mr-2 text-bold-400" /> <span className="text-bold-400">Commander</span></Button>
                           </Col>              
                        </CardFooter>
                     </CardBody>
                  </Card>
               </CardDeck>
            </Col>
            <Modal
               isOpen={this.state.modalCommande}
               toggle={this.toggle}
               size="lg"
               className={this.props.className}
            >
               <ModalHeader toggle={() => this.openModalCommande("")}>Commander un service</ModalHeader>
               <Form onSubmit={this.handleSubmitCommande} className="pt-2">
               <ModalBody>
                  <Row className="">
                     <Col xs="4" md="4">
                        <CardDeck>
                           <Card md="12" className="cursor-pointer" onClick={() => this.handleCheck("OFFRE_START")}>
                              <CardImg top width="100%" src={offrestart_img} alt="Card cap" />
                              <CardBody>
                                 <CardTitle className="font-weight-bold text-center">OFFRE START</CardTitle>
                                 <CardSubtitle className="text-center">5 comptes</CardSubtitle>
                                 <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">10 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa</b></span></CardText>
                                 <CardFooter className="pb-0 ">
                                    <Col md="12" className="d-flex justify-content-center">
                                       <FormGroup check className="px-0">
                                          <CustomInput value="OFFRE_START"  checked={this.state.selectedOffre==="OFFRE_START"} onChange={this.onOffreChanged} type="radio" id="offreStartId" />
                                       </FormGroup>
                                    </Col>              
                                 </CardFooter>
                              </CardBody>
                           </Card>
                        </CardDeck>
                     </Col>
                     <Col xs="4" md="4">
                        <CardDeck>
                           <Card md="12" className="cursor-pointer" onClick={() => this.handleCheck("OFFRE_PREMIUM")}>
                              <CardImg top width="100%" src={offrepremium_img} alt="Card cap" />
                              <CardBody>
                                 <CardTitle className="font-weight-bold text-center">OFFRE PREMIUM</CardTitle>
                                 <CardSubtitle className="text-center">25 comptes</CardSubtitle>
                                 <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">25 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa</b></span></CardText>
                                 <CardFooter className="pb-0 ">
                                    <Col md="12" className="d-flex justify-content-center">
                                       <FormGroup check className="px-0">
                                          <CustomInput value="OFFRE_PREMIUM"  checked={this.state.selectedOffre==="OFFRE_PREMIUM"} onChange={this.onOffreChanged} type="radio" id="offrePremiumId" />
                                       </FormGroup>
                                    </Col>              
                                 </CardFooter>
                              </CardBody>
                           </Card>
                        </CardDeck>
                     </Col>
                     <Col xs="4" md="4">
                        <CardDeck>
                           <Card md="12" className="cursor-pointer" onClick={() => this.handleCheck("OFFRE_BUSINESS")}>
                              <CardImg top width="100%" src={offrebusiness_img} alt="Card cap" />
                              <CardBody>
                                 <CardTitle className="font-weight-bold text-center">OFFRE BUSINESS</CardTitle>
                                 <CardSubtitle className="text-center">200 comptes </CardSubtitle>
                                 <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">75 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa</b></span></CardText>
                                 <CardFooter className="pb-0 ">
                                    <Col md="12" className="d-flex justify-content-center">
                                       <FormGroup check className="px-0">
                                          <CustomInput value="OFFRE_BUSINESS"  checked={this.state.selectedOffre==="OFFRE_BUSINESS"} onChange={this.onOffreChanged} type="radio" id="offreBusinessId" />
                                       </FormGroup>
                                    </Col>              
                                 </CardFooter>
                              </CardBody>
                           </Card>
                        </CardDeck>
                     </Col>
                     

                  </Row>
                  <Row className="">
                     <Col xs="12" md="12">
                           <Card >
                              <CardBody className="">
                                 <Row>
                                    <Col xs="6" md="6">
                                       <FormGroup>
                                          <Input
                                             type="text"
                                             className="form-control"
                                             name="serviceName"
                                             autoComplete="off"
                                             onChange={(event) => this.handleInputChange(event)}
                                             placeholder="Nom du centre de contact"
                                             id="inputName"
                                             required
                                          />
                                       </FormGroup>
                                    </Col>
                                    <Col xs="6" md="6">
                                       <FormGroup>
                                          <Input
                                             type="text"
                                             className="form-control"
                                             name="organisation"
                                             onChange={(event) => this.handleInputChange(event)}
                                             placeholder="Organisation"
                                             autoComplete="off"
                                             id="inputName"
                                             required
                                          />
                                       </FormGroup>
                                    </Col>
                                 </Row>
                              </CardBody>
                           </Card>
                     </Col>
                  </Row>

               </ModalBody>
               <ModalFooter className="">
                     <Button className="btn-sm btnjokko" color="default" type="submit">
                        Enrégistrer ma commande
                     </Button>
               </ModalFooter>
               </Form>
            </Modal>
         </Row>
      </Fragment>
      );
   }
}

export default MarketPlace;
