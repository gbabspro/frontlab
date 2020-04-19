import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Badge } from "reactstrap";
import { Briefcase, PhoneIncoming, UserCheck, PhoneMissed, PhoneCall, TrendingUp, TrendingDown, Activity, UserX, UserPlus, User } from "react-feather";
import { loadOperatorsFromAPI, loadcallsInProgressFromAPI, loadcallsWaitingFromAPI, listAgentsIn, listAgentsOut } from "../../../utility/APIutils";
import { connect } from 'react-redux';

import MinimalStatistics from "../../../components/cards/minimalStatisticsCard";
import SalesPerVisitChartCard from "../../../components/cards/salesPerVisitChartCard";
import ContentLoader, { Code, BulletList } from 'react-content-loader';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import  { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    constructor(props) {
      super(props);
      this.state = {
        listeOperators: {
            loading: false,
            data: []
        },
        callsWaiting: {
          loading: false,
          number: 0
        },
        callsInProgress: {
          loading: false,
          number: 0
        },
        operatorsStatusIn: {
          loading: false,
          number: 0
        },
        operatorsStatusOut: {
          loading: false,
          number: 0
        },
        SalesPerVisitData: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          series: [[0, 5, 15, 8, 15], [0, 3, 5, 2, 8]]
       },
      }
      this.loadOperators = this.loadOperators.bind(this);
      this.loadCallsWaiting = this.loadCallsWaiting.bind(this);
      this.loadOperatorsStatusIn = this.loadOperatorsStatusIn.bind(this);
      this.loadOperatorsStatusOut = this.loadOperatorsStatusOut.bind(this);
      this.loadCallsInProgress = this.loadCallsInProgress.bind(this);
    }

    componentDidMount(){
      
      this.loadOperators(true);
      this.loadCallsWaiting(true);
      this.loadOperatorsStatusIn(true);
      this.loadCallsInProgress(true);
      this.loadOperatorsStatusOut();
      this.setSocketConnect();
      
    }

    onConnected(frame) {

      var sessionId = "";
      var url = this.stompClient.ws._transport.url;
      url = url.replace("ws://localhost:5000/ws/",  "");
      url = url.replace("/websocket", "");
      url = url.replace(/^[0-9]+\//, "");
      //console.log("Your current session is: " + url);
      sessionId = url;

      this.stompClient.subscribe('/user/'+this.props.currentProject.domaine+'/queue/update', (payload)=>{
         
        const message = JSON.parse(payload.body)
        if(message.CCAction == "member-queue-start" || message.CCAction == "member-queue-end" || message.CCAction == "bridge-agent-start" || message.CCAction == "bridge-agent-end"){
          
          if(message.CCAction == "member-queue-end" || message.CCAction == "bridge-agent-start"){
            this.loadCallsInProgress(false);
            this.loadOperators(false);
            this.loadCallsWaiting(false);
          }else{
            this.loadCallsWaiting(false);
            this.loadOperators(false);
          }
          
        }else if(message.CCAction == "agent-status-change"){
          this.loadOperators(false);
          this.loadOperatorsStatusIn(false);
          this.loadOperatorsStatusOut();
        }
      
      });
    }

  onError(error) {
   //console.log("error ", error);
  }

  onMessageReceived(payload) {
   //console.log("payload ", payload);
  }



    setSocketConnect(){

      var header = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("accessToken")
      }

     var socket = new SockJS('http://localhost:5000/ws');

     this.stompClient = Stomp.over(socket);

     this.stompClient.connect(header, (frame) => this.onConnected(frame), this.onError);
    }

    loadOperatorsStatusOut = () => {

      this.setState({
        operatorsStatusOut: {
          loading: true,
          number: this.state.operatorsStatusOut.number
        }
      });

      listAgentsOut(this.props.currentProject.domaine)
      .then(response => {

         //console.log("response", response);
         this.setState({
          operatorsStatusOut: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          //console.log("error", error);
          this.setState({
            operatorsStatusOut: {
              loading: false
            }
          });
      });
    }

    loadOperatorsStatusIn = (canLoad) => {

      if(canLoad){
        this.setState({
          operatorsStatusIn: {
            loading: true,
            number: this.state.operatorsStatusIn.number
          }
        });
      }

      listAgentsIn(this.props.currentProject.domaine)
      .then(response => {

         //console.log("response", response);
         this.setState({
          operatorsStatusIn: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          //console.log("error", error);
          this.setState({
            operatorsStatusIn: {
              loading: false
            }
          });
      });
    }


    

    loadCallsInProgress = (canLoad) =>{


      if(canLoad){
        this.setState({
          callsInProgress: {
            loading: true,
            number: this.state.callsInProgress.number
          }
        });
      }



      loadcallsInProgressFromAPI(this.props.currentProject.domaine)
      .then(response => {

         //console.log("response", response);
         this.setState({
          callsInProgress: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          //console.log("error", error);
          this.setState({
            callsInProgress: {
              loading: false
            }
          });
      });
    }



    loadCallsWaiting = (canLoad) =>{


      if(canLoad){
        this.setState({
          callsWaiting: {
            loading: true
          }
        });
      }



      loadcallsWaitingFromAPI(this.props.currentProject.domaine)
      .then(response => {

         //console.log("response", response);
         this.setState({
          callsWaiting: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          //console.log("error", error);
          this.setState({
            callsWaiting: {
              loading: false
            }
          });
      });
    }


    loadOperators = (canLoad) =>{


      if(canLoad){
        this.setState({
          listeOperators: {
            loading: true
          }
        });
      }

      loadOperatorsFromAPI(this.props.currentProject.domaine)
      .then(response => {

         //console.log("response", response);
         this.setState({
          listeOperators: {
            loading: false,
            data: response
          }
        });

      }).catch(error => {
          //console.log("error", error);
          this.setState({
            listeOperators: {
              loading: false
            }
          });
      });
    }

   render() {
    
    if(this.props.currentUser && this.props.currentUser.authorities[0].authority=="ROLE_AGENT"){
      return <Redirect to='/pages/phone-call'  />;
    }

      return (
        <Fragment>
        {/* <ContentHeader>Extended Tables </ContentHeader>
            <ContentSubHeader>Tables with some extra elements and feathers.</ContentSubHeader> */}
            <Row>
              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                <MinimalStatistics
                    statisticsColor="warning"
                    statistics="100 %"
                    text="Qualité"
                    iconSide="right"
                >
                    <Activity size={47} strokeWidth="1.3" className="warning" />
                </MinimalStatistics>
              </Col>

              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                  {
                      (this.state.operatorsStatusIn.loading)?
                      (<Card>
                        <CardBody className="px-2 py-2">
                          <Code style={{height:"90px"}} />
                        </CardBody>
                       </Card>):
                       (<MinimalStatistics
                        statisticsColor="success"
                        statistics={this.state.operatorsStatusIn.number.toString()+" / "+this.props.operators.length.toString()}
                        text="En ligne"
                        iconSide="right"
                      >
                        <UserPlus size={47} strokeWidth="1.3" className="success" />
                    </MinimalStatistics>)

                  }
              </Col>

              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                  {
                    (this.state.callsWaiting.loading)?
                    (<Card>
                        <CardBody className="px-2 py-2">
                          <Code style={{height:"90px"}} />
                        </CardBody>
                      </Card>):
                      (<MinimalStatistics statistics={this.state.callsWaiting.number.toString()} statisticsColor="danger" text="En attente" iconSide="right">
                            <PhoneIncoming size={47} strokeWidth="1.3" className="danger" />
                      </MinimalStatistics>)
                  }
              </Col>

              <Col sm="12" xs="12" md="3" xl="3" lg="3">

              {
                    (this.state.callsInProgress.loading)?
                    (<Card>
                        <CardBody className="px-2 py-2">
                          <Code style={{height:"90px"}} />
                        </CardBody>
                      </Card>):
                      (<MinimalStatistics statistics={this.state.callsInProgress.number.toString()} statisticsColor="info" text="En cours" iconSide="right">
                            <PhoneCall size={47} strokeWidth="1.3" className="info" />
                      </MinimalStatistics>)
                  }
                  
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Row className="row-eq-height">
                  <Col sm="12" md="12">
                      <SalesPerVisitChartCard
                        salesPerVisitData={this.state.SalesPerVisitData}
                        
                        // cardTitle="Appels reçus sur Appels manqués"
                        salesText="Appels Reçus"
                        visitText="Appels manqués"
                      />
                  </Col>
                </Row>
              </Col>
              <Col sm="6">
                <Card>
                    <CardBody>
                    <CardTitle className="d-flex pl-2 justify-content-start" style={{fontSize:"14px"}}>
                        <div className="success text-lowercase">
                          {this.state.operatorsStatusIn.number+" En ligne"}
                        </div>
                        <div className="danger ml-3 text-lowercase">
                          {this.state.operatorsStatusOut.number+" Hors ligne"}
                        </div>
                        <div className="warning ml-3 text-lowercase">
                          {this.state.callsInProgress.number+" Conversations"}
                        </div>
                    </CardTitle>

                    {
                        (this.state.listeOperators.loading)?
                        (<BulletList />):
                        (<Table responsive>
                          <tbody>
                            { (this.state.listeOperators != undefined)?
                              this.state.listeOperators.data.map((operator, id) =>{
                                return ( 
                                  <tr key={id}>
                                    <td>{
                                      this.props.operators.map((agent, id) =>{
                                        return (agent.extension.extension==operator.name)?(agent.lastname+" "+agent.firstname):""
                                      })
                                    
                                    }</td>

                                    <td>{
                                      (operator.status == "Available")?
                                      (<span className="text-success">En ligne</span>)
                                      :(operator.status == "Logged Out")?
                                      (<span className="text-danger">Hors ligne</span>):
                                      (operator.status == "On Break")?
                                      (<span className="text-warning">Occupé</span>):
                                      (operator.status == "Available (On Demand)")?
                                      (<span className="text-warning">Occupé</span>):""
                                      }
                                    </td>
                                    <td>{
                                      (operator.state=="Waiting")?
                                      (""):
                                      (operator.state=="Receiving")?
                                      (<span className="text-danger">Appel entrant</span>):
                                      (operator.state=="In a queue call")?
                                      (<span className="text-success">En communication</span>):
                                      ""
                                    }</td>    
                                  </tr>)
                              }):""
                            }
                          </tbody>
                        </Table>)
                    }


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
  operators: state.operators
})


export default connect(
  mapStateToProps,
  null
)(Dashboard)