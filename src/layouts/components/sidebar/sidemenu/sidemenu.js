// import external modules
import React, { Component } from "react";

import {
   Home,
   Layers,
   CreditCard,
   ShoppingCart,
   MessageSquare,
   PhoneCall,
   Settings,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
         
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/dashboard" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">Dashboard</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/operators" activeclassname="active">
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Opérateurs</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/chats" activeclassname="active">
                  <i className="menu-icon">
                     <MessageSquare size={18} />
                  </i>
                  <span className="menu-item-text">Chat</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/chats" activeclassname="active">
                  <i className="menu-icon">
                     <PhoneCall size={18} />
                  </i>
                  <span className="menu-item-text">Call</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/billing" activeclassname="active">
                  <i className="menu-icon">
                     <CreditCard size={18} />
                  </i>
                  <span className="menu-item-text">Facturation</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/account" activeclassname="active">
                  <i className="menu-icon">
                     <Settings size={18} />
                  </i>
                  <span className="menu-item-text">Mon compte</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            {/* <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/marketplace" activeclassname="active">
                  <i className="menu-icon">
                     <ShoppingCart size={18} />
                  </i>
                  <span className="menu-item-text">Marketplace</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
         </SideMenu>
      );
   }
}

export default SideMenuContent;
