import React, { Component, Fragment } from "react";
import { Card, CardBody, CardHeader, CardTitle, Row, Col, FormGroup, Button, Input, CardFooter, 
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
   CardText,
   Collapse,
   ListGroup,
   ListGroupItem,
   Alert 
} from "reactstrap";
 import { connect } from 'react-redux';
 import imgBack from "../../../assets/img/background.gif";
import { User, Mic, Speaker, Volume2, Delete, X, Phone, MessageSquare, ChevronDown, ChevronUp, AlertTriangle } from "react-feather";
import phoneCall from "../call/phoneCall";
import Spinner from "../../../components/spinner/spinner";
import { getServiceWidget, updateServiceWidget, checkUrlExiste, generateUrl } from "../../../utility/APIutils";
import classnames from "classnames";
import { CirclePicker } from 'react-color';
import { BounceLoader } from 'react-spinners';
import { SetWidget, SetWidgetTheme } from "../../../redux/actions/widget/widgetActions";
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component
import logoWordPress from "../../../assets/img/logoWordPress.jpg";
import logoPrestashop from "../../../assets/img/logoPrestashop.png";
import logoShopify from "../../../assets/img/logoShopify.png";
import {toastr} from 'react-redux-toastr';

class WidgetSetting extends Component {

   constructor(props) {
      super(props);

      this.state = {
         toggleView: false,
         loadingView: true,
         loading: false,
         collapseJS: false,
         collapsePresta: false,
         collapseShopify: false,
         collapseWord: false,
         hasUrl:true,
         activeTab: "1",
         colors : ["#004D40", "#00695C", "#00796B", "#00897B", 
                  "#006064", "#00838F", "#0097A7", "#00ACC1",
                  "#01579B", "#0277BD", "#0288D1", "#E65100",
                  "#EF6C00", "#FF6F00", "#F57F17"],
      }

      this.loadWidget = this.loadWidget.bind(this);
      this.updateWidget = this.updateWidget.bind(this);
      this.toggleCollaps = this.toggleCollaps.bind(this);
      this.widgetGenerateUrl = this.widgetGenerateUrl.bind(this);

   }

   toggleCollaps = (collapse, state) => {
      this.setState({ [collapse]: !state });
   }


   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   componentDidMount(){
      
      this.loadWidget();
      
   }


   

   widgetGenerateUrl(id){

      if(this.props.currentProject){
         generateUrl(this.props.currentProject.id)
         .then(response => {
            console.log("response", response);
            this.setState({hasUrl: true})
         }).catch(error => {
            console.log("error", error);
            
         });
      }
   }

   hasWidgetUrl(id){
      checkUrlExiste(id)
      .then(response => {

         console.log("response", response);
      }).catch(error => {
         this.setState({hasUrl: false})
      });
   }

   loadWidget = () =>{

      getServiceWidget(this.props.currentProject.id)
      .then(response => {

         console.log("response", response);

         this.props.handleWidget(response);
         this.setState({loadingView: false})
         this.hasWidgetUrl(this.props.currentProject.id);
      }).catch(error => {
            console.log("error", error);
            this.setState({loadingView: false})
      });
   }

   handleChangeComplete = (color) => {
      this.props.handleWidgetTheme(color.hex)

  };


   updateWidget = () => {

      this.setState({
         loading: true
      })

      updateServiceWidget(this.props.widget)
      .then(response => {

         this.setState({theme: response.theme})
         this.setState({
            loading: false
         })

         toastr.success('', 'Mise à jour effectuée')
      }).catch(error => {
            console.log("error", error);
            this.setState({
               loading: false
            })
      });

  }

   render() {

      if(this.state.loadingView){
         return <Spinner />;
      }

      return (
        <Fragment>
           <Row>

               <Col sm="12" md="9" lg="9" className="col-12 mt-3">
                  {
                     (this.state.hasUrl)?"":(
                        <Alert color="warning">
                           {/* <AlertTriangle className="text-warning mr-2" size={20} /> */}
                           L'url de votre widget n'est pas bien configurée,
                           <Button onClick={this.widgetGenerateUrl} color="primary" style={{fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "3px", minWidth: "60px", height: "22px"}} className="mr-2 ml-2 px-1 mb-0">
                              Corriger
                           </Button>
                        </Alert>
                     )
                  }

               </Col>
                <Col sm="12" md="9" lg="9" className="col-12">
                     <Card>   
                        <CardHeader className="border-bottom mb-2 py-2">                    
                           <Button disabled={this.state.loading} onClick={() => {this.updateWidget()}}  className="px-3 mb-0 py-1" style={{fontSize:"14.1px", height:"34px", lineHeight:"20px", padding:"0 12px", fontFamily: 'Montserrat', background:"rgb(19, 145, 193)", display: 'flex', alignItem:"center", borderRadius: "4px", justifyContent: 'center',}}>
                                                                             
                           {(this.state.loading)?
                              (<BounceLoader 			
                                    className="clip-loader left"
                                    sizeUnit={"px"}
                                    size={25}
                                    color={'#fff'}
                                    loading={true} 
                              />):'Enregistrer'

                           }
                           </Button>
                        </CardHeader>

                        <CardBody className="pt-0">
                           <Row>
                              <Col sm="8" className="">
                                 <Card>                  
                                    <CardBody className="px-0 bg-white">
                                       <div>
                                          <Nav tabs className="nav-justified">
                                             <NavItem>
                                                <NavLink
                                                   className={classnames({
                                                      active: this.state.activeTab === "1"
                                                   })}
                                                   onClick={() => {
                                                      this.toggle("1");
                                                   }}
                                                >
                                                   Théme
                                                </NavLink>
                                             </NavItem>
                                             <NavItem>
                                                <NavLink
                                                   className={classnames({
                                                      active: this.state.activeTab === "2"
                                                   })}
                                                   onClick={() => {
                                                      this.toggle("2");
                                                   }}
                                                >
                                                   Intégration
                                                </NavLink>
                                             </NavItem>
                                          </Nav>
                                          <TabContent activeTab={this.state.activeTab}>
                                             <TabPane tabId="1">
                                                <Row>
                                                   <Col sm="12" className="bg-light px-0">
                                                      <div style={{boxShadow: "rgba(0, 18, 46, 0.16) 0px 8px 18px 0px", padding:"10px"}}>
                                                      <CirclePicker width="100%" circleSize={35} colors={this.state.colors} onChangeComplete={ this.handleChangeComplete }/>
                                                      </div>
                                                   </Col>
                                                </Row>
                                             </TabPane>
                                             <TabPane tabId="2">
                                                <Row>
                                                   <Col sm="12" className="bg-white px-0">
                                                      <Card>                  
                                                            <CardBody className="px-0">

                                                               <ListGroup>
                                                                  <ListGroupItem style={{boxShadow:"0 0 0 0.1rem rgba(152, 159, 166, 0.5)",borderRadius: "5px"}} className="mb-2">
                                                                     <div className="d-flex justify-content-between">
                                                                        <div className="media-left">
                                                                           <img className="media-object d-flex mr-3 bg-primary height-40 rounded-circle" src="https://randomuser.me/api/portraits/med/women/10.jpg" />
                                                                        </div>
                                                                        <div style={{color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom mt-1">
                                                                           HTLM/JavaScript
                                                                        </div>
                                                                        <div>
                                                                           <Button
                                                                              className="mb-0 bg-white mt-1 p-1 nohover"
                                                                              onClick={() => this.toggleCollaps("collapseJS", this.state.collapseJS)}
                                                                              style={{boxShadow:"0 0 0 0.2rem rgba(0, 157, 160, 0.25)", fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "18px"}}>
                                                                              
                                                                              {
                                                                                 (!this.state.collapseJS)?
                                                                                 (<ChevronDown color="black" />):
                                                                                 (<ChevronUp color="black" />)
                                                                              }
                                                                              
                                                                           </Button>
                                                                        </div>
                                                                     </div>
                                                                     <Collapse isOpen={this.state.collapseJS}>
                                                                        <Card>
                                                                           <CardBody className="px-0">
                                                                              <p>
                                                                                 Placez ce code juste avant la balise de fermeture <code>{'</body>'}</code> :
                                                                              </p>

                                                                              <div style={{fontSize:"14px", boxShadow: "rgba(0, 18, 46, 0.16) 0px 8px 18px 0px"}}>
                                                                                 <PrismCode component="pre" className="language-markup">
                                                                                    {'<script src="https://srv.babacargaye.com/testfile/js/'+this.props.widget.url+'" ></script>'}
                                                                                 </PrismCode>
                                                                              </div>
                                                                           </CardBody>
                                                                        </Card>
                                                                     </Collapse>
                                                                  </ListGroupItem>
                                                                  
                                                                  <ListGroupItem className="mb-2" style={{boxShadow:"0 0 0 0.1rem rgba(152, 159, 166, 0.5)",borderRadius: "5px"}}>

                                                                     <div className="d-flex justify-content-between">
                                                                        <div className="media-left">
                                                                           <img className="media-object d-flex mr-3 bg-primary height-40 rounded-circle" src={logoWordPress} />
                                                                        </div>
                                                                        <div style={{color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom mt-1">
                                                                           WordPress
                                                                        </div>
                                                                        <div>

                                                                           <Button
                                                                              className="mb-0 bg-white mt-1 p-1 nohover"
                                                                              onClick={() => this.toggleCollaps("collapseWord", this.state.collapseWord)}
                                                                              style={{boxShadow:"0 0 0 0.2rem rgba(0, 157, 160, 0.25)", fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "18px"}}>
                                                                              
                                                                              {
                                                                                 (!this.state.collapseWord)?
                                                                                 (<ChevronDown color="black" />):
                                                                                 (<ChevronUp color="black" />)
                                                                              }
                                                                              
                                                                           </Button>
                                                                        </div>
                                                                     </div>
                                                                     
                                                                     <Collapse isOpen={this.state.collapseWord}>
                                                                        <Card>
                                                                           <CardBody className="px-0">
                                                                              <ol style={{paddingLeft:"18px", fontSize:"14px"}}>
                                                                                 <li>Connectez-vous à votre espace d'administration WordPress</li>
                                                                                 <li>Allez dans Apparence> Éditeur de thème</li>
                                                                                 <li>Sous Fichiers de thème, recherchez le pied de page du thème (footer.php) et sélectionnez-le</li>
                                                                                 <li>Collez votre code avant la balise <code>{'</body>'}</code> en bas</li>
                                                                                 <li>Cliquez sur Mettre à jour le fichier pour enregistrer les modifications</li>
                                                                              </ol>

                                                                              {/* <h6 style={{borderBottom:"1px solid #E0E0E0"}} className="pb-2">Placez ce code juste avant la balise de fermeture {'</body>'}:</h6> */}
                                                                              <div style={{fontSize:"14px",boxShadow: "rgba(0, 18, 46, 0.16) 0px 8px 18px 0px"}}>
                                                                                 <PrismCode component="pre" className="language-markup">
                                                                                    {'<script src="https://srv.babacargaye.com/testfile/js/'+this.props.widget.url+'" ></script>'}
                                                                                 </PrismCode>
                                                                              
                                                                              </div>
                                                                           </CardBody>
                                                                        </Card>
                                                                     </Collapse>
                                                                  </ListGroupItem>
                                                                  <ListGroupItem className="mb-2" style={{boxShadow:"0 0 0 0.1rem rgba(152, 159, 166, 0.5)",borderRadius: "5px"}}>

                                                                     <div className="d-flex justify-content-between">
                                                                        <div className="media-left">
                                                                           <img className="media-object d-flex mr-3 bg-primary height-40 rounded-circle" src={logoPrestashop} />
                                                                        </div>
                                                                        <div style={{color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom mt-1">
                                                                           PrestaShop
                                                                        </div>
                                                                        <div>

                                                                           <Button
                                                                              className="mb-0 bg-white mt-1 p-1 nohover"
                                                                              onClick={() => this.toggleCollaps("collapsePresta", this.state.collapsePresta)}
                                                                              style={{boxShadow:"0 0 0 0.2rem rgba(0, 157, 160, 0.25)", fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "18px"}}>
                                                                              
                                                                              {
                                                                                 (!this.state.collapsePresta)?
                                                                                 (<ChevronDown color="black" />):
                                                                                 (<ChevronUp color="black" />)
                                                                              }
                                                                              
                                                                           </Button>
                                                                        </div>
                                                                     </div>

                                                                     <Collapse isOpen={this.state.collapsePresta}>
                                                                        <Card>
                                                                           <CardBody className="px-0">
                                                                              <h6 style={{borderBottom:"1px solid #E0E0E0"}} className="pb-2">Placez ce code juste avant la balise de fermeture {'</body>'}:</h6>
                                                                              <div style={{fontSize:"14px",boxShadow: "rgba(0, 18, 46, 0.16) 0px 8px 18px 0px"}}>
                                                                                 <PrismCode component="pre" className="language-markup">
                                                                                    {'<script src="https://srv.babacargaye.com/testfile/js/'+this.props.widget.url+'" ></script>'}
                                                                                 </PrismCode>
                                                                              
                                                                              </div>
                                                                           </CardBody>
                                                                        </Card>
                                                                     </Collapse>
                                                                  </ListGroupItem>

                                                                  <ListGroupItem className="mb-2" style={{boxShadow:"0 0 0 0.1rem rgba(152, 159, 166, 0.5)",borderRadius: "5px"}}>

                                                                     <div className="d-flex justify-content-between">
                                                                        <div className="media-left">
                                                                           <img className="media-object d-flex mr-3 height-40 rounded-circle" src={logoShopify} />
                                                                        </div>
                                                                        <div style={{color:"rgba(0, 157, 160, 1)"}} className="align-text-bottom mt-1">
                                                                           Shopify
                                                                        </div>
                                                                        <div>

                                                                           <Button
                                                                              className="mb-0 bg-white mt-1 p-1 nohover"
                                                                              onClick={() => this.toggleCollaps("collapseShopify", this.state.collapseShopify)}
                                                                              style={{boxShadow:"0 0 0 0.2rem rgba(0, 157, 160, 0.25)", fontSize:"12px", padding: "0 8px", lineHeight: "1.5", borderRadius: "18px"}}>
                                                                              
                                                                              {
                                                                                 (!this.state.collapseShopify)?
                                                                                 (<ChevronDown color="black" />):
                                                                                 (<ChevronUp color="black" />)
                                                                              }
                                                                              
                                                                           </Button>
                                                                        </div>
                                                                     </div>

                                                                     <Collapse isOpen={this.state.collapseShopify}>
                                                                        <Card>
                                                                           <CardBody className="px-0">
                                                                              <h6 style={{borderBottom:"1px solid #E0E0E0"}} className="pb-2">Placez ce code juste avant la balise de fermeture {'</body>'}:</h6>
                                                                              <div style={{fontSize:"14px",boxShadow: "rgba(0, 18, 46, 0.16) 0px 8px 18px 0px"}}>
                                                                                 <PrismCode component="pre" className="language-markup">
                                                                                    {'<script src="https://srv.babacargaye.com/testfile/js/'+this.props.widget.url+'" ></script>'}
                                                                                 </PrismCode>
                                                                              
                                                                              </div>
                                                                           </CardBody>
                                                                        </Card>
                                                                     </Collapse>
                                                                     </ListGroupItem>

                                                                  
                                                               </ListGroup>
                                                            </CardBody>
                                                      </Card>
                                                   </Col>
                                                </Row>
                                             </TabPane>
                                          </TabContent>
                                       </div>
                                    </CardBody>
                                 </Card>
                              </Col>

                              {
                                 (this.props.currentProject.id && this.props.currentProject.typeService == "SERVICE_CALL")?
                                 (<Col sm="4" className="" style={{height:"470px"}}>

                                 <div style={{padding: "15px", backgroundImage: `url(${imgBack})`, height:"470px"}} className="">
   
                                 {
                                   
                                    (!this.state.toggleView)?(
                                       
                                       <Card className="bg-white m-0" style={{boxShadow: "0 8px 18px 0 rgba(0,18,46,0.16)", height:"100%",width:"100%", borderRadius:"10px"}}>  
                                          <CardHeader style={{background: this.props.widget.theme}} className="px-2 py-3">                    
                                             <Row className="mr-0 ml-0" >
                                                <Col sm="10" className="d-flex justify-content-end col-md-10 col-xs-10 col-sm-10">
                                                </Col>
                                                <Col sm="2" className="d-flex pr-1 justify-content-end col-md-2 col-xs-2 col-sm-2">
                                                   <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} className="p-0 mb-0 bg-transparent">
                                                       <X style={{color:"#fff"}} />
                                                   </Button>
                                                   
                                                </Col>
                                             </Row>
                                          </CardHeader>                
                                          <CardBody >
                                             <Row >
                                             </Row>
                                             
   
                                          <div className="d-flex justify-content-center col-md-12 col-xs-12 col-sm-12">
   
                                             <div style={{background: this.props.widget.theme, opacity: "0.3", padding: "110px"}} className="rounded-circle d-flex align-items-center fg-white">
   
                                             </div>
                                             <span style={{position: "absolute", display: "block", marginTop: "50px"}}>
                                               <User  style={{color:this.props.widget.theme, opacity:"1", fontWeight: "normale"}} size={120} />
                                             </span>
                                          </div>
                                          
                                             {/* <div style={{position: "relative", height:"50%"}} className="p-2 pt-5 bd-highlight">
   
                                                <div style={{}} >
                                                   <Row check row >
                                                      <Col sm="6" xs="6" className="d-flex justify-content-end">
                                                         <Button className="rounded-circle p-2">
                                                            <Mic />
                                                         </Button>
                                                      </Col>
                                                      <Col sm="6" xs="6" className="d-flex justify-content-start">
                                                         <Button className="rounded-circle p-2">
                                                            <Volume2 />
                                                         </Button>
                                                      </Col>
                                                   </Row>
                                                </div>
   
                                             </div>
   
                                          </div> */}
   
                                          </CardBody>
                                          <CardFooter style={{background: this.props.widget.theme}} >
                                             <Row >
                                                <Col sm="12" className="col-md-12 col-xs-12 col-sm-12">
                                                   <Button block style={{borderColor:"#fff",background: "#fff", color: "#000", fontSize: "18px", lineHeight: "34px", fontWeight: "400"}} className="btn mb-0 btn-block btn-md">
                                                      Terminer
                                                   </Button>
                                                </Col>
                                             </Row>
                                          </CardFooter>
                                       </Card>
                                    
                                    ):(<div className="" style={{position:"absolute", width:"112px", height:"100px", bottom:"12px", display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none", zIndex:"1", right:"12px"}}>
                                       <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} style={{width:"60px", height: "60px", paddingTop: "12px", borderRadius: "30px", pointerEvents: "initial", transform: "translateY(0px)", transition: "none 0s ease 0s", cursor: "pointer", color: "rgb(255, 255, 255)", background: this.props.widget.theme, justifyContent: "center", position: "relative", outline: "none", willChange: "transform", boxShadow: this.props.widget.theme+" 0px 2px 12px"}} className="p-0 mb-0">
                                             <Phone style={{color:"#fff"}} />
                                       </Button>
                                    </div>)
                                    
                                 }
                                 </div>
   
                                 </Col>):
                                 (<Col sm="5" className="" style={{height:"470px"}}>

                                 <div style={{padding: "15px", backgroundImage: `url(${imgBack})`, height:"470px"}} className="">
   
                                 {
                                   
                                    (!this.state.toggleView)?(
                                       
                                       <Card className="bg-white m-0" style={{boxShadow: "0 8px 18px 0 rgba(0,18,46,0.16)", height:"100%",width:"100%", borderRadius:"10px"}}>  
                                          <CardHeader style={{background: this.props.widget.theme}} className="px-2 py-3">                    
                                             <Row className="mr-0 ml-0" >
                                                <Col sm="10" className="d-flex justify-content-end col-md-10 col-xs-10 col-sm-10">
                                                </Col>
                                                <Col sm="2" className="d-flex pr-1 justify-content-end col-md-2 col-xs-2 col-sm-2">
                                                   <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} className="p-0 mb-0 bg-transparent">
                                                       <X style={{color:"#fff"}} />
                                                   </Button>
                                                   
                                                </Col>
                                             </Row>
                                          </CardHeader>                
                                          <CardBody style={{background: "#e0e0de"}} className="d-flex p-0 align-items-end">
                                             <Row style={{display:"block", overflow: "auto", width: "100%", minHeight:"160px", maxHeight:"357px", height:"357px"}} className="mx-0 pb-1">

                                                <fieldset style={{background: "#e0e0de"}} className="p-0 pr-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                   <span style={{display: "flex"}} className="msg-to text-left ml-2 bg-light px-2 py-1 float-right">
                                                      Bonjour,
                                                   </span> 
                                                </fieldset>
                                                <fieldset style={{background: "#e0e0de"}} className="p-0 pr-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                   <span style={{display: "flex"}} className="msg-to text-left ml-2 bg-light px-2 py-1 float-right rounded">
                                                    Pouvez-vous m'aider à valider ma commande
                                                   </span> 
                                                </fieldset>
                                                <fieldset style={{background: "#e0e0de"}} className="p-0 pl-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                   <span style={{display: "flex"}} className="msg-from mr-2 bg-white px-2 py-1 float-left rounded">
                                                      Bonjour et bienvenue sur notre site,
                                                      Pour mieux vous aider, pouvez-vous me fournir le numéro de votre commande
                                                   </span> 
                                                </fieldset>
                                                <fieldset style={{background: "#e0e0de"}} className="p-0 pr-3 col-lg-12 mt-3 col-xs-12 col-12">
                                                   <span style={{display: "flex"}} className="msg-to text-right ml-2 bg-light px-2 py-1 float-right rounded">
                                                      Le numéro est : 01024578
                                                   </span> 
                                                </fieldset>
                                             </Row>
                                          </CardBody>
                                          <CardFooter style={{background: this.props.widget.theme}} >
                                             <Row >
                                                <Col sm="12" className="col-md-12 col-xs-12 col-sm-12">
                                                <Row >
                                                <fieldset className="col-lg-10 col-xs-10 col-sm-10 col-md-10 col-10 m-0"> 
                                                      <Input 
                                                         type="text" 
                                                         className="form-control" 
                                                         id="ja-textInput" 
                                                         placeholder="Entrer votre message" 
                                                      />
                                                </fieldset>
                                                <fieldset className="col-lg-2 col-xs-10 col-sm-10 col-md-10 col-2 m-0 pl-0">
                                                      <button block   style={{boxShadow: "0 0 0 2px rgba(38, 48, 60, 0.21)", borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}}  type="button" className="pull-right btn rounded bg-white mb-0 btn-raised" >
                                                         <i className="fa fa-paper-plane-o hidden-lg-up"></i>
                                                      </button>
                                                </fieldset>
                                                </Row>
                                                </Col>
                                             </Row>
                                          </CardFooter>
                                       </Card>
                                    
                                    ):(<div className="" style={{position:"absolute", width:"112px", height:"100px", bottom:"12px", display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none", zIndex:"1", right:"12px"}}>
                                          <Button onClick={() => { this.setState({toggleView:!this.state.toggleView}) }} style={{width:"60px", height: "60px", paddingTop: "12px", borderRadius: "30px", pointerEvents: "initial", transform: "translateY(0px)", transition: "none 0s ease 0s", cursor: "pointer", color: "rgb(255, 255, 255)", background: this.props.widget.theme, justifyContent: "center", position: "relative", outline: "none", willChange: "transform", boxShadow: this.props.widget.theme+" 0px 2px 12px"}} className="p-0 mb-0">
                                                <MessageSquare style={{color:"#fff"}} />
                                          </Button>
                                       </div>)
                                    
                                 }
                                 </div>
   
                                 </Col>)
                              }

                           </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
      );
   }
}
  

 const mapStateToProps = state => ({
    currentProject: state.currentProject,
    currentUser: state.currentUser,
    widget: state.widgetReducer
 })

 const mapDispatchToProps = dispatch => ({
   handleWidget: (widget) => dispatch(SetWidget(widget)),
   handleWidgetTheme: (theme) => dispatch(SetWidgetTheme(theme)),    
})
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(WidgetSetting)