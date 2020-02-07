// import external modules
import React from "react";
import { Route } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
// import internal(own) modules
import HomePageLayout from "../homePageLayout";

const FullPageLayoutRouteHome = ({ render, ...rest }) => {

   return (
      <Route
         {...rest}
         render={matchProps => (
            <HomePageLayout>
               {render(matchProps)}
            </HomePageLayout>
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
)(FullPageLayoutRouteHome)