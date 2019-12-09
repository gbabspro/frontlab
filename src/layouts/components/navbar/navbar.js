// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Collapse,
   Navbar,
   Nav,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Form
} from "reactstrap";
import {
   Menu,
   MoreVertical,
   User,
   LogOut,
   ChevronRight
} from "react-feather";
import NavbarSearch from "../../../components/search/Search";
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";

class ThemeNavbar extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   render() {
      return (
         <Navbar style={{background: "white"}} className="border-bottom navbar navbar-expand-lg navbar-white px-3 bg-faded">
            <div className="container-fluid px-0">
               <div style={{borderRight: "1px solid grey"}} className="navbar-header">
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  <Form className="navbar-form float-left" role="search">
                     <NavbarSearch />
                  </Form>
                  {/* <Moon size={20} color="#333" className="m-2 cursor-pointer"/> */}
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />


               </div>
               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>

                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle style={{borderRadius: '5px'}} className="rounded bg-white" nav>
                              {/* <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" /> */}
                              {/* <span className="font-small-5 .font-medium-2 font-weight-normal ml-1 text-black">
                                    {this.props.currentUser ? this.props.currentUser.firstname+' '+
                                    this.props.currentUser.lastname  : ''}
                              </span> */}
                              <div style={{background: "#dee2e6", padding: "0px 9px", borderBottom: "1px solid rgba(0,0,0,0.125)"}} className="rounded-circle">
                              <User size={16} color="white" className="" />
                              </div>
                           </DropdownToggle>
                           <DropdownMenu right>

                              <Link to="/pages/user-profile" className="p-0">
                                 <DropdownItem>
                                    <User size={16} color="white" style={{color: "white"}} className="mr-1" /> My Profile
                                 </DropdownItem>
                              </Link>
                              <DropdownItem divider />
                              <Link to="/pages/login" className="danger p-0">
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Logout
                                 </DropdownItem>
                              </Link>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}

export default ThemeNavbar;
