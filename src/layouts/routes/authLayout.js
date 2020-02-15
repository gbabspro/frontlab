// import external modules
import React from "react";
import { Route } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { ACCESS_TOKEN } from '../../constants';
// import internal(own) modules
import AuthLayout from "../authLayout";


const AuthPageLayoutRoute = ({ render, ...rest }) => {

   if(rest.currentUser.isAuthenticated && rest.currentUser.authorities[0].authority == "ROLE_MANAGER"){
      return <Redirect to='/pages/dashboard'  />
   }else if(rest.currentUser.isAuthenticated && rest.currentUser.authorities[0].authority == "ROLE_AGENT"){
      return <Redirect to='/pages/phone-call'  />
   }
   return (
      <Route
         {...rest}
         render={matchProps => (
            <AuthLayout>
               {render(matchProps)}
            </AuthLayout>
         )}
      />
   );
};

const mapStateToProps = state => ({
    currentUser: state.currentUser,
 })
 
  
 export default connect(
    mapStateToProps,
    null
 )(AuthPageLayoutRoute)