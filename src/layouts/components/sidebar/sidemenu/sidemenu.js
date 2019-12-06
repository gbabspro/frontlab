// import external modules
import React, { Component } from "react";

import {
   Home,
   Layers,
   CreditCard,
   ShoppingCart
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
               <NavLink to="/email" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">Dashboard</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/pages/services" activeclassname="active">
                  <i className="menu-icon">
                     <Layers size={18} />
                  </i>
                  <span className="menu-item-text">Mes services</span>
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
               <NavLink to="/pages/marketplace" activeclassname="active">
                  <i className="menu-icon">
                     <ShoppingCart size={18} />
                  </i>
                  <span className="menu-item-text">Marketplace</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         </SideMenu>
      );
   }
}

export default SideMenuContent;
