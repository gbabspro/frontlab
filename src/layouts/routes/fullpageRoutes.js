// import external modules
import React from "react";
import { Route } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
// import internal(own) modules
import FullPageLayout from "../fullpageLayout";

const FullPageLayoutRoute = ({ render, ...rest }) => {

   return (
      <Route
         {...rest}
         render={matchProps => (
            <FullPageLayout>
               {render(matchProps)}
            </FullPageLayout>
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
)(FullPageLayoutRoute)