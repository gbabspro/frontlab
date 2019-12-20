import React, { Component, Fragment } from "react";
import {logOut} from "../../../utility/APIutils";
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';

import {logOut as LogoutAction} from "../../../redux/actions/user/userActions";

class Logout extends Component {

    constructor(props) {
      super(props);
      logOut();
      this.props.setLogout();
    }

    // componentDidMount(){

    //     console.log("loging out...")

    //     logOut();
    //     this.props.history.push("/pages/login");
    // }


    render() {

      return (
        <Redirect to='/pages/login'/>
      );
    }
}

 const mapStateToProps = state => ({
    currentUser: state.currentUser,
 })
 
const mapDispatchToProps = dispatch => ({
    setLogout: () => dispatch(LogoutAction())
 })
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Logout)