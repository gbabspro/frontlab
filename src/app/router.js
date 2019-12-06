// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

import { getCurrentUser } from '../utility/APIutils';

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import Dashboard from "../views/pages/dash/dashboard";
import Operators from "../views/pages/operators/operators";
// import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Full Layout
const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
const LazyLogin = lazy(() => import("../views/pages/login/login"));
//const LoginBox = lazy(() => import("../jsx/page_login"));
// const LoginCall = lazy(() => import("../jsx/page_calls"));

const LazyRegister = lazy(() => import("../views/pages/register"));
const LazyResetPassword = lazy(() => import("../views/pages/resetPassword"));
// const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
// const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));
const LazyUserProfile = lazy(() => import("../views/pages/userProfile"));
const LazyMarketPlace = lazy(() => import("../views/pages/marketPlace"));
const LazyServices = lazy(() => import("../views/pages/services"));
const LazySingleService = lazy(() => import("../views/pages/singleService"));
const LazyCallInterface = lazy(() => import("../views/pages/call/callInterface"));
const LazyChatInterface = lazy(() => import("../views/pages/chat/chatInterface"));
const LazyBilling = lazy(() => import("../views/pages/billing"));
const Catalogue = lazy(() => import("../views/pages/catalogue/catalogue"));
// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

const RegistrationConfirm = lazy(() => import("../views/pages/regitrationConfirm"));

class Router extends Component {

   constructor(props) {
      super(props);
      this.state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: true
      }
      // this.handleLogout = this.handleLogout.bind(this);
      this.loadCurrentUser = this.loadCurrentUser.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.loadCurrentUser();
   }

   loadCurrentUser() {
      getCurrentUser()
      .then(response => {
         console.log("currentUser : ", response)
         if(response.authorities[0].authority == "ROLE_MANAGER"){
            this.setState({
               currentUser: response,
               isAuthenticated: true,
               isLoading: false
             });
            //  this.props.history.push("/pages/user-profile");
         }else if(response.authorities[0].authority != "ROLE_AGENT"){

            // this.props.history.push("/pages/agent/interface");
         }else if(response.authorities[0].authority != "ROLE_SUP"){

         }


      }).catch(error => {
        this.setState({
          isLoading: false
        });  
      });
    }


   handleLogin() {
      this.loadCurrentUser();
   }
  

   render() {
         if(this.state.isLoading) {
           return (<div></div>);
         }
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="/">
            <Switch>

               {/* Saperate Pages Views */}
               <FullPageLayout
                  exact
                  path="/pages/forgot-password"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyForgotPassword {...matchprops} />
                     </Suspense>
                  )}
               />
               <FullPageLayout
                  exact
                  path="/pages/login"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLogin onLogin={this.handleLogin} />
                     </Suspense>
                  )}
               />

               {/* <FullPageLayout
                  exact
                  path="/pages/call"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LoginCall  />
                     </Suspense>
                  )}
               /> */}
               <FullPageLayout
                  exact
                  path="/pages/register"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyRegister {...matchprops} />
                     </Suspense>
                  )}
               />
               <FullPageLayout
                  exact
                  path="/"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <Catalogue {...matchprops} />
                     </Suspense>
                  )}
               />
               <FullPageLayout
                  exact
                  path="/pages/changer-password/:token"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyResetPassword {...matchprops} />
                     </Suspense>
                  )}
               />
               <FullPageLayout
                  exact
                  path="/pages/confirm-registration/:token"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <RegistrationConfirm {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/pages/dashboard"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <Dashboard currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />

               <MainLayoutRoutes
                  exact
                  path="/pages/operators"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <Operators currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />

               <MainLayoutRoutes
                  exact
                  path="/pages/user-profile"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyUserProfile currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/pages/marketplace"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyMarketPlace currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/pages/services"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyServices currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />
              <MainLayoutRoutes
                  exact
                  path="/pages/billing"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyBilling currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/pages/service/:idService"
                  currentUser={this.state.currentUser}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazySingleService currentUser={this.state.currentUser} {...matchprops} />
                     </Suspense>
                  )}
               />
               <FullPageLayout
                  exact
                  path="/portail/call"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyCallInterface {...matchprops} />
                     </Suspense>
                  )}
               />

               <FullPageLayout
                  exact
                  path="/portail/chat"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyChatInterface {...matchprops} />
                     </Suspense>
                  )}
               />

            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
