// import external modules
import React from "react";
import { Route } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
// import internal(own) modules
import AuthLayout from "../authLayout";

const AuthPageLayoutRoute = ({ render, ...rest }) => {

    console.log("props auth login ", rest)

   if(rest.currentUser.isAuthenticated){
    return <Redirect to='/pages/dashboard'  />
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