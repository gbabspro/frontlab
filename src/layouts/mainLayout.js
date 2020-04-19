// import external modules
import React, { PureComponent } from "react";
import classnames from "classnames";
import  { Redirect } from 'react-router-dom'
// import internal(own) modules
import { Client } from '@stomp/stompjs';
import { FoldedContentConsumer, FoldedContentProvider } from "../utility/context/toggleContentContext";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import templateConfig from "../templateConfig";
import {setCurrentProject, LoadProjects} from "../redux/actions/projects/projectsActions";
import {LoadOperators} from "../redux/actions/operators/operatorsActions";
import {setCurrentUser} from "../redux/actions/user/userActions";
import {getUserProjects, getServiceOperators, getUserOperator, getOperatorStatut} from "../utility/APIutils";
import { connect } from 'react-redux';
import { isLoading } from "../redux/actions/logstatut/offLineAction";
import Spinner from "../components/spinner/spinner";
import { setOnLine } from "../redux/actions/logstatut/onLineAction";
import { setOffLine } from "../redux/actions/logstatut/offLineAction";

var stompClient = null;

class MainLayout extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        width: window.innerWidth,
        sidebarState: "close",
        sidebarSize: '',
        layout: ''
      }
      // this.handleLogout = this.handleLogout.bind(this);
      // this.loadCurrentUser = this.loadCurrentUser.bind(this);
      // this.handleLogin = this.handleLogin.bind(this);
      // this.loadCurrentUser();

      console.log("props main layout ", this.props)
   }

   state = {

   };

   updateWidth = () => {
      this.setState(prevState => ({
         width: window.innerWidth
      }));
   };

   handleSidebarSize = (sidebarSize) => {
      this.setState({ sidebarSize });
   }

   handleLayout = (layout) => {
      this.setState({ layout });
   }

   componentDidMount() {

      if (window !== "undefined") {
         window.addEventListener("resize", this.updateWidth, false);
      }


      if(this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){

         getUserProjects()      
         .then(response => {

            console.log("reponse ", response);
            this.props.getProjects(response);
            this.props.setCurrent(response[0]);

            var extension = "";

            extension = this.props.currentProject.defaultPersonnel.extension.extension;

            getOperatorStatut(this.props.currentProject.domaine, extension)
            .then(response => {
 
               if(response=="Available"){
                  this.props.handleLoginStatut();
               }else if(response=="Logged Out"){
                  this.props.handleLogOutStatut();
               }

            }).catch(error => {
               
            });

            getServiceOperators(response[0].id)
            .then(response => {
   
               console.log("reponse ", response);
               this.props.getOperatorsList(response);



               this.setState({
                  isLoading: false
               })

            }).catch(error => {
               console.log("error ", error);
               this.setState({
                  isLoading: false
               })
            });

         }).catch(error => {
            console.log("error ", error);
         });
         
      }else if(this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_AGENT"){

         getUserOperator()
         .then(response => {

            this.props.handleCurrentUser({...response, isAuthenticated: true});
            this.setState({
               isLoading: false
            })

            var extension = "";

            extension = response.sipExtension;

            console.log("extension user ", response);

            this.props.handleLoadingStatut();
            getOperatorStatut(this.props.currentProject.domaine, extension)
            .then(response => {
 
               if(response=="Available"){
                  this.props.handleLoginStatut();
               }else if(response=="Logged Out"){
                  this.props.handleLogOutStatut();
               }

            }).catch(error => {
               
            });

         }).catch(error => {
            console.log("error ", error);
            this.setState({
               isLoading: false
            })
         });
      }else{
         this.setState({
            isLoading: false
         })
      }



      }

      

   componentWillUnmount() {
      if (window !== "undefined") {
         window.removeEventListener("resize", this.updateWidth, false);
      }
      
   }

   toggleSidebarMenu(sidebarState) {
      this.setState({ sidebarState });
   }


   handleLogin() {
      this.loadCurrentUser();
   }


   render() {

      if(this.state.isLoading){
         return <Spinner />;
      }

      if(!this.props.currentUser.isAuthenticated){
         return <Redirect to='/pages/login'  />
      }

      return (
            <FoldedContentProvider>
               <FoldedContentConsumer>
                  {context => (
                  
                     <div
                        className={classnames("wrapper ", {
                           "menu-collapsed": context.foldedContent || this.state.width < 991,
                           "main-layout": !context.foldedContent,
                           [`${templateConfig.sidebar.size}`]: (this.state.sidebarSize === ''),
                           [`${this.state.sidebarSize}`]: (this.state.sidebarSize !== ''),
                        //    "layout-dark": (this.state.layout === 'layout-dark'),
                        //    " layout-dark": (this.state.layout === '' && templateConfig.layoutDark === true)
                           [`${templateConfig.layoutColor}`]: (this.state.layout === ''),
                           [`${this.state.layout}`]: (this.state.layout !== '')
                        })}
                     >

                        <Sidebar
                           toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
                           sidebarState={this.state.sidebarState}
                           handleSidebarSize={this.handleSidebarSize.bind(this)}
                           handleLayout={this.handleLayout.bind(this)}
                        />
                        <Navbar
                           toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
                           // currentUser={this.props.currentUser}
                           sidebarState={this.state.sidebarState}
                        />
                        <div className="text-white bg-dark px-3">Notre plateforme est en cours de construction, pour le moment, uniquement le module appel est déployé. Merci de votre patience.</div>
                        <main>{this.props.children}</main>
                        <Footer />
                     </div>
                  )}
               </FoldedContentConsumer>
            </FoldedContentProvider>
      );
   }
}


const mapStateToProps = state => ({
   currentUser: state.currentUser,
   currentProject: state.currentProject
})


const mapDispatchToProps = dispatch => ({
   setCurrent: (project) => dispatch(setCurrentProject(project)),
   getProjects: (projects) => dispatch(LoadProjects(projects)),
   getOperatorsList: (operators) => dispatch(LoadOperators(operators)),
   handleCurrentUser: (user) => dispatch(setCurrentUser(user)),
   handleLoginStatut: () => dispatch(setOnLine()),
   handleLogOutStatut: () => dispatch(setOffLine()),
   handleLoadingStatut: () => dispatch(isLoading())
})
 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MainLayout)