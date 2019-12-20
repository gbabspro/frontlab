import React, { Component, Fragment } from "react";
import { getBtnConf, deletePersonnel, unlockPersonnel, lockPersonnel, serviceGetListAgent, getService, newPersonnel, updateService, updatePersonnelProfile } from '../../utility/APIutils';
import { Card, CardBody, CardTitle, Row, Col, Table, Button,
    Form,
    Input,
    FormGroup,
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Media,
    CardFooter,
    CardHeader,
    Collapse,
    Label
    } from "reactstrap";
import Toggle from "react-toggle";
import {
    Plus,
    Package,
    ChevronDown,
    Bookmark,
    Phone,
    MessageSquare,
    User,
    Trash2,
    Edit,
    Search
 } from "react-feather";
 import Spinner from "../../components/spinner/spinner";
 import { BounceLoader } from 'react-spinners';
 import { ChromePicker } from 'react-color';

class SingleService extends Component {

    constructor(props) {
      super(props);
      this.state = {
         idService: this.props.match.params.idService,
         listPersonnel: [],
         currentService: {},
         currentPersonnel: {
             firstname: "",
             lastname: "",
             email: ""
         },
         modalNewAgent: false,
         modalEditPersonnel: false,
         modalDeletePersonnel:false,
         collapseScript: false,
         collapseSetting: false,
         firstnameInput: "",
         lastnameInput:"",
         passwordInput:"",
         emailInput:"",
         roleInput:"ROLE_AGENT",
         organisationInput:"",
         contactName:"",
         loadingEdit: false,
         btnSetting: {
            btnBackground: "",
            btnText: "",
            color: ""
         },
         hasErrorEditInfo:{
            value: false,
            message: ""
         },
         hasError:{
            value: false,
            message: ""
         }
      }

      this.openService = this.openService.bind(this);
      this.handleSubmitPersonnel = this.handleSubmitPersonnel.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitEditService = this.handleSubmitEditService.bind(this);
      this.handleChangeBtnText = this.handleChangeBtnText.bind(this);
      this.handleSubmitEditPersonnel = this.handleSubmitEditPersonnel.bind(this);
      this.handlePasswordChangeEditPers = this.handlePasswordChangeEditPers.bind(this);
      this.openModalDeletePersonnel = this.openModalDeletePersonnel.bind(this);
    }


    toggleScript = () => {
        this.getServiceBtnConfig();
        this.setState({ collapseScript: !this.state.collapseScript });
     }

    toggleSetting = () => {
        this.setState({ collapseSetting: !this.state.collapseSetting });
    }

    handleChangeComplete = (color) => {
        this.setState({btnSetting: { ...this.state.btnSetting, btnBackground: color.hex }});
    };

    componentDidMount = () => {

        if(this.state.idService){

            getService(this.state.idService).then(response => {    
            
                console.log("mes infos ", response);

                this.setState({currentService: response, organisationInput: response.organisation, contactName: response.serviceName});

                serviceGetListAgent(this.state.idService).then(response => {    
            
                    console.log("response", response);
                
                    this.setState({listPersonnel: response})
    
                }).catch(error => {
                    console.log("error", error);
                });

            }).catch(error => {
                console.log("error", error);
            });
        }

    };

    getServiceBtnConfig(){
        getBtnConf(this.state.currentService.id)        
        .then(response => {
        
            console.log("response", response);
            
            this.setState({
                btnSetting:{
                
                    btnBackground: response.background,
                    color: response.color,
                    btnText: response.content
                }
            })
        
        }).catch(error => {
            console.log("error", error);
        });
    }

    handleSubmitPersonnel(event) {
  
        event.preventDefault();
        
        // if(this.isFormInvalid()){
        //    return;
        // }

        this.setState({
            loadingEdit: true
        });

        const personnelRequest = {
            firstname: this.state.firstnameInput,
            lastname: this.state.lastnameInput,
            email: this.state.emailInput,
            password: "new",
            role: this.state.roleInput
        };

        console.log("personnelRequest", personnelRequest)

        newPersonnel(this.state.idService, personnelRequest)
        .then(response => {
            let listTemp = this.state.listPersonnel;
            listTemp.unshift(response);
            this.setState({
                listPersonnel: listTemp,
                loadingEdit: false
            });
        console.log("response", response);
        this.openModalNewAgent();
        }).catch(error => {
            console.log("error", error);

            if(error.success === false){
                this.setState({
                    hasError: {value: true, message: error.message},
                    loadingEdit: false
                });
            }

            if(error.status === 400){
                this.setState({
                    hasError: {value: true, message: error.errors[0].defaultMessage},
                    loadingEdit: false
                });
            }else if(error.status === 500){
                this.setState({
                    hasError: {value: true, message: error.error},
                    loadingEdit: false
                });
            }
        });
    }


    handleSubmitEditPersonnel(event) {
  
        event.preventDefault();

        this.setState({
            loadingEdit: true
        });

        const personnelRequest = {
            firstname: this.state.currentPersonnel.firstname,
            lastname: this.state.currentPersonnel.lastname,
            email: this.state.currentPersonnel.email,
            id: this.state.currentPersonnel.id
        };

        console.log("personnelRequest update ", personnelRequest)

        updatePersonnelProfile(personnelRequest)
        .then(response => {

            let index = this.state.listPersonnel.findIndex((x)=>{return x.id==this.state.currentPersonnel.id});
            let data = [...this.state.listPersonnel.slice(0, index), this.state.currentPersonnel, ...this.state.listPersonnel.slice(index+1)];

            console.log("response edit", data);
            this.setState({
                listPersonnel: data,
                loadingEdit: false,
                currentPersonnel: {}
            });

        
        this.openModalEditPersonnel("");
        }).catch(error => {
            console.log("error", error);
            if(error.status === 400){
                this.setState({
                    hasError: {value: true, message: error.errors[0].defaultMessage},
                    loadingEdit: false
                });
            }else if(error.status === 500){
                this.setState({
                    hasError: {value: true, message: error.error},
                    loadingEdit: false
                });
            }
        });
    }

    handleSubmitEditService(event) {
  
        event.preventDefault();

        this.setState({
            loadingEdit: true
        });

        const updateServiceRequest = {
            serviceName: this.state.serviceName,
            organisation: this.state.organisationInput
        };

        console.log("updateServiceRequest", updateServiceRequest)

        updateService(this.state.idService, updateServiceRequest)
        .then(response => {
        
            console.log("response", response);
        
            this.setState({
                loadingEdit: false,
                hasErrorEditInfo: {value: false, message: ""},
            });
        }).catch(error => {
            console.log("error", error);

            if(error.status === 400){
                this.setState({
                    hasErrorEditInfo: {value: true, message: error.errors[0].defaultMessage},
                    loadingEdit: false
                });
            }else if(error.status === 500){
                this.setState({
                    hasErrorEditInfo: {value: true, message: error.error},
                    loadingEdit: false
                });
            }
        });
    }

  
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value }, ()=>{console.log("this.state.roleInput ",this.state.roleInput)});
    }

    handlePasswordChangeEditPers(e) {
        const { name, value } = e.target;
        this.setState({ currentPersonnel: {...this.state.currentPersonnel, [name]: value }});
    }

    handleChangeBtnText(e) {
        let { name, value } = e.target;
        if(value.length > 18){
            value = value.substring(0, 15)+"...";
        }
        this.setState({btnSetting: { ...this.state.btnSetting, btnText: value }});
    }

    openService(idService){
        
        this.props.history.push("/pages/service/"+idService);
    }

    togglePersonnel(event, item){

        this.setState({
        });

        item.loading = true;

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if(!value){
            lockPersonnel(item.id)
            .then(response => {
                
                let data = this.state.listPersonnel;
                data.find((x)=>{return x.id==item.id}).enabled = value;
                item.loading = false;
                this.setState({
                    listPersonnel: data
                });
                console.log("response ", response);
            }).catch(error => {
                console.log("error", error);
                item.loading = false;
            });
        }else{
            unlockPersonnel(item.id)
            .then(response => {
                
                let data = this.state.listPersonnel;
                data.find((x)=>{return x.id==item.id}).enabled = value;
                item.loading = false;
                this.setState({
                    listPersonnel: data,
                });
                console.log("response ", response);
            }).catch(error => {
                console.log("error", error);
                item.loading = false;
            });
        }
        


    }

    openModalNewAgent = () => {
        this.setState({
            modalNewAgent: !this.state.modalNewAgent
        });
    }

     openModalEditPersonnel = (id) => {
        
        if(id==""){
            this.setState({
                currentPersonnel: {},
                modalEditPersonnel: !this.state.modalEditPersonnel
            });
        }else{
            let personnel = this.state.listPersonnel.find((pers) => {
                return pers.id == id;
            })
            this.setState({
                currentPersonnel: personnel,
                modalEditPersonnel: !this.state.modalEditPersonnel
            }, ()=>{console.log("currentPersonnel ", this.state.currentPersonnel)});
        }
     }
     

     handleError(error){

            return(<div style={{background:"#fff !important"}} className="alert alert-danger" role="alert">
            <span  >{error} </span>
            </div>)
    
     }

     openModalDeletePersonnel(id){
        if(id==""){
            this.setState({
                currentPersonnel: {},
                modalDeletePersonnel: !this.state.modalDeletePersonnel
            });
        }else{
            let personnel = this.state.listPersonnel.find((pers) => {
                return pers.id == id;
            })
            this.setState({
                currentPersonnel: personnel,
                modalDeletePersonnel: !this.state.modalDeletePersonnel
            }, ()=>{console.log("currentPersonnel ", this.state.currentPersonnel)});
        }
     }
  
     confirmDeletePersonnel(){
 
        if(!this.state.currentService){
 
            return;
        }


        deletePersonnel(this.state.currentPersonnel.id)
        .then(response => {

            let array = [...this.state.listPersonnel];
            let index = array.findIndex((x)=>{return x.id==this.state.currentPersonnel.id});
            if(index != -1){
                array.splice(index, 1)
                this.setState({
                    listPersonnel: array,
                    currentPersonnel: {},
                    modalDeletePersonnel: !this.state.modalDeletePersonnel
                });
            }

            console.log("response ", response);
        }).catch(error => {
            console.log("error", error);

        });
     }

   render() {
    
    let iconLeft = "left";
    let iconRight = "right";
    let textDirection = "text-right";

    let offre;
    let type;
    let typeIcon;

    if(this.state.idService == null || this.state.currentService.offre == null){
        return(<Spinner />)
    }

    if(this.state.currentService.offre && this.state.currentService.offre.name === "OFFRE_START"){
        offre = <h3 className="mb-1 danger">Start</h3>
    }else if(this.state.currentService.offre && this.state.currentService.offre.name === "OFFRE_PREMIUM"){
        offre = <h3 className="mb-1 danger">Prémium</h3>
    }else if(this.state.currentService.offre && this.state.currentService.offre.name === "OFFRE_PREMIUM"){
        offre = <h3 className="mb-1 danger">Business</h3>
    }

    if(this.state.currentService.typeService === "SERVICE_CALL"){
        type = <h3 className="mb-1 danger">Call</h3>
        typeIcon = <Phone size={48} className="warning" />
    }else if(this.state.currentService.typeService === "SERVICE_CHAT"){
        type = <h3 className="mb-1 danger">Chat</h3>
        typeIcon = <MessageSquare size={48} className="warning" />
        
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
                                { offre }
                                <h3 className="mb-1 danger">{}</h3>
                                <span> {this.state.currentService.offre.nombreMaxAgent} comptes</span>
                            </Media>
                            
                        </Media>
                    </CardBody>
                </Card>
           </Col>
           <Col sm="3">
                <Card>
                    <CardBody className="px-3 py-3">
                        <Media>
                        {typeIcon}
                            <Media body className={textDirection}>
                                {type}
                                <span>Service</span>
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
                                <span>Service</span>
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
           <Col sm="6">
                <Card>
                <CardHeader className="p-2">                    
                    <Button onClick={this.toggleScript} className="bg-light mb-0 ml-0 py-1 px-1 text-dark rounded-circle border-secondary btn-raised">
                        <ChevronDown />
                    </Button>
                    <span className="ml-2 text-bold-400 mt-1">
                        Parametrage button de contact
                    </span>
                </CardHeader>
                <Collapse isOpen={this.state.collapseScript}>
                    <CardBody className="px-3 py-3">
                        <Row>
                            <Col md="6" className="">
                                <ChromePicker className="mr-0" color={ this.state.btnSetting.btnBackground } onChangeComplete={ this.handleChangeComplete }/>
                            </Col>
                            <Col md="6" className="align-middle">
                                <div style={{boder: "1px solid red"}} className="d-flex justify-content-center border-secondary">
                                    <Button style={{backgroundColor:"#"+this.state.btnSetting.btnBackground, color:"#"+this.state.btnSetting.color, borderRadius:"10px"}} className="shadow-z-2 mb-0 align-middle btn-raised py-2">
                                        <Phone size={30} className="mr-1" />  {this.state.btnSetting.btnText }
                                    </Button>
                                </div>
                                <hr />
                                <div className="mt-2">
                                <FormGroup className="mb-0">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="contentButton"
                                            autoComplete="off"
                                            onChange={this.handleChangeBtnText}
                                            defaultValue={this.state.btnSetting.btnText || ''}
                                            required
                                        />
                                    </FormGroup>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                    <Row>
                        <Col md="12" className="">

                            <ul className="mb-0 list-inline">
                                <li className="list-inline-item">
                                <Button  className="mb-0 ml-0 btn-primary btn-raised">
                                        Sauvegarder
                                </Button>
                                </li>
                                <li className="list-inline-item ">
                                    <Button className="mb-0 ml-0 btn-warning btn-raised">
                                        Générer Script
                                    </Button>
                                </li>
                            </ul>
                        </Col>
                        </Row>
                    </CardFooter>
                     </Collapse>
                </Card>
           </Col>
           <Col sm="6">
                <Card>
                    <CardHeader className="p-2">                    
                        <Button onClick={this.toggleSetting} type="submit" className="bg-light mb-0 ml-0 py-1 px-1 text-dark rounded-circle border-secondary btn-raised">
                            <ChevronDown />
                        </Button>
                        <span className="ml-2 text-bold-400 mt-1">
                            Modifier les informations
                        </span>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapseSetting}>
                        <CardBody>
                        <Row>
                            <Col xs="12" md="12">
                                {(this.state.hasErrorEditInfo.value==true)?this.handleError(this.state.hasErrorEditInfo.message):""}
                            </Col>
                            <Col xs="6" md="6">
                            
                            <FormGroup>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="serviceName"
                                    autoComplete="off"
                                    defaultValue={this.state.contactName || ''}
                                    onChange={this.handleChange}
                                    placeholder="Nom du centre de contact"
                                    id="inputName"
                                    disabled={this.state.loadingEdit}
                                    required
                                />
                            </FormGroup>
                            </Col>
                            <Col xs="6" md="6">
                            <FormGroup>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="organisationInput"
                                    defaultValue={this.state.organisationInput || ''}
                                    onChange={this.handleChange}
                                    placeholder="Organisation"
                                    autoComplete="off"
                                    id="inputName"
                                    disabled={this.state.loadingEdit}
                                    required
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        </CardBody>
                        <CardFooter style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button onClick={this.handleSubmitEditService} disabled={this.state.loadingEdit} style={{border:"1px solid #225077"}} className="mb-0 ml-0 btnjokko">
                                        Valider
                                    </Button>
                                </li>
                                <li className="list-inline-item align-middle">
                                    {(this.state.loadingEdit)?
                                        (<BounceLoader  					
                                            className="clip-loader right"
                                            sizeUnit={"px"}
                                            size={25}
                                            color={'#7e7e86'}
                                            loading={true} 
                                        />):''

                                    }

                                </li>
                            </ul>                       
                        </CardFooter>
                    </Collapse>
                </Card>
           </Col>
        </Row>
        <Row>
           <Col sm="12">
              <Card>
                 <CardBody>
                    <CardTitle className="">
                    <Row>
                        <Col md="4">
                        <span className="bd-highlight">Liste Personnels</span>
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
                        <Col md="4" className="d-flex justify-content-end">
                            <Button  className="bg-light mb-0 ml-0 text-dark border-secondary btn-sm" onClick={this.openModalNewAgent} >
                                <Plus className="text-bold-500" size={30} /> 
                            </Button>
                                <Modal
                                    isOpen={this.state.modalNewAgent}
                                    toggle={this.toggle}
                                >
                                    <ModalHeader toggle={this.openModalNewAgent}>Ajouter un agent</ModalHeader>
                                    <Form onSubmit={this.handleSubmitPersonnel} className="pt-2">
                                    <ModalBody>
                                    <Row>
                                        <Col md="12">
                                            {(this.state.hasError.value==true)?this.handleError(this.state.hasError.message):""}
                                                
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstnameInput"
                                                    autoComplete="off"
                                                    onChange={this.handleChange}
                                                    disabled={this.state.loadingEdit}
                                                    // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                    placeholder="Prénom"
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="lastnameInput"
                                                autoComplete="off"
                                                placeholder="Nom"
                                                disabled={this.state.loadingEdit}
                                                onChange={this.handleChange}
                                                // onChange={(event) => this.handlePasswordChange(event, this.validatePassword)}
                                                required
                                            />
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="emailInput"
                                                    autoComplete="off"
                                                    disabled={this.state.loadingEdit}
                                                    placeholder="Adresse e-mail"
                                                    onChange={this.handleChange}
                                                    // onChange={(event) => this.handleProfileChange(event, this.validateConfirmPassword)}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label className="black"for="projectinput5">Choisir un role</Label>
                                                <Input defaultValue="" disabled={this.state.loadingEdit} onChange={this.handleChange} type="select" id="projectinput5" name="roleInput" >
                                                    <option value="ROLE_AGENT">Agent</option>
                                                    <option value="ROLE_SUP">Superviseur</option>
                                                </Input>
                                            </FormGroup>
                                            </Col>

                                    </Row>
                                    
                                    </ModalBody>
                                    <ModalFooter className="right">
                                    {(this.state.loadingEdit)?
                                        (<BounceLoader  					
                                            className="clip-loader left"
                                            sizeUnit={"px"}
                                            size={25}
                                            color={'#7e7e86'}
                                            loading={true} 
                                        />):''

                                    }
                                        <Button disabled={this.state.loadingEdit} className="btnjokko btn-sm" type="submit">
                                            Enregistrer
                                        </Button>
                                    </ModalFooter>
                                    </Form>
                                </Modal>
                        </Col>
                    </Row>
                    </CardTitle>
                        <Table striped>
                            <thead>
                            <tr className="text-bold-600">
                                <th className="text-bold-600">Nom</th>
                                <th className="text-bold-600">Prénom</th>
                                
                                <th className="text-bold-600">Adresse e-mail</th>
                                <th className="text-bold-600">Role</th>
                                <th className="text-bold-600">Status</th>
                                <th className="text-bold-600 text-right">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            

                            {
                                this.state.listPersonnel.map( (item, i) => {

                                    return (
                                    <tr key={i} >
                                        <td className="text-bold-400">{item.lastname}</td>
                                        <td className="text-bold-400">{item.firstname}</td>
                                        <td className="text-bold-400">{item.email}</td>
                                        <td className="text-bold-400"><User className="mr-3" size={18}/>{(item.roles[0].name == "ROLE_AGENT")?"Agent":"Superviseur"}</td>
                                        <td className="text-bold-400">
                                            <form >
                                                <label>
                                                    <Toggle
                                                        disabled={item.loading}
                                                        defaultChecked={item.enabled}
                                                        onChange={(event) => this.togglePersonnel(event, item)}
                                                    />

                                                    {(item.loading)?
                                                        (<span className="ml-2" style={{display: "inline-block"}}><BounceLoader  					
                                                            className="clip-loader left ml-1"
                                                            sizeUnit={"px"}
                                                            
                                                            size={25}
                                                            color={'#7e7e86'}
                                                            loading={true} 
                                                        /></span>):''

                                                    }
                                                </label>
                                            </form>
                                        </td>
                                        <td className="d-flex justify-content-end">
                                            <Button onClick={(event) => this.openModalEditPersonnel(item.id)}  className="bg-white mb-0 ml-0 mr-2 text-dark rounded-circle border-secondary btn-sm"  >
                                                <Edit size={16} /> 
                                            </Button>

                                            <Button onClick={() => this.openModalDeletePersonnel(item.id)} className="bg-white mb-0 ml-0 text-dark rounded-circle border-secondary btn-sm"  >
                                                <Trash2 size={16} color="#FF586B"/>
                                            </Button>
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
        <Modal
            isOpen={this.state.modalEditPersonnel}
            toggle={this.toggle}
        >
            <ModalHeader toggle={(event)=>this.openModalEditPersonnel("")}>Editer Personnel</ModalHeader>
            <Form onSubmit={this.handleSubmitEditPersonnel} className="pt-2">
            <ModalBody>
            <Row>
                <Col md="12">
                    {(this.state.hasError.value==true)?this.handleError(this.state.hasError.message):""}
                        
                    <FormGroup>
                        <Input
                            type="text"
                            className="form-control"
                            name="firstname"
                            defaultValue={this.state.currentPersonnel.firstname || ''}
                            autoComplete="off"
                            disabled={this.state.loadingEdit}
                            onChange={this.handleChange}
                            onChange={this.handlePasswordChangeEditPers}
                            placeholder="Prénom"
                            required
                        />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                    <Input
                        type="text"
                        className="form-control"
                        name="lastname"
                        autoComplete="off"
                        defaultValue={this.state.currentPersonnel.lastname}
                        placeholder="Nom"
                        disabled={this.state.loadingEdit}
                        onChange={this.handlePasswordChangeEditPers}
                        required
                    />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.currentPersonnel.email}
                            name="email"
                            autoComplete="off"
                            disabled={this.state.loadingEdit}
                            placeholder="Adresse e-mail"
                            onChange={this.handlePasswordChangeEditPers}
                            required
                        />
                    </FormGroup>
                </Col>

            </Row>
            
            </ModalBody>
            <ModalFooter className="right">
                {(this.state.loadingEdit)?
                    (<BounceLoader  					
                        className="clip-loader left"
                        sizeUnit={"px"}
                        size={25}
                        color={'#7e7e86'}
                        loading={true} 
                    />):''

                }
                <Button disabled={this.state.loadingEdit} className="btnjokko btn-sm" type="submit">
                    Enregistrer
                </Button>
            </ModalFooter>
            </Form>
        </Modal>

        <Modal
            isOpen={this.state.modalDeletePersonnel}
            toggle={this.toggle}
        >
            <ModalBody>
            <Row>
                <Col md="12">
                   <span  className="text-bold-500"> Voulez-vous vraiement supprimer cet utilisateur ?</span>
                </Col>

            </Row>
            
            </ModalBody>
            <ModalFooter className="right">
                {(this.state.loadingEdit)?
                    (<BounceLoader  					
                        className="clip-loader left"
                        sizeUnit={"px"}
                        size={25}
                        color={'#7e7e86'}
                        loading={true} 
                    />):''

                }
                <Button onClick={(event)=>this.confirmDeletePersonnel()} disabled={this.state.loadingEdit} className="btnjokko btn-sm" >
                    Confirmer
                </Button>
                <Button onClick={(event)=>this.openModalDeletePersonnel("")} className="btn-sm btn-default" >
                    Annuler
                </Button>
            </ModalFooter>
        </Modal>
     </Fragment>
      );
   }
}

export default SingleService;
