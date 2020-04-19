import React, { Component } from "react";
import { Card, CardBody, Row, Col, Button, FormGroup} from "reactstrap";
import { Link } from "react-router-dom";
import logoAlloSkyBlanc from "../../../assets/img/logoalloskyblanc.png";
import logoAlloSky from "../../../assets/img/logoallosky.png";
class HomeNavbar extends Component {

   constructor(props) {
        super(props);
        this.state = {
            navBackground:"white",
            isTop: true,
        }
   }

   componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

   render() {
    return ( <nav className={(!this.state.isTop)?"bg-white":""} style={{ boxShadow:"0 2px 2px rgba(0,0,60,.08)",position:'fixed', width:'100%', zIndex:"999"}}>
                <div  className="container-fluid">
                    <Row>
                        <Col sm="1" className="d-none pt-2 text-left d-xl-block d-md-block">
                        <div>
                            {
                                (this.state.isTop)?
                                (<img
                                    className="rounded height-auto"
                                    src={logoAlloSkyBlanc}
                                    width="80px"
                                    height="auto"
                                    style={{alignItem:"left"}}
                                    alt="bg-image04"
                                />):
                                (<img
                                    className="rounded height-auto"
                                    src={logoAlloSky}
                                    width="80px"
                                    height="auto"
                                    style={{alignItem:"left"}}
                                    alt="bg-image04"
                                />)
                            }
                        </div>

                        </Col>
                        <Col sm="8" className="px-4 d-none pt-2 text-left d-xl-block d-md-block">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <Link to="/" style={{fontSize:"15px"}} className={(this.state.isTop)?"text-white nav-link":"text-dark nav-link"} data-toggle="pill"  role="tab" aria-controls="pills-home" aria-selected="true">
                                        Documentation
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" style={{fontSize:"15px"}} className={(this.state.isTop)?"text-white nav-link":"text-dark nav-link"} data-toggle="pill"  role="tab" aria-controls="pills-home" aria-selected="true">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" style={{fontSize:"15px"}} className={(this.state.isTop)?"text-white nav-link":"text-dark nav-link"} data-toggle="pill"  role="tab" aria-controls="pills-home" aria-selected="true">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="3" className="px-0">
                            <Card style={{boxShadow:"none", backgroundColor:'transparent'}}>
                                <CardBody className="d-flex justify-content-end py-0">
                                    <FormGroup className="d-flex justify-content-center mb-0 " >
                                        <Link to="/pages/login">
                                            <Button className="py-1 text-center my-0 text-bold-400" style={{fontSize:'16px',background:"linear-gradient(to right,#4f74fe,#70aafb)",boxShadow:"0 2px 2px rgba(0,0,60,.08)", display: 'flex', alignItem:"center", borderRadius: "6px", justifyContent: 'center'}}>
                                                Se connecter
                                            </Button>
                                        </Link>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </nav>);
   
   }

}

export default HomeNavbar;