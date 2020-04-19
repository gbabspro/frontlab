// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";


// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import AuthLayout from "../layouts/routes/authLayout";
import Dashboard from "../views/pages/dash/dashboard";
import Operators from "../views/pages/operators/operators";
import {setCurrentUser} from "../redux/actions/user/userActions";
// import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

import { connect } from 'react-redux';
import { getCurrentUser, getOperatorService } from '../utility/APIutils';
import {setCurrentProject} from "../redux/actions/projects/projectsActions";
import HomePageLayout from "../layouts/routes/fullpageRoutesHome";




// Full Layout
const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
const LazyLogin = lazy(() => import("../views/pages/login/login"));
//const LoginBox = lazy(() => import("../jsx/page_login"));
// const LoginCall = lazy(() => import("../jsx/page_calls"));

const LazyRegister = lazy(() => import("../views/pages/register/register"));
const LazyResetPassword = lazy(() => import("../views/pages/resetPassword"));
// const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
// const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));
const LazyUserProfile = lazy(() => import("../views/pages/userProfile"));
const LazyServices = lazy(() => import("../views/pages/services"));
const WidgetSetting = lazy(() => import("../views/pages/widget/widgetSetting"));
const LazyHome = lazy(() => import("../views/pages/home/home"));
const LazyLogout = lazy(() => import("../views/pages/logout/logout"));
const AlloSkyState = lazy(() => import("../views/pages/state/alloskyState"));

const RegistrationConfirm = lazy(() => import("../views/pages/regitrationConfirm"));
const LazyLiveChat = lazy(() => import("../views/pages/chat/liveChat"));
const LazyPhoneCall = lazy(() => import("../views/pages/call/phoneCall"));
class Router extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true
       }
      this.loadCurrentUser = this.loadCurrentUser.bind(this);
      
   }

   componentDidMount(){
      this.loadCurrentUser();
   }
  

   loadCurrentUser() {

            
      getCurrentUser()
      .then(response => {

        

         if(response.authorities && response.authorities[0].authority == "ROLE_MANAGER"){
         
   
            this.props.handleCurrentUser({...response, isAuthenticated: true});
   
            this.setState({
               isLoading: false
            })
   
   
         }else if(response.authorities && response.authorities[0].authority == "ROLE_AGENT"){
   
           

            getOperatorService()
            .then(response => {
               this.props.handleCurrentProject(response);   
            }).catch(error => {

            });    
            this.props.handleCurrentUser({...response, isAuthenticated: true});
            this.setState({
               isLoading: false
            })

         }else{
            this.setState({
               isLoading: false
            })
         }

      }).catch(error => {
        this.setState({
          isLoading: false
        });  
      });


    }

   render() {

      if(this.state.isLoading){
         return <Spinner />
      }

      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="/">
            <Switch>

               {/* Saperate Pages Views */}
               <AuthLayout
                  exact
                  path="/pages/forgot-password"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyForgotPassword {...matchprops} />
                     </Suspense>
                  )}
               />
               <AuthLayout
                  exact
                  path="/pages/login"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLogin {...matchprops} />
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
               <AuthLayout
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
                  path="/logout"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLogout {...matchprops} />
                     </Suspense>
                  )}
               />

               
               <HomePageLayout
                  exact
                  path="/"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyHome {...matchprops} />
                     </Suspense>
                  )}
               />

               <HomePageLayout
                  exact
                  path="/states"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <AlloSkyState {...matchprops} />
                     </Suspense>
                  )}
               />
               <AuthLayout
                  exact
                  path="/pages/changer-password/:token"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyResetPassword {...matchprops} />
                     </Suspense>
                  )}
               />
               <AuthLayout
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
                  
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <Dashboard  {...matchprops} />
                     </Suspense>
                  )}
               />

               {
                  (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
                  (<MainLayoutRoutes
                     exact
                     path="/pages/operators"
                     
                     render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                           <Operators  {...matchprops} />
                        </Suspense>
                     )}
                  />):""
               }

               {
                  (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
                  (<MainLayoutRoutes
                     exact
                     path="/pages/widget"
                     
                     render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                           <WidgetSetting  {...matchprops} />
                        </Suspense>
                     )}
                    />):""
               }

               {/* <MainLayoutRoutes
                  exact
                  path="/pages/account"
                  
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyUserProfile  {...matchprops} />
                     </Suspense>
                  )}
               /> */}

               <MainLayoutRoutes
                  exact
                  path="/pages/live-chat"
                  
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLiveChat  {...matchprops} />
                     </Suspense>
                  )}
               />

              <MainLayoutRoutes
                  exact
                  path="/pages/phone-call"
                  
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyPhoneCall  {...matchprops} />
                     </Suspense>
                  )}
               />
               

               <MainLayoutRoutes
                  exact
                  path="/pages/services"
                  
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyServices  {...matchprops} />
                     </Suspense>
                  )}
               />

            </Switch>
         </BrowserRouter>
      );
   }
}

const mapStateToProps = state => ({
   currentProject: state.currentProject,
   currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
   handleCurrentUser: (user) => dispatch(setCurrentUser(user)),
   handleCurrentProject: (project) => dispatch(setCurrentProject(project)),
})

 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Router)