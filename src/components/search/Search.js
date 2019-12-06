import React, { Component } from "react";
import { Input, ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Search, Globe, ChevronDown } from "react-feather";
import { connect } from 'react-redux'
import {setCurrentProject, LoadProjects} from "../../redux/actions/projects/projectsActions"
class NavbarSearch extends Component {
   state = {
      dropdownOpen: false
   };
   
   escFunction = e => {
      if (e.keyCode === 27) {
         this.setState({
            searchTerm: "",
            filtered: []
         });
      }
   };

   toggle = () => {
      this.setState(prevState => ({
         dropdownOpen: !prevState.dropdownOpen
      }));
   }


   componentWillMount() {
      document.addEventListener("mousedown", this.handleClick, true);
   }
   componentDidMount() {
      document.addEventListener("keydown", this.escFunction, false);
      
      console.log("listprojects ", this.props);
   }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.escFunction, false);
      document.removeEventListener("mousedown", this.handleClick, false);
   }

   render() {
      let searchTerm = this.state.searchTerm;
      return (
         <div className="position-relative has-icon-right">
            {/* <Input
               
               type="text"
               
               placeholder="Try quick search"
               onChange={this.handleChange}
               value={searchTerm}
            /> */}
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
               
               <DropdownToggle className="text-left mb-0" style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,0.302)", color:"#60848c", background: "#d9dfe4", width: "250px"}}>
               <div>
               <Globe size={18} className="mr-2" />  
                  <span className="">{(this.props.currentProject)?this.props.currentProject.domaine_name:""}</span>
                  <ChevronDown size={18} className="ml-3 pull-right mt-1" />  
               </div>

               </DropdownToggle>
               <DropdownMenu style={{width: "250px"}}>

                  {  (this.props.myProjects)?
                     this.props.myProjects.map((project, id) =>{
                        
                        return (
                        <DropdownItem key={id} onClick={() => {this.props.setCurrent(project)}} className="px-2">
                            <Globe size={18} className="mr-2" /> 
                           {project.domaine_name}</DropdownItem>)
                     }):""
                  }  

               </DropdownMenu>
            </Dropdown>
{/* 
            <div className="form-control-position">
               <Search size={16} className="mb-0" />
            </div> */}
            {this.state.filtered ? (
               <div ref={node => (this.node = node)}>
                  <ListGroup className="navbar-search">
                     {this.state.filtered.map((search, i) => {
                        return (
                           <ListGroupItem key={i} className="py-1">
                              {[
                                 <Link to={`${search.url}`} className="nav-link p-0" key={i}>
                                    {search.name}
                                 </Link>
                              ]}
                           </ListGroupItem>
                        );
                     })}
                  </ListGroup>
               </div>
            ) : (
               ""
            )}
         </div>
      );
   }
}

const mapStateToProps = state => ({
   myProjects: state.projects,
   currentProject: state.currentProject
})


const mapDispatchToProps = dispatch => ({
   setCurrent: (project) => dispatch(setCurrentProject(project)),
})

 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NavbarSearch)