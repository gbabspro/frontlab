import React, { Component, Fragment } from "react";
import { getCommandeList } from '../../utility/APIutils';
import { Card, CardBody, CardTitle, Row, Col, Table, Button,
    Form,
    Input,
    Badge,
    } from "reactstrap";
import {
    MessageSquare,
    PhoneCall,
    Search
 } from "react-feather";

class Billing extends Component {

    constructor(props) {
      super(props);
      this.state = {
         commandes: []
      }

    }


    componentDidMount = () => {

        getCommandeList().then(response => {    
            
            console.log("response", response);
        
            this.setState({commandes: response})

        }).catch(error => {
            console.log("error", error);
        });
    }

   render() {

      return (
        <Fragment>
        <Row>
           <Col sm="12">
              <Card>
                 <CardBody>
                    <CardTitle className="">
                    <Row>
                        <Col md="4">
                        <span className="bd-highlight">Mes commandes</span>
                        </Col>
                        <Col md="4">
                        <Form >
                            <Input
                                type="text"
                                className="form-control round bg-light black"
                                name="firstnameInput"
                                autoComplete="off"
                                onChange={this.handleChange}
                                placeholder="nom, prénom ou email"
                            />
                            <div className="form-control-position mt-0 mr-2">
                                <Search style={{verticalAlign: "baseline"}} size={16} />
                            </div>
                        </Form>
                        </Col>
                    </Row>
                    </CardTitle>
                        <Table striped>
                        <thead>
                            <tr className="text-bold-600">
                                <th className="text-bold-600">Service</th>
                                <th className="text-bold-600">Offre</th>
                                
                                <th className="text-bold-600">Date</th>
                                <th className="text-bold-600">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            

                            {
                                this.state.commandes.map( (item, i) => {

                                    return (
                                    <tr key={i} >
                                        <td className="text-bold-400">{(item.service.typeService=="SERVICE_CALL")?<span className="text-bold-400"><PhoneCall className="mr-3" color="green" /> CALL</span>:<span className="text-bold-400"><MessageSquare className="mr-3" color="orange" /> CHAT </span>}</td>
                                        <td className="text-bold-400">{(item.service.offre.name == "OFFRE_START")?<Badge color="warning" pill>START</Badge>:<Badge color="info" pill>PREMIUM</Badge>}</td>
                                        <td className="text-bold-400">{item.updatedAt}</td>
                                        <td className="text-bold-400">{(item.status == "STATUS_DONE")?<Badge color="success" pill>Terminée</Badge>:<Badge color="infos" pill>En cours</Badge>}</td>
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

export default Billing;
