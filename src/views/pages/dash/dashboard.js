import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Table, Badge } from "reactstrap";
import { Briefcase, PhoneIncoming, UserCheck, PhoneMissed, PhoneCall, TrendingUp, TrendingDown, Activity, UserX, UserPlus } from "react-feather";
import { loadOperatorsFromAPI, loadcallsWaitingFromAPI, listAgentsIn, listAgentsOut } from "../../../utility/APIutils";
import { connect } from 'react-redux';
import MinimalStatisticsBG from "../../../components/cards/minimalStatisticsBGCard";
import MinimalStatisticsBGCust from "../../../components/cards/minimalStatisticsBGCardCust";
import MinimalStatistics from "../../../components/cards/minimalStatisticsCard";
import FitnessStatisticsCardWithChart from "../../../components/cards/fitnessStatisticsWithChartCard";
import MinimalStatisticsCust from "../../../components/cards/minimalStatisticsCardCust";

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
        operatorsStatusIn: {
          loading: false,
          number: 0
        },
        operatorsStatusOut: {
          loading: false,
          number: 0
        }
      }
      this.loadOperators = this.loadOperators.bind(this);
      this.loadCallsWaiting = this.loadCallsWaiting.bind(this);
      this.loadOperatorsStatusIn = this.loadOperatorsStatusIn.bind(this);
      this.loadOperatorsStatusOut = this.loadOperatorsStatusOut.bind(this);
    }

    componentDidMount(){
      
      this.loadOperators();
      this.loadCallsWaiting();
      this.loadOperatorsStatusIn();
      this.loadOperatorsStatusOut();
    }



    loadOperatorsStatusOut = () => {

      this.setState({
        operatorsStatusOut: {
          loading: true
        }
      });

      listAgentsOut(this.props.currentProject.domaine)
      .then(response => {

         console.log("response", response);
         this.setState({
          operatorsStatusOut: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          console.log("error", error);
          this.setState({
            operatorsStatusOut: {
              loading: false
            }
          });
      });
    }

    loadOperatorsStatusIn = () => {

      this.setState({
        operatorsStatusIn: {
          loading: true
        }
      });

      listAgentsIn(this.props.currentProject.domaine)
      .then(response => {

         console.log("response", response);
         this.setState({
          operatorsStatusIn: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          console.log("error", error);
          this.setState({
            operatorsStatusIn: {
              loading: false
            }
          });
      });
    }


    loadCallsWaiting = () =>{

      this.setState({
        callsWaiting: {
          loading: true
        }
      });

      loadcallsWaitingFromAPI(this.props.currentProject.domaine)
      .then(response => {

         console.log("response", response);
         this.setState({
          callsWaiting: {
            loading: false,
            number: response
          }
        });

      }).catch(error => {
          console.log("error", error);
          this.setState({
            callsWaiting: {
              loading: false
            }
          });
      });
    }


    loadOperators = () =>{

      this.setState({
        listeOperators: {
          loading: true
        }
      });

      loadOperatorsFromAPI(this.props.currentProject.domaine)
      .then(response => {

         console.log("response", response);
         this.setState({
          listeOperators: {
            loading: false,
            data: response
          }
        });

      }).catch(error => {
          console.log("error", error);
          this.setState({
            listeOperators: {
              loading: false
            }
          });
      });
    }

   render() {

      return (
        <Fragment>
        {/* <ContentHeader>Extended Tables </ContentHeader>
            <ContentSubHeader>Tables with some extra elements and feathers.</ContentSubHeader> */}
            <Row>
              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                <MinimalStatisticsBG
                    cardBgColor="gradient-blackberry"
                    statistics="100 %"
                    text="Qualité"
                    iconSide="right"
                >
                    <Activity size={56} strokeWidth="1.3" color="#fff" />
                </MinimalStatisticsBG>
              </Col>

              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                <Row>
                  <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pr-1">
                    <MinimalStatisticsBGCust
                      cardBgColor="gradient-ibiza-sunset"
                      statistics={this.state.operatorsStatusOut.number}
                      text="Hors ligne"
                      iconSide="right"
                  >
                      <UserX size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBGCust>
                  </Col>
                  <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pl-1">
                    <MinimalStatisticsBGCust
                      cardBgColor="gradient-green-teal"
                      statistics={this.state.operatorsStatusIn.number}
                      text="En ligne"
                      iconSide="right"
                  >
                      <UserPlus size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBGCust>
                  </Col>
                </Row>
              </Col>

              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                <Row>
                    <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pr-1">
                      <MinimalStatistics statistics={this.state.callsWaiting.number} statisticsColor="primary" text="En attente" iconSide="right">
                          <PhoneIncoming size={36} strokeWidth="1.3" className="primary" />
                      </MinimalStatistics>
                    </Col>
                    <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pl-1">
                      <MinimalStatistics statistics="12" statisticsColor="warning" text="En cours" iconSide="right">
                          <PhoneCall size={36} strokeWidth="1.3" className="warning" />
                      </MinimalStatistics>
                    </Col>
                  </Row>
              </Col>
              
              <Col sm="12" xs="12" md="3" xl="3" lg="3">
                <Row>
                  <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pr-1">
                    <MinimalStatistics statistics="156" statisticsColor="success" text="Reçu" iconSide="right">
                        <TrendingUp size={36} strokeWidth="1.3" className="success" />
                    </MinimalStatistics>
                  </Col>
                  <Col sm="6" xs="6" md="6" xl="6" lg="6" className="pl-1">
                    <MinimalStatistics statistics="12" statisticsColor="danger" text="Manqué" iconSide="right">
                        <TrendingDown size={36} strokeWidth="1.3" className="danger" />
                    </MinimalStatistics>
                  </Col>
                </Row>
              </Col>

            </Row>

            <Row>
              <Col sm="6">

              </Col>
              <Col sm="6">
                <Card>
                    <CardBody>
                    <Table hover>
                      <tbody>


                      {
                        (!this.state.listeOperators.loading)?
                        this.state.listeOperators.data.map((operator, id) =>{
                        return (
                            <tr key={id}>
                              <td>{operator.name}</td>
                              <td>{
                                (operator.status == "Available")?
                                (<span className="text-success">Pret</span>)
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
                                (<span className="text-info">En attente</span>):
                                (operator.state=="Receiving")?
                                (<span className="text-danger">Appel entrant</span>):
                                (operator.state=="In a queue call")?
                                (<span className="text-success">En communication</span>):
                                ""
                              }</td>    
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
  currentProject: state.currentProject
})


export default connect(
  mapStateToProps,
  null
)(Dashboard)