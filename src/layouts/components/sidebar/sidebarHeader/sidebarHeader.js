// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ToggleLeft, ToggleRight, X } from "react-feather";
// import internal(own) modules
import { FoldedContentConsumer } from "../../../../utility/context/toggleContentContext";
import Logo from "../../../../assets/img/logoalloskyblanc.png";
import LogoDark from "../../../../assets/img/logoallosky.png";
import templateConfig from "../../../../templateConfig";

class SidebarHeader extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("close");
   };

   render() {
      return (
         <FoldedContentConsumer>
            {context => (
               <div className="sidebar-header">
                  <div className="logo clearfix p-1 pb-3">
                     <NavLink to="/" className="logo-text float-left">
                        <div className="logo-img">
                           {templateConfig.sidebar.backgroundColor === "white" ? (
                              this.props.sidebarBgColor === "" || this.props.sidebarBgColor === "white" ? (
                                 <img src={LogoDark} width="75px" alt="logo" />
                              ) : (
                                 <img src={Logo} width="75px" alt="logo" />
                              )
                           ) : this.props.sidebarBgColor === "white" ? (
                              <img src={LogoDark} width="75px" alt="logo" />
                           ) : (
                              <img src={Logo} width="75px" alt="logo" />
                           )}                           
                        </div>
                        <span className="text align-middle"></span>
                     </NavLink>
                  </div>
               </div>
            )}
         </FoldedContentConsumer>
      );
   }
}

export default SidebarHeader;
