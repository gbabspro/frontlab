import React from "react";
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

const Step2 = props => (
   <div className="step step2">
      <Form>
         <div className="form-body">


            <Row>

                  <Col md="12">
                  <FormGroup>
                     <Input
                        type="text"
                        className="input-style py-3"
                        name="domaine"
                        autoComplete="off"
                        placeholder="Site web : monsite.com"
                        required
                     />
                  </FormGroup>
                  </Col>

               <Col md="6">
                  <FormGroup>
                     <CardDeck>
                        <Card style={{boxShadow:"0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06)"}} className md="12" className="cursor-pointer" onClick={() => this.handleCheck("OFFRE_PREMIUM")}>
        
                           <CardBody>
                              <CardTitle className="font-weight-bold text-center">Live Chat</CardTitle>
                              <CardSubtitle className="text-center">Gratuit à vie</CardSubtitle>
                              {/* <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">25 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa / mois</b></span></CardText> */}
                              <CardFooter className="pb-0 ">
                                 <Col md="12" className="d-flex justify-content-center">
                                    <FormGroup check className="px-0">
                                       <CustomInput value="OFFRE_PREMIUM"  checked={false} type="radio" id="offrePremiumId" />
                                    </FormGroup>
                                 </Col>              
                              </CardFooter>
                           </CardBody>
                        </Card>
                     </CardDeck>
                  </FormGroup>
               </Col>

               <Col md="6">
                  <FormGroup>
                     <CardDeck>
                        <Card style={{boxShadow:"0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06)"}} md="12" className="cursor-pointer" onClick={() => this.handleCheck("OFFRE_BUSINESS")}>

                           <CardBody>
                              <CardTitle className="font-weight-bold text-center">Web to Call</CardTitle>
                              <CardSubtitle className="text-center">Gratuit en béta</CardSubtitle>
                              {/* <CardText className="text-center"><span style={{fontSize: "30px"}} color="orange" className="text-bold-400">75 000<b style={{fontSize: "14px"}} className="ml-1 text-bold-400">Fcfa / mois</b></span></CardText> */}
                              <CardFooter className="pb-0 ">
                                 <Col md="12" className="d-flex justify-content-center">
                                    <FormGroup check className="px-0">
                                       <CustomInput value="OFFRE_BUSINESS"  checked={false} type="radio" id="offreBusinessId" />
                                    </FormGroup>
                                 </Col>              
                              </CardFooter>
                           </CardBody>
                        </Card>
                     </CardDeck>
                  </FormGroup>
               </Col>
            </Row>
         </div>
      </Form>
   </div>
);

export default Step2;
