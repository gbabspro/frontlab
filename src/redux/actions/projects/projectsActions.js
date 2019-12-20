export const LoadProjects = (projects) => {
    
    return {
        type: 'LOAD_PROJECTS',
        projects: projects
    }
}


export const setCurrentProject = (project) => {
    
    return {
        type: 'SET_CURRENT_PROJECT',
        project: project
    }
}


export const addProject = (project) => {
    
    return {
        type: 'ADD_PROJECT',
        project
    }
}
