// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   Form,
   Input,
   Label,
   FormGroup,
   Modal,
   ModalHeader, 
   ModalBody, 
   ModalFooter,
   Card,
   CardHeader,
   CardBody,
   CardFooter
} from "reactstrap";
import {
   Edit,
   Mail,
   Phone
} from "react-feather";
import classnames from "classnames";

import avatarm8 from "../../assets/img/portrait/medium/avatar-m-8.png";
import photo14 from "../../assets/img/photos/14.jpg";

class UserProfile extends Component {
   state = {
      activeTab: "1",
      modal: false
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   openModal = () => {
      this.setState({
         modal: !this.state.modal
      });
   }

   render() {
      return (
         <Fragment>
            <Row>
               <Col xs="6" id="user-profile">
                  <Card className="">
                     <Row className="media profil-cover-details">
                        <Col xs="12">
                           <div className="align-self-center mt-3 ml-3 halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    src={avatarm8}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>
                     </Row>
                     <div className="profile-section">
                        <Row>


                           <Col lg="12" md="12">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item text-center">
                                 <b className=" font-weight-normal">Babacar Gaye</b>
                                 </li>
                                 <li className="list-group-item justify-content-between d-flex align-items-center">
                                    gaye.babspro@gmail.com
                                    <span className="badge badge-default badge-pill">
                                    <Mail size={24} />
                                    </span>
                                 </li>
                                 <li className="list-group-item justify-content-between d-flex align-items-center">
                                    + (221) 773801930
                                    <span className="badge badge-default badge-pill">
                                    <Phone size={24} />
                                    </span>
                                 </li>
                                 <li className="list-group-item justify-content-flex-end d-flex">
                                    <Button onClick={this.openModal} color="primary my-1 rounded" className="btn-md">
                                    Modifier mon profil
                                    </Button>
                                    <Modal
                                       isOpen={this.state.modal}
                                       toggle={this.toggle}
                                       className={this.props.className}
                                    >
                                       <ModalHeader toggle={this.openModal}>Editez mon profil</ModalHeader>
                                       <ModalBody>
                                       <Form className="pt-2">
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="firstname"
                                                   id="inputName"
                                                   placeholder="Prénom"
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="text"
                                                   className="form-control"
                                                   name="lastname"
                                                   id="inputName"
                                                   placeholder="Nom"
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                          <FormGroup>
                                             <Col md="12">
                                                <Input
                                                   type="email"
                                                   className="form-control"
                                                   name="email"
                                                   id="inputEmail"
                                                   placeholder="Adresse e-mail"
                                                   required
                                                />
                                             </Col>
                                          </FormGroup>
                                       </Form>
                                       </ModalBody>
                                       <ModalFooter>
                                          <Button color="primary" onClick={this.openModal}>
                                             Enrégistrer
                                          </Button>
                                       </ModalFooter>
                                    </Modal>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default UserProfile;
