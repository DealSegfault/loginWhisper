const auth = (state = "", action) => {
    switch (action.type) {
    	case 'CONNECT':
        	return action.user === state ? state : action.user
    	case 'LOGOUT':
            return ""
      default:
        	return state
    }
  }
  
export default auth