const widget = {
    id:"",
    theme:"",
    btnBackground:"",
 }

const widgetReducer = (state = widget, action) => {  
    switch (action.type) {
      case 'SET_WIDGET':
        return action.widget
      case 'SET_WIDGET_THEME':
            return {...state, theme: action.theme}
      default:
        return state
    }
  }
  
export default widgetReducer;