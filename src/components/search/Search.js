import React, { Component } from "react";
import { Input, ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Search, Globe, ChevronDown } from "react-feather";
import { connect } from 'react-redux'
import {setCurrentProject, LoadProjects} from "../../redux/actions/projects/projectsActions";
import { LoadOperators } from "../../redux/actions/operators/operatorsActions";
import { getService, getServiceOperators, getServiceWidget } from "../../utility/APIutils";
import  { Redirect } from 'react-router-dom'
import { SetWidget } from "../../redux/actions/widget/widgetActions";


class NavbarSearch extends Component {
   state = {
      dropdownOpen: false
   };
   

   constructor(props) {
      super(props);
      this.state = {
         dropdownOpen: false,
      }
      
      this.onProjectChange = this.onProjectChange.bind(this);
   }

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

   onProjectChange = (id) => {

      

      getService(id)
      .then(response => {

         this.props.setCurrent(response)
         
         
         getServiceOperators(response.id)
         .then(response => {

            this.props.getOperatorsList(response);

               getServiceWidget(this.props.currentProject.id)
               .then(response => {
         
                  this.props.handleWidget(response)
               }).catch(error => {
                     console.log("error", error);

               });
   
         }).catch(error => {
            console.log("error ", error);
         });
         

      }).catch(error => {
         console.log("error ", error);
      });

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

      

      if(this.state.setRedirect){
         return <Redirect to='/pages/dashboard'  />

      }

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
               
               <DropdownToggle className="text-left bg-light pl-0 mb-0" style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,0.06)", color:"#60848c", background: "transparent" }}>
               <div>
               <Globe size={22} className="mr-2" />  
                  <span className="">{(this.props.currentProject)?this.props.currentProject.domaine:""}</span>
                  <ChevronDown style={{marginTop:"3px"}} size={18} className="ml-3 pull-right" />  
               </div>

               </DropdownToggle>
               <DropdownMenu style={{width: "250px"}}>

                  {  (this.props.myProjects)?
                     this.props.myProjects.map((project, id) =>{
                        
                        return (
                        <DropdownItem key={id} onClick={() => {this.onProjectChange(project.id)}} className="px-2">
                            <Globe size={18} className="mr-2" /> 
                           {project.domaine}</DropdownItem>)
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
   getOperatorsList: (operators) => dispatch(LoadOperators(operators)),
   handleWidget: (widget) => dispatch(SetWidget(widget)),
   
})

 
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NavbarSearch)