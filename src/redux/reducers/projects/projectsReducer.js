const listProjects = []; 

const ProjectsReducer = (state = listProjects, action) => {
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return action.projects
        case 'ADD_PROJECT':
            return [...state, action.project]
        default:
            return state
    }
}

export default ProjectsReducer;