import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Button } from "reactstrap";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";
import {
 } from "react-feather";
 import { connect } from 'react-redux';
import { getUserOperators } from "../../../utility/APIutils";
import { LoadOperators } from "../../../redux/actions/operators/operatorsActions";
import { Users, Trash2, Edit } from "react-feather";
import Toggle from "react-toggle";

class Operators extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount(){

        getUserOperators()
        .then(response => {

            console.log("reponse ", response);
            this.props.getOperatorsList(response);
         }).catch(error => {
            console.log("error ", error);
         });
    }

   render() {

      return (
        <Fragment>
            <ContentHeader className="pl-1">
            <span style={{fontSize:"14px"}}><Users size={22} className="" />  Opérateurs</span> </ContentHeader>
            <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Nom et prénom</th>
                                <th>Adresse e-mail</th>
                                <th>Projet</th>
                                <th>Statu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                (this.props.operators)?
                                this.props.operators.map((operator, id) =>{
                                return (
                                    <tr key={id}><td>{operator.firstname+" "+operator.lastname}</td>
                                        <td>{operator.email}</td>
                                        <td>{operator.service.domaine_name}</td>
                                        <td>{<Toggle 
                                                defaultChecked={operator.enabled}
                                                onChange={() => {}}
                                            />}</td>
                                        <td className="d-flex justify-content-end">
                                            
                                            <Button style={{}} className="btn-sm btn-grey rounded-circle"><Edit size={15} /></Button>
                                            <Button style={{}} className="btn-sm btn-red ml-2 rounded-circle"><Trash2 size={15} /></Button>
                                        </td>
                                            
                                    </tr>
                                    );
                                }):""
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

const mapStateToProps = state => ({
    operators: state.operators
 })
 
 const mapDispatchToProps = dispatch => ({
   getOperatorsList: (operators) => dispatch(LoadOperators(operators)),
})
 
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Operators)