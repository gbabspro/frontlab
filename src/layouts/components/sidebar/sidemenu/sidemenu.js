// import external modules
import React, { Component } from "react";

import {
   Home,
   Layers,
   CreditCard,
   ShoppingCart,
   MessageSquare,
   MessageCircle,
   PhoneCall,
   Settings,
   Users,
   Sliders
} from "react-feather";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
      
            
            {
               (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
               (<SideMenu.MenuSingleItem badgeColor="danger">
                  <NavLink to="/pages/dashboard" activeclassname="active">
                     <i className="menu-icon">
                        <Home size={18} />
                     </i>
                     <span className="menu-item-text">Dashboard</span>
                  </NavLink>
               </SideMenu.MenuSingleItem>):""
            }


            {
                  (this.props.currentProject.typeService == "SERVICE_CALL")?
                  (<SideMenu.MenuSingleItem badgeColor="danger">
                     <NavLink to="/pages/phone-call" activeclassname="active">
                        <i className="menu-icon">
                           <PhoneCall size={18} />
                        </i>
                        <span className="menu-item-text">Phone Call</span>
                     </NavLink>
                  </SideMenu.MenuSingleItem>
                  ):(
                     <SideMenu.MenuSingleItem badgeColor="danger">
                     <NavLink to="/pages/live-chat" activeclassname="active">
                        <i className="menu-icon">
                           <MessageCircle size={18} />
                        </i>
                        <span className="menu-item-text">Live Chat</span>
                     </NavLink>
                  </SideMenu.MenuSingleItem>
                  )
            }

            {
               (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
               (<SideMenu.MenuSingleItem badgeColor="danger">
                  <NavLink to="/pages/widget" activeclassname="active">
                     <i className="menu-icon">
                        <Sliders size={18} />
                     </i>
                     <span className="menu-item-text">Widget</span>
                  </NavLink>
               </SideMenu.MenuSingleItem>):""
            }

            {
               (this.props.currentUser.authorities && this.props.currentUser.authorities[0].authority == "ROLE_MANAGER")?
               (<SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/operators" activeclassname="active">
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Opérateurs</span>
               </NavLink>
            </SideMenu.MenuSingleItem>):""
            }


            {/* <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/account" activeclassname="active">
                  <i className="menu-icon">
                     <Settings size={18} />
                  </i>
                  <span className="menu-item-text">Mon compte</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}

         </SideMenu>
      );
   }
}

const mapStateToProps = state => ({
   currentProject: state.currentProject,
   currentUser: state.currentUser
})

 
export default connect(
   mapStateToProps,
   null
)(SideMenuContent)