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
import {getUserProjects, getServiceOperators, getUserOperator} from "../utility/APIutils";
import { connect } from 'react-redux';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import Spinner from "../components/spinner/spinner";


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

   onConnected() {
      // Subscribe to the Public Topic
      stompClient.subscribe('/user/queue/agent-update', (payload)=>{console.log("payload ", payload)} );
  }

  onError(error) {
   console.log("error ", error);
  }

  onMessageReceived(payload) {
   console.log("payload ", payload);
}



   componentDidMount() {

      var socket = new SockJS('http://localhost:5000/ws');

      stompClient = Stomp.over(socket);

      stompClient.connect({}, this.onConnected, this.onError);



      if (window !== "undefined") {
         window.addEventListener("resize", this.updateWidth, false);
      }


      if(this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER"){

         getUserProjects()      
         .then(response => {

            console.log("reponse ", response);
            this.props.getProjects(response);
            this.props.setCurrent(response[0])

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
         
      }else if(this.props.currentUser.roles && this.props.currentUser.roles[0].name == "ROLE_AGENT"){

         getUserOperator()
         .then(response => {

            console.log("response project current ", response)

            this.props.setCurrent(response.service);        
            this.props.handleCurrentUser({...response, isAuthenticated: true});
            this.setState({
               isLoading: false
            })


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
})


const mapDispatchToProps = dispatch => ({
   setCurrent: (project) => dispatch(setCurrentProject(project)),
   getProjects: (projects) => dispatch(LoadProjects(projects)),
   getOperatorsList: (operators) => dispatch(LoadOperators(operators)),
   handleCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MainLayout)