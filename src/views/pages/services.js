import React, { Component, Fragment } from "react";
import { getServices } from '../../utility/APIutils';
import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Row, Col, Table, Badge } from "reactstrap";
import {
    PhoneCall,
    MessageSquare
 } from "react-feather";

class Service extends Component {

    constructor(props) {
      super(props);
      this.state = {
         services: []
      }

      this.openService = this.openService.bind(this);
      
    }

    componentDidMount = () => {

        getServices().then(response => {    
            
            console.log("response", response);
            
            this.setState({
                services: response
            });
        }).catch(error => {

        });

    };

  
    openService(idService){
        
        this.props.history.push("/pages/service/"+idService);
    }
  

   render() {

    if(this.state.services == null){
        return(<div></div>)
     }

      return (
        <Fragment>
        {/* <ContentHeader>Extended Tables </ContentHeader>
        <ContentSubHeader>Tables with some extra elements and feathers.</ContentSubHeader> */}
        <Row>
           <Col sm="12">
              <Card>
                 <CardBody>
                    <CardTitle>Liste des services</CardTitle>
                        <Table striped>
                            <thead>
                            <tr>
                                <th className="text-bold-600">Nom du service</th>
                                <th className="text-bold-600">Organisation</th>
                                <th className="text-bold-600">Type de service</th>
                                <th className="text-bold-600">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            

                            {
                                this.state.services.map( (item, i) => {

                                    return (
                                    <tr onClick={(event) => this.openService(item.id)} className="cursor-pointer" key={i} >
                                        <td className="text-bold-400">{item.serviceName}</td>
                                        <td className="text-bold-400">{item.organisation}</td>
                                        <td className="text-bold-400">{(item.typeService=="SERVICE_CALL")?<span className="text-bold-400"><PhoneCall className="mr-3" color="green" /> CALL</span>:<span className="text-bold-400"><MessageSquare className="mr-3" color="orange" /> CHAT </span>}</td>
                                        <td className="text-bold-400">{(item.enabled)?<Badge color="success" pill>Activé</Badge>:<Badge color="secondary" pill> Désactivé</Badge>}</td>
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

export default Service;
