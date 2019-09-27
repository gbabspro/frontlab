import React, { Component, Fragment } from "react";
import { serviceGetListAgent } from '../../utility/APIutils';
import { Card, CardBody, CardTitle, Row, Col, Table, Button,
    Form,
    Input,
    FormGroup,
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Media
    } from "reactstrap";
import Toggle from "react-toggle";
import {
    Plus,
    Package,
    Globe,
    Bookmark
 } from "react-feather";


class SingleService extends Component {

    constructor(props) {
      super(props);
      this.state = {
         idService: this.props.match.params.idService,
         listAgent: [],
         modalNewAgent: false
      }

      this.openService = this.openService.bind(this);
      this.handleBaconChange = this.handleBaconChange(this);
      
    }

    componentDidMount = () => {

        if(this.state.idService){
            serviceGetListAgent(this.state.idService).then(response => {    
            
                console.log("response", response);
                
                this.setState({listAgent: response})

            }).catch(error => {
                console.log("error", error);
            });
        }

    };

  
    openService(idService){
        
        this.props.history.push("/pages/service/"+idService);
    }

    handleBaconChange(){

    }

    openModalNewAgent = () => {
        this.setState({
            modalNewAgent: !this.state.modalNewAgent
        });
     }
  

   render() {
    
    let iconLeft = "left";
    let iconRight = "right";
    let textDirection = "text-right";

    if(this.state.idService == null){
        return(<div></div>)
     }

      return (
        <Fragment>

        <Row>
           <Col sm="3">
                <Card>
                    <CardBody className="px-3 py-3">
                        <Media>
                            <Package size={48} className="warning" />
                            <Media body className={textDirection}>
                                <h3 className="mb-1 danger">Start</h3>
                                <span>Maximum 5 comptes</span>
                            </Media>
                            
                        </Media>
                    </CardBody>
                </Card>
           </Col>
           <Col sm="3">
                <Card>
                    <CardBody className="px-3 py-3">
                        <Media>
                            <Globe size={48} className="success" />
                            <Media body className={textDirection}>
                                <h3 className="mb-1 success">Jokko Apss</h3>
                                <span>Nom de l'organisation</span>
                            </Media>
                            
                        </Media>
                    </CardBody>
                </Card>
           </Col>
           <Col sm="3">
                <Card>
                    <CardBody className="px-3 py-3">
                        <Media>
                            <Bookmark size={48} className="info" />
                            <Media body className={textDirection}>
                                <h3 className="mb-1 info">Call Jokko</h3>
                                <span>Nom du service</span>
                            </Media>
                            
                        </Media>
                    </CardBody>
                </Card>
           </Col>
           <Col sm="3">
                <Card>
                    <CardBody className="px-3 py-3">
                        <Media>
                        <form >
                            <label>
                                <Toggle
                                    defaultChecked={true}
                                    onChange={this.handleBaconChange}
                                />
                            </label>
                        </form>
                        <Media body className={textDirection}>
                            <h3 className="mb-1 primary">Status</h3>
                            <span className="success">
                                Activé
                            </span> 
                        </Media>
                            
                        </Media>
                    </CardBody>
                </Card>
           </Col>
        </Row>
        <Row>
           <Col sm="12">
              <Card>
                 <CardBody>
                    <CardTitle className="d-flex bd-highlight mb-2"><span className="mr-auto p-2 bd-highlight">Liste des agents</span>
                    <Button className="btn-sm" onClick={this.openModalNewAgent} color="primary"><Plus className="text-bold-500" size={30} /> </Button>
                        <Modal
                            isOpen={this.state.modalNewAgent}
                            toggle={this.toggle}
                        >
                            <ModalHeader toggle={this.openModalNewAgent}>Ajouter un agent</ModalHeader>
                            <Form  className="pt-2">
                            <ModalBody>
                            
                                <FormGroup>
                                    <Col md="12">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        autoComplete="off"
                                        // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
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
                                        autoComplete="off"
                                        placeholder="Nom"
                                        // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                        required
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md="12">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Adresse e-mail"
                                        // onChange={(event) => this.handleProfileChange(event, this.validateConfirmPassword)}
                                        required
                                    />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="hidden"
                                    className="form-control"
                                    name="password"
                                    value="new"
                                 />
                              </Col>
                           </FormGroup>
                            
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary btn-sm" type="submit">
                                    Enregistrer
                                </Button>
                            </ModalFooter>
                            </Form>
                        </Modal>
                    </CardTitle>
                        <Table striped>
                            <thead>
                            <tr>
                                <th className="text-bold-600">Nom</th>
                                <th className="text-bold-600">Prénom</th>
                                <th className="text-bold-600">Adresse e-mail</th>
                                <th className="text-bold-600">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            

                            {
                                this.state.listAgent.map( (item, i) => {

                                    return (
                                    <tr onClick={(event) => this.openService(item.id)} className="cursor-pointer" key={i} >
                                        <td className="text-bold-400">{item.lastname}</td>
                                        <td className="text-bold-400">{item.firstname}</td>
                                        <td className="text-bold-400">{item.email}</td>
                                        <td className="text-bold-400">
                                            <form >
                                                <label>
                                                    <Toggle
                                                        defaultChecked={item.enabled}
                                                        onChange={this.handleBaconChange}
                                                    />
                                                </label>
                                            </form>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                            
                            </tbody>
                        </Table>
                 </CardBody>
              </Card>
           </Col>
        </Row>
     </Fragment>
      );
   }
}

export default SingleService;
