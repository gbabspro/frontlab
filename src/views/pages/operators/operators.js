import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Button,
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Form,
    Input,
    FormGroup,
    UncontrolledTooltip
    } from "reactstrap";
    import { BounceLoader } from 'react-spinners';
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";
 import { connect } from 'react-redux';
import { getUserOperators, newPersonnel, getServiceOperators } from "../../../utility/APIutils";
import { LoadOperators, addOperator } from "../../../redux/actions/operators/operatorsActions";
import { Users, Trash2, Edit, Plus, AlertCircle } from "react-feather";
import Toggle from "react-toggle";
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
 } from '../../../constants';
 
class Operators extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalNewAgent: false,
        hasError:{
            value: false,
            message: "",
         },
        firstnameInput: {
            value: ''
        },
        lastnameInput: {
            value: ''
        },
        emailInput: {
            value: ''
        },
      }
      this.isFormInvalid = this.isFormInvalid.bind(this);
      this.handleSubmitPersonnel = this.handleSubmitPersonnel.bind(this);
    }

    componentDidMount(){

    }

    openModalNewAgent = () => {
        this.setState({
            modalNewAgent: !this.state.modalNewAgent
        });
    }

    handleSubmitPersonnel(event) {
  
        event.preventDefault();
        
        if(this.isFormInvalid()){
           return;
        }

        this.setState({
            loadingEdit: true
        });

        const personnelRequest = {
            firstname: this.state.firstnameInput.value,
            lastname: this.state.lastnameInput.value,
            email: this.state.emailInput.value,
        };

        console.log("personnelRequest", personnelRequest)

        newPersonnel(this.props.currentProject.id, personnelRequest)
        .then(response => {

        console.log("response", response);
        this.props.newOperator(response);

        this.openModalNewAgent();
        this.setState({
            loadingEdit: false
        });
        }).catch(error => {
            console.log("error", error);
            if(error.status && error.status === 400){

            }else{
                this.setState({
                    loadingEdit: false
                });
            }
        });
    }


    isFormInvalid() {
        return !(this.state.firstnameInput.validateStatus === 'success' &&
            this.state.lastnameInput.validateStatus === 'success' &&
            this.state.emailInput.validateStatus === 'success' 
        );
     }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;
  
        this.setState({
           [inputName] : {
              value: inputValue,
              ...validationFun(inputValue)
           }
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
                            <div className="d-flex justify-content-end">
                                <Button  className="bg-light p-1 mb-2 ml-0 text-dark border-secondary btn-sm" onClick={this.openModalNewAgent} >
                                    <Plus color="#868e96" className="text-bold-500" size={25} /> 
                                </Button>
                                <Modal
                                    isOpen={this.state.modalNewAgent}
                                    toggle={this.toggle}
                                >
                                    <ModalHeader toggle={this.openModalNewAgent}>Ajouter un agent</ModalHeader>
                                    <Form onSubmit={this.handleSubmitPersonnel} className="pt-2">
                                    <ModalBody className="bg-light">
                                    <Row>
                                        <Col md="12">
                                            {(this.state.hasError.value==true)?this.handleError(this.state.hasError.message):""}
                                                
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    className="form-control py-3"
                                                    name="firstnameInput"
                                                    autoComplete="off"
                                                    onFocus={(event) => {this.setState({firstnameInput:{validateStatus: '',
                                                    errorMsg: null,}})}}
                                                    onBlur={(event) => this.handleInputChange(event, this.validateName)}
                                                    disabled={this.state.loadingEdit}
                                                    // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                    placeholder="Prénom"
                                                    required
                                                />
                                                {this.state.firstnameInput.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-2 pt-1">
                                                      <AlertCircle id="firstnameTooltip" className="danger"/>
                                                      <UncontrolledTooltip
                                                         placement="right"
                                                         target="firstnameTooltip"
                                                      >
                                                         {this.state.firstnameInput.errorMsg}
                                                      </UncontrolledTooltip>
                                                   </div>):''
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                            <Input
                                                type="text"
                                                className="form-control py-3"
                                                name="lastnameInput"
                                                autoComplete="off"
                                                onFocus={(event) => {this.setState({lastnameInput:{validateStatus: '',
                                                errorMsg: null,}})}}
                                                onBlur={(event) => this.handleInputChange(event, this.validateName)}
                                                placeholder="Nom"
                                                disabled={this.state.loadingEdit}
                                                onChange={this.handleChange}
                                                // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                required
                                            />
                                            {this.state.lastnameInput.validateStatus === "error" ? (
                                                   <div className="form-control-position pr-2 pt-1">
                                                      <AlertCircle id="firstnameTooltip" className="danger"/>
                                                      <UncontrolledTooltip
                                                         placement="right"
                                                         target="firstnameTooltip"
                                                      >
                                                         {this.state.lastnameInput.errorMsg}
                                                      </UncontrolledTooltip>
                                                   </div>):''
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    className="form-control py-3"
                                                    name="emailInput"
                                                    autoComplete="off"
                                                    onFocus={(event) => {this.setState({emailInput:{validateStatus: '',
                                                    errorMsg: null,}})}}
                                                    placeholder="Adresse e-mail"
                                                    onBlur={(event) => this.handleInputChange(event, this.validateEmail)}
                                                    disabled={this.state.loadingEdit}
                                                    onChange={this.handleChange}
                                                    // onChange={(event) => this.handleProfileChange(event, this.validateConfirmPassword)}
                                                    required
                                                />
                                                {this.state.emailInput.validateStatus === "error" ? (
                                                   <div className="form-control-position text-center pr-2 pt-1">
                                                      <AlertCircle id="emailTooltip" className="danger"/>
                                                      <UncontrolledTooltip
                                                         placement="right"
                                                         target="emailTooltip"
                                                      >
                                                         {this.state.emailInput.errorMsg}
                                                      </UncontrolledTooltip>
                                                   </div>):''
                                                }
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    
                                    </ModalBody>
                                    <ModalFooter className="d-flex justify-content-center">

                                        <Button disabled={this.state.loadingEdit}  type="submit" className="mt-0" style={{boxShadow:"0 2px 2px rgba(0,0,60,.08)",fontFamily: 'Montserrat', background:"rgb(30, 131, 172)", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                            
                                            {(this.state.loadingEdit)?
                                                (<BounceLoader  					
                                                    className="clip-loader left"
                                                    sizeUnit={"px"}
                                                    size={25}
                                                    color={'#fff'}
                                                    loading={true} 
                                                />):'Enregistrer'

                                            }
                                        </Button>
                                    </ModalFooter>
                                    </Form>
                                </Modal>
                            </div>
                            <Table striped style={{borderTop: "0px solid #fff"}} className="">
                                <thead>
                                    <tr>
                                        <th>Nom et prénom</th>
                                        <th>Adresse e-mail</th>
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
                                                <td>{<Toggle 
                                                        defaultChecked={operator.enabled}
                                                        onChange={() => {}}
                                                    />}</td>
                                                <td className="d-flex justify-content-end">
                                                    
                                                    <Button className="btn-sm btn-grey rounded-circle"><Edit size={15} /></Button>
                                                    <Button className="btn-sm btn-red ml-2 rounded-circle"><Trash2 size={15} /></Button>
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

   validateName = (name) => {

    if(name.length < NAME_MIN_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
        }
    } else if (name.length > NAME_MAX_LENGTH) {
        return {
            validationStatus: 'error',
            errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
        }
    } else {
        return {
            validateStatus: 'success',
            errorMsg: null,
          };            
    }
}

 validateEmail = (email) => {
    if(!email) {
        return {
            validateStatus: 'error',
            errorMsg: 'Email may not be empty'                
        }
    }

    const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
    if(!EMAIL_REGEX.test(email)) {
        return {
            validateStatus: 'error',
            errorMsg: 'Email not valid'
        }
    }else if(email.length > EMAIL_MAX_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
        }
    }else{
       return {
          validateStatus: 'success',
          errorMsg: null
      }
    }
}


}

const mapStateToProps = state => ({
    operators: state.operators,
    currentProject: state.currentProject,
 })
 
 const mapDispatchToProps = dispatch => ({
   getOperatorsList: (operators) => dispatch(LoadOperators(operators)),
   newOperator: (operator) => dispatch(addOperator(operator)),
   
})
 
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Operators)