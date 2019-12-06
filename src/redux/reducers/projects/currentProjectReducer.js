const currentProject = {}; 

const currentProjectReducer = (state = currentProject, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PROJECT':
            return action.project
        default: 
            return state
    }
}

export default currentProjectReducer;