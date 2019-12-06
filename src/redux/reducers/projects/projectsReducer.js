const listProjects = []; 

const ProjectsReducer = (state = listProjects, action) => {
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return action.projects
        default: 
            return state
    }
}

export default ProjectsReducer;